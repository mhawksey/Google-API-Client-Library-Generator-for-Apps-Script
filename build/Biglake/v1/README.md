# BigLake API - Apps Script Client Library

Auto-generated client library for using the **BigLake API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 00:24:12 GMT
- **Last Modified:** Sat, 01 Nov 2025 00:24:12 GMT
- **Created:** Sun, 20 Jul 2025 16:13:58 GMT



---

## API Reference

### `projects`

### `projects.catalogs`

#### `projects.catalogs.setIamPolicy()`

Sets the IAM policy for the specified catalog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.catalogs.getIamPolicy()`

Gets the IAM policy for the specified Catalog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |

### `projects.catalogs.namespaces`

#### `projects.catalogs.namespaces.setIamPolicy()`

Sets the IAM policy for the specified catalog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.catalogs.namespaces.getIamPolicy()`

Gets the IAM policy for the specified Catalog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |

### `projects.locations`

### `projects.locations.catalogs`

#### `projects.locations.catalogs.get()`

Gets the catalog specified by the resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the catalog to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id} |

#### `projects.locations.catalogs.create()`

Creates a new catalog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this catalog will be created. Format: projects/{project_id_or_number}/locations/{location_id} |
| `params.catalogId` | `string` | No | Required. The ID to use for the catalog, which will become the final component of the catalog's resource name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.catalogs.list()`

List all catalogs in a specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of catalogs. Format: projects/{project_id_or_number}/locations/{location_id} |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListCatalogs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCatalogs` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | The maximum number of catalogs to return. The service may return fewer than this value. If unspecified, at most 50 catalogs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |

#### `projects.locations.catalogs.delete()`

Deletes an existing catalog specified by the catalog ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the catalog to delete. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id} |

### `projects.locations.catalogs.databases`

#### `projects.locations.catalogs.databases.patch()`

Updates an existing database specified by the database ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to update. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update. |
| `params.name` | `string` | Yes | Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.catalogs.databases.list()`

List all databases in a specified catalog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of databases to return. The service may return fewer than this value. If unspecified, at most 50 databases will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of databases. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id} |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListDatabases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatabases` must match the call that provided the page token. |

#### `projects.locations.catalogs.databases.get()`

Gets the database specified by the resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the database to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id} |

#### `projects.locations.catalogs.databases.create()`

Creates a new database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this database will be created. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id} |
| `params.databaseId` | `string` | No | Required. The ID to use for the database, which will become the final component of the database's resource name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.catalogs.databases.delete()`

Deletes an existing database specified by the database ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the database to delete. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id} |

### `projects.locations.catalogs.databases.tables`

#### `projects.locations.catalogs.databases.tables.rename()`

Renames an existing table specified by the table ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The table's `name` field is used to identify the table to rename. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.catalogs.databases.tables.list()`

List all tables in a specified database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No | The view for the returned tables. |
| `params.pageSize` | `integer` | No | The maximum number of tables to return. The service may return fewer than this value. If unspecified, at most 50 tables will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of tables. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id} |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListTables` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTables` must match the call that provided the page token. |

#### `projects.locations.catalogs.databases.tables.create()`

Creates a new table.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tableId` | `string` | No | Required. The ID to use for the table, which will become the final component of the table's resource name. |
| `params.parent` | `string` | Yes | Required. The parent resource where this table will be created. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.catalogs.databases.tables.delete()`

Deletes an existing table specified by the table ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the table to delete. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id} |

#### `projects.locations.catalogs.databases.tables.get()`

Gets the table specified by the resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the table to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id} |

#### `projects.locations.catalogs.databases.tables.patch()`

Updates an existing table specified by the table ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id} |
| `params.updateMask` | `string` | No | The list of fields to update. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update. |
| `params.requestBody` | `object` | Yes | The request body. |