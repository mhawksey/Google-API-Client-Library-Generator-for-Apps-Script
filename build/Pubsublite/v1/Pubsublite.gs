
/**
 * Google Apps Script client library for the Pub/Sub Lite API
 * Documentation URL: https://cloud.google.com/pubsub/lite/docs
 * @class
 */
class Pubsublite {
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
    this._rootUrl = 'https://pubsublite.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.admin = {};

    this.admin.projects = {};

    this.admin.projects.locations = {};

    this.admin.projects.locations.operations = {};
    this.admin.projects.locations.operations.list = (params) => this._makeRequest('v1/admin/{+name}/operations', 'GET', params);
    this.admin.projects.locations.operations.get = (params) => this._makeRequest('v1/admin/{+name}', 'GET', params);
    this.admin.projects.locations.operations.delete = (params) => this._makeRequest('v1/admin/{+name}', 'DELETE', params);
    this.admin.projects.locations.operations.cancel = (params) => this._makeRequest('v1/admin/{+name}:cancel', 'POST', params);

    this.admin.projects.locations.topics = {};
    this.admin.projects.locations.topics.create = (params) => this._makeRequest('v1/admin/{+parent}/topics', 'POST', params);
    this.admin.projects.locations.topics.get = (params) => this._makeRequest('v1/admin/{+name}', 'GET', params);
    this.admin.projects.locations.topics.getPartitions = (params) => this._makeRequest('v1/admin/{+name}/partitions', 'GET', params);
    this.admin.projects.locations.topics.list = (params) => this._makeRequest('v1/admin/{+parent}/topics', 'GET', params);
    this.admin.projects.locations.topics.patch = (params) => this._makeRequest('v1/admin/{+name}', 'PATCH', params);
    this.admin.projects.locations.topics.delete = (params) => this._makeRequest('v1/admin/{+name}', 'DELETE', params);

    this.admin.projects.locations.topics.subscriptions = {};
    this.admin.projects.locations.topics.subscriptions.list = (params) => this._makeRequest('v1/admin/{+name}/subscriptions', 'GET', params);

    this.admin.projects.locations.subscriptions = {};
    this.admin.projects.locations.subscriptions.create = (params) => this._makeRequest('v1/admin/{+parent}/subscriptions', 'POST', params);
    this.admin.projects.locations.subscriptions.get = (params) => this._makeRequest('v1/admin/{+name}', 'GET', params);
    this.admin.projects.locations.subscriptions.list = (params) => this._makeRequest('v1/admin/{+parent}/subscriptions', 'GET', params);
    this.admin.projects.locations.subscriptions.patch = (params) => this._makeRequest('v1/admin/{+name}', 'PATCH', params);
    this.admin.projects.locations.subscriptions.delete = (params) => this._makeRequest('v1/admin/{+name}', 'DELETE', params);
    this.admin.projects.locations.subscriptions.seek = (params) => this._makeRequest('v1/admin/{+name}:seek', 'POST', params);

    this.admin.projects.locations.reservations = {};
    this.admin.projects.locations.reservations.create = (params) => this._makeRequest('v1/admin/{+parent}/reservations', 'POST', params);
    this.admin.projects.locations.reservations.get = (params) => this._makeRequest('v1/admin/{+name}', 'GET', params);
    this.admin.projects.locations.reservations.list = (params) => this._makeRequest('v1/admin/{+parent}/reservations', 'GET', params);
    this.admin.projects.locations.reservations.patch = (params) => this._makeRequest('v1/admin/{+name}', 'PATCH', params);
    this.admin.projects.locations.reservations.delete = (params) => this._makeRequest('v1/admin/{+name}', 'DELETE', params);

    this.admin.projects.locations.reservations.topics = {};
    this.admin.projects.locations.reservations.topics.list = (params) => this._makeRequest('v1/admin/{+name}/topics', 'GET', params);

    this.cursor = {};

    this.cursor.projects = {};

    this.cursor.projects.locations = {};

    this.cursor.projects.locations.subscriptions = {};
    this.cursor.projects.locations.subscriptions.commitCursor = (params) => this._makeRequest('v1/cursor/{+subscription}:commitCursor', 'POST', params);

    this.cursor.projects.locations.subscriptions.cursors = {};
    this.cursor.projects.locations.subscriptions.cursors.list = (params) => this._makeRequest('v1/cursor/{+parent}/cursors', 'GET', params);

    this.topicStats = {};

    this.topicStats.projects = {};

    this.topicStats.projects.locations = {};

    this.topicStats.projects.locations.topics = {};
    this.topicStats.projects.locations.topics.computeMessageStats = (params) => this._makeRequest('v1/topicStats/{+topic}:computeMessageStats', 'POST', params);
    this.topicStats.projects.locations.topics.computeHeadCursor = (params) => this._makeRequest('v1/topicStats/{+topic}:computeHeadCursor', 'POST', params);
    this.topicStats.projects.locations.topics.computeTimeCursor = (params) => this._makeRequest('v1/topicStats/{+topic}:computeTimeCursor', 'POST', params);
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
