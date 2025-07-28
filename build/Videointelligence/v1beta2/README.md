# Cloud Video Intelligence API - Apps Script Client Library

Auto-generated client library for using the **Cloud Video Intelligence API (version: v1beta2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:28:15 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:48:20 GMT
- **Created:** Sun, 20 Jul 2025 16:56:54 GMT



---

## API Reference

### `videos`

#### `videos.annotate()`

Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |