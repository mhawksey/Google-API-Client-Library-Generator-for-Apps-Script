# Area120 Tables API - Apps Script Client Library

Auto-generated client library for using the **Area120 Tables API (version: v1alpha1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:34:47 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:21:35 GMT
- **Created:** Sun, 20 Jul 2025 16:13:07 GMT



---

## API Reference

### `tables`

#### `tables.get()`

Gets a table. Returns NOT_FOUND if the table does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the table to retrieve. Format: tables/{table} |

#### `tables.list()`

Lists tables for the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of tables to return. The service may return fewer than this value. If unspecified, at most 20 tables are returned. The maximum value is 100; values above 100 are coerced to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListTables` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTables` must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. Sorting order for the list of tables on createTime/updateTime. |

### `tables.rows`

#### `tables.rows.get()`

Gets a row. Returns NOT_FOUND if the row does not exist in the table.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the row to retrieve. Format: tables/{table}/rows/{row} |
| `params.view` | `string` | No | Optional. Column key to use for values in the row. Defaults to user entered name. |

#### `tables.rows.list()`

Lists rows in a table. Returns NOT_FOUND if the table does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent table. Format: tables/{table} |
| `params.pageSize` | `integer` | No | The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 50 rows are returned. The maximum value is 1,000; values above 1,000 are coerced to 1,000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListRows` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRows` must match the call that provided the page token. |
| `params.view` | `string` | No | Optional. Column key to use for values in the row. Defaults to user entered name. |
| `params.filter` | `string` | No | Optional. Filter to only include resources matching the requirements. For more information, see [Filtering list results](https://support.google.com/area120-tables/answer/10503371). |
| `params.orderBy` | `string` | No | Optional. Sorting order for the list of rows on createTime/updateTime. |

#### `tables.rows.create()`

Creates a row.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent table where this row will be created. Format: tables/{table} |
| `params.view` | `string` | No | Optional. Column key to use for values in the row. Defaults to user entered name. |
| `params.resource` | `object` | Yes | The request body. |

#### `tables.rows.batchCreate()`

Creates multiple rows.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent table where the rows will be created. Format: tables/{table} |
| `params.resource` | `object` | Yes | The request body. |

#### `tables.rows.patch()`

Updates a row.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row. |
| `params.updateMask` | `string` | No | The list of fields to update. |
| `params.view` | `string` | No | Optional. Column key to use for values in the row. Defaults to user entered name. |
| `params.resource` | `object` | Yes | The request body. |

#### `tables.rows.batchUpdate()`

Updates multiple rows.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent table shared by all rows being updated. Format: tables/{table} |
| `params.resource` | `object` | Yes | The request body. |

#### `tables.rows.delete()`

Deletes a row.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the row to delete. Format: tables/{table}/rows/{row} |

#### `tables.rows.batchDelete()`

Deletes multiple rows.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent table shared by all rows being deleted. Format: tables/{table} |
| `params.resource` | `object` | Yes | The request body. |

### `workspaces`

#### `workspaces.get()`

Gets a workspace. Returns NOT_FOUND if the workspace does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the workspace to retrieve. Format: workspaces/{workspace} |

#### `workspaces.list()`

Lists workspaces for the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of workspaces to return. The service may return fewer than this value. If unspecified, at most 10 workspaces are returned. The maximum value is 25; values above 25 are coerced to 25. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces` must match the call that provided the page token. |