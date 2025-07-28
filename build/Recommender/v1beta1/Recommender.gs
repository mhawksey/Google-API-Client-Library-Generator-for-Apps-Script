
/**
 * Google Apps Script client library for the Recommender API
 * Documentation URL: https://cloud.google.com/recommender/docs/
 * @class
 */
class Recommender {
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
    this._rootUrl = 'https://recommender.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    this.projects.locations.recommenders = {};
    this.projects.locations.recommenders.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.recommenders.updateConfig = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.recommenders.recommendations = {};
    this.projects.locations.recommenders.recommendations.list = (params) => this._makeRequest('v1beta1/{+parent}/recommendations', 'GET', params);
    this.projects.locations.recommenders.recommendations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.recommenders.recommendations.markDismissed = (params) => this._makeRequest('v1beta1/{+name}:markDismissed', 'POST', params);
    this.projects.locations.recommenders.recommendations.markClaimed = (params) => this._makeRequest('v1beta1/{+name}:markClaimed', 'POST', params);
    this.projects.locations.recommenders.recommendations.markSucceeded = (params) => this._makeRequest('v1beta1/{+name}:markSucceeded', 'POST', params);
    this.projects.locations.recommenders.recommendations.markFailed = (params) => this._makeRequest('v1beta1/{+name}:markFailed', 'POST', params);

    this.projects.locations.insightTypes = {};
    this.projects.locations.insightTypes.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.insightTypes.updateConfig = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.insightTypes.insights = {};
    this.projects.locations.insightTypes.insights.list = (params) => this._makeRequest('v1beta1/{+parent}/insights', 'GET', params);
    this.projects.locations.insightTypes.insights.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.insightTypes.insights.markAccepted = (params) => this._makeRequest('v1beta1/{+name}:markAccepted', 'POST', params);

    this.billingAccounts = {};

    this.billingAccounts.locations = {};
    this.billingAccounts.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    this.billingAccounts.locations.recommenders = {};
    this.billingAccounts.locations.recommenders.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.billingAccounts.locations.recommenders.updateConfig = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.billingAccounts.locations.recommenders.recommendations = {};
    this.billingAccounts.locations.recommenders.recommendations.list = (params) => this._makeRequest('v1beta1/{+parent}/recommendations', 'GET', params);
    this.billingAccounts.locations.recommenders.recommendations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.billingAccounts.locations.recommenders.recommendations.markDismissed = (params) => this._makeRequest('v1beta1/{+name}:markDismissed', 'POST', params);
    this.billingAccounts.locations.recommenders.recommendations.markClaimed = (params) => this._makeRequest('v1beta1/{+name}:markClaimed', 'POST', params);
    this.billingAccounts.locations.recommenders.recommendations.markSucceeded = (params) => this._makeRequest('v1beta1/{+name}:markSucceeded', 'POST', params);
    this.billingAccounts.locations.recommenders.recommendations.markFailed = (params) => this._makeRequest('v1beta1/{+name}:markFailed', 'POST', params);

    this.billingAccounts.locations.insightTypes = {};
    this.billingAccounts.locations.insightTypes.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.billingAccounts.locations.insightTypes.updateConfig = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.billingAccounts.locations.insightTypes.insights = {};
    this.billingAccounts.locations.insightTypes.insights.list = (params) => this._makeRequest('v1beta1/{+parent}/insights', 'GET', params);
    this.billingAccounts.locations.insightTypes.insights.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.billingAccounts.locations.insightTypes.insights.markAccepted = (params) => this._makeRequest('v1beta1/{+name}:markAccepted', 'POST', params);

    this.folders = {};

    this.folders.locations = {};
    this.folders.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    this.folders.locations.insightTypes = {};

    this.folders.locations.insightTypes.insights = {};
    this.folders.locations.insightTypes.insights.list = (params) => this._makeRequest('v1beta1/{+parent}/insights', 'GET', params);
    this.folders.locations.insightTypes.insights.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.folders.locations.insightTypes.insights.markAccepted = (params) => this._makeRequest('v1beta1/{+name}:markAccepted', 'POST', params);

    this.folders.locations.recommenders = {};

    this.folders.locations.recommenders.recommendations = {};
    this.folders.locations.recommenders.recommendations.list = (params) => this._makeRequest('v1beta1/{+parent}/recommendations', 'GET', params);
    this.folders.locations.recommenders.recommendations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.folders.locations.recommenders.recommendations.markDismissed = (params) => this._makeRequest('v1beta1/{+name}:markDismissed', 'POST', params);
    this.folders.locations.recommenders.recommendations.markClaimed = (params) => this._makeRequest('v1beta1/{+name}:markClaimed', 'POST', params);
    this.folders.locations.recommenders.recommendations.markSucceeded = (params) => this._makeRequest('v1beta1/{+name}:markSucceeded', 'POST', params);
    this.folders.locations.recommenders.recommendations.markFailed = (params) => this._makeRequest('v1beta1/{+name}:markFailed', 'POST', params);

    this.organizations = {};

    this.organizations.locations = {};
    this.organizations.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    this.organizations.locations.recommenders = {};
    this.organizations.locations.recommenders.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.organizations.locations.recommenders.updateConfig = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.organizations.locations.recommenders.recommendations = {};
    this.organizations.locations.recommenders.recommendations.list = (params) => this._makeRequest('v1beta1/{+parent}/recommendations', 'GET', params);
    this.organizations.locations.recommenders.recommendations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.organizations.locations.recommenders.recommendations.markDismissed = (params) => this._makeRequest('v1beta1/{+name}:markDismissed', 'POST', params);
    this.organizations.locations.recommenders.recommendations.markClaimed = (params) => this._makeRequest('v1beta1/{+name}:markClaimed', 'POST', params);
    this.organizations.locations.recommenders.recommendations.markSucceeded = (params) => this._makeRequest('v1beta1/{+name}:markSucceeded', 'POST', params);
    this.organizations.locations.recommenders.recommendations.markFailed = (params) => this._makeRequest('v1beta1/{+name}:markFailed', 'POST', params);

    this.organizations.locations.insightTypes = {};
    this.organizations.locations.insightTypes.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.organizations.locations.insightTypes.updateConfig = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.organizations.locations.insightTypes.insights = {};
    this.organizations.locations.insightTypes.insights.list = (params) => this._makeRequest('v1beta1/{+parent}/insights', 'GET', params);
    this.organizations.locations.insightTypes.insights.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.organizations.locations.insightTypes.insights.markAccepted = (params) => this._makeRequest('v1beta1/{+name}:markAccepted', 'POST', params);

    this.recommenders = {};
    this.recommenders.list = (params) => this._makeRequest('v1beta1/recommenders', 'GET', params);

    this.insightTypes = {};
    this.insightTypes.list = (params) => this._makeRequest('v1beta1/insightTypes', 'GET', params);
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
