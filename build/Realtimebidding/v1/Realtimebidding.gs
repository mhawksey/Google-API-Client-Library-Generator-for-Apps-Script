
/**
 * Google Apps Script client library for the Real-time Bidding API
 * Documentation URL: https://developers.google.com/authorized-buyers/apis/realtimebidding/reference/rest/
 * @class
 */
class Realtimebidding {
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
    this._rootUrl = 'https://realtimebidding.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.bidders = {};
    this.bidders.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.bidders.list = (params) => this._makeRequest('v1/bidders', 'GET', params);

    this.bidders.endpoints = {};
    this.bidders.endpoints.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.bidders.endpoints.list = (params) => this._makeRequest('v1/{+parent}/endpoints', 'GET', params);
    this.bidders.endpoints.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.bidders.creatives = {};
    this.bidders.creatives.list = (params) => this._makeRequest('v1/{+parent}/creatives', 'GET', params);
    this.bidders.creatives.watch = (params) => this._makeRequest('v1/{+parent}/creatives:watch', 'POST', params);

    this.bidders.pretargetingConfigs = {};
    this.bidders.pretargetingConfigs.list = (params) => this._makeRequest('v1/{+parent}/pretargetingConfigs', 'GET', params);
    this.bidders.pretargetingConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.bidders.pretargetingConfigs.create = (params) => this._makeRequest('v1/{+parent}/pretargetingConfigs', 'POST', params);
    this.bidders.pretargetingConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.bidders.pretargetingConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.bidders.pretargetingConfigs.activate = (params) => this._makeRequest('v1/{+name}:activate', 'POST', params);
    this.bidders.pretargetingConfigs.suspend = (params) => this._makeRequest('v1/{+name}:suspend', 'POST', params);
    this.bidders.pretargetingConfigs.addTargetedSites = (params) => this._makeRequest('v1/{+pretargetingConfig}:addTargetedSites', 'POST', params);
    this.bidders.pretargetingConfigs.removeTargetedSites = (params) => this._makeRequest('v1/{+pretargetingConfig}:removeTargetedSites', 'POST', params);
    this.bidders.pretargetingConfigs.addTargetedApps = (params) => this._makeRequest('v1/{+pretargetingConfig}:addTargetedApps', 'POST', params);
    this.bidders.pretargetingConfigs.removeTargetedApps = (params) => this._makeRequest('v1/{+pretargetingConfig}:removeTargetedApps', 'POST', params);
    this.bidders.pretargetingConfigs.addTargetedPublishers = (params) => this._makeRequest('v1/{+pretargetingConfig}:addTargetedPublishers', 'POST', params);
    this.bidders.pretargetingConfigs.removeTargetedPublishers = (params) => this._makeRequest('v1/{+pretargetingConfig}:removeTargetedPublishers', 'POST', params);

    this.bidders.publisherConnections = {};
    this.bidders.publisherConnections.list = (params) => this._makeRequest('v1/{+parent}/publisherConnections', 'GET', params);
    this.bidders.publisherConnections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.bidders.publisherConnections.batchApprove = (params) => this._makeRequest('v1/{+parent}/publisherConnections:batchApprove', 'POST', params);
    this.bidders.publisherConnections.batchReject = (params) => this._makeRequest('v1/{+parent}/publisherConnections:batchReject', 'POST', params);

    this.buyers = {};
    this.buyers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.buyers.list = (params) => this._makeRequest('v1/buyers', 'GET', params);
    this.buyers.getRemarketingTag = (params) => this._makeRequest('v1/{+name}:getRemarketingTag', 'GET', params);

    this.buyers.creatives = {};
    this.buyers.creatives.list = (params) => this._makeRequest('v1/{+parent}/creatives', 'GET', params);
    this.buyers.creatives.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.buyers.creatives.create = (params) => this._makeRequest('v1/{+parent}/creatives', 'POST', params);
    this.buyers.creatives.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.buyers.userLists = {};
    this.buyers.userLists.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.buyers.userLists.list = (params) => this._makeRequest('v1/{+parent}/userLists', 'GET', params);
    this.buyers.userLists.create = (params) => this._makeRequest('v1/{+parent}/userLists', 'POST', params);
    this.buyers.userLists.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.buyers.userLists.open = (params) => this._makeRequest('v1/{+name}:open', 'POST', params);
    this.buyers.userLists.close = (params) => this._makeRequest('v1/{+name}:close', 'POST', params);
    this.buyers.userLists.getRemarketingTag = (params) => this._makeRequest('v1/{+name}:getRemarketingTag', 'GET', params);
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
