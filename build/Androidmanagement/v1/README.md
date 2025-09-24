# Android Management API - Apps Script Client Library

Auto-generated client library for using the **Android Management API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:04:05 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:04:05 GMT
- **Created:** Sun, 20 Jul 2025 16:12:17 GMT



---

## API Reference

### `signupUrls`

#### `signupUrls.create()`

Creates an enterprise signup URL.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | No | The ID of the Google Cloud Platform project which will own the enterprise. |
| `params.callbackUrl` | `string` | No | The callback URL that the admin will be redirected to after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes. |
| `params.adminEmail` | `string` | No | Optional. Email address used to prefill the admin field of the enterprise signup form. This value is a hint only and can be altered by the user. If allowedDomains is non-empty then this must belong to one of the allowedDomains. |
| `params.allowedDomains` | `string` | No | Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has *. prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are always allowed, but will result in the creation of a managed Google Play Accounts enterprise. |

### `enterprises`

#### `enterprises.create()`

Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | No | The ID of the Google Cloud Platform project which will own the enterprise. |
| `params.signupUrlName` | `string` | No | The name of the SignupUrl used to sign up for the enterprise. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises). |
| `params.enterpriseToken` | `string` | No | The enterprise token appended to the callback URL. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises). |
| `params.agreementAccepted` | `boolean` | No | Whether the enterprise admin has seen and agreed to the managed Google Play Agreement (https://www.android.com/enterprise/terms/). Do not set this field for any customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises). Set this to field to true for all EMM-managed enterprises (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `enterprises.delete()`

Permanently deletes an enterprise and all accounts and data associated with it. Warning: this will result in a cascaded deletion of all AM API devices associated with the deleted enterprise. Only available for EMM-managed enterprises.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the enterprise in the form enterprises/{enterpriseId}. |

#### `enterprises.get()`

Gets an enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the enterprise in the form enterprises/{enterpriseId}. |

#### `enterprises.patch()`

Updates an enterprise. See also: SigninDetail

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the enterprise in the form enterprises/{enterpriseId}. |
| `params.updateMask` | `string` | No | The field mask indicating the fields to update. If not set, all modifiable fields will be modified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `enterprises.list()`

Lists EMM-managed enterprises. Only BASIC fields are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | No | Required. The Cloud project ID of the EMM managing the enterprises. |
| `params.pageSize` | `integer` | No | The requested page size. The actual page size may be fixed to a min or max value. |
| `params.pageToken` | `string` | No | A token identifying a page of results returned by the server. |
| `params.view` | `string` | No | Specifies which Enterprise fields to return. This method only supports BASIC. |

#### `enterprises.generateEnterpriseUpgradeUrl()`

Generates an enterprise upgrade URL to upgrade an existing managed Google Play Accounts enterprise to a managed Google domain. See the guide (https://developers.google.com/android/management/upgrade-an-enterprise) for more details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the enterprise to be upgraded in the form enterprises/{enterpriseId}. |
| `params.requestBody` | `object` | Yes | The request body. |

### `enterprises.enrollmentTokens`

#### `enterprises.enrollmentTokens.create()`

Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the enterprise in the form enterprises/{enterpriseId}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `enterprises.enrollmentTokens.delete()`

Deletes an enrollment token. This operation invalidates the token, preventing its future use.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the enrollment token in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}. |

#### `enterprises.enrollmentTokens.get()`

Gets an active, unexpired enrollment token. A partial view of the enrollment token is returned. Only the following fields are populated: name, expirationTimestamp, allowPersonalUsage, value, qrCode. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the enrollment token in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}. |

#### `enterprises.enrollmentTokens.list()`

Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken object. Only the following fields are populated: name, expirationTimestamp, allowPersonalUsage, value, qrCode. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the enterprise in the form enterprises/{enterpriseId}. |
| `params.pageSize` | `integer` | No | The requested page size. The service may return fewer than this value. If unspecified, at most 10 items will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | A token identifying a page of results returned by the server. |

### `enterprises.webTokens`

#### `enterprises.webTokens.create()`

Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the enterprise in the form enterprises/{enterpriseId}. |
| `params.requestBody` | `object` | Yes | The request body. |

### `enterprises.devices`

#### `enterprises.devices.get()`

Gets a device. Deleted devices will respond with a 404 error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}. |

#### `enterprises.devices.list()`

Lists devices for a given enterprise. Deleted devices are not returned in the response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the enterprise in the form enterprises/{enterpriseId}. |
| `params.pageSize` | `integer` | No | The requested page size. If unspecified, at most 10 devices will be returned. The maximum value is 100; values above 100 will be coerced to 100. The limits can change over time. |
| `params.pageToken` | `string` | No | A token identifying a page of results returned by the server. |

#### `enterprises.devices.patch()`

Updates a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}. |
| `params.updateMask` | `string` | No | The field mask indicating the fields to update. If not set, all modifiable fields will be modified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `enterprises.devices.delete()`

Deletes a device. This operation attempts to wipe the device but this is not guaranteed to succeed if the device is offline for an extended period. Deleted devices do not show up in enterprises.devices.list calls and a 404 is returned from enterprises.devices.get.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}. |
| `params.wipeDataFlags` | `string` | No | Optional flags that control the device wiping behavior. |
| `params.wipeReasonMessage` | `string` | No | Optional. A short message displayed to the user before wiping the work profile on personal devices. This has no effect on company owned devices. The maximum message length is 200 characters. |

#### `enterprises.devices.issueCommand()`

Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}. |
| `params.requestBody` | `object` | Yes | The request body. |

### `enterprises.devices.operations`

#### `enterprises.devices.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `enterprises.devices.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `enterprises.devices.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `enterprises.policies`

#### `enterprises.policies.get()`

Gets a policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}. |

#### `enterprises.policies.list()`

Lists policies for a given enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the enterprise in the form enterprises/{enterpriseId}. |
| `params.pageSize` | `integer` | No | The requested page size. The actual page size may be fixed to a min or max value. |
| `params.pageToken` | `string` | No | A token identifying a page of results returned by the server. |

#### `enterprises.policies.patch()`

Updates or creates a policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}. |
| `params.updateMask` | `string` | No | The field mask indicating the fields to update. If not set, all modifiable fields will be modified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `enterprises.policies.delete()`

Deletes a policy. This operation is only permitted if no devices are currently referencing the policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}. |

#### `enterprises.policies.modifyPolicyApplications()`

Updates or creates applications in a policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Policy containing the ApplicationPolicy objects to be updated, in the form enterprises/{enterpriseId}/policies/{policyId}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `enterprises.policies.removePolicyApplications()`

Removes applications in a policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the policy containing the ApplicationPolicy objects to be removed, in the form enterprises/{enterpriseId}/policies/{policyId}. |
| `params.requestBody` | `object` | Yes | The request body. |

### `enterprises.applications`

#### `enterprises.applications.get()`

Gets info about an application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the application in the form enterprises/{enterpriseId}/applications/{package_name}. |
| `params.languageCode` | `string` | No | The preferred language for localized application info, as a BCP47 tag (e.g. "en-US", "de"). If not specified the default language of the application will be used. |

### `enterprises.webApps`

#### `enterprises.webApps.create()`

Creates a web app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the enterprise in the form enterprises/{enterpriseId}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `enterprises.webApps.get()`

Gets a web app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}. |

#### `enterprises.webApps.list()`

Lists web apps for a given enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the enterprise in the form enterprises/{enterpriseId}. |
| `params.pageSize` | `integer` | No | The requested page size. This is a hint and the actual page size in the response may be different. |
| `params.pageToken` | `string` | No | A token identifying a page of results returned by the server. |

#### `enterprises.webApps.patch()`

Updates a web app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}. |
| `params.updateMask` | `string` | No | The field mask indicating the fields to update. If not set, all modifiable fields will be modified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `enterprises.webApps.delete()`

Deletes a web app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}. |

### `enterprises.migrationTokens`

#### `enterprises.migrationTokens.create()`

Creates a migration token, to migrate an existing device from being managed by the EMM's Device Policy Controller (DPC) to being managed by the Android Management API. See the guide (https://developers.google.com/android/management/dpc-migration) for more details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The enterprise in which this migration token is created. This must be the same enterprise which already manages the device in the Play EMM API. Format: enterprises/{enterprise} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `enterprises.migrationTokens.get()`

Gets a migration token.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the migration token to retrieve. Format: enterprises/{enterprise}/migrationTokens/{migration_token} |

#### `enterprises.migrationTokens.list()`

Lists migration tokens.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The enterprise which the migration tokens belong to. Format: enterprises/{enterprise} |
| `params.pageSize` | `integer` | No | The maximum number of migration tokens to return. Fewer migration tokens may be returned. If unspecified, at most 100 migration tokens will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | A page token, received from a previous ListMigrationTokens call. Provide this to retrieve the subsequent page.When paginating, all other parameters provided to ListMigrationTokens must match the call that provided the page token. |

### `provisioningInfo`

#### `provisioningInfo.get()`

Get the device provisioning information by the identifier provided in the sign-in url.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The identifier that Android Device Policy passes to the 3P sign-in page in the form of provisioningInfo/{provisioning_info}. |