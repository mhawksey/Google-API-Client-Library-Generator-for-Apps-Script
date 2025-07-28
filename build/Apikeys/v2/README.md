# API Keys API - Apps Script Client Library

Auto-generated client library for using the **API Keys API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:46:57 GMT
- **Last Modified:** Sun, 27 Jul 2025 15:46:57 GMT
- **Created:** Sun, 20 Jul 2025 16:12:43 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.keys`

#### `projects.locations.keys.getKeyString()`

Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the API key to be retrieved. |

#### `projects.locations.keys.delete()`

Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | Optional. The etag known to the client for the expected state of the key. This is to be used for optimistic concurrency. |
| `params.name` | `string` | Yes | Required. The resource name of the API key to be deleted. |

#### `projects.locations.keys.undelete()`

Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the API key to be undeleted. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keys.get()`

Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the API key to get. |

#### `projects.locations.keys.list()`

Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Specifies the maximum number of results to be returned at a time. |
| `params.parent` | `string` | Yes | Required. Lists all API keys associated with this project. |
| `params.showDeleted` | `boolean` | No | Optional. Indicate that keys deleted in the past 30 days should also be returned. |
| `params.pageToken` | `string` | No | Optional. Requests a specific page of results. |

#### `projects.locations.keys.create()`

Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.keyId` | `string` | No | User specified key id (optional). If specified, it will become the final component of the key resource name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the id must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. The id must NOT be a UUID-like string. |
| `params.parent` | `string` | Yes | Required. The project in which the API key is created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keys.patch()`

Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The field mask specifies which fields to be updated as part of this request. All other fields are ignored. Mutable fields are: `display_name`, `restrictions`, and `annotations`. If an update mask is not provided, the service treats it as an implied mask equivalent to all allowed fields that are set on the wire. If the field mask has a special value "*", the service treats it equivalent to replace all allowed mutable fields. |
| `params.name` | `string` | Yes | Output only. The resource name of the key. The `name` has the form: `projects//locations/global/keys/`. For example: `projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2` NOTE: Key is a global resource; hence the only supported value for location is `global`. |
| `params.resource` | `object` | Yes | The request body. |

### `keys`

#### `keys.lookupKey()`

Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the `apikeys.keys.lookup` permission on the parent project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.keyString` | `string` | No | Required. Finds the project that owns the key string value. |

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |