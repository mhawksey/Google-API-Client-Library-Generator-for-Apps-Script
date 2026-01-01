# Smart Device Management API - Apps Script Client Library

Auto-generated client library for using the **Smart Device Management API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 01:08:01 GMT
- **Last Modified:** Thu, 01 Jan 2026 01:08:01 GMT
- **Created:** Sun, 20 Jul 2025 16:54:47 GMT



---

## API Reference

### `enterprises`

### `enterprises.structures`

#### `enterprises.structures.list()`

Lists structures managed by the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent enterprise to list structures under. E.g. "enterprises/XYZ". |
| `params.filter` | `string` | No | Optional filter to list structures. |

#### `enterprises.structures.get()`

Gets a structure managed by the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the structure requested. For example: "enterprises/XYZ/structures/ABC". |

### `enterprises.structures.rooms`

#### `enterprises.structures.rooms.list()`

Lists rooms managed by the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name of the rooms requested. For example: "enterprises/XYZ/structures/ABC". |

#### `enterprises.structures.rooms.get()`

Gets a room managed by the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the room requested. For example: "enterprises/XYZ/structures/ABC/rooms/123". |

### `enterprises.devices`

#### `enterprises.devices.executeCommand()`

Executes a command to device managed by the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the device requested. For example: "enterprises/XYZ/devices/123" |
| `params.requestBody` | `object` | Yes | The request body. |

#### `enterprises.devices.list()`

Lists devices managed by the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent enterprise to list devices under. E.g. "enterprises/XYZ". |
| `params.filter` | `string` | No | Optional filter to list devices. Filters can be done on: Device custom name (substring match): 'customName=wing' |

#### `enterprises.devices.get()`

Gets a device managed by the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the device requested. For example: "enterprises/XYZ/devices/123" |