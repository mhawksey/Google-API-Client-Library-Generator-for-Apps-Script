
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://displayvideo.googleapis.com/';
    this._servicePath = '';


    this.advertisers = {};

    /**
     * Lists assigned targeting options of an advertiser across targeting types.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the line item belongs to.
     * @param {string} apiParams.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=) operator`. Supported fields: * `targetingType` Examples: * targetingType with value TARGETING_TYPE_CHANNEL `targetingType="TARGETING_TYPE_CHANNEL"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.
     * @param {integer} apiParams.pageSize - Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is '5000'. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListAdvertiserAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.listAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}:listAssignedTargetingOptions', 'GET', apiParams, clientConfig);

    /**
     * Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.editAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}:editAssignedTargetingOptions', 'POST', apiParams, clientConfig);

    /**
     * Gets an advertiser.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser to fetch.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}', 'GET', apiParams, clientConfig);

    /**
     * Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Allows filtering by advertiser fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `advertiserId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All active advertisers under a partner: `entityStatus="ENTITY_STATUS_ACTIVE"` * All advertisers with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All advertisers with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `advertiserId` (default) * `displayName` * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdvertisers` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - Required. The ID of the partner that the fetched advertisers should all belong to. The system only supports listing advertisers for one partner at a time.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers', 'GET', apiParams, clientConfig);

    /**
     * Creates a new advertiser. Returns the newly created advertiser if successful. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing advertiser. Returns the updated advertiser if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Output only. The unique ID of the advertiser. Assigned by the system.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser we need to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}', 'DELETE', apiParams, clientConfig);

    /**
     * Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser to audit.
     * @param {string} apiParams.readMask - Optional. The specific fields to return. If no mask is specified, all fields in the response proto will be filled. Valid values are: * usedLineItemsCount * usedInsertionOrdersCount * usedCampaignsCount * channelsCount * negativelyTargetedChannelsCount * negativeKeywordListsCount * adGroupCriteriaCount * campaignCriteriaCount
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.audit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}:audit', 'GET', apiParams, clientConfig);

    this.advertisers.adGroupAds = {};

    /**
     * Gets an ad group ad.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.adGroupAdId - (Required) Required. The ID of the ad group ad to fetch.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser this ad group ad belongs to.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.adGroupAds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroupAds/{+adGroupAdId}', 'GET', apiParams, clientConfig);

    /**
     * Lists ad group ads.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the ad groups belongs to.
     * @param {string} apiParams.filter - Optional. Allows filtering by custom ad group ad fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` and `OR`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `adGroupId` * `displayName` * `entityStatus` * `adGroupAdId` Examples: * All ad group ads under an ad group: `adGroupId="1234"` * All ad group ads under an ad group with an entityStatus of `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED`: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND adGroupId="12345"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Optional. Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdGroupAds` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.adGroupAds.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroupAds', 'GET', apiParams, clientConfig);

    this.advertisers.adGroups = {};

    /**
     * Lists assigned targeting options for multiple ad groups across targeting types. Inherited assigned targeting options are not included.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.adGroupIds - Required. The IDs of the ad groups to list assigned targeting options for.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the line items belongs to.
     * @param {string} apiParams.filter - Optional. Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_YOUTUBE_VIDEO` or `TARGETING_TYPE_YOUTUBE_CHANNEL`: `targetingType="TARGETING_TYPE_YOUTUBE_VIDEO" OR targetingType="TARGETING_TYPE_YOUTUBE_CHANNEL"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Optional. Field by which to sort the list. Acceptable values are: * `adGroupId` (default) * `assignedTargetingOption.targetingType` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - Optional. A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the `BulkListAdGroupAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.adGroups.bulkListAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroups:bulkListAssignedTargetingOptions', 'GET', apiParams, clientConfig);

    /**
     * Gets an ad group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.adGroupId - (Required) Required. The ID of the ad group to fetch.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser this ad group belongs to.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.adGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroups/{+adGroupId}', 'GET', apiParams, clientConfig);

    /**
     * Lists ad groups.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the ad groups belongs to.
     * @param {string} apiParams.filter - Optional. Allows filtering by custom ad group fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` and `OR`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported properties: * `adGroupId` * `displayName` * `entityStatus` * `lineItemId` * `adGroupFormat` Examples: * All ad groups under an line item: `lineItemId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` `AD_GROUP_FORMAT_IN_STREAM` ad groups under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND adGroupFormat="AD_GROUP_FORMAT_IN_STREAM"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Optional. Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdGroups` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.adGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroups', 'GET', apiParams, clientConfig);

    this.advertisers.adGroups.targetingTypes = {};

    this.advertisers.adGroups.targetingTypes.assignedTargetingOptions = {};

    /**
     * Gets a single targeting option assigned to an ad group. Inherited assigned targeting options are not included.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.adGroupId - (Required) Required. The ID of the ad group the assigned targeting option belongs to.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the ad group belongs to.
     * @param {string} apiParams.assignedTargetingOptionId - (Required) Required. An identifier unique to the targeting type in this line item that identifies the assigned targeting option being requested.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SESSION_POSITION` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_YOUTUBE_VIDEO`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.adGroups.targetingTypes.assignedTargetingOptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroups/{+adGroupId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', apiParams, clientConfig);

    /**
     * Lists the targeting options assigned to an ad group. Inherited assigned targeting options are not included.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.adGroupId - (Required) Required. The ID of the ad group to list assigned targeting options for.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the ad group belongs to.
     * @param {string} apiParams.filter - Optional. Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` Examples: * `AssignedTargetingOption` resources with ID 1 or 2: `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Optional. Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdGroupAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SESSION_POSITION` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_YOUTUBE_VIDEO`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.adGroups.targetingTypes.assignedTargetingOptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/adGroups/{+adGroupId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', apiParams, clientConfig);

    this.advertisers.lineItems = {};

    /**
     * Lists assigned targeting options for multiple line items across targeting types.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the line items belongs to.
     * @param {string} apiParams.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR` on the same field. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` * `inheritance` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` or `TARGETING_TYPE_CHANNEL`: `targetingType="TARGETING_TYPE_PROXIMITY_LOCATION_LIST" OR targetingType="TARGETING_TYPE_CHANNEL"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.lineItemIds - Required. The IDs of the line items to list assigned targeting options for.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `lineItemId` (default) * `assignedTargetingOption.targetingType` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.
     * @param {integer} apiParams.pageSize - Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the `BulkListAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.lineItems.bulkListAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems:bulkListAssignedTargetingOptions', 'GET', apiParams, clientConfig);

    /**
     * Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * lineItems.bulkUpdate * lineItems.patch * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the line items belong to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.lineItems.bulkEditAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems:bulkEditAssignedTargetingOptions', 'POST', apiParams, clientConfig);

    /**
     * Gets a line item.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser this line item belongs to.
     * @param {string} apiParams.lineItemId - (Required) Required. The ID of the line item to fetch.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.lineItems.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}', 'GET', apiParams, clientConfig);

    /**
     * Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser to list line items for.
     * @param {string} apiParams.filter - Allows filtering by line item fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `insertionOrderId` * `lineItemId` * `lineItemType` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All line items under an insertion order: `insertionOrderId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` and `LINE_ITEM_TYPE_DISPLAY_DEFAULT` line items under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND lineItemType="LINE_ITEM_TYPE_DISPLAY_DEFAULT"` * All line items with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All line items with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLineItems` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.lineItems.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems', 'GET', apiParams, clientConfig);

    /**
     * Creates a new line item. Returns the newly created line item if successful. YouTube & Partners line items cannot be created or updated using the API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Output only. The unique ID of the advertiser the line item belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.lineItems.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Output only. The unique ID of the advertiser the line item belongs to.
     * @param {string} apiParams.lineItemId - (Required) Output only. The unique ID of the line item. Assigned by the system.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.lineItems.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it. YouTube & Partners line items cannot be created or updated using the API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser this line item belongs to.
     * @param {string} apiParams.lineItemId - (Required) The ID of the line item to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.lineItems.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}', 'DELETE', apiParams, clientConfig);

    /**
     * Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type YouTube & Partners line items cannot be created or updated using the API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser this line item belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.lineItems.generateDefault = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems:generateDefault', 'POST', apiParams, clientConfig);

    /**
     * Duplicates a line item. Returns the ID of the created line item if successful. YouTube & Partners line items cannot be created or updated using the API. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser this line item belongs to.
     * @param {string} apiParams.lineItemId - (Required) Required. The ID of the line item to duplicate.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.lineItems.duplicate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}:duplicate', 'POST', apiParams, clientConfig);

    /**
     * Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser this line item belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.lineItems.bulkUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems:bulkUpdate', 'POST', apiParams, clientConfig);

    this.advertisers.lineItems.targetingTypes = {};

    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions = {};

    /**
     * Gets a single targeting option assigned to a line item.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the line item belongs to.
     * @param {string} apiParams.assignedTargetingOptionId - (Required) Required. An identifier unique to the targeting type in this line item that identifies the assigned targeting option being requested.
     * @param {string} apiParams.lineItemId - (Required) Required. The ID of the line item the assigned targeting option belongs to.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_INVENTORY_MODE` * `TARGETING_TYPE_YOUTUBE_CHANNEL` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items) * `TARGETING_TYPE_YOUTUBE_VIDEO` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', apiParams, clientConfig);

    /**
     * Lists the targeting options assigned to a line item.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the line item belongs to.
     * @param {string} apiParams.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` * `inheritance` Examples: * `AssignedTargetingOption` resources with ID 1 or 2: `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.lineItemId - (Required) Required. The ID of the line item to list assigned targeting options for.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLineItemAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_INVENTORY_MODE` * `TARGETING_TYPE_YOUTUBE_CHANNEL` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items) * `TARGETING_TYPE_YOUTUBE_VIDEO` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', apiParams, clientConfig);

    /**
     * Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * lineItems.bulkEditAssignedTargetingOptions * lineItems.bulkUpdate * lineItems.patch * DeleteLineItemAssignedTargetingOption YouTube & Partners line items cannot be created or updated using the API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the line item belongs to.
     * @param {string} apiParams.lineItemId - (Required) Required. The ID of the line item the assigned targeting option will belong to.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', apiParams, clientConfig);

    /**
     * Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * lineItems.bulkEditAssignedTargetingOptions * lineItems.bulkUpdate * lineItems.patch * CreateLineItemAssignedTargetingOption YouTube & Partners line items cannot be created or updated using the API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the line item belongs to.
     * @param {string} apiParams.assignedTargetingOptionId - (Required) Required. The ID of the assigned targeting option to delete.
     * @param {string} apiParams.lineItemId - (Required) Required. The ID of the line item the assigned targeting option belongs to.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.lineItems.targetingTypes.assignedTargetingOptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', apiParams, clientConfig);

    this.advertisers.targetingTypes = {};

    this.advertisers.targetingTypes.assignedTargetingOptions = {};

    /**
     * Gets a single targeting option assigned to an advertiser.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser.
     * @param {string} apiParams.assignedTargetingOptionId - (Required) Required. An identifier unique to the targeting type in this advertiser that identifies the assigned targeting option being requested.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_YOUTUBE_VIDEO` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_CONTENT_THEME_EXCLUSION`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.targetingTypes.assignedTargetingOptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', apiParams, clientConfig);

    /**
     * Lists the targeting options assigned to an advertiser.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser.
     * @param {string} apiParams.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` Examples: * `AssignedTargetingOption` with ID 123456: `assignedTargetingOptionId="123456"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdvertiserAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_YOUTUBE_VIDEO` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_CONTENT_THEME_EXCLUSION`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.targetingTypes.assignedTargetingOptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', apiParams, clientConfig);

    /**
     * Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_INVENTORY_MODE`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.targetingTypes.assignedTargetingOptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', apiParams, clientConfig);

    /**
     * Deletes an assigned targeting option from an advertiser.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser.
     * @param {string} apiParams.assignedTargetingOptionId - (Required) Required. The ID of the assigned targeting option to delete.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_INVENTORY_MODE`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.targetingTypes.assignedTargetingOptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', apiParams, clientConfig);

    this.advertisers.assets = {};

    /**
     * Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser this asset belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.assets.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/v4/advertisers/{+advertiserId}/assets' : 'v4/advertisers/{+advertiserId}/assets';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.advertisers.campaigns = {};

    /**
     * Lists assigned targeting options of a campaign across targeting types.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the campaign belongs to.
     * @param {string} apiParams.campaignId - (Required) Required. The ID of the campaign to list assigned targeting options for.
     * @param {string} apiParams.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` * `inheritance` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_LANGUAGE` or `TARGETING_TYPE_GENDER`: `targetingType="TARGETING_TYPE_LANGUAGE" OR targetingType="TARGETING_TYPE_GENDER"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.
     * @param {integer} apiParams.pageSize - Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListCampaignAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.campaigns.listAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns/{+campaignId}:listAssignedTargetingOptions', 'GET', apiParams, clientConfig);

    /**
     * Gets a campaign.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser this campaign belongs to.
     * @param {string} apiParams.campaignId - (Required) Required. The ID of the campaign to fetch.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.campaigns.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns/{+campaignId}', 'GET', apiParams, clientConfig);

    /**
     * Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser to list campaigns for.
     * @param {string} apiParams.filter - Allows filtering by campaign fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` campaigns under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED")` * All campaigns with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All campaigns with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCampaigns` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.campaigns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns', 'GET', apiParams, clientConfig);

    /**
     * Creates a new campaign. Returns the newly created campaign if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Output only. The unique ID of the advertiser the campaign belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.campaigns.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing campaign. Returns the updated campaign if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Output only. The unique ID of the advertiser the campaign belongs to.
     * @param {string} apiParams.campaignId - (Required) Output only. The unique ID of the campaign. Assigned by the system.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.campaigns.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns/{+campaignId}', 'PATCH', apiParams, clientConfig);

    /**
     * Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser this campaign belongs to.
     * @param {string} apiParams.campaignId - (Required) The ID of the campaign we need to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.campaigns.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns/{+campaignId}', 'DELETE', apiParams, clientConfig);

    this.advertisers.campaigns.targetingTypes = {};

    this.advertisers.campaigns.targetingTypes.assignedTargetingOptions = {};

    /**
     * Gets a single targeting option assigned to a campaign.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the campaign belongs to.
     * @param {string} apiParams.assignedTargetingOptionId - (Required) Required. An identifier unique to the targeting type in this campaign that identifies the assigned targeting option being requested.
     * @param {string} apiParams.campaignId - (Required) Required. The ID of the campaign the assigned targeting option belongs to.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_VIEWABILITY`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.campaigns.targetingTypes.assignedTargetingOptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns/{+campaignId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', apiParams, clientConfig);

    /**
     * Lists the targeting options assigned to a campaign for a specified targeting type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the campaign belongs to.
     * @param {string} apiParams.campaignId - (Required) Required. The ID of the campaign to list assigned targeting options for.
     * @param {string} apiParams.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` * `inheritance` Examples: * `AssignedTargetingOption` resources with ID 1 or 2 `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER` `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCampaignAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_VIEWABILITY`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.campaigns.targetingTypes.assignedTargetingOptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/campaigns/{+campaignId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', apiParams, clientConfig);

    this.advertisers.channels = {};

    /**
     * Gets a channel for a partner or advertiser.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser that owns the fetched channel.
     * @param {string} apiParams.channelId - (Required) Required. The ID of the channel to fetch.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the fetched channel.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.channels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/channels/{+channelId}', 'GET', apiParams, clientConfig);

    /**
     * Lists channels for a partner or advertiser.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser that owns the channels.
     * @param {string} apiParams.filter - Allows filtering by channel fields. Supported syntax: * Filter expressions for channel can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All channels for which the display name contains "google": `displayName : "google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) * `channelId` The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListChannels` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the channels.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.channels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/channels', 'GET', apiParams, clientConfig);

    /**
     * Creates a new channel. Returns the newly created channel if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser that owns the created channel.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the created channel.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.channels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/channels', 'POST', apiParams, clientConfig);

    /**
     * Updates a channel. Returns the updated channel if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser that owns the created channel.
     * @param {string} apiParams.channelId - (Required) Output only. The unique ID of the channel. Assigned by the system.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the created channel.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.channels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/channels/{channelId}', 'PATCH', apiParams, clientConfig);

    this.advertisers.channels.sites = {};

    /**
     * Lists sites in a channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser that owns the parent channel.
     * @param {string} apiParams.channelId - (Required) Required. The ID of the parent channel to which the requested sites belong.
     * @param {string} apiParams.filter - Allows filtering by site fields. Supported syntax: * Filter expressions for site retrieval can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `urlOrAppId` Examples: * All sites for which the URL or app ID contains "google": `urlOrAppId : "google"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `urlOrAppId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `urlOrAppId desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `10000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListSites` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the parent channel.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.channels.sites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/channels/{+channelId}/sites', 'GET', apiParams, clientConfig);

    /**
     * Creates a site in a channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser that owns the parent channel.
     * @param {string} apiParams.channelId - (Required) Required. The ID of the parent channel in which the site will be created.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the parent channel.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.channels.sites.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/channels/{+channelId}/sites', 'POST', apiParams, clientConfig);

    /**
     * Deletes a site from a channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser that owns the parent channel.
     * @param {string} apiParams.channelId - (Required) Required. The ID of the parent channel to which the site belongs.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the parent channel.
     * @param {string} apiParams.urlOrAppId - (Required) Required. The URL or app ID of the site to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.channels.sites.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/channels/{+channelId}/sites/{+urlOrAppId}', 'DELETE', apiParams, clientConfig);

    /**
     * Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser that owns the parent channel.
     * @param {string} apiParams.channelId - (Required) Required. The ID of the parent channel to which the sites belong.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.channels.sites.bulkEdit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/channels/{+channelId}/sites:bulkEdit', 'POST', apiParams, clientConfig);

    /**
     * Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser that owns the parent channel.
     * @param {string} apiParams.channelId - (Required) Required. The ID of the parent channel whose sites will be replaced.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.channels.sites.replace = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/channels/{+channelId}/sites:replace', 'POST', apiParams, clientConfig);

    this.advertisers.creatives = {};

    /**
     * Gets a creative.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser this creative belongs to.
     * @param {string} apiParams.creativeId - (Required) Required. The ID of the creative to fetch.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.creatives.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/creatives/{+creativeId}', 'GET', apiParams, clientConfig);

    /**
     * Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser to list creatives for.
     * @param {string} apiParams.filter - Allows filtering by creative fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `lineItemIds` field must use the `HAS (:)` operator. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. * For `entityStatus`, `minDuration`, `maxDuration`, `updateTime`, and `dynamic` fields, there may be at most one restriction. Supported Fields: * `approvalStatus` * `creativeId` * `creativeType` * `dimensions` (input in the form of `{width}x{height}`) * `dynamic` * `entityStatus` * `exchangeReviewStatus` (input in the form of `{exchange}-{reviewStatus}`) * `lineItemIds` * `maxDuration` (input in the form of `{duration}s`. Only seconds are supported) * `minDuration` (input in the form of `{duration}s`. Only seconds are supported) * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Notes: * For `updateTime`, a creative resource's field value reflects the last time that a creative has been updated, which includes updates made by the system (e.g. creative review updates). Examples: * All native creatives: `creativeType="CREATIVE_TYPE_NATIVE"` * All active creatives with 300x400 or 50x100 dimensions: `entityStatus="ENTITY_STATUS_ACTIVE" AND (dimensions="300x400" OR dimensions="50x100")` * All dynamic creatives that are approved by AdX or AppNexus, with a minimum duration of 5 seconds and 200ms: `dynamic="true" AND minDuration="5.2s" AND (exchangeReviewStatus="EXCHANGE_GOOGLE_AD_MANAGER-REVIEW_STATUS_APPROVED" OR exchangeReviewStatus="EXCHANGE_APPNEXUS-REVIEW_STATUS_APPROVED")` * All video creatives that are associated with line item ID 1 or 2: `creativeType="CREATIVE_TYPE_VIDEO" AND (lineItemIds:1 OR lineItemIds:2)` * Find creatives by multiple creative IDs: `creativeId=1 OR creativeId=2` * All creatives with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `creativeId` (default) * `createTime` * `mediaDuration` * `dimensions` (sorts by width first, then by height) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `createTime desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCreatives` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.creatives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/creatives', 'GET', apiParams, clientConfig);

    /**
     * Creates a new creative. Returns the newly created creative if successful. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Output only. The unique ID of the advertiser the creative belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.creatives.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/creatives', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing creative. Returns the updated creative if successful. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Output only. The unique ID of the advertiser the creative belongs to.
     * @param {string} apiParams.creativeId - (Required) Output only. The unique ID of the creative. Assigned by the system.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.creatives.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/creatives/{+creativeId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser this creative belongs to.
     * @param {string} apiParams.creativeId - (Required) The ID of the creative to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.creatives.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/creatives/{+creativeId}', 'DELETE', apiParams, clientConfig);

    this.advertisers.insertionOrders = {};

    /**
     * Lists assigned targeting options of an insertion order across targeting types.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the insertion order belongs to.
     * @param {string} apiParams.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` * `inheritance` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` or `TARGETING_TYPE_CHANNEL`: `targetingType="TARGETING_TYPE_PROXIMITY_LOCATION_LIST" OR targetingType="TARGETING_TYPE_CHANNEL"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.insertionOrderId - (Required) Required. The ID of the insertion order to list assigned targeting options for.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.
     * @param {integer} apiParams.pageSize - Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListInsertionOrderAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.insertionOrders.listAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}:listAssignedTargetingOptions', 'GET', apiParams, clientConfig);

    /**
     * Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser this insertion order belongs to.
     * @param {string} apiParams.insertionOrderId - (Required) Required. The ID of the insertion order to fetch.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.insertionOrders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}', 'GET', apiParams, clientConfig);

    /**
     * Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser to list insertion orders for.
     * @param {string} apiParams.filter - Allows filtering by insertion order fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All insertion orders under a campaign: `campaignId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` insertion orders under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED")` * All insertion orders with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All insertion orders with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * "displayName" (default) * "entityStatus" * "updateTime" The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInsertionOrders` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.insertionOrders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders', 'GET', apiParams, clientConfig);

    /**
     * Creates a new insertion order. Returns the newly created insertion order if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Output only. The unique ID of the advertiser the insertion order belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.insertionOrders.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing insertion order. Returns the updated insertion order if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Output only. The unique ID of the advertiser the insertion order belongs to.
     * @param {string} apiParams.insertionOrderId - (Required) Output only. The unique ID of the insertion order. Assigned by the system.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.insertionOrders.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) The ID of the advertiser this insertion order belongs to.
     * @param {string} apiParams.insertionOrderId - (Required) The ID of the insertion order to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.insertionOrders.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}', 'DELETE', apiParams, clientConfig);

    this.advertisers.insertionOrders.targetingTypes = {};

    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions = {};

    /**
     * Gets a single targeting option assigned to an insertion order.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the insertion order belongs to.
     * @param {string} apiParams.assignedTargetingOptionId - (Required) Required. An identifier unique to the targeting type in this insertion order that identifies the assigned targeting option being requested.
     * @param {string} apiParams.insertionOrderId - (Required) Required. The ID of the insertion order the assigned targeting option belongs to.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', apiParams, clientConfig);

    /**
     * Lists the targeting options assigned to an insertion order.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the insertion order belongs to.
     * @param {string} apiParams.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` * `inheritance` Examples: * `AssignedTargetingOption` resources with ID 1 or 2: `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.insertionOrderId - (Required) Required. The ID of the insertion order to list assigned targeting options for.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInsertionOrderAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', apiParams, clientConfig);

    /**
     * Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the insertion order belongs to.
     * @param {string} apiParams.insertionOrderId - (Required) Required. The ID of the insertion order the assigned targeting option will belong to.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', apiParams, clientConfig);

    /**
     * Deletes an assigned targeting option from an insertion order. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser the insertion order belongs to.
     * @param {string} apiParams.assignedTargetingOptionId - (Required) Required. The ID of the assigned targeting option to delete.
     * @param {string} apiParams.insertionOrderId - (Required) Required. The ID of the insertion order the assigned targeting option belongs to.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', apiParams, clientConfig);

    this.advertisers.invoices = {};

    /**
     * Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser to list invoices for.
     * @param {string} apiParams.issueMonth - The month to list the invoices for. If not set, the request will retrieve invoices for the previous month. Must be in the format YYYYMM.
     * @param {string} apiParams.loiSapinInvoiceType - Select type of invoice to retrieve for Loi Sapin advertisers. Only applicable to Loi Sapin advertisers. Will be ignored otherwise.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInvoices` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.invoices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/invoices', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the invoice currency used by an advertiser in a given month.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the advertiser to lookup currency for.
     * @param {string} apiParams.invoiceMonth - Month for which the currency is needed. If not set, the request will return existing currency settings for the advertiser. Must be in the format YYYYMM.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.invoices.lookupInvoiceCurrency = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/invoices:lookupInvoiceCurrency', 'GET', apiParams, clientConfig);

    this.advertisers.locationLists = {};

    /**
     * Gets a location list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the fetched location list belongs.
     * @param {string} apiParams.locationListId - (Required) Required. The ID of the location list to fetch.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.locationLists.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/locationLists/{+locationListId}', 'GET', apiParams, clientConfig);

    /**
     * Lists location lists based on a given advertiser id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the fetched location lists belong.
     * @param {string} apiParams.filter - Allows filtering by location list fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `locationType` Examples: * All regional location list: `locationType="TARGETING_LOCATION_TYPE_REGIONAL"` * All proximity location list: `locationType="TARGETING_LOCATION_TYPE_PROXIMITY"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `locationListId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. Defaults to `100` if not set. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLocationLists` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.locationLists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/locationLists', 'GET', apiParams, clientConfig);

    /**
     * Creates a new location list. Returns the newly created location list if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the location list belongs.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.locationLists.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/locationLists', 'POST', apiParams, clientConfig);

    /**
     * Updates a location list. Returns the updated location list if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the location lists belongs.
     * @param {string} apiParams.locationListId - (Required) Output only. The unique ID of the location list. Assigned by the system.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.locationLists.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/locationLists/{locationListId}', 'PATCH', apiParams, clientConfig);

    this.advertisers.locationLists.assignedLocations = {};

    /**
     * Lists locations assigned to a location list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the location list belongs.
     * @param {string} apiParams.filter - Allows filtering by location list assignment fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedLocationId` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.locationListId - (Required) Required. The ID of the location list to which these assignments are assigned.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `assignedLocationId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `assignedLocationId desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAssignedLocations` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.locationLists.assignedLocations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations', 'GET', apiParams, clientConfig);

    /**
     * Creates an assignment between a location and a location list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the location list belongs.
     * @param {string} apiParams.locationListId - (Required) Required. The ID of the location list for which the assignment will be created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.locationLists.assignedLocations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations', 'POST', apiParams, clientConfig);

    /**
     * Deletes the assignment between a location and a location list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the location list belongs.
     * @param {string} apiParams.assignedLocationId - (Required) Required. The ID of the assigned location to delete.
     * @param {string} apiParams.locationListId - (Required) Required. The ID of the location list to which this assignment is assigned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.locationLists.assignedLocations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations/{+assignedLocationId}', 'DELETE', apiParams, clientConfig);

    /**
     * Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in deletedAssignedLocations and then create the assigned locations provided in createdAssignedLocations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the location list belongs.
     * @param {string} apiParams.locationListId - (Required) Required. The ID of the location list to which these assignments are assigned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.locationLists.assignedLocations.bulkEdit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/locationLists/{+locationListId}/assignedLocations:bulkEdit', 'POST', apiParams, clientConfig);

    this.advertisers.negativeKeywordLists = {};

    /**
     * Gets a negative keyword list given an advertiser ID and a negative keyword list ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the fetched negative keyword list belongs.
     * @param {string} apiParams.negativeKeywordListId - (Required) Required. The ID of the negative keyword list to fetch.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.negativeKeywordLists.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/negativeKeywordLists/{+negativeKeywordListId}', 'GET', apiParams, clientConfig);

    /**
     * Lists negative keyword lists based on a given advertiser id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the fetched negative keyword lists belong.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. Defaults to `100` if not set. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListNegativeKeywordLists` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.negativeKeywordLists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/negativeKeywordLists', 'GET', apiParams, clientConfig);

    /**
     * Creates a new negative keyword list. Returns the newly created negative keyword list if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the negative keyword list will belong.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.negativeKeywordLists.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/negativeKeywordLists', 'POST', apiParams, clientConfig);

    /**
     * Updates a negative keyword list. Returns the updated negative keyword list if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the negative keyword list belongs.
     * @param {string} apiParams.negativeKeywordListId - (Required) Output only. The unique ID of the negative keyword list. Assigned by the system.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.negativeKeywordLists.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/negativeKeywordLists/{negativeKeywordListId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a negative keyword list given an advertiser ID and a negative keyword list ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the negative keyword list belongs.
     * @param {string} apiParams.negativeKeywordListId - (Required) Required. The ID of the negative keyword list to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.negativeKeywordLists.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/negativeKeywordLists/{+negativeKeywordListId}', 'DELETE', apiParams, clientConfig);

    this.advertisers.negativeKeywordLists.negativeKeywords = {};

    /**
     * Lists negative keywords in a negative keyword list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
     * @param {string} apiParams.filter - Allows filtering by negative keyword fields. Supported syntax: * Filter expressions for negative keywords can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `keywordValue` Examples: * All negative keywords for which the keyword value contains "google": `keywordValue : "google"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.negativeKeywordListId - (Required) Required. The ID of the parent negative keyword list to which the requested negative keywords belong.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `keywordValue` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `keywordValue desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `1000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListNegativeKeywords` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.negativeKeywordLists.negativeKeywords.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{+advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords', 'GET', apiParams, clientConfig);

    /**
     * Creates a negative keyword in a negative keyword list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
     * @param {string} apiParams.negativeKeywordListId - (Required) Required. The ID of the parent negative keyword list in which the negative keyword will be created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.negativeKeywordLists.negativeKeywords.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords', 'POST', apiParams, clientConfig);

    /**
     * Deletes a negative keyword from a negative keyword list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
     * @param {string} apiParams.keywordValue - (Required) Required. The keyword value of the negative keyword to delete.
     * @param {string} apiParams.negativeKeywordListId - (Required) Required. The ID of the parent negative keyword list to which the negative keyword belongs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.negativeKeywordLists.negativeKeywords.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords/{+keywordValue}', 'DELETE', apiParams, clientConfig);

    /**
     * Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
     * @param {string} apiParams.negativeKeywordListId - (Required) Required. The ID of the parent negative keyword list to which the negative keywords belong.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.negativeKeywordLists.negativeKeywords.bulkEdit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords:bulkEdit', 'POST', apiParams, clientConfig);

    /**
     * Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
     * @param {string} apiParams.negativeKeywordListId - (Required) Required. The ID of the parent negative keyword list to which the negative keywords belong.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.negativeKeywordLists.negativeKeywords.replace = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/advertisers/{advertiserId}/negativeKeywordLists/{+negativeKeywordListId}/negativeKeywords:replace', 'POST', apiParams, clientConfig);

    this.combinedAudiences = {};

    /**
     * Gets a combined audience.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that has access to the fetched combined audience.
     * @param {string} apiParams.combinedAudienceId - (Required) Required. The ID of the combined audience to fetch.
     * @param {string} apiParams.partnerId - The ID of the partner that has access to the fetched combined audience.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.combinedAudiences.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/combinedAudiences/{+combinedAudienceId}', 'GET', apiParams, clientConfig);

    /**
     * Lists combined audiences. The order is defined by the order_by parameter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that has access to the fetched combined audiences.
     * @param {string} apiParams.filter - Allows filtering by combined audience fields. Supported syntax: * Filter expressions for combined audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All combined audiences for which the display name contains "Google": `displayName : "Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `combinedAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCombinedAudiences` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - The ID of the partner that has access to the fetched combined audiences.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.combinedAudiences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/combinedAudiences', 'GET', apiParams, clientConfig);

    this.customBiddingAlgorithms = {};

    /**
     * Creates a rules reference object for an AlgorithmRules file. The resulting reference object provides a resource path where the AlgorithmRules file should be uploaded. This reference object should be included when creating a new CustomBiddingAlgorithmRules resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the parent custom bidding algorithm.
     * @param {string} apiParams.customBiddingAlgorithmId - (Required) Required. The ID of the custom bidding algorithm that owns the rules resource.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the parent custom bidding algorithm.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customBiddingAlgorithms.uploadRules = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}:uploadRules', 'GET', apiParams, clientConfig);

    /**
     * Gets a custom bidding algorithm.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the DV360 partner that has access to the custom bidding algorithm.
     * @param {string} apiParams.customBiddingAlgorithmId - (Required) Required. The ID of the custom bidding algorithm to fetch.
     * @param {string} apiParams.partnerId - The ID of the DV360 partner that has access to the custom bidding algorithm.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customBiddingAlgorithms.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}', 'GET', apiParams, clientConfig);

    /**
     * Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the DV360 advertiser that has access to the custom bidding algorithm.
     * @param {string} apiParams.filter - Allows filtering by custom bidding algorithm fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `customBiddingAlgorithmType` field must use the `EQUALS (=)` operator. * The `displayName` field must use the `HAS (:)` operator. Supported fields: * `customBiddingAlgorithmType` * `displayName` Examples: * All custom bidding algorithms for which the display name contains "politics": `displayName:"politics"`. * All custom bidding algorithms for which the type is "SCRIPT_BASED": `customBiddingAlgorithmType=SCRIPT_BASED` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingAlgorithms` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - The ID of the DV360 partner that has access to the custom bidding algorithm.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customBiddingAlgorithms.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms', 'GET', apiParams, clientConfig);

    /**
     * Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customBiddingAlgorithms.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful. Requests updating a custom bidding algorithm assigned to a line item will return an error.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customBiddingAlgorithmId - (Required) Output only. The unique ID of the custom bidding algorithm. Assigned by the system.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customBiddingAlgorithms.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}', 'PATCH', apiParams, clientConfig);

    /**
     * Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the parent custom bidding algorithm.
     * @param {string} apiParams.customBiddingAlgorithmId - (Required) Required. The ID of the custom bidding algorithm owns the script.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customBiddingAlgorithms.uploadScript = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}:uploadScript', 'GET', apiParams, clientConfig);

    this.customBiddingAlgorithms.rules = {};

    /**
     * Creates a new rules resource. Returns the newly created rules resource if successful. Requests creating a custom bidding rules resource under an algorithm assigned to a line item will return an error.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the parent custom bidding algorithm.
     * @param {string} apiParams.customBiddingAlgorithmId - (Required) Required. The ID of the custom bidding algorithm that owns the rules resource.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this rules resource.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customBiddingAlgorithms.rules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}/rules', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a rules resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the parent custom bidding algorithm.
     * @param {string} apiParams.customBiddingAlgorithmId - (Required) Required. The ID of the custom bidding algorithm that owns the rules resource.
     * @param {string} apiParams.customBiddingAlgorithmRulesId - (Required) Required. The ID of the rules resource to fetch.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the parent custom bidding algorithm.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customBiddingAlgorithms.rules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}/rules/{+customBiddingAlgorithmRulesId}', 'GET', apiParams, clientConfig);

    /**
     * Lists rules resources that belong to the given algorithm. The order is defined by the order_by parameter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the parent custom bidding algorithm.
     * @param {string} apiParams.customBiddingAlgorithmId - (Required) Required. The ID of the custom bidding algorithm that owns the rules resource.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `createTime desc` (default) The default sorting order is descending. To specify ascending order for a field, the suffix "desc" should be removed. Example: `createTime`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingAlgorithmRules` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the parent custom bidding algorithm.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customBiddingAlgorithms.rules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}/rules', 'GET', apiParams, clientConfig);

    this.customBiddingAlgorithms.scripts = {};

    /**
     * Creates a new custom bidding script. Returns the newly created script if successful. Requests creating a custom bidding script under an algorithm assigned to a line item will return an error.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the parent custom bidding algorithm.
     * @param {string} apiParams.customBiddingAlgorithmId - (Required) Required. The ID of the custom bidding algorithm that owns the script.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customBiddingAlgorithms.scripts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}/scripts', 'POST', apiParams, clientConfig);

    /**
     * Gets a custom bidding script.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the parent custom bidding algorithm.
     * @param {string} apiParams.customBiddingAlgorithmId - (Required) Required. The ID of the custom bidding algorithm owns the script.
     * @param {string} apiParams.customBiddingScriptId - (Required) Required. The ID of the custom bidding script to fetch.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customBiddingAlgorithms.scripts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}/scripts/{+customBiddingScriptId}', 'GET', apiParams, clientConfig);

    /**
     * Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the parent custom bidding algorithm.
     * @param {string} apiParams.customBiddingAlgorithmId - (Required) Required. The ID of the custom bidding algorithm owns the script.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `createTime desc` (default) The default sorting order is descending. To specify ascending order for a field, the suffix "desc" should be removed. Example: `createTime`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingScripts` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customBiddingAlgorithms.scripts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customBiddingAlgorithms/{+customBiddingAlgorithmId}/scripts', 'GET', apiParams, clientConfig);

    this.customLists = {};

    /**
     * Gets a custom list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the DV360 advertiser that has access to the fetched custom lists.
     * @param {string} apiParams.customListId - (Required) Required. The ID of the custom list to fetch.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customLists.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customLists/{+customListId}', 'GET', apiParams, clientConfig);

    /**
     * Lists custom lists. The order is defined by the order_by parameter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the DV360 advertiser that has access to the fetched custom lists.
     * @param {string} apiParams.filter - Allows filtering by custom list fields. Supported syntax: * Filter expressions for custom lists can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All custom lists for which the display name contains "Google": `displayName:"Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `customListId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomLists` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customLists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/customLists', 'GET', apiParams, clientConfig);

    this.firstPartyAndPartnerAudiences = {};

    /**
     * Gets a first party or partner audience.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that has access to the fetched first party and partner audience.
     * @param {string} apiParams.firstPartyAndPartnerAudienceId - (Required) Required. The ID of the first party and partner audience to fetch.
     * @param {string} apiParams.partnerId - The ID of the partner that has access to the fetched first party and partner audience.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.firstPartyAndPartnerAudiences.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/firstPartyAndPartnerAudiences/{+firstPartyAndPartnerAudienceId}', 'GET', apiParams, clientConfig);

    /**
     * Lists first party and partner audiences. The order is defined by the order_by parameter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that has access to the fetched first party and partner audiences.
     * @param {string} apiParams.filter - Optional. Allows filtering by first party and partner audience fields. Supported syntax: * Filter expressions for first party and partner audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All first party and partner audiences for which the display name contains "Google": `displayName:"Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Optional. Field by which to sort the list. Acceptable values are: * `FirstPartyAndPartnerAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Must be between `1` and `5000`. If unspecified, this value defaults to `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListFirstPartyAndPartnerAudiences` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - The ID of the partner that has access to the fetched first party and partner audiences.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.firstPartyAndPartnerAudiences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/firstPartyAndPartnerAudiences', 'GET', apiParams, clientConfig);

    /**
     * Creates a FirstPartyAndPartnerAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - Required. The ID of the advertiser under whom the FirstPartyAndPartnerAudience will be created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.firstPartyAndPartnerAudiences.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/firstPartyAndPartnerAudiences', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing FirstPartyAndPartnerAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - Required. The ID of the owner advertiser of the updated FirstPartyAndPartnerAudience.
     * @param {string} apiParams.firstPartyAndPartnerAudienceId - (Required) Identifier. The unique ID of the first party and partner audience. Assigned by the system.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update. Updates are only supported for the following fields: * `displayName` * `description` * `membershipDurationDays`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.firstPartyAndPartnerAudiences.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/firstPartyAndPartnerAudiences/{+firstPartyAndPartnerAudienceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.firstPartyAndPartnerAudienceId - (Required) Required. The ID of the Customer Match FirstPartyAndPartnerAudience whose members will be edited.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.firstPartyAndPartnerAudiences.editCustomerMatchMembers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/firstPartyAndPartnerAudiences/{+firstPartyAndPartnerAudienceId}:editCustomerMatchMembers', 'POST', apiParams, clientConfig);

    this.floodlightGroups = {};

    /**
     * Gets a Floodlight group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.floodlightGroupId - (Required) Required. The ID of the Floodlight group to fetch.
     * @param {string} apiParams.partnerId - Required. The partner context by which the Floodlight group is being accessed.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/floodlightGroups/{+floodlightGroupId}', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing Floodlight group. Returns the updated Floodlight group if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.floodlightGroupId - (Required) Output only. The unique ID of the Floodlight group. Assigned by the system.
     * @param {string} apiParams.partnerId - Required. The partner context by which the Floodlight group is being accessed.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/floodlightGroups/{floodlightGroupId}', 'PATCH', apiParams, clientConfig);

    this.floodlightGroups.floodlightActivities = {};

    /**
     * Gets a Floodlight activity.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.floodlightActivityId - (Required) Required. The ID of the Floodlight activity to fetch.
     * @param {string} apiParams.floodlightGroupId - (Required) Required. The ID of the parent Floodlight group to which the requested Floodlight activity belongs.
     * @param {string} apiParams.partnerId - Required. The ID of the partner through which the Floodlight activity is being accessed.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightGroups.floodlightActivities.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/floodlightGroups/{+floodlightGroupId}/floodlightActivities/{+floodlightActivityId}', 'GET', apiParams, clientConfig);

    /**
     * Lists Floodlight activities in a Floodlight group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.floodlightGroupId - (Required) Required. The ID of the parent Floodlight group to which the requested Floodlight activities belong.
     * @param {string} apiParams.orderBy - Optional. Field by which to sort the list. Acceptable values are: * `displayName` (default) * `floodlightActivityId` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListFloodlightActivities` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - Required. The ID of the partner through which the Floodlight activities are being accessed.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightGroups.floodlightActivities.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/floodlightGroups/{+floodlightGroupId}/floodlightActivities', 'GET', apiParams, clientConfig);

    this.googleAudiences = {};

    /**
     * Gets a Google audience.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that has access to the fetched Google audience.
     * @param {string} apiParams.googleAudienceId - (Required) Required. The ID of the Google audience to fetch.
     * @param {string} apiParams.partnerId - The ID of the partner that has access to the fetched Google audience.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.googleAudiences.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/googleAudiences/{+googleAudienceId}', 'GET', apiParams, clientConfig);

    /**
     * Lists Google audiences. The order is defined by the order_by parameter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that has access to the fetched Google audiences.
     * @param {string} apiParams.filter - Allows filtering by Google audience fields. Supported syntax: * Filter expressions for Google audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All Google audiences for which the display name contains "Google": `displayName:"Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `googleAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListGoogleAudiences` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - The ID of the partner that has access to the fetched Google audiences.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.googleAudiences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/googleAudiences', 'GET', apiParams, clientConfig);

    this.guaranteedOrders = {};

    /**
     * Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that the request is being made within.
     * @param {string} apiParams.partnerId - The ID of the partner that the request is being made within.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.guaranteedOrders.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/guaranteedOrders', 'POST', apiParams, clientConfig);

    /**
     * Gets a guaranteed order.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that has access to the guaranteed order.
     * @param {string} apiParams.guaranteedOrderId - (Required) Required. The ID of the guaranteed order to fetch. The ID is of the format `{exchange}-{legacy_guaranteed_order_id}`
     * @param {string} apiParams.partnerId - The ID of the partner that has access to the guaranteed order.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.guaranteedOrders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/guaranteedOrders/{+guaranteedOrderId}', 'GET', apiParams, clientConfig);

    /**
     * Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that has access to the guaranteed order.
     * @param {string} apiParams.filter - Allows filtering by guaranteed order fields. * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `guaranteed_order_id` * `exchange` * `display_name` * `status.entityStatus` Examples: * All active guaranteed orders: `status.entityStatus="ENTITY_STATUS_ACTIVE"` * Guaranteed orders belonging to Google Ad Manager or Rubicon exchanges: `exchange="EXCHANGE_GOOGLE_AD_MANAGER" OR exchange="EXCHANGE_RUBICON"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListGuaranteedOrders` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - The ID of the partner that has access to the guaranteed order.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.guaranteedOrders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/guaranteedOrders', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing guaranteed order. Returns the updated guaranteed order if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that the request is being made within.
     * @param {string} apiParams.guaranteedOrderId - (Required) Output only. The unique identifier of the guaranteed order. The guaranteed order IDs have the format `{exchange}-{legacy_guaranteed_order_id}`.
     * @param {string} apiParams.partnerId - The ID of the partner that the request is being made within.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.guaranteedOrders.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/guaranteedOrders/{+guaranteedOrderId}', 'PATCH', apiParams, clientConfig);

    /**
     * Edits read advertisers of a guaranteed order.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.guaranteedOrderId - (Required) Required. The ID of the guaranteed order to edit. The ID is of the format `{exchange}-{legacy_guaranteed_order_id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.guaranteedOrders.editGuaranteedOrderReadAccessors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/guaranteedOrders/{+guaranteedOrderId}:editGuaranteedOrderReadAccessors', 'POST', apiParams, clientConfig);

    this.inventorySourceGroups = {};

    /**
     * Gets an inventory source group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that has access to the inventory source group. If an inventory source group is partner-owned, only advertisers to which the group is explicitly shared can access the group.
     * @param {string} apiParams.inventorySourceGroupId - (Required) Required. The ID of the inventory source group to fetch.
     * @param {string} apiParams.partnerId - The ID of the partner that has access to the inventory source group. A partner cannot access an advertiser-owned inventory source group.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventorySourceGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups/{+inventorySourceGroupId}', 'GET', apiParams, clientConfig);

    /**
     * Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that has access to the inventory source group. If an inventory source group is partner-owned, only advertisers to which the group is explicitly shared can access the group.
     * @param {string} apiParams.filter - Allows filtering by inventory source group fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `inventorySourceGroupId` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) * `inventorySourceGroupId` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInventorySources` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - The ID of the partner that has access to the inventory source group. A partner cannot access advertiser-owned inventory source groups.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventorySourceGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups', 'GET', apiParams, clientConfig);

    /**
     * Creates a new inventory source group. Returns the newly created inventory source group if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the inventory source group. The parent partner will not have access to this group.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the inventory source group. Only this partner will have write access to this group. Only advertisers to which this group is explicitly shared will have read access to this group.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventorySourceGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups', 'POST', apiParams, clientConfig);

    /**
     * Updates an inventory source group. Returns the updated inventory source group if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the inventory source group. The parent partner does not have access to this group.
     * @param {string} apiParams.inventorySourceGroupId - (Required) Output only. The unique ID of the inventory source group. Assigned by the system.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the inventory source group. Only this partner has write access to this group.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventorySourceGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups/{inventorySourceGroupId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an inventory source group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the inventory source group. The parent partner does not have access to this group.
     * @param {string} apiParams.inventorySourceGroupId - (Required) Required. The ID of the inventory source group to delete.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the inventory source group. Only this partner has write access to this group.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventorySourceGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups/{+inventorySourceGroupId}', 'DELETE', apiParams, clientConfig);

    this.inventorySourceGroups.assignedInventorySources = {};

    /**
     * Lists inventory sources assigned to an inventory source group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that has access to the assignment. If the parent inventory source group is partner-owned, only advertisers to which the parent group is explicitly shared can access the assigned inventory source.
     * @param {string} apiParams.filter - Allows filtering by assigned inventory source fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedInventorySourceId` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.inventorySourceGroupId - (Required) Required. The ID of the inventory source group to which these assignments are assigned.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `assignedInventorySourceId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `assignedInventorySourceId desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAssignedInventorySources` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - The ID of the partner that has access to the assignment. If the parent inventory source group is advertiser-owned, the assignment cannot be accessed via a partner.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventorySourceGroups.assignedInventorySources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources', 'GET', apiParams, clientConfig);

    /**
     * Creates an assignment between an inventory source and an inventory source group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the parent inventory source group. The parent partner will not have access to this assigned inventory source.
     * @param {string} apiParams.inventorySourceGroupId - (Required) Required. The ID of the inventory source group to which the assignment will be assigned.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the parent inventory source group. Only this partner will have write access to this assigned inventory source.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventorySourceGroups.assignedInventorySources.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources', 'POST', apiParams, clientConfig);

    /**
     * Deletes the assignment between an inventory source and an inventory source group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the parent inventory source group. The parent partner does not have access to this assigned inventory source.
     * @param {string} apiParams.assignedInventorySourceId - (Required) Required. The ID of the assigned inventory source to delete.
     * @param {string} apiParams.inventorySourceGroupId - (Required) Required. The ID of the inventory source group to which this assignment is assigned.
     * @param {string} apiParams.partnerId - The ID of the partner that owns the parent inventory source group. Only this partner has write access to this assigned inventory source.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventorySourceGroups.assignedInventorySources.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources/{+assignedInventorySourceId}', 'DELETE', apiParams, clientConfig);

    /**
     * Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.inventorySourceGroupId - (Required) Required. The ID of the inventory source group to which the assignments are assigned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventorySourceGroups.assignedInventorySources.bulkEdit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySourceGroups/{+inventorySourceGroupId}/assignedInventorySources:bulkEdit', 'POST', apiParams, clientConfig);

    this.inventorySources = {};

    /**
     * Gets an inventory source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - Optional. The ID of the DV360 advertiser to which the fetched inventory source is permissioned. If the user only has access to the advertiser and not the parent partner, use this field to specify the relevant advertiser.
     * @param {string} apiParams.inventorySourceId - (Required) Required. The ID of the inventory source to fetch.
     * @param {string} apiParams.partnerId - Required. The ID of the DV360 partner to which the fetched inventory source is permissioned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventorySources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySources/{+inventorySourceId}', 'GET', apiParams, clientConfig);

    /**
     * Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that has access to the inventory source.
     * @param {string} apiParams.filter - Allows filtering by inventory source fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `status.entityStatus` * `commitment` * `deliveryMethod` * `rateDetails.rateType` * `exchange` Examples: * All active inventory sources: `status.entityStatus="ENTITY_STATUS_ACTIVE"` * Inventory sources belonging to Google Ad Manager or Rubicon exchanges: `exchange="EXCHANGE_GOOGLE_AD_MANAGER" OR exchange="EXCHANGE_RUBICON"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInventorySources` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - The ID of the partner that has access to the inventory source.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventorySources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySources', 'GET', apiParams, clientConfig);

    /**
     * Creates a new inventory source. Returns the newly created inventory source if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that the request is being made within.
     * @param {string} apiParams.partnerId - The ID of the partner that the request is being made within.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventorySources.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySources', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing inventory source. Returns the updated inventory source if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that the request is being made within.
     * @param {string} apiParams.inventorySourceId - (Required) Output only. The unique ID of the inventory source. Assigned by the system.
     * @param {string} apiParams.partnerId - The ID of the partner that the request is being made within.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventorySources.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySources/{+inventorySourceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.inventorySourceId - (Required) Required. The ID of inventory source to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventorySources.editInventorySourceReadWriteAccessors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/inventorySources/{+inventorySourceId}:editInventorySourceReadWriteAccessors', 'POST', apiParams, clientConfig);

    this.partners = {};

    /**
     * Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.partnerId - (Required) Required. The ID of the partner.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.editAssignedTargetingOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}:editAssignedTargetingOptions', 'POST', apiParams, clientConfig);

    /**
     * Gets a partner.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.partnerId - (Required) Required. The ID of the partner to fetch.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}', 'GET', apiParams, clientConfig);

    /**
     * Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Allows filtering by partner fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `entityStatus` Examples: * All active partners: `entityStatus="ENTITY_STATUS_ACTIVE"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListPartners` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners', 'GET', apiParams, clientConfig);

    this.partners.channels = {};

    /**
     * Gets a channel for a partner or advertiser.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the fetched channel.
     * @param {string} apiParams.channelId - (Required) Required. The ID of the channel to fetch.
     * @param {string} apiParams.partnerId - (Required) The ID of the partner that owns the fetched channel.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.channels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/channels/{+channelId}', 'GET', apiParams, clientConfig);

    /**
     * Lists channels for a partner or advertiser.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the channels.
     * @param {string} apiParams.filter - Allows filtering by channel fields. Supported syntax: * Filter expressions for channel can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All channels for which the display name contains "google": `displayName : "google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) * `channelId` The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListChannels` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - (Required) The ID of the partner that owns the channels.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.channels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/channels', 'GET', apiParams, clientConfig);

    /**
     * Creates a new channel. Returns the newly created channel if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the created channel.
     * @param {string} apiParams.partnerId - (Required) The ID of the partner that owns the created channel.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.channels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/channels', 'POST', apiParams, clientConfig);

    /**
     * Updates a channel. Returns the updated channel if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the created channel.
     * @param {string} apiParams.channelId - (Required) Output only. The unique ID of the channel. Assigned by the system.
     * @param {string} apiParams.partnerId - (Required) The ID of the partner that owns the created channel.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.channels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/channels/{channelId}', 'PATCH', apiParams, clientConfig);

    this.partners.channels.sites = {};

    /**
     * Lists sites in a channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the parent channel.
     * @param {string} apiParams.channelId - (Required) Required. The ID of the parent channel to which the requested sites belong.
     * @param {string} apiParams.filter - Allows filtering by site fields. Supported syntax: * Filter expressions for site retrieval can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `urlOrAppId` Examples: * All sites for which the URL or app ID contains "google": `urlOrAppId : "google"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `urlOrAppId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `urlOrAppId desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `10000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListSites` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - (Required) The ID of the partner that owns the parent channel.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.channels.sites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/channels/{+channelId}/sites', 'GET', apiParams, clientConfig);

    /**
     * Creates a site in a channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the parent channel.
     * @param {string} apiParams.channelId - (Required) Required. The ID of the parent channel in which the site will be created.
     * @param {string} apiParams.partnerId - (Required) The ID of the partner that owns the parent channel.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.channels.sites.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{partnerId}/channels/{+channelId}/sites', 'POST', apiParams, clientConfig);

    /**
     * Deletes a site from a channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - The ID of the advertiser that owns the parent channel.
     * @param {string} apiParams.channelId - (Required) Required. The ID of the parent channel to which the site belongs.
     * @param {string} apiParams.partnerId - (Required) The ID of the partner that owns the parent channel.
     * @param {string} apiParams.urlOrAppId - (Required) Required. The URL or app ID of the site to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.channels.sites.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{partnerId}/channels/{+channelId}/sites/{+urlOrAppId}', 'DELETE', apiParams, clientConfig);

    /**
     * Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.channelId - (Required) Required. The ID of the parent channel to which the sites belong.
     * @param {string} apiParams.partnerId - (Required) The ID of the partner that owns the parent channel.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.channels.sites.bulkEdit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{partnerId}/channels/{+channelId}/sites:bulkEdit', 'POST', apiParams, clientConfig);

    /**
     * Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.channelId - (Required) Required. The ID of the parent channel whose sites will be replaced.
     * @param {string} apiParams.partnerId - (Required) The ID of the partner that owns the parent channel.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.channels.sites.replace = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{partnerId}/channels/{+channelId}/sites:replace', 'POST', apiParams, clientConfig);

    this.partners.targetingTypes = {};

    this.partners.targetingTypes.assignedTargetingOptions = {};

    /**
     * Gets a single targeting option assigned to a partner.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.assignedTargetingOptionId - (Required) Required. An identifier unique to the targeting type in this partner that identifies the assigned targeting option being requested.
     * @param {string} apiParams.partnerId - (Required) Required. The ID of the partner.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.targetingTypes.assignedTargetingOptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'GET', apiParams, clientConfig);

    /**
     * Lists the targeting options assigned to a partner.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` Examples: * `AssignedTargetingOption` resource with ID 123456: `assignedTargetingOptionId="123456"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListPartnerAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.partnerId - (Required) Required. The ID of the partner.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_CHANNEL`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.targetingTypes.assignedTargetingOptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'GET', apiParams, clientConfig);

    /**
     * Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.partnerId - (Required) Required. The ID of the partner.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.targetingTypes.assignedTargetingOptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions', 'POST', apiParams, clientConfig);

    /**
     * Deletes an assigned targeting option from a partner.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.assignedTargetingOptionId - (Required) Required. The ID of the assigned targeting option to delete.
     * @param {string} apiParams.partnerId - (Required) Required. The ID of the partner.
     * @param {string} apiParams.targetingType - (Required) Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.partners.targetingTypes.assignedTargetingOptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/partners/{+partnerId}/targetingTypes/{+targetingType}/assignedTargetingOptions/{+assignedTargetingOptionId}', 'DELETE', apiParams, clientConfig);

    this.sdfdownloadtasks = {};

    /**
     * Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with `sdfdownloadtasks.operations.get`. Any errors can be found in the error.message. Note that error.details is expected to be empty.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sdfdownloadtasks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/sdfdownloadtasks', 'POST', apiParams, clientConfig);

    this.sdfdownloadtasks.operations = {};

    /**
     * Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sdfdownloadtasks.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+name}', 'GET', apiParams, clientConfig);

    this.targetingTypes = {};

    this.targetingTypes.targetingOptions = {};

    /**
     * Gets a single targeting option.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - Required. The Advertiser this request is being made in the context of.
     * @param {string} apiParams.targetingOptionId - (Required) Required. The ID of the of targeting option to retrieve.
     * @param {string} apiParams.targetingType - (Required) Required. The type of targeting option to retrieve. Accepted values are: * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.targetingTypes.targetingOptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/targetingTypes/{+targetingType}/targetingOptions/{+targetingOptionId}', 'GET', apiParams, clientConfig);

    /**
     * Lists targeting options of a given type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - Required. The Advertiser this request is being made in the context of.
     * @param {string} apiParams.filter - Allows filtering by targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `OR` logical operators. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `carrierAndIspDetails.type` * `geoRegionDetails.geoRegionType` * `targetingOptionId` Examples: * All `GEO REGION` targeting options that belong to sub type `GEO_REGION_TYPE_COUNTRY` or `GEO_REGION_TYPE_STATE`: `geoRegionDetails.geoRegionType="GEO_REGION_TYPE_COUNTRY" OR geoRegionDetails.geoRegionType="GEO_REGION_TYPE_STATE"` * All `CARRIER AND ISP` targeting options that belong to sub type `CARRIER_AND_ISP_TYPE_CARRIER`: `carrierAndIspDetails.type="CARRIER_AND_ISP_TYPE_CARRIER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `targetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingOptionId desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListTargetingOptions` method. If not specified, the first page of results will be returned.
     * @param {string} apiParams.targetingType - (Required) Required. The type of targeting option to be listed. Accepted values are: * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.targetingTypes.targetingOptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/targetingTypes/{+targetingType}/targetingOptions', 'GET', apiParams, clientConfig);

    /**
     * Searches for targeting options of a given type based on the given search terms.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.targetingType - (Required) Required. The type of targeting options to retrieve. Accepted values are: * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_BUSINESS_CHAIN`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.targetingTypes.targetingOptions.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/targetingTypes/{+targetingType}/targetingOptions:search', 'POST', apiParams, clientConfig);

    this.users = {};

    /**
     * Gets a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) Required. The ID of the user to fetch.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/users/{+userId}', 'GET', apiParams, clientConfig);

    /**
     * Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Allows filtering by user fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `displayName` and `email` fields must use the `HAS (:)` operator. * The `lastLoginTime` field must use either the `LESS THAN OR EQUAL TO (<=)` or `GREATER THAN OR EQUAL TO (>=)` operator. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `assignedUserRole.advertiserId` * `assignedUserRole.entityType`: This is synthetic field of `AssignedUserRole` used for filtering. Identifies the type of entity to which the user role is assigned. Valid values are `Partner` and `Advertiser`. * `assignedUserRole.parentPartnerId`: This is a synthetic field of `AssignedUserRole` used for filtering. Identifies the parent partner of the entity to which the user role is assigned. * `assignedUserRole.partnerId` * `assignedUserRole.userRole` * `displayName` * `email` * `lastLoginTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * The user with `displayName` containing "foo": `displayName:"foo"` * The user with `email` containing "bar": `email:"bar"` * All users with standard user roles: `assignedUserRole.userRole="STANDARD"` * All users with user roles for partner 123: `assignedUserRole.partnerId="123"` * All users with user roles for advertiser 123: `assignedUserRole.advertiserId="123"` * All users with partner level user roles: `entityType="PARTNER"` * All users with user roles for partner 123 and advertisers under partner 123: `parentPartnerId="123"` * All users that last logged in on or after 2023-01-01T00:00:00Z (format of ISO 8601): `lastLoginTime>="2023-01-01T00:00:00Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
     * @param {string} apiParams.orderBy - Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
     * @param {integer} apiParams.pageSize - Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListUsers` method. If not specified, the first page of results will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/users', 'GET', apiParams, clientConfig);

    /**
     * Creates a new user. Returns the newly created user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/users', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing user. Returns the updated user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {string} apiParams.userId - (Required) Output only. The unique ID of the user. Assigned by the system.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/users/{+userId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) Required. The ID of the user to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/users/{+userId}', 'DELETE', apiParams, clientConfig);

    /**
     * Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.userId - (Required) Required. The ID of the user to which the assigned user roles belong.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.bulkEditAssignedUserRoles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/users/{+userId}:bulkEditAssignedUserRoles', 'POST', apiParams, clientConfig);

    this.media = {};

    /**
     * Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Name of the media that is being downloaded. See ReadRequest.resource_name.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.media.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/media/{+resourceName}' : 'media/{+resourceName}';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Name of the media that is being downloaded. See ReadRequest.resource_name.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.media.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('download/{+resourceName}', 'GET', apiParams, clientConfig);

    this.sdfuploadtasks = {};

    this.sdfuploadtasks.operations = {};

    /**
     * Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sdfuploadtasks.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/{+name}', 'GET', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
