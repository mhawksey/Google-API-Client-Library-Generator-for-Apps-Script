# Cloud Datastore API - Apps Script Client Library

Auto-generated client library for using the **Cloud Datastore API (version: v1beta3)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:12:11 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:12:11 GMT
- **Created:** Sun, 20 Jul 2025 16:25:36 GMT



---

## API Reference

### `projects`

#### `projects.lookup()`

Looks up entities by key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the project against which to make the request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.runQuery()`

Queries for entities.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the project against which to make the request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.runAggregationQuery()`

Runs an aggregation query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the project against which to make the request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.beginTransaction()`

Begins a new transaction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the project against which to make the request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.commit()`

Commits a transaction, optionally creating, deleting or modifying some entities.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the project against which to make the request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.rollback()`

Rolls back a transaction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the project against which to make the request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.allocateIds()`

Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the project against which to make the request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.reserveIds()`

Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the project against which to make the request. |
| `params.resource` | `object` | Yes | The request body. |