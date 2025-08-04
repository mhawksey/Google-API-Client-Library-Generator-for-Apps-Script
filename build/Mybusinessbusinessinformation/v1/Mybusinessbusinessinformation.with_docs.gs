
/**
 * Google Apps Script client library for the My Business Business Information API
 * Documentation URL: https://developers.google.com/my-business/
 * @class
 */
class Mybusinessbusinessinformation {
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
    this._rootUrl = 'https://mybusinessbusinessinformation.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.attributes = {};

    /**
     * Returns the list of attributes that would be available for a location with the given primary category and country.
     * @param {string} params.categoryName - The primary category stable ID to find available attributes. Must be of the format categories/{category_id}.
     * @param {string} params.languageCode - The BCP 47 code of language to get attribute display names in. If this language is not available, they will be provided in English.
     * @param {integer} params.pageSize - How many attributes to include per page. Default is 200, minimum is 1.
     * @param {string} params.pageToken - If specified, the next page of attribute metadata is retrieved.
     * @param {string} params.parent - Resource name of the location to look up available attributes. If this field is set, category_name, region_code, language_code and show_all are not required and must not be set.
     * @param {string} params.regionCode - The ISO 3166-1 alpha-2 country code to find available attributes.
     * @param {boolean} params.showAll - Metadata for all available attributes are returned when this field is set to true, disregarding parent and category_name fields. language_code and region_code are required when show_all is set to true.
     * @return {object} The API response object.
     */
    this.attributes.list = (params) => this._makeRequest('v1/attributes', 'GET', params);

    this.locations = {};

    /**
     * Update attributes for a given location.
     * @param {string} params.attributeMask - Required. Attribute name of attributes that you'd like to update. Represented by `attributes/{attribute}`. Updates: All attributes provided in the attributes field that you would like to update must be set in the `attribute_mask`. Attributes set in the above list but not in the `attribute_mask` will be ignored. Deletes: If you'd like to delete certain attributes, they must be specified in the `attribute_mask` with no matching entry in the attributes list. If you'd like to delete all attributes set on a location, you should look up all the applicable attributes for the location and then add them to the `attribute_mask` with an empty attributes field.
     * @param {string} params.name - (Required) Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.updateAttributes = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Looks up all the attributes set for a given location.
     * @param {string} params.name - (Required) Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.
     * @return {object} The API response object.
     */
    this.locations.getAttributes = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns the specified location.
     * @param {string} params.name - (Required) Required. The name of the location to fetch.
     * @param {string} params.readMask - Required. Read mask to specify what fields will be returned in the response.
     * @return {object} The API response object.
     */
    this.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the Google-updated version of the specified location.
     * @param {string} params.name - (Required) Required. The name of the location to fetch.
     * @param {string} params.readMask - Required. Read mask to specify what fields will be returned in the response.
     * @return {object} The API response object.
     */
    this.locations.getGoogleUpdated = (params) => this._makeRequest('v1/{+name}:getGoogleUpdated', 'GET', params);

    /**
     * Updates the specified location.
     * @param {string} params.name - (Required) Google identifier for this location in the form: `locations/{location_id}`.
     * @param {string} params.updateMask - Required. The specific fields to update.
     * @param {boolean} params.validateOnly - Optional. If true, the request is validated without actually updating the location. When this field is set, we will only return validation errors if there were any. The response will be empty if no errors were found.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
     * @param {string} params.name - (Required) Required. The name of the location to delete.
     * @return {object} The API response object.
     */
    this.locations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.locations.attributes = {};

    /**
     * Gets the Google-updated version of the specified location.
     * @param {string} params.name - (Required) Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.
     * @return {object} The API response object.
     */
    this.locations.attributes.getGoogleUpdated = (params) => this._makeRequest('v1/{+name}:getGoogleUpdated', 'GET', params);

    this.categories = {};

    /**
     * Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').
     * @param {string} params.filter - Optional. Filter string from user. The only field that supported is `displayName`. Eg: `filter=displayName=foo`.
     * @param {string} params.languageCode - Required. The BCP 47 code of language.
     * @param {integer} params.pageSize - Optional. How many categories to fetch per page. Default is 100, minimum is 1, and maximum page size is 100.
     * @param {string} params.pageToken - Optional. If specified, the next page of categories will be fetched.
     * @param {string} params.regionCode - Required. The ISO 3166-1 alpha-2 country code.
     * @param {string} params.view - Required. Specifies which parts to the Category resource should be returned in the response.
     * @return {object} The API response object.
     */
    this.categories.list = (params) => this._makeRequest('v1/categories', 'GET', params);

    /**
     * Returns a list of business categories for the provided language and GConcept ids.
     * @param {string} params.languageCode - Required. The BCP 47 code of language that the category names should be returned in.
     * @param {string} params.names - Required. At least one name must be set. The GConcept ids the localized category names should be returned for. To return details for more than one category, repeat this parameter in the request.
     * @param {string} params.regionCode - Optional. The ISO 3166-1 alpha-2 country code used to infer non-standard language.
     * @param {string} params.view - Required. Specifies which parts to the Category resource should be returned in the response.
     * @return {object} The API response object.
     */
    this.categories.batchGet = (params) => this._makeRequest('v1/categories:batchGet', 'GET', params);

    this.chains = {};

    /**
     * Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.
     * @param {string} params.name - (Required) Required. The chain's resource name, in the format `chains/{chain_place_id}`.
     * @return {object} The API response object.
     */
    this.chains.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Searches the chain based on chain name.
     * @param {string} params.chainName - Required. Search for a chain by its name. Exact/partial/fuzzy/related queries are supported. Examples: "walmart", "wal-mart", "walmmmart", "沃尔玛"
     * @param {integer} params.pageSize - The maximum number of matched chains to return from this query. The default is 10. The maximum possible value is 500.
     * @return {object} The API response object.
     */
    this.chains.search = (params) => this._makeRequest('v1/chains:search', 'GET', params);

    this.googleLocations = {};

    /**
     * Search all of the possible locations that are a match to the specified request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.googleLocations.search = (params) => this._makeRequest('v1/googleLocations:search', 'POST', params);

    this.accounts = {};

    this.accounts.locations = {};

    /**
     * Lists the locations for the specified account.
     * @param {string} params.filter - Optional. A filter constraining the locations to return. The response includes only entries that match the filter. If `filter` is empty, then constraints are applied and all locations (paginated) are retrieved for the requested account. For more information about valid fields and example usage, see [Work with Location Data Guide](https://developers.google.com/my-business/content/location-data#filter_results_when_you_list_locations).
     * @param {string} params.orderBy - Optional. Sorting order for the request. Multiple fields should be comma-separated, following SQL syntax. The default sorting order is ascending. To specify descending order, a suffix " desc" should be added. Valid fields to order_by are title and store_code. For example: "title, store_code desc" or "title" or "store_code desc"
     * @param {integer} params.pageSize - Optional. How many locations to fetch per page. Default value is 10 if not set. Minimum is 1, and maximum page size is 100.
     * @param {string} params.pageToken - Optional. If specified, it fetches the next `page` of locations. The page token is returned by previous calls to `ListLocations` when there were more locations than could fit in the requested page size.
     * @param {string} params.parent - (Required) Required. The name of the account to fetch locations from. If the parent Account is of AccountType PERSONAL, only Locations that are directly owned by the Account are returned, otherwise it will return all accessible locations from the Account, either directly or indirectly.
     * @param {string} params.readMask - Required. Read mask to specify what fields will be returned in the response.
     * @return {object} The API response object.
     */
    this.accounts.locations.list = (params) => this._makeRequest('v1/{+parent}/locations', 'GET', params);

    /**
     * Creates a new Location that will be owned by the logged in user.
     * @param {string} params.parent - (Required) Required. The name of the account in which to create this location.
     * @param {string} params.requestId - Optional. A unique request ID for the server to detect duplicated requests. We recommend using UUIDs. Max length is 50 characters.
     * @param {boolean} params.validateOnly - Optional. If true, the request is validated without actually creating the location.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.locations.create = (params) => this._makeRequest('v1/{+parent}/locations', 'POST', params);
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
