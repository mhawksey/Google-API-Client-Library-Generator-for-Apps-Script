
/**
 * Google Apps Script client library for the Datastream API
 * Documentation URL: https://cloud.google.com/datastream/
 * @class
 */
class Datastream {
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
    this._rootUrl = 'https://datastream.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.fetchStaticIps = (params) => this._makeRequest('v1alpha1/{+name}:fetchStaticIps', 'GET', params);
    this.projects.locations.list = (params) => this._makeRequest('v1alpha1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1alpha1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1alpha1/{+name}:cancel', 'POST', params);

    this.projects.locations.connectionProfiles = {};
    this.projects.locations.connectionProfiles.list = (params) => this._makeRequest('v1alpha1/{+parent}/connectionProfiles', 'GET', params);
    this.projects.locations.connectionProfiles.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.projects.locations.connectionProfiles.create = (params) => this._makeRequest('v1alpha1/{+parent}/connectionProfiles', 'POST', params);
    this.projects.locations.connectionProfiles.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);
    this.projects.locations.connectionProfiles.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.projects.locations.connectionProfiles.discover = (params) => this._makeRequest('v1alpha1/{+parent}/connectionProfiles:discover', 'POST', params);

    this.projects.locations.streams = {};
    this.projects.locations.streams.list = (params) => this._makeRequest('v1alpha1/{+parent}/streams', 'GET', params);
    this.projects.locations.streams.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.projects.locations.streams.create = (params) => this._makeRequest('v1alpha1/{+parent}/streams', 'POST', params);
    this.projects.locations.streams.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);
    this.projects.locations.streams.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.projects.locations.streams.fetchErrors = (params) => this._makeRequest('v1alpha1/{+stream}:fetchErrors', 'POST', params);

    this.projects.locations.streams.objects = {};
    this.projects.locations.streams.objects.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.projects.locations.streams.objects.list = (params) => this._makeRequest('v1alpha1/{+parent}/objects', 'GET', params);
    this.projects.locations.streams.objects.startBackfillJob = (params) => this._makeRequest('v1alpha1/{+object}:startBackfillJob', 'POST', params);
    this.projects.locations.streams.objects.stopBackfillJob = (params) => this._makeRequest('v1alpha1/{+object}:stopBackfillJob', 'POST', params);

    this.projects.locations.privateConnections = {};
    this.projects.locations.privateConnections.create = (params) => this._makeRequest('v1alpha1/{+parent}/privateConnections', 'POST', params);
    this.projects.locations.privateConnections.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.projects.locations.privateConnections.list = (params) => this._makeRequest('v1alpha1/{+parent}/privateConnections', 'GET', params);
    this.projects.locations.privateConnections.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    this.projects.locations.privateConnections.routes = {};
    this.projects.locations.privateConnections.routes.create = (params) => this._makeRequest('v1alpha1/{+parent}/routes', 'POST', params);
    this.projects.locations.privateConnections.routes.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.projects.locations.privateConnections.routes.list = (params) => this._makeRequest('v1alpha1/{+parent}/routes', 'GET', params);
    this.projects.locations.privateConnections.routes.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
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
