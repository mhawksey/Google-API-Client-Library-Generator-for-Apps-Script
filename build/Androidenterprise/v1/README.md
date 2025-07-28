# Google Play EMM API - Apps Script Client Library

Auto-generated client library for using the **Google Play EMM API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:46:32 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:21:03 GMT
- **Created:** Sun, 20 Jul 2025 16:12:14 GMT



---

## API Reference

### `devices`

#### `devices.list()`

Retrieves the IDs of all of a user's devices.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |

#### `devices.get()`

Retrieves the details of a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.deviceId` | `string` | Yes | The ID of the device. |

#### `devices.update()`

Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.deviceId` | `string` | Yes | The ID of the device. |
| `params.updateMask` | `string` | No | Mask that identifies which fields to update. If not set, all modifiable fields will be modified. When set in a query parameter, this field should be specified as updateMask=<field1>,<field2>,... |
| `params.resource` | `object` | Yes | The request body. |

#### `devices.getState()`

Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.deviceId` | `string` | Yes | The ID of the device. |

#### `devices.setState()`

Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.deviceId` | `string` | Yes | The ID of the device. |
| `params.resource` | `object` | Yes | The request body. |

#### `devices.forceReportUpload()`

Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.deviceId` | `string` | Yes | The ID of the device. |

### `enrollmentTokens`

#### `enrollmentTokens.create()`

Returns a token for device enrollment. The DPC can encode this token within the QR/NFC/zero-touch enrollment payload or fetch it before calling the on-device API to authenticate the user. The token can be generated for each device or reused across multiple devices.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | Required. The ID of the enterprise. |
| `params.resource` | `object` | Yes | The request body. |

### `enterprises`

#### `enterprises.list()`

Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.domain` | `string` | Yes | Required. The exact primary domain name of the enterprise to look up. |

#### `enterprises.get()`

Retrieves the name and domain of an enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |

#### `enterprises.enroll()`

Enrolls an enterprise with the calling EMM.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.token` | `string` | Yes | Required. The token provided by the enterprise to register the EMM. |
| `params.resource` | `object` | Yes | The request body. |

#### `enterprises.setAccount()`

Sets the account that will be used to authenticate to the API as the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.resource` | `object` | Yes | The request body. |

#### `enterprises.sendTestPushNotification()`

Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |

#### `enterprises.pullNotificationSet()`

Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestMode` | `string` | No | The request mode for pulling notifications. Specifying waitForNotifications will cause the request to block and wait until one or more notifications are present, or return an empty notification list if no notifications are present after some time. Specifying returnImmediately will cause the request to immediately return the pending notifications, or an empty list if no notifications are present. If omitted, defaults to waitForNotifications. |

#### `enterprises.acknowledgeNotificationSet()`

Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.notificationSetId` | `string` | No | The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided. |

#### `enterprises.unenroll()`

Unenrolls an enterprise from the calling EMM.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |

#### `enterprises.getStoreLayout()`

Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |

#### `enterprises.setStoreLayout()`

Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.resource` | `object` | Yes | The request body. |

#### `enterprises.generateSignupUrl()`

Generates a sign-up URL.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.callbackUrl` | `string` | No | The callback URL to which the Admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a single query parameter to this URL named "enterpriseToken" which will contain an opaque token to be used for the CompleteSignup request. Beware that this means that the URL will be parsed, the parameter added and then a new URL formatted, i.e. there may be some minor formatting changes and, more importantly, the URL must be well-formed so that it can be parsed. |
| `params.adminEmail` | `string` | No | Optional. Email address used to prefill the admin field of the enterprise signup form. This value is a hint only and can be altered by the user. If `allowedDomains` is non-empty then this must belong to one of the `allowedDomains`. |
| `params.allowedDomains` | `string` | No | Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has `*.` prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are always allowed, but will result in the creation of a managed Google Play Accounts enterprise. |

#### `enterprises.completeSignup()`

Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.completionToken` | `string` | No | The Completion token initially returned by GenerateSignupUrl. |
| `params.enterpriseToken` | `string` | No | The Enterprise token appended to the Callback URL. |

#### `enterprises.getServiceAccount()`

Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource. *Note:* After you create a key, you might need to wait for 60 seconds or more before you perform another operation with the key. If you try to perform an operation with the key immediately after you create the key, and you receive an error, you can retry the request with exponential backoff .

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.keyType` | `string` | No | The type of credential to return with the service account. Required. |

#### `enterprises.createWebToken()`

Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the JavaScript API documentation for further information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.resource` | `object` | Yes | The request body. |

#### `enterprises.generateEnterpriseUpgradeUrl()`

Generates an enterprise upgrade URL to upgrade an existing managed Google Play Accounts enterprise to a managed Google domain. See the guide to upgrading an enterprise for more details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | Required. The ID of the enterprise. |
| `params.allowedDomains` | `string` | No | Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has `*.` prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are not allowed. |
| `params.adminEmail` | `string` | No | Optional. Email address used to prefill the admin field of the enterprise signup form as part of the upgrade process. This value is a hint only and can be altered by the user. Personal email addresses are not allowed. If `allowedDomains` is non-empty then this must belong to one of the `allowedDomains`. |

### `entitlements`

#### `entitlements.list()`

Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |

#### `entitlements.get()`

Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.entitlementId` | `string` | Yes | The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm". |

#### `entitlements.update()`

Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.entitlementId` | `string` | Yes | The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm". |
| `params.install` | `boolean` | No | Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user. |
| `params.resource` | `object` | Yes | The request body. |

#### `entitlements.delete()`

Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.entitlementId` | `string` | Yes | The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm". |

### `grouplicenseusers`

#### `grouplicenseusers.list()`

Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.groupLicenseId` | `string` | Yes | The ID of the product the group license is for, e.g. "app:com.google.android.gm". |

### `grouplicenses`

#### `grouplicenses.list()`

Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |

#### `grouplicenses.get()`

Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.groupLicenseId` | `string` | Yes | The ID of the product the group license is for, e.g. "app:com.google.android.gm". |

### `installs`

#### `installs.list()`

Retrieves the details of all apps installed on the specified device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.deviceId` | `string` | Yes | The Android ID of the device. |

#### `installs.get()`

Retrieves details of an installation of an app on a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.deviceId` | `string` | Yes | The Android ID of the device. |
| `params.installId` | `string` | Yes | The ID of the product represented by the install, e.g. "app:com.google.android.gm". |

#### `installs.update()`

Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.deviceId` | `string` | Yes | The Android ID of the device. |
| `params.installId` | `string` | Yes | The ID of the product represented by the install, e.g. "app:com.google.android.gm". |
| `params.resource` | `object` | Yes | The request body. |

#### `installs.delete()`

Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed. A successful response indicates that a removal request has been sent to the device. The call will be considered successful even if the app is not present on the device (e.g. it was never installed, or was removed by the user).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.deviceId` | `string` | Yes | The Android ID of the device. |
| `params.installId` | `string` | Yes | The ID of the product represented by the install, e.g. "app:com.google.android.gm". |

### `managedconfigurationsfordevice`

#### `managedconfigurationsfordevice.list()`

Lists all the per-device managed configurations for the specified device. Only the ID is set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.deviceId` | `string` | Yes | The Android ID of the device. |

#### `managedconfigurationsfordevice.get()`

Retrieves details of a per-device managed configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.deviceId` | `string` | Yes | The Android ID of the device. |
| `params.managedConfigurationForDeviceId` | `string` | Yes | The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm". |

#### `managedconfigurationsfordevice.update()`

Adds or updates a per-device managed configuration for an app for the specified device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.deviceId` | `string` | Yes | The Android ID of the device. |
| `params.managedConfigurationForDeviceId` | `string` | Yes | The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm". |
| `params.resource` | `object` | Yes | The request body. |

#### `managedconfigurationsfordevice.delete()`

Removes a per-device managed configuration for an app for the specified device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.deviceId` | `string` | Yes | The Android ID of the device. |
| `params.managedConfigurationForDeviceId` | `string` | Yes | The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm". |

### `managedconfigurationsforuser`

#### `managedconfigurationsforuser.list()`

Lists all the per-user managed configurations for the specified user. Only the ID is set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |

#### `managedconfigurationsforuser.get()`

Retrieves details of a per-user managed configuration for an app for the specified user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.managedConfigurationForUserId` | `string` | Yes | The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm". |

#### `managedconfigurationsforuser.update()`

Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.managedConfigurationForUserId` | `string` | Yes | The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm". |
| `params.resource` | `object` | Yes | The request body. |

#### `managedconfigurationsforuser.delete()`

Removes a per-user managed configuration for an app for the specified user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.managedConfigurationForUserId` | `string` | Yes | The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm". |

### `managedconfigurationssettings`

#### `managedconfigurationssettings.list()`

Lists all the managed configurations settings for the specified app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.productId` | `string` | Yes | The ID of the product for which the managed configurations settings applies to. |

### `permissions`

#### `permissions.get()`

Retrieves details of an Android app permission for display to an enterprise admin.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.permissionId` | `string` | Yes | The ID of the permission. |
| `params.language` | `string` | No | The BCP47 tag for the user's preferred language (e.g. "en-US", "de") |

### `products`

#### `products.get()`

Retrieves details of a product for display to an enterprise admin.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.productId` | `string` | Yes | The ID of the product, e.g. "app:com.google.android.gm". |
| `params.language` | `string` | No | The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). |

#### `products.list()`

Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.maxResults` | `integer` | No | Defines how many results the list operation should return. The default number depends on the resource collection. |
| `params.token` | `string` | No | Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled. |
| `params.approved` | `boolean` | No | Specifies whether to search among all products (false) or among only products that have been approved (true). Only "true" is supported, and should be specified. |
| `params.query` | `string` | No | The search query as typed in the Google Play store search box. If omitted, all approved apps will be returned (using the pagination parameters), including apps that are not available in the store (e.g. unpublished apps). |
| `params.language` | `string` | No | The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). Results are returned in the language best matching the preferred language. |

#### `products.getPermissions()`

Retrieves the Android app permissions required by this app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.productId` | `string` | Yes | The ID of the product. |

#### `products.generateApprovalUrl()`

Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.productId` | `string` | Yes | The ID of the product. |
| `params.languageCode` | `string` | No | The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance "en-US". |

#### `products.approve()`

 Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. 

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.productId` | `string` | Yes | The ID of the product. |
| `params.resource` | `object` | Yes | The request body. |

#### `products.unapprove()`

Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.productId` | `string` | Yes | The ID of the product. |

#### `products.getAppRestrictionsSchema()`

Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.productId` | `string` | Yes | The ID of the product. |
| `params.language` | `string` | No | The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). |

### `serviceaccountkeys`

#### `serviceaccountkeys.insert()`

Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.resource` | `object` | Yes | The request body. |

#### `serviceaccountkeys.list()`

Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |

#### `serviceaccountkeys.delete()`

Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.keyId` | `string` | Yes | The ID of the key. |

### `storelayoutclusters`

#### `storelayoutclusters.list()`

Retrieves the details of all clusters on the specified page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.pageId` | `string` | Yes | The ID of the page. |

#### `storelayoutclusters.insert()`

Inserts a new cluster in a page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.pageId` | `string` | Yes | The ID of the page. |
| `params.resource` | `object` | Yes | The request body. |

#### `storelayoutclusters.get()`

Retrieves details of a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.pageId` | `string` | Yes | The ID of the page. |
| `params.clusterId` | `string` | Yes | The ID of the cluster. |

#### `storelayoutclusters.update()`

Updates a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.pageId` | `string` | Yes | The ID of the page. |
| `params.clusterId` | `string` | Yes | The ID of the cluster. |
| `params.resource` | `object` | Yes | The request body. |

#### `storelayoutclusters.delete()`

Deletes a cluster.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.pageId` | `string` | Yes | The ID of the page. |
| `params.clusterId` | `string` | Yes | The ID of the cluster. |

### `storelayoutpages`

#### `storelayoutpages.list()`

Retrieves the details of all pages in the store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |

#### `storelayoutpages.insert()`

Inserts a new store page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.resource` | `object` | Yes | The request body. |

#### `storelayoutpages.get()`

Retrieves details of a store page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.pageId` | `string` | Yes | The ID of the page. |

#### `storelayoutpages.update()`

Updates the content of a store page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.pageId` | `string` | Yes | The ID of the page. |
| `params.resource` | `object` | Yes | The request body. |

#### `storelayoutpages.delete()`

Deletes a store page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.pageId` | `string` | Yes | The ID of the page. |

### `users`

#### `users.insert()`

Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.update()`

Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.list()`

Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.email` | `string` | Yes | Required. The exact primary email address of the user to look up. |

#### `users.get()`

Retrieves a user's details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |

#### `users.delete()`

Deleted an EMM-managed user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |

#### `users.generateAuthenticationToken()`

Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |

#### `users.getAvailableProductSet()`

Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |

#### `users.revokeDeviceAccess()`

Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |

#### `users.setAvailableProductSet()`

Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.userId` | `string` | Yes | The ID of the user. |
| `params.resource` | `object` | Yes | The request body. |

### `webapps`

#### `webapps.get()`

Gets an existing web app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.webAppId` | `string` | Yes | The ID of the web app. |

#### `webapps.list()`

Retrieves the details of all web apps for a given enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |

#### `webapps.insert()`

Creates a new web app for the enterprise.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.resource` | `object` | Yes | The request body. |

#### `webapps.update()`

Updates an existing web app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.webAppId` | `string` | Yes | The ID of the web app. |
| `params.resource` | `object` | Yes | The request body. |

#### `webapps.delete()`

Deletes an existing web app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.enterpriseId` | `string` | Yes | The ID of the enterprise. |
| `params.webAppId` | `string` | Yes | The ID of the web app. |