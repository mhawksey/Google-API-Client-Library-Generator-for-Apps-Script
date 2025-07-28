
/**
 * Google Apps Script client library for the Display & Video 360 API
 * Documentation URL: https://developers.google.com/display-video/
 * @class
 */
class Displayvideo {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://displayvideo.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.advertisers = {};

    /**
     * Lists assigned targeting options of an advertiser across targeting types.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser the line item belongs to.
     * @param {string} params.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=) operator`. Supported fields: * `targetingType` Examples: * targetingType with value TARGETING_TYPE_CHANNEL `targetingType="TARGETING_TYPE_CHANNEL"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.
     * @param {integer} params.pageSize - Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is '5000'. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListAdvertiserAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.advertisers.listAssignedTargetingOptions = (params) => this._makeRequest('v2/advertisers/{+advertiserId}:listAssignedTargetingOptions', 'GET', params);

    /**
     * Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.editAssignedTargetingOptions = (params) => this._makeRequest('v2/advertisers/{+advertiserId}:editAssignedTargetingOptions', 'POST', params);

    /**
     * Gets an advertiser.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser to fetch.
     * @return {object} The API response object.
     */
    this.advertisers.get = (params) => this._makeRequest('v2/advertisers/{+advertiserId}', 'GET', params);

    /**
     * Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
     * @param {string} params.filter - Allows filtering by advertiser fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `advertiserId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All active advertisers under a partner: `entityStatus="ENTITY_STATUS_ACTIVE"` * All advertisers with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All advertisers with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `advertiserId` (default) * `displayName` * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdvertisers` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - Required. The ID of the partner that the fetched advertisers should all belong to. The system only supports listing advertisers for one partner at a time.
     * @return {object} The API response object.
     */
    this.advertisers.list = (params) => this._makeRequest('v2/advertisers', 'GET', params);

    /**
     * Creates a new advertiser. Returns the newly created advertiser if successful. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.create = (params) => this._makeRequest('v2/advertisers', 'POST', params);

    /**
     * Updates an existing advertiser. Returns the updated advertiser if successful.
     * @param {string} params.advertiserId - (Required) Output only. The unique ID of the advertiser. Assigned by the system.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.patch = (params) => this._makeRequest('v2/advertisers/{+advertiserId}', 'PATCH', params);

    /**
     * Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser we need to delete.
     * @return {object} The API response object.
     */
    this.advertisers.delete = (params) => this._makeRequest('v2/advertisers/{+advertiserId}', 'DELETE', params);

    /**
     * Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser to audit.
     * @param {string} params.readMask - Optional. The specific fields to return. If no mask is specified, all fields in the response proto will be filled. Valid values are: * usedLineItemsCount * usedInsertionOrdersCount * usedCampaignsCount * channelsCount * negativelyTargetedChannelsCount * negativeKeywordListsCount * adGroupCriteriaCount * campaignCriteriaCount
     * @return {object} The API response object.
     */
    this.advertisers.audit = (params) => this._makeRequest('v2/advertisers/{+advertiserId}:audit', 'GET', params);

    this.advertisers.lineItems = {};

    /**
     * Lists assigned targeting options for multiple line items across targeting types.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser the line items belongs to.
     * @param {string} params.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR` on the same field. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` * `inheritance` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` or `TARGETING_TYPE_CHANNEL`: `targetingType="TARGETING_TYPE_PROXIMITY_LOCATION_LIST" OR targetingType="TARGETING_TYPE_CHANNEL"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.lineItemIds - Required. The IDs of the line items to list assigned targeting options for.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `lineItemId` (default) * `assignedTargetingOption.targetingType` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.
     * @param {integer} params.pageSize - Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the `BulkListAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.advertisers.lineItems.bulkListAssignedTargetingOptions = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/lineItems:bulkListAssignedTargetingOptions', 'GET', params);

    /**
     * Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * lineItems.bulkUpdate * lineItems.patch * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser the line items belong to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.lineItems.bulkEditAssignedTargetingOptions = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/lineItems:bulkEditAssignedTargetingOptions', 'POST', params);

    /**
     * Gets a line item.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser this line item belongs to.
     * @param {string} params.lineItemId - (Required) Required. The ID of the line item to fetch.
     * @return {object} The API response object.
     */
    this.advertisers.lineItems.get = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/lineItems/{+lineItemId}', 'GET', params);

    /**
     * Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser to list line items for.
     * @param {string} params.filter - Allows filtering by line item fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `insertionOrderId` * `lineItemId` * `lineItemType` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All line items under an insertion order: `insertionOrderId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` and `LINE_ITEM_TYPE_DISPLAY_DEFAULT` line items under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND lineItemType="LINE_ITEM_TYPE_DISPLAY_DEFAULT"` * All line items with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All line items with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLineItems` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.advertisers.lineItems.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/lineItems', 'GET', params);

    /**
     * Creates a new line item. Returns the newly created line item if successful. YouTube & Partners line items cannot be created or updated using the API.
     * @param {string} params.advertiserId - (Required) Output only. The unique ID of the advertiser the line item belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.lineItems.create = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/lineItems', 'POST', params);

    /**
     * Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.
     * @param {string} params.advertiserId - (Required) Output only. The unique ID of the advertiser the line item belongs to.
     * @param {string} params.lineItemId - (Required) Output only. The unique ID of the line item. Assigned by the system.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.lineItems.patch = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/lineItems/{+lineItemId}', 'PATCH', params);

    /**
     * Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it. YouTube & Partners line items cannot be created or updated using the API.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser this line item belongs to.
     * @param {string} params.lineItemId - (Required) The ID of the line item to delete.
     * @return {object} The API response object.
     */
    this.advertisers.lineItems.delete = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/lineItems/{+lineItemId}', 'DELETE', params);

    /**
     * Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type YouTube & Partners line items cannot be created or updated using the API.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser this line item belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.lineItems.generateDefault = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/lineItems:generateDefault', 'POST', params);

    /**
     * Duplicates a line item. Returns the ID of the created line item if successful. YouTube & Partners line items cannot be created or updated using the API. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser this line item belongs to.
     * @param {string} params.lineItemId - (Required) Required. The ID of the line item to duplicate.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.lineItems.duplicate = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/lineItems/{+lineItemId}:duplicate', 'POST', params);

    /**
     * Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser this line item belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.lineItems.bulkUpdate = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/lineItems:bulkUpdate', 'POST', params);

    this.advertisers.lineItems.targetingTypes = {};

    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions = {};

    /**
     * Gets a single targeting option assigned to a line item.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser the line item belongs to.
     * @param {string} params.assignedTargetingOptionId - (Required) Required. An identifier unique to the targeting type in this line item that identifies the assigned targeting option being requested.
     * @param {string} params.lineItemId - (Required) Required. The ID of the line item the assigned targeting option belongs to.
     * @param {string} params.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_INVENTORY_MODE` * `TARGETING_TYPE_YOUTUBE_CHANNEL` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items) * `TARGETING_TYPE_YOUTUBE_VIDEO` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items)
     * @return {object} The API response object.
     */
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.get = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', params);

    /**
     * Lists the targeting options assigned to a line item.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser the line item belongs to.
     * @param {string} params.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` * `inheritance` Examples: * `AssignedTargetingOption` resources with ID 1 or 2: `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.lineItemId - (Required) Required. The ID of the line item to list assigned targeting options for.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLineItemAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {string} params.targetingType - (Required) Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_INVENTORY_MODE` * `TARGETING_TYPE_YOUTUBE_CHANNEL` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items) * `TARGETING_TYPE_YOUTUBE_VIDEO` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items)
     * @return {object} The API response object.
     */
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', params);

    /**
     * Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * lineItems.bulkEditAssignedTargetingOptions * lineItems.bulkUpdate * lineItems.patch * DeleteLineItemAssignedTargetingOption YouTube & Partners line items cannot be created or updated using the API.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser the line item belongs to.
     * @param {string} params.lineItemId - (Required) Required. The ID of the line item the assigned targeting option will belong to.
     * @param {string} params.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.create = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', params);

    /**
     * Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * lineItems.bulkEditAssignedTargetingOptions * lineItems.bulkUpdate * lineItems.patch * CreateLineItemAssignedTargetingOption YouTube & Partners line items cannot be created or updated using the API.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser the line item belongs to.
     * @param {string} params.assignedTargetingOptionId - (Required) Required. The ID of the assigned targeting option to delete.
     * @param {string} params.lineItemId - (Required) Required. The ID of the line item the assigned targeting option belongs to.
     * @param {string} params.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
     * @return {object} The API response object.
     */
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.delete = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', params);

    this.advertisers.targetingTypes = {};

    this.advertisers.targetingTypes.assignedTargetingOptions = {};

    /**
     * Gets a single targeting option assigned to an advertiser.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser.
     * @param {string} params.assignedTargetingOptionId - (Required) Required. An identifier unique to the targeting type in this advertiser that identifies the assigned targeting option being requested.
     * @param {string} params.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_YOUTUBE_VIDEO` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_CONTENT_THEME_EXCLUSION`
     * @return {object} The API response object.
     */
    this.advertisers.targetingTypes.assignedTargetingOptions.get = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', params);

    /**
     * Lists the targeting options assigned to an advertiser.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser.
     * @param {string} params.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` Examples: * `AssignedTargetingOption` with ID 123456: `assignedTargetingOptionId="123456"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdvertiserAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {string} params.targetingType - (Required) Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_YOUTUBE_VIDEO` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_CONTENT_THEME_EXCLUSION`
     * @return {object} The API response object.
     */
    this.advertisers.targetingTypes.assignedTargetingOptions.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', params);

    /**
     * Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser.
     * @param {string} params.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_INVENTORY_MODE`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.targetingTypes.assignedTargetingOptions.create = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', params);

    /**
     * Deletes an assigned targeting option from an advertiser.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser.
     * @param {string} params.assignedTargetingOptionId - (Required) Required. The ID of the assigned targeting option to delete.
     * @param {string} params.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_INVENTORY_MODE`
     * @return {object} The API response object.
     */
    this.advertisers.targetingTypes.assignedTargetingOptions.delete = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', params);

    this.advertisers.assets = {};

    /**
     * Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser this asset belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.assets.upload = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/assets', 'POST', params);

    this.advertisers.campaigns = {};

    /**
     * Gets a campaign.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser this campaign belongs to.
     * @param {string} params.campaignId - (Required) Required. The ID of the campaign to fetch.
     * @return {object} The API response object.
     */
    this.advertisers.campaigns.get = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/campaigns/{+campaignId}', 'GET', params);

    /**
     * Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser to list campaigns for.
     * @param {string} params.filter - Allows filtering by campaign fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` campaigns under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED")` * All campaigns with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All campaigns with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCampaigns` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.advertisers.campaigns.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/campaigns', 'GET', params);

    /**
     * Creates a new campaign. Returns the newly created campaign if successful.
     * @param {string} params.advertiserId - (Required) Output only. The unique ID of the advertiser the campaign belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.campaigns.create = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/campaigns', 'POST', params);

    /**
     * Updates an existing campaign. Returns the updated campaign if successful.
     * @param {string} params.advertiserId - (Required) Output only. The unique ID of the advertiser the campaign belongs to.
     * @param {string} params.campaignId - (Required) Output only. The unique ID of the campaign. Assigned by the system.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.campaigns.patch = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/campaigns/{+campaignId}', 'PATCH', params);

    /**
     * Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser this campaign belongs to.
     * @param {string} params.campaignId - (Required) The ID of the campaign we need to delete.
     * @return {object} The API response object.
     */
    this.advertisers.campaigns.delete = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/campaigns/{+campaignId}', 'DELETE', params);

    this.advertisers.channels = {};

    /**
     * Gets a channel for a partner or advertiser.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser that owns the fetched channel.
     * @param {string} params.channelId - (Required) Required. The ID of the channel to fetch.
     * @param {string} params.partnerId - The ID of the partner that owns the fetched channel.
     * @return {object} The API response object.
     */
    this.advertisers.channels.get = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/channels/{+channelId}', 'GET', params);

    /**
     * Lists channels for a partner or advertiser.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser that owns the channels.
     * @param {string} params.filter - Allows filtering by channel fields. Supported syntax: * Filter expressions for channel can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All channels for which the display name contains "google": `displayName : "google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) * `channelId` The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListChannels` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - The ID of the partner that owns the channels.
     * @return {object} The API response object.
     */
    this.advertisers.channels.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/channels', 'GET', params);

    /**
     * Creates a new channel. Returns the newly created channel if successful.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser that owns the created channel.
     * @param {string} params.partnerId - The ID of the partner that owns the created channel.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.channels.create = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/channels', 'POST', params);

    /**
     * Updates a channel. Returns the updated channel if successful.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser that owns the created channel.
     * @param {string} params.channelId - (Required) Output only. The unique ID of the channel. Assigned by the system.
     * @param {string} params.partnerId - The ID of the partner that owns the created channel.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.channels.patch = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/channels/{channelId}', 'PATCH', params);

    this.advertisers.channels.sites = {};

    /**
     * Lists sites in a channel.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser that owns the parent channel.
     * @param {string} params.channelId - (Required) Required. The ID of the parent channel to which the requested sites belong.
     * @param {string} params.filter - Allows filtering by site fields. Supported syntax: * Filter expressions for site retrieval can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `urlOrAppId` Examples: * All sites for which the URL or app ID contains "google": `urlOrAppId : "google"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `urlOrAppId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `urlOrAppId desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `10000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListSites` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - The ID of the partner that owns the parent channel.
     * @return {object} The API response object.
     */
    this.advertisers.channels.sites.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/channels/{+channelId}/sites', 'GET', params);

    /**
     * Creates a site in a channel.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser that owns the parent channel.
     * @param {string} params.channelId - (Required) Required. The ID of the parent channel in which the site will be created.
     * @param {string} params.partnerId - The ID of the partner that owns the parent channel.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.channels.sites.create = (params) => this._makeRequest('v2/advertisers/{advertiserId}/channels/{+channelId}/sites', 'POST', params);

    /**
     * Deletes a site from a channel.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser that owns the parent channel.
     * @param {string} params.channelId - (Required) Required. The ID of the parent channel to which the site belongs.
     * @param {string} params.partnerId - The ID of the partner that owns the parent channel.
     * @param {string} params.urlOrAppId - (Required) Required. The URL or app ID of the site to delete.
     * @return {object} The API response object.
     */
    this.advertisers.channels.sites.delete = (params) => this._makeRequest('v2/advertisers/{advertiserId}/channels/{+channelId}/sites/{+urlOrAppId}', 'DELETE', params);

    /**
     * Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser that owns the parent channel.
     * @param {string} params.channelId - (Required) Required. The ID of the parent channel to which the sites belong.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.channels.sites.bulkEdit = (params) => this._makeRequest('v2/advertisers/{advertiserId}/channels/{+channelId}/sites:bulkEdit', 'POST', params);

    /**
     * Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser that owns the parent channel.
     * @param {string} params.channelId - (Required) Required. The ID of the parent channel whose sites will be replaced.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.channels.sites.replace = (params) => this._makeRequest('v2/advertisers/{advertiserId}/channels/{+channelId}/sites:replace', 'POST', params);

    this.advertisers.creatives = {};

    /**
     * Gets a creative.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser this creative belongs to.
     * @param {string} params.creativeId - (Required) Required. The ID of the creative to fetch.
     * @return {object} The API response object.
     */
    this.advertisers.creatives.get = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/creatives/{+creativeId}', 'GET', params);

    /**
     * Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser to list creatives for.
     * @param {string} params.filter - Allows filtering by creative fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `lineItemIds` field must use the `HAS (:)` operator. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. * For `entityStatus`, `minDuration`, `maxDuration`, `updateTime`, and `dynamic` fields, there may be at most one restriction. Supported Fields: * `approvalStatus` * `creativeId` * `creativeType` * `dimensions` (input in the form of `{width}x{height}`) * `dynamic` * `entityStatus` * `exchangeReviewStatus` (input in the form of `{exchange}-{reviewStatus}`) * `lineItemIds` * `maxDuration` (input in the form of `{duration}s`. Only seconds are supported) * `minDuration` (input in the form of `{duration}s`. Only seconds are supported) * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Notes: * For `updateTime`, a creative resource's field value reflects the last time that a creative has been updated, which includes updates made by the system (e.g. creative review updates). Examples: * All native creatives: `creativeType="CREATIVE_TYPE_NATIVE"` * All active creatives with 300x400 or 50x100 dimensions: `entityStatus="ENTITY_STATUS_ACTIVE" AND (dimensions="300x400" OR dimensions="50x100")` * All dynamic creatives that are approved by AdX or AppNexus, with a minimum duration of 5 seconds and 200ms: `dynamic="true" AND minDuration="5.2s" AND (exchangeReviewStatus="EXCHANGE_GOOGLE_AD_MANAGER-REVIEW_STATUS_APPROVED" OR exchangeReviewStatus="EXCHANGE_APPNEXUS-REVIEW_STATUS_APPROVED")` * All video creatives that are associated with line item ID 1 or 2: `creativeType="CREATIVE_TYPE_VIDEO" AND (lineItemIds:1 OR lineItemIds:2)` * Find creatives by multiple creative IDs: `creativeId=1 OR creativeId=2` * All creatives with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `creativeId` (default) * `createTime` * `mediaDuration` * `dimensions` (sorts by width first, then by height) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `createTime desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCreatives` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.advertisers.creatives.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/creatives', 'GET', params);

    /**
     * Creates a new creative. Returns the newly created creative if successful. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.
     * @param {string} params.advertiserId - (Required) Output only. The unique ID of the advertiser the creative belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.creatives.create = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/creatives', 'POST', params);

    /**
     * Updates an existing creative. Returns the updated creative if successful. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.
     * @param {string} params.advertiserId - (Required) Output only. The unique ID of the advertiser the creative belongs to.
     * @param {string} params.creativeId - (Required) Output only. The unique ID of the creative. Assigned by the system.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.creatives.patch = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/creatives/{+creativeId}', 'PATCH', params);

    /**
     * Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser this creative belongs to.
     * @param {string} params.creativeId - (Required) The ID of the creative to be deleted.
     * @return {object} The API response object.
     */
    this.advertisers.creatives.delete = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/creatives/{+creativeId}', 'DELETE', params);

    this.advertisers.insertionOrders = {};

    /**
     * Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser this insertion order belongs to.
     * @param {string} params.insertionOrderId - (Required) Required. The ID of the insertion order to fetch.
     * @return {object} The API response object.
     */
    this.advertisers.insertionOrders.get = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}', 'GET', params);

    /**
     * Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser to list insertion orders for.
     * @param {string} params.filter - Allows filtering by insertion order fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All insertion orders under a campaign: `campaignId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` insertion orders under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED")` * All insertion orders with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All insertion orders with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * "displayName" (default) * "entityStatus" * "updateTime" The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInsertionOrders` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.advertisers.insertionOrders.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/insertionOrders', 'GET', params);

    /**
     * Creates a new insertion order. Returns the newly created insertion order if successful.
     * @param {string} params.advertiserId - (Required) Output only. The unique ID of the advertiser the insertion order belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.insertionOrders.create = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/insertionOrders', 'POST', params);

    /**
     * Updates an existing insertion order. Returns the updated insertion order if successful.
     * @param {string} params.advertiserId - (Required) Output only. The unique ID of the advertiser the insertion order belongs to.
     * @param {string} params.insertionOrderId - (Required) Output only. The unique ID of the insertion order. Assigned by the system.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.insertionOrders.patch = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}', 'PATCH', params);

    /**
     * Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
     * @param {string} params.advertiserId - (Required) The ID of the advertiser this insertion order belongs to.
     * @param {string} params.insertionOrderId - (Required) The ID of the insertion order to delete.
     * @return {object} The API response object.
     */
    this.advertisers.insertionOrders.delete = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}', 'DELETE', params);

    this.advertisers.invoices = {};

    /**
     * Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser to list invoices for.
     * @param {string} params.issueMonth - The month to list the invoices for. If not set, the request will retrieve invoices for the previous month. Must be in the format YYYYMM.
     * @param {string} params.loiSapinInvoiceType - Select type of invoice to retrieve for Loi Sapin advertisers. Only applicable to Loi Sapin advertisers. Will be ignored otherwise.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInvoices` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.advertisers.invoices.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/invoices', 'GET', params);

    /**
     * Retrieves the invoice currency used by an advertiser in a given month.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser to lookup currency for.
     * @param {string} params.invoiceMonth - Month for which the currency is needed. If not set, the request will return existing currency settings for the advertiser. Must be in the format YYYYMM.
     * @return {object} The API response object.
     */
    this.advertisers.invoices.lookupInvoiceCurrency = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/invoices:lookupInvoiceCurrency', 'GET', params);

    this.advertisers.locationLists = {};

    /**
     * Gets a location list.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the fetched location list belongs.
     * @param {string} params.locationListId - (Required) Required. The ID of the location list to fetch.
     * @return {object} The API response object.
     */
    this.advertisers.locationLists.get = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/locationLists/{+locationListId}', 'GET', params);

    /**
     * Lists location lists based on a given advertiser id.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the fetched location lists belong.
     * @param {string} params.filter - Allows filtering by location list fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `locationType` Examples: * All regional location list: `locationType="TARGETING_LOCATION_TYPE_REGIONAL"` * All proximity location list: `locationType="TARGETING_LOCATION_TYPE_PROXIMITY"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `locationListId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. Defaults to `100` if not set. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLocationLists` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.advertisers.locationLists.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/locationLists', 'GET', params);

    /**
     * Creates a new location list. Returns the newly created location list if successful.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the location list belongs.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.locationLists.create = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/locationLists', 'POST', params);

    /**
     * Updates a location list. Returns the updated location list if successful.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the location lists belongs.
     * @param {string} params.locationListId - (Required) Output only. The unique ID of the location list. Assigned by the system.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.locationLists.patch = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/locationLists/{locationListId}', 'PATCH', params);

    this.advertisers.locationLists.assignedLocations = {};

    /**
     * Lists locations assigned to a location list.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the location list belongs.
     * @param {string} params.filter - Allows filtering by location list assignment fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedLocationId` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.locationListId - (Required) Required. The ID of the location list to which these assignments are assigned.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `assignedLocationId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `assignedLocationId desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAssignedLocations` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.advertisers.locationLists.assignedLocations.list = (params) => this._makeRequest('v2/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations', 'GET', params);

    /**
     * Creates an assignment between a location and a location list.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the location list belongs.
     * @param {string} params.locationListId - (Required) Required. The ID of the location list for which the assignment will be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.locationLists.assignedLocations.create = (params) => this._makeRequest('v2/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations', 'POST', params);

    /**
     * Deletes the assignment between a location and a location list.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the location list belongs.
     * @param {string} params.assignedLocationId - (Required) Required. The ID of the assigned location to delete.
     * @param {string} params.locationListId - (Required) Required. The ID of the location list to which this assignment is assigned.
     * @return {object} The API response object.
     */
    this.advertisers.locationLists.assignedLocations.delete = (params) => this._makeRequest('v2/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations/{+assignedLocationId}', 'DELETE', params);

    /**
     * Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in deletedAssignedLocations and then create the assigned locations provided in createdAssignedLocations.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the location list belongs.
     * @param {string} params.locationListId - (Required) Required. The ID of the location list to which these assignments are assigned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.locationLists.assignedLocations.bulkEdit = (params) => this._makeRequest('v2/advertisers/{advertiserId}/locationLists/{+locationListId}/assignedLocations:bulkEdit', 'POST', params);

    this.advertisers.manualTriggers = {};

    /**
     * Gets a manual trigger. **Warning:** Line Items using manual triggers no longer serve in Display & Video 360. This method will sunset on August 1, 2023. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser this manual trigger belongs to.
     * @param {string} params.triggerId - (Required) Required. The ID of the manual trigger to fetch.
     * @return {object} The API response object.
     */
    this.advertisers.manualTriggers.get = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/manualTriggers/{+triggerId}', 'GET', params);

    /**
     * Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required. **Warning:** Line Items using manual triggers no longer serve in Display & Video 360. This method will sunset on August 1, 2023. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser that the fetched manual triggers belong to.
     * @param {string} params.filter - Allows filtering by manual trigger fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `displayName` * `state` Examples: * All active manual triggers under an advertiser: `state="ACTIVE"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) * `state` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListManualTriggers` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.advertisers.manualTriggers.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/manualTriggers', 'GET', params);

    /**
     * Creates a new manual trigger. Returns the newly created manual trigger if successful. **Warning:** Line Items using manual triggers no longer serve in Display & Video 360. This method will sunset on August 1, 2023. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
     * @param {string} params.advertiserId - (Required) Required. Immutable. The unique ID of the advertiser that the manual trigger belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.manualTriggers.create = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/manualTriggers', 'POST', params);

    /**
     * Updates a manual trigger. Returns the updated manual trigger if successful. **Warning:** Line Items using manual triggers no longer serve in Display & Video 360. This method will sunset on August 1, 2023. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
     * @param {string} params.advertiserId - (Required) Required. Immutable. The unique ID of the advertiser that the manual trigger belongs to.
     * @param {string} params.triggerId - (Required) Output only. The unique ID of the manual trigger.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.manualTriggers.patch = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/manualTriggers/{+triggerId}', 'PATCH', params);

    /**
     * Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned. **Warning:** Line Items using manual triggers no longer serve in Display & Video 360. This method will sunset on August 1, 2023. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser that the manual trigger belongs.
     * @param {string} params.triggerId - (Required) Required. The ID of the manual trigger to activate.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.manualTriggers.activate = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/manualTriggers/{+triggerId}:activate', 'POST', params);

    /**
     * Deactivates a manual trigger. **Warning:** Line Items using manual triggers no longer serve in Display & Video 360. This method will sunset on August 1, 2023. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser that the manual trigger belongs.
     * @param {string} params.triggerId - (Required) Required. The ID of the manual trigger to deactivate.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.manualTriggers.deactivate = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/manualTriggers/{+triggerId}:deactivate', 'POST', params);

    this.advertisers.negativeKeywordLists = {};

    /**
     * Gets a negative keyword list given an advertiser ID and a negative keyword list ID.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the fetched negative keyword list belongs.
     * @param {string} params.negativeKeywordListId - (Required) Required. The ID of the negative keyword list to fetch.
     * @return {object} The API response object.
     */
    this.advertisers.negativeKeywordLists.get = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/negativeKeywordLists/{+negativeKeywordListId}', 'GET', params);

    /**
     * Lists negative keyword lists based on a given advertiser id.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the fetched negative keyword lists belong.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. Defaults to `100` if not set. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListNegativeKeywordLists` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.advertisers.negativeKeywordLists.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/negativeKeywordLists', 'GET', params);

    /**
     * Creates a new negative keyword list. Returns the newly created negative keyword list if successful.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the negative keyword list will belong.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.negativeKeywordLists.create = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/negativeKeywordLists', 'POST', params);

    /**
     * Updates a negative keyword list. Returns the updated negative keyword list if successful.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the negative keyword list belongs.
     * @param {string} params.negativeKeywordListId - (Required) Output only. The unique ID of the negative keyword list. Assigned by the system.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.negativeKeywordLists.patch = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/negativeKeywordLists/{negativeKeywordListId}', 'PATCH', params);

    /**
     * Deletes a negative keyword list given an advertiser ID and a negative keyword list ID.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the negative keyword list belongs.
     * @param {string} params.negativeKeywordListId - (Required) Required. The ID of the negative keyword list to delete.
     * @return {object} The API response object.
     */
    this.advertisers.negativeKeywordLists.delete = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/negativeKeywordLists/{+negativeKeywordListId}', 'DELETE', params);

    this.advertisers.negativeKeywordLists.negativeKeywords = {};

    /**
     * Lists negative keywords in a negative keyword list.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
     * @param {string} params.filter - Allows filtering by negative keyword fields. Supported syntax: * Filter expressions for negative keywords can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `keywordValue` Examples: * All negative keywords for which the keyword value contains "google": `keywordValue : "google"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.negativeKeywordListId - (Required) Required. The ID of the parent negative keyword list to which the requested negative keywords belong.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `keywordValue` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `keywordValue desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `1000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListNegativeKeywords` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.advertisers.negativeKeywordLists.negativeKeywords.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords', 'GET', params);

    /**
     * Creates a negative keyword in a negative keyword list.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
     * @param {string} params.negativeKeywordListId - (Required) Required. The ID of the parent negative keyword list in which the negative keyword will be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.negativeKeywordLists.negativeKeywords.create = (params) => this._makeRequest('v2/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords', 'POST', params);

    /**
     * Deletes a negative keyword from a negative keyword list.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
     * @param {string} params.keywordValue - (Required) Required. The keyword value of the negative keyword to delete.
     * @param {string} params.negativeKeywordListId - (Required) Required. The ID of the parent negative keyword list to which the negative keyword belongs.
     * @return {object} The API response object.
     */
    this.advertisers.negativeKeywordLists.negativeKeywords.delete = (params) => this._makeRequest('v2/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords/{+keywordValue}', 'DELETE', params);

    /**
     * Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
     * @param {string} params.negativeKeywordListId - (Required) Required. The ID of the parent negative keyword list to which the negative keywords belong.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.negativeKeywordLists.negativeKeywords.bulkEdit = (params) => this._makeRequest('v2/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords:bulkEdit', 'POST', params);

    /**
     * Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.
     * @param {string} params.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
     * @param {string} params.negativeKeywordListId - (Required) Required. The ID of the parent negative keyword list to which the negative keywords belong.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.advertisers.negativeKeywordLists.negativeKeywords.replace = (params) => this._makeRequest('v2/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords:replace', 'POST', params);

    this.advertisers.youtubeAdGroupAds = {};

    /**
     * Gets a YouTube ad group ad.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser this ad group ad belongs to.
     * @param {string} params.youtubeAdGroupAdId - (Required) Required. The ID of the ad group ad to fetch.
     * @return {object} The API response object.
     */
    this.advertisers.youtubeAdGroupAds.get = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/youtubeAdGroupAds/{+youtubeAdGroupAdId}', 'GET', params);

    /**
     * Lists YouTube ad group ads.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser the ad groups belongs to.
     * @param {string} params.filter - Allows filtering by custom YouTube ad group ad fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` and `OR`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `adGroupId` * `displayName` * `entityStatus` * `adGroupAdId` Examples: * All ad group ads under an ad group: `adGroupId="1234"` * All ad group ads under an ad group with an entityStatus of `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED`: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND adGroupId="12345"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListYoutubeAdGroupAds` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.advertisers.youtubeAdGroupAds.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/youtubeAdGroupAds', 'GET', params);

    this.advertisers.youtubeAdGroups = {};

    /**
     * Lists assigned targeting options for multiple YouTube ad groups across targeting types. Inherited assigned targeting options are not included.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser the line items belongs to.
     * @param {string} params.filter - Optional. Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_YOUTUBE_VIDEO` or `TARGETING_TYPE_YOUTUBE_CHANNEL`: `targetingType="TARGETING_TYPE_YOUTUBE_VIDEO" OR targetingType="TARGETING_TYPE_YOUTUBE_CHANNEL"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Optional. Field by which to sort the list. Acceptable values are: * `adGroupId` (default) * `assignedTargetingOption.targetingType` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.
     * @param {integer} params.pageSize - Optional. Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - Optional. A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the `BulkListAdGroupAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {string} params.youtubeAdGroupIds - Required. The IDs of the youtube ad groups to list assigned targeting options for.
     * @return {object} The API response object.
     */
    this.advertisers.youtubeAdGroups.bulkListAdGroupAssignedTargetingOptions = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions', 'GET', params);

    /**
     * Gets a YouTube ad group.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser this ad group belongs to.
     * @param {string} params.youtubeAdGroupId - (Required) Required. The ID of the ad group to fetch.
     * @return {object} The API response object.
     */
    this.advertisers.youtubeAdGroups.get = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/youtubeAdGroups/{+youtubeAdGroupId}', 'GET', params);

    /**
     * Lists YouTube ad groups.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser the ad groups belongs to.
     * @param {string} params.filter - Allows filtering by custom YouTube ad group fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` and `OR`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported properties: * `adGroupId` * `displayName` * `entityStatus` * `lineItemId` * `adGroupFormat` Examples: * All ad groups under an line item: `lineItemId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` `YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_IN_STREAM` ad groups under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND adGroupFormat="YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_IN_STREAM"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListYoutubeAdGroups` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.advertisers.youtubeAdGroups.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/youtubeAdGroups', 'GET', params);

    this.advertisers.youtubeAdGroups.targetingTypes = {};

    this.advertisers.youtubeAdGroups.targetingTypes.assignedTargetingOptions = {};

    /**
     * Gets a single targeting option assigned to a YouTube ad group. Inherited assigned targeting options are not included.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser the ad group belongs to.
     * @param {string} params.assignedTargetingOptionId - (Required) Required. An identifier unique to the targeting type in this line item that identifies the assigned targeting option being requested.
     * @param {string} params.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SESSION_POSITION` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_YOUTUBE_VIDEO`
     * @param {string} params.youtubeAdGroupId - (Required) Required. The ID of the ad group the assigned targeting option belongs to.
     * @return {object} The API response object.
     */
    this.advertisers.youtubeAdGroups.targetingTypes.assignedTargetingOptions.get = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/youtubeAdGroups/{+youtubeAdGroupId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', params);

    /**
     * Lists the targeting options assigned to a YouTube ad group. Inherited assigned targeting options are not included.
     * @param {string} params.advertiserId - (Required) Required. The ID of the advertiser the ad group belongs to.
     * @param {string} params.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` Examples: * `AssignedTargetingOption` resources with ID 1 or 2: `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListYoutubeAdGroupAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {string} params.targetingType - (Required) Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SESSION_POSITION` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_YOUTUBE_VIDEO`
     * @param {string} params.youtubeAdGroupId - (Required) Required. The ID of the ad group to list assigned targeting options for.
     * @return {object} The API response object.
     */
    this.advertisers.youtubeAdGroups.targetingTypes.assignedTargetingOptions.list = (params) => this._makeRequest('v2/advertisers/{+advertiserId}/youtubeAdGroups/{+youtubeAdGroupId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', params);

    this.combinedAudiences = {};

    /**
     * Gets a combined audience.
     * @param {string} params.advertiserId - The ID of the advertiser that has access to the fetched combined audience.
     * @param {string} params.combinedAudienceId - (Required) Required. The ID of the combined audience to fetch.
     * @param {string} params.partnerId - The ID of the partner that has access to the fetched combined audience.
     * @return {object} The API response object.
     */
    this.combinedAudiences.get = (params) => this._makeRequest('v2/combinedAudiences/{+combinedAudienceId}', 'GET', params);

    /**
     * Lists combined audiences. The order is defined by the order_by parameter.
     * @param {string} params.advertiserId - The ID of the advertiser that has access to the fetched combined audiences.
     * @param {string} params.filter - Allows filtering by combined audience fields. Supported syntax: * Filter expressions for combined audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All combined audiences for which the display name contains "Google": `displayName : "Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `combinedAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCombinedAudiences` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - The ID of the partner that has access to the fetched combined audiences.
     * @return {object} The API response object.
     */
    this.combinedAudiences.list = (params) => this._makeRequest('v2/combinedAudiences', 'GET', params);

    this.customBiddingAlgorithms = {};

    /**
     * Gets a custom bidding algorithm.
     * @param {string} params.advertiserId - The ID of the DV360 partner that has access to the custom bidding algorithm.
     * @param {string} params.customBiddingAlgorithmId - (Required) Required. The ID of the custom bidding algorithm to fetch.
     * @param {string} params.partnerId - The ID of the DV360 partner that has access to the custom bidding algorithm.
     * @return {object} The API response object.
     */
    this.customBiddingAlgorithms.get = (params) => this._makeRequest('v2/customBiddingAlgorithms/{+customBiddingAlgorithmId}', 'GET', params);

    /**
     * Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
     * @param {string} params.advertiserId - The ID of the DV360 advertiser that has access to the custom bidding algorithm.
     * @param {string} params.filter - Allows filtering by custom bidding algorithm fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `customBiddingAlgorithmType` field must use the `EQUALS (=)` operator. * The `displayName` field must use the `HAS (:)` operator. Supported fields: * `customBiddingAlgorithmType` * `displayName` Examples: * All custom bidding algorithms for which the display name contains "politics": `displayName:"politics"`. * All custom bidding algorithms for which the type is "SCRIPT_BASED": `customBiddingAlgorithmType=SCRIPT_BASED` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingAlgorithms` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - The ID of the DV360 partner that has access to the custom bidding algorithm.
     * @return {object} The API response object.
     */
    this.customBiddingAlgorithms.list = (params) => this._makeRequest('v2/customBiddingAlgorithms', 'GET', params);

    /**
     * Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customBiddingAlgorithms.create = (params) => this._makeRequest('v2/customBiddingAlgorithms', 'POST', params);

    /**
     * Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful. Requests updating a custom bidding algorithm assigned to a line item will return an error.
     * @param {string} params.customBiddingAlgorithmId - (Required) Output only. The unique ID of the custom bidding algorithm. Assigned by the system.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customBiddingAlgorithms.patch = (params) => this._makeRequest('v2/customBiddingAlgorithms/{+customBiddingAlgorithmId}', 'PATCH', params);

    /**
     * Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the parent custom bidding algorithm.
     * @param {string} params.customBiddingAlgorithmId - (Required) Required. The ID of the custom bidding algorithm owns the script.
     * @param {string} params.partnerId - The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.
     * @return {object} The API response object.
     */
    this.customBiddingAlgorithms.uploadScript = (params) => this._makeRequest('v2/customBiddingAlgorithms/{+customBiddingAlgorithmId}:uploadScript', 'GET', params);

    this.customBiddingAlgorithms.scripts = {};

    /**
     * Creates a new custom bidding script. Returns the newly created script if successful. Requests creating a custom bidding script under an algorithm assigned to a line item will return an error.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the parent custom bidding algorithm.
     * @param {string} params.customBiddingAlgorithmId - (Required) Required. The ID of the custom bidding algorithm that owns the script.
     * @param {string} params.partnerId - The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customBiddingAlgorithms.scripts.create = (params) => this._makeRequest('v2/customBiddingAlgorithms/{+customBiddingAlgorithmId}/scripts', 'POST', params);

    /**
     * Gets a custom bidding script.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the parent custom bidding algorithm.
     * @param {string} params.customBiddingAlgorithmId - (Required) Required. The ID of the custom bidding algorithm owns the script.
     * @param {string} params.customBiddingScriptId - (Required) Required. The ID of the custom bidding script to fetch.
     * @param {string} params.partnerId - The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.
     * @return {object} The API response object.
     */
    this.customBiddingAlgorithms.scripts.get = (params) => this._makeRequest('v2/customBiddingAlgorithms/{+customBiddingAlgorithmId}/scripts/{+customBiddingScriptId}', 'GET', params);

    /**
     * Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the parent custom bidding algorithm.
     * @param {string} params.customBiddingAlgorithmId - (Required) Required. The ID of the custom bidding algorithm owns the script.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `createTime desc` (default) The default sorting order is descending. To specify ascending order for a field, the suffix "desc" should be removed. Example: `createTime`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingScripts` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.
     * @return {object} The API response object.
     */
    this.customBiddingAlgorithms.scripts.list = (params) => this._makeRequest('v2/customBiddingAlgorithms/{+customBiddingAlgorithmId}/scripts', 'GET', params);

    this.customLists = {};

    /**
     * Gets a custom list.
     * @param {string} params.advertiserId - The ID of the DV360 advertiser that has access to the fetched custom lists.
     * @param {string} params.customListId - (Required) Required. The ID of the custom list to fetch.
     * @return {object} The API response object.
     */
    this.customLists.get = (params) => this._makeRequest('v2/customLists/{+customListId}', 'GET', params);

    /**
     * Lists custom lists. The order is defined by the order_by parameter.
     * @param {string} params.advertiserId - The ID of the DV360 advertiser that has access to the fetched custom lists.
     * @param {string} params.filter - Allows filtering by custom list fields. Supported syntax: * Filter expressions for custom lists can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All custom lists for which the display name contains "Google": `displayName:"Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `customListId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomLists` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.customLists.list = (params) => this._makeRequest('v2/customLists', 'GET', params);

    this.floodlightGroups = {};

    /**
     * Gets a Floodlight group.
     * @param {string} params.floodlightGroupId - (Required) Required. The ID of the Floodlight group to fetch.
     * @param {string} params.partnerId - Required. The partner context by which the Floodlight group is being accessed.
     * @return {object} The API response object.
     */
    this.floodlightGroups.get = (params) => this._makeRequest('v2/floodlightGroups/{+floodlightGroupId}', 'GET', params);

    /**
     * Updates an existing Floodlight group. Returns the updated Floodlight group if successful.
     * @param {string} params.floodlightGroupId - (Required) Output only. The unique ID of the Floodlight group. Assigned by the system.
     * @param {string} params.partnerId - Required. The partner context by which the Floodlight group is being accessed.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.floodlightGroups.patch = (params) => this._makeRequest('v2/floodlightGroups/{floodlightGroupId}', 'PATCH', params);

    this.floodlightGroups.floodlightActivities = {};

    /**
     * Gets a Floodlight activity.
     * @param {string} params.floodlightActivityId - (Required) Required. The ID of the Floodlight activity to fetch.
     * @param {string} params.floodlightGroupId - (Required) Required. The ID of the parent Floodlight group to which the requested Floodlight activity belongs.
     * @param {string} params.partnerId - Required. The ID of the partner through which the Floodlight activity is being accessed.
     * @return {object} The API response object.
     */
    this.floodlightGroups.floodlightActivities.get = (params) => this._makeRequest('v2/floodlightGroups/{+floodlightGroupId}/floodlightActivities/{+floodlightActivityId}', 'GET', params);

    /**
     * Lists Floodlight activities in a Floodlight group.
     * @param {string} params.floodlightGroupId - (Required) Required. The ID of the parent Floodlight group to which the requested Floodlight activities belong.
     * @param {string} params.orderBy - Optional. Field by which to sort the list. Acceptable values are: * `displayName` (default) * `floodlightActivityId` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} params.pageSize - Optional. Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListFloodlightActivities` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - Required. The ID of the partner through which the Floodlight activities are being accessed.
     * @return {object} The API response object.
     */
    this.floodlightGroups.floodlightActivities.list = (params) => this._makeRequest('v2/floodlightGroups/{+floodlightGroupId}/floodlightActivities', 'GET', params);

    this.googleAudiences = {};

    /**
     * Gets a Google audience.
     * @param {string} params.advertiserId - The ID of the advertiser that has access to the fetched Google audience.
     * @param {string} params.googleAudienceId - (Required) Required. The ID of the Google audience to fetch.
     * @param {string} params.partnerId - The ID of the partner that has access to the fetched Google audience.
     * @return {object} The API response object.
     */
    this.googleAudiences.get = (params) => this._makeRequest('v2/googleAudiences/{+googleAudienceId}', 'GET', params);

    /**
     * Lists Google audiences. The order is defined by the order_by parameter.
     * @param {string} params.advertiserId - The ID of the advertiser that has access to the fetched Google audiences.
     * @param {string} params.filter - Allows filtering by Google audience fields. Supported syntax: * Filter expressions for Google audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All Google audiences for which the display name contains "Google": `displayName:"Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `googleAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListGoogleAudiences` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - The ID of the partner that has access to the fetched Google audiences.
     * @return {object} The API response object.
     */
    this.googleAudiences.list = (params) => this._makeRequest('v2/googleAudiences', 'GET', params);

    this.guaranteedOrders = {};

    /**
     * Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
     * @param {string} params.advertiserId - The ID of the advertiser that the request is being made within.
     * @param {string} params.partnerId - The ID of the partner that the request is being made within.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.guaranteedOrders.create = (params) => this._makeRequest('v2/guaranteedOrders', 'POST', params);

    /**
     * Gets a guaranteed order.
     * @param {string} params.advertiserId - The ID of the advertiser that has access to the guaranteed order.
     * @param {string} params.guaranteedOrderId - (Required) Required. The ID of the guaranteed order to fetch. The ID is of the format `{exchange}-{legacy_guaranteed_order_id}`
     * @param {string} params.partnerId - The ID of the partner that has access to the guaranteed order.
     * @return {object} The API response object.
     */
    this.guaranteedOrders.get = (params) => this._makeRequest('v2/guaranteedOrders/{+guaranteedOrderId}', 'GET', params);

    /**
     * Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     * @param {string} params.advertiserId - The ID of the advertiser that has access to the guaranteed order.
     * @param {string} params.filter - Allows filtering by guaranteed order fields. * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `guaranteed_order_id` * `exchange` * `display_name` * `status.entityStatus` Examples: * All active guaranteed orders: `status.entityStatus="ENTITY_STATUS_ACTIVE"` * Guaranteed orders belonging to Google Ad Manager or Rubicon exchanges: `exchange="EXCHANGE_GOOGLE_AD_MANAGER" OR exchange="EXCHANGE_RUBICON"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListGuaranteedOrders` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - The ID of the partner that has access to the guaranteed order.
     * @return {object} The API response object.
     */
    this.guaranteedOrders.list = (params) => this._makeRequest('v2/guaranteedOrders', 'GET', params);

    /**
     * Updates an existing guaranteed order. Returns the updated guaranteed order if successful.
     * @param {string} params.advertiserId - The ID of the advertiser that the request is being made within.
     * @param {string} params.guaranteedOrderId - (Required) Output only. The unique identifier of the guaranteed order. The guaranteed order IDs have the format `{exchange}-{legacy_guaranteed_order_id}`.
     * @param {string} params.partnerId - The ID of the partner that the request is being made within.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.guaranteedOrders.patch = (params) => this._makeRequest('v2/guaranteedOrders/{+guaranteedOrderId}', 'PATCH', params);

    /**
     * Edits read advertisers of a guaranteed order.
     * @param {string} params.guaranteedOrderId - (Required) Required. The ID of the guaranteed order to edit. The ID is of the format `{exchange}-{legacy_guaranteed_order_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.guaranteedOrders.editGuaranteedOrderReadAccessors = (params) => this._makeRequest('v2/guaranteedOrders/{+guaranteedOrderId}:editGuaranteedOrderReadAccessors', 'POST', params);

    this.inventorySourceGroups = {};

    /**
     * Gets an inventory source group.
     * @param {string} params.advertiserId - The ID of the advertiser that has access to the inventory source group. If an inventory source group is partner-owned, only advertisers to which the group is explicitly shared can access the group.
     * @param {string} params.inventorySourceGroupId - (Required) Required. The ID of the inventory source group to fetch.
     * @param {string} params.partnerId - The ID of the partner that has access to the inventory source group. A partner cannot access an advertiser-owned inventory source group.
     * @return {object} The API response object.
     */
    this.inventorySourceGroups.get = (params) => this._makeRequest('v2/inventorySourceGroups/{+inventorySourceGroupId}', 'GET', params);

    /**
     * Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.
     * @param {string} params.advertiserId - The ID of the advertiser that has access to the inventory source group. If an inventory source group is partner-owned, only advertisers to which the group is explicitly shared can access the group.
     * @param {string} params.filter - Allows filtering by inventory source group fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `inventorySourceGroupId` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) * `inventorySourceGroupId` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInventorySources` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - The ID of the partner that has access to the inventory source group. A partner cannot access advertiser-owned inventory source groups.
     * @return {object} The API response object.
     */
    this.inventorySourceGroups.list = (params) => this._makeRequest('v2/inventorySourceGroups', 'GET', params);

    /**
     * Creates a new inventory source group. Returns the newly created inventory source group if successful.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the inventory source group. The parent partner will not have access to this group.
     * @param {string} params.partnerId - The ID of the partner that owns the inventory source group. Only this partner will have write access to this group. Only advertisers to which this group is explicitly shared will have read access to this group.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.inventorySourceGroups.create = (params) => this._makeRequest('v2/inventorySourceGroups', 'POST', params);

    /**
     * Updates an inventory source group. Returns the updated inventory source group if successful.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the inventory source group. The parent partner does not have access to this group.
     * @param {string} params.inventorySourceGroupId - (Required) Output only. The unique ID of the inventory source group. Assigned by the system.
     * @param {string} params.partnerId - The ID of the partner that owns the inventory source group. Only this partner has write access to this group.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.inventorySourceGroups.patch = (params) => this._makeRequest('v2/inventorySourceGroups/{inventorySourceGroupId}', 'PATCH', params);

    /**
     * Deletes an inventory source group.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the inventory source group. The parent partner does not have access to this group.
     * @param {string} params.inventorySourceGroupId - (Required) Required. The ID of the inventory source group to delete.
     * @param {string} params.partnerId - The ID of the partner that owns the inventory source group. Only this partner has write access to this group.
     * @return {object} The API response object.
     */
    this.inventorySourceGroups.delete = (params) => this._makeRequest('v2/inventorySourceGroups/{+inventorySourceGroupId}', 'DELETE', params);

    this.inventorySourceGroups.assignedInventorySources = {};

    /**
     * Lists inventory sources assigned to an inventory source group.
     * @param {string} params.advertiserId - The ID of the advertiser that has access to the assignment. If the parent inventory source group is partner-owned, only advertisers to which the parent group is explicitly shared can access the assigned inventory source.
     * @param {string} params.filter - Allows filtering by assigned inventory source fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedInventorySourceId` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.inventorySourceGroupId - (Required) Required. The ID of the inventory source group to which these assignments are assigned.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `assignedInventorySourceId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `assignedInventorySourceId desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAssignedInventorySources` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - The ID of the partner that has access to the assignment. If the parent inventory source group is advertiser-owned, the assignment cannot be accessed via a partner.
     * @return {object} The API response object.
     */
    this.inventorySourceGroups.assignedInventorySources.list = (params) => this._makeRequest('v2/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources', 'GET', params);

    /**
     * Creates an assignment between an inventory source and an inventory source group.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the parent inventory source group. The parent partner will not have access to this assigned inventory source.
     * @param {string} params.inventorySourceGroupId - (Required) Required. The ID of the inventory source group to which the assignment will be assigned.
     * @param {string} params.partnerId - The ID of the partner that owns the parent inventory source group. Only this partner will have write access to this assigned inventory source.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.inventorySourceGroups.assignedInventorySources.create = (params) => this._makeRequest('v2/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources', 'POST', params);

    /**
     * Deletes the assignment between an inventory source and an inventory source group.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the parent inventory source group. The parent partner does not have access to this assigned inventory source.
     * @param {string} params.assignedInventorySourceId - (Required) Required. The ID of the assigned inventory source to delete.
     * @param {string} params.inventorySourceGroupId - (Required) Required. The ID of the inventory source group to which this assignment is assigned.
     * @param {string} params.partnerId - The ID of the partner that owns the parent inventory source group. Only this partner has write access to this assigned inventory source.
     * @return {object} The API response object.
     */
    this.inventorySourceGroups.assignedInventorySources.delete = (params) => this._makeRequest('v2/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources/{+assignedInventorySourceId}', 'DELETE', params);

    /**
     * Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
     * @param {string} params.inventorySourceGroupId - (Required) Required. The ID of the inventory source group to which the assignments are assigned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.inventorySourceGroups.assignedInventorySources.bulkEdit = (params) => this._makeRequest('v2/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources:bulkEdit', 'POST', params);

    this.inventorySources = {};

    /**
     * Gets an inventory source.
     * @param {string} params.inventorySourceId - (Required) Required. The ID of the inventory source to fetch.
     * @param {string} params.partnerId - Required. The ID of the DV360 partner to which the fetched inventory source is permissioned.
     * @return {object} The API response object.
     */
    this.inventorySources.get = (params) => this._makeRequest('v2/inventorySources/{+inventorySourceId}', 'GET', params);

    /**
     * Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     * @param {string} params.advertiserId - The ID of the advertiser that has access to the inventory source.
     * @param {string} params.filter - Allows filtering by inventory source fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `status.entityStatus` * `commitment` * `deliveryMethod` * `rateDetails.rateType` * `exchange` Examples: * All active inventory sources: `status.entityStatus="ENTITY_STATUS_ACTIVE"` * Inventory sources belonging to Google Ad Manager or Rubicon exchanges: `exchange="EXCHANGE_GOOGLE_AD_MANAGER" OR exchange="EXCHANGE_RUBICON"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInventorySources` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - The ID of the partner that has access to the inventory source.
     * @return {object} The API response object.
     */
    this.inventorySources.list = (params) => this._makeRequest('v2/inventorySources', 'GET', params);

    /**
     * Creates a new inventory source. Returns the newly created inventory source if successful.
     * @param {string} params.advertiserId - The ID of the advertiser that the request is being made within.
     * @param {string} params.partnerId - The ID of the partner that the request is being made within.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.inventorySources.create = (params) => this._makeRequest('v2/inventorySources', 'POST', params);

    /**
     * Updates an existing inventory source. Returns the updated inventory source if successful.
     * @param {string} params.advertiserId - The ID of the advertiser that the request is being made within.
     * @param {string} params.inventorySourceId - (Required) Output only. The unique ID of the inventory source. Assigned by the system.
     * @param {string} params.partnerId - The ID of the partner that the request is being made within.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.inventorySources.patch = (params) => this._makeRequest('v2/inventorySources/{+inventorySourceId}', 'PATCH', params);

    /**
     * Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.
     * @param {string} params.inventorySourceId - (Required) Required. The ID of inventory source to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.inventorySources.editInventorySourceReadWriteAccessors = (params) => this._makeRequest('v2/inventorySources/{+inventorySourceId}:editInventorySourceReadWriteAccessors', 'POST', params);

    this.partners = {};

    /**
     * Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
     * @param {string} params.partnerId - (Required) Required. The ID of the partner.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.editAssignedTargetingOptions = (params) => this._makeRequest('v2/partners/{+partnerId}:editAssignedTargetingOptions', 'POST', params);

    /**
     * Gets a partner.
     * @param {string} params.partnerId - (Required) Required. The ID of the partner to fetch.
     * @return {object} The API response object.
     */
    this.partners.get = (params) => this._makeRequest('v2/partners/{+partnerId}', 'GET', params);

    /**
     * Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
     * @param {string} params.filter - Allows filtering by partner fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `entityStatus` Examples: * All active partners: `entityStatus="ENTITY_STATUS_ACTIVE"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListPartners` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.partners.list = (params) => this._makeRequest('v2/partners', 'GET', params);

    this.partners.channels = {};

    /**
     * Gets a channel for a partner or advertiser.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the fetched channel.
     * @param {string} params.channelId - (Required) Required. The ID of the channel to fetch.
     * @param {string} params.partnerId - (Required) The ID of the partner that owns the fetched channel.
     * @return {object} The API response object.
     */
    this.partners.channels.get = (params) => this._makeRequest('v2/partners/{+partnerId}/channels/{+channelId}', 'GET', params);

    /**
     * Lists channels for a partner or advertiser.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the channels.
     * @param {string} params.filter - Allows filtering by channel fields. Supported syntax: * Filter expressions for channel can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All channels for which the display name contains "google": `displayName : "google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) * `channelId` The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListChannels` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - (Required) The ID of the partner that owns the channels.
     * @return {object} The API response object.
     */
    this.partners.channels.list = (params) => this._makeRequest('v2/partners/{+partnerId}/channels', 'GET', params);

    /**
     * Creates a new channel. Returns the newly created channel if successful.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the created channel.
     * @param {string} params.partnerId - (Required) The ID of the partner that owns the created channel.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.channels.create = (params) => this._makeRequest('v2/partners/{+partnerId}/channels', 'POST', params);

    /**
     * Updates a channel. Returns the updated channel if successful.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the created channel.
     * @param {string} params.channelId - (Required) Output only. The unique ID of the channel. Assigned by the system.
     * @param {string} params.partnerId - (Required) The ID of the partner that owns the created channel.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.channels.patch = (params) => this._makeRequest('v2/partners/{+partnerId}/channels/{channelId}', 'PATCH', params);

    this.partners.channels.sites = {};

    /**
     * Lists sites in a channel.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the parent channel.
     * @param {string} params.channelId - (Required) Required. The ID of the parent channel to which the requested sites belong.
     * @param {string} params.filter - Allows filtering by site fields. Supported syntax: * Filter expressions for site retrieval can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `urlOrAppId` Examples: * All sites for which the URL or app ID contains "google": `urlOrAppId : "google"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `urlOrAppId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `urlOrAppId desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `10000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListSites` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - (Required) The ID of the partner that owns the parent channel.
     * @return {object} The API response object.
     */
    this.partners.channels.sites.list = (params) => this._makeRequest('v2/partners/{+partnerId}/channels/{+channelId}/sites', 'GET', params);

    /**
     * Creates a site in a channel.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the parent channel.
     * @param {string} params.channelId - (Required) Required. The ID of the parent channel in which the site will be created.
     * @param {string} params.partnerId - (Required) The ID of the partner that owns the parent channel.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.channels.sites.create = (params) => this._makeRequest('v2/partners/{partnerId}/channels/{+channelId}/sites', 'POST', params);

    /**
     * Deletes a site from a channel.
     * @param {string} params.advertiserId - The ID of the advertiser that owns the parent channel.
     * @param {string} params.channelId - (Required) Required. The ID of the parent channel to which the site belongs.
     * @param {string} params.partnerId - (Required) The ID of the partner that owns the parent channel.
     * @param {string} params.urlOrAppId - (Required) Required. The URL or app ID of the site to delete.
     * @return {object} The API response object.
     */
    this.partners.channels.sites.delete = (params) => this._makeRequest('v2/partners/{partnerId}/channels/{+channelId}/sites/{+urlOrAppId}', 'DELETE', params);

    /**
     * Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
     * @param {string} params.channelId - (Required) Required. The ID of the parent channel to which the sites belong.
     * @param {string} params.partnerId - (Required) The ID of the partner that owns the parent channel.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.channels.sites.bulkEdit = (params) => this._makeRequest('v2/partners/{partnerId}/channels/{+channelId}/sites:bulkEdit', 'POST', params);

    /**
     * Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.
     * @param {string} params.channelId - (Required) Required. The ID of the parent channel whose sites will be replaced.
     * @param {string} params.partnerId - (Required) The ID of the partner that owns the parent channel.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.channels.sites.replace = (params) => this._makeRequest('v2/partners/{partnerId}/channels/{+channelId}/sites:replace', 'POST', params);

    this.partners.targetingTypes = {};

    this.partners.targetingTypes.assignedTargetingOptions = {};

    /**
     * Gets a single targeting option assigned to a partner.
     * @param {string} params.assignedTargetingOptionId - (Required) Required. An identifier unique to the targeting type in this partner that identifies the assigned targeting option being requested.
     * @param {string} params.partnerId - (Required) Required. The ID of the partner.
     * @param {string} params.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL`
     * @return {object} The API response object.
     */
    this.partners.targetingTypes.assignedTargetingOptions.get = (params) => this._makeRequest('v2/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', params);

    /**
     * Lists the targeting options assigned to a partner.
     * @param {string} params.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` Examples: * `AssignedTargetingOption` resource with ID 123456: `assignedTargetingOptionId="123456"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListPartnerAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {string} params.partnerId - (Required) Required. The ID of the partner.
     * @param {string} params.targetingType - (Required) Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_CHANNEL`
     * @return {object} The API response object.
     */
    this.partners.targetingTypes.assignedTargetingOptions.list = (params) => this._makeRequest('v2/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', params);

    /**
     * Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
     * @param {string} params.partnerId - (Required) Required. The ID of the partner.
     * @param {string} params.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.targetingTypes.assignedTargetingOptions.create = (params) => this._makeRequest('v2/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', params);

    /**
     * Deletes an assigned targeting option from a partner.
     * @param {string} params.assignedTargetingOptionId - (Required) Required. The ID of the assigned targeting option to delete.
     * @param {string} params.partnerId - (Required) Required. The ID of the partner.
     * @param {string} params.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL`
     * @return {object} The API response object.
     */
    this.partners.targetingTypes.assignedTargetingOptions.delete = (params) => this._makeRequest('v2/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', params);

    this.sdfdownloadtasks = {};

    /**
     * Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with `sdfdownloadtasks.operations.get`. Any errors can be found in the error.message. Note that error.details is expected to be empty.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sdfdownloadtasks.create = (params) => this._makeRequest('v2/sdfdownloadtasks', 'POST', params);

    this.sdfdownloadtasks.operations = {};

    /**
     * Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.sdfdownloadtasks.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.targetingTypes = {};

    this.targetingTypes.targetingOptions = {};

    /**
     * Gets a single targeting option.
     * @param {string} params.advertiserId - Required. The Advertiser this request is being made in the context of.
     * @param {string} params.targetingOptionId - (Required) Required. The ID of the of targeting option to retrieve.
     * @param {string} params.targetingType - (Required) Required. The type of targeting option to retrieve. Accepted values are: * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID`
     * @return {object} The API response object.
     */
    this.targetingTypes.targetingOptions.get = (params) => this._makeRequest('v2/targetingTypes/{+targetingType}/targetingOptions/{+targetingOptionId}', 'GET', params);

    /**
     * Lists targeting options of a given type.
     * @param {string} params.advertiserId - Required. The Advertiser this request is being made in the context of.
     * @param {string} params.filter - Allows filtering by targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `OR` logical operators. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `carrierAndIspDetails.type` * `geoRegionDetails.geoRegionType` * `targetingOptionId` Examples: * All `GEO REGION` targeting options that belong to sub type `GEO_REGION_TYPE_COUNTRY` or `GEO_REGION_TYPE_STATE`: `geoRegionDetails.geoRegionType="GEO_REGION_TYPE_COUNTRY" OR geoRegionDetails.geoRegionType="GEO_REGION_TYPE_STATE"` * All `CARRIER AND ISP` targeting options that belong to sub type `CARRIER_AND_ISP_TYPE_CARRIER`: `carrierAndIspDetails.type="CARRIER_AND_ISP_TYPE_CARRIER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `targetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingOptionId desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {string} params.targetingType - (Required) Required. The type of targeting option to be listed. Accepted values are: * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID`
     * @return {object} The API response object.
     */
    this.targetingTypes.targetingOptions.list = (params) => this._makeRequest('v2/targetingTypes/{+targetingType}/targetingOptions', 'GET', params);

    /**
     * Searches for targeting options of a given type based on the given search terms.
     * @param {string} params.targetingType - (Required) Required. The type of targeting options to retrieve. Accepted values are: * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_BUSINESS_CHAIN`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.targetingTypes.targetingOptions.search = (params) => this._makeRequest('v2/targetingTypes/{+targetingType}/targetingOptions:search', 'POST', params);

    this.users = {};

    /**
     * Gets a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
     * @param {string} params.userId - (Required) Required. The ID of the user to fetch.
     * @return {object} The API response object.
     */
    this.users.get = (params) => this._makeRequest('v2/users/{+userId}', 'GET', params);

    /**
     * Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
     * @param {string} params.filter - Allows filtering by user fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `displayName` and `email` fields must use the `HAS (:)` operator. * The `lastLoginTime` field must use either the `LESS THAN OR EQUAL TO (<=)` or `GREATER THAN OR EQUAL TO (>=)` operator. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `assignedUserRole.advertiserId` * `assignedUserRole.entityType`: This is synthetic field of `AssignedUserRole` used for filtering. Identifies the type of entity to which the user role is assigned. Valid values are `Partner` and `Advertiser`. * `assignedUserRole.parentPartnerId`: This is a synthetic field of `AssignedUserRole` used for filtering. Identifies the parent partner of the entity to which the user role is assigned. * `assignedUserRole.partnerId` * `assignedUserRole.userRole` * `displayName` * `email` * `lastLoginTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * The user with `displayName` containing "foo": `displayName:"foo"` * The user with `email` containing "bar": `email:"bar"` * All users with standard user roles: `assignedUserRole.userRole="STANDARD"` * All users with user roles for partner 123: `assignedUserRole.partnerId="123"` * All users with user roles for advertiser 123: `assignedUserRole.advertiserId="123"` * All users with partner level user roles: `entityType="PARTNER"` * All users with user roles for partner 123 and advertisers under partner 123: `parentPartnerId="123"` * All users that last logged in on or after 2023-01-01T00:00:00Z (format of ISO 8601): `lastLoginTime>="2023-01-01T00:00:00Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} params.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
     * @param {integer} params.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListUsers` method. If not specified, the first page of results will be returned.
     * @return {object} The API response object.
     */
    this.users.list = (params) => this._makeRequest('v2/users', 'GET', params);

    /**
     * Creates a new user. Returns the newly created user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.create = (params) => this._makeRequest('v2/users', 'POST', params);

    /**
     * Updates an existing user. Returns the updated user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {string} params.userId - (Required) Output only. The unique ID of the user. Assigned by the system.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.patch = (params) => this._makeRequest('v2/users/{+userId}', 'PATCH', params);

    /**
     * Deletes a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
     * @param {string} params.userId - (Required) Required. The ID of the user to delete.
     * @return {object} The API response object.
     */
    this.users.delete = (params) => this._makeRequest('v2/users/{+userId}', 'DELETE', params);

    /**
     * Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
     * @param {string} params.userId - (Required) Required. The ID of the user to which the assigned user roles belong.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.bulkEditAssignedUserRoles = (params) => this._makeRequest('v2/users/{+userId}:bulkEditAssignedUserRoles', 'POST', params);

    this.media = {};

    /**
     * Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.
     * @param {string} params.resourceName - (Required) Name of the media that is being downloaded. See ReadRequest.resource_name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.media.upload = (params) => this._makeRequest('media/{+resourceName}', 'POST', params);

    /**
     * Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.
     * @param {string} params.resourceName - (Required) Name of the media that is being downloaded. See ReadRequest.resource_name.
     * @return {object} The API response object.
     */
    this.media.download = (params) => this._makeRequest('download/{+resourceName}', 'GET', params);
  }

  /**
   * @private Builds the full request URL and options object.
   */
  _buildRequestDetails(path, httpMethod, params) {
    let url = this._rootUrl + this._servicePath + path;
    const remainingParams = { ...params };
    // Fix: Correctly handle {+param} style parameters and other potential special chars.
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
      const isPlus = placeholder.startsWith('{+');
      const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
      if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
      }
    }
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }

    const options = {
      method: httpMethod,
      headers: { 'Authorization': 'Bearer ' + this._token },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };
    if (params && params.resource) {
      options.payload = JSON.stringify(params.resource);
    }
    
    return { url, options };
  }

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   */
  _makeRequest(path, httpMethod, params) {
    const { url, options } = this._buildRequestDetails(path, httpMethod, params);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseText = response.getContentText(); // Simplified call

      if (responseCode >= 200 && responseCode < 300) {
        return responseText ? JSON.parse(responseText) : {};
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      try {
        // Return parsed error if possible, otherwise a generic error object
        return JSON.parse(responseText);
      } catch (e) {
        return { error: { code: responseCode, message: responseText } };
      }
    }
    
    // This line is technically unreachable if retries >= 0, but good for safety.
    throw new Error('Request failed after multiple retries.');
  }
}
