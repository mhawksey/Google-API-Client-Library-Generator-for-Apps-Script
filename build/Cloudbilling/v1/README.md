# Cloud Billing API - Apps Script Client Library

Auto-generated client library for using the **Cloud Billing API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:49:12 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:23:12 GMT
- **Created:** Sun, 20 Jul 2025 16:21:15 GMT



---

## API Reference

### `billingAccounts`

#### `billingAccounts.get()`

Gets information about a billing account. The current authenticated user must be a [viewer of the billing account](https://cloud.google.com/billing/docs/how-to/billing-access).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the billing account to retrieve. For example, `billingAccounts/012345-567890-ABCDEF`. |

#### `billingAccounts.list()`

Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Requested page size. The maximum page size is 100; this is also the default. |
| `params.pageToken` | `string` | No | A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListBillingAccounts` call. If unspecified, the first page of results is returned. |
| `params.filter` | `string` | No | Options for how to filter the returned billing accounts. This only supports filtering for [subaccounts](https://cloud.google.com/billing/docs/concepts) under a single provided parent billing account. (for example, `master_billing_account=billingAccounts/012345-678901-ABCDEF`). Boolean algebra and other fields are not currently supported. |
| `params.parent` | `string` | No | Optional. The parent resource to list billing accounts from. Format: - `organizations/{organization_id}`, for example, `organizations/12345678` - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF` |

#### `billingAccounts.patch()`

Updates a billing account's fields. Currently the only field that can be edited is `display_name`. The current authenticated user must have the `billing.accounts.update` IAM permission, which is typically given to the [administrator](https://cloud.google.com/billing/docs/how-to/billing-access) of the billing account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the billing account resource to be updated. |
| `params.updateMask` | `string` | No | The update mask applied to the resource. Only "display_name" is currently supported. |
| `params.resource` | `object` | Yes | The request body. |

#### `billingAccounts.create()`

This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned for subaccounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | No | Optional. The parent to create a billing account from. Format: - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF` |
| `params.resource` | `object` | Yes | The request body. |

#### `billingAccounts.getIamPolicy()`

Gets the access control policy for a billing account. The caller must have the `billing.accounts.getIamPolicy` permission on the account, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `billingAccounts.setIamPolicy()`

Sets the access control policy for a billing account. Replaces any existing policy. The caller must have the `billing.accounts.setIamPolicy` permission on the account, which is often given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `billingAccounts.testIamPermissions()`

Tests the access control policy for a billing account. This method takes the resource and a set of permissions as input and returns the subset of the input permissions that the caller is allowed for that resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `billingAccounts.move()`

Changes which parent organization a billing account belongs to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the billing account to move. Must be of the form `billingAccounts/{billing_account_id}`. The specified billing account cannot be a subaccount, since a subaccount always belongs to the same organization as its parent account. |
| `params.resource` | `object` | Yes | The request body. |

### `billingAccounts.subAccounts`

#### `billingAccounts.subAccounts.list()`

Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Optional. The parent resource to list billing accounts from. Format: - `organizations/{organization_id}`, for example, `organizations/12345678` - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF` |
| `params.pageSize` | `integer` | No | Requested page size. The maximum page size is 100; this is also the default. |
| `params.pageToken` | `string` | No | A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListBillingAccounts` call. If unspecified, the first page of results is returned. |
| `params.filter` | `string` | No | Options for how to filter the returned billing accounts. This only supports filtering for [subaccounts](https://cloud.google.com/billing/docs/concepts) under a single provided parent billing account. (for example, `master_billing_account=billingAccounts/012345-678901-ABCDEF`). Boolean algebra and other fields are not currently supported. |

#### `billingAccounts.subAccounts.create()`

This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned for subaccounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Optional. The parent to create a billing account from. Format: - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF` |
| `params.resource` | `object` | Yes | The request body. |

### `billingAccounts.projects`

#### `billingAccounts.projects.list()`

Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the billing account associated with the projects that you want to list. For example, `billingAccounts/012345-567890-ABCDEF`. |
| `params.pageSize` | `integer` | No | Requested page size. The maximum page size is 100; this is also the default. |
| `params.pageToken` | `string` | No | A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous `ListProjectBillingInfo` call. If unspecified, the first page of results is returned. |

### `organizations`

### `organizations.billingAccounts`

#### `organizations.billingAccounts.list()`

Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Optional. The parent resource to list billing accounts from. Format: - `organizations/{organization_id}`, for example, `organizations/12345678` - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF` |
| `params.pageSize` | `integer` | No | Requested page size. The maximum page size is 100; this is also the default. |
| `params.pageToken` | `string` | No | A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListBillingAccounts` call. If unspecified, the first page of results is returned. |
| `params.filter` | `string` | No | Options for how to filter the returned billing accounts. This only supports filtering for [subaccounts](https://cloud.google.com/billing/docs/concepts) under a single provided parent billing account. (for example, `master_billing_account=billingAccounts/012345-678901-ABCDEF`). Boolean algebra and other fields are not currently supported. |

#### `organizations.billingAccounts.create()`

This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned for subaccounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Optional. The parent to create a billing account from. Format: - `billingAccounts/{billing_account_id}`, for example, `billingAccounts/012345-567890-ABCDEF` |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.billingAccounts.move()`

Changes which parent organization a billing account belongs to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.destinationParent` | `string` | Yes | Required. The resource name of the Organization to move the billing account under. Must be of the form `organizations/{organization_id}`. |
| `params.name` | `string` | Yes | Required. The resource name of the billing account to move. Must be of the form `billingAccounts/{billing_account_id}`. The specified billing account cannot be a subaccount, since a subaccount always belongs to the same organization as its parent account. |

### `projects`

#### `projects.getBillingInfo()`

Gets the billing information for a project. The current authenticated user must have the `resourcemanager.projects.get` permission for the project, which can be granted by assigning the [Project Viewer](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the project for which billing information is retrieved. For example, `projects/tokyo-rain-123`. |

#### `projects.updateBillingInfo()`

Sets or updates the billing account associated with a project. You specify the new billing account by setting the `billing_account_name` in the `ProjectBillingInfo` resource to the resource name of a billing account. Associating a project with an open billing account enables billing on the project and allows charges for resource usage. If the project already had a billing account, this method changes the billing account used for resource usage charges. *Note:* Incurred charges that have not yet been reported in the transaction history of the Google Cloud Console might be billed to the new billing account, even if the charge occurred before the new billing account was assigned to the project. The current authenticated user must have ownership privileges for both the [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo ) and the [billing account](https://cloud.google.com/billing/docs/how-to/billing-access). You can disable billing on the project by setting the `billing_account_name` field to empty. This action disassociates the current billing account from the project. Any billable activity of your in-use services will stop, and your application could stop functioning as expected. Any unbilled charges to date will be billed to the previously associated account. The current authenticated user must be either an owner of the project or an owner of the billing account for the project. Note that associating a project with a *closed* billing account will have much the same effect as disabling billing on the project: any paid resources used by the project will be shut down. Thus, unless you wish to disable billing, you should always call this method with the name of an *open* billing account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the project associated with the billing information that you want to update. For example, `projects/tokyo-rain-123`. |
| `params.resource` | `object` | Yes | The request body. |

### `services`

#### `services.list()`

Lists all public cloud services.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Requested page size. Defaults to 5000. |
| `params.pageToken` | `string` | No | A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListServices` call. If unspecified, the first page of results is returned. |

### `services.skus`

#### `services.skus.list()`

Lists all publicly available SKUs for a given cloud service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the service. Example: "services/6F81-5844-456A" |
| `params.startTime` | `string` | No | Optional inclusive start time of the time range for which the pricing versions will be returned. Timestamps in the future are not allowed. The time range has to be within a single calendar month in America/Los_Angeles timezone. Time range as a whole is optional. If not specified, the latest pricing will be returned (up to 12 hours old at most). |
| `params.endTime` | `string` | No | Optional exclusive end time of the time range for which the pricing versions will be returned. Timestamps in the future are not allowed. The time range has to be within a single calendar month in America/Los_Angeles timezone. Time range as a whole is optional. If not specified, the latest pricing will be returned (up to 12 hours old at most). |
| `params.currencyCode` | `string` | No | The ISO 4217 currency code for the pricing info in the response proto. Will use the conversion rate as of start_time. Optional. If not specified USD will be used. |
| `params.pageSize` | `integer` | No | Requested page size. Defaults to 5000. |
| `params.pageToken` | `string` | No | A token identifying a page of results to return. This should be a `next_page_token` value returned from a previous `ListSkus` call. If unspecified, the first page of results is returned. |