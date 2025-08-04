
/**
 * Google Apps Script client library for the BigQuery Reservation API
 * Documentation URL: https://cloud.google.com/bigquery/
 * @class
 */
class Bigqueryreservation {
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
    this._rootUrl = 'https://bigqueryreservation.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.searchAssignments = (params) => this._makeRequest('v1/{+parent}:searchAssignments', 'GET', params);
    this.projects.locations.searchAllAssignments = (params) => this._makeRequest('v1/{+parent}:searchAllAssignments', 'GET', params);
    this.projects.locations.getBiReservation = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.updateBiReservation = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.reservations = {};
    this.projects.locations.reservations.create = (params) => this._makeRequest('v1/{+parent}/reservations', 'POST', params);
    this.projects.locations.reservations.list = (params) => this._makeRequest('v1/{+parent}/reservations', 'GET', params);
    this.projects.locations.reservations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.reservations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.reservations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.reservations.failoverReservation = (params) => this._makeRequest('v1/{+name}:failoverReservation', 'POST', params);
    this.projects.locations.reservations.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.reservations.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.reservations.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.reservations.assignments = {};
    this.projects.locations.reservations.assignments.create = (params) => this._makeRequest('v1/{+parent}/assignments', 'POST', params);
    this.projects.locations.reservations.assignments.list = (params) => this._makeRequest('v1/{+parent}/assignments', 'GET', params);
    this.projects.locations.reservations.assignments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.reservations.assignments.move = (params) => this._makeRequest('v1/{+name}:move', 'POST', params);
    this.projects.locations.reservations.assignments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.reservations.assignments.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.reservations.assignments.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.reservations.assignments.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.capacityCommitments = {};
    this.projects.locations.capacityCommitments.create = (params) => this._makeRequest('v1/{+parent}/capacityCommitments', 'POST', params);
    this.projects.locations.capacityCommitments.list = (params) => this._makeRequest('v1/{+parent}/capacityCommitments', 'GET', params);
    this.projects.locations.capacityCommitments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.capacityCommitments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.capacityCommitments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.capacityCommitments.split = (params) => this._makeRequest('v1/{+name}:split', 'POST', params);
    this.projects.locations.capacityCommitments.merge = (params) => this._makeRequest('v1/{+parent}/capacityCommitments:merge', 'POST', params);

    this.projects.locations.reservationGroups = {};
    this.projects.locations.reservationGroups.create = (params) => this._makeRequest('v1/{+parent}/reservationGroups', 'POST', params);
    this.projects.locations.reservationGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.reservationGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.reservationGroups.list = (params) => this._makeRequest('v1/{+parent}/reservationGroups', 'GET', params);
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
