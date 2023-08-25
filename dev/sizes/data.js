window.BENCHMARK_DATA = {
  "lastUpdate": 1692978974575,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Sizes": [
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f2aaca1a51895bdec304bb480d261c3ccc8af38",
          "message": "Silence RUSTSEC for now (#3069)\n\nSee diff\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3069) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3069)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aemilk%2Fsilence-rustsec/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aemilk%2Fsilence-rustsec/examples)\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-22T16:41:39+02:00",
          "tree_id": "6bdf98a322404e5c75823915d5ec6dbf900ca646",
          "url": "https://github.com/rerun-io/rerun/commit/2f2aaca1a51895bdec304bb480d261c3ccc8af38"
        },
        "date": 1692717613198,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.499",
            "unit": "MB"
          },
          {
            "name": "JS",
            "value": "107.698",
            "unit": "KB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "41657.885",
            "unit": "KB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "59526.229",
            "unit": "KB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "64877.032",
            "unit": "KB"
          },
          {
            "name": "dna.rrd",
            "value": "784.061",
            "unit": "KB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "56959.359",
            "unit": "KB"
          },
          {
            "name": "plots.rrd",
            "value": "257.137",
            "unit": "KB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "7080.507",
            "unit": "KB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1665677+jprochazk@users.noreply.github.com",
            "name": "Jan Procházka",
            "username": "jprochazk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ffe697c1e1f00d29ce23899370cd849eac083f7",
          "message": "Fix docs previews (#3066)\n\n<!--\r\nOpen the PR up as a draft until you feel it is ready for a proper\r\nreview.\r\n\r\nDo not make PR:s from your own `main` branch, as that makes it difficult\r\nfor reviewers to add their own fixes.\r\n\r\nAdd any improvements to the branch as new commits to make it easier for\r\nreviewers to follow the progress. All commits will be squashed to a\r\nsingle commit once the PR is merged into `main`.\r\n\r\nMake sure you mention any issues that this PR closes in the description,\r\nas well as any other related issues.\r\n\r\nTo get an auto-generated PR description you can put \"copilot:summary\" or\r\n\"copilot:walkthrough\" anywhere.\r\n-->\r\n\r\n### What\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3066) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3066)\r\n- [Docs\r\npreview](https://rerun.io/preview/3cce806effedb60b1b359835a69ab9b38cdf0463/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/3cce806effedb60b1b359835a69ab9b38cdf0463/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-22T17:57:37+02:00",
          "tree_id": "c8064ac915a722c41cdd795d78529a30a2bef026",
          "url": "https://github.com/rerun-io/rerun/commit/1ffe697c1e1f00d29ce23899370cd849eac083f7"
        },
        "date": 1692722114957,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.56",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "109.99",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.35",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.22",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "55.58",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.83",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49431240+abey79@users.noreply.github.com",
            "name": "Antoine Beyeler",
            "username": "abey79"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e210793edf1f7c4d9d9102ddd1a49fd9d92a6076",
          "message": "Show Welcome Screen after closing recording even with `--skip-welcome-screen` (#3035)\n\n### What\r\n\r\nFixes #3018 \r\n\r\n\r\nhttps://github.com/rerun-io/rerun/assets/49431240/af2d69e0-921d-4f11-8ca0-b6f6957f7599\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3035) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3035)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aantoine%2Foverride-skip-welcome-screen/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aantoine%2Foverride-skip-welcome-screen/examples)",
          "timestamp": "2023-08-22T18:34:40+02:00",
          "tree_id": "1adbf07db4ee29cdcf4ad7eae70e4e0279d92f7f",
          "url": "https://github.com/rerun-io/rerun/commit/e210793edf1f7c4d9d9102ddd1a49fd9d92a6076"
        },
        "date": 1692723717232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.56",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "109.99",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.35",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.22",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "55.58",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.83",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1665677+jprochazk@users.noreply.github.com",
            "name": "Jan Procházka",
            "username": "jprochazk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56a78908cbece4e54c15542962e0df49317c7015",
          "message": "Fix link previews (part 2) (#3073)\n\n<!--\r\nOpen the PR up as a draft until you feel it is ready for a proper\r\nreview.\r\n\r\nDo not make PR:s from your own `main` branch, as that makes it difficult\r\nfor reviewers to add their own fixes.\r\n\r\nAdd any improvements to the branch as new commits to make it easier for\r\nreviewers to follow the progress. All commits will be squashed to a\r\nsingle commit once the PR is merged into `main`.\r\n\r\nMake sure you mention any issues that this PR closes in the description,\r\nas well as any other related issues.\r\n\r\nTo get an auto-generated PR description you can put \"copilot:summary\" or\r\n\"copilot:walkthrough\" anywhere.\r\n-->\r\n\r\n### What\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3073) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3073)\r\n- [Docs\r\npreview](https://rerun.io/preview/e3f65bfab3f8192853f1942fc070c5c3689fb464/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/e3f65bfab3f8192853f1942fc070c5c3689fb464/examples)\r\n<!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-22T18:57:23+02:00",
          "tree_id": "7364b48ad2fae82cfba0641dcf9569c354428629",
          "url": "https://github.com/rerun-io/rerun/commit/56a78908cbece4e54c15542962e0df49317c7015"
        },
        "date": 1692724952899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.56",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "109.99",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.35",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.22",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "55.58",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.83",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a9e60c31b2aa4635217894b63950f9f4fe01997",
          "message": "Name the rayon threads (#3060)\n\nThe names show up in crash logs, debuggers, the puffin profiler, etc\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3060) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3060)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aemilk%2Fname-rayon-threads/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aemilk%2Fname-rayon-threads/examples)\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-22T20:56:49+02:00",
          "tree_id": "954965ad633e4b448da30d5d3fc3b26b0e2fed3f",
          "url": "https://github.com/rerun-io/rerun/commit/0a9e60c31b2aa4635217894b63950f9f4fe01997"
        },
        "date": 1692732811408,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.56",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "109.99",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.36",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.22",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.35",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "55.58",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.18",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.83",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6db856af4cc28d4ba6ac4f1e348431d6fe1578fd",
          "message": "Improve error message in common `re_renderer` crash (#3070)\n\nHere is a reproduce:\r\n\r\n```diff\r\n--- a/examples/rust/clock/src/main.rs\r\n+++ b/examples/rust/clock/src/main.rs\r\n@@ -77,7 +77,7 @@ fn run(rec_stream: &RecordingStream, args: &Args) -> anyhow::Result<()> {\r\n             .with_component(&[color])?\r\n             .send(rec_stream)?;\r\n         MsgSender::new(format!(\"world/{name}_hand\"))\r\n-            .with_component(&[Vector3D::from(pos)])?\r\n+            .with_component(&[Vector3D::from(pos); 65537])?\r\n             .with_component(&[color])?\r\n             .with_component(&[Radius(width * 0.5)])?\r\n             .send(rec_stream)?;\r\n```\r\n\r\nWe are hitting `LineDrawData::MAX_NUM_STRIPS`.\r\n\r\nIt's really bad if it is the case that hitting an upper limit crashes\r\nthe viewer 😭\r\n\r\n\r\n----\r\n\r\nIn 0.8.1 we have 21 users crashing in\r\n`re_renderer-0.8.0/src/allocator/cpu_write_gpu_read_belt.rs:87`\r\nCallstack:\r\n\r\n```\r\n   8: <re_renderer::line_strip_builder::LineStripBuilder as core::ops::drop::Drop>::drop\r\n   9: re_space_view_spatial::parts::arrows3d::Arrows3DPart::process_entity_view\r\n  10: re_space_view_spatial::parts::entity_iterator::process_entity_views\r\n  11: <re_space_view_spatial::parts::arrows3d::Arrows3DPart as re_viewer_context::space_view::view_part_system::ViewPartSystem>::execute\r\n  12: re_viewer_context::space_view::space_view_class::<impl re_viewer_context::space_view::dyn_space_view_class::DynSpaceViewClass for T>::ui\r\n  13: core::ops::function::FnOnce::call_once{{vtable.shim}}\r\n```\r\n\r\n`Arrows3DPart` is using `LineBatchBuilder`.\r\n`LineBatchBuilder::add_segment` returns a `LineStripBuilder`\r\n`LineStripBuilder::drop` calls `CpuWriteGpuReadBuffer::extend` which\r\ncalls\r\n`CpuWriteGpuReadBuffer::push` which crashes because the\r\n`CpuWriteGpuReadBuffer` is full\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/{{\r\npr.number }}) (if applicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/{{ pr.number }})\r\n- [Docs preview](https://rerun.io/preview/{{\r\n\"pr:%s\"|format(pr.branch)|encode_uri_component }}/docs)\r\n- [Examples preview](https://rerun.io/preview/{{\r\n\"pr:%s\"|format(pr.branch)|encode_uri_component }}/examples)\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-22T22:17:37+02:00",
          "tree_id": "d12bda3df671e9b814f19f5993e15d40d38f8d87",
          "url": "https://github.com/rerun-io/rerun/commit/6db856af4cc28d4ba6ac4f1e348431d6fe1578fd"
        },
        "date": 1692736919050,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.57",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "109.99",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.35",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.22",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "55.58",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.83",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4bc05e5d6cbf22f2a868b96fd9c87a5305257f26",
          "message": "Fix quadratic slowdown when ingesting data with uniform time (#3088)\n\n### What\r\n* Closes https://github.com/rerun-io/rerun/issues/3086\r\n* Closes https://github.com/rerun-io/rerun/issues/433\r\n\r\nThis should also overall just speed up data insertion for the common\r\ncase of already-sorted data\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3088) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3088)\r\n- [Docs\r\npreview](https://rerun.io/preview/e5adb1aa580de2274b4eca9f6c5de38ae503b521/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/e5adb1aa580de2274b4eca9f6c5de38ae503b521/examples)\r\n<!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-23T14:39:50+02:00",
          "tree_id": "68ec2fd9a23f925c3f9ef496ba0b1587f6b02b41",
          "url": "https://github.com/rerun-io/rerun/commit/4bc05e5d6cbf22f2a868b96fd9c87a5305257f26"
        },
        "date": 1692795916497,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.57",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "109.99",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.35",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.22",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "55.58",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.83",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3582a5567cd740ceb186e04008463b8a31a12481",
          "message": "Fix GitHub labels used in our weekly releases (#3061)\n\nSee https://github.com/rerun-io/rerun/pull/3057:\r\n\r\n<img width=\"617\" alt=\"image\"\r\nsrc=\"https://github.com/rerun-io/rerun/assets/1148717/140bebd8-fbd7-4354-ba7b-af574f9e4608\">\r\n\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3061) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3061)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aemilk%2Ffix-weekly-release-labels/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aemilk%2Ffix-weekly-release-labels/examples)\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)\r\n\r\n---------\r\n\r\nCo-authored-by: Jan Procházka <1665677+jprochazk@users.noreply.github.com>",
          "timestamp": "2023-08-23T15:13:13+02:00",
          "tree_id": "f963ebbf98ad641d0a5162f4815b23f115167f23",
          "url": "https://github.com/rerun-io/rerun/commit/3582a5567cd740ceb186e04008463b8a31a12481"
        },
        "date": 1692797977737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.57",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "109.99",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.35",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.22",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "55.58",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.83",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f415cbd2d10412a4678f3694147694ecb37f3a6a",
          "message": "Remove unused profiling macros (#3090)\n\n### What\r\nThese were forgotten when `re_tracing` was created!?\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3090) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3090)\r\n- [Docs\r\npreview](https://rerun.io/preview/e9943df41dd51a5d702e4d39162cbf68b600dd83/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/e9943df41dd51a5d702e4d39162cbf68b600dd83/examples)\r\n<!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-24T17:58:02+02:00",
          "tree_id": "85e03269ce4167c7a31470dddc80b631d0a2100c",
          "url": "https://github.com/rerun-io/rerun/commit/f415cbd2d10412a4678f3694147694ecb37f3a6a"
        },
        "date": 1692894863887,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.57",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "109.99",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.35",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.22",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "55.58",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.83",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f6b87b2478bb1affb7b472b39643d377e86a760",
          "message": "Normalize quaternions (#3094)\n\n### What\r\nWithout normalizing quaternions, the cameras.rs scene part could end up\r\ndetermining that a quaternion is not iso, resulting in unexpextedly\r\nfailing to show the view frustum.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3094) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3094)\r\n- [Docs\r\npreview](https://rerun.io/preview/596b11c21a3d8470ddba00d4c24aef965b45869a/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/596b11c21a3d8470ddba00d4c24aef965b45869a/examples)\r\n<!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-24T18:18:40+02:00",
          "tree_id": "31b4f3ee20d5bef1bf498bbf8c7701047eea9eef",
          "url": "https://github.com/rerun-io/rerun/commit/1f6b87b2478bb1affb7b472b39643d377e86a760"
        },
        "date": 1692895604843,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.57",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "109.99",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.35",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.22",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "55.58",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.83",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82cbbce89721c3aaa96778d137b538d395888675",
          "message": "Lint: Use `…` instead of `...` (#3100)\n\n### What\r\nThe ellipsis character `…` should be used in GUIs and docs instead of\r\nthe similar-looking `...`. The former looks better over all, and the\r\nlatter can have a linebreak inserted in the middle of it which doesn't\r\nlook great. It is also for consistency.\r\n\r\nIdeally we would only lint strings in Rust using something like\r\nhttps://github.com/trailofbits/dylint but I'll leave that as an exercise\r\nfor later 😬\r\n\r\nFor our developers: I suggest you figure out how to type `…` quickly on\r\nyour keyboard. On my Mac I press `⌥;` (but I can't remember if that is\r\nsomething special I've configured…)\r\n\r\nThis one is for you @martenbjork \r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3100) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3100)\r\n- [Docs\r\npreview](https://rerun.io/preview/9de65e45790b192899248abe12d1a7b43b1ca488/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/9de65e45790b192899248abe12d1a7b43b1ca488/examples)\r\n<!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-25T09:36:24+02:00",
          "tree_id": "c0108726fe8dd8beb675ddb1b76766ffee3f2562",
          "url": "https://github.com/rerun-io/rerun/commit/82cbbce89721c3aaa96778d137b538d395888675"
        },
        "date": 1692950859987,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.57",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "109.99",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.35",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.22",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "55.58",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.83",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2c982a1cdf748afb4485ac697f61d4048273f48",
          "message": "Fix crash on reaching line number limit (#3093)\n\n### What\r\n\r\n* Fixes: #3075\r\n* Related to: #3076\r\n\r\nThe second commit is the actual fix. But to avoid this family of\r\ncrashes, the cpuwritegpuread belt now always does error checks and\r\nreturns errors instead of paniking\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3093) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3093)\r\n- [Docs\r\npreview](https://rerun.io/preview/b6b737939d3219b0ca32e763d7276b5ca0d504ee/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/b6b737939d3219b0ca32e763d7276b5ca0d504ee/examples)\r\n<!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-25T10:49:28+02:00",
          "tree_id": "47807e074d497f1a7f9fad2f8baa05dca3d2c609",
          "url": "https://github.com/rerun-io/rerun/commit/c2c982a1cdf748afb4485ac697f61d4048273f48"
        },
        "date": 1692955019562,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.57",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "109.99",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.35",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.22",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "55.58",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.83",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "204e2e353cff829fc52f356d3b428cd767853857",
          "message": "Update resolved analytics URL (#3101)\n\nIt's now `tel.rerun.io` all the way.\r\n\r\n```\r\ncurl -Lv http://tel.rerun.io 2>&1 | rg Location:\r\n< Location: https://tel.rerun.io:443/\r\n```\r\n\r\n### What\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/{{\r\npr.number }}) (if applicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/{{ pr.number }})\r\n- [Docs preview](https://rerun.io/preview/{{ pr.commit }}/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples preview](https://rerun.io/preview/{{ pr.commit }}/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-25T11:50:37+02:00",
          "tree_id": "10d5eb16fcda15fba61069b6968e912d8e827b25",
          "url": "https://github.com/rerun-io/rerun/commit/204e2e353cff829fc52f356d3b428cd767853857"
        },
        "date": 1692958674865,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.57",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "109.99",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.35",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.22",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "55.58",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.83",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "effb72ba15e9faaafcab2c4874e2b287f1e01d5f",
          "message": "Optimize big point clouds by ~20% (#3108)\n\n### What\r\nAdd more profile scopes. Use slices instead of iterators.\r\n\r\n`cargo rerun ../opf.rrd --profile`, looking at only 3D view.\r\n\r\nFull frame goes from 79ms -> 63ms = 20% faster.\r\n\r\nBefore:\r\n<img width=\"1744\" alt=\"image\"\r\nsrc=\"https://github.com/rerun-io/rerun/assets/1148717/92e88b70-0576-422b-ac11-18e2f02a5c0e\">\r\n\r\n\r\nAfter:\r\n<img width=\"1743\" alt=\"image\"\r\nsrc=\"https://github.com/rerun-io/rerun/assets/1148717/5f0c63ca-2d42-48ef-93da-6a0ac65b4314\">\r\n\r\n\r\n\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3108) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3108)\r\n- [Docs\r\npreview](https://rerun.io/preview/35686108acefad4130b9a44539d8638f50cd6446/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/35686108acefad4130b9a44539d8638f50cd6446/examples)\r\n<!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-25T16:38:40+02:00",
          "tree_id": "b88ee81d1df603d74d1d0234b8e66b68eb22ffe7",
          "url": "https://github.com/rerun-io/rerun/commit/effb72ba15e9faaafcab2c4874e2b287f1e01d5f"
        },
        "date": 1692976366223,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.58",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "109.99",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.35",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.22",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "55.58",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.83",
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c332626e4850f573de44264ae83908e206cb495",
          "message": "Rust 1.72 + format `let-else` (!) (#3102)\n\nWoohoo\r\n\r\n### What\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3102) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3102)\r\n- [Docs\r\npreview](https://rerun.io/preview/c72d547fb67e2a6b678bef8c757c4ea84416d675/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/c72d547fb67e2a6b678bef8c757c4ea84416d675/examples)\r\n<!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW--><!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\nCo-authored-by: Antoine Beyeler <antoine@rerun.io>\r\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>",
          "timestamp": "2023-08-25T17:22:42+02:00",
          "tree_id": "72e719a1f0b2bdc205f3820dfe39727cc61d5874",
          "url": "https://github.com/rerun-io/rerun/commit/4c332626e4850f573de44264ae83908e206cb495"
        },
        "date": 1692978965999,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "13.73",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "109.93",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.35",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.22",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "55.58",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.83",
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}