
/**
 * Google Apps Script client library for the Real-time Bidding API
 * Documentation URL: https://developers.google.com/authorized-buyers/apis/realtimebidding/reference/rest/
 * @class
 */
class Realtimebidding {
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
    this._rootUrl = 'https://realtimebidding.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.bidders = {};

    /**
     * Gets a bidder account by its name.
     * @param {string} params.name - (Required) Required. Name of the bidder to get. Format: `bidders/{bidderAccountId}`
     * @return {object} The API response object.
     */
    this.bidders.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all the bidder accounts that belong to the caller.
     * @param {integer} params.pageSize - The maximum number of bidders to return. If unspecified, at most 100 bidders will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. This value is received from a previous `ListBidders` call in ListBiddersResponse.nextPageToken.
     * @return {object} The API response object.
     */
    this.bidders.list = (params) => this._makeRequest('v1/bidders', 'GET', params);

    this.bidders.endpoints = {};

    /**
     * Gets a bidder endpoint by its name.
     * @param {string} params.name - (Required) Required. Name of the bidder endpoint to get. Format: `bidders/{bidderAccountId}/endpoints/{endpointId}`
     * @return {object} The API response object.
     */
    this.bidders.endpoints.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all the bidder's endpoints.
     * @param {integer} params.pageSize - The maximum number of endpoints to return. If unspecified, at most 100 endpoints will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. This value is received from a previous `ListEndpoints` call in ListEndpointsResponse.nextPageToken.
     * @param {string} params.parent - (Required) Required. Name of the bidder whose endpoints will be listed. Format: `bidders/{bidderAccountId}`
     * @return {object} The API response object.
     */
    this.bidders.endpoints.list = (params) => this._makeRequest('v1/{+parent}/endpoints', 'GET', params);

    /**
     * Updates a bidder's endpoint.
     * @param {string} params.name - (Required) Output only. Name of the endpoint resource that must follow the pattern `bidders/{bidderAccountId}/endpoints/{endpointId}`, where {bidderAccountId} is the account ID of the bidder who operates this endpoint, and {endpointId} is a unique ID assigned by the server.
     * @param {string} params.updateMask - Field mask to use for partial in-place updates.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.endpoints.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.bidders.creatives = {};

    /**
     * Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
     * @param {string} params.filter - Query string to filter creatives. If no filter is specified, all active creatives will be returned. Example: 'accountId=12345 AND (dealsStatus:DISAPPROVED AND disapprovalReason:UNACCEPTABLE_CONTENT) OR declaredAttributes:IS_COOKIE_TARGETED'
     * @param {integer} params.pageSize - Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method. Page tokens for continued pages are valid for up to five hours, counting from the call to 'ListCreatives' for the first page.
     * @param {string} params.parent - (Required) Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId}` or `bidders/{bidderAccountId}`. For `buyers/{buyerAccountId}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId}`, for example, for all creatives pertaining to bidder (`123`), use `bidders/123`.
     * @param {string} params.view - Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
     * @return {object} The API response object.
     */
    this.bidders.creatives.list = (params) => this._makeRequest('v1/{+parent}/creatives', 'GET', params);

    /**
     * Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
     * @param {string} params.parent - (Required) Required. To watch all creatives pertaining to the bidder and all its child seat accounts, the bidder must follow the pattern `bidders/{bidderAccountId}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.creatives.watch = (params) => this._makeRequest('v1/{+parent}/creatives:watch', 'POST', params);

    this.bidders.pretargetingConfigs = {};

    /**
     * Lists all pretargeting configurations for a single bidder.
     * @param {integer} params.pageSize - The maximum number of pretargeting configurations to return. If unspecified, at most 10 pretargeting configurations will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. This value is received from a previous `ListPretargetingConfigs` call in ListPretargetingConfigsResponse.nextPageToken.
     * @param {string} params.parent - (Required) Required. Name of the bidder whose pretargeting configurations will be listed. Format: bidders/{bidderAccountId}
     * @return {object} The API response object.
     */
    this.bidders.pretargetingConfigs.list = (params) => this._makeRequest('v1/{+parent}/pretargetingConfigs', 'GET', params);

    /**
     * Gets a pretargeting configuration.
     * @param {string} params.name - (Required) Required. Name of the pretargeting configuration to get. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
     * @return {object} The API response object.
     */
    this.bidders.pretargetingConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
     * @param {string} params.parent - (Required) Required. Name of the bidder to create the pretargeting configuration for. Format: bidders/{bidderAccountId}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.pretargetingConfigs.create = (params) => this._makeRequest('v1/{+parent}/pretargetingConfigs', 'POST', params);

    /**
     * Updates a pretargeting configuration.
     * @param {string} params.name - (Required) Output only. Name of the pretargeting configuration that must follow the pattern `bidders/{bidder_account_id}/pretargetingConfigs/{config_id}`
     * @param {string} params.updateMask - Field mask to use for partial in-place updates.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.pretargetingConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a pretargeting configuration.
     * @param {string} params.name - (Required) Required. The name of the pretargeting configuration to delete. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
     * @return {object} The API response object.
     */
    this.bidders.pretargetingConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Activates a pretargeting configuration.
     * @param {string} params.name - (Required) Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.pretargetingConfigs.activate = (params) => this._makeRequest('v1/{+name}:activate', 'POST', params);

    /**
     * Suspends a pretargeting configuration.
     * @param {string} params.name - (Required) Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.pretargetingConfigs.suspend = (params) => this._makeRequest('v1/{+name}:suspend', 'POST', params);

    /**
     * Adds targeted sites to the pretargeting configuration.
     * @param {string} params.pretargetingConfig - (Required) Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.pretargetingConfigs.addTargetedSites = (params) => this._makeRequest('v1/{+pretargetingConfig}:addTargetedSites', 'POST', params);

    /**
     * Removes targeted sites from the pretargeting configuration.
     * @param {string} params.pretargetingConfig - (Required) Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.pretargetingConfigs.removeTargetedSites = (params) => this._makeRequest('v1/{+pretargetingConfig}:removeTargetedSites', 'POST', params);

    /**
     * Adds targeted apps to the pretargeting configuration.
     * @param {string} params.pretargetingConfig - (Required) Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.pretargetingConfigs.addTargetedApps = (params) => this._makeRequest('v1/{+pretargetingConfig}:addTargetedApps', 'POST', params);

    /**
     * Removes targeted apps from the pretargeting configuration.
     * @param {string} params.pretargetingConfig - (Required) Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.pretargetingConfigs.removeTargetedApps = (params) => this._makeRequest('v1/{+pretargetingConfig}:removeTargetedApps', 'POST', params);

    /**
     * Adds targeted publishers to the pretargeting config.
     * @param {string} params.pretargetingConfig - (Required) Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.pretargetingConfigs.addTargetedPublishers = (params) => this._makeRequest('v1/{+pretargetingConfig}:addTargetedPublishers', 'POST', params);

    /**
     * Removes targeted publishers from the pretargeting config.
     * @param {string} params.pretargetingConfig - (Required) Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.pretargetingConfigs.removeTargetedPublishers = (params) => this._makeRequest('v1/{+pretargetingConfig}:removeTargetedPublishers', 'POST', params);

    this.bidders.publisherConnections = {};

    /**
     * Lists publisher connections for a given bidder.
     * @param {string} params.filter - Query string to filter publisher connections. Connections can be filtered by `displayName`, `publisherPlatform`, and `biddingState`. If no filter is specified, all publisher connections will be returned. Example: 'displayName="Great Publisher*" AND publisherPlatform=ADMOB AND biddingState != PENDING' See https://google.aip.dev/160 for more information about filtering syntax.
     * @param {string} params.orderBy - Order specification by which results should be sorted. If no sort order is specified, the results will be returned in alphabetic order based on the publisher's publisher code. Results can be sorted by `createTime`. Example: 'createTime DESC'.
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested (due to timeout constraint) even if more are available through another call. If unspecified, the server will pick an appropriate default. Acceptable values are 1 to 5000, inclusive.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListPublisherConnectionsResponse.nextPageToken returned from the previous call to the 'ListPublisherConnections' method.
     * @param {string} params.parent - (Required) Required. Name of the bidder for which publishers have initiated connections. The pattern for this resource is `bidders/{bidder}` where `{bidder}` represents the account ID of the bidder.
     * @return {object} The API response object.
     */
    this.bidders.publisherConnections.list = (params) => this._makeRequest('v1/{+parent}/publisherConnections', 'GET', params);

    /**
     * Gets a publisher connection.
     * @param {string} params.name - (Required) Required. Name of the publisher whose connection information is to be retrieved. In the pattern `bidders/{bidder}/publisherConnections/{publisher}` where `{bidder}` is the account ID of the bidder, and `{publisher}` is the ads.txt/app-ads.txt publisher ID. See publisherConnection.name.
     * @return {object} The API response object.
     */
    this.bidders.publisherConnections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Batch approves multiple publisher connections.
     * @param {string} params.parent - (Required) Required. The bidder for whom publisher connections will be approved. Format: `bidders/{bidder}` where `{bidder}` is the account ID of the bidder.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.publisherConnections.batchApprove = (params) => this._makeRequest('v1/{+parent}/publisherConnections:batchApprove', 'POST', params);

    /**
     * Batch rejects multiple publisher connections.
     * @param {string} params.parent - (Required) Required. The bidder for whom publisher connections will be rejected. Format: `bidders/{bidder}` where `{bidder}` is the account ID of the bidder.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.publisherConnections.batchReject = (params) => this._makeRequest('v1/{+parent}/publisherConnections:batchReject', 'POST', params);

    this.buyers = {};

    /**
     * Gets a buyer account by its name.
     * @param {string} params.name - (Required) Required. Name of the buyer to get. Format: `buyers/{buyerId}`
     * @return {object} The API response object.
     */
    this.buyers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all buyer account information the calling buyer user or service account is permissioned to manage.
     * @param {integer} params.pageSize - The maximum number of buyers to return. If unspecified, at most 100 buyers will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. This value is received from a previous `ListBuyers` call in ListBuyersResponse.nextPageToken.
     * @return {object} The API response object.
     */
    this.buyers.list = (params) => this._makeRequest('v1/buyers', 'GET', params);

    /**
     * This has been sunset as of October 2023, and will return an error response if called. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
     * @param {string} params.name - (Required) Required. To fetch the remarketing tag for an account, the name must follow the pattern `buyers/{accountId}`, where `{accountId}` represents the ID of the buyer that owns the remarketing tag. For a bidder accessing the remarketing tag on behalf of a child seat buyer, `{accountId}` should represent the ID of the child seat buyer. To fetch the remarketing tag for a specific user list, the name must follow the pattern `buyers/{accountId}/userLists/{userListId}`. See UserList.name.
     * @return {object} The API response object.
     */
    this.buyers.getRemarketingTag = (params) => this._makeRequest('v1/{+name}:getRemarketingTag', 'GET', params);

    this.buyers.creatives = {};

    /**
     * Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
     * @param {string} params.filter - Query string to filter creatives. If no filter is specified, all active creatives will be returned. Example: 'accountId=12345 AND (dealsStatus:DISAPPROVED AND disapprovalReason:UNACCEPTABLE_CONTENT) OR declaredAttributes:IS_COOKIE_TARGETED'
     * @param {integer} params.pageSize - Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method. Page tokens for continued pages are valid for up to five hours, counting from the call to 'ListCreatives' for the first page.
     * @param {string} params.parent - (Required) Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId}` or `bidders/{bidderAccountId}`. For `buyers/{buyerAccountId}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId}`, for example, for all creatives pertaining to bidder (`123`), use `bidders/123`.
     * @param {string} params.view - Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
     * @return {object} The API response object.
     */
    this.buyers.creatives.list = (params) => this._makeRequest('v1/{+parent}/creatives', 'GET', params);

    /**
     * Gets a creative.
     * @param {string} params.name - (Required) Required. Name of the creative to retrieve. See creative.name.
     * @param {string} params.view - Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
     * @return {object} The API response object.
     */
    this.buyers.creatives.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a creative.
     * @param {string} params.parent - (Required) Required. The name of the parent buyer that the new creative belongs to that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns a creative. For a bidder accessing creatives on behalf of a child seat buyer, `{buyerAccountId}` should represent the account ID of the child seat buyer.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.creatives.create = (params) => this._makeRequest('v1/{+parent}/creatives', 'POST', params);

    /**
     * Updates a creative.
     * @param {string} params.name - (Required) Output only. Name of the creative. Follows the pattern `buyers/{buyer}/creatives/{creative}`, where `{buyer}` represents the account ID of the buyer who owns the creative, and `{creative}` is the buyer-specific creative ID that references this creative in the bid response.
     * @param {string} params.updateMask - Field mask to use for partial in-place updates.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.creatives.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.buyers.userLists = {};

    /**
     * Gets a user list by its name.
     * @param {string} params.name - (Required) Required. The name of the user list to be retrieved. See UserList.name.
     * @return {object} The API response object.
     */
    this.buyers.userLists.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists the user lists visible to the current user.
     * @param {integer} params.pageSize - The number of results to return per page.
     * @param {string} params.pageToken - Continuation page token as received from a previous response.
     * @param {string} params.parent - (Required) Required. The name of the parent buyer for the user lists to be returned that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns user lists. For a bidder accessing user lists on behalf of a child seat buyer , `{buyerAccountId}` should represent the account ID of the child seat buyer.
     * @return {object} The API response object.
     */
    this.buyers.userLists.list = (params) => this._makeRequest('v1/{+parent}/userLists', 'GET', params);

    /**
     * Creates a new user list.
     * @param {string} params.parent - (Required) Required. The name of the parent buyer of the user list to be retrieved, which must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyerAccountId}` should represent the account ID of the child seat buyer.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.userLists.create = (params) => this._makeRequest('v1/{+parent}/userLists', 'POST', params);

    /**
     * Updates the given user list. Only user lists with URLRestrictions can be updated.
     * @param {string} params.name - (Required) Output only. Name of the user list that must follow the pattern `buyers/{buyer}/userLists/{user_list}`, where `{buyer}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer}` represents the account ID of the child seat buyer. `{user_list}` is an int64 identifier assigned by Google to uniquely identify a user list.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.userLists.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Changes the status of a user list to OPEN. This allows new users to be added to the user list.
     * @param {string} params.name - (Required) Required. The name of the user list to open. See UserList.name
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.userLists.open = (params) => this._makeRequest('v1/{+name}:open', 'POST', params);

    /**
     * Changes the status of a user list to CLOSED. This prevents new users from being added to the user list.
     * @param {string} params.name - (Required) Required. The name of the user list to close. See UserList.name
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.userLists.close = (params) => this._makeRequest('v1/{+name}:close', 'POST', params);

    /**
     * This has been sunset as of October 2023, and will return an error response if called. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
     * @param {string} params.name - (Required) Required. To fetch the remarketing tag for an account, the name must follow the pattern `buyers/{accountId}`, where `{accountId}` represents the ID of the buyer that owns the remarketing tag. For a bidder accessing the remarketing tag on behalf of a child seat buyer, `{accountId}` should represent the ID of the child seat buyer. To fetch the remarketing tag for a specific user list, the name must follow the pattern `buyers/{accountId}/userLists/{userListId}`. See UserList.name.
     * @return {object} The API response object.
     */
    this.buyers.userLists.getRemarketingTag = (params) => this._makeRequest('v1/{+name}:getRemarketingTag', 'GET', params);
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
        url = url.replace(placeholder, remainingParams[paramName]);
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
