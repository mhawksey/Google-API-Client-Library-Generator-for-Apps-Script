
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://mybusinessbusinessinformation.googleapis.com/';
    this._servicePath = '';


    this.attributes = {};

    /**
     * Returns the list of attributes that would be available for a location with the given primary category and country.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.categoryName - The primary category stable ID to find available attributes. Must be of the format categories/{category_id}.
     * @param {string} apiParams.languageCode - The BCP 47 code of language to get attribute display names in. If this language is not available, they will be provided in English.
     * @param {integer} apiParams.pageSize - How many attributes to include per page. Default is 200, minimum is 1.
     * @param {string} apiParams.pageToken - If specified, the next page of attribute metadata is retrieved.
     * @param {string} apiParams.parent - Resource name of the location to look up available attributes. If this field is set, category_name, region_code, language_code and show_all are not required and must not be set.
     * @param {string} apiParams.regionCode - The ISO 3166-1 alpha-2 country code to find available attributes.
     * @param {boolean} apiParams.showAll - Metadata for all available attributes are returned when this field is set to true, disregarding parent and category_name fields. language_code and region_code are required when show_all is set to true.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.attributes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/attributes', 'GET', apiParams, clientConfig);

    this.locations = {};

    /**
     * Update attributes for a given location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.attributeMask - Required. Attribute name of attributes that you'd like to update. Represented by `attributes/{attribute}`. Updates: All attributes provided in the attributes field that you would like to update must be set in the `attribute_mask`. Attributes set in the above list but not in the `attribute_mask` will be ignored. Deletes: If you'd like to delete certain attributes, they must be specified in the `attribute_mask` with no matching entry in the attributes list. If you'd like to delete all attributes set on a location, you should look up all the applicable attributes for the location and then add them to the `attribute_mask` with an empty attributes field.
     * @param {string} apiParams.name - (Required) Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.updateAttributes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Looks up all the attributes set for a given location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.getAttributes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns the specified location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the location to fetch.
     * @param {string} apiParams.readMask - Required. Read mask to specify what fields will be returned in the response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Gets the Google-updated version of the specified location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the location to fetch.
     * @param {string} apiParams.readMask - Required. Read mask to specify what fields will be returned in the response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.getGoogleUpdated = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:getGoogleUpdated', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Google identifier for this location in the form: `locations/{location_id}`.
     * @param {string} apiParams.updateMask - Required. The specific fields to update.
     * @param {boolean} apiParams.validateOnly - Optional. If true, the request is validated without actually updating the location. When this field is set, we will only return validation errors if there were any. The response will be empty if no errors were found.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the location to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.locations.attributes = {};

    /**
     * Gets the Google-updated version of the specified location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.attributes.getGoogleUpdated = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:getGoogleUpdated', 'GET', apiParams, clientConfig);

    this.categories = {};

    /**
     * Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter string from user. The only field that supported is `displayName`. Eg: `filter=displayName=foo`.
     * @param {string} apiParams.languageCode - Required. The BCP 47 code of language.
     * @param {integer} apiParams.pageSize - Optional. How many categories to fetch per page. Default is 100, minimum is 1, and maximum page size is 100.
     * @param {string} apiParams.pageToken - Optional. If specified, the next page of categories will be fetched.
     * @param {string} apiParams.regionCode - Required. The ISO 3166-1 alpha-2 country code.
     * @param {string} apiParams.view - Required. Specifies which parts to the Category resource should be returned in the response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.categories.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/categories', 'GET', apiParams, clientConfig);

    /**
     * Returns a list of business categories for the provided language and GConcept ids.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Required. The BCP 47 code of language that the category names should be returned in.
     * @param {string} apiParams.names - Required. At least one name must be set. The GConcept ids the localized category names should be returned for. To return details for more than one category, repeat this parameter in the request.
     * @param {string} apiParams.regionCode - Optional. The ISO 3166-1 alpha-2 country code used to infer non-standard language.
     * @param {string} apiParams.view - Required. Specifies which parts to the Category resource should be returned in the response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.categories.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/categories:batchGet', 'GET', apiParams, clientConfig);

    this.chains = {};

    /**
     * Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The chain's resource name, in the format `chains/{chain_place_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.chains.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Searches the chain based on chain name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.chainName - Required. Search for a chain by its name. Exact/partial/fuzzy/related queries are supported. Examples: "walmart", "wal-mart", "walmmmart", "沃尔玛"
     * @param {integer} apiParams.pageSize - The maximum number of matched chains to return from this query. The default is 10. The maximum possible value is 500.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.chains.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/chains:search', 'GET', apiParams, clientConfig);

    this.googleLocations = {};

    /**
     * Search all of the possible locations that are a match to the specified request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.googleLocations.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/googleLocations:search', 'POST', apiParams, clientConfig);

    this.accounts = {};

    this.accounts.locations = {};

    /**
     * Lists the locations for the specified account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter constraining the locations to return. The response includes only entries that match the filter. If `filter` is empty, then constraints are applied and all locations (paginated) are retrieved for the requested account. For more information about valid fields and example usage, see [Work with Location Data Guide](https://developers.google.com/my-business/content/location-data#filter_results_when_you_list_locations).
     * @param {string} apiParams.orderBy - Optional. Sorting order for the request. Multiple fields should be comma-separated, following SQL syntax. The default sorting order is ascending. To specify descending order, a suffix " desc" should be added. Valid fields to order_by are title and store_code. For example: "title, store_code desc" or "title" or "store_code desc"
     * @param {integer} apiParams.pageSize - Optional. How many locations to fetch per page. Default value is 10 if not set. Minimum is 1, and maximum page size is 100.
     * @param {string} apiParams.pageToken - Optional. If specified, it fetches the next `page` of locations. The page token is returned by previous calls to `ListLocations` when there were more locations than could fit in the requested page size.
     * @param {string} apiParams.parent - (Required) Required. The name of the account to fetch locations from. If the parent Account is of AccountType PERSONAL, only Locations that are directly owned by the Account are returned, otherwise it will return all accessible locations from the Account, either directly or indirectly.
     * @param {string} apiParams.readMask - Required. Read mask to specify what fields will be returned in the response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/locations', 'GET', apiParams, clientConfig);

    /**
     * Creates a new Location that will be owned by the logged in user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the account in which to create this location.
     * @param {string} apiParams.requestId - Optional. A unique request ID for the server to detect duplicated requests. We recommend using UUIDs. Max length is 50 characters.
     * @param {boolean} apiParams.validateOnly - Optional. If true, the request is validated without actually creating the location.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.locations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/locations', 'POST', apiParams, clientConfig);
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
