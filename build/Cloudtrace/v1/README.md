# Cloud Trace API - Apps Script Client Library

Auto-generated client library for using the **Cloud Trace API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:03:55 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:03:55 GMT
- **Created:** Sun, 20 Jul 2025 16:23:09 GMT



---

## API Reference

### `projects`

#### `projects.patchTraces()`

Sends trace spans to Cloud Trace. Spans cannot be updated. If the trace ID and span ID already exist, an additional copy of the span will be stored.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the Cloud project where the trace data is stored. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.traces`

#### `projects.traces.list()`

Returns a list of traces that match the specified filter conditions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the Cloud project where the trace data is stored. |
| `params.view` | `string` | No | Optional. Type of data returned for traces in the list. Default is `MINIMAL`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of traces to return. If not specified or <= 0, the implementation selects a reasonable value. The implementation may return fewer traces than the requested page size. |
| `params.pageToken` | `string` | No | Token identifying the page of results to return. If provided, use the value of the `next_page_token` field from a previous request. |
| `params.startTime` | `string` | No | Start of the time interval (inclusive) during which the trace data was collected from the application. |
| `params.endTime` | `string` | No | End of the time interval (inclusive) during which the trace data was collected from the application. |
| `params.filter` | `string` | No | Optional. A filter against properties of the trace. See [filter syntax documentation](https://cloud.google.com/trace/docs/trace-filters) for details. |
| `params.orderBy` | `string` | No | Optional. Field used to sort the returned traces. Can be one of the following: * `trace_id` * `name` (`name` field of root span in the trace) * `duration` (difference between `end_time` and `start_time` fields of the root span) * `start` (`start_time` field of the root span) Descending order can be specified by appending `desc` to the sort field (for example, `name desc`). Only one sort field is permitted. |

#### `projects.traces.get()`

Gets a single trace by its ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the Cloud project where the trace data is stored. |
| `params.traceId` | `string` | Yes | Required. ID of the trace to return. |