
/**
 * Google Apps Script client library for the Cloud Storage for Firebase API
 * Documentation URL: https://firebase.google.com/docs/storage
 * @class
 */
class Firebasestorage {
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
    this._rootUrl = 'https://firebasestorage.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Gets the default bucket.
     * @param {string} params.name - (Required) Required. The name of the default bucket to retrieve, `projects/{project_id_or_number}/defaultBucket`.
     * @return {object} The API response object.
     */
    this.projects.getDefaultBucket = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Unlinks and deletes the default bucket.
     * @param {string} params.name - (Required) Required. The name of the default bucket to delete, `projects/{project_id_or_number}/defaultBucket`.
     * @return {object} The API response object.
     */
    this.projects.deleteDefaultBucket = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    this.projects.buckets = {};

    /**
     * Gets a single linked storage bucket.
     * @param {string} params.name - (Required) Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_id_or_number}/buckets/{bucket_id}`.
     * @return {object} The API response object.
     */
    this.projects.buckets.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Lists the linked storage buckets for a project.
     * @param {integer} params.pageSize - The maximum number of buckets to return. If not set, the server will use a reasonable default.
     * @param {string} params.pageToken - A page token, received from a previous `ListBuckets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBuckets` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Resource name of the parent Firebase project, `projects/{project_id_or_number}`.
     * @return {object} The API response object.
     */
    this.projects.buckets.list = (params) => this._makeRequest('v1beta/{+parent}/buckets', 'GET', params);

    /**
     * Links a Google Cloud Storage bucket to a Firebase project.
     * @param {string} params.bucket - (Required) Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_id_or_number}/buckets/{bucket_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.buckets.addFirebase = (params) => this._makeRequest('v1beta/{+bucket}:addFirebase', 'POST', params);

    /**
     * Unlinks a linked Google Cloud Storage bucket from a Firebase project.
     * @param {string} params.bucket - (Required) Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_id_or_number}/buckets/{bucket_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.buckets.removeFirebase = (params) => this._makeRequest('v1beta/{+bucket}:removeFirebase', 'POST', params);

    this.projects.defaultBucket = {};

    /**
     * Creates a Spark tier-eligible Cloud Storage bucket and links it to your Firebase project. If the default bucket already exists, this method will re-link it to your Firebase project. See https://firebase.google.com/pricing for pricing details.
     * @param {string} params.parent - (Required) Required. The parent resource where the default bucket will be created, `projects/{project_id_or_number}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.defaultBucket.create = (params) => this._makeRequest('v1beta/{+parent}/defaultBucket', 'POST', params);
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
