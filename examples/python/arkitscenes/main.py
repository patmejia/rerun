#!/usr/bin/env python3
import argparse
import json
import os
from pathlib import Path
from typing import Any, Dict, List, Tuple

import cv2
import numpy as np
import numpy.typing as npt
import rerun as rr
import trimesh
from download_dataset import AVAILABLE_RECORDINGS, ensure_recording_available
from scipy.spatial.transform import Rotation as R
from tqdm import tqdm

# hack for now since dataset does not provide orientation information, only known after initial visual inspection
ORIENTATION = {"48458663": "landscape",
               "42444949": "portrait",
               "41069046": "portrait",
               "41125722": "portrait",
               "41125763": "portrait" }
assert len(ORIENTATION) == len(AVAILABLE_RECORDINGS)
assert set(ORIENTATION.keys()) == set(AVAILABLE_RECORDINGS)


def load_json(js_path: Path) -> Dict[str, Any]:
    with open(js_path, "r") as f:
        json_data = json.load(f)
    return dict(json_data)


def log_annotated_bboxes(annotation: Dict[str, Any]) -> npt.NDArray[np.float64]:
    """
    Logs annotated bounding boxes to Rerun.

    annotation json file
    |  |-- label: object name of bounding box
    |  |-- axesLengths[x, y, z]: size of the origin bounding-box before transforming
    |  |-- centroid[]: the translation matrix 1*3of bounding-box
    |  |-- normalizedAxes[]: the rotation matrix 3*3 of bounding-box
    """
    # TODO(pablovela5620): Once #1581 is resolved log bounding boxes into camera view`
    bbox_list = []
    bbox_labels = []
    for label_info in annotation["data"]:
        object_id = label_info["objectId"]
        label = label_info["label"]

        scale = np.array(label_info["segments"]["obbAligned"]["axesLengths"]).reshape(-1, 3)[0]
        transform = np.array(label_info["segments"]["obbAligned"]["centroid"]).reshape(-1, 3)[0]
        rotation = np.array(label_info["segments"]["obbAligned"]["normalizedAxes"]).reshape(3, 3)

        box3d = compute_box_3d(scale.reshape(3).tolist(), transform, rotation)
        bbox_list.append(box3d)
        bbox_labels.append(label)

        rot = R.from_matrix(rotation).inv()

        rr.log_obb(
            f"world/annotations/box-{object_id}-{label}",
            half_size=scale,
            position=transform,
            rotation_q=rot.as_quat(),
            label=label,
            timeless=True,
            )
    bbox_list = np.array(bbox_list)
    return bbox_list, bbox_labels


def compute_box_3d(scale, transform, rotation):
    """Given obb compute 3d keypoints of the box."""

    scales = [i / 2 for i in scale]
    l, h, w = scales
    center = np.reshape(transform, (-1, 3))
    center = center.reshape(3)
    x_corners = [l, l, -l, -l, l, l, -l, -l]
    y_corners = [h, -h, -h, h, h, -h, -h, h]
    z_corners = [w, w, w, w, -w, -w, -w, -w]
    corners_3d = np.dot(np.transpose(rotation),
                        np.vstack([x_corners, y_corners, z_corners]))

    corners_3d[0, :] += center[0]
    corners_3d[1, :] += center[1]
    corners_3d[2, :] += center[2]
    bbox3d_raw = np.transpose(corners_3d)
    return bbox3d_raw

def generate_line_segments(path, bboxes_2d_filtered: np.ndarray) -> None:
    """
    Generates line segments for each object's bounding box.

    :param bboxes_2d_filtered: A numpy array of shape (8, 2), representing the filtered 2D keypoints of the 3D bounding boxes.
    :return: A numpy array of shape (24, 2), representing the line segments for each object's bounding boxes.
    """

    '''
    Box corner order that we return is of the format below:
      6 -------- 7
     /|         /|
    5 -------- 4 .
    | |        | |
    . 2 -------- 3
    |/         |/
    1 -------- 0
    '''
    segments = np.array([
        # bottom of bbox
        bboxes_2d_filtered[0], bboxes_2d_filtered[1],
        bboxes_2d_filtered[1], bboxes_2d_filtered[2],
        bboxes_2d_filtered[2], bboxes_2d_filtered[3],
        bboxes_2d_filtered[3], bboxes_2d_filtered[0],

        # top of bbox
        bboxes_2d_filtered[4], bboxes_2d_filtered[5],
        bboxes_2d_filtered[5], bboxes_2d_filtered[6],
        bboxes_2d_filtered[6], bboxes_2d_filtered[7],
        bboxes_2d_filtered[7], bboxes_2d_filtered[4],

        # sides of bbox
        bboxes_2d_filtered[0], bboxes_2d_filtered[4],
        bboxes_2d_filtered[1], bboxes_2d_filtered[5],
        bboxes_2d_filtered[2], bboxes_2d_filtered[6],
        bboxes_2d_filtered[3], bboxes_2d_filtered[7]
                         ], dtype=np.float32)

    rr.log_line_segments(path, segments, color=[130, 160, 250, 255])

def project_3d_bboxes_to_2d_keypoints(
    bboxes_3d: npt.NDArray[np.float64],
    camera_from_world: Tuple[npt.NDArray[np.float64], npt.NDArray[np.float64]],
    intrinsic: npt.NDArray[np.float64],
    img_width: int,
    img_height: int
    ) -> npt.NDArray[np.float64]:
    """
    Returns 2D keypoints of the 3D bounding box in the camera view.

    camera_from world:
        Tuple of translation and rotation quaternion, translation is of shape (3,) and rotation is of shape (4,)
    """

    translation, rotation_q = camera_from_world
    rotation = R.from_quat(rotation_q)

    # Transform 3D keypoints from world to camera frame
    # world_to_camera_rotation = np.linalg.inv(rotation.as_matrix())
    world_to_camera_rotation = rotation.as_matrix()
    # convert to transformation matrix
    world_to_camera = np.hstack([world_to_camera_rotation, translation.reshape(3, 1)])
    world_to_camera = intrinsic @ world_to_camera
    # world_to_camera = np.vstack([world_to_camera, np.array([0, 0, 0, 1])])
    # add batch dimension to match bounding box shape
    world_to_camera = np.tile(world_to_camera, (bboxes_3d.shape[0], 1, 1))
    # bboxes_3d: [nObjects, 21, 4] [x, y, z, 1]
    bboxes_3d = np.concatenate([bboxes_3d, np.ones((bboxes_3d.shape[0], bboxes_3d.shape[1], 1))], axis=-1)
    # batch projection using einsum
    point_cam = np.einsum('vab,fnb->vfna', world_to_camera, bboxes_3d)
    bboxes_2d = point_cam[..., :2]/point_cam[..., 2:]
    # nViews irrelevant, squeeze out
    bboxes_2d = bboxes_2d[0]

    # Filter out keypoints that are not within the frame
    mask_x = (bboxes_2d[:, :, 0] >= 0) & (bboxes_2d[:, :, 0] < img_width)
    mask_y = (bboxes_2d[:, :, 1] >= 0) & (bboxes_2d[:, :, 1] < img_height)
    mask = mask_x & mask_y
    # bboxes_2d_filtered = bboxes_2d[mask]
    bboxes_2d_filtered = np.where(mask[..., np.newaxis], bboxes_2d, np.nan)

    return bboxes_2d_filtered


def log_camera(
    intri_path: Path,
    frame_id: str,
    poses_from_traj: Dict[str, Tuple[npt.NDArray[np.float64], npt.NDArray[np.float64]]],
    entity_id: str,
    bboxes: npt.NDArray[np.float64],
    bbox_labels: List[str],
    ) -> None:
    """Logs camera intrinsics and extrinsics to Rerun."""
    w, h, fx, fy, cx, cy = np.loadtxt(intri_path)
    intrinsic = np.array([[fx, 0, cx], [0, fy, cy], [0, 0, 1]])
    camera_from_world = poses_from_traj[frame_id]

    # Project 3D bounding boxes into 2D image
    bboxes_2d = project_3d_bboxes_to_2d_keypoints(bboxes, camera_from_world, intrinsic, img_width=w, img_height=h)
    for i, bbox_2d in zip(bbox_labels, bboxes_2d):
        # rr.log_points(f"{entity_id}/image/bbox-2d/{i}", bbox_2d.reshape(-1, 2))
        generate_line_segments(f"{entity_id}/image/bbox-2d-segments/{i}", bbox_2d.reshape(-1, 2))



    rr.log_rigid3(
        entity_id,
        child_from_parent=camera_from_world,
        xyz="RDF",  # X=Right, Y=Down, Z=Forward
    )
    rr.log_pinhole(f"{entity_id}/image", child_from_parent=intrinsic, width=w, height=h)


def read_camera_from_world(traj_string: str) -> Tuple[str, Tuple[npt.NDArray[np.float64], npt.NDArray[np.float64]]]:
    """
    Reads out camera_from_world transform from trajectory string.

    Args:
        traj_string: A space-delimited file where each line represents a camera position at a particular timestamp.
            The file has seven columns:
            * Column 1: timestamp
            * Columns 2-4: rotation (axis-angle representation in radians)
            * Columns 5-7: translation (usually in meters)

    Returns
    -------
    timestamp: float
        timestamp in seconds
    camera_from_world: tuple of two numpy arrays
        A tuple containing a translation vector and a quaternion that represent the camera_from_world transform

    Raises
    ------
        AssertionError: If the input string does not contain 7 tokens.
    """
    tokens = traj_string.split()  # Split the input string into tokens
    assert len(tokens) == 7, f"Input string must have 7 tokens, but found {len(tokens)}."
    ts: str = tokens[0]  # Extract timestamp from the first token

    # Extract rotation from the second to fourth tokens
    angle_axis = [float(tokens[1]), float(tokens[2]), float(tokens[3])]
    rotation = R.from_rotvec(np.asarray(angle_axis))

    # Extract translation from the fifth to seventh tokens
    translation = np.asarray([float(tokens[4]), float(tokens[5]), float(tokens[6])])

    # Create tuple in format log_rigid3 expects
    camera_from_world = (translation, rotation.as_quat())

    return (ts, camera_from_world)



def find_closest_frame_id(target_id: str, frame_ids: Dict[str, Any]) -> str:
    """Finds the closest frame id to the target id."""
    target_value = float(target_id)
    closest_id = min(frame_ids.keys(), key=lambda x: abs(float(x) - target_value))
    return closest_id

def log_arkit(recording_path: Path) -> None:
    """
    Logs ARKit recording data using Rerun.

    Args:
        recording_path (Path): The path to the ARKit recording.

    Returns
    -------
        None
    """
    video_id = recording_path.stem
    lowres_image_dir = recording_path / "lowres_wide"
    image_dir = recording_path / "wide"
    lowres_depth_dir = recording_path / "lowres_depth"
    depth_dir = recording_path / "highres_depth"
    lowres_intrinsics_dir = recording_path / "lowres_wide_intrinsics"
    intrinsics_dir = recording_path / "wide_intrinsics"
    traj_path = recording_path / "lowres_wide.traj"

    # frame_ids are indexed by timestamps, you can see more info here
    # https://github.com/apple/ARKitScenes/blob/main/threedod/README.md#data-organization-and-format-of-input-data
    depth_filenames = [x.name for x in sorted(lowres_depth_dir.iterdir())]
    lowres_frame_ids = [x.split(".png")[0].split("_")[1] for x in depth_filenames]
    lowres_frame_ids.sort()

    # dict of timestamp to pose which is a tuple of translation and quaternion
    poses_from_traj = {}
    with open(traj_path, "r", encoding="utf-8") as f:
        trajectory = f.readlines()

    for line in trajectory:
        timestamp, camera_from_world = read_camera_from_world(line)
        # round timestamp to 3 decimal places as seen in the original repo here
        # https://github.com/apple/ARKitScenes/blob/e2e975128a0a9695ea56fa215fe76b4295241538/threedod/benchmark_scripts/utils/tenFpsDataLoader.py#L247
        timestamp = f"{round(float(timestamp), 3):.3f}"
        poses_from_traj[timestamp] = camera_from_world

    rr.log_view_coordinates("world", up="+Z", right_handed=True, timeless=True)
    ply_path = recording_path / f"{recording_path.stem}_3dod_mesh.ply"
    print(f"Loading {ply_path}…")
    assert os.path.isfile(ply_path), f"Failed to find {ply_path}"

    mesh_ply = trimesh.load(str(ply_path))
    rr.log_mesh(
        "world/mesh",
        positions=mesh_ply.vertices,
        indices=mesh_ply.faces,
        vertex_colors=mesh_ply.visual.vertex_colors,
        timeless=True,
    )

    bbox_annotations_path = recording_path / f"{recording_path.stem}_3dod_annotation.json"
    annotation = load_json(bbox_annotations_path)
    bboxes, bbox_labels = log_annotated_bboxes(annotation)

    # To avoid logging image frames in the beginning that dont' have a trajectory
    # This causes the camera to expand in the beginning otherwise
    init_traj_found = False
    lowres_entity_id = "world/camera_lowres"
    highres_entity_id = "world/camera_highres"
    print("Processing frames…")
    for frame_id in tqdm(lowres_frame_ids):
        rr.set_time_seconds("time", float(frame_id))
        # load the lowres image and depth
        bgr = cv2.imread(f"{lowres_image_dir}/{video_id}_{frame_id}.png")
        depth = cv2.imread(f"{lowres_depth_dir}/{video_id}_{frame_id}.png", cv2.IMREAD_ANYDEPTH)

        high_res_exists:bool = (image_dir / f"{video_id}_{frame_id}.png").exists()

        # Log the camera transforms:
        if frame_id in poses_from_traj:
            if not init_traj_found:
                init_traj_found = True
            # only low res camera has a trajectory, high res does not
            lowres_intri_path = lowres_intrinsics_dir / f"{video_id}_{frame_id}.pincam"
            log_camera(lowres_intri_path, frame_id, poses_from_traj, lowres_entity_id, bboxes, bbox_labels)

        if not init_traj_found:
            continue

        rgb = cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB)
        rr.log_image(f"{lowres_entity_id}/image/rgb", rgb)
        # TODO(pablovela5620): no clear way to change colormap for depth via log function
        rr.log_depth_image(f"{lowres_entity_id}/image/depth", depth, meter=1000)

        if high_res_exists:
            rr.set_time_seconds("time high resolution", float(frame_id))
            closest_lowres_frame_id = find_closest_frame_id(frame_id, poses_from_traj)
            highres_intri_path = intrinsics_dir / f"{video_id}_{frame_id}.pincam"
            log_camera(highres_intri_path, closest_lowres_frame_id, poses_from_traj, highres_entity_id, bboxes, bbox_labels)

            # load the highres image and depth if they exist
            highres_bgr = cv2.imread(f"{image_dir}/{video_id}_{frame_id}.png")
            highres_depth = cv2.imread(f"{depth_dir}/{video_id}_{frame_id}.png", cv2.IMREAD_ANYDEPTH)

            highres_rgb = cv2.cvtColor(highres_bgr, cv2.COLOR_BGR2RGB)
            rr.log_image(f"{highres_entity_id}/image/rgb", highres_rgb)
            rr.log_depth_image(f"{highres_entity_id}/image/depth", highres_depth, meter=1000)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Logs rich data using the Rerun SDK.")
    parser.add_argument(
        "--video-id",
        type=str,
        choices=AVAILABLE_RECORDINGS,
        default=AVAILABLE_RECORDINGS[0],
        help="Video ID of the ARKitScenes Dataset",
    )
    rr.script_add_args(parser)
    args = parser.parse_args()

    rr.script_setup(args, "arkitscenes")
    recording_path = dir = ensure_recording_available(args.video_id)
    log_arkit(recording_path)

    rr.script_teardown(args)
