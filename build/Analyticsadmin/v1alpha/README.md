# Google Analytics Admin API - Apps Script Client Library

Auto-generated client library for using the **Google Analytics Admin API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:46:17 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:20:51 GMT
- **Created:** Sun, 20 Jul 2025 16:11:53 GMT



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

### `accounts.accessBindings`

#### `accounts.accessBindings.create()`

Creates an access binding on an account or property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Formats: - accounts/{account} - properties/{property} |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.accessBindings.get()`

Gets information about an access binding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the access binding to retrieve. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding} |

#### `accounts.accessBindings.patch()`

Updates an access binding on an account or property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of this binding. Format: accounts/{account}/accessBindings/{access_binding} or properties/{property}/accessBindings/{access_binding} Example: "accounts/100/accessBindings/200" |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.accessBindings.delete()`

Deletes an access binding on an account or property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding} |

#### `accounts.accessBindings.list()`

Lists all access bindings on an account or property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Formats: - accounts/{account} - properties/{property} |
| `params.pageSize` | `integer` | No | The maximum number of access bindings to return. The service may return fewer than this value. If unspecified, at most 200 access bindings will be returned. The maximum value is 500; values above 500 will be coerced to 500. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAccessBindings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccessBindings` must match the call that provided the page token. |

#### `accounts.accessBindings.batchCreate()`

Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account or property that owns the access bindings. The parent field in the CreateAccessBindingRequest messages must either be empty or match this field. Formats: - accounts/{account} - properties/{property} |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.accessBindings.batchGet()`

Gets information about multiple access bindings to an account or property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field must match this field. Formats: - accounts/{account} - properties/{property} |
| `params.names` | `string` | No | Required. The names of the access bindings to retrieve. A maximum of 1000 access bindings can be retrieved in a batch. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding} |

#### `accounts.accessBindings.batchUpdate()`

Updates information about multiple access bindings to an account or property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account or property that owns the access bindings. The parent of all provided AccessBinding in UpdateAccessBindingRequest messages must match this field. Formats: - accounts/{account} - properties/{property} |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.accessBindings.batchDelete()`

Deletes information about multiple users' links to an account or property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field in DeleteAccessBindingRequest messages must match this field. Formats: - accounts/{account} - properties/{property} |
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

#### `properties.getGoogleSignalsSettings()`

Lookup for Google Signals settings for a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the google signals settings to retrieve. Format: properties/{property}/googleSignalsSettings |

#### `properties.updateGoogleSignalsSettings()`

Updates Google Signals settings for a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of this setting. Format: properties/{property_id}/googleSignalsSettings Example: "properties/1000/googleSignalsSettings" |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
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

#### `properties.getAttributionSettings()`

Lookup for a AttributionSettings singleton.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the attribution settings to retrieve. Format: properties/{property}/attributionSettings |

#### `properties.updateAttributionSettings()`

Updates attribution settings on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of this attribution settings resource. Format: properties/{property_id}/attributionSettings Example: "properties/1000/attributionSettings" |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.runAccessReport()`

Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents). To give your feedback on this API, complete the [Google Analytics Access Reports feedback](https://docs.google.com/forms/d/e/1FAIpQLSdmEBUrMzAEdiEKk5TV5dEHvDUZDRlgWYdQdAeSdtR4hVjEhw/viewform) form.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.entity` | `string` | Yes | The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your Google Analytics property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your Google Analytics Account ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.createRollupProperty()`

Create a roll-up property and all roll-up property source links.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `properties.provisionSubproperty()`

Create a subproperty and a subproperty event filter that applies to the created subproperty.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `properties.submitUserDeletion()`

Submits a request for user deletion for a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the property to submit user deletion for. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.getReportingIdentitySettings()`

Returns the singleton data retention settings for this property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the settings to lookup. Format: properties/{property}/reportingIdentitySettings Example: "properties/1000/reportingIdentitySettings" |

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

### `properties.dataStreams`

#### `properties.dataStreams.getGlobalSiteTag()`

Returns the Site Tag for the specified web stream. Site Tags are immutable singletons.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the site tag to lookup. Note that site tags are singletons and do not have unique IDs. Format: properties/{property_id}/dataStreams/{stream_id}/globalSiteTag Example: `properties/123/dataStreams/456/globalSiteTag` |

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

#### `properties.dataStreams.getEnhancedMeasurementSettings()`

Returns the enhanced measurement settings for this data stream. Note that the stream must enable enhanced measurement for these settings to take effect.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the settings to lookup. Format: properties/{property}/dataStreams/{data_stream}/enhancedMeasurementSettings Example: "properties/1000/dataStreams/2000/enhancedMeasurementSettings" |

#### `properties.dataStreams.updateEnhancedMeasurementSettings()`

Updates the enhanced measurement settings for this data stream. Note that the stream must enable enhanced measurement for these settings to take effect.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of the Enhanced Measurement Settings. Format: properties/{property_id}/dataStreams/{data_stream}/enhancedMeasurementSettings Example: "properties/1000/dataStreams/2000/enhancedMeasurementSettings" |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.dataStreams.updateDataRedactionSettings()`

Updates a DataRedactionSettings on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Name of this Data Redaction Settings resource. Format: properties/{property_id}/dataStreams/{data_stream}/dataRedactionSettings Example: "properties/1000/dataStreams/2000/dataRedactionSettings" |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.dataStreams.getDataRedactionSettings()`

Lookup for a single DataRedactionSettings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the settings to lookup. Format: properties/{property}/dataStreams/{data_stream}/dataRedactionSettings Example: "properties/1000/dataStreams/2000/dataRedactionSettings" |

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

### `properties.dataStreams.sKAdNetworkConversionValueSchema`

#### `properties.dataStreams.sKAdNetworkConversionValueSchema.get()`

Looks up a single SKAdNetworkConversionValueSchema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of SKAdNetwork conversion value schema to look up. Format: properties/{property}/dataStreams/{dataStream}/sKAdNetworkConversionValueSchema/{skadnetwork_conversion_value_schema} |

#### `properties.dataStreams.sKAdNetworkConversionValueSchema.create()`

Creates a SKAdNetworkConversionValueSchema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this schema will be created. Format: properties/{property}/dataStreams/{dataStream} |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.dataStreams.sKAdNetworkConversionValueSchema.delete()`

Deletes target SKAdNetworkConversionValueSchema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SKAdNetworkConversionValueSchema to delete. Format: properties/{property}/dataStreams/{dataStream}/sKAdNetworkConversionValueSchema/{skadnetwork_conversion_value_schema} |

#### `properties.dataStreams.sKAdNetworkConversionValueSchema.patch()`

Updates a SKAdNetworkConversionValueSchema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of the schema. This will be child of ONLY an iOS stream, and there can be at most one such child under an iOS stream. Format: properties/{property}/dataStreams/{dataStream}/sKAdNetworkConversionValueSchema |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Omitted fields will not be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.dataStreams.sKAdNetworkConversionValueSchema.list()`

Lists SKAdNetworkConversionValueSchema on a stream. Properties can have at most one SKAdNetworkConversionValueSchema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The DataStream resource to list schemas for. Format: properties/{property_id}/dataStreams/{dataStream} Example: properties/1234/dataStreams/5678 |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSKAdNetworkConversionValueSchemas` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSKAdNetworkConversionValueSchema` must match the call that provided the page token. |

### `properties.dataStreams.eventCreateRules`

#### `properties.dataStreams.eventCreateRules.get()`

Lookup for a single EventCreateRule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EventCreateRule to get. Example format: properties/123/dataStreams/456/eventCreateRules/789 |

#### `properties.dataStreams.eventCreateRules.list()`

Lists EventCreateRules on a web data stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/123/dataStreams/456 |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListEventCreateRules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventCreateRules` must match the call that provided the page token. |

#### `properties.dataStreams.eventCreateRules.create()`

Creates an EventCreateRule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/123/dataStreams/456 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.dataStreams.eventCreateRules.patch()`

Updates an EventCreateRule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name for this EventCreateRule resource. Format: properties/{property}/dataStreams/{data_stream}/eventCreateRules/{event_create_rule} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.dataStreams.eventCreateRules.delete()`

Deletes an EventCreateRule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Example format: properties/123/dataStreams/456/eventCreateRules/789 |

### `properties.dataStreams.eventEditRules`

#### `properties.dataStreams.eventEditRules.get()`

Lookup for a single EventEditRule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EventEditRule to get. Example format: properties/123/dataStreams/456/eventEditRules/789 |

#### `properties.dataStreams.eventEditRules.list()`

Lists EventEditRules on a web data stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/123/dataStreams/456 |
| `params.pageSize` | `integer` | No | Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListEventEditRules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventEditRules` must match the call that provided the page token. |

#### `properties.dataStreams.eventEditRules.create()`

Creates an EventEditRule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/123/dataStreams/456 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.dataStreams.eventEditRules.patch()`

Updates an EventEditRule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name for this EventEditRule resource. Format: properties/{property}/dataStreams/{data_stream}/eventEditRules/{event_edit_rule} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.dataStreams.eventEditRules.delete()`

Deletes an EventEditRule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Example format: properties/123/dataStreams/456/eventEditRules/789 |

#### `properties.dataStreams.eventEditRules.reorder()`

Changes the processing order of event edit rules on the specified stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/123/dataStreams/456 |
| `params.resource` | `object` | Yes | The request body. |

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

### `properties.displayVideo360AdvertiserLinks`

#### `properties.displayVideo360AdvertiserLinks.get()`

Look up a single DisplayVideo360AdvertiserLink

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DisplayVideo360AdvertiserLink to get. Example format: properties/1234/displayVideo360AdvertiserLink/5678 |

#### `properties.displayVideo360AdvertiserLinks.list()`

Lists all DisplayVideo360AdvertiserLinks on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListDisplayVideo360AdvertiserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinks` must match the call that provided the page token. |

#### `properties.displayVideo360AdvertiserLinks.create()`

Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.displayVideo360AdvertiserLinks.delete()`

Deletes a DisplayVideo360AdvertiserLink on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DisplayVideo360AdvertiserLink to delete. Example format: properties/1234/displayVideo360AdvertiserLinks/5678 |

#### `properties.displayVideo360AdvertiserLinks.patch()`

Updates a DisplayVideo360AdvertiserLink on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name for this DisplayVideo360AdvertiserLink resource. Format: properties/{propertyId}/displayVideo360AdvertiserLinks/{linkId} Note: linkId is not the Display & Video 360 Advertiser ID |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

### `properties.displayVideo360AdvertiserLinkProposals`

#### `properties.displayVideo360AdvertiserLinkProposals.get()`

Lookup for a single DisplayVideo360AdvertiserLinkProposal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DisplayVideo360AdvertiserLinkProposal to get. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678 |

#### `properties.displayVideo360AdvertiserLinkProposals.list()`

Lists DisplayVideo360AdvertiserLinkProposals on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListDisplayVideo360AdvertiserLinkProposals` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinkProposals` must match the call that provided the page token. |

#### `properties.displayVideo360AdvertiserLinkProposals.create()`

Creates a DisplayVideo360AdvertiserLinkProposal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.displayVideo360AdvertiserLinkProposals.delete()`

Deletes a DisplayVideo360AdvertiserLinkProposal on a property. This can only be used on cancelled proposals.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DisplayVideo360AdvertiserLinkProposal to delete. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678 |

#### `properties.displayVideo360AdvertiserLinkProposals.approve()`

Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DisplayVideo360AdvertiserLinkProposal to approve. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.displayVideo360AdvertiserLinkProposals.cancel()`

Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the DisplayVideo360AdvertiserLinkProposal to cancel. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678 |
| `params.resource` | `object` | Yes | The request body. |

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

### `properties.audiences`

#### `properties.audiences.get()`

Lookup for a single Audience. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Audience to get. Example format: properties/1234/audiences/5678 |

#### `properties.audiences.list()`

Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAudiences` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAudiences` must match the call that provided the page token. |

#### `properties.audiences.create()`

Creates an Audience.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.audiences.patch()`

Updates an Audience on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name for this Audience resource. Format: properties/{propertyId}/audiences/{audienceId} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.audiences.archive()`

Archives an Audience on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Example format: properties/1234/audiences/5678 |
| `params.resource` | `object` | Yes | The request body. |

### `properties.searchAds360Links`

#### `properties.searchAds360Links.get()`

Look up a single SearchAds360Link

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SearchAds360Link to get. Example format: properties/1234/SearchAds360Link/5678 |

#### `properties.searchAds360Links.list()`

Lists all SearchAds360Links on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSearchAds360Links` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSearchAds360Links` must match the call that provided the page token. |

#### `properties.searchAds360Links.create()`

Creates a SearchAds360Link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.searchAds360Links.delete()`

Deletes a SearchAds360Link on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SearchAds360Link to delete. Example format: properties/1234/SearchAds360Links/5678 |

#### `properties.searchAds360Links.patch()`

Updates a SearchAds360Link on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name for this SearchAds360Link resource. Format: properties/{propertyId}/searchAds360Links/{linkId} Note: linkId is not the Search Ads 360 advertiser ID |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

### `properties.accessBindings`

#### `properties.accessBindings.create()`

Creates an access binding on an account or property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Formats: - accounts/{account} - properties/{property} |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.accessBindings.get()`

Gets information about an access binding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the access binding to retrieve. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding} |

#### `properties.accessBindings.patch()`

Updates an access binding on an account or property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of this binding. Format: accounts/{account}/accessBindings/{access_binding} or properties/{property}/accessBindings/{access_binding} Example: "accounts/100/accessBindings/200" |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.accessBindings.delete()`

Deletes an access binding on an account or property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding} |

#### `properties.accessBindings.list()`

Lists all access bindings on an account or property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Formats: - accounts/{account} - properties/{property} |
| `params.pageSize` | `integer` | No | The maximum number of access bindings to return. The service may return fewer than this value. If unspecified, at most 200 access bindings will be returned. The maximum value is 500; values above 500 will be coerced to 500. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAccessBindings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccessBindings` must match the call that provided the page token. |

#### `properties.accessBindings.batchCreate()`

Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account or property that owns the access bindings. The parent field in the CreateAccessBindingRequest messages must either be empty or match this field. Formats: - accounts/{account} - properties/{property} |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.accessBindings.batchGet()`

Gets information about multiple access bindings to an account or property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field must match this field. Formats: - accounts/{account} - properties/{property} |
| `params.names` | `string` | No | Required. The names of the access bindings to retrieve. A maximum of 1000 access bindings can be retrieved in a batch. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding} |

#### `properties.accessBindings.batchUpdate()`

Updates information about multiple access bindings to an account or property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account or property that owns the access bindings. The parent of all provided AccessBinding in UpdateAccessBindingRequest messages must match this field. Formats: - accounts/{account} - properties/{property} |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.accessBindings.batchDelete()`

Deletes information about multiple users' links to an account or property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field in DeleteAccessBindingRequest messages must match this field. Formats: - accounts/{account} - properties/{property} |
| `params.resource` | `object` | Yes | The request body. |

### `properties.expandedDataSets`

#### `properties.expandedDataSets.get()`

Lookup for a single ExpandedDataSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ExpandedDataSet to get. Example format: properties/1234/expandedDataSets/5678 |

#### `properties.expandedDataSets.list()`

Lists ExpandedDataSets on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListExpandedDataSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExpandedDataSet` must match the call that provided the page token. |

#### `properties.expandedDataSets.create()`

Creates a ExpandedDataSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.expandedDataSets.patch()`

Updates a ExpandedDataSet on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name for this ExpandedDataSet resource. Format: properties/{property_id}/expandedDataSets/{expanded_data_set} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.expandedDataSets.delete()`

Deletes a ExpandedDataSet on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Example format: properties/1234/expandedDataSets/5678 |

### `properties.channelGroups`

#### `properties.channelGroups.get()`

Lookup for a single ChannelGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The ChannelGroup to get. Example format: properties/1234/channelGroups/5678 |

#### `properties.channelGroups.list()`

Lists ChannelGroups on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The property for which to list ChannelGroups. Example format: properties/1234 |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListChannelGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannelGroups` must match the call that provided the page token. |

#### `properties.channelGroups.create()`

Creates a ChannelGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The property for which to create a ChannelGroup. Example format: properties/1234 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.channelGroups.patch()`

Updates a ChannelGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name for this Channel Group resource. Format: properties/{property}/channelGroups/{channel_group} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.channelGroups.delete()`

Deletes a ChannelGroup on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The ChannelGroup to delete. Example format: properties/1234/channelGroups/5678 |

### `properties.bigQueryLinks`

#### `properties.bigQueryLinks.create()`

Creates a BigQueryLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.bigQueryLinks.get()`

Lookup for a single BigQuery Link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the BigQuery link to lookup. Format: properties/{property_id}/bigQueryLinks/{bigquery_link_id} Example: properties/123/bigQueryLinks/456 |

#### `properties.bigQueryLinks.list()`

Lists BigQuery Links on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the property to list BigQuery links under. Format: properties/{property_id} Example: properties/1234 |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListBigQueryLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryLinks` must match the call that provided the page token. |

#### `properties.bigQueryLinks.delete()`

Deletes a BigQueryLink on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The BigQueryLink to delete. Example format: properties/1234/bigQueryLinks/5678 |

#### `properties.bigQueryLinks.patch()`

Updates a BigQueryLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of this BigQuery link. Format: 'properties/{property_id}/bigQueryLinks/{bigquery_link_id}' Format: 'properties/1234/bigQueryLinks/abc567' |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

### `properties.adSenseLinks`

#### `properties.adSenseLinks.get()`

Looks up a single AdSenseLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Unique identifier for the AdSense Link requested. Format: properties/{propertyId}/adSenseLinks/{linkId} Example: properties/1234/adSenseLinks/5678 |

#### `properties.adSenseLinks.create()`

Creates an AdSenseLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The property for which to create an AdSense Link. Format: properties/{propertyId} Example: properties/1234 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.adSenseLinks.delete()`

Deletes an AdSenseLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Unique identifier for the AdSense Link to be deleted. Format: properties/{propertyId}/adSenseLinks/{linkId} Example: properties/1234/adSenseLinks/5678 |

#### `properties.adSenseLinks.list()`

Lists AdSenseLinks on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the parent property. Format: properties/{propertyId} Example: properties/1234 |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| `params.pageToken` | `string` | No | A page token received from a previous `ListAdSenseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdSenseLinks` must match the call that provided the page token. |

### `properties.calculatedMetrics`

#### `properties.calculatedMetrics.get()`

Lookup for a single CalculatedMetric.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CalculatedMetric to get. Format: properties/{property_id}/calculatedMetrics/{calculated_metric_id} Example: properties/1234/calculatedMetrics/Metric01 |

#### `properties.calculatedMetrics.create()`

Creates a CalculatedMetric.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: properties/{property_id} Example: properties/1234 |
| `params.calculatedMetricId` | `string` | No | Required. The ID to use for the calculated metric which will become the final component of the calculated metric's resource name. This value should be 1-80 characters and valid characters are /[a-zA-Z0-9_]/, no spaces allowed. calculated_metric_id must be unique between all calculated metrics under a property. The calculated_metric_id is used when referencing this calculated metric from external APIs, for example, "calcMetric:{calculated_metric_id}". |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.calculatedMetrics.list()`

Lists CalculatedMetrics on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example format: properties/1234 |
| `params.pageSize` | `integer` | No | Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum). |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListCalculatedMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCalculatedMetrics` must match the call that provided the page token. |

#### `properties.calculatedMetrics.patch()`

Updates a CalculatedMetric on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name for this CalculatedMetric. Format: 'properties/{property_id}/calculatedMetrics/{calculated_metric_id}' |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.calculatedMetrics.delete()`

Deletes a CalculatedMetric on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CalculatedMetric to delete. Format: properties/{property_id}/calculatedMetrics/{calculated_metric_id} Example: properties/1234/calculatedMetrics/Metric01 |

### `properties.rollupPropertySourceLinks`

#### `properties.rollupPropertySourceLinks.get()`

Lookup for a single roll-up property source Link. Only roll-up properties can have source links, so this method will throw an error if used on other types of properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the roll-up property source link to lookup. Format: properties/{property_id}/rollupPropertySourceLinks/{rollup_property_source_link_id} Example: properties/123/rollupPropertySourceLinks/456 |

#### `properties.rollupPropertySourceLinks.list()`

Lists roll-up property source Links on a property. Only roll-up properties can have source links, so this method will throw an error if used on other types of properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the roll-up property to list roll-up property source links under. Format: properties/{property_id} Example: properties/1234 |
| `params.pageSize` | `integer` | No | Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListRollupPropertySourceLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRollupPropertySourceLinks` must match the call that provided the page token. |

#### `properties.rollupPropertySourceLinks.create()`

Creates a roll-up property source link. Only roll-up properties can have source links, so this method will throw an error if used on other types of properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: properties/{property_id} Example: properties/1234 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.rollupPropertySourceLinks.delete()`

Deletes a roll-up property source link. Only roll-up properties can have source links, so this method will throw an error if used on other types of properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: properties/{property_id}/rollupPropertySourceLinks/{rollup_property_source_link_id} Example: properties/1234/rollupPropertySourceLinks/5678 |

### `properties.subpropertyEventFilters`

#### `properties.subpropertyEventFilters.create()`

Creates a subproperty Event Filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The ordinary property for which to create a subproperty event filter. Format: properties/property_id Example: properties/123 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.subpropertyEventFilters.get()`

Lookup for a single subproperty Event Filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the subproperty event filter to lookup. Format: properties/property_id/subpropertyEventFilters/subproperty_event_filter Example: properties/123/subpropertyEventFilters/456 |

#### `properties.subpropertyEventFilters.list()`

List all subproperty Event Filters on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the ordinary property. Format: properties/property_id Example: properties/123 |
| `params.pageSize` | `integer` | No | Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListSubpropertyEventFilters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubpropertyEventFilters` must match the call that provided the page token. |

#### `properties.subpropertyEventFilters.patch()`

Updates a subproperty Event Filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Format: properties/{ordinary_property_id}/subpropertyEventFilters/{sub_property_event_filter} Example: properties/1234/subpropertyEventFilters/5678 |
| `params.updateMask` | `string` | No | Required. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.subpropertyEventFilters.delete()`

Deletes a subproperty event filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the subproperty event filter to delete. Format: properties/property_id/subpropertyEventFilters/subproperty_event_filter Example: properties/123/subpropertyEventFilters/456 |

### `properties.reportingDataAnnotations`

#### `properties.reportingDataAnnotations.create()`

Creates a Reporting Data Annotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The property for which to create a Reporting Data Annotation. Format: properties/property_id Example: properties/123 |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.reportingDataAnnotations.get()`

Lookup a single Reporting Data Annotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the Reporting Data Annotation to lookup. Format: properties/property_id/reportingDataAnnotations/reportingDataAnnotation Example: properties/123/reportingDataAnnotations/456 |

#### `properties.reportingDataAnnotations.list()`

List all Reporting Data Annotations on a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the property. Format: properties/property_id Example: properties/123 |
| `params.filter` | `string` | No | Optional. Filter that restricts which reporting data annotations under the parent property are listed. Supported fields are: * 'name' * `title` * `description` * `annotation_date` * `annotation_date_range` * `color` Additionally, this API provides the following helper functions: * annotation_duration() : the duration that this annotation marks, [durations](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/duration.proto). expect a numeric representation of seconds followed by an `s` suffix. * is_annotation_in_range(start_date, end_date) : if the annotation is in the range specified by the `start_date` and `end_date`. The dates are in ISO-8601 format, for example `2031-06-28`. Supported operations: * `=` : equals * `!=` : not equals * `<` : less than * `>` : greater than * `<=` : less than or equals * `>=` : greater than or equals * `:` : has operator * `=~` : [regular expression](https://github.com/google/re2/wiki/Syntax) match * `!~` : [regular expression](https://github.com/google/re2/wiki/Syntax) does not match * `NOT` : Logical not * `AND` : Logical and * `OR` : Logical or Examples: 1. `title="Holiday Sale"` 2. `description=~"[Bb]ig [Gg]ame.*[Ss]ale"` 3. `is_annotation_in_range("2025-12-25", "2026-01-16") = true` 4. `annotation_duration() >= 172800s AND title:BOGO` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListReportingDataAnnotations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReportingDataAnnotations` must match the call that provided the page token. |

#### `properties.reportingDataAnnotations.patch()`

Updates a Reporting Data Annotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. Resource name of this Reporting Data Annotation. Format: 'properties/{property_id}/reportingDataAnnotations/{reporting_data_annotation}' Format: 'properties/123/reportingDataAnnotations/456' |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.reportingDataAnnotations.delete()`

Deletes a Reporting Data Annotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the Reporting Data Annotation to delete. Format: properties/property_id/reportingDataAnnotations/reporting_data_annotation Example: properties/123/reportingDataAnnotations/456 |

### `properties.subpropertySyncConfigs`

#### `properties.subpropertySyncConfigs.list()`

List all `SubpropertySyncConfig` resources for a property.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the property. Format: properties/property_id Example: properties/123 |
| `params.pageSize` | `integer` | No | Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum) |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListSubpropertySyncConfig` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubpropertySyncConfig` must match the call that provided the page token. |

#### `properties.subpropertySyncConfigs.patch()`

Updates a `SubpropertySyncConfig`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Identifier. Format: properties/{ordinary_property_id}/subpropertySyncConfigs/{subproperty_id} Example: properties/1234/subpropertySyncConfigs/5678 |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `properties.subpropertySyncConfigs.get()`

Lookup for a single `SubpropertySyncConfig`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the SubpropertySyncConfig to lookup. Format: properties/{ordinary_property_id}/subpropertySyncConfigs/{subproperty_id} Example: properties/1234/subpropertySyncConfigs/5678 |