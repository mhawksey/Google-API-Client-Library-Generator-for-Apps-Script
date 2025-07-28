# Cloud Billing Budget API - Apps Script Client Library

Auto-generated client library for using the **Cloud Billing Budget API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:35:51 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:22:23 GMT
- **Created:** Sun, 20 Jul 2025 16:14:26 GMT



---

## API Reference

### `billingAccounts`

### `billingAccounts.budgets`

#### `billingAccounts.budgets.create()`

Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the billing account to create the budget in. Values are of the form `billingAccounts/{billingAccountId}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `billingAccounts.budgets.patch()`

Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `billingAccounts.budgets.get()`

Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of budget to get. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`. |

#### `billingAccounts.budgets.list()`

Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of billing account to list budgets under. Values are of the form `billingAccounts/{billingAccountId}`. |
| `params.scope` | `string` | No | Optional. Set the scope of the budgets to be returned, in the format of the resource name. The scope of a budget is the cost that it tracks, such as costs for a single project, or the costs for all projects in a folder. Only project scope (in the format of "projects/project-id" or "projects/123") is supported in this field. When this field is set to a project's resource name, the budgets returned are tracking the costs for that project. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of budgets to return per page. The default and maximum value are 100. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListBudgetsResponse` which indicates that this is a continuation of a prior `ListBudgets` call, and that the system should return the next page of data. |

#### `billingAccounts.budgets.delete()`

Deletes a budget. Returns successfully if already deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the budget to delete. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`. |