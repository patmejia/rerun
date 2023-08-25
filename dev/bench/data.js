window.BENCHMARK_DATA = {
  "lastUpdate": 1692977891509,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
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
          "id": "2c0d2f3e2db2989499c0019d8d35d29ac63b0221",
          "message": "C/C++ errorhandling (#3001)\n\n### What\r\n\r\nIntroduces error handling to C/C++.\r\n* C status object\r\n* utilities for dealing safely with pointers in rerun_c and exposing any\r\nerrors on the way\r\n* C++ wrapper with configurable logging\r\n* bunch of tests for various error cases on recording stream (not 100%\r\ncoverage but deemed \"good enough\")\r\n* depend on loguru in tests but not in the sdk itself\r\n\r\nMissing (and already in the works!) is a custom result type that will\r\nallow us to remove dependency on arrow status/result which right now\r\ndoesn't translate to `rerun::Status`\r\n\r\n* Part of https://github.com/rerun-io/rerun/issues/2919\r\n* Almost solves https://github.com/rerun-io/rerun/issues/2917\r\n* Prerequisite for https://github.com/rerun-io/rerun/issues/2873\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3001) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3001)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aandreas%2Fcpp%2Ferrorhandling/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aandreas%2Fcpp%2Ferrorhandling/examples)",
          "timestamp": "2023-08-17T13:26:14+02:00",
          "tree_id": "ce0fd70001d4528de6caa6c6c96166fb5b99861e",
          "url": "https://github.com/rerun-io/rerun/commit/2c0d2f3e2db2989499c0019d8d35d29ac63b0221"
        },
        "date": 1692272364659,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2814584,
            "range": "± 5856",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 333,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 241,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 352,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2852889,
            "range": "± 28995",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1749191,
            "range": "± 18767",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20750928,
            "range": "± 236174",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 132921145,
            "range": "± 947358",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166967168,
            "range": "± 1008269",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 336475254,
            "range": "± 1383945",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 209413328,
            "range": "± 1315360",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 53873395,
            "range": "± 700815",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 283706193,
            "range": "± 813319",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16460249,
            "range": "± 26360",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3092777,
            "range": "± 7837",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 463368,
            "range": "± 1285",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20687955,
            "range": "± 65706",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 416782,
            "range": "± 1081",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5532056,
            "range": "± 5735",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 6005320,
            "range": "± 7708",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 204468,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5427,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 88743,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 306791,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37811,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2088,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41424,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1755040772,
            "range": "± 4607744",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 808817,
            "range": "± 800",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1132702,
            "range": "± 7277",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7595,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24206,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 296456,
            "range": "± 1390",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1727820326,
            "range": "± 5532988",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1174270,
            "range": "± 5608",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1753495305,
            "range": "± 4478733",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1171983,
            "range": "± 6010",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1131221,
            "range": "± 4479",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10963,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1144592,
            "range": "± 29863",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33743,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "1a371333bfa24e19fb2fcd2d2bb2ca49bcea63f6",
          "message": "C++ custom result type used for serialization results (#3005)\n\n* Depends on https://github.com/rerun-io/rerun/pull/3001\r\n* Part of https://github.com/rerun-io/rerun/issues/2919\r\n* Fixes https://github.com/rerun-io/rerun/issues/2917\r\n* Solves a big chunk of https://github.com/rerun-io/rerun/issues/2873\r\n\r\n### What\r\n\r\nIntroduces a very simple `rerun::Result`. I decided to keep it **a lot**\r\nmore simple than the arrow Result type and refrained from the typical\r\n\"return or assign\" etc. macro since I noticed that they get quite\r\ncomplicated quickly.\r\n\r\nThe idea is that the rerun result type won't be needed by a lot of\r\nmanual code, so erring on the too lightweight side should be in our\r\nfavor.\r\n\r\nWe use this now accross the entire public serialization path - meaning\r\nthat once we move out array->arrow serialization helper into separate\r\nheaders we should be pretty much done with not exposing arrow headers!\r\n\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3005) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3005)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aandreas%2Fcpp%2Fcustom-result-type/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aandreas%2Fcpp%2Fcustom-result-type/examples)",
          "timestamp": "2023-08-17T14:35:30+02:00",
          "tree_id": "b9510486f32abb222a6a875c776ef4e00daaa188",
          "url": "https://github.com/rerun-io/rerun/commit/1a371333bfa24e19fb2fcd2d2bb2ca49bcea63f6"
        },
        "date": 1692276625515,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2802987,
            "range": "± 7771",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 341,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 241,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 358,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2827722,
            "range": "± 9483",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1748638,
            "range": "± 5274",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 21985462,
            "range": "± 1143765",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137789551,
            "range": "± 1745722",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 172966869,
            "range": "± 912782",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 342164932,
            "range": "± 1667684",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 216371791,
            "range": "± 1831794",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 59960231,
            "range": "± 3479945",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 293770168,
            "range": "± 1721008",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16581380,
            "range": "± 756197",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3131162,
            "range": "± 20941",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 487411,
            "range": "± 1556",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21548411,
            "range": "± 725375",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 416509,
            "range": "± 1019",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5488852,
            "range": "± 16709",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5964285,
            "range": "± 25049",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 204608,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5442,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 88624,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 309355,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39192,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2135,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43054,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1749159884,
            "range": "± 17519258",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 814922,
            "range": "± 3093",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1132914,
            "range": "± 5789",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7635,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24209,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 294217,
            "range": "± 723",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1888125952,
            "range": "± 4721892",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1192257,
            "range": "± 7302",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1910468168,
            "range": "± 5390382",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1188242,
            "range": "± 14481",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1228305,
            "range": "± 3948",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10990,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1244542,
            "range": "± 5464",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33752,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "1e044b1db64d946cb5087f96f6d61e1c83abc0bd",
          "message": "Update `CHANGELOG.md` with 0.8.1 release (#3029)\n\n… and other fixes that surfaced during the release of 0.8.1 in\r\nhttps://github.com/rerun-io/rerun/pull/3021.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3029) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3029)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aemilk%2F0.8.1-changelog/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aemilk%2F0.8.1-changelog/examples)",
          "timestamp": "2023-08-17T17:07:28+02:00",
          "tree_id": "c52d0a8c1673fe520f5de1830b35d3318fd4ba70",
          "url": "https://github.com/rerun-io/rerun/commit/1e044b1db64d946cb5087f96f6d61e1c83abc0bd"
        },
        "date": 1692285699504,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2867735,
            "range": "± 17380",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 342,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 242,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 356,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2888365,
            "range": "± 4855",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1746686,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20674676,
            "range": "± 491540",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133408301,
            "range": "± 398744",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166172131,
            "range": "± 849388",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 336932602,
            "range": "± 1336201",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 209851350,
            "range": "± 487586",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 55361195,
            "range": "± 466081",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 283594615,
            "range": "± 692834",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16337377,
            "range": "± 22560",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3105688,
            "range": "± 13613",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 466317,
            "range": "± 1164",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20597398,
            "range": "± 85430",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 430896,
            "range": "± 723",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5495740,
            "range": "± 5538",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5961825,
            "range": "± 10168",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203585,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5425,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 88320,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 306561,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37747,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2164,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41524,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1750175595,
            "range": "± 4318757",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 838660,
            "range": "± 2725",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1134138,
            "range": "± 3918",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7679,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 23996,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 293539,
            "range": "± 729",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1829305487,
            "range": "± 8949435",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1200366,
            "range": "± 7355",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1744717941,
            "range": "± 3463007",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1185016,
            "range": "± 4968",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1172131,
            "range": "± 3891",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10966,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1138060,
            "range": "± 5476",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33786,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "d932084c81592837a990f50147cab00fc5af63cb",
          "message": "Add `clippy_wasm.sh` to `justfile` for discoverability (#3025)\n\n### What\r\n\r\nAs the title say. That's were I looked first when I needed it.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3025) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3025)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aantoine%2Fjust-rs-lint-wasm/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aantoine%2Fjust-rs-lint-wasm/examples)",
          "timestamp": "2023-08-17T18:29:58+02:00",
          "tree_id": "105a3656c5616110dff1a7833153507d1f81b7a3",
          "url": "https://github.com/rerun-io/rerun/commit/d932084c81592837a990f50147cab00fc5af63cb"
        },
        "date": 1692290758986,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2914980,
            "range": "± 12748",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 332,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 241,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 356,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2920533,
            "range": "± 55563",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1755669,
            "range": "± 30711",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20447694,
            "range": "± 487985",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133647659,
            "range": "± 1005818",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 169353516,
            "range": "± 1383729",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 338054381,
            "range": "± 2461796",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 213016124,
            "range": "± 872088",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 53845897,
            "range": "± 464041",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 285562513,
            "range": "± 1102804",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16343101,
            "range": "± 34239",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3121801,
            "range": "± 7057",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 462426,
            "range": "± 6110",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20578020,
            "range": "± 127061",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 416723,
            "range": "± 1599",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5532872,
            "range": "± 64028",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5979908,
            "range": "± 37029",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203629,
            "range": "± 2106",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5299,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90366,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 306817,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39071,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2098,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41541,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1764549272,
            "range": "± 3191142",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 805075,
            "range": "± 5648",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1121134,
            "range": "± 8492",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7612,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24014,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 300143,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1741522852,
            "range": "± 7975589",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1166762,
            "range": "± 6326",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1761486102,
            "range": "± 20013264",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1216973,
            "range": "± 10570",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1131117,
            "range": "± 11639",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10974,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1150054,
            "range": "± 13727",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33638,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "a2c95b9fc99e34206c81c7e5718c4b4284c3171e",
          "message": "Remove the limitation to a single dropped file (#3030)\n\n### What\r\n\r\nThere is a limitation to handling no more than a single dropped file\r\nover the viewer dating back from #2 😮, with a bug in error handling to\r\nboot (error was shown only for 3+ files).\r\n\r\nThis PR removes that limitation, as it seems to... just work.\r\n\r\n<img width=\"1747\" alt=\"image\"\r\nsrc=\"https://github.com/rerun-io/rerun/assets/49431240/ef435608-d505-4dec-b713-8675df8927ce\">\r\n\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3030) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3030)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aantoine%2Fmulti-dropped-files/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aantoine%2Fmulti-dropped-files/examples)",
          "timestamp": "2023-08-17T18:51:45+02:00",
          "tree_id": "2a04f3532a9d290720e347e02b839d7dbf67c1d1",
          "url": "https://github.com/rerun-io/rerun/commit/a2c95b9fc99e34206c81c7e5718c4b4284c3171e"
        },
        "date": 1692292457933,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2815475,
            "range": "± 7420",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 335,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 242,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 355,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2810290,
            "range": "± 12256",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1749945,
            "range": "± 5708",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 22703156,
            "range": "± 1530830",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137887281,
            "range": "± 2347341",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 173359333,
            "range": "± 1375484",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 342999449,
            "range": "± 2330402",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 216332762,
            "range": "± 2070132",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 58821035,
            "range": "± 1836061",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 292418610,
            "range": "± 2203481",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16814613,
            "range": "± 334178",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3143572,
            "range": "± 73952",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 489766,
            "range": "± 1452",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21400256,
            "range": "± 1063786",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 431685,
            "range": "± 1376",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5681875,
            "range": "± 176550",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 6105293,
            "range": "± 80390",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203568,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5444,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90075,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 306547,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37923,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2056,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42560,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1764268323,
            "range": "± 11843383",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 796552,
            "range": "± 15920",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1146792,
            "range": "± 11655",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7741,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24206,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 294152,
            "range": "± 863",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1718534853,
            "range": "± 8389504",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1209367,
            "range": "± 11486",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1717148172,
            "range": "± 5855995",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1197972,
            "range": "± 5360",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1130167,
            "range": "± 6251",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10994,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1139769,
            "range": "± 6316",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33739,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "be7a03134b86376689f7c4d4d19231035ac6f22d",
          "message": "Fix the Streams UI when the recording is empty (#3027)\n\n### What\r\n\r\nAs the title says. Also fixed a bunch of typos around there.\r\n\r\nBefore:\r\n<img width=\"216\" alt=\"image\"\r\nsrc=\"https://github.com/rerun-io/rerun/assets/49431240/c1e61eea-b8a5-4d3c-83cf-bb92df266d4d\">\r\n\r\n<br/>\r\n\r\nAfter:\r\n<img width=\"220\" alt=\"image\"\r\nsrc=\"https://github.com/rerun-io/rerun/assets/49431240/3b2430d8-26e2-4af4-865b-ee67652efe51\">\r\n\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3027) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3027)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aantoine%2Ffix-stream-ui-empty-rec/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aantoine%2Ffix-stream-ui-empty-rec/examples)",
          "timestamp": "2023-08-18T08:42:32+02:00",
          "tree_id": "a44e873bd82950b4c9cea8b79b442cbf0f0bd938",
          "url": "https://github.com/rerun-io/rerun/commit/be7a03134b86376689f7c4d4d19231035ac6f22d"
        },
        "date": 1692341740546,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2895390,
            "range": "± 3912",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 332,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 241,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 355,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2880045,
            "range": "± 4462",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1751040,
            "range": "± 4969",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 21357847,
            "range": "± 589044",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134069594,
            "range": "± 1132184",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 171847804,
            "range": "± 1724994",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 342807526,
            "range": "± 1955776",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 215251476,
            "range": "± 972131",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 56025036,
            "range": "± 1108134",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 287258055,
            "range": "± 1127353",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16414128,
            "range": "± 76552",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3138450,
            "range": "± 8327",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 463827,
            "range": "± 1348",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20692730,
            "range": "± 310593",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 431979,
            "range": "± 818",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5502914,
            "range": "± 7443",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5983086,
            "range": "± 8790",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203281,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5371,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89599,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 307022,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39235,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2114,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41580,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1773035462,
            "range": "± 6297613",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 821304,
            "range": "± 1626",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1156448,
            "range": "± 4322",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7632,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24030,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 296090,
            "range": "± 874",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1719440947,
            "range": "± 6558436",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1180531,
            "range": "± 7427",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1723400150,
            "range": "± 2526699",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1190361,
            "range": "± 13226",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1131020,
            "range": "± 4826",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 11107,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1149963,
            "range": "± 3722",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 34083,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "d8495e024a816320527aa73c3631b75f96ddc328",
          "message": "Track file sizes (#3037)\n\n<!--\r\nOpen the PR up as a draft until you feel it is ready for a proper\r\nreview.\r\n\r\nDo not make PR:s from your own `main` branch, as that makes it difficult\r\nfor reviewers to add their own fixes.\r\n\r\nAdd any improvements to the branch as new commits to make it easier for\r\nreviewers to follow the progress. All commits will be squashed to a\r\nsingle commit once the PR is merged into `main`.\r\n\r\nMake sure you mention any issues that this PR closes in the description,\r\nas well as any other related issues.\r\n\r\nTo get an auto-generated PR description you can put \"copilot:summary\" or\r\n\"copilot:walkthrough\" anywhere.\r\n-->\r\n\r\n### What\r\n\r\nFixes https://github.com/rerun-io/rerun/issues/2511\r\n\r\n- Adds `scripts/ci/sizes.py` for measuring and comparing file sizes\r\n  - This works for any files, not just WASM files\r\n- Use the new script in a new `reusable_track_size.yml` workflow\r\n- Measures sizes of various files (`.wasm`, `.js`, demo `.rrd`), and\r\nuploads the results to GCS\r\n- Compares the results to `main` and posts a PR comment if the size\r\nchanged significantly (+10% or -10%)\r\n- Builds file size graphs and pushes them to `gh-pages` on every commit\r\nto `main`\r\n- Also updated the PR description template to include links to benchmark\r\ngraphs and the new size graphs.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3037) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3037)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Ajan%2Ftrack-wasm-size/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Ajan%2Ftrack-wasm-size/examples)",
          "timestamp": "2023-08-18T15:09:08+02:00",
          "tree_id": "91253bcf68e992fea39ff41406799a039d081af4",
          "url": "https://github.com/rerun-io/rerun/commit/d8495e024a816320527aa73c3631b75f96ddc328"
        },
        "date": 1692364937331,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2808986,
            "range": "± 3525",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 333,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 242,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 358,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2810504,
            "range": "± 3620",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1747115,
            "range": "± 2730",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20444391,
            "range": "± 764818",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 132075706,
            "range": "± 379896",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166693538,
            "range": "± 634621",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 332067937,
            "range": "± 923923",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 209409793,
            "range": "± 475455",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 55277564,
            "range": "± 458350",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 287932604,
            "range": "± 860258",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16368026,
            "range": "± 19049",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3144294,
            "range": "± 10405",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 464627,
            "range": "± 1244",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20963509,
            "range": "± 66434",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 416578,
            "range": "± 1368",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5518088,
            "range": "± 6725",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5960315,
            "range": "± 5173",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 205147,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5349,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89342,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 307901,
            "range": "± 424",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39007,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2080,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41830,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1754200483,
            "range": "± 3227463",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 818480,
            "range": "± 1338",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1127549,
            "range": "± 4466",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7638,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24178,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 293555,
            "range": "± 761",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1749787598,
            "range": "± 3984341",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1183985,
            "range": "± 8789",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1739408058,
            "range": "± 2301525",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1201217,
            "range": "± 6985",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1142007,
            "range": "± 7289",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10925,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1154036,
            "range": "± 4129",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33734,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "a294fc7eba85e26901559d3ace8702abc91b98d1",
          "message": "Track WASM sizes (fix `on_push_main`) (#3038)\n\n<!--\r\nOpen the PR up as a draft until you feel it is ready for a proper\r\nreview.\r\n\r\nDo not make PR:s from your own `main` branch, as that makes it difficult\r\nfor reviewers to add their own fixes.\r\n\r\nAdd any improvements to the branch as new commits to make it easier for\r\nreviewers to follow the progress. All commits will be squashed to a\r\nsingle commit once the PR is merged into `main`.\r\n\r\nMake sure you mention any issues that this PR closes in the description,\r\nas well as any other related issues.\r\n\r\nTo get an auto-generated PR description you can put \"copilot:summary\" or\r\n\"copilot:walkthrough\" anywhere.\r\n-->\r\n\r\n### What\r\n\r\n- The `benchmark-action/github-action-benchmark` action was\r\nmisconfigured, `output-file-path` really means \"output of your\r\nbenchmark\". I thought it was output from the action.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/{{\r\npr.number }}) (if applicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/{{ pr.number }})\r\n- [Docs preview](https://rerun.io/preview/{{\r\n\"pr:%s\"|format(pr.branch)|encode_uri_component }}/docs)\r\n- [Examples preview](https://rerun.io/preview/{{\r\n\"pr:%s\"|format(pr.branch)|encode_uri_component }}/examples)\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-18T15:45:12+02:00",
          "tree_id": "59d1d9be4b9f8baa9601e991d3fa68f826750619",
          "url": "https://github.com/rerun-io/rerun/commit/a294fc7eba85e26901559d3ace8702abc91b98d1"
        },
        "date": 1692367172746,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2867102,
            "range": "± 7999",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 335,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 243,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 357,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2861953,
            "range": "± 4854",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1746088,
            "range": "± 2502",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20660845,
            "range": "± 1756361",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133969678,
            "range": "± 792460",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 168844912,
            "range": "± 588641",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 339507262,
            "range": "± 1277240",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 212987675,
            "range": "± 1133680",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 54073889,
            "range": "± 529748",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 286024471,
            "range": "± 1099773",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16454955,
            "range": "± 19815",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3146230,
            "range": "± 7203",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 463430,
            "range": "± 3319",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20979073,
            "range": "± 66450",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 416380,
            "range": "± 1220",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5520071,
            "range": "± 6391",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5956553,
            "range": "± 6637",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 204361,
            "range": "± 8837",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5488,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90678,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 306857,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39107,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2119,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41465,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1732482212,
            "range": "± 3337916",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 821481,
            "range": "± 6142",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1133863,
            "range": "± 6523",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7613,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 23957,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 301065,
            "range": "± 598",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1726758371,
            "range": "± 7479153",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1173124,
            "range": "± 3824",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1727968597,
            "range": "± 10943627",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1194533,
            "range": "± 5676",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1131904,
            "range": "± 4604",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10905,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1156287,
            "range": "± 15052",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33811,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "5a562d3a6d394127021a612a4277f7ceda9f3f7a",
          "message": "Reduce code bloat from generated Rust code: reuse datatype definition (#3034)\n\nWhat the title says. Even though the code is generated, it is not free.\r\nMost importantly: more code means larger `.wasm`.\r\n\r\n* Sparked by https://github.com/rerun-io/rerun/pull/3032\r\n\r\nMaybe there is something similar we can do for C++?\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3034) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3034)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aemilk%2Fidl-reuse-dataype/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aemilk%2Fidl-reuse-dataype/examples)\r\n\r\n---------\r\n\r\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>",
          "timestamp": "2023-08-18T16:47:51+02:00",
          "tree_id": "46caacacac473e46c06cf22036459cafc5424f16",
          "url": "https://github.com/rerun-io/rerun/commit/5a562d3a6d394127021a612a4277f7ceda9f3f7a"
        },
        "date": 1692370855540,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2876503,
            "range": "± 19491",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 345,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 239,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 364,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3096777,
            "range": "± 14840",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1743257,
            "range": "± 10805",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 22606325,
            "range": "± 1641753",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 141534768,
            "range": "± 2608365",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 174021256,
            "range": "± 1495162",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353123931,
            "range": "± 2708648",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 219630233,
            "range": "± 1800999",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65763095,
            "range": "± 2510146",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 298086115,
            "range": "± 5916034",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16681712,
            "range": "± 506195",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3154246,
            "range": "± 51268",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 489301,
            "range": "± 2094",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21947039,
            "range": "± 1048746",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 431409,
            "range": "± 4014",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5525039,
            "range": "± 46159",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 6030743,
            "range": "± 42864",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203546,
            "range": "± 2591",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5483,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 88826,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 307896,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38992,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2105,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42568,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1745812453,
            "range": "± 5303341",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 803432,
            "range": "± 1345",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1122907,
            "range": "± 16552",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7267,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24175,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 290961,
            "range": "± 1074",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1852598575,
            "range": "± 5321393",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1187668,
            "range": "± 15657",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1879115746,
            "range": "± 3819844",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1200672,
            "range": "± 13862",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1216082,
            "range": "± 56795",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 11021,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1227745,
            "range": "± 11868",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33442,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "6cf70205012bbe5c714feeffd81723492e9a2fe7",
          "message": "Add upload rerun_c to ci and show artifacts build results & releases (#3028)\n\n* Part of https://github.com/rerun-io/rerun/issues/2919\r\n\r\n### What\r\n\r\nAdds ci jobs to upload rerun_c for linux x64, mac x64, mac aarch64,\r\nwindows x64 and shows those both on the build summary html as well as\r\nthe github developer release\r\n\r\nUnrelated changes\r\n* remove unnecessary dependency from rerun_c - part of #2905\r\n* no longer show full changelog on Dev releases - this got often very\r\nlong and isn't all that useful, also doesn't understand our minor\r\nreleases\r\n\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3028) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3028)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aandreas%2Fcpp%2Frerun_c-ci-build/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aandreas%2Fcpp%2Frerun_c-ci-build/examples)\r\n\r\n---------\r\n\r\nCo-authored-by: Jan Procházka <1665677+jprochazk@users.noreply.github.com>",
          "timestamp": "2023-08-18T18:01:52+02:00",
          "tree_id": "533b517fc57fb96ee67ebb86891d1ecf6f85778f",
          "url": "https://github.com/rerun-io/rerun/commit/6cf70205012bbe5c714feeffd81723492e9a2fe7"
        },
        "date": 1692375373835,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2813413,
            "range": "± 3567",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 335,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 236,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 354,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2852613,
            "range": "± 2800",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1734891,
            "range": "± 2319",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20676145,
            "range": "± 638041",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134945906,
            "range": "± 421640",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 171352476,
            "range": "± 606189",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 342955561,
            "range": "± 1023189",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 214214018,
            "range": "± 907810",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 53902980,
            "range": "± 862596",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 287309031,
            "range": "± 1006193",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16544558,
            "range": "± 41896",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3098561,
            "range": "± 11086",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 486908,
            "range": "± 678",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20904056,
            "range": "± 94696",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 417279,
            "range": "± 1098",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5481256,
            "range": "± 337918",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5973724,
            "range": "± 7999",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203364,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5521,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90048,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 306541,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38127,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2100,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42784,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1741467877,
            "range": "± 6295174",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 806957,
            "range": "± 3348",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1127871,
            "range": "± 6487",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7268,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 23947,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 292519,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1797352914,
            "range": "± 8999139",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1194976,
            "range": "± 16345",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1796520713,
            "range": "± 8788825",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1177389,
            "range": "± 5837",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1208312,
            "range": "± 7224",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 11002,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1222999,
            "range": "± 5784",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33405,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "fe3fcff4c5a55f4db212de27ea6494a78a643ef1",
          "message": "C++ put test types out of the SDK and into the test executable (#3007)\n\n* Part of https://github.com/rerun-io/rerun/issues/2919\r\n* Depends on https://github.com/rerun-io/rerun/pull/3001\r\n* Solves C++ part of https://github.com/rerun-io/rerun/issues/2537\r\n\r\n### What\r\n\r\nMoves out all affix-fuzzer and co. testing types of the actual SDK.\r\n\r\nWhile working on that...\r\n* I figured out why warnings from arrow headers showed up only\r\nsometimes: When Arrow isn't added explicitely as a dependency, CMake\r\ndoesn't seem to declare it as system header which normally suppresses\r\nwarnings (as you can imagine this got really bad now when adding more\r\ncpps that include arrow to the test library). Obvious workaround is to\r\nadd arrow explicitly to the text executable.\r\n* internal include paths got shorter/more natural in some cases. I had\r\nto make the `Includes` utility more clever in order to support types\r\noutside of the sdk, so we got this almost for free :)\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3007) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3007)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aandreas%2Fcpp%2Fseparate-test-types/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aandreas%2Fcpp%2Fseparate-test-types/examples)",
          "timestamp": "2023-08-18T18:20:38+02:00",
          "tree_id": "3fe76ae7800b942d8e8d576dce0bf56c4fef9e8f",
          "url": "https://github.com/rerun-io/rerun/commit/fe3fcff4c5a55f4db212de27ea6494a78a643ef1"
        },
        "date": 1692376427654,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2877753,
            "range": "± 8885",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 337,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 235,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 360,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2886356,
            "range": "± 16507",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1729716,
            "range": "± 4808",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 21846983,
            "range": "± 1992720",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 144193436,
            "range": "± 2852893",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 175508421,
            "range": "± 1620523",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357951809,
            "range": "± 2547925",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 221329482,
            "range": "± 2239363",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61138397,
            "range": "± 2589218",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 302866539,
            "range": "± 2621259",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16467864,
            "range": "± 490571",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3134353,
            "range": "± 38028",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 495109,
            "range": "± 2106",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20885919,
            "range": "± 633354",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 431625,
            "range": "± 2047",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5488552,
            "range": "± 11173",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5978997,
            "range": "± 29882",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 207926,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5506,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89914,
            "range": "± 781",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 307656,
            "range": "± 575",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39150,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2130,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42864,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1777290349,
            "range": "± 7188245",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 799829,
            "range": "± 2521",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1121259,
            "range": "± 4690",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7302,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24064,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 292507,
            "range": "± 900",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1818050433,
            "range": "± 11757699",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1175742,
            "range": "± 5175",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1883977428,
            "range": "± 8770127",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1179697,
            "range": "± 11619",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1185398,
            "range": "± 13703",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10998,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1187700,
            "range": "± 9388",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 34387,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "9e350dcf322615e5f7f52ba212b9f3514a817513",
          "message": "Set shell to bash in reusable_build_and_upload_rerun_c.yml (#3048)\n\n### What\r\n\r\nFixes build error:\r\nhttps://github.com/rerun-io/rerun/actions/runs/5904663365/job/16017747131\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/{{\r\npr.number }}) (if applicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/{{ pr.number }})\r\n- [Docs preview](https://rerun.io/preview/{{\r\n\"pr:%s\"|format(pr.branch)|encode_uri_component }}/docs)\r\n- [Examples preview](https://rerun.io/preview/{{\r\n\"pr:%s\"|format(pr.branch)|encode_uri_component }}/examples)\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-18T19:01:11+02:00",
          "tree_id": "8b813db04e8d506e571ea6f19fa9525f0e9aba78",
          "url": "https://github.com/rerun-io/rerun/commit/9e350dcf322615e5f7f52ba212b9f3514a817513"
        },
        "date": 1692378904808,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2831235,
            "range": "± 5612",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 333,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 235,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 356,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2863397,
            "range": "± 4862",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1735494,
            "range": "± 2860",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20741090,
            "range": "± 428480",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133228407,
            "range": "± 609201",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167308339,
            "range": "± 1690262",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 338007420,
            "range": "± 2395074",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 213320912,
            "range": "± 1902164",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 53158068,
            "range": "± 929883",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 282140826,
            "range": "± 2373945",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16687824,
            "range": "± 28276",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3117347,
            "range": "± 10897",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 488568,
            "range": "± 1019",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21274809,
            "range": "± 57913",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 431262,
            "range": "± 15722",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5501448,
            "range": "± 13363",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5990576,
            "range": "± 17048",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203674,
            "range": "± 1363",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5394,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89750,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 308410,
            "range": "± 811",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37950,
            "range": "± 1235",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2095,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41687,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1762899139,
            "range": "± 11956003",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 842751,
            "range": "± 5138",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1145376,
            "range": "± 4298",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7401,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24046,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 340640,
            "range": "± 754",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1754787109,
            "range": "± 5308128",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1169569,
            "range": "± 9271",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1808258989,
            "range": "± 2229511",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1221733,
            "range": "± 3827",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1164393,
            "range": "± 6128",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10952,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1176615,
            "range": "± 34616",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33425,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "de75d3a49f2465133248b625bb1af63c26a3e345",
          "message": "C++ resolve `archetypes` namespace within `rerun` namespace by default (#3024)\n\n### What\r\nSmall QOL change that we discussed a while ago but didn't write down\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3024) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3024)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aandreas%2Fcpp%2Fusing-namespace-archetype/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aandreas%2Fcpp%2Fusing-namespace-archetype/examples)",
          "timestamp": "2023-08-18T20:11:29+02:00",
          "tree_id": "2e9bb008799e8b57b2534f592449489853141c8d",
          "url": "https://github.com/rerun-io/rerun/commit/de75d3a49f2465133248b625bb1af63c26a3e345"
        },
        "date": 1692383079130,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2858900,
            "range": "± 4065",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 335,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 237,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 354,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2882763,
            "range": "± 6727",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1745504,
            "range": "± 3066",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20586373,
            "range": "± 877019",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 142757211,
            "range": "± 2421822",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 175197476,
            "range": "± 3165472",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 345776868,
            "range": "± 1925250",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 218106220,
            "range": "± 5379105",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 57342357,
            "range": "± 813972",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 296737500,
            "range": "± 5628308",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16405871,
            "range": "± 165387",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3158439,
            "range": "± 7411",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 462497,
            "range": "± 956",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21085868,
            "range": "± 320597",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 431737,
            "range": "± 1348",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5508617,
            "range": "± 9594",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5995635,
            "range": "± 36781",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203315,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5375,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 87703,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 306352,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37926,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2093,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42719,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1799157707,
            "range": "± 6518289",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 810871,
            "range": "± 2175",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1138270,
            "range": "± 4083",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7282,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24134,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 296111,
            "range": "± 1608",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1791337893,
            "range": "± 9818111",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1172307,
            "range": "± 5977",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1766312040,
            "range": "± 3948734",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1184690,
            "range": "± 5787",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1148215,
            "range": "± 5332",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10907,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1168521,
            "range": "± 4307",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33482,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "a55e884de681a1ab3e168a270a430a6c7effb6b6",
          "message": "C++ no longer leak arrow headers into our own headers, include minimal set (#3041)\n\n* Part of https://github.com/rerun-io/rerun/issues/2919\r\n* Fixes https://github.com/rerun-io/rerun/issues/2873\r\n\r\n### What\r\n\r\nWe now use our own status type everywhere, allowing us to predeclare\r\neverything arrow.\r\nOn top of that I made sure that we include a much more minimal set of\r\narrow headers for the serialization code itself.\r\n\r\nThere's a static assertion in the unit test that ensures that we don't\r\nstart leaking arrow headers into the future\r\n\r\nHaven't measured, but it feels like this also improved compile times of\r\nthe sdk which were already pretty good.\r\n\r\n-----------\r\n\r\nThe one thing that's noted in #2873 but is not happening here yet (?) is\r\nsplitting out the utility methods. The idea would be this (actual\r\ngenerated code I already have on a test branch!) :\r\n```cpp\r\n        struct LineStrip2D {\r\n// .........\r\n            /// Creates a Rerun DataCell from an array of LineStrip2D components.\r\n            static Result<rerun::DataCell> to_data_cell(\r\n                const LineStrip2D* instances, size_t num_instances\r\n            );\r\n        };\r\n\r\n        /// Serialization utilities for arrays of LineStrip2D\r\n        namespace LineStrip2DSerializationUtils {\r\n            /// Returns the arrow data type this type corresponds to.\r\n            static const std::shared_ptr<arrow::DataType>& to_arrow_datatype();\r\n\r\n            /// Creates a new array builder with an array of this type.\r\n            static Result<std::shared_ptr<arrow::ListBuilder>> new_arrow_array_builder(\r\n                arrow::MemoryPool* memory_pool\r\n            );\r\n\r\n            /// Fills an arrow array builder with an array of this type.\r\n            static Error fill_arrow_array_builder(\r\n                arrow::ListBuilder* builder, const LineStrip2D* elements, size_t num_elements\r\n            );\r\n        } // namespace LineStrip2DSerializationUtils\r\n```\r\n\r\nThe problem is that this makes calling these helpers unnecessary\r\ncomplicated sicne I need to append `SerializationUtils` to the typename\r\nof some previously static method calls which is suprisingly cumbersome 🤔\r\nEDIT: Briefly chatted with Emil about it. Let's do it, it's actually not\r\nthat hard\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3041) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3041)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aandreas%2Fcpp%2Fdont-leak-arrow-headers/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aandreas%2Fcpp%2Fdont-leak-arrow-headers/examples)\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-19T11:33:17+02:00",
          "tree_id": "df033a7c4386b08ba6688f0a7ad8ec2fe4950320",
          "url": "https://github.com/rerun-io/rerun/commit/a55e884de681a1ab3e168a270a430a6c7effb6b6"
        },
        "date": 1692438466014,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2825382,
            "range": "± 17058",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 334,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 236,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 347,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2847563,
            "range": "± 16911",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1721202,
            "range": "± 3851",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 26668090,
            "range": "± 2299022",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 141821215,
            "range": "± 2140059",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 175070795,
            "range": "± 730263",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351022669,
            "range": "± 1597596",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 218866035,
            "range": "± 1378905",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62947366,
            "range": "± 1394162",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 299347730,
            "range": "± 1470407",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16717748,
            "range": "± 594429",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3103020,
            "range": "± 22496",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 464564,
            "range": "± 1133",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21625720,
            "range": "± 860490",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 432494,
            "range": "± 1133",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5640484,
            "range": "± 32290",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 6172167,
            "range": "± 107594",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203633,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5477,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 88003,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 307929,
            "range": "± 1332",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38063,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2088,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42705,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1775467710,
            "range": "± 4319332",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 809670,
            "range": "± 4521",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1129435,
            "range": "± 9734",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7324,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24075,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 290319,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1800505456,
            "range": "± 7951937",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1191803,
            "range": "± 8666",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1814289598,
            "range": "± 2959845",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1198198,
            "range": "± 3851",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1166768,
            "range": "± 9260",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10959,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1186851,
            "range": "± 19882",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33409,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "c541d147c9355e75bbbe2d3087f49adf8302c4d0",
          "message": "C++ CMake: let users chose dynamic or static linking for Arrow (#3059)\n\n```\r\nCMake Error at rerun_cpp/tests/CMakeLists.txt:22 (target_link_libraries):\r\n  Target \"rerun_sdk_tests\" links to:\r\n\r\n    Arrow::arrow_static\r\n\r\n  but the target was not found.  Possible reasons include:\r\n\r\n    * There is a typo in the target name.\r\n    * A find_package call is missing for an IMPORTED target.\r\n    * An ALIAS target is missing.\r\n```\r\n\r\n### What\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3059) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3059)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Acmc%2Ffix_cpp_test_build/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Acmc%2Ffix_cpp_test_build/examples)\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-22T10:38:50+02:00",
          "tree_id": "cff7b6917349cc9fab4a060b05b9e065aeeefa1e",
          "url": "https://github.com/rerun-io/rerun/commit/c541d147c9355e75bbbe2d3087f49adf8302c4d0"
        },
        "date": 1692694395941,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2820197,
            "range": "± 5181",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 340,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 241,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 356,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2851294,
            "range": "± 8123",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1722415,
            "range": "± 4122",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 21852798,
            "range": "± 1316565",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136219894,
            "range": "± 2514573",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 173474696,
            "range": "± 1173074",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 343544862,
            "range": "± 5066199",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 215946170,
            "range": "± 3288637",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61336766,
            "range": "± 3066992",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 290219119,
            "range": "± 1731293",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16427881,
            "range": "± 371854",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3153507,
            "range": "± 17332",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 490396,
            "range": "± 1569",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21046147,
            "range": "± 473817",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 417061,
            "range": "± 860",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5486899,
            "range": "± 17050",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5972375,
            "range": "± 10328",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 204469,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5470,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89836,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 308644,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38172,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2141,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42903,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1762464053,
            "range": "± 9327332",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 872606,
            "range": "± 3654",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1134554,
            "range": "± 14316",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7377,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24135,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 305715,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1804153689,
            "range": "± 5292317",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1193519,
            "range": "± 7731",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1812055300,
            "range": "± 12673925",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1183047,
            "range": "± 4327",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1183803,
            "range": "± 4273",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10939,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1228625,
            "range": "± 30931",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 34066,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
          "id": "2f2aaca1a51895bdec304bb480d261c3ccc8af38",
          "message": "Silence RUSTSEC for now (#3069)\n\nSee diff\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/3069) (if\r\napplicable)\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/3069)\r\n- [Docs\r\npreview](https://rerun.io/preview/pr%3Aemilk%2Fsilence-rustsec/docs)\r\n- [Examples\r\npreview](https://rerun.io/preview/pr%3Aemilk%2Fsilence-rustsec/examples)\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-08-22T16:41:39+02:00",
          "tree_id": "6bdf98a322404e5c75823915d5ec6dbf900ca646",
          "url": "https://github.com/rerun-io/rerun/commit/2f2aaca1a51895bdec304bb480d261c3ccc8af38"
        },
        "date": 1692716115662,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2953768,
            "range": "± 5213",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 338,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 236,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 358,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2936960,
            "range": "± 3952",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1721349,
            "range": "± 5636",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20351518,
            "range": "± 133253",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 132802653,
            "range": "± 423259",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166221758,
            "range": "± 4076945",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 337569912,
            "range": "± 10184174",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 212083690,
            "range": "± 1101428",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 55780464,
            "range": "± 483453",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 288309991,
            "range": "± 2184767",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16401786,
            "range": "± 32566",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3161031,
            "range": "± 10789",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 463204,
            "range": "± 1002",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20728778,
            "range": "± 90932",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 416041,
            "range": "± 800",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5544478,
            "range": "± 6173",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 6033766,
            "range": "± 10785",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203131,
            "range": "± 1268",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5412,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89228,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 306259,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39142,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2122,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41417,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1740437024,
            "range": "± 3836311",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 811293,
            "range": "± 3530",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1123588,
            "range": "± 4050",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7285,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24029,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 299955,
            "range": "± 978",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1804122268,
            "range": "± 5159058",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1184086,
            "range": "± 9337",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1785086321,
            "range": "± 2032228",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1184474,
            "range": "± 48217",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1200348,
            "range": "± 5379",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10949,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1209546,
            "range": "± 5809",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33474,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1692721154052,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2839179,
            "range": "± 2560",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 336,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 240,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 357,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2828969,
            "range": "± 2903",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1720892,
            "range": "± 4222",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20479114,
            "range": "± 249114",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133395046,
            "range": "± 490080",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167806373,
            "range": "± 578660",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 338570176,
            "range": "± 1539163",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 212555087,
            "range": "± 10376296",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 53222918,
            "range": "± 997818",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 283775279,
            "range": "± 694158",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16270128,
            "range": "± 29551",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3108680,
            "range": "± 6532",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 465495,
            "range": "± 1743",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20775276,
            "range": "± 63903",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 417134,
            "range": "± 975",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5494360,
            "range": "± 7278",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5956195,
            "range": "± 8840",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203491,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5421,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89108,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 307094,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37952,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2077,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42535,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1749424745,
            "range": "± 4917782",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 808936,
            "range": "± 2140",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1130017,
            "range": "± 9613",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7278,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24142,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 289344,
            "range": "± 829",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1786856646,
            "range": "± 6493827",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1174613,
            "range": "± 6748",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1783507226,
            "range": "± 2066873",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1193029,
            "range": "± 5907",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1182888,
            "range": "± 8074",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10961,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1219599,
            "range": "± 5545",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33361,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1692722855672,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2837356,
            "range": "± 2628",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 333,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 239,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 355,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2879018,
            "range": "± 4772",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1720193,
            "range": "± 3769",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20658247,
            "range": "± 358694",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134053185,
            "range": "± 394373",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167388498,
            "range": "± 805020",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 340911259,
            "range": "± 1156305",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 214610981,
            "range": "± 943130",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 56380414,
            "range": "± 467647",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 289307971,
            "range": "± 969130",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16512765,
            "range": "± 45331",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3165883,
            "range": "± 16279",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 462535,
            "range": "± 811",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20657823,
            "range": "± 82149",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 416108,
            "range": "± 819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5487108,
            "range": "± 12606",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5969504,
            "range": "± 5705",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 204333,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5406,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89266,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 307964,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37716,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2081,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41404,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1741120681,
            "range": "± 8083460",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 806488,
            "range": "± 2505",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1124161,
            "range": "± 13567",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7336,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 23954,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 295005,
            "range": "± 727",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1774248253,
            "range": "± 9860145",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1158655,
            "range": "± 13092",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1792836338,
            "range": "± 1985740",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1165418,
            "range": "± 5603",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1173855,
            "range": "± 5328",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10943,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1188744,
            "range": "± 31593",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33377,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1692724244533,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2832658,
            "range": "± 52955",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 338,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 242,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 360,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2921543,
            "range": "± 78736",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1728652,
            "range": "± 5298",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 21216449,
            "range": "± 2398198",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135480280,
            "range": "± 2303127",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 172705485,
            "range": "± 1438632",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 337085879,
            "range": "± 2343040",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 215567529,
            "range": "± 5460579",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 56950168,
            "range": "± 2348580",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 291034143,
            "range": "± 2530351",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16427416,
            "range": "± 626926",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3126560,
            "range": "± 88656",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 490020,
            "range": "± 2028",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21057012,
            "range": "± 1010713",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 430981,
            "range": "± 1704",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5533091,
            "range": "± 133031",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 6025013,
            "range": "± 167872",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203399,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5384,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 88635,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 305749,
            "range": "± 1685",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39116,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2090,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41674,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1735796051,
            "range": "± 6046587",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 803215,
            "range": "± 2754",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1142234,
            "range": "± 4240",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7247,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24221,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 292559,
            "range": "± 947",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1782306248,
            "range": "± 6501823",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1177399,
            "range": "± 14797",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1777279267,
            "range": "± 4436942",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1186164,
            "range": "± 14582",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1163158,
            "range": "± 2961",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10928,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1183437,
            "range": "± 5767",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33498,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1692731392947,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2836371,
            "range": "± 5685",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 335,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 239,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 357,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2856728,
            "range": "± 23405",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1725965,
            "range": "± 5457",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20487506,
            "range": "± 207533",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135067217,
            "range": "± 2017524",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 171327110,
            "range": "± 4560410",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 341481002,
            "range": "± 1835701",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 213615220,
            "range": "± 1912337",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 54675688,
            "range": "± 783860",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 287902160,
            "range": "± 1167354",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16327502,
            "range": "± 29955",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3133430,
            "range": "± 6512",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 461821,
            "range": "± 1306",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20500648,
            "range": "± 123437",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 431473,
            "range": "± 615",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5541743,
            "range": "± 6957",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5995951,
            "range": "± 8162",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203465,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5388,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89395,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 305616,
            "range": "± 527",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39154,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2121,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41785,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1729486812,
            "range": "± 4407756",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 806979,
            "range": "± 2411",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1121035,
            "range": "± 7844",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7293,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24156,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 295402,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1757246128,
            "range": "± 9030552",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1165954,
            "range": "± 7428",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1749134840,
            "range": "± 12520853",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1182272,
            "range": "± 18546",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1168175,
            "range": "± 7450",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10988,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1162757,
            "range": "± 5976",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33479,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1692736345386,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2819223,
            "range": "± 8715",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 336,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 237,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 358,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2834499,
            "range": "± 3899",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1717714,
            "range": "± 9826",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20649902,
            "range": "± 281995",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136681095,
            "range": "± 822605",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167318798,
            "range": "± 6776372",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 338594799,
            "range": "± 5189220",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 210846776,
            "range": "± 1174407",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 54004082,
            "range": "± 533243",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 285139521,
            "range": "± 1759246",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16356585,
            "range": "± 33376",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3171291,
            "range": "± 8652",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 486214,
            "range": "± 1044",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20847105,
            "range": "± 94642",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 431332,
            "range": "± 685",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5537246,
            "range": "± 7371",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 6001567,
            "range": "± 7845",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 204630,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5623,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89619,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 306765,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37777,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2071,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42363,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1758117331,
            "range": "± 11203467",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 815932,
            "range": "± 1646",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1111025,
            "range": "± 16680",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7278,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 23887,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 296146,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1760363720,
            "range": "± 6874212",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1160493,
            "range": "± 21566",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1739419169,
            "range": "± 7559956",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1218764,
            "range": "± 9913",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1142479,
            "range": "± 10760",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10944,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1163494,
            "range": "± 23049",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 34972,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1692795247458,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2819014,
            "range": "± 11720",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 335,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 240,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 354,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2863720,
            "range": "± 4131",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1700946,
            "range": "± 2656",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20756477,
            "range": "± 195525",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136259501,
            "range": "± 581907",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 169021043,
            "range": "± 1234639",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 341369852,
            "range": "± 1044726",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 212989096,
            "range": "± 686154",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 55547746,
            "range": "± 1198274",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 288971893,
            "range": "± 986132",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16370554,
            "range": "± 33712",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3182020,
            "range": "± 48409",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 464766,
            "range": "± 8811",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21032215,
            "range": "± 666222",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 416462,
            "range": "± 866",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5505633,
            "range": "± 8685",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5996216,
            "range": "± 84328",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203239,
            "range": "± 3644",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5500,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89025,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 305268,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39179,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2160,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41781,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1788825733,
            "range": "± 7339098",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 860230,
            "range": "± 2599",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1091014,
            "range": "± 9763",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7590,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24029,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 294279,
            "range": "± 5807",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1784380703,
            "range": "± 7739096",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1159838,
            "range": "± 11491",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1789108209,
            "range": "± 10843679",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1204296,
            "range": "± 6117",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1108690,
            "range": "± 7140",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10982,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1128553,
            "range": "± 25073",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33731,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1692797232161,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2833846,
            "range": "± 14844",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 348,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 240,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 357,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2850221,
            "range": "± 8638",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1725864,
            "range": "± 8705",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 22023456,
            "range": "± 938438",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 140426701,
            "range": "± 1535989",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 172603462,
            "range": "± 663624",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 346337575,
            "range": "± 1650855",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 217291517,
            "range": "± 1387112",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 57467046,
            "range": "± 1164442",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 290502907,
            "range": "± 2856342",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16494688,
            "range": "± 163115",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3182330,
            "range": "± 37338",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 466514,
            "range": "± 2065",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21067501,
            "range": "± 205824",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 430862,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5508264,
            "range": "± 21207",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5971890,
            "range": "± 10202",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 204036,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5495,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89808,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 307558,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38053,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2122,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41502,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1798389549,
            "range": "± 11308352",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 812358,
            "range": "± 1176",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1116481,
            "range": "± 7137",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7631,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24149,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 301330,
            "range": "± 982",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1739879458,
            "range": "± 6328001",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1190884,
            "range": "± 17492",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1737389937,
            "range": "± 4841561",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1211067,
            "range": "± 8342",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1094637,
            "range": "± 4050",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10992,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1125161,
            "range": "± 8477",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 34096,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1692893467956,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2830413,
            "range": "± 16361",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 338,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 239,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 355,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2845480,
            "range": "± 7033",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1711478,
            "range": "± 4214",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 23769990,
            "range": "± 1666412",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 140132520,
            "range": "± 2310817",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 173269588,
            "range": "± 629402",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 348000839,
            "range": "± 1686100",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 218072009,
            "range": "± 1721972",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61180584,
            "range": "± 2275948",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 290525218,
            "range": "± 1934592",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16524380,
            "range": "± 556158",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3133966,
            "range": "± 37296",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 491688,
            "range": "± 1810",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21414814,
            "range": "± 509432",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 417818,
            "range": "± 1068",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5526996,
            "range": "± 158299",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5978240,
            "range": "± 51604",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203984,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5477,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89050,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 308438,
            "range": "± 812",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39007,
            "range": "± 1575",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2149,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42567,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1725763096,
            "range": "± 6920817",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 798296,
            "range": "± 10106",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1092493,
            "range": "± 4442",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7615,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 23919,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 359085,
            "range": "± 3471",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1850715762,
            "range": "± 16165367",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1176952,
            "range": "± 5648",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1840605258,
            "range": "± 7555448",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1172264,
            "range": "± 4973",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1152931,
            "range": "± 4839",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10972,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1177940,
            "range": "± 3086",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33743,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1692894708462,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2854886,
            "range": "± 7944",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 348,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 241,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 363,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2823937,
            "range": "± 2955",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1709815,
            "range": "± 3137",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20572181,
            "range": "± 343957",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134416883,
            "range": "± 1762260",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166159688,
            "range": "± 3031631",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 339414830,
            "range": "± 1490568",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 213846124,
            "range": "± 3167921",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 53714375,
            "range": "± 726090",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 287579009,
            "range": "± 768679",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16465423,
            "range": "± 26066",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3115272,
            "range": "± 6312",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 464121,
            "range": "± 1689",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20730618,
            "range": "± 123434",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 416665,
            "range": "± 842",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5503645,
            "range": "± 16796",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5933376,
            "range": "± 28143",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 204316,
            "range": "± 8552",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5445,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90083,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 308000,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38033,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2122,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41620,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1739799074,
            "range": "± 3559315",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 802113,
            "range": "± 9429",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1097430,
            "range": "± 9914",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7572,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24188,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 294720,
            "range": "± 1250",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1742532787,
            "range": "± 3505567",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1191011,
            "range": "± 11229",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1723129467,
            "range": "± 3452001",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1205499,
            "range": "± 14588",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1105075,
            "range": "± 7115",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10937,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1135498,
            "range": "± 28078",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 34062,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1692949773128,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2876481,
            "range": "± 13489",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 338,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 242,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 357,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2874395,
            "range": "± 17613",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1707528,
            "range": "± 4284",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 22545607,
            "range": "± 1520698",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137438556,
            "range": "± 1518524",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 171958870,
            "range": "± 658873",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 341997325,
            "range": "± 1272454",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 213999253,
            "range": "± 1963891",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 59330239,
            "range": "± 1619149",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 288546925,
            "range": "± 1705503",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16524129,
            "range": "± 575083",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3157520,
            "range": "± 43038",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 489959,
            "range": "± 1806",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21243451,
            "range": "± 409867",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 431149,
            "range": "± 1054",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5534668,
            "range": "± 29918",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5977810,
            "range": "± 36978",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203868,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5403,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89707,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 307088,
            "range": "± 14154",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38935,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2181,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42390,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1763540099,
            "range": "± 8899325",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 807382,
            "range": "± 4903",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1085195,
            "range": "± 4195",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7560,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24081,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 358912,
            "range": "± 1143",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1747124681,
            "range": "± 10338035",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1173842,
            "range": "± 12514",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1766884249,
            "range": "± 12422414",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1188968,
            "range": "± 10011",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1096241,
            "range": "± 5612",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10913,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1117435,
            "range": "± 6569",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 34075,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1692954137800,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2819398,
            "range": "± 6686",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 341,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 241,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 356,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2825728,
            "range": "± 43406",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1706123,
            "range": "± 3028",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20783344,
            "range": "± 230302",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134284214,
            "range": "± 550305",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167076887,
            "range": "± 901600",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 338865060,
            "range": "± 910052",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 212775538,
            "range": "± 639098",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 53653059,
            "range": "± 1052237",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 283741413,
            "range": "± 1057053",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16454038,
            "range": "± 23467",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3131479,
            "range": "± 5503",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 467030,
            "range": "± 1345",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20548625,
            "range": "± 73660",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 431081,
            "range": "± 756",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5521747,
            "range": "± 7365",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 5999633,
            "range": "± 16111",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 204452,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5476,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89567,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 307792,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38898,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2093,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42506,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1769325688,
            "range": "± 7354794",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 790024,
            "range": "± 1347",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1106712,
            "range": "± 8931",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7574,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 23993,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 294074,
            "range": "± 715",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1777001050,
            "range": "± 5826516",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1154283,
            "range": "± 9649",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1733865180,
            "range": "± 11520846",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1178785,
            "range": "± 13897",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1111556,
            "range": "± 24317",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10925,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1131091,
            "range": "± 9287",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 34039,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1692957820008,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2805314,
            "range": "± 17753",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 344,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 239,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 357,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2858662,
            "range": "± 18267",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1715045,
            "range": "± 8065",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 24199099,
            "range": "± 2642217",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 142203140,
            "range": "± 1996666",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 175222220,
            "range": "± 3679011",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 348263764,
            "range": "± 4737079",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 220525382,
            "range": "± 2376714",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62832280,
            "range": "± 1916401",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 301312142,
            "range": "± 2643989",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16730037,
            "range": "± 771437",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3182817,
            "range": "± 46223",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 488230,
            "range": "± 1419",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21487807,
            "range": "± 683159",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 432206,
            "range": "± 1072",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5521223,
            "range": "± 12996",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 6036313,
            "range": "± 22715",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 203790,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5547,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89929,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 307172,
            "range": "± 516",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39316,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2153,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42849,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1789117626,
            "range": "± 4752040",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 814124,
            "range": "± 14406",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1095125,
            "range": "± 5050",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7658,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24164,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 296580,
            "range": "± 756",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1823714001,
            "range": "± 8780803",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1175344,
            "range": "± 14998",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1802238956,
            "range": "± 5833955",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1188135,
            "range": "± 14626",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1117324,
            "range": "± 6235",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10985,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1196247,
            "range": "± 5141",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 33802,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1692975184349,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2823787,
            "range": "± 90039",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 340,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 238,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 356,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2849960,
            "range": "± 11046",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1707477,
            "range": "± 7003",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 22035985,
            "range": "± 1667040",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135403456,
            "range": "± 1643584",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 171496998,
            "range": "± 1248584",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 343017791,
            "range": "± 2239574",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 213852568,
            "range": "± 3355513",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 58486475,
            "range": "± 1927011",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 289461237,
            "range": "± 2693045",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16423602,
            "range": "± 670543",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3122024,
            "range": "± 14077",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 490606,
            "range": "± 2621",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21141113,
            "range": "± 383060",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 416579,
            "range": "± 978",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5512243,
            "range": "± 12911",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 6008677,
            "range": "± 187804",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 202803,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5399,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89421,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 305746,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39165,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2117,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42893,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1795003825,
            "range": "± 5368951",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 800148,
            "range": "± 1222",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1128679,
            "range": "± 16831",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7296,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24364,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 300628,
            "range": "± 4568",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1767415858,
            "range": "± 5044898",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1191434,
            "range": "± 4993",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1795824998,
            "range": "± 4155235",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1173235,
            "range": "± 7858",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1136784,
            "range": "± 4698",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 11107,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1157574,
            "range": "± 10336",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 34143,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
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
        "date": 1692977887763,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2928193,
            "range": "± 4430",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 340,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 242,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 364,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2958097,
            "range": "± 4577",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1781588,
            "range": "± 46324",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 21177845,
            "range": "± 311011",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136611130,
            "range": "± 377525",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 168690759,
            "range": "± 1532045",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 339611543,
            "range": "± 2038746",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 205375656,
            "range": "± 3781677",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 55038311,
            "range": "± 511597",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 283549152,
            "range": "± 3938342",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 17063134,
            "range": "± 67769",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 3153935,
            "range": "± 7939",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 483018,
            "range": "± 1160",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21713629,
            "range": "± 449747",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 429040,
            "range": "± 742",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 5599382,
            "range": "± 5355",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 6041378,
            "range": "± 11712",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 141757,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5446,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 92371,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 248025,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38273,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2164,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 40954,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 1895093565,
            "range": "± 16294107",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 828470,
            "range": "± 9445",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1167387,
            "range": "± 11480",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 7063,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 24205,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 302435,
            "range": "± 1042",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1816132160,
            "range": "± 1920436",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1293909,
            "range": "± 13420",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1832312062,
            "range": "± 7486785",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1358695,
            "range": "± 9503",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1118200,
            "range": "± 6212",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 10649,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1144026,
            "range": "± 17863",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 28264,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}