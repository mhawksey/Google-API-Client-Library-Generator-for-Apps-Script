# Data Manager API - Apps Script Client Library

Auto-generated client library for using the **Data Manager API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 00:35:17 GMT
- **Last Modified:** Sat, 01 Nov 2025 00:35:17 GMT
- **Created:** Sat, 01 Nov 2025 00:35:17 GMT



---

## API Reference

### `events`

#### `events.ingest()`

Uploads a list of Event resources from the provided Destination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `audienceMembers`

#### `audienceMembers.remove()`

Removes a list of AudienceMember resources from the provided Destination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `audienceMembers.ingest()`

Uploads a list of AudienceMember resources to the provided Destination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `requestStatus`

#### `requestStatus.retrieve()`

Gets the status of a request given request id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Required. Required. The request ID of the Data Manager API request. |