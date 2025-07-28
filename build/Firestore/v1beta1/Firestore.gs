
/**
 * Google Apps Script client library for the Cloud Firestore API
 * Documentation URL: https://cloud.google.com/firestore
 * @class
 */
class Firestore {
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
    this._rootUrl = 'https://firestore.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.databases = {};
    this.projects.databases.exportDocuments = (params) => this._makeRequest('v1beta1/{+name}:exportDocuments', 'POST', params);
    this.projects.databases.importDocuments = (params) => this._makeRequest('v1beta1/{+name}:importDocuments', 'POST', params);

    this.projects.databases.indexes = {};
    this.projects.databases.indexes.create = (params) => this._makeRequest('v1beta1/{+parent}/indexes', 'POST', params);
    this.projects.databases.indexes.list = (params) => this._makeRequest('v1beta1/{+parent}/indexes', 'GET', params);
    this.projects.databases.indexes.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.databases.indexes.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.databases.documents = {};
    this.projects.databases.documents.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.databases.documents.list = (params) => this._makeRequest('v1beta1/{+parent}/{collectionId}', 'GET', params);
    this.projects.databases.documents.listDocuments = (params) => this._makeRequest('v1beta1/{+parent}/{collectionId}', 'GET', params);
    this.projects.databases.documents.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.databases.documents.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.databases.documents.batchGet = (params) => this._makeRequest('v1beta1/{+database}/documents:batchGet', 'POST', params);
    this.projects.databases.documents.beginTransaction = (params) => this._makeRequest('v1beta1/{+database}/documents:beginTransaction', 'POST', params);
    this.projects.databases.documents.commit = (params) => this._makeRequest('v1beta1/{+database}/documents:commit', 'POST', params);
    this.projects.databases.documents.rollback = (params) => this._makeRequest('v1beta1/{+database}/documents:rollback', 'POST', params);
    this.projects.databases.documents.runQuery = (params) => this._makeRequest('v1beta1/{+parent}:runQuery', 'POST', params);
    this.projects.databases.documents.runAggregationQuery = (params) => this._makeRequest('v1beta1/{+parent}:runAggregationQuery', 'POST', params);
    this.projects.databases.documents.partitionQuery = (params) => this._makeRequest('v1beta1/{+parent}:partitionQuery', 'POST', params);
    this.projects.databases.documents.write = (params) => this._makeRequest('v1beta1/{+database}/documents:write', 'POST', params);
    this.projects.databases.documents.listen = (params) => this._makeRequest('v1beta1/{+database}/documents:listen', 'POST', params);
    this.projects.databases.documents.listCollectionIds = (params) => this._makeRequest('v1beta1/{+parent}:listCollectionIds', 'POST', params);
    this.projects.databases.documents.batchWrite = (params) => this._makeRequest('v1beta1/{+database}/documents:batchWrite', 'POST', params);
    this.projects.databases.documents.createDocument = (params) => this._makeRequest('v1beta1/{+parent}/{collectionId}', 'POST', params);
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
