
/**
 * Google Apps Script client library for the Recommendations AI (Beta)
 * Documentation URL: https://cloud.google.com/recommendations-ai/docs
 * @class
 */
class Recommendationengine {
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
    this._rootUrl = 'https://recommendationengine.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.catalogs = {};

    /**
     * Lists all the catalog configurations associated with the project.
     * @param {integer} params.pageSize - Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListCatalogs` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The account resource name with an associated location.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.list = (params) => this._makeRequest('v1beta1/{+parent}/catalogs', 'GET', params);

    /**
     * Updates the catalog configuration.
     * @param {string} params.name - (Required) The fully qualified resource name of the catalog.
     * @param {string} params.updateMask - Optional. Indicates which fields in the provided 'catalog' to update. If not set, will only update the catalog_item_level_config field. Currently only fields that can be updated are catalog_item_level_config.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.catalogs.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.catalogs.eventStores = {};

    this.projects.locations.catalogs.eventStores.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.eventStores.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.eventStores.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations = {};

    /**
     * Register an API key for use with predict method.
     * @param {string} params.parent - (Required) Required. The parent resource path. `projects/*\/locations/global/catalogs/default_catalog/eventStores/default_event_store`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.create = (params) => this._makeRequest('v1beta1/{+parent}/predictionApiKeyRegistrations', 'POST', params);

    /**
     * List the registered apiKeys for use with predict method.
     * @param {integer} params.pageSize - Optional. Maximum number of results to return per page. If unset, the service will choose a reasonable default.
     * @param {string} params.pageToken - Optional. The previous `ListPredictionApiKeyRegistration.nextPageToken`.
     * @param {string} params.parent - (Required) Required. The parent placement resource name such as `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.list = (params) => this._makeRequest('v1beta1/{+parent}/predictionApiKeyRegistrations', 'GET', params);

    /**
     * Unregister an apiKey from using for predict method.
     * @param {string} params.name - (Required) Required. The API key to unregister including full resource path. `projects/*\/locations/global/catalogs/default_catalog/eventStores/default_event_store/predictionApiKeyRegistrations/`
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.catalogs.eventStores.placements = {};

    /**
     * Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
     * @param {string} params.name - (Required)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.eventStores.placements.predict = (params) => this._makeRequest('v1beta1/{+name}:predict', 'POST', params);

    this.projects.locations.catalogs.eventStores.userEvents = {};

    /**
     * Writes a single user event.
     * @param {string} params.parent - (Required) Required. The parent eventStore resource name, such as "projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.eventStores.userEvents.write = (params) => this._makeRequest('v1beta1/{+parent}/userEvents:write', 'POST', params);

    /**
     * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
     * @param {string} params.ets - Optional. The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
     * @param {string} params.parent - (Required) Required. The parent eventStore name, such as `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`.
     * @param {string} params.uri - Optional. The url including cgi-parameters but excluding the hash fragment. The URL must be truncated to 1.5K bytes to conservatively be under the 2K bytes. This is often more useful than the referer url, because many browsers only send the domain for 3rd party requests.
     * @param {string} params.userEvent - Required. URL encoded UserEvent proto.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.eventStores.userEvents.collect = (params) => this._makeRequest('v1beta1/{+parent}/userEvents:collect', 'GET', params);

    /**
     * Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
     * @param {string} params.filter - Optional. Filtering expression to specify restrictions over returned events. This is a sequence of terms, where each term applies some kind of a restriction to the returned user events. Use this expression to restrict results to a specific time range, or filter events by eventType. eg: eventTime > "2012-04-23T18:25:43.511Z" eventsMissingCatalogItems eventTime<"2012-04-23T18:25:43.511Z" eventType=search We expect only 3 types of fields: * eventTime: this can be specified a maximum of 2 times, once with a less than operator and once with a greater than operator. The eventTime restrict should result in one contiguous valid eventTime range. * eventType: only 1 eventType restriction can be specified. * eventsMissingCatalogItems: specififying this will restrict results to events for which catalog items were not found in the catalog. The default behavior is to return only those events for which catalog items were found. Some examples of valid filters expressions: * Example 1: eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z" * Example 2: eventTime > "2012-04-23T18:25:43.511Z" eventType = detail-page-view * Example 3: eventsMissingCatalogItems eventType = search eventTime < "2018-04-23T18:30:43.511Z" * Example 4: eventTime > "2012-04-23T18:25:43.511Z" * Example 5: eventType = search * Example 6: eventsMissingCatalogItems
     * @param {integer} params.pageSize - Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default.
     * @param {string} params.pageToken - Optional. The previous ListUserEventsResponse.next_page_token.
     * @param {string} params.parent - (Required) Required. The parent eventStore resource name, such as `projects/*\/locations/*\/catalogs/default_catalog/eventStores/default_event_store`.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.eventStores.userEvents.list = (params) => this._makeRequest('v1beta1/{+parent}/userEvents', 'GET', params);

    /**
     * Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
     * @param {string} params.parent - (Required) Required. The resource name of the event_store under which the events are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}/eventStores/${eventStoreId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.eventStores.userEvents.purge = (params) => this._makeRequest('v1beta1/{+parent}/userEvents:purge', 'POST', params);

    /**
     * Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
     * @param {string} params.parent - (Required) Required. `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.eventStores.userEvents.import = (params) => this._makeRequest('v1beta1/{+parent}/userEvents:import', 'POST', params);

    /**
     * Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
     * @param {string} params.parent - (Required) Required. Full resource name of user event, such as `projects/*\/locations/*\/catalogs/default_catalog/eventStores/default_event_store`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.eventStores.userEvents.rejoin = (params) => this._makeRequest('v1beta1/{+parent}/userEvents:rejoin', 'POST', params);

    this.projects.locations.catalogs.catalogItems = {};

    /**
     * Creates a catalog item.
     * @param {string} params.parent - (Required) Required. The parent catalog resource name, such as `projects/*\/locations/global/catalogs/default_catalog`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.catalogItems.create = (params) => this._makeRequest('v1beta1/{+parent}/catalogItems', 'POST', params);

    /**
     * Gets a specific catalog item.
     * @param {string} params.name - (Required) Required. Full resource name of catalog item, such as `projects/*\/locations/global/catalogs/default_catalog/catalogitems/some_catalog_item_id`.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.catalogItems.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Gets a list of catalog items.
     * @param {string} params.filter - Optional. Use of this field is not supported by version v1beta1.
     * @param {integer} params.pageSize - Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default.
     * @param {string} params.pageToken - Optional. The previous ListCatalogItemsResponse.next_page_token.
     * @param {string} params.parent - (Required) Required. The parent catalog resource name, such as `projects/*\/locations/global/catalogs/default_catalog`.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.catalogItems.list = (params) => this._makeRequest('v1beta1/{+parent}/catalogItems', 'GET', params);

    /**
     * Updates a catalog item. Partial updating is supported. Non-existing items will be created.
     * @param {string} params.name - (Required) Required. Full resource name of catalog item, such as `projects/*\/locations/global/catalogs/default_catalog/catalogItems/some_catalog_item_id`.
     * @param {string} params.updateMask - Optional. Indicates which fields in the provided 'item' to update. If not set, will by default update all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.catalogItems.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a catalog item.
     * @param {string} params.name - (Required) Required. Full resource name of catalog item, such as `projects/*\/locations/global/catalogs/default_catalog/catalogItems/some_catalog_item_id`.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.catalogItems.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
     * @param {string} params.parent - (Required) Required. `projects/1234/locations/global/catalogs/default_catalog` If no updateMask is specified, requires catalogItems.create permission. If updateMask is specified, requires catalogItems.update permission.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.catalogItems.import = (params) => this._makeRequest('v1beta1/{+parent}/catalogItems:import', 'POST', params);
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
