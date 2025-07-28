# Cloud Trace API - Apps Script Client Library

Auto-generated client library for using the **Cloud Trace API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:44:21 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:24:21 GMT
- **Created:** Sun, 20 Jul 2025 16:23:13 GMT



---

## API Reference

### `projects`

### `projects.traces`

#### `projects.traces.batchWrite()`

Batch writes new spans to new or existing traces. You cannot update existing spans. If a span ID already exists, an additional copy of the span will be stored.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the project where the spans belong. The format is `projects/[PROJECT_ID]`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.traces.spans`

#### `projects.traces.spans.createSpan()`

Creates a new span. If a span ID already exists, an additional copy of the span will be stored.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the span in the following format: * `projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/[SPAN_ID]` `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. It should not be zero. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. It should not be zero. . |
| `params.resource` | `object` | Yes | The request body. |