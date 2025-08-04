# Google Analytics Admin API - Apps Script Client Library

Auto-generated client library for using the **Google Analytics Admin API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 19:51:55 GMT
- **Last Modified:** Mon, 04 Aug 2025 19:51:55 GMT
- **Created:** Sun, 20 Jul 2025 16:11:57 GMT



---

## API Reference

### `accounts`

#### `accounts.get()`

Lookup for a single Account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the account to lookup. Format: accounts/{account} Example: "accounts/100" |

#### `accounts.list()`

Returns all accounts accessible by the caller. Note that these accounts might not currently have GA properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token. |
| `params.showDeleted` | `boolean` | No | Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not. |

#### `accounts.delete()`

Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Account to soft-delete. Format: accounts/{account} Example: "accounts/100" |

#### `accounts.patch()`

Updates an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of this account. Format: accounts/{account} Example: "accounts/100" |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.provisionAccountTicket()`

Requests a ticket for creating an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.getDataSharingSettings()`

Get data sharing settings on an account. Data sharing settings are singletons.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the settings to lookup. Format: accounts/{account}/dataSharingSettings Example: `accounts/1000/dataSharingSettings` |

#### `accounts.searchChangeHistoryEvents()`

Searches through all changes to an account or its children given the specified set of filters. Only returns the subset of changes supported by the API. The UI may return additional changes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.account` | `string` | Yes | Required. The account resource for which to return change history resources. Format: accounts/{account} Example: `accounts/100` |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.runAccessReport()`

Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents). To give your feedback on this API, complete the [Google Analytics Access Reports feedback](https://docs.google.com/forms/d/e/1FAIpQLSdmEBUrMzAEdiEKk5TV5dEHvDUZDRlgWYdQdAeSdtR4hVjEhw/viewform) form.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.entity` | `string` | Yes | The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your Google Analytics property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your Google Analytics Account ID. |
| `params.resource` | `object` | Yes | The request body. |

### `accountSummaries`

#### `accountSummaries.list()`

Returns summaries of all accounts accessible by the caller.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token. |

### `properties`

#### `properties.get()`

Lookup for a single GA Property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the property to lookup. Format: properties/{property_id} Example: "properties/1000" |

#### `properties.list()`

Returns child Properties under the specified parent Account. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | parent:properties/123 | The property with property id: 123. | | ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ``` |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token. |
| `params.showDeleted` | `boolean` | No | Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not. |

#### `properties.create()`

Creates a Google Analytics property with the specified location and attributes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `properties.delete()`

Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Property to soft-delete. Format: properties/{property_id} Example: "properties/1000" |

#### `properties.patch()`

Updates a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000" |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.acknowledgeUserDataCollection()`

Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.property` | `string` | Yes | Required. The property for which to acknowledge user data collection. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.getDataRetentionSettings()`

Returns the singleton data retention settings for this property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the settings to lookup. Format: properties/{property}/dataRetentionSettings Example: "properties/1000/dataRetentionSettings" |

#### `properties.updateDataRetentionSettings()`

Updates the singleton data retention settings for this property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.runAccessReport()`

Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents). To give your feedback on this API, complete the [Google Analytics Access Reports feedback](https://docs.google.com/forms/d/e/1FAIpQLSdmEBUrMzAEdiEKk5TV5dEHvDUZDRlgWYdQdAeSdtR4hVjEhw/viewform) form.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.entity` | `string` | Yes | The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your Google Analytics property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your Google Analytics Account ID. |
| `params.resource` | `object` | Yes | The request body. |

### `properties.firebaseLinks`

#### `properties.firebaseLinks.create()`

Creates a FirebaseLink. Properties can have at most one FirebaseLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: properties/{property_id} Example: `properties/1234` |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.firebaseLinks.delete()`

Deletes a FirebaseLink on a property

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: properties/{property_id}/firebaseLinks/{firebase_link_id} Example: `properties/1234/firebaseLinks/5678` |

#### `properties.firebaseLinks.list()`

Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: properties/{property_id} Example: `properties/1234` |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token. |

### `properties.googleAdsLinks`

#### `properties.googleAdsLinks.create()`

Creates a GoogleAdsLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.googleAdsLinks.patch()`

Updates a GoogleAdsLink on a property

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID. |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.googleAdsLinks.delete()`

Deletes a GoogleAdsLink on a property

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Example format: properties/1234/googleAdsLinks/5678 |

#### `properties.googleAdsLinks.list()`

Lists GoogleAdsLinks on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token. |

### `properties.conversionEvents`

#### `properties.conversionEvents.create()`

Deprecated: Use `CreateKeyEvent` instead. Creates a conversion event with the specified attributes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent property where this conversion event will be created. Format: properties/123 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.conversionEvents.patch()`

Deprecated: Use `UpdateKeyEvent` instead. Updates a conversion event with the specified attributes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of this conversion event. Format: properties/{property}/conversionEvents/{conversion_event} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.conversionEvents.get()`

Deprecated: Use `GetKeyEvent` instead. Retrieve a single conversion event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the conversion event to retrieve. Format: properties/{property}/conversionEvents/{conversion_event} Example: "properties/123/conversionEvents/456" |

#### `properties.conversionEvents.delete()`

Deprecated: Use `DeleteKeyEvent` instead. Deletes a conversion event in a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the conversion event to delete. Format: properties/{property}/conversionEvents/{conversion_event} Example: "properties/123/conversionEvents/456" |

#### `properties.conversionEvents.list()`

Deprecated: Use `ListKeyEvents` instead. Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent property. Example: 'properties/123' |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token. |

### `properties.keyEvents`

#### `properties.keyEvents.create()`

Creates a Key Event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent property where this Key Event will be created. Format: properties/123 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.keyEvents.patch()`

Updates a Key Event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of this key event. Format: properties/{property}/keyEvents/{key_event} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.keyEvents.get()`

Retrieve a single Key Event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Key Event to retrieve. Format: properties/{property}/keyEvents/{key_event} Example: "properties/123/keyEvents/456" |

#### `properties.keyEvents.delete()`

Deletes a Key Event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Key Event to delete. Format: properties/{property}/keyEvents/{key_event} Example: "properties/123/keyEvents/456" |

#### `properties.keyEvents.list()`

Returns a list of Key Events in the specified parent property. Returns an empty list if no Key Events are found.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent property. Example: 'properties/123' |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListKeyEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListKeyEvents` must match the call that provided the page token. |

### `properties.customDimensions`

#### `properties.customDimensions.create()`

Creates a CustomDimension.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.customDimensions.patch()`

Updates a CustomDimension on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name for this CustomDimension resource. Format: properties/{property}/customDimensions/{customDimension} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.customDimensions.list()`

Lists CustomDimensions on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token. |

#### `properties.customDimensions.archive()`

Archives a CustomDimension on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CustomDimension to archive. Example format: properties/1234/customDimensions/5678 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.customDimensions.get()`

Lookup for a single CustomDimension.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CustomDimension to get. Example format: properties/1234/customDimensions/5678 |

### `properties.customMetrics`

#### `properties.customMetrics.create()`

Creates a CustomMetric.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.customMetrics.patch()`

Updates a CustomMetric on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.customMetrics.list()`

Lists CustomMetrics on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token. |

#### `properties.customMetrics.archive()`

Archives a CustomMetric on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.customMetrics.get()`

Lookup for a single CustomMetric.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CustomMetric to get. Example format: properties/1234/customMetrics/5678 |

### `properties.dataStreams`

#### `properties.dataStreams.create()`

Creates a DataStream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.dataStreams.delete()`

Deletes a DataStream on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DataStream to delete. Example format: properties/1234/dataStreams/5678 |

#### `properties.dataStreams.patch()`

Updates a DataStream on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000" |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.dataStreams.list()`

Lists DataStreams on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token. |

#### `properties.dataStreams.get()`

Lookup for a single DataStream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DataStream to get. Example format: properties/1234/dataStreams/5678 |

### `properties.dataStreams.measurementProtocolSecrets`

#### `properties.dataStreams.measurementProtocolSecrets.get()`

Lookup for a single MeasurementProtocolSecret.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the measurement protocol secret to lookup. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret} |

#### `properties.dataStreams.measurementProtocolSecrets.list()`

Returns child MeasurementProtocolSecrets under the specified parent Property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the parent stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token. |

#### `properties.dataStreams.measurementProtocolSecrets.create()`

Creates a measurement protocol secret.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this secret will be created. Format: properties/{property}/dataStreams/{dataStream} |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.dataStreams.measurementProtocolSecrets.delete()`

Deletes target MeasurementProtocolSecret.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret} |

#### `properties.dataStreams.measurementProtocolSecrets.patch()`

Updates a measurement protocol secret.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Omitted fields will not be updated. |
| `params.resource` | `object` | Yes | The request body. |