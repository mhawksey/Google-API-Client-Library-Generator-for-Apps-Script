
/**
 * Google Apps Script client library for the Connectors API
 * Documentation URL: https://cloud.google.com/apigee/docs/api-platform/connectors/about-connectors
 * @class
 */
class Connectors {
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
    this._rootUrl = 'https://connectors.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.connections = {};
    this.projects.locations.connections.checkStatus = (params) => this._makeRequest('v2/{+name}:checkStatus', 'GET', params);
    this.projects.locations.connections.checkReadiness = (params) => this._makeRequest('v2/{+name}:checkReadiness', 'GET', params);
    this.projects.locations.connections.exchangeAuthCode = (params) => this._makeRequest('v2/{+name}:exchangeAuthCode', 'POST', params);
    this.projects.locations.connections.refreshAccessToken = (params) => this._makeRequest('v2/{+name}:refreshAccessToken', 'POST', params);
    this.projects.locations.connections.executeSqlQuery = (params) => this._makeRequest('v2/{+connection}:executeSqlQuery', 'POST', params);

    this.projects.locations.connections.actions = {};
    this.projects.locations.connections.actions.execute = (params) => this._makeRequest('v2/{+name}:execute', 'POST', params);
    this.projects.locations.connections.actions.list = (params) => this._makeRequest('v2/{+parent}/actions', 'GET', params);
    this.projects.locations.connections.actions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.connections.entityTypes = {};
    this.projects.locations.connections.entityTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.connections.entityTypes.list = (params) => this._makeRequest('v2/{+parent}/entityTypes', 'GET', params);

    this.projects.locations.connections.entityTypes.entities = {};
    this.projects.locations.connections.entityTypes.entities.list = (params) => this._makeRequest('v2/{+parent}/entities', 'GET', params);
    this.projects.locations.connections.entityTypes.entities.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.connections.entityTypes.entities.create = (params) => this._makeRequest('v2/{+parent}/entities', 'POST', params);
    this.projects.locations.connections.entityTypes.entities.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.connections.entityTypes.entities.updateEntitiesWithConditions = (params) => this._makeRequest('v2/{+entityType}/entities:updateEntitiesWithConditions', 'POST', params);
    this.projects.locations.connections.entityTypes.entities.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.locations.connections.entityTypes.entities.deleteEntitiesWithConditions = (params) => this._makeRequest('v2/{+entityType}/entities:deleteEntitiesWithConditions', 'POST', params);
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
