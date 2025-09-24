# Cloud Video Intelligence API - Apps Script Client Library

Auto-generated client library for using the **Cloud Video Intelligence API (version: v1p1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:55:34 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:55:34 GMT
- **Created:** Sun, 20 Jul 2025 16:56:42 GMT



---

## API Reference

### `videos`

#### `videos.annotate()`

Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |