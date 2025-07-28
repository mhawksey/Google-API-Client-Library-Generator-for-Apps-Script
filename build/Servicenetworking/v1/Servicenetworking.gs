
/**
 * Google Apps Script client library for the Service Networking API
 * Documentation URL: https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started
 * @class
 */
class Servicenetworking {
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
    this._rootUrl = 'https://servicenetworking.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.services = {};
    this.services.disableVpcServiceControls = (params) => this._makeRequest('v1/{+parent}:disableVpcServiceControls', 'PATCH', params);
    this.services.enableVpcServiceControls = (params) => this._makeRequest('v1/{+parent}:enableVpcServiceControls', 'PATCH', params);
    this.services.addSubnetwork = (params) => this._makeRequest('v1/{+parent}:addSubnetwork', 'POST', params);
    this.services.searchRange = (params) => this._makeRequest('v1/{+parent}:searchRange', 'POST', params);
    this.services.validate = (params) => this._makeRequest('v1/{+parent}:validate', 'POST', params);

    this.services.connections = {};
    this.services.connections.list = (params) => this._makeRequest('v1/{+parent}/connections', 'GET', params);
    this.services.connections.create = (params) => this._makeRequest('v1/{+parent}/connections', 'POST', params);
    this.services.connections.deleteConnection = (params) => this._makeRequest('v1/{+name}', 'POST', params);
    this.services.connections.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.services.projects = {};

    this.services.projects.global = {};

    this.services.projects.global.networks = {};
    this.services.projects.global.networks.getVpcServiceControls = (params) => this._makeRequest('v1/{+name}/vpcServiceControls', 'GET', params);
    this.services.projects.global.networks.updateConsumerConfig = (params) => this._makeRequest('v1/{+parent}:updateConsumerConfig', 'PATCH', params);
    this.services.projects.global.networks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.services.projects.global.networks.dnsZones = {};
    this.services.projects.global.networks.dnsZones.list = (params) => this._makeRequest('v1/{+parent}/dnsZones:list', 'GET', params);
    this.services.projects.global.networks.dnsZones.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.services.projects.global.networks.peeredDnsDomains = {};
    this.services.projects.global.networks.peeredDnsDomains.create = (params) => this._makeRequest('v1/{+parent}/peeredDnsDomains', 'POST', params);
    this.services.projects.global.networks.peeredDnsDomains.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.services.projects.global.networks.peeredDnsDomains.list = (params) => this._makeRequest('v1/{+parent}/peeredDnsDomains', 'GET', params);

    this.services.roles = {};
    this.services.roles.add = (params) => this._makeRequest('v1/{+parent}/roles:add', 'POST', params);

    this.services.dnsZones = {};
    this.services.dnsZones.add = (params) => this._makeRequest('v1/{+parent}/dnsZones:add', 'POST', params);
    this.services.dnsZones.remove = (params) => this._makeRequest('v1/{+parent}/dnsZones:remove', 'POST', params);

    this.services.dnsRecordSets = {};
    this.services.dnsRecordSets.add = (params) => this._makeRequest('v1/{+parent}/dnsRecordSets:add', 'POST', params);
    this.services.dnsRecordSets.remove = (params) => this._makeRequest('v1/{+parent}/dnsRecordSets:remove', 'POST', params);
    this.services.dnsRecordSets.update = (params) => this._makeRequest('v1/{+parent}/dnsRecordSets:update', 'POST', params);
    this.services.dnsRecordSets.get = (params) => this._makeRequest('v1/{+parent}/dnsRecordSets:get', 'GET', params);
    this.services.dnsRecordSets.list = (params) => this._makeRequest('v1/{+parent}/dnsRecordSets:list', 'GET', params);
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
