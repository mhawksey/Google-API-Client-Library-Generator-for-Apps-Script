# Smart Device Management API - Apps Script Client Library

Auto-generated client library for using the **Smart Device Management API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:48:30 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:48:30 GMT
- **Created:** Sun, 20 Jul 2025 16:54:47 GMT



---

## API Reference

### `enterprises`

### `enterprises.devices`

#### `enterprises.devices.get()`

Gets a device managed by the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the device requested. For example: "enterprises/XYZ/devices/123" |

#### `enterprises.devices.list()`

Lists devices managed by the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent enterprise to list devices under. E.g. "enterprises/XYZ". |
| `params.filter` | `string` | No | Optional filter to list devices. Filters can be done on: Device custom name (substring match): 'customName=wing' |

#### `enterprises.devices.executeCommand()`

Executes a command to device managed by the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the device requested. For example: "enterprises/XYZ/devices/123" |
| `params.requestBody` | `object` | Yes | The request body. |

### `enterprises.structures`

#### `enterprises.structures.get()`

Gets a structure managed by the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the structure requested. For example: "enterprises/XYZ/structures/ABC". |

#### `enterprises.structures.list()`

Lists structures managed by the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent enterprise to list structures under. E.g. "enterprises/XYZ". |
| `params.filter` | `string` | No | Optional filter to list structures. |

### `enterprises.structures.rooms`

#### `enterprises.structures.rooms.get()`

Gets a room managed by the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the room requested. For example: "enterprises/XYZ/structures/ABC/rooms/123". |

#### `enterprises.structures.rooms.list()`

Lists rooms managed by the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource name of the rooms requested. For example: "enterprises/XYZ/structures/ABC". |