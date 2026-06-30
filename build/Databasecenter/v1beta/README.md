# Database Center API - Apps Script Client Library

Auto-generated client library for using the **Database Center API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Jun 2026 23:43:14 GMT
- **Last Modified:** Tue, 30 Jun 2026 23:43:14 GMT
- **Created:** Tue, 30 Jun 2026 23:43:14 GMT



---

## API Reference

### `organizations`

#### `organizations.aggregateQueryStats()`

AggregateQueryStats provides database resource query execution statistics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `parent`. The allowed values are: * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders`

#### `folders.aggregateQueryStats()`

AggregateQueryStats provides database resource query execution statistics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `parent`. The allowed values are: * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") |
| `params.requestBody` | `object` | Yes | The request body. |

### `v1beta`

#### `v1beta.queryProducts()`

QueryProducts provides a list of all possible products which can be used to filter database resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListLocations` call. Provide this to retrieve the subsequent page. All other parameters except page size should match the call that provided the page page token. |
| `params.parent` | `string` | No | Required. Parent can be a project, a folder, or an organization. The allowed values are: * projects/{PROJECT_ID}/locations/{LOCATION} (e.g.,"projects/foo-bar/locations/us-central1") * projects/{PROJECT_NUMBER}/locations/{LOCATION} (e.g.,"projects/12345678/locations/us-central1") * folders/{FOLDER_NUMBER}/locations/{LOCATION} (e.g.,"folders/1234567/locations/us-central1") * organizations/{ORGANIZATION_NUMBER}/locations/{LOCATION} (e.g.,"organizations/123456/locations/us-central1") * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") |
| `params.pageSize` | `integer` | No | Optional. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |

#### `v1beta.queryDatabaseResourceGroups()`

QueryDatabaseResourceGroups returns paginated results of database groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `v1beta.queryIssues()`

QueryIssues provides a list of issues and recommendations that a user has access to and that are within the requested scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `v1beta.aggregateIssueStats()`

AggregateIssueStats provides database resource issues statistics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `v1beta.aggregateFleet()`

AggregateFleet provides statistics about the fleet grouped by various fields.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupBy` | `string` | No | Optional. A field that statistics are grouped by. Valid values are any combination of the following: * container * product.type * product.engine * product.version * location * sub_resource_type * management_type * tag.key * tag.value * tag.source * tag.inherited * label.key * label.value * label.source * has_maintenance_schedule * has_deny_maintenance_schedules Comma separated list. |
| `params.orderBy` | `string` | No | Optional. Valid values to order by are: * resource_groups_count * resources_count * and all fields supported by `group_by` The default order is ascending. Add "DESC" after the field name to indicate descending order. Add "ASC" after the field name to indicate ascending order. It supports ordering using multiple fields. For example: `order_by = "resource_groups_count"` sorts response in ascending order `order_by = "resource_groups_count DESC"` sorts response in descending order `order_by = "product.type, product.version DESC, location"` orders by type in ascending order, version in descending order and location in ascending order |
| `params.baselineDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.filter` | `string` | No | Optional. The expression to filter resources. Supported fields are: `full_resource_name`, `resource_type`, `container`, `product.type`, `product.engine`, `product.version`, `location`, `labels`, `issues`, fields of availability_info, data_protection_info, 'resource_name', etc. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. When `AND` and `OR` are both used in the expression, parentheses must be appropriately used to group the combinations. Example: `location="us-east1"` Example: `container="projects/123" OR container="projects/456"` Example: `(container="projects/123" OR container="projects/456") AND location="us-east1"` |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `AggregateFleet` call. Provide this to retrieve the subsequent page. All other parameters should match the parameters in the call that provided the page token except for page_size which can be different. |
| `params.pageSize` | `integer` | No | Optional. If unspecified, at most 50 items will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.baselineDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.parent` | `string` | No | Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `scope`. The allowed values are: * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") |
| `params.baselineDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

### `projects`

#### `projects.aggregateQueryStats()`

AggregateQueryStats provides database resource query execution statistics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `parent`. The allowed values are: * projects/{PROJECT_ID} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") |
| `params.requestBody` | `object` | Yes | The request body. |