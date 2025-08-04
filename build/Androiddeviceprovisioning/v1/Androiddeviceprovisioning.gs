
/**
 * Google Apps Script client library for the Android Device Provisioning Partner API
 * Documentation URL: https://developers.google.com/zero-touch/
 * @class
 */
class Androiddeviceprovisioning {
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
    this._rootUrl = 'https://androiddeviceprovisioning.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.partners = {};

    this.partners.vendors = {};
    this.partners.vendors.list = (params) => this._makeRequest('v1/{+parent}/vendors', 'GET', params);

    this.partners.vendors.customers = {};
    this.partners.vendors.customers.list = (params) => this._makeRequest('v1/{+parent}/customers', 'GET', params);

    this.partners.customers = {};
    this.partners.customers.create = (params) => this._makeRequest('v1/{+parent}/customers', 'POST', params);
    this.partners.customers.list = (params) => this._makeRequest('v1/partners/{+partnerId}/customers', 'GET', params);

    this.partners.devices = {};
    this.partners.devices.claim = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:claim', 'POST', params);
    this.partners.devices.unclaim = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:unclaim', 'POST', params);
    this.partners.devices.findByIdentifier = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:findByIdentifier', 'POST', params);
    this.partners.devices.findByOwner = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:findByOwner', 'POST', params);
    this.partners.devices.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.partners.devices.getSimLockState = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:getSimLockState', 'POST', params);
    this.partners.devices.metadata = (params) => this._makeRequest('v1/partners/{+metadataOwnerId}/devices/{+deviceId}/metadata', 'POST', params);
    this.partners.devices.claimAsync = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:claimAsync', 'POST', params);
    this.partners.devices.unclaimAsync = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:unclaimAsync', 'POST', params);
    this.partners.devices.updateMetadataAsync = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:updateMetadataAsync', 'POST', params);

    this.customers = {};
    this.customers.list = (params) => this._makeRequest('v1/customers', 'GET', params);

    this.customers.configurations = {};
    this.customers.configurations.create = (params) => this._makeRequest('v1/{+parent}/configurations', 'POST', params);
    this.customers.configurations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.customers.configurations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.customers.configurations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.customers.configurations.list = (params) => this._makeRequest('v1/{+parent}/configurations', 'GET', params);

    this.customers.dpcs = {};
    this.customers.dpcs.list = (params) => this._makeRequest('v1/{+parent}/dpcs', 'GET', params);

    this.customers.devices = {};
    this.customers.devices.list = (params) => this._makeRequest('v1/{+parent}/devices', 'GET', params);
    this.customers.devices.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.customers.devices.unclaim = (params) => this._makeRequest('v1/{+parent}/devices:unclaim', 'POST', params);
    this.customers.devices.applyConfiguration = (params) => this._makeRequest('v1/{+parent}/devices:applyConfiguration', 'POST', params);
    this.customers.devices.removeConfiguration = (params) => this._makeRequest('v1/{+parent}/devices:removeConfiguration', 'POST', params);
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
