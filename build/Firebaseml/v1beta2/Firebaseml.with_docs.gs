
/**
 * Google Apps Script client library for the Firebase ML API
 * Documentation URL: https://firebase.google.com
 * @class
 */
class Firebaseml {
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
    this._rootUrl = 'https://firebaseml.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.models = {};

    /**
     * Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.
     * @param {string} params.name - (Required) Required. The name of the model to download. The name must have the form `projects/{project}/models/{model}`
     * @return {object} The API response object.
     */
    this.projects.models.download = (params) => this._makeRequest('v1beta2/{+name}:download', 'GET', params);

    /**
     * Creates a model in Firebase ML. The longrunning operation will eventually return a Model
     * @param {string} params.parent - (Required) Required. The parent project resource where the model is to be created. The parent must have the form `projects/{project_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.models.create = (params) => this._makeRequest('v1beta2/{+parent}/models', 'POST', params);

    /**
     * Updates a model. The longrunning operation will eventually return a Model.
     * @param {string} params.name - (Required) The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model.
     * @param {string} params.updateMask - The update mask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.models.patch = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Gets a model resource.
     * @param {string} params.name - (Required) Required. The name of the model to get. The name must have the form `projects/{project_id}/models/{model_id}`
     * @return {object} The API response object.
     */
    this.projects.models.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Lists the models
     * @param {string} params.filter - A filter for the list e.g. 'tags: abc' to list models which are tagged with "abc"
     * @param {integer} params.pageSize - The maximum number of items to return
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The name of the parent to list models for. The parent must have the form `projects/{project_id}'
     * @return {object} The API response object.
     */
    this.projects.models.list = (params) => this._makeRequest('v1beta2/{+parent}/models', 'GET', params);

    /**
     * Deletes a model
     * @param {string} params.name - (Required) Required. The name of the model to delete. The name must have the form `projects/{project_id}/models/{model_id}`
     * @return {object} The API response object.
     */
    this.projects.models.delete = (params) => this._makeRequest('v1beta2/{+name}', 'DELETE', params);

    this.projects.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.operations.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
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
