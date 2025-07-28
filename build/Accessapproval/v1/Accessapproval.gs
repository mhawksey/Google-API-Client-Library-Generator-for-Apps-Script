
/**
 * Google Apps Script client library for the Access Approval API
 * Documentation URL: https://cloud.google.com/assured-workloads/access-approval/docs
 * @class
 */
class Accessapproval {
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
    this._rootUrl = 'https://accessapproval.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};
    this.projects.getAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.updateAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.deleteAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.getServiceAccount = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.approvalRequests = {};
    this.projects.approvalRequests.list = (params) => this._makeRequest('v1/{+parent}/approvalRequests', 'GET', params);
    this.projects.approvalRequests.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.approvalRequests.approve = (params) => this._makeRequest('v1/{+name}:approve', 'POST', params);
    this.projects.approvalRequests.dismiss = (params) => this._makeRequest('v1/{+name}:dismiss', 'POST', params);
    this.projects.approvalRequests.invalidate = (params) => this._makeRequest('v1/{+name}:invalidate', 'POST', params);

    this.folders = {};
    this.folders.getAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.folders.updateAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.folders.deleteAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.folders.getServiceAccount = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.folders.approvalRequests = {};
    this.folders.approvalRequests.list = (params) => this._makeRequest('v1/{+parent}/approvalRequests', 'GET', params);
    this.folders.approvalRequests.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.folders.approvalRequests.approve = (params) => this._makeRequest('v1/{+name}:approve', 'POST', params);
    this.folders.approvalRequests.dismiss = (params) => this._makeRequest('v1/{+name}:dismiss', 'POST', params);
    this.folders.approvalRequests.invalidate = (params) => this._makeRequest('v1/{+name}:invalidate', 'POST', params);

    this.organizations = {};
    this.organizations.getAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.updateAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.deleteAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.getServiceAccount = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.approvalRequests = {};
    this.organizations.approvalRequests.list = (params) => this._makeRequest('v1/{+parent}/approvalRequests', 'GET', params);
    this.organizations.approvalRequests.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.approvalRequests.approve = (params) => this._makeRequest('v1/{+name}:approve', 'POST', params);
    this.organizations.approvalRequests.dismiss = (params) => this._makeRequest('v1/{+name}:dismiss', 'POST', params);
    this.organizations.approvalRequests.invalidate = (params) => this._makeRequest('v1/{+name}:invalidate', 'POST', params);
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
