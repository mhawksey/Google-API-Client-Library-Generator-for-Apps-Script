# Data Manager API - Apps Script Client Library

Auto-generated client library for using the **Data Manager API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 00:35:28 GMT
- **Last Modified:** Mon, 01 Dec 2025 00:36:23 GMT
- **Created:** Sat, 01 Nov 2025 00:35:17 GMT



---

## API Reference

### `audienceMembers`

#### `audienceMembers.ingest()`

Uploads a list of AudienceMember resources to the provided Destination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `audienceMembers.remove()`

Removes a list of AudienceMember resources from the provided Destination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `events`

#### `events.ingest()`

Uploads a list of Event resources from the provided Destination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `requestStatus`

#### `requestStatus.retrieve()`

Gets the status of a request given request id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Required. Required. The request ID of the Data Manager API request. |