# Cloud Video Intelligence API - Apps Script Client Library

Auto-generated client library for using the **Cloud Video Intelligence API (version: v1p2beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 01:14:50 GMT
- **Last Modified:** Sat, 01 Nov 2025 01:24:29 GMT
- **Created:** Sun, 20 Jul 2025 16:56:46 GMT



---

## API Reference

### `videos`

#### `videos.annotate()`

Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |