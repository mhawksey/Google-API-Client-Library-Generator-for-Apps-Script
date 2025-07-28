# Google Workspace Alert Center API - Apps Script Client Library

Auto-generated client library for using the **Google Workspace Alert Center API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:46:03 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:20:40 GMT
- **Created:** Sun, 20 Jul 2025 16:11:35 GMT



---

## API Reference

### `alerts`

#### `alerts.list()`

Lists the alerts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | No | Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). |
| `params.pageSize` | `integer` | No | Optional. The requested page size. Server may return fewer items than requested. If unspecified, server picks an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's next_page_token field. |
| `params.filter` | `string` | No | Optional. A query string for filtering alert results. For more details, see [Query filters](https://developers.google.com/workspace/admin/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields#alerts.list). |
| `params.orderBy` | `string` | No | Optional. The sort order of the list results. If not specified results may be returned in arbitrary order. You can sort the results in descending order based on the creation timestamp using `order_by="create_time desc"`. Currently, supported sorting are `create_time asc`, `create_time desc`, `update_time desc` |

#### `alerts.get()`

Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.alertId` | `string` | Yes | Required. The identifier of the alert to retrieve. |
| `params.customerId` | `string` | No | Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). |

#### `alerts.delete()`

Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.alertId` | `string` | Yes | Required. The identifier of the alert to delete. |
| `params.customerId` | `string` | No | Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). |

#### `alerts.undelete()`

Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.alertId` | `string` | Yes | Required. The identifier of the alert to undelete. |
| `params.resource` | `object` | Yes | The request body. |

#### `alerts.getMetadata()`

Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.alertId` | `string` | Yes | Required. The identifier of the alert this metadata belongs to. |
| `params.customerId` | `string` | No | Optional. The unique identifier of the Google Workspace account of the customer the alert metadata is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). |

#### `alerts.batchDelete()`

Performs batch delete operation on alerts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `alerts.batchUndelete()`

Performs batch undelete operation on alerts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `alerts.feedback`

#### `alerts.feedback.create()`

Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.alertId` | `string` | Yes | Required. The identifier of the alert this feedback belongs to. |
| `params.customerId` | `string` | No | Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). |
| `params.resource` | `object` | Yes | The request body. |

#### `alerts.feedback.list()`

Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.alertId` | `string` | Yes | Required. The alert identifier. The "-" wildcard could be used to represent all alerts. |
| `params.customerId` | `string` | No | Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). |
| `params.filter` | `string` | No | Optional. A query string for filtering alert feedback results. For more details, see [Query filters](https://developers.google.com/workspace/admin/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields#alerts.feedback.list). |

### `v1beta1`

#### `v1beta1.getSettings()`

Returns customer-level settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | No | Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must/ have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). |

#### `v1beta1.updateSettings()`

Updates the customer-level settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | No | Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). |
| `params.resource` | `object` | Yes | The request body. |