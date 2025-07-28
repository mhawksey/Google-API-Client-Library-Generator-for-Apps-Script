
/**
 * Google Apps Script client library for the Cloud Speech-to-Text API
 * Documentation URL: https://cloud.google.com/speech-to-text/docs/quickstart-protocol
 * @class
 */
class Speech {
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
    this._rootUrl = 'https://speech.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.phraseSets = {};

    /**
     * Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.
     * @param {string} params.parent - (Required) Required. The parent resource where this phrase set will be created. Format: `projects/{project}/locations/{location}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.phraseSets.create = (params) => this._makeRequest('v1/{+parent}/phraseSets', 'POST', params);

    /**
     * Get a phrase set.
     * @param {string} params.name - (Required) Required. The name of the phrase set to retrieve. Format: `projects/{project}/locations/{location}/phraseSets/{phrase_set}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     * @return {object} The API response object.
     */
    this.projects.locations.phraseSets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List phrase sets.
     * @param {integer} params.pageSize - The maximum number of phrase sets to return. The service may return fewer than this value. If unspecified, at most 50 phrase sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListPhraseSet` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPhraseSet` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of phrase set. Format: `projects/{project}/locations/{location}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     * @return {object} The API response object.
     */
    this.projects.locations.phraseSets.list = (params) => this._makeRequest('v1/{+parent}/phraseSets', 'GET', params);

    /**
     * Update a phrase set.
     * @param {string} params.name - (Required) The resource name of the phrase set.
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.phraseSets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a phrase set.
     * @param {string} params.name - (Required) Required. The name of the phrase set to delete. Format: `projects/{project}/locations/{location}/phraseSets/{phrase_set}`
     * @return {object} The API response object.
     */
    this.projects.locations.phraseSets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.customClasses = {};

    /**
     * Create a custom class.
     * @param {string} params.parent - (Required) Required. The parent resource where this custom class will be created. Format: `projects/{project}/locations/{location}/customClasses` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.customClasses.create = (params) => this._makeRequest('v1/{+parent}/customClasses', 'POST', params);

    /**
     * Get a custom class.
     * @param {string} params.name - (Required) Required. The name of the custom class to retrieve. Format: `projects/{project}/locations/{location}/customClasses/{custom_class}`
     * @return {object} The API response object.
     */
    this.projects.locations.customClasses.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List custom classes.
     * @param {integer} params.pageSize - The maximum number of custom classes to return. The service may return fewer than this value. If unspecified, at most 50 custom classes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListCustomClass` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomClass` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of custom classes. Format: `projects/{project}/locations/{location}/customClasses` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     * @return {object} The API response object.
     */
    this.projects.locations.customClasses.list = (params) => this._makeRequest('v1/{+parent}/customClasses', 'GET', params);

    /**
     * Update a custom class.
     * @param {string} params.name - (Required) The resource name of the custom class.
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.customClasses.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a custom class.
     * @param {string} params.name - (Required) Required. The name of the custom class to delete. Format: `projects/{project}/locations/{location}/customClasses/{custom_class}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
     * @return {object} The API response object.
     */
    this.projects.locations.customClasses.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.operations.list = (params) => this._makeRequest('v1/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v1/operations/{+name}', 'GET', params);

    this.speech = {};

    /**
     * Performs synchronous speech recognition: receive results after all audio has been sent and processed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.speech.recognize = (params) => this._makeRequest('v1/speech:recognize', 'POST', params);

    /**
     * Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.speech.longrunningrecognize = (params) => this._makeRequest('v1/speech:longrunningrecognize', 'POST', params);
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
