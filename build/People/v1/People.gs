
/**
 * Google Apps Script client library for the People API
 * Documentation URL: https://developers.google.com/people/
 * @class
 */
class People {
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
    this._rootUrl = 'https://people.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.people = {};
    this.people.createContact = (params) => this._makeRequest('v1/people:createContact', 'POST', params);
    this.people.deleteContact = (params) => this._makeRequest('v1/{+resourceName}:deleteContact', 'DELETE', params);
    this.people.deleteContactPhoto = (params) => this._makeRequest('v1/{+resourceName}:deleteContactPhoto', 'DELETE', params);
    this.people.updateContact = (params) => this._makeRequest('v1/{+resourceName}:updateContact', 'PATCH', params);
    this.people.updateContactPhoto = (params) => this._makeRequest('v1/{+resourceName}:updateContactPhoto', 'PATCH', params);
    this.people.searchContacts = (params) => this._makeRequest('v1/people:searchContacts', 'GET', params);
    this.people.batchDeleteContacts = (params) => this._makeRequest('v1/people:batchDeleteContacts', 'POST', params);
    this.people.batchCreateContacts = (params) => this._makeRequest('v1/people:batchCreateContacts', 'POST', params);
    this.people.batchUpdateContacts = (params) => this._makeRequest('v1/people:batchUpdateContacts', 'POST', params);
    this.people.get = (params) => this._makeRequest('v1/{+resourceName}', 'GET', params);
    this.people.getBatchGet = (params) => this._makeRequest('v1/people:batchGet', 'GET', params);
    this.people.listDirectoryPeople = (params) => this._makeRequest('v1/people:listDirectoryPeople', 'GET', params);
    this.people.searchDirectoryPeople = (params) => this._makeRequest('v1/people:searchDirectoryPeople', 'GET', params);

    this.people.connections = {};
    this.people.connections.list = (params) => this._makeRequest('v1/{+resourceName}/connections', 'GET', params);

    this.otherContacts = {};
    this.otherContacts.list = (params) => this._makeRequest('v1/otherContacts', 'GET', params);
    this.otherContacts.copyOtherContactToMyContactsGroup = (params) => this._makeRequest('v1/{+resourceName}:copyOtherContactToMyContactsGroup', 'POST', params);
    this.otherContacts.search = (params) => this._makeRequest('v1/otherContacts:search', 'GET', params);

    this.contactGroups = {};
    this.contactGroups.batchGet = (params) => this._makeRequest('v1/contactGroups:batchGet', 'GET', params);
    this.contactGroups.create = (params) => this._makeRequest('v1/contactGroups', 'POST', params);
    this.contactGroups.delete = (params) => this._makeRequest('v1/{+resourceName}', 'DELETE', params);
    this.contactGroups.get = (params) => this._makeRequest('v1/{+resourceName}', 'GET', params);
    this.contactGroups.list = (params) => this._makeRequest('v1/contactGroups', 'GET', params);
    this.contactGroups.update = (params) => this._makeRequest('v1/{+resourceName}', 'PUT', params);

    this.contactGroups.members = {};
    this.contactGroups.members.modify = (params) => this._makeRequest('v1/{+resourceName}/members:modify', 'POST', params);
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
