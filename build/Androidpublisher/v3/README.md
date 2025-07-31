# Google Play Android Developer API - Apps Script Client Library

Auto-generated client library for using the **Google Play Android Developer API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:22:03 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:21:07 GMT
- **Created:** Sun, 20 Jul 2025 16:12:21 GMT



---

## API Reference

### `users`

#### `users.create()`

Grant access for a user to the given developer account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The developer account to add the user to. Format: developers/{developer} |
| `params.resource` | `object` | Yes | The request body. |

#### `users.list()`

Lists all users with access to a developer account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The developer account to fetch users from. Format: developers/{developer} |
| `params.pageSize` | `integer` | No | The maximum number of results to return. This must be set to -1 to disable pagination. |
| `params.pageToken` | `string` | No | A token received from a previous call to this method, in order to retrieve further results. |

#### `users.patch()`

Updates access for the user to the developer account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}". |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.delete()`

Removes all access for the user to the given developer account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the user to delete. Format: developers/{developer}/users/{email} |

### `grants`

#### `grants.create()`

Grant access for a user to the given package.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The user which needs permission. Format: developers/{developer}/users/{user} |
| `params.resource` | `object` | Yes | The request body. |

#### `grants.patch()`

Updates access for the user to the given package.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name for this grant, following the pattern "developers/{developer}/users/{email}/grants/{package_name}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name. |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `grants.delete()`

Removes all access for the user to the given package or developer account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the grant to delete. Format: developers/{developer}/users/{email}/grants/{package_name} |

### `apprecovery`

#### `apprecovery.create()`

Create an app recovery action with recovery status as DRAFT. Note that this action does not execute the recovery action.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. Package name of the app on which recovery action is performed. |
| `params.resource` | `object` | Yes | The request body. |

#### `apprecovery.deploy()`

Deploy an already created app recovery action with recovery status DRAFT. Note that this action activates the recovery action for all targeted users and changes its status to ACTIVE.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. Package name of the app for which recovery action is deployed. |
| `params.appRecoveryId` | `string` | Yes | Required. ID corresponding to the app recovery action to deploy. |
| `params.resource` | `object` | Yes | The request body. |

#### `apprecovery.list()`

List all app recovery action resources associated with a particular package name and app version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. Package name of the app for which list of recovery actions is requested. |
| `params.versionCode` | `string` | No | Required. Version code targeted by the list of recovery actions. |

#### `apprecovery.addTargeting()`

Incrementally update targeting for a recovery action. Note that only the criteria selected during the creation of recovery action can be expanded.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. Package name of the app for which recovery action is to be updated. |
| `params.appRecoveryId` | `string` | Yes | Required. ID corresponding to the app recovery action. |
| `params.resource` | `object` | Yes | The request body. |

#### `apprecovery.cancel()`

Cancel an already executing app recovery action. Note that this action changes status of the recovery action to CANCELED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. Package name of the app for which recovery action cancellation is requested. |
| `params.appRecoveryId` | `string` | Yes | Required. ID corresponding to the app recovery action. |
| `params.resource` | `object` | Yes | The request body. |

### `purchases`

### `purchases.productsv2`

#### `purchases.productsv2.getproductpurchasev2()`

Checks the purchase and consumption status of an inapp item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | The package name of the application the inapp product was sold in (for example, 'com.some.thing'). |
| `params.token` | `string` | Yes | The token provided to the user's device when the inapp product was purchased. |

### `purchases.products`

#### `purchases.products.get()`

Checks the purchase and consumption status of an inapp item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | The package name of the application the inapp product was sold in (for example, 'com.some.thing'). |
| `params.productId` | `string` | Yes | The inapp product SKU (for example, 'com.some.thing.inapp1'). |
| `params.token` | `string` | Yes | The token provided to the user's device when the inapp product was purchased. |

#### `purchases.products.acknowledge()`

Acknowledges a purchase of an inapp item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | The package name of the application the inapp product was sold in (for example, 'com.some.thing'). |
| `params.productId` | `string` | Yes | The inapp product SKU (for example, 'com.some.thing.inapp1'). |
| `params.token` | `string` | Yes | The token provided to the user's device when the inapp product was purchased. |
| `params.resource` | `object` | Yes | The request body. |

#### `purchases.products.consume()`

Consumes a purchase for an inapp item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | The package name of the application the inapp product was sold in (for example, 'com.some.thing'). |
| `params.productId` | `string` | Yes | The inapp product SKU (for example, 'com.some.thing.inapp1'). |
| `params.token` | `string` | Yes | The token provided to the user's device when the inapp product was purchased. |

### `purchases.subscriptions`

#### `purchases.subscriptions.get()`

Deprecated: Use purchases.subscriptionsv2.get instead. Checks whether a user's subscription purchase is valid and returns its expiry time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | The package name of the application for which this subscription was purchased (for example, 'com.some.thing'). |
| `params.subscriptionId` | `string` | Yes | The purchased subscription ID (for example, 'monthly001'). |
| `params.token` | `string` | Yes | The token provided to the user's device when the subscription was purchased. |

#### `purchases.subscriptions.cancel()`

Cancels a user's subscription purchase. The subscription remains valid until its expiration time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | The package name of the application for which this subscription was purchased (for example, 'com.some.thing'). |
| `params.subscriptionId` | `string` | Yes | Note: Since May 21, 2025, subscription_id is not required, and not recommended for subscription with add-ons. The purchased subscription ID (for example, 'monthly001'). |
| `params.token` | `string` | Yes | The token provided to the user's device when the subscription was purchased. |

#### `purchases.subscriptions.defer()`

Defers a user's subscription purchase until a specified future expiration time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | The package name of the application for which this subscription was purchased (for example, 'com.some.thing'). |
| `params.subscriptionId` | `string` | Yes | The purchased subscription ID (for example, 'monthly001'). |
| `params.token` | `string` | Yes | The token provided to the user's device when the subscription was purchased. |
| `params.resource` | `object` | Yes | The request body. |

#### `purchases.subscriptions.refund()`

Deprecated: Use orders.refund instead. Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | The package name of the application for which this subscription was purchased (for example, 'com.some.thing'). |
| `params.subscriptionId` | `string` | Yes | "The purchased subscription ID (for example, 'monthly001'). |
| `params.token` | `string` | Yes | The token provided to the user's device when the subscription was purchased. |

#### `purchases.subscriptions.revoke()`

Deprecated: Use purchases.subscriptionsv2.revoke instead. Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | The package name of the application for which this subscription was purchased (for example, 'com.some.thing'). |
| `params.subscriptionId` | `string` | Yes | The purchased subscription ID (for example, 'monthly001'). |
| `params.token` | `string` | Yes | The token provided to the user's device when the subscription was purchased. |

#### `purchases.subscriptions.acknowledge()`

Acknowledges a subscription purchase.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | The package name of the application for which this subscription was purchased (for example, 'com.some.thing'). |
| `params.subscriptionId` | `string` | Yes | Note: Since May 21, 2025, subscription_id is not required, and not recommended for subscription with add-ons. The purchased subscription ID (for example, 'monthly001'). |
| `params.token` | `string` | Yes | The token provided to the user's device when the subscription was purchased. |
| `params.resource` | `object` | Yes | The request body. |

### `purchases.subscriptionsv2`

#### `purchases.subscriptionsv2.get()`

Get metadata about a subscription

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | The package of the application for which this subscription was purchased (for example, 'com.some.thing'). |
| `params.token` | `string` | Yes | Required. The token provided to the user's device when the subscription was purchased. |

#### `purchases.subscriptionsv2.revoke()`

Revoke a subscription purchase for the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The package of the application for which this subscription was purchased (for example, 'com.some.thing'). |
| `params.token` | `string` | Yes | Required. The token provided to the user's device when the subscription was purchased. |
| `params.resource` | `object` | Yes | The request body. |

### `purchases.voidedpurchases`

#### `purchases.voidedpurchases.list()`

Lists the purchases that were canceled, refunded or charged-back.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing'). |
| `params.maxResults` | `integer` | No | Defines how many results the list operation should return. The default number depends on the resource collection. |
| `params.startIndex` | `integer` | No | Defines the index of the first element to return. This can only be used if indexed paging is enabled. |
| `params.token` | `string` | No | Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled. |
| `params.startTime` | `string` | No | The time, in milliseconds since the Epoch, of the oldest voided purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response. |
| `params.endTime` | `string` | No | The time, in milliseconds since the Epoch, of the newest voided purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response. |
| `params.type` | `integer` | No | The type of voided purchases that you want to see in the response. Possible values are: 0. Only voided in-app product purchases will be returned in the response. This is the default value. 1. Both voided in-app purchases and voided subscription purchases will be returned in the response. Note: Before requesting to receive voided subscription purchases, you must switch to use orderId in the response which uniquely identifies one-time purchases and subscriptions. Otherwise, you will receive multiple subscription orders with the same PurchaseToken, because subscription renewal orders share the same PurchaseToken. |
| `params.includeQuantityBasedPartialRefund` | `boolean` | No | Optional. Whether to include voided purchases of quantity-based partial refunds, which are applicable only to multi-quantity purchases. If true, additional voided purchases may be returned with voidedQuantity that indicates the refund quantity of a quantity-based partial refund. The default value is false. |

### `edits`

#### `edits.insert()`

Creates a new edit for an app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.resource` | `object` | Yes | The request body. |

#### `edits.get()`

Gets an app edit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |

#### `edits.delete()`

Deletes an app edit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |

#### `edits.commit()`

Commits an app edit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.changesNotSentForReview` | `boolean` | No | When a rejection happens, the parameter will make sure that the changes in this edit won't be reviewed until they are explicitly sent for review from within the Google Play Console UI. These changes will be added to any other changes that are not yet sent for review. |

#### `edits.validate()`

Validates an app edit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |

### `edits.apks`

#### `edits.apks.upload()`

Uploads an APK and adds to the current edit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |

#### `edits.apks.list()`

Lists all current APKs of the app and edit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |

#### `edits.apks.addexternallyhosted()`

Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.resource` | `object` | Yes | The request body. |

### `edits.bundles`

#### `edits.bundles.list()`

Lists all current Android App Bundles of the app and edit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |

#### `edits.bundles.upload()`

Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.ackBundleInstallationWarning` | `boolean` | No | Deprecated. The installation warning has been removed, it's not necessary to set this field anymore. |
| `params.deviceTierConfigId` | `string` | No | Device tier config (DTC) to be used for generating deliverables (APKs). Contains id of the DTC or "LATEST" for last uploaded DTC. |

### `edits.countryavailability`

#### `edits.countryavailability.get()`

Gets country availability.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.track` | `string` | Yes | The track to read from. |

### `edits.deobfuscationfiles`

#### `edits.deobfuscationfiles.upload()`

Uploads a new deobfuscation file and attaches to the specified APK.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Unique identifier for the Android app. |
| `params.editId` | `string` | Yes | Unique identifier for this edit. |
| `params.apkVersionCode` | `integer` | Yes | The version code of the APK whose Deobfuscation File is being uploaded. |
| `params.deobfuscationFileType` | `string` | Yes | The type of the deobfuscation file. |

### `edits.details`

#### `edits.details.get()`

Gets details of an app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |

#### `edits.details.update()`

Updates details of an app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.resource` | `object` | Yes | The request body. |

#### `edits.details.patch()`

Patches details of an app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.resource` | `object` | Yes | The request body. |

### `edits.expansionfiles`

#### `edits.expansionfiles.get()`

Fetches the expansion file configuration for the specified APK.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.apkVersionCode` | `integer` | Yes | The version code of the APK whose expansion file configuration is being read or modified. |
| `params.expansionFileType` | `string` | Yes | The file type of the file configuration which is being read or modified. |

#### `edits.expansionfiles.update()`

Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.apkVersionCode` | `integer` | Yes | The version code of the APK whose expansion file configuration is being read or modified. |
| `params.expansionFileType` | `string` | Yes | The file type of the file configuration which is being read or modified. |
| `params.resource` | `object` | Yes | The request body. |

#### `edits.expansionfiles.patch()`

Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.apkVersionCode` | `integer` | Yes | The version code of the APK whose expansion file configuration is being read or modified. |
| `params.expansionFileType` | `string` | Yes | The file type of the expansion file configuration which is being updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `edits.expansionfiles.upload()`

Uploads a new expansion file and attaches to the specified APK.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.apkVersionCode` | `integer` | Yes | The version code of the APK whose expansion file configuration is being read or modified. |
| `params.expansionFileType` | `string` | Yes | The file type of the expansion file configuration which is being updated. |

### `edits.images`

#### `edits.images.list()`

Lists all images. The response may be empty.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.language` | `string` | Yes | Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). There must be a store listing for the specified language. |
| `params.imageType` | `string` | Yes | Type of the Image. Providing an image type that refers to no images will return an empty response. |

#### `edits.images.delete()`

Deletes the image (specified by id) from the edit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.language` | `string` | Yes | Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). |
| `params.imageType` | `string` | Yes | Type of the Image. |
| `params.imageId` | `string` | Yes | Unique identifier an image within the set of images attached to this edit. |

#### `edits.images.deleteall()`

Deletes all images for the specified language and image type. Returns an empty response if no images are found.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.language` | `string` | Yes | Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op. |
| `params.imageType` | `string` | Yes | Type of the Image. Providing an image type that refers to no images is a no-op. |

#### `edits.images.upload()`

Uploads an image of the specified language and image type, and adds to the edit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.language` | `string` | Yes | Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op. |
| `params.imageType` | `string` | Yes | Type of the Image. |

### `edits.listings`

#### `edits.listings.update()`

Creates or updates a localized store listing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.language` | `string` | Yes | Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). |
| `params.resource` | `object` | Yes | The request body. |

#### `edits.listings.patch()`

Patches a localized store listing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.language` | `string` | Yes | Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). |
| `params.resource` | `object` | Yes | The request body. |

#### `edits.listings.get()`

Gets a localized store listing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.language` | `string` | Yes | Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). |

#### `edits.listings.list()`

Lists all localized store listings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |

#### `edits.listings.delete()`

Deletes a localized store listing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.language` | `string` | Yes | Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). |

#### `edits.listings.deleteall()`

Deletes all store listings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |

### `edits.testers`

#### `edits.testers.get()`

Gets testers. Note: Testers resource does not support email lists.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.track` | `string` | Yes | The track to read from. |

#### `edits.testers.update()`

Updates testers. Note: Testers resource does not support email lists.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.track` | `string` | Yes | The track to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `edits.testers.patch()`

Patches testers. Note: Testers resource does not support email lists.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.track` | `string` | Yes | The track to update. |
| `params.resource` | `object` | Yes | The request body. |

### `edits.tracks`

#### `edits.tracks.get()`

Gets a track.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.track` | `string` | Yes | Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name) |

#### `edits.tracks.list()`

Lists all tracks.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |

#### `edits.tracks.update()`

Updates a track.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.track` | `string` | Yes | Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name) |
| `params.resource` | `object` | Yes | The request body. |

#### `edits.tracks.patch()`

Patches a track.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.editId` | `string` | Yes | Identifier of the edit. |
| `params.track` | `string` | Yes | Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name) |
| `params.resource` | `object` | Yes | The request body. |

#### `edits.tracks.create()`

Creates a new track.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. Package name of the app. |
| `params.editId` | `string` | Yes | Required. Identifier of the edit. |
| `params.resource` | `object` | Yes | The request body. |

### `externaltransactions`

#### `externaltransactions.createexternaltransaction()`

Creates a new external transaction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this external transaction will be created. Format: applications/{package_name} |
| `params.externalTransactionId` | `string` | No | Required. The id to use for the external transaction. Must be unique across all other transactions for the app. This value should be 1-63 characters and valid characters are /a-zA-Z0-9_-/. Do not use this field to store any Personally Identifiable Information (PII) such as emails. Attempting to store PII in this field may result in requests being blocked. |
| `params.resource` | `object` | Yes | The request body. |

#### `externaltransactions.refundexternaltransaction()`

Refunds or partially refunds an existing external transaction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the external transaction that will be refunded. Format: applications/{package_name}/externalTransactions/{external_transaction} |
| `params.resource` | `object` | Yes | The request body. |

#### `externaltransactions.getexternaltransaction()`

Gets an existing external transaction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the external transaction to retrieve. Format: applications/{package_name}/externalTransactions/{external_transaction} |

### `generatedapks`

#### `generatedapks.list()`

Returns download metadata for all APKs that were generated from a given app bundle.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.versionCode` | `integer` | Yes | Version code of the app bundle. |

#### `generatedapks.download()`

Downloads a single signed APK generated from an app bundle.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.versionCode` | `integer` | Yes | Version code of the app bundle. |
| `params.downloadId` | `string` | Yes | Download ID, which uniquely identifies the APK to download. Can be obtained from the response of `generatedapks.list` method. |

### `inappproducts`

#### `inappproducts.get()`

Gets an in-app product, which can be a managed product or a subscription. This method should no longer be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.sku` | `string` | Yes | Unique identifier for the in-app product. |

#### `inappproducts.batchGet()`

Reads multiple in-app products, which can be managed products or subscriptions. This method should not be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.sku` | `string` | No | Unique identifier for the in-app products. |

#### `inappproducts.list()`

Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page. This method should no longer be used to retrieve subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.token` | `string` | No | Pagination token. If empty, list starts at the first product. |
| `params.startIndex` | `integer` | No | Deprecated and ignored. Set the `token` parameter to retrieve the next page. |
| `params.maxResults` | `integer` | No | Deprecated and ignored. The page size is determined by the server. |

#### `inappproducts.insert()`

Creates an in-app product (a managed product or a subscription). This method should no longer be used to create subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.autoConvertMissingPrices` | `boolean` | No | If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. |
| `params.resource` | `object` | Yes | The request body. |

#### `inappproducts.update()`

Updates an in-app product (a managed product or a subscription). This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.sku` | `string` | Yes | Unique identifier for the in-app product. |
| `params.autoConvertMissingPrices` | `boolean` | No | If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. |
| `params.allowMissing` | `boolean` | No | If set to true, and the in-app product with the given package_name and sku doesn't exist, the in-app product will be created. |
| `params.latencyTolerance` | `string` | No | Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. |
| `params.resource` | `object` | Yes | The request body. |

#### `inappproducts.batchUpdate()`

Updates or inserts one or more in-app products (managed products or subscriptions). Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.resource` | `object` | Yes | The request body. |

#### `inappproducts.patch()`

Patches an in-app product (a managed product or a subscription). This method should no longer be used to update subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.sku` | `string` | Yes | Unique identifier for the in-app product. |
| `params.autoConvertMissingPrices` | `boolean` | No | If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. |
| `params.latencyTolerance` | `string` | No | Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. |
| `params.resource` | `object` | Yes | The request body. |

#### `inappproducts.delete()`

Deletes an in-app product (a managed product or a subscription). This method should no longer be used to delete subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.sku` | `string` | Yes | Unique identifier for the in-app product. |
| `params.latencyTolerance` | `string` | No | Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. |

#### `inappproducts.batchDelete()`

Deletes in-app products (managed products or subscriptions). Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput. This method should not be used to delete subscriptions. See [this article](https://android-developers.googleblog.com/2023/06/changes-to-google-play-developer-api-june-2023.html) for more information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.resource` | `object` | Yes | The request body. |

### `internalappsharingartifacts`

#### `internalappsharingartifacts.uploadapk()`

Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |

#### `internalappsharingartifacts.uploadbundle()`

Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |

### `orders`

#### `orders.refund()`

Refunds a user's subscription or in-app purchase order. Orders older than 3 years cannot be refunded.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing'). |
| `params.orderId` | `string` | Yes | The order ID provided to the user when the subscription or in-app order was purchased. |
| `params.revoke` | `boolean` | No | Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional). |

#### `orders.get()`

Get order details for a single order.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing'). |
| `params.orderId` | `string` | Yes | Required. The order ID provided to the user when the subscription or in-app order was purchased. |

#### `orders.batchget()`

Get order details for a list of orders.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing'). |
| `params.orderIds` | `string` | No | Required. The list of order IDs to retrieve order details for. There must be between 1 and 1000 (inclusive) order IDs per request. If any order ID is not found or does not match the provided package, the entire request will fail with an error. The order IDs must be distinct. |

### `applications`

#### `applications.dataSafety()`

Writes the Safety Labels declaration of an app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. Package name of the app. |
| `params.resource` | `object` | Yes | The request body. |

### `applications.deviceTierConfigs`

#### `applications.deviceTierConfigs.create()`

Creates a new device tier config for an app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.allowUnknownDevices` | `boolean` | No | Whether the service should accept device IDs that are unknown to Play's device catalog. |
| `params.resource` | `object` | Yes | The request body. |

#### `applications.deviceTierConfigs.get()`

Returns a particular device tier config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.deviceTierConfigId` | `string` | Yes | Required. Id of an existing device tier config. |

#### `applications.deviceTierConfigs.list()`

Returns created device tier configs, ordered by descending creation time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.pageSize` | `integer` | No | The maximum number of device tier configs to return. The service may return fewer than this value. If unspecified, at most 10 device tier configs will be returned. The maximum value for this field is 100; values above 100 will be coerced to 100. Device tier configs will be ordered by descending creation time. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListDeviceTierConfigs` call. Provide this to retrieve the subsequent page. |

### `monetization`

#### `monetization.convertRegionPrices()`

Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The app package name. |
| `params.resource` | `object` | Yes | The request body. |

### `monetization.onetimeproducts`

#### `monetization.onetimeproducts.get()`

Reads a single one-time product.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the product to retrieve. |
| `params.productId` | `string` | Yes | Required. The product ID of the product to retrieve. |

#### `monetization.onetimeproducts.batchGet()`

Reads one or more one-time products.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) for which the products should be retrieved. Must be equal to the package_name field on all requests. |
| `params.productIds` | `string` | No | Required. A list of up to 100 product IDs to retrieve. All IDs must be different. |

#### `monetization.onetimeproducts.list()`

Lists all one-time products under a given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) for which the one-time product should be read. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of one-time product to return. The service may return fewer than this value. If unspecified, at most 50 one-time products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListOneTimeProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOneTimeProducts` must match the call that provided the page token. |

#### `monetization.onetimeproducts.patch()`

Creates or updates a one-time product.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. Immutable. Package name of the parent app. |
| `params.productId` | `string` | Yes | Required. Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must start with a number or lowercase letter, and can contain numbers (0-9), lowercase letters (a-z), underscores (_), and periods (.). |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. |
| `params.regionsVersion.version` | `string` | No | Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the one-time product with the given package_name and product_id doesn't exist, the one-time product will be created. If a new one-time product is created, update_mask is ignored. |
| `params.latencyTolerance` | `string` | No | Optional. The latency tolerance for the propagation of this product upsert. Defaults to latency-sensitive. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.onetimeproducts.batchUpdate()`

Creates or updates one or more one-time products.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) for which the one-time products should be updated. Must be equal to the package_name field on all the OneTimeProduct resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.onetimeproducts.delete()`

Deletes a one-time product.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the one-time product to delete. |
| `params.productId` | `string` | Yes | Required. The one-time product ID of the one-time product to delete. |
| `params.latencyTolerance` | `string` | No | Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. |

#### `monetization.onetimeproducts.batchDelete()`

Deletes one or more one-time products.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) for which the one-time products should be deleted. Must be equal to the package_name field on all the OneTimeProduct resources. |
| `params.resource` | `object` | Yes | The request body. |

### `monetization.onetimeproducts.purchaseOptions`

#### `monetization.onetimeproducts.purchaseOptions.batchUpdateStates()`

Activates or deactivates purchase options across one or multiple one-time products.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the updated purchase options. |
| `params.productId` | `string` | Yes | Required. The product ID of the parent one-time product, if all updated purchase options belong to the same one-time product. If this batch update spans multiple one-time products, set this field to "-". |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.onetimeproducts.purchaseOptions.batchDelete()`

Deletes purchase options across one or multiple one-time products. By default this operation will fail if there are any existing offers under the deleted purchase options. Use the force parameter to override the default behavior.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the purchase options to delete. |
| `params.productId` | `string` | Yes | Required. The product ID of the parent one-time product, if all purchase options to delete belong to the same one-time product. If this batch delete spans multiple one-time products, set this field to "-". |
| `params.resource` | `object` | Yes | The request body. |

### `monetization.onetimeproducts.purchaseOptions.offers`

#### `monetization.onetimeproducts.purchaseOptions.offers.list()`

Lists all offers under a given app, product, or purchase option.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) for which the offers should be read. |
| `params.productId` | `string` | Yes | Required. The parent one-time product (ID) for which the offers should be read. May be specified as '-' to read all offers under an app. |
| `params.purchaseOptionId` | `string` | Yes | Required. The parent purchase option (ID) for which the offers should be read. May be specified as '-' to read all offers under a one-time product or an app. Must be specified as '-' if product_id is specified as '-'. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of offers to return. The service may return fewer than this value. If unspecified, at most 50 offers will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListOneTimeProductsOffers` call. Provide this to retrieve the subsequent page. When paginating, product_id, package_name and purchase_option_id provided to `ListOneTimeProductsOffersRequest` must match the call that provided the page token. |

#### `monetization.onetimeproducts.purchaseOptions.offers.batchGet()`

Reads one or more one-time product offers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the updated offers. Must be equal to the package_name field on all the updated OneTimeProductOffer resources. |
| `params.productId` | `string` | Yes | Required. The product ID of the parent one-time product, if all updated offers belong to the same product. If this request spans multiple one-time products, set this field to "-". |
| `params.purchaseOptionId` | `string` | Yes | Required. The parent purchase option (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple purchase options. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.onetimeproducts.purchaseOptions.offers.batchUpdate()`

Creates or updates one or more one-time product offers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the updated offers. Must be equal to the package_name field on all the updated OneTimeProductOffer resources. |
| `params.productId` | `string` | Yes | Required. The product ID of the parent one-time product, if all updated offers belong to the same product. If this request spans multiple one-time products, set this field to "-". |
| `params.purchaseOptionId` | `string` | Yes | Required. The parent purchase option (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple purchase options. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates()`

Updates a batch of one-time product offer states.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the updated one-time product offers. |
| `params.productId` | `string` | Yes | Required. The product ID of the parent one-time product, if all updated offers belong to the same one-time product. If this batch update spans multiple one-time products, set this field to "-". |
| `params.purchaseOptionId` | `string` | Yes | Required. The purchase option ID of the parent purchase option, if all updated offers belong to the same purchase option. If this batch update spans multiple purchase options, set this field to "-". |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.onetimeproducts.purchaseOptions.offers.batchDelete()`

Deletes one or more one-time product offers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the offers to delete. Must be equal to the package_name field on all the OneTimeProductOffer resources. |
| `params.productId` | `string` | Yes | Required. The product ID of the parent one-time product, if all offers to delete belong to the same product. If this request spans multiple one-time products, set this field to "-". |
| `params.purchaseOptionId` | `string` | Yes | Required. The parent purchase option (ID) for which the offers should be deleted. May be specified as '-' to update offers from multiple purchase options. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.onetimeproducts.purchaseOptions.offers.activate()`

Activates a one-time product offer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the offer to activate. |
| `params.productId` | `string` | Yes | Required. The parent one-time product (ID) of the offer to activate. |
| `params.purchaseOptionId` | `string` | Yes | Required. The parent purchase option (ID) of the offer to activate. |
| `params.offerId` | `string` | Yes | Required. The offer ID of the offer to activate. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.onetimeproducts.purchaseOptions.offers.cancel()`

Cancels a one-time product offer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the offer to cancel. |
| `params.productId` | `string` | Yes | Required. The parent one-time product (ID) of the offer to cancel. |
| `params.purchaseOptionId` | `string` | Yes | Required. The parent purchase option (ID) of the offer to cancel. |
| `params.offerId` | `string` | Yes | Required. The offer ID of the offer to cancel. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.onetimeproducts.purchaseOptions.offers.deactivate()`

Deactivates a one-time product offer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the offer to deactivate. |
| `params.productId` | `string` | Yes | Required. The parent one-time product (ID) of the offer to deactivate. |
| `params.purchaseOptionId` | `string` | Yes | Required. The parent purchase option (ID) of the offer to deactivate. |
| `params.offerId` | `string` | Yes | Required. The offer ID of the offer to deactivate. |
| `params.resource` | `object` | Yes | The request body. |

### `monetization.subscriptions`

#### `monetization.subscriptions.get()`

Reads a single subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the subscription to get. |
| `params.productId` | `string` | Yes | Required. The unique product ID of the subscription to get. |

#### `monetization.subscriptions.batchGet()`

Reads one or more subscriptions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) for which the subscriptions should be retrieved. Must be equal to the package_name field on all the requests. |
| `params.productIds` | `string` | No | Required. A list of up to 100 subscription product IDs to retrieve. All the IDs must be different. |

#### `monetization.subscriptions.list()`

Lists all subscriptions under a given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) for which the subscriptions should be read. |
| `params.pageSize` | `integer` | No | The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token. |
| `params.showArchived` | `boolean` | No | Deprecated: subscription archiving is not supported. |

#### `monetization.subscriptions.create()`

Creates a new subscription. Newly added base plans will remain in draft state until activated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) for which the subscription should be created. Must be equal to the package_name field on the Subscription resource. |
| `params.productId` | `string` | No | Required. The ID to use for the subscription. For the requirements on this format, see the documentation of the product_id field on the Subscription resource. |
| `params.regionsVersion.version` | `string` | No | Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.subscriptions.patch()`

Updates an existing subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Immutable. Package name of the parent app. |
| `params.productId` | `string` | Yes | Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length. |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. |
| `params.regionsVersion.version` | `string` | No | Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the subscription with the given package_name and product_id doesn't exist, the subscription will be created. If a new subscription is created, update_mask is ignored. |
| `params.latencyTolerance` | `string` | No | Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.subscriptions.batchUpdate()`

Updates a batch of subscriptions. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) for which the subscriptions should be updated. Must be equal to the package_name field on all the Subscription resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.subscriptions.delete()`

Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the app of the subscription to delete. |
| `params.productId` | `string` | Yes | Required. The unique product ID of the subscription to delete. |

#### `monetization.subscriptions.archive()`

Deprecated: subscription archiving is not supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the app of the subscription to delete. |
| `params.productId` | `string` | Yes | Required. The unique product ID of the subscription to delete. |
| `params.resource` | `object` | Yes | The request body. |

### `monetization.subscriptions.basePlans`

#### `monetization.subscriptions.basePlans.delete()`

Deletes a base plan. Can only be done for draft base plans. This action is irreversible.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the base plan to delete. |
| `params.productId` | `string` | Yes | Required. The parent subscription (ID) of the base plan to delete. |
| `params.basePlanId` | `string` | Yes | Required. The unique offer ID of the base plan to delete. |

#### `monetization.subscriptions.basePlans.activate()`

Activates a base plan. Once activated, base plans will be available to new subscribers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the base plan to activate. |
| `params.productId` | `string` | Yes | Required. The parent subscription (ID) of the base plan to activate. |
| `params.basePlanId` | `string` | Yes | Required. The unique base plan ID of the base plan to activate. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.subscriptions.basePlans.deactivate()`

Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the base plan to deactivate. |
| `params.productId` | `string` | Yes | Required. The parent subscription (ID) of the base plan to deactivate. |
| `params.basePlanId` | `string` | Yes | Required. The unique base plan ID of the base plan to deactivate. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.subscriptions.basePlans.batchUpdateStates()`

Activates or deactivates base plans across one or multiple subscriptions. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the updated base plans. |
| `params.productId` | `string` | Yes | Required. The product ID of the parent subscription, if all updated base plans belong to the same subscription. If this batch update spans multiple subscriptions, set this field to "-". Must be set. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.subscriptions.basePlans.migratePrices()`

Migrates subscribers from one or more legacy price cohorts to the current price. Requests result in Google Play notifying affected subscribers. Only up to 250 simultaneous legacy price cohorts are supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource. |
| `params.productId` | `string` | Yes | Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource. |
| `params.basePlanId` | `string` | Yes | Required. The unique base plan ID of the base plan to update prices on. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.subscriptions.basePlans.batchMigratePrices()`

Batch variant of the MigrateBasePlanPrices endpoint. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) for which the subscriptions should be created or updated. Must be equal to the package_name field on all the Subscription resources. |
| `params.productId` | `string` | Yes | Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this batch update spans multiple subscriptions, set this field to "-". Must be set. |
| `params.resource` | `object` | Yes | The request body. |

### `monetization.subscriptions.basePlans.offers`

#### `monetization.subscriptions.basePlans.offers.get()`

Reads a single offer

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the offer to get. |
| `params.productId` | `string` | Yes | Required. The parent subscription (ID) of the offer to get. |
| `params.basePlanId` | `string` | Yes | Required. The parent base plan (ID) of the offer to get. |
| `params.offerId` | `string` | Yes | Required. The unique offer ID of the offer to get. |

#### `monetization.subscriptions.basePlans.offers.batchGet()`

Reads one or more subscription offers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) for which the subscriptions should be created or updated. Must be equal to the package_name field on all the requests. |
| `params.productId` | `string` | Yes | Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set. |
| `params.basePlanId` | `string` | Yes | Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read offers from multiple base plans. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.subscriptions.basePlans.offers.list()`

Lists all offers under a given subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) for which the subscriptions should be read. |
| `params.productId` | `string` | Yes | Required. The parent subscription (ID) for which the offers should be read. May be specified as '-' to read all offers under an app. |
| `params.basePlanId` | `string` | Yes | Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read all offers under a subscription or an app. Must be specified as '-' if product_id is specified as '-'. |
| `params.pageSize` | `integer` | No | The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSubscriptionsOffers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptionOffers` must match the call that provided the page token. |

#### `monetization.subscriptions.basePlans.offers.create()`

Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) for which the offer should be created. Must be equal to the package_name field on the Subscription resource. |
| `params.productId` | `string` | Yes | Required. The parent subscription (ID) for which the offer should be created. Must be equal to the product_id field on the SubscriptionOffer resource. |
| `params.basePlanId` | `string` | Yes | Required. The parent base plan (ID) for which the offer should be created. Must be equal to the base_plan_id field on the SubscriptionOffer resource. |
| `params.offerId` | `string` | No | Required. The ID to use for the offer. For the requirements on this format, see the documentation of the offer_id field on the SubscriptionOffer resource. |
| `params.regionsVersion.version` | `string` | No | Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.subscriptions.basePlans.offers.patch()`

Updates an existing subscription offer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. Immutable. The package name of the app the parent subscription belongs to. |
| `params.productId` | `string` | Yes | Required. Immutable. The ID of the parent subscription this offer belongs to. |
| `params.basePlanId` | `string` | Yes | Required. Immutable. The ID of the base plan to which this offer is an extension. |
| `params.offerId` | `string` | Yes | Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan. |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. |
| `params.regionsVersion.version` | `string` | No | Required. A string representing the version of available regions being used for the specified resource. Regional prices and latest supported version for the resource have to be specified according to the information published in [this article](https://support.google.com/googleplay/android-developer/answer/10532353). Each time the supported locations substantially change, the version will be incremented. Using this field will ensure that creating and updating the resource with an older region's version and set of regional prices and currencies will succeed even though a new version is available. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the subscription offer with the given package_name, product_id, base_plan_id and offer_id doesn't exist, an offer will be created. If a new offer is created, update_mask is ignored. |
| `params.latencyTolerance` | `string` | No | Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.subscriptions.basePlans.offers.batchUpdate()`

Updates a batch of subscription offers. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the updated subscription offers. Must be equal to the package_name field on all the updated SubscriptionOffer resources. |
| `params.productId` | `string` | Yes | Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set. |
| `params.basePlanId` | `string` | Yes | Required. The parent base plan (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple base plans. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.subscriptions.basePlans.offers.activate()`

Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the offer to activate. |
| `params.productId` | `string` | Yes | Required. The parent subscription (ID) of the offer to activate. |
| `params.basePlanId` | `string` | Yes | Required. The parent base plan (ID) of the offer to activate. |
| `params.offerId` | `string` | Yes | Required. The unique offer ID of the offer to activate. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.subscriptions.basePlans.offers.deactivate()`

Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the offer to deactivate. |
| `params.productId` | `string` | Yes | Required. The parent subscription (ID) of the offer to deactivate. |
| `params.basePlanId` | `string` | Yes | Required. The parent base plan (ID) of the offer to deactivate. |
| `params.offerId` | `string` | Yes | Required. The unique offer ID of the offer to deactivate. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.subscriptions.basePlans.offers.batchUpdateStates()`

Updates a batch of subscription offer states. Set the latencyTolerance field on nested requests to PRODUCT_UPDATE_LATENCY_TOLERANCE_LATENCY_TOLERANT to achieve maximum update throughput.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the updated subscription offers. Must be equal to the package_name field on all the updated SubscriptionOffer resources. |
| `params.productId` | `string` | Yes | Required. The product ID of the parent subscription, if all updated offers belong to the same subscription. If this request spans multiple subscriptions, set this field to "-". Must be set. |
| `params.basePlanId` | `string` | Yes | Required. The parent base plan (ID) for which the offers should be updated. May be specified as '-' to update offers from multiple base plans. |
| `params.resource` | `object` | Yes | The request body. |

#### `monetization.subscriptions.basePlans.offers.delete()`

Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. The parent app (package name) of the offer to delete. |
| `params.productId` | `string` | Yes | Required. The parent subscription (ID) of the offer to delete. |
| `params.basePlanId` | `string` | Yes | Required. The parent base plan (ID) of the offer to delete. |
| `params.offerId` | `string` | Yes | Required. The unique offer ID of the offer to delete. |

### `reviews`

#### `reviews.get()`

Gets a single review.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.reviewId` | `string` | Yes | Unique identifier for a review. |
| `params.translationLanguage` | `string` | No | Language localization code. |

#### `reviews.list()`

Lists all reviews.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.token` | `string` | No | Pagination token. If empty, list starts at the first review. |
| `params.startIndex` | `integer` | No | The index of the first element to return. |
| `params.maxResults` | `integer` | No | How many results the list operation should return. |
| `params.translationLanguage` | `string` | No | Language localization code. |

#### `reviews.reply()`

Replies to a single review, or updates an existing reply.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.reviewId` | `string` | Yes | Unique identifier for a review. |
| `params.resource` | `object` | Yes | The request body. |

### `systemapks`

### `systemapks.variants`

#### `systemapks.variants.create()`

Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.versionCode` | `string` | Yes | The version code of the App Bundle. |
| `params.resource` | `object` | Yes | The request body. |

#### `systemapks.variants.list()`

Returns the list of previously created system APK variants.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.versionCode` | `string` | Yes | The version code of the App Bundle. |

#### `systemapks.variants.get()`

Returns a previously created system APK variant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.versionCode` | `string` | Yes | The version code of the App Bundle. |
| `params.variantId` | `integer` | Yes | The ID of a previously created system APK variant. |

#### `systemapks.variants.download()`

Downloads a previously created system APK which is suitable for inclusion in a system image.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app. |
| `params.versionCode` | `string` | Yes | The version code of the App Bundle. |
| `params.variantId` | `integer` | Yes | The ID of a previously created system APK variant. |