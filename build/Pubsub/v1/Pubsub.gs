
/**
 * Google Apps Script client library for the Cloud Pub/Sub API
 * Documentation URL: https://cloud.google.com/pubsub/docs
 * @class
 */
class Pubsub {
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
    this._rootUrl = 'https://pubsub.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.topics = {};
    this.projects.topics.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.topics.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.topics.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.topics.create = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.topics.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.topics.publish = (params) => this._makeRequest('v1/{+topic}:publish', 'POST', params);
    this.projects.topics.get = (params) => this._makeRequest('v1/{+topic}', 'GET', params);
    this.projects.topics.list = (params) => this._makeRequest('v1/{+project}/topics', 'GET', params);
    this.projects.topics.delete = (params) => this._makeRequest('v1/{+topic}', 'DELETE', params);

    this.projects.topics.subscriptions = {};
    this.projects.topics.subscriptions.list = (params) => this._makeRequest('v1/{+topic}/subscriptions', 'GET', params);

    this.projects.topics.snapshots = {};
    this.projects.topics.snapshots.list = (params) => this._makeRequest('v1/{+topic}/snapshots', 'GET', params);

    this.projects.subscriptions = {};
    this.projects.subscriptions.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.subscriptions.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.subscriptions.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.subscriptions.detach = (params) => this._makeRequest('v1/{+subscription}:detach', 'POST', params);
    this.projects.subscriptions.create = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.subscriptions.get = (params) => this._makeRequest('v1/{+subscription}', 'GET', params);
    this.projects.subscriptions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.subscriptions.list = (params) => this._makeRequest('v1/{+project}/subscriptions', 'GET', params);
    this.projects.subscriptions.delete = (params) => this._makeRequest('v1/{+subscription}', 'DELETE', params);
    this.projects.subscriptions.modifyAckDeadline = (params) => this._makeRequest('v1/{+subscription}:modifyAckDeadline', 'POST', params);
    this.projects.subscriptions.acknowledge = (params) => this._makeRequest('v1/{+subscription}:acknowledge', 'POST', params);
    this.projects.subscriptions.pull = (params) => this._makeRequest('v1/{+subscription}:pull', 'POST', params);
    this.projects.subscriptions.modifyPushConfig = (params) => this._makeRequest('v1/{+subscription}:modifyPushConfig', 'POST', params);
    this.projects.subscriptions.seek = (params) => this._makeRequest('v1/{+subscription}:seek', 'POST', params);

    this.projects.snapshots = {};
    this.projects.snapshots.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.snapshots.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.snapshots.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.snapshots.get = (params) => this._makeRequest('v1/{+snapshot}', 'GET', params);
    this.projects.snapshots.list = (params) => this._makeRequest('v1/{+project}/snapshots', 'GET', params);
    this.projects.snapshots.create = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.snapshots.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.snapshots.delete = (params) => this._makeRequest('v1/{+snapshot}', 'DELETE', params);

    this.projects.schemas = {};
    this.projects.schemas.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.schemas.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.schemas.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.schemas.create = (params) => this._makeRequest('v1/{+parent}/schemas', 'POST', params);
    this.projects.schemas.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.schemas.list = (params) => this._makeRequest('v1/{+parent}/schemas', 'GET', params);
    this.projects.schemas.listRevisions = (params) => this._makeRequest('v1/{+name}:listRevisions', 'GET', params);
    this.projects.schemas.commit = (params) => this._makeRequest('v1/{+name}:commit', 'POST', params);
    this.projects.schemas.rollback = (params) => this._makeRequest('v1/{+name}:rollback', 'POST', params);
    this.projects.schemas.deleteRevision = (params) => this._makeRequest('v1/{+name}:deleteRevision', 'DELETE', params);
    this.projects.schemas.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.schemas.validate = (params) => this._makeRequest('v1/{+parent}/schemas:validate', 'POST', params);
    this.projects.schemas.validateMessage = (params) => this._makeRequest('v1/{+parent}/schemas:validateMessage', 'POST', params);
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
