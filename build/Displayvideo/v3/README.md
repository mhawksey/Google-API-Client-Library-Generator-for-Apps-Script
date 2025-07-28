# Display & Video 360 API - Apps Script Client Library

Auto-generated client library for using the **Display & Video 360 API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:47:28 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:31:45 GMT
- **Created:** Sun, 20 Jul 2025 16:31:55 GMT



---

## API Reference

### `advertisers`

#### `advertisers.listAssignedTargetingOptions()`

Lists assigned targeting options of an advertiser across targeting types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the line item belongs to. |
| `params.pageSize` | `integer` | No | Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is '5000'. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListAdvertiserAssignedTargetingOptions` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`. |
| `params.filter` | `string` | No | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=) operator`. Supported fields: * `targetingType` Examples: * targetingType with value TARGETING_TYPE_CHANNEL `targetingType="TARGETING_TYPE_CHANNEL"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.editAssignedTargetingOptions()`

Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.get()`

Gets an advertiser.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser to fetch. |

#### `advertisers.list()`

Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | No | Required. The ID of the partner that the fetched advertisers should all belong to. The system only supports listing advertisers for one partner at a time. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdvertisers` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `advertiserId` (default) * `displayName` * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by advertiser fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `advertiserId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All active advertisers under a partner: `entityStatus="ENTITY_STATUS_ACTIVE"` * All advertisers with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All advertisers with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.create()`

Creates a new advertiser. Returns the newly created advertiser if successful. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.patch()`

Updates an existing advertiser. Returns the updated advertiser if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Output only. The unique ID of the advertiser. Assigned by the system. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.delete()`

Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser we need to delete. |

#### `advertisers.audit()`

Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser to audit. |
| `params.readMask` | `string` | No | Optional. The specific fields to return. If no mask is specified, all fields in the response proto will be filled. Valid values are: * usedLineItemsCount * usedInsertionOrdersCount * usedCampaignsCount * channelsCount * negativelyTargetedChannelsCount * negativeKeywordListsCount * adGroupCriteriaCount * campaignCriteriaCount |

### `advertisers.adGroupAds`

#### `advertisers.adGroupAds.get()`

Gets an ad group ad.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser this ad group ad belongs to. |
| `params.adGroupAdId` | `string` | Yes | Required. The ID of the ad group ad to fetch. |

#### `advertisers.adGroupAds.list()`

Lists ad group ads.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the ad groups belongs to. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdGroupAds` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| `params.filter` | `string` | No | Optional. Allows filtering by custom ad group ad fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` and `OR`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `adGroupId` * `displayName` * `entityStatus` * `adGroupAdId` Examples: * All ad group ads under an ad group: `adGroupId="1234"` * All ad group ads under an ad group with an entityStatus of `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED`: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND adGroupId="12345"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

### `advertisers.adGroups`

#### `advertisers.adGroups.bulkListAdGroupAssignedTargetingOptions()`

Lists assigned targeting options for multiple ad groups across targeting types. Inherited assigned targeting options are not included.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the line items belongs to. |
| `params.adGroupIds` | `string` | No | Required. The IDs of the ad groups to list assigned targeting options for. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | Optional. A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the `BulkListAdGroupAssignedTargetingOptions` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the list. Acceptable values are: * `adGroupId` (default) * `assignedTargetingOption.targetingType` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`. |
| `params.filter` | `string` | No | Optional. Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_YOUTUBE_VIDEO` or `TARGETING_TYPE_YOUTUBE_CHANNEL`: `targetingType="TARGETING_TYPE_YOUTUBE_VIDEO" OR targetingType="TARGETING_TYPE_YOUTUBE_CHANNEL"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.adGroups.get()`

Gets an ad group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser this ad group belongs to. |
| `params.adGroupId` | `string` | Yes | Required. The ID of the ad group to fetch. |

#### `advertisers.adGroups.list()`

Lists ad groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the ad groups belongs to. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdGroups` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| `params.filter` | `string` | No | Optional. Allows filtering by custom ad group fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` and `OR`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported properties: * `adGroupId` * `displayName` * `entityStatus` * `lineItemId` * `adGroupFormat` Examples: * All ad groups under an line item: `lineItemId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` `AD_GROUP_FORMAT_IN_STREAM` ad groups under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND adGroupFormat="AD_GROUP_FORMAT_IN_STREAM"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

### `advertisers.adGroups.targetingTypes`

### `advertisers.adGroups.targetingTypes.assignedTargetingOptions`

#### `advertisers.adGroups.targetingTypes.assignedTargetingOptions.get()`

Gets a single targeting option assigned to an ad group. Inherited assigned targeting options are not included.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the ad group belongs to. |
| `params.adGroupId` | `string` | Yes | Required. The ID of the ad group the assigned targeting option belongs to. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SESSION_POSITION` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_YOUTUBE_VIDEO` |
| `params.assignedTargetingOptionId` | `string` | Yes | Required. An identifier unique to the targeting type in this line item that identifies the assigned targeting option being requested. |

#### `advertisers.adGroups.targetingTypes.assignedTargetingOptions.list()`

Lists the targeting options assigned to an ad group. Inherited assigned targeting options are not included.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the ad group belongs to. |
| `params.adGroupId` | `string` | Yes | Required. The ID of the ad group to list assigned targeting options for. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SESSION_POSITION` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_YOUTUBE_VIDEO` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdGroupAssignedTargetingOptions` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`. |
| `params.filter` | `string` | No | Optional. Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` Examples: * `AssignedTargetingOption` resources with ID 1 or 2: `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

### `advertisers.lineItems`

#### `advertisers.lineItems.bulkListAssignedTargetingOptions()`

Lists assigned targeting options for multiple line items across targeting types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the line items belongs to. |
| `params.lineItemIds` | `string` | No | Required. The IDs of the line items to list assigned targeting options for. |
| `params.pageSize` | `integer` | No | Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the `BulkListAssignedTargetingOptions` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `lineItemId` (default) * `assignedTargetingOption.targetingType` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`. |
| `params.filter` | `string` | No | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR` on the same field. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` * `inheritance` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` or `TARGETING_TYPE_CHANNEL`: `targetingType="TARGETING_TYPE_PROXIMITY_LOCATION_LIST" OR targetingType="TARGETING_TYPE_CHANNEL"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.lineItems.bulkEditAssignedTargetingOptions()`

Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item:

* lineItems.bulkUpdate

* lineItems.patch

* assignedTargetingOptions.create

* assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the line items belong to. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.lineItems.get()`

Gets a line item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser this line item belongs to. |
| `params.lineItemId` | `string` | Yes | Required. The ID of the line item to fetch. |

#### `advertisers.lineItems.list()`

Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser to list line items for. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLineItems` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by line item fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `insertionOrderId` * `lineItemId` * `lineItemType` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All line items under an insertion order: `insertionOrderId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` and `LINE_ITEM_TYPE_DISPLAY_DEFAULT` line items under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND lineItemType="LINE_ITEM_TYPE_DISPLAY_DEFAULT"` * All line items with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All line items with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.lineItems.create()`

Creates a new line item. Returns the newly created line item if successful. YouTube & Partners line items cannot be created or updated using the API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Output only. The unique ID of the advertiser the line item belongs to. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.lineItems.patch()`

Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item:

* BulkEditAssignedTargetingOptions

* BulkUpdateLineItems

* assignedTargetingOptions.create

* assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Output only. The unique ID of the advertiser the line item belongs to. |
| `params.lineItemId` | `string` | Yes | Output only. The unique ID of the line item. Assigned by the system. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.lineItems.delete()`

Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it. YouTube & Partners line items cannot be created or updated using the API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser this line item belongs to. |
| `params.lineItemId` | `string` | Yes | The ID of the line item to delete. |

#### `advertisers.lineItems.generateDefault()`

Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields:

* The insertion order's insertion_order_type

* The insertion order's automation_type

* The given line_item_type YouTube & Partners line items cannot be created or updated using the API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser this line item belongs to. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.lineItems.duplicate()`

Duplicates a line item. Returns the ID of the created line item if successful. YouTube & Partners line items cannot be created or updated using the API. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser this line item belongs to. |
| `params.lineItemId` | `string` | Yes | Required. The ID of the line item to duplicate. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.lineItems.bulkUpdate()`

Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item:

* BulkEditAssignedTargetingOptions

* UpdateLineItem

* assignedTargetingOptions.create

* assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser this line item belongs to. |
| `params.resource` | `object` | Yes | The request body. |

### `advertisers.lineItems.targetingTypes`

### `advertisers.lineItems.targetingTypes.assignedTargetingOptions`

#### `advertisers.lineItems.targetingTypes.assignedTargetingOptions.get()`

Gets a single targeting option assigned to a line item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the line item belongs to. |
| `params.lineItemId` | `string` | Yes | Required. The ID of the line item the assigned targeting option belongs to. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_INVENTORY_MODE` * `TARGETING_TYPE_YOUTUBE_CHANNEL` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items) * `TARGETING_TYPE_YOUTUBE_VIDEO` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items) |
| `params.assignedTargetingOptionId` | `string` | Yes | Required. An identifier unique to the targeting type in this line item that identifies the assigned targeting option being requested. |

#### `advertisers.lineItems.targetingTypes.assignedTargetingOptions.list()`

Lists the targeting options assigned to a line item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the line item belongs to. |
| `params.lineItemId` | `string` | Yes | Required. The ID of the line item to list assigned targeting options for. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_INVENTORY_MODE` * `TARGETING_TYPE_YOUTUBE_CHANNEL` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items) * `TARGETING_TYPE_YOUTUBE_VIDEO` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items) |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLineItemAssignedTargetingOptions` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`. |
| `params.filter` | `string` | No | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` * `inheritance` Examples: * `AssignedTargetingOption` resources with ID 1 or 2: `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.lineItems.targetingTypes.assignedTargetingOptions.create()`

Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item:

* lineItems.bulkEditAssignedTargetingOptions

* lineItems.bulkUpdate

* lineItems.patch

* DeleteLineItemAssignedTargetingOption YouTube & Partners line items cannot be created or updated using the API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the line item belongs to. |
| `params.lineItemId` | `string` | Yes | Required. The ID of the line item the assigned targeting option will belong to. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.lineItems.targetingTypes.assignedTargetingOptions.delete()`

Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item:

* lineItems.bulkEditAssignedTargetingOptions

* lineItems.bulkUpdate

* lineItems.patch

* CreateLineItemAssignedTargetingOption YouTube & Partners line items cannot be created or updated using the API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the line item belongs to. |
| `params.lineItemId` | `string` | Yes | Required. The ID of the line item the assigned targeting option belongs to. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` |
| `params.assignedTargetingOptionId` | `string` | Yes | Required. The ID of the assigned targeting option to delete. |

### `advertisers.targetingTypes`

### `advertisers.targetingTypes.assignedTargetingOptions`

#### `advertisers.targetingTypes.assignedTargetingOptions.get()`

Gets a single targeting option assigned to an advertiser.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_YOUTUBE_VIDEO` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_CONTENT_THEME_EXCLUSION` |
| `params.assignedTargetingOptionId` | `string` | Yes | Required. An identifier unique to the targeting type in this advertiser that identifies the assigned targeting option being requested. |

#### `advertisers.targetingTypes.assignedTargetingOptions.list()`

Lists the targeting options assigned to an advertiser.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_YOUTUBE_VIDEO` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_CONTENT_THEME_EXCLUSION` |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdvertiserAssignedTargetingOptions` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`. |
| `params.filter` | `string` | No | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` Examples: * `AssignedTargetingOption` with ID 123456: `assignedTargetingOptionId="123456"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.targetingTypes.assignedTargetingOptions.create()`

Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_INVENTORY_MODE` |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.targetingTypes.assignedTargetingOptions.delete()`

Deletes an assigned targeting option from an advertiser.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_INVENTORY_MODE` |
| `params.assignedTargetingOptionId` | `string` | Yes | Required. The ID of the assigned targeting option to delete. |

### `advertisers.assets`

#### `advertisers.assets.upload()`

Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser this asset belongs to. |
| `params.resource` | `object` | Yes | The request body. |

### `advertisers.campaigns`

#### `advertisers.campaigns.listAssignedTargetingOptions()`

Lists assigned targeting options of a campaign across targeting types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the campaign belongs to. |
| `params.campaignId` | `string` | Yes | Required. The ID of the campaign to list assigned targeting options for. |
| `params.pageSize` | `integer` | No | Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListCampaignAssignedTargetingOptions` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`. |
| `params.filter` | `string` | No | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` * `inheritance` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_LANGUAGE` or `TARGETING_TYPE_GENDER`: `targetingType="TARGETING_TYPE_LANGUAGE" OR targetingType="TARGETING_TYPE_GENDER"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.campaigns.get()`

Gets a campaign.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser this campaign belongs to. |
| `params.campaignId` | `string` | Yes | Required. The ID of the campaign to fetch. |

#### `advertisers.campaigns.list()`

Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser to list campaigns for. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCampaigns` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by campaign fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` campaigns under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED")` * All campaigns with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All campaigns with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.campaigns.create()`

Creates a new campaign. Returns the newly created campaign if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Output only. The unique ID of the advertiser the campaign belongs to. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.campaigns.patch()`

Updates an existing campaign. Returns the updated campaign if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Output only. The unique ID of the advertiser the campaign belongs to. |
| `params.campaignId` | `string` | Yes | Output only. The unique ID of the campaign. Assigned by the system. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.campaigns.delete()`

Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser this campaign belongs to. |
| `params.campaignId` | `string` | Yes | The ID of the campaign we need to delete. |

### `advertisers.campaigns.targetingTypes`

### `advertisers.campaigns.targetingTypes.assignedTargetingOptions`

#### `advertisers.campaigns.targetingTypes.assignedTargetingOptions.get()`

Gets a single targeting option assigned to a campaign.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the campaign belongs to. |
| `params.campaignId` | `string` | Yes | Required. The ID of the campaign the assigned targeting option belongs to. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_VIEWABILITY` |
| `params.assignedTargetingOptionId` | `string` | Yes | Required. An identifier unique to the targeting type in this campaign that identifies the assigned targeting option being requested. |

#### `advertisers.campaigns.targetingTypes.assignedTargetingOptions.list()`

Lists the targeting options assigned to a campaign for a specified targeting type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the campaign belongs to. |
| `params.campaignId` | `string` | Yes | Required. The ID of the campaign to list assigned targeting options for. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_VIEWABILITY` |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCampaignAssignedTargetingOptions` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`. |
| `params.filter` | `string` | No | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` * `inheritance` Examples: * `AssignedTargetingOption` resources with ID 1 or 2 `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER` `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

### `advertisers.channels`

#### `advertisers.channels.get()`

Gets a channel for a partner or advertiser.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser that owns the fetched channel. |
| `params.channelId` | `string` | Yes | Required. The ID of the channel to fetch. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the fetched channel. |

#### `advertisers.channels.list()`

Lists channels for a partner or advertiser.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser that owns the channels. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the channels. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListChannels` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `displayName` (default) * `channelId` The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by channel fields. Supported syntax: * Filter expressions for channel can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All channels for which the display name contains "google": `displayName : "google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.channels.create()`

Creates a new channel. Returns the newly created channel if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser that owns the created channel. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the created channel. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.channels.patch()`

Updates a channel. Returns the updated channel if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser that owns the created channel. |
| `params.channelId` | `string` | Yes | Output only. The unique ID of the channel. Assigned by the system. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the created channel. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

### `advertisers.channels.sites`

#### `advertisers.channels.sites.list()`

Lists sites in a channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser that owns the parent channel. |
| `params.channelId` | `string` | Yes | Required. The ID of the parent channel to which the requested sites belong. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the parent channel. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `10000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListSites` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `urlOrAppId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `urlOrAppId desc`. |
| `params.filter` | `string` | No | Allows filtering by site fields. Supported syntax: * Filter expressions for site retrieval can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `urlOrAppId` Examples: * All sites for which the URL or app ID contains "google": `urlOrAppId : "google"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.channels.sites.create()`

Creates a site in a channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser that owns the parent channel. |
| `params.channelId` | `string` | Yes | Required. The ID of the parent channel in which the site will be created. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the parent channel. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.channels.sites.delete()`

Deletes a site from a channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser that owns the parent channel. |
| `params.channelId` | `string` | Yes | Required. The ID of the parent channel to which the site belongs. |
| `params.urlOrAppId` | `string` | Yes | Required. The URL or app ID of the site to delete. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the parent channel. |

#### `advertisers.channels.sites.bulkEdit()`

Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser that owns the parent channel. |
| `params.channelId` | `string` | Yes | Required. The ID of the parent channel to which the sites belong. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.channels.sites.replace()`

Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser that owns the parent channel. |
| `params.channelId` | `string` | Yes | Required. The ID of the parent channel whose sites will be replaced. |
| `params.resource` | `object` | Yes | The request body. |

### `advertisers.creatives`

#### `advertisers.creatives.get()`

Gets a creative.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser this creative belongs to. |
| `params.creativeId` | `string` | Yes | Required. The ID of the creative to fetch. |

#### `advertisers.creatives.list()`

Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser to list creatives for. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCreatives` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `creativeId` (default) * `createTime` * `mediaDuration` * `dimensions` (sorts by width first, then by height) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `createTime desc`. |
| `params.filter` | `string` | No | Allows filtering by creative fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `lineItemIds` field must use the `HAS (:)` operator. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. * For `entityStatus`, `minDuration`, `maxDuration`, `updateTime`, and `dynamic` fields, there may be at most one restriction. Supported Fields: * `approvalStatus` * `creativeId` * `creativeType` * `dimensions` (input in the form of `{width}x{height}`) * `dynamic` * `entityStatus` * `exchangeReviewStatus` (input in the form of `{exchange}-{reviewStatus}`) * `lineItemIds` * `maxDuration` (input in the form of `{duration}s`. Only seconds are supported) * `minDuration` (input in the form of `{duration}s`. Only seconds are supported) * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Notes: * For `updateTime`, a creative resource's field value reflects the last time that a creative has been updated, which includes updates made by the system (e.g. creative review updates). Examples: * All native creatives: `creativeType="CREATIVE_TYPE_NATIVE"` * All active creatives with 300x400 or 50x100 dimensions: `entityStatus="ENTITY_STATUS_ACTIVE" AND (dimensions="300x400" OR dimensions="50x100")` * All dynamic creatives that are approved by AdX or AppNexus, with a minimum duration of 5 seconds and 200ms: `dynamic="true" AND minDuration="5.2s" AND (exchangeReviewStatus="EXCHANGE_GOOGLE_AD_MANAGER-REVIEW_STATUS_APPROVED" OR exchangeReviewStatus="EXCHANGE_APPNEXUS-REVIEW_STATUS_APPROVED")` * All video creatives that are associated with line item ID 1 or 2: `creativeType="CREATIVE_TYPE_VIDEO" AND (lineItemIds:1 OR lineItemIds:2)` * Find creatives by multiple creative IDs: `creativeId=1 OR creativeId=2` * All creatives with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.creatives.create()`

Creates a new creative. Returns the newly created creative if successful. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Output only. The unique ID of the advertiser the creative belongs to. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.creatives.patch()`

Updates an existing creative. Returns the updated creative if successful. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Output only. The unique ID of the advertiser the creative belongs to. |
| `params.creativeId` | `string` | Yes | Output only. The unique ID of the creative. Assigned by the system. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.creatives.delete()`

Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser this creative belongs to. |
| `params.creativeId` | `string` | Yes | The ID of the creative to be deleted. |

### `advertisers.insertionOrders`

#### `advertisers.insertionOrders.listAssignedTargetingOptions()`

Lists assigned targeting options of an insertion order across targeting types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the insertion order belongs to. |
| `params.insertionOrderId` | `string` | Yes | Required. The ID of the insertion order to list assigned targeting options for. |
| `params.pageSize` | `integer` | No | Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListInsertionOrderAssignedTargetingOptions` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`. |
| `params.filter` | `string` | No | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` * `inheritance` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` or `TARGETING_TYPE_CHANNEL`: `targetingType="TARGETING_TYPE_PROXIMITY_LOCATION_LIST" OR targetingType="TARGETING_TYPE_CHANNEL"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.insertionOrders.get()`

Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser this insertion order belongs to. |
| `params.insertionOrderId` | `string` | Yes | Required. The ID of the insertion order to fetch. |

#### `advertisers.insertionOrders.list()`

Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser to list insertion orders for. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInsertionOrders` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * "displayName" (default) * "entityStatus" * "updateTime" The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by insertion order fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All insertion orders under a campaign: `campaignId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` insertion orders under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED")` * All insertion orders with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All insertion orders with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.insertionOrders.create()`

Creates a new insertion order. Returns the newly created insertion order if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Output only. The unique ID of the advertiser the insertion order belongs to. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.insertionOrders.patch()`

Updates an existing insertion order. Returns the updated insertion order if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Output only. The unique ID of the advertiser the insertion order belongs to. |
| `params.insertionOrderId` | `string` | Yes | Output only. The unique ID of the insertion order. Assigned by the system. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.insertionOrders.delete()`

Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | The ID of the advertiser this insertion order belongs to. |
| `params.insertionOrderId` | `string` | Yes | The ID of the insertion order to delete. |

### `advertisers.insertionOrders.targetingTypes`

### `advertisers.insertionOrders.targetingTypes.assignedTargetingOptions`

#### `advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.get()`

Gets a single targeting option assigned to an insertion order.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the insertion order belongs to. |
| `params.insertionOrderId` | `string` | Yes | Required. The ID of the insertion order the assigned targeting option belongs to. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` |
| `params.assignedTargetingOptionId` | `string` | Yes | Required. An identifier unique to the targeting type in this insertion order that identifies the assigned targeting option being requested. |

#### `advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.list()`

Lists the targeting options assigned to an insertion order.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the insertion order belongs to. |
| `params.insertionOrderId` | `string` | Yes | Required. The ID of the insertion order to list assigned targeting options for. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInsertionOrderAssignedTargetingOptions` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`. |
| `params.filter` | `string` | No | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` * `inheritance` Examples: * `AssignedTargetingOption` resources with ID 1 or 2: `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.create()`

Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types:

* `TARGETING_TYPE_AGE_RANGE`

* `TARGETING_TYPE_BROWSER`

* `TARGETING_TYPE_CATEGORY`

* `TARGETING_TYPE_CHANNEL`

* `TARGETING_TYPE_DEVICE_MAKE_MODEL`

* `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`

* `TARGETING_TYPE_ENVIRONMENT`

* `TARGETING_TYPE_GENDER`

* `TARGETING_TYPE_KEYWORD`

* `TARGETING_TYPE_LANGUAGE`

* `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`

* `TARGETING_TYPE_OPERATING_SYSTEM`

* `TARGETING_TYPE_PARENTAL_STATUS`

* `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`

* `TARGETING_TYPE_VIEWABILITY`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the insertion order belongs to. |
| `params.insertionOrderId` | `string` | Yes | Required. The ID of the insertion order the assigned targeting option will belong to. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY` |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.delete()`

Deletes an assigned targeting option from an insertion order. Supported targeting types:

* `TARGETING_TYPE_AGE_RANGE`

* `TARGETING_TYPE_BROWSER`

* `TARGETING_TYPE_CATEGORY`

* `TARGETING_TYPE_CHANNEL`

* `TARGETING_TYPE_DEVICE_MAKE_MODEL`

* `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`

* `TARGETING_TYPE_ENVIRONMENT`

* `TARGETING_TYPE_GENDER`

* `TARGETING_TYPE_KEYWORD`

* `TARGETING_TYPE_LANGUAGE`

* `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`

* `TARGETING_TYPE_OPERATING_SYSTEM`

* `TARGETING_TYPE_PARENTAL_STATUS`

* `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`

* `TARGETING_TYPE_VIEWABILITY`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser the insertion order belongs to. |
| `params.insertionOrderId` | `string` | Yes | Required. The ID of the insertion order the assigned targeting option belongs to. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY` |
| `params.assignedTargetingOptionId` | `string` | Yes | Required. The ID of the assigned targeting option to delete. |

### `advertisers.invoices`

#### `advertisers.invoices.list()`

Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser to list invoices for. |
| `params.issueMonth` | `string` | No | The month to list the invoices for. If not set, the request will retrieve invoices for the previous month. Must be in the format YYYYMM. |
| `params.loiSapinInvoiceType` | `string` | No | Select type of invoice to retrieve for Loi Sapin advertisers. Only applicable to Loi Sapin advertisers. Will be ignored otherwise. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInvoices` method. If not specified, the first page of results will be returned. |

#### `advertisers.invoices.lookupInvoiceCurrency()`

Retrieves the invoice currency used by an advertiser in a given month.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the advertiser to lookup currency for. |
| `params.invoiceMonth` | `string` | No | Month for which the currency is needed. If not set, the request will return existing currency settings for the advertiser. Must be in the format YYYYMM. |

### `advertisers.locationLists`

#### `advertisers.locationLists.get()`

Gets a location list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the fetched location list belongs. |
| `params.locationListId` | `string` | Yes | Required. The ID of the location list to fetch. |

#### `advertisers.locationLists.list()`

Lists location lists based on a given advertiser id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the fetched location lists belong. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. Defaults to `100` if not set. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLocationLists` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `locationListId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by location list fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `locationType` Examples: * All regional location list: `locationType="TARGETING_LOCATION_TYPE_REGIONAL"` * All proximity location list: `locationType="TARGETING_LOCATION_TYPE_PROXIMITY"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.locationLists.create()`

Creates a new location list. Returns the newly created location list if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the location list belongs. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.locationLists.patch()`

Updates a location list. Returns the updated location list if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the location lists belongs. |
| `params.locationListId` | `string` | Yes | Output only. The unique ID of the location list. Assigned by the system. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

### `advertisers.locationLists.assignedLocations`

#### `advertisers.locationLists.assignedLocations.list()`

Lists locations assigned to a location list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the location list belongs. |
| `params.locationListId` | `string` | Yes | Required. The ID of the location list to which these assignments are assigned. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAssignedLocations` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `assignedLocationId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `assignedLocationId desc`. |
| `params.filter` | `string` | No | Allows filtering by location list assignment fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedLocationId` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.locationLists.assignedLocations.create()`

Creates an assignment between a location and a location list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the location list belongs. |
| `params.locationListId` | `string` | Yes | Required. The ID of the location list for which the assignment will be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.locationLists.assignedLocations.delete()`

Deletes the assignment between a location and a location list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the location list belongs. |
| `params.locationListId` | `string` | Yes | Required. The ID of the location list to which this assignment is assigned. |
| `params.assignedLocationId` | `string` | Yes | Required. The ID of the assigned location to delete. |

#### `advertisers.locationLists.assignedLocations.bulkEdit()`

Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in deletedAssignedLocations and then create the assigned locations provided in createdAssignedLocations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the location list belongs. |
| `params.locationListId` | `string` | Yes | Required. The ID of the location list to which these assignments are assigned. |
| `params.resource` | `object` | Yes | The request body. |

### `advertisers.negativeKeywordLists`

#### `advertisers.negativeKeywordLists.get()`

Gets a negative keyword list given an advertiser ID and a negative keyword list ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the fetched negative keyword list belongs. |
| `params.negativeKeywordListId` | `string` | Yes | Required. The ID of the negative keyword list to fetch. |

#### `advertisers.negativeKeywordLists.list()`

Lists negative keyword lists based on a given advertiser id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the fetched negative keyword lists belong. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. Defaults to `100` if not set. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListNegativeKeywordLists` method. If not specified, the first page of results will be returned. |

#### `advertisers.negativeKeywordLists.create()`

Creates a new negative keyword list. Returns the newly created negative keyword list if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the negative keyword list will belong. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.negativeKeywordLists.patch()`

Updates a negative keyword list. Returns the updated negative keyword list if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the negative keyword list belongs. |
| `params.negativeKeywordListId` | `string` | Yes | Output only. The unique ID of the negative keyword list. Assigned by the system. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.negativeKeywordLists.delete()`

Deletes a negative keyword list given an advertiser ID and a negative keyword list ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the negative keyword list belongs. |
| `params.negativeKeywordListId` | `string` | Yes | Required. The ID of the negative keyword list to delete. |

### `advertisers.negativeKeywordLists.negativeKeywords`

#### `advertisers.negativeKeywordLists.negativeKeywords.list()`

Lists negative keywords in a negative keyword list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs. |
| `params.negativeKeywordListId` | `string` | Yes | Required. The ID of the parent negative keyword list to which the requested negative keywords belong. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `1000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListNegativeKeywords` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `keywordValue` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `keywordValue desc`. |
| `params.filter` | `string` | No | Allows filtering by negative keyword fields. Supported syntax: * Filter expressions for negative keywords can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `keywordValue` Examples: * All negative keywords for which the keyword value contains "google": `keywordValue : "google"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `advertisers.negativeKeywordLists.negativeKeywords.create()`

Creates a negative keyword in a negative keyword list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs. |
| `params.negativeKeywordListId` | `string` | Yes | Required. The ID of the parent negative keyword list in which the negative keyword will be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.negativeKeywordLists.negativeKeywords.delete()`

Deletes a negative keyword from a negative keyword list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs. |
| `params.negativeKeywordListId` | `string` | Yes | Required. The ID of the parent negative keyword list to which the negative keyword belongs. |
| `params.keywordValue` | `string` | Yes | Required. The keyword value of the negative keyword to delete. |

#### `advertisers.negativeKeywordLists.negativeKeywords.bulkEdit()`

Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs. |
| `params.negativeKeywordListId` | `string` | Yes | Required. The ID of the parent negative keyword list to which the negative keywords belong. |
| `params.resource` | `object` | Yes | The request body. |

#### `advertisers.negativeKeywordLists.negativeKeywords.replace()`

Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | Yes | Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs. |
| `params.negativeKeywordListId` | `string` | Yes | Required. The ID of the parent negative keyword list to which the negative keywords belong. |
| `params.resource` | `object` | Yes | The request body. |

### `combinedAudiences`

#### `combinedAudiences.get()`

Gets a combined audience.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.combinedAudienceId` | `string` | Yes | Required. The ID of the combined audience to fetch. |
| `params.partnerId` | `string` | No | The ID of the partner that has access to the fetched combined audience. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that has access to the fetched combined audience. |

#### `combinedAudiences.list()`

Lists combined audiences. The order is defined by the order_by parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | No | The ID of the partner that has access to the fetched combined audiences. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that has access to the fetched combined audiences. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCombinedAudiences` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `combinedAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by combined audience fields. Supported syntax: * Filter expressions for combined audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All combined audiences for which the display name contains "Google": `displayName : "Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

### `customBiddingAlgorithms`

#### `customBiddingAlgorithms.uploadRules()`

Creates a rules reference object for an AlgorithmRules file. The resulting reference object provides a resource path where the AlgorithmRules file should be uploaded. This reference object should be included when creating a new CustomBiddingAlgorithmRules resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customBiddingAlgorithmId` | `string` | Yes | Required. The ID of the custom bidding algorithm that owns the rules resource. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the parent custom bidding algorithm. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the parent custom bidding algorithm. |

#### `customBiddingAlgorithms.get()`

Gets a custom bidding algorithm.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customBiddingAlgorithmId` | `string` | Yes | Required. The ID of the custom bidding algorithm to fetch. |
| `params.partnerId` | `string` | No | The ID of the DV360 partner that has access to the custom bidding algorithm. |
| `params.advertiserId` | `string` | No | The ID of the DV360 partner that has access to the custom bidding algorithm. |

#### `customBiddingAlgorithms.list()`

Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | No | The ID of the DV360 partner that has access to the custom bidding algorithm. |
| `params.advertiserId` | `string` | No | The ID of the DV360 advertiser that has access to the custom bidding algorithm. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingAlgorithms` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by custom bidding algorithm fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `customBiddingAlgorithmType` field must use the `EQUALS (=)` operator. * The `displayName` field must use the `HAS (:)` operator. Supported fields: * `customBiddingAlgorithmType` * `displayName` Examples: * All custom bidding algorithms for which the display name contains "politics": `displayName:"politics"`. * All custom bidding algorithms for which the type is "SCRIPT_BASED": `customBiddingAlgorithmType=SCRIPT_BASED` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `customBiddingAlgorithms.create()`

Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `customBiddingAlgorithms.patch()`

Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful. Requests updating a custom bidding algorithm assigned to a line item will return an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customBiddingAlgorithmId` | `string` | Yes | Output only. The unique ID of the custom bidding algorithm. Assigned by the system. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `customBiddingAlgorithms.uploadScript()`

Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customBiddingAlgorithmId` | `string` | Yes | Required. The ID of the custom bidding algorithm owns the script. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the parent custom bidding algorithm. |

### `customBiddingAlgorithms.rules`

#### `customBiddingAlgorithms.rules.create()`

Creates a new rules resource. Returns the newly created rules resource if successful. Requests creating a custom bidding rules resource under an algorithm assigned to a line item will return an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customBiddingAlgorithmId` | `string` | Yes | Required. The ID of the custom bidding algorithm that owns the rules resource. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this rules resource. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the parent custom bidding algorithm. |
| `params.resource` | `object` | Yes | The request body. |

#### `customBiddingAlgorithms.rules.get()`

Retrieves a rules resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customBiddingAlgorithmId` | `string` | Yes | Required. The ID of the custom bidding algorithm that owns the rules resource. |
| `params.customBiddingAlgorithmRulesId` | `string` | Yes | Required. The ID of the rules resource to fetch. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the parent custom bidding algorithm. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the parent custom bidding algorithm. |

#### `customBiddingAlgorithms.rules.list()`

Lists rules resources that belong to the given algorithm. The order is defined by the order_by parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customBiddingAlgorithmId` | `string` | Yes | Required. The ID of the custom bidding algorithm that owns the rules resource. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the parent custom bidding algorithm. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the parent custom bidding algorithm. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingAlgorithmRules` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `createTime desc` (default) The default sorting order is descending. To specify ascending order for a field, the suffix "desc" should be removed. Example: `createTime`. |

### `customBiddingAlgorithms.scripts`

#### `customBiddingAlgorithms.scripts.create()`

Creates a new custom bidding script. Returns the newly created script if successful. Requests creating a custom bidding script under an algorithm assigned to a line item will return an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customBiddingAlgorithmId` | `string` | Yes | Required. The ID of the custom bidding algorithm that owns the script. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the parent custom bidding algorithm. |
| `params.resource` | `object` | Yes | The request body. |

#### `customBiddingAlgorithms.scripts.get()`

Gets a custom bidding script.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customBiddingAlgorithmId` | `string` | Yes | Required. The ID of the custom bidding algorithm owns the script. |
| `params.customBiddingScriptId` | `string` | Yes | Required. The ID of the custom bidding script to fetch. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the parent custom bidding algorithm. |

#### `customBiddingAlgorithms.scripts.list()`

Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customBiddingAlgorithmId` | `string` | Yes | Required. The ID of the custom bidding algorithm owns the script. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the parent custom bidding algorithm. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingScripts` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `createTime desc` (default) The default sorting order is descending. To specify ascending order for a field, the suffix "desc" should be removed. Example: `createTime`. |

### `customLists`

#### `customLists.get()`

Gets a custom list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customListId` | `string` | Yes | Required. The ID of the custom list to fetch. |
| `params.advertiserId` | `string` | No | The ID of the DV360 advertiser that has access to the fetched custom lists. |

#### `customLists.list()`

Lists custom lists. The order is defined by the order_by parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | No | The ID of the DV360 advertiser that has access to the fetched custom lists. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomLists` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `customListId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by custom list fields. Supported syntax: * Filter expressions for custom lists can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All custom lists for which the display name contains "Google": `displayName:"Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

### `firstAndThirdPartyAudiences`

#### `firstAndThirdPartyAudiences.get()`

Gets a first and third party audience.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.firstAndThirdPartyAudienceId` | `string` | Yes | Required. The ID of the first and third party audience to fetch. |
| `params.partnerId` | `string` | No | The ID of the partner that has access to the fetched first and third party audience. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that has access to the fetched first and third party audience. |

#### `firstAndThirdPartyAudiences.list()`

Lists first and third party audiences. The order is defined by the order_by parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | No | The ID of the partner that has access to the fetched first and third party audiences. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that has access to the fetched first and third party audiences. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `5000`. If unspecified, this value defaults to `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListFirstAndThirdPartyAudiences` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `firstAndThirdPartyAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by first and third party audience fields. Supported syntax: * Filter expressions for first and third party audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All first and third party audiences for which the display name contains "Google": `displayName:"Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `firstAndThirdPartyAudiences.create()`

Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type:

* `CUSTOMER_MATCH_CONTACT_INFO`

* `CUSTOMER_MATCH_DEVICE_ID`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.advertiserId` | `string` | No | Required. The ID of the advertiser under whom the FirstAndThirdPartyAudience will be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `firstAndThirdPartyAudiences.patch()`

Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type:

* `CUSTOMER_MATCH_CONTACT_INFO`

* `CUSTOMER_MATCH_DEVICE_ID`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.firstAndThirdPartyAudienceId` | `string` | Yes | Output only. The unique ID of the first and third party audience. Assigned by the system. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. Updates are only supported for the following fields: * `displayName` * `description` * `membershipDurationDays` |
| `params.advertiserId` | `string` | No | Required. The ID of the owner advertiser of the updated FirstAndThirdPartyAudience. |
| `params.resource` | `object` | Yes | The request body. |

#### `firstAndThirdPartyAudiences.editCustomerMatchMembers()`

Updates the member list of a Customer Match audience. Only supported for the following audience_type:

* `CUSTOMER_MATCH_CONTACT_INFO`

* `CUSTOMER_MATCH_DEVICE_ID`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.firstAndThirdPartyAudienceId` | `string` | Yes | Required. The ID of the Customer Match FirstAndThirdPartyAudience whose members will be edited. |
| `params.resource` | `object` | Yes | The request body. |

### `floodlightGroups`

#### `floodlightGroups.get()`

Gets a Floodlight group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.floodlightGroupId` | `string` | Yes | Required. The ID of the Floodlight group to fetch. |
| `params.partnerId` | `string` | No | Required. The partner context by which the Floodlight group is being accessed. |

#### `floodlightGroups.patch()`

Updates an existing Floodlight group. Returns the updated Floodlight group if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.floodlightGroupId` | `string` | Yes | Output only. The unique ID of the Floodlight group. Assigned by the system. |
| `params.partnerId` | `string` | No | Required. The partner context by which the Floodlight group is being accessed. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

### `floodlightGroups.floodlightActivities`

#### `floodlightGroups.floodlightActivities.get()`

Gets a Floodlight activity.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.floodlightGroupId` | `string` | Yes | Required. The ID of the parent Floodlight group to which the requested Floodlight activity belongs. |
| `params.floodlightActivityId` | `string` | Yes | Required. The ID of the Floodlight activity to fetch. |
| `params.partnerId` | `string` | No | Required. The ID of the partner through which the Floodlight activity is being accessed. |

#### `floodlightGroups.floodlightActivities.list()`

Lists Floodlight activities in a Floodlight group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.floodlightGroupId` | `string` | Yes | Required. The ID of the parent Floodlight group to which the requested Floodlight activities belong. |
| `params.partnerId` | `string` | No | Required. The ID of the partner through which the Floodlight activities are being accessed. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListFloodlightActivities` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the list. Acceptable values are: * `displayName` (default) * `floodlightActivityId` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |

### `googleAudiences`

#### `googleAudiences.get()`

Gets a Google audience.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.googleAudienceId` | `string` | Yes | Required. The ID of the Google audience to fetch. |
| `params.partnerId` | `string` | No | The ID of the partner that has access to the fetched Google audience. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that has access to the fetched Google audience. |

#### `googleAudiences.list()`

Lists Google audiences. The order is defined by the order_by parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | No | The ID of the partner that has access to the fetched Google audiences. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that has access to the fetched Google audiences. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListGoogleAudiences` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `googleAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by Google audience fields. Supported syntax: * Filter expressions for Google audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All Google audiences for which the display name contains "Google": `displayName:"Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

### `guaranteedOrders`

#### `guaranteedOrders.create()`

Creates a new guaranteed order. Returns the newly created guaranteed order if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | No | The ID of the partner that the request is being made within. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that the request is being made within. |
| `params.resource` | `object` | Yes | The request body. |

#### `guaranteedOrders.get()`

Gets a guaranteed order.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.guaranteedOrderId` | `string` | Yes | Required. The ID of the guaranteed order to fetch. The ID is of the format `{exchange}-{legacy_guaranteed_order_id}` |
| `params.partnerId` | `string` | No | The ID of the partner that has access to the guaranteed order. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that has access to the guaranteed order. |

#### `guaranteedOrders.list()`

Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | No | The ID of the partner that has access to the guaranteed order. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that has access to the guaranteed order. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListGuaranteedOrders` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by guaranteed order fields. * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `guaranteed_order_id` * `exchange` * `display_name` * `status.entityStatus` Examples: * All active guaranteed orders: `status.entityStatus="ENTITY_STATUS_ACTIVE"` * Guaranteed orders belonging to Google Ad Manager or Rubicon exchanges: `exchange="EXCHANGE_GOOGLE_AD_MANAGER" OR exchange="EXCHANGE_RUBICON"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `guaranteedOrders.patch()`

Updates an existing guaranteed order. Returns the updated guaranteed order if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.guaranteedOrderId` | `string` | Yes | Output only. The unique identifier of the guaranteed order. The guaranteed order IDs have the format `{exchange}-{legacy_guaranteed_order_id}`. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.partnerId` | `string` | No | The ID of the partner that the request is being made within. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that the request is being made within. |
| `params.resource` | `object` | Yes | The request body. |

#### `guaranteedOrders.editGuaranteedOrderReadAccessors()`

Edits read advertisers of a guaranteed order.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.guaranteedOrderId` | `string` | Yes | Required. The ID of the guaranteed order to edit. The ID is of the format `{exchange}-{legacy_guaranteed_order_id}` |
| `params.resource` | `object` | Yes | The request body. |

### `inventorySourceGroups`

#### `inventorySourceGroups.get()`

Gets an inventory source group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.inventorySourceGroupId` | `string` | Yes | Required. The ID of the inventory source group to fetch. |
| `params.partnerId` | `string` | No | The ID of the partner that has access to the inventory source group. A partner cannot access an advertiser-owned inventory source group. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that has access to the inventory source group. If an inventory source group is partner-owned, only advertisers to which the group is explicitly shared can access the group. |

#### `inventorySourceGroups.list()`

Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | No | The ID of the partner that has access to the inventory source group. A partner cannot access advertiser-owned inventory source groups. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that has access to the inventory source group. If an inventory source group is partner-owned, only advertisers to which the group is explicitly shared can access the group. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInventorySources` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `displayName` (default) * `inventorySourceGroupId` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by inventory source group fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `inventorySourceGroupId` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `inventorySourceGroups.create()`

Creates a new inventory source group. Returns the newly created inventory source group if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | No | The ID of the partner that owns the inventory source group. Only this partner will have write access to this group. Only advertisers to which this group is explicitly shared will have read access to this group. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the inventory source group. The parent partner will not have access to this group. |
| `params.resource` | `object` | Yes | The request body. |

#### `inventorySourceGroups.patch()`

Updates an inventory source group. Returns the updated inventory source group if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.inventorySourceGroupId` | `string` | Yes | Output only. The unique ID of the inventory source group. Assigned by the system. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the inventory source group. Only this partner has write access to this group. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the inventory source group. The parent partner does not have access to this group. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `inventorySourceGroups.delete()`

Deletes an inventory source group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.inventorySourceGroupId` | `string` | Yes | Required. The ID of the inventory source group to delete. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the inventory source group. Only this partner has write access to this group. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the inventory source group. The parent partner does not have access to this group. |

### `inventorySourceGroups.assignedInventorySources`

#### `inventorySourceGroups.assignedInventorySources.list()`

Lists inventory sources assigned to an inventory source group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.inventorySourceGroupId` | `string` | Yes | Required. The ID of the inventory source group to which these assignments are assigned. |
| `params.partnerId` | `string` | No | The ID of the partner that has access to the assignment. If the parent inventory source group is advertiser-owned, the assignment cannot be accessed via a partner. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that has access to the assignment. If the parent inventory source group is partner-owned, only advertisers to which the parent group is explicitly shared can access the assigned inventory source. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAssignedInventorySources` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `assignedInventorySourceId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `assignedInventorySourceId desc`. |
| `params.filter` | `string` | No | Allows filtering by assigned inventory source fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedInventorySourceId` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `inventorySourceGroups.assignedInventorySources.create()`

Creates an assignment between an inventory source and an inventory source group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.inventorySourceGroupId` | `string` | Yes | Required. The ID of the inventory source group to which the assignment will be assigned. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the parent inventory source group. Only this partner will have write access to this assigned inventory source. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the parent inventory source group. The parent partner will not have access to this assigned inventory source. |
| `params.resource` | `object` | Yes | The request body. |

#### `inventorySourceGroups.assignedInventorySources.delete()`

Deletes the assignment between an inventory source and an inventory source group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.inventorySourceGroupId` | `string` | Yes | Required. The ID of the inventory source group to which this assignment is assigned. |
| `params.assignedInventorySourceId` | `string` | Yes | Required. The ID of the assigned inventory source to delete. |
| `params.partnerId` | `string` | No | The ID of the partner that owns the parent inventory source group. Only this partner has write access to this assigned inventory source. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the parent inventory source group. The parent partner does not have access to this assigned inventory source. |

#### `inventorySourceGroups.assignedInventorySources.bulkEdit()`

Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.inventorySourceGroupId` | `string` | Yes | Required. The ID of the inventory source group to which the assignments are assigned. |
| `params.resource` | `object` | Yes | The request body. |

### `inventorySources`

#### `inventorySources.get()`

Gets an inventory source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.inventorySourceId` | `string` | Yes | Required. The ID of the inventory source to fetch. |
| `params.partnerId` | `string` | No | Required. The ID of the DV360 partner to which the fetched inventory source is permissioned. |
| `params.advertiserId` | `string` | No | Optional. The ID of the DV360 advertiser to which the fetched inventory source is permissioned. If the user only has access to the advertiser and not the parent partner, use this field to specify the relevant advertiser. |

#### `inventorySources.list()`

Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | No | The ID of the partner that has access to the inventory source. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that has access to the inventory source. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInventorySources` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by inventory source fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `status.entityStatus` * `commitment` * `deliveryMethod` * `rateDetails.rateType` * `exchange` Examples: * All active inventory sources: `status.entityStatus="ENTITY_STATUS_ACTIVE"` * Inventory sources belonging to Google Ad Manager or Rubicon exchanges: `exchange="EXCHANGE_GOOGLE_AD_MANAGER" OR exchange="EXCHANGE_RUBICON"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `inventorySources.create()`

Creates a new inventory source. Returns the newly created inventory source if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | No | The ID of the partner that the request is being made within. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that the request is being made within. |
| `params.resource` | `object` | Yes | The request body. |

#### `inventorySources.patch()`

Updates an existing inventory source. Returns the updated inventory source if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.inventorySourceId` | `string` | Yes | Output only. The unique ID of the inventory source. Assigned by the system. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.partnerId` | `string` | No | The ID of the partner that the request is being made within. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that the request is being made within. |
| `params.resource` | `object` | Yes | The request body. |

#### `inventorySources.editInventorySourceReadWriteAccessors()`

Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.inventorySourceId` | `string` | Yes | Required. The ID of inventory source to update. |
| `params.resource` | `object` | Yes | The request body. |

### `partners`

#### `partners.editAssignedTargetingOptions()`

Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The ID of the partner. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.get()`

Gets a partner.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The ID of the partner to fetch. |

#### `partners.list()`

Lists partners that are accessible to the current user. The order is defined by the order_by parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListPartners` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by partner fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `entityStatus` Examples: * All active partners: `entityStatus="ENTITY_STATUS_ACTIVE"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

### `partners.channels`

#### `partners.channels.get()`

Gets a channel for a partner or advertiser.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | The ID of the partner that owns the fetched channel. |
| `params.channelId` | `string` | Yes | Required. The ID of the channel to fetch. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the fetched channel. |

#### `partners.channels.list()`

Lists channels for a partner or advertiser.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | The ID of the partner that owns the channels. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the channels. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListChannels` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `displayName` (default) * `channelId` The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by channel fields. Supported syntax: * Filter expressions for channel can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All channels for which the display name contains "google": `displayName : "google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `partners.channels.create()`

Creates a new channel. Returns the newly created channel if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | The ID of the partner that owns the created channel. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the created channel. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.channels.patch()`

Updates a channel. Returns the updated channel if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | The ID of the partner that owns the created channel. |
| `params.channelId` | `string` | Yes | Output only. The unique ID of the channel. Assigned by the system. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the created channel. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

### `partners.channels.sites`

#### `partners.channels.sites.list()`

Lists sites in a channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | The ID of the partner that owns the parent channel. |
| `params.channelId` | `string` | Yes | Required. The ID of the parent channel to which the requested sites belong. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the parent channel. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `10000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListSites` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `urlOrAppId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `urlOrAppId desc`. |
| `params.filter` | `string` | No | Allows filtering by site fields. Supported syntax: * Filter expressions for site retrieval can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `urlOrAppId` Examples: * All sites for which the URL or app ID contains "google": `urlOrAppId : "google"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `partners.channels.sites.create()`

Creates a site in a channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | The ID of the partner that owns the parent channel. |
| `params.channelId` | `string` | Yes | Required. The ID of the parent channel in which the site will be created. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the parent channel. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.channels.sites.delete()`

Deletes a site from a channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | The ID of the partner that owns the parent channel. |
| `params.channelId` | `string` | Yes | Required. The ID of the parent channel to which the site belongs. |
| `params.urlOrAppId` | `string` | Yes | Required. The URL or app ID of the site to delete. |
| `params.advertiserId` | `string` | No | The ID of the advertiser that owns the parent channel. |

#### `partners.channels.sites.bulkEdit()`

Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | The ID of the partner that owns the parent channel. |
| `params.channelId` | `string` | Yes | Required. The ID of the parent channel to which the sites belong. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.channels.sites.replace()`

Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | The ID of the partner that owns the parent channel. |
| `params.channelId` | `string` | Yes | Required. The ID of the parent channel whose sites will be replaced. |
| `params.resource` | `object` | Yes | The request body. |

### `partners.targetingTypes`

### `partners.targetingTypes.assignedTargetingOptions`

#### `partners.targetingTypes.assignedTargetingOptions.get()`

Gets a single targeting option assigned to a partner.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The ID of the partner. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` |
| `params.assignedTargetingOptionId` | `string` | Yes | Required. An identifier unique to the targeting type in this partner that identifies the assigned targeting option being requested. |

#### `partners.targetingTypes.assignedTargetingOptions.list()`

Lists the targeting options assigned to a partner.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The ID of the partner. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_CHANNEL` |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListPartnerAssignedTargetingOptions` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`. |
| `params.filter` | `string` | No | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` Examples: * `AssignedTargetingOption` resource with ID 123456: `assignedTargetingOptionId="123456"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `partners.targetingTypes.assignedTargetingOptions.create()`

Assigns a targeting option to a partner. Returns the assigned targeting option if successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The ID of the partner. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.targetingTypes.assignedTargetingOptions.delete()`

Deletes an assigned targeting option from a partner.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.partnerId` | `string` | Yes | Required. The ID of the partner. |
| `params.targetingType` | `string` | Yes | Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` |
| `params.assignedTargetingOptionId` | `string` | Yes | Required. The ID of the assigned targeting option to delete. |

### `sdfdownloadtasks`

#### `sdfdownloadtasks.create()`

Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with `sdfdownloadtasks.operations.get`. Any errors can be found in the error.message. Note that error.details is expected to be empty.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `sdfdownloadtasks.operations`

#### `sdfdownloadtasks.operations.get()`

Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `targetingTypes`

### `targetingTypes.targetingOptions`

#### `targetingTypes.targetingOptions.get()`

Gets a single targeting option.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetingType` | `string` | Yes | Required. The type of targeting option to retrieve. Accepted values are: * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID` |
| `params.targetingOptionId` | `string` | Yes | Required. The ID of the of targeting option to retrieve. |
| `params.advertiserId` | `string` | No | Required. The Advertiser this request is being made in the context of. |

#### `targetingTypes.targetingOptions.list()`

Lists targeting options of a given type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetingType` | `string` | Yes | Required. The type of targeting option to be listed. Accepted values are: * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID` |
| `params.advertiserId` | `string` | No | Required. The Advertiser this request is being made in the context of. |
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListTargetingOptions` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `targetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingOptionId desc`. |
| `params.filter` | `string` | No | Allows filtering by targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `OR` logical operators. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `carrierAndIspDetails.type` * `geoRegionDetails.geoRegionType` * `targetingOptionId` Examples: * All `GEO REGION` targeting options that belong to sub type `GEO_REGION_TYPE_COUNTRY` or `GEO_REGION_TYPE_STATE`: `geoRegionDetails.geoRegionType="GEO_REGION_TYPE_COUNTRY" OR geoRegionDetails.geoRegionType="GEO_REGION_TYPE_STATE"` * All `CARRIER AND ISP` targeting options that belong to sub type `CARRIER_AND_ISP_TYPE_CARRIER`: `carrierAndIspDetails.type="CARRIER_AND_ISP_TYPE_CARRIER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `targetingTypes.targetingOptions.search()`

Searches for targeting options of a given type based on the given search terms.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.targetingType` | `string` | Yes | Required. The type of targeting options to retrieve. Accepted values are: * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_BUSINESS_CHAIN` |
| `params.resource` | `object` | Yes | The request body. |

### `users`

#### `users.get()`

Gets a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | Required. The ID of the user to fetch. |

#### `users.list()`

Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListUsers` method. If not specified, the first page of results will be returned. |
| `params.orderBy` | `string` | No | Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`. |
| `params.filter` | `string` | No | Allows filtering by user fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `displayName` and `email` fields must use the `HAS (:)` operator. * The `lastLoginTime` field must use either the `LESS THAN OR EQUAL TO (<=)` or `GREATER THAN OR EQUAL TO (>=)` operator. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `assignedUserRole.advertiserId` * `assignedUserRole.entityType`: This is synthetic field of `AssignedUserRole` used for filtering. Identifies the type of entity to which the user role is assigned. Valid values are `Partner` and `Advertiser`. * `assignedUserRole.parentPartnerId`: This is a synthetic field of `AssignedUserRole` used for filtering. Identifies the parent partner of the entity to which the user role is assigned. * `assignedUserRole.partnerId` * `assignedUserRole.userRole` * `displayName` * `email` * `lastLoginTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * The user with `displayName` containing "foo": `displayName:"foo"` * The user with `email` containing "bar": `email:"bar"` * All users with standard user roles: `assignedUserRole.userRole="STANDARD"` * All users with user roles for partner 123: `assignedUserRole.partnerId="123"` * All users with user roles for advertiser 123: `assignedUserRole.advertiserId="123"` * All users with partner level user roles: `entityType="PARTNER"` * All users with user roles for partner 123 and advertisers under partner 123: `parentPartnerId="123"` * All users that last logged in on or after 2023-01-01T00:00:00Z (format of ISO 8601): `lastLoginTime>="2023-01-01T00:00:00Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

#### `users.create()`

Creates a new user. Returns the newly created user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `users.patch()`

Updates an existing user. Returns the updated user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | Output only. The unique ID of the user. Assigned by the system. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.delete()`

Deletes a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | Required. The ID of the user to delete. |

#### `users.bulkEditAssignedUserRoles()`

Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | Required. The ID of the user to which the assigned user roles belong. |
| `params.resource` | `object` | Yes | The request body. |

### `media`

#### `media.upload()`

Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Name of the media that is being downloaded. See ReadRequest.resource_name. |
| `params.resource` | `object` | Yes | The request body. |

#### `media.download()`

Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Name of the media that is being downloaded. See ReadRequest.resource_name. |