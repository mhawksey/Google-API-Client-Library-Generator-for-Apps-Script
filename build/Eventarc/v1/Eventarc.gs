
/**
 * Google Apps Script client library for the Eventarc API
 * Documentation URL: https://cloud.google.com/eventarc
 * @class
 */
class Eventarc {
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
    this._rootUrl = 'https://eventarc.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.getGoogleChannelConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.updateGoogleChannelConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.triggers = {};
    this.projects.locations.triggers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.triggers.list = (params) => this._makeRequest('v1/{+parent}/triggers', 'GET', params);
    this.projects.locations.triggers.create = (params) => this._makeRequest('v1/{+parent}/triggers', 'POST', params);
    this.projects.locations.triggers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.triggers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.triggers.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.triggers.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.triggers.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.channels = {};
    this.projects.locations.channels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.channels.list = (params) => this._makeRequest('v1/{+parent}/channels', 'GET', params);
    this.projects.locations.channels.create = (params) => this._makeRequest('v1/{+parent}/channels', 'POST', params);
    this.projects.locations.channels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.channels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.channels.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.channels.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.channels.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.providers = {};
    this.projects.locations.providers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.providers.list = (params) => this._makeRequest('v1/{+parent}/providers', 'GET', params);

    this.projects.locations.channelConnections = {};
    this.projects.locations.channelConnections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.channelConnections.list = (params) => this._makeRequest('v1/{+parent}/channelConnections', 'GET', params);
    this.projects.locations.channelConnections.create = (params) => this._makeRequest('v1/{+parent}/channelConnections', 'POST', params);
    this.projects.locations.channelConnections.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.channelConnections.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.channelConnections.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.channelConnections.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.messageBuses = {};
    this.projects.locations.messageBuses.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.messageBuses.list = (params) => this._makeRequest('v1/{+parent}/messageBuses', 'GET', params);
    this.projects.locations.messageBuses.listEnrollments = (params) => this._makeRequest('v1/{+parent}:listEnrollments', 'GET', params);
    this.projects.locations.messageBuses.create = (params) => this._makeRequest('v1/{+parent}/messageBuses', 'POST', params);
    this.projects.locations.messageBuses.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.messageBuses.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.messageBuses.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.messageBuses.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.messageBuses.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.enrollments = {};
    this.projects.locations.enrollments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.enrollments.list = (params) => this._makeRequest('v1/{+parent}/enrollments', 'GET', params);
    this.projects.locations.enrollments.create = (params) => this._makeRequest('v1/{+parent}/enrollments', 'POST', params);
    this.projects.locations.enrollments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.enrollments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.enrollments.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.enrollments.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.enrollments.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.pipelines = {};
    this.projects.locations.pipelines.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.pipelines.list = (params) => this._makeRequest('v1/{+parent}/pipelines', 'GET', params);
    this.projects.locations.pipelines.create = (params) => this._makeRequest('v1/{+parent}/pipelines', 'POST', params);
    this.projects.locations.pipelines.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.pipelines.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.pipelines.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.pipelines.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.pipelines.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.googleApiSources = {};
    this.projects.locations.googleApiSources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.googleApiSources.list = (params) => this._makeRequest('v1/{+parent}/googleApiSources', 'GET', params);
    this.projects.locations.googleApiSources.create = (params) => this._makeRequest('v1/{+parent}/googleApiSources', 'POST', params);
    this.projects.locations.googleApiSources.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.googleApiSources.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.googleApiSources.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.googleApiSources.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.googleApiSources.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.kafkaSources = {};
    this.projects.locations.kafkaSources.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.kafkaSources.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.kafkaSources.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
