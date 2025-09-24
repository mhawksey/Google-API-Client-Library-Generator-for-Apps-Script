# Cloud Commerce Partner Procurement API - Apps Script Client Library

Auto-generated client library for using the **Cloud Commerce Partner Procurement API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:12:31 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:12:31 GMT
- **Created:** Sun, 21 Sep 2025 17:12:31 GMT



---

## API Reference

### `providers`

### `providers.accounts`

#### `providers.accounts.get()`

Gets a requested Account resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the account to retrieve. |
| `params.view` | `string` | No | Optional. What information to include in the response. |

#### `providers.accounts.list()`

Lists Accounts that the provider has access to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. |
| `params.pageSize` | `integer` | No | The maximum number of entries that are requested. The default page size is 25 and the maximum page size is 200. |
| `params.pageToken` | `string` | No | The token for fetching the next page. |

#### `providers.accounts.approve()`

Grants an approval on an Account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the account, with the format `providers/{providerId}/accounts/{accountId}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `providers.accounts.reject()`

Rejects an approval on an Account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the account. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `providers.accounts.reset()`

Resets an Account and cancels all associated Entitlements. Partner can only reset accounts they own rather than customer accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the account. |
| `params.requestBody` | `object` | Yes | The request body. |

### `providers.entitlements`

#### `providers.entitlements.get()`

Gets a requested Entitlement resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entitlement to retrieve. |

#### `providers.entitlements.patch()`

Updates an existing Entitlement.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entitlement to update. |
| `params.updateMask` | `string` | No | The update mask that applies to the resource. See the [FieldMask definition] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask) for more details. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `providers.entitlements.list()`

Lists Entitlements for which the provider has read access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. |
| `params.filter` | `string` | No | The filter that can be used to limit the list request. The filter is a query string that can match a selected set of attributes with string values. For example `account=E-1234-5678-ABCD-EFGH`, `state=pending_cancellation`, and `plan!=foo-plan`. Supported query attributes are * `account` * `customer_billing_account` with value in the format of: `billingAccounts/{id}` * `product_external_name` * `quote_external_name` * `offer` * `new_pending_offer` * `plan` * `newPendingPlan` or `new_pending_plan` * `state` * `services` * `consumers.project` * `change_history.new_offer` Note that the consumers and change_history.new_offer match works on repeated structures, so equality (`consumers.project=projects/123456789`) is not supported. Set membership can be expressed with the `:` operator. For example, `consumers.project:projects/123456789` finds entitlements with at least one consumer with project field equal to `projects/123456789`. `change_history.new_offer` retrieves all entitlements that were once associated or are currently active with the offer. Also note that the state name match is case-insensitive and query can omit the prefix "ENTITLEMENT_". For example, `state=active` is equivalent to `state=ENTITLEMENT_ACTIVE`. If the query contains some special characters other than letters, underscore, or digits, the phrase must be quoted with double quotes. For example, `product="providerId:productId"`, where the product name needs to be quoted because it contains special character colon. Queries can be combined with `AND`, `OR`, and `NOT` to form more complex queries. They can also be grouped to force a desired evaluation order. For example, `state=active AND (account=E-1234 OR account=5678) AND NOT (product=foo-product)`. Connective `AND` can be omitted between two predicates. For example `account=E-1234 state=active` is equivalent to `account=E-1234 AND state=active`. |
| `params.pageSize` | `integer` | No | The maximum number of entries that are requested. The default page size is 200. |
| `params.pageToken` | `string` | No | The token for fetching the next page. |

#### `providers.entitlements.approve()`

Approves an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state. This method is invoked by the provider to approve the creation of the entitlement resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the entitlement, with the format `providers/{providerId}/entitlements/{entitlementId}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `providers.entitlements.reject()`

Rejects an entitlement that is in the EntitlementState.ENTITLEMENT_ACTIVATION_REQUESTED state. This method is invoked by the provider to reject the creation of the entitlement resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the entitlement. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `providers.entitlements.approvePlanChange()`

Approves an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state. This method is invoked by the provider to approve the plan change on the entitlement resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the entitlement. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `providers.entitlements.rejectPlanChange()`

Rejects an entitlement plan change that is in the EntitlementState.ENTITLEMENT_PENDING_PLAN_CHANGE_APPROVAL state. This method is invoked by the provider to reject the plan change on the entitlement resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the entitlement. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `providers.entitlements.suspend()`

Requests suspension of an active Entitlement. This is not yet supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entitlement to suspend. |
| `params.requestBody` | `object` | Yes | The request body. |