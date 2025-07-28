
/**
 * Google Apps Script client library for the Cloud DNS API
 * Documentation URL: https://cloud.google.com/dns/docs
 * @class
 */
class Dns {
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
    this._rootUrl = 'https://dns.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.resourceRecordSets = {};
    this.resourceRecordSets.list = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets', 'GET', params);
    this.resourceRecordSets.create = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets', 'POST', params);
    this.resourceRecordSets.get = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}', 'GET', params);
    this.resourceRecordSets.delete = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}', 'DELETE', params);
    this.resourceRecordSets.patch = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}', 'PATCH', params);

    this.changes = {};
    this.changes.create = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/changes', 'POST', params);
    this.changes.get = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/changes/{changeId}', 'GET', params);
    this.changes.list = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/changes', 'GET', params);

    this.dnsKeys = {};
    this.dnsKeys.get = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}', 'GET', params);
    this.dnsKeys.list = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/dnsKeys', 'GET', params);

    this.projects = {};
    this.projects.get = (params) => this._makeRequest('dns/v1/projects/{project}', 'GET', params);

    this.managedZoneOperations = {};
    this.managedZoneOperations.get = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/operations/{operation}', 'GET', params);
    this.managedZoneOperations.list = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/operations', 'GET', params);

    this.managedZones = {};
    this.managedZones.create = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones', 'POST', params);
    this.managedZones.get = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}', 'GET', params);
    this.managedZones.list = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones', 'GET', params);
    this.managedZones.delete = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}', 'DELETE', params);
    this.managedZones.patch = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}', 'PATCH', params);
    this.managedZones.update = (params) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}', 'PUT', params);
    this.managedZones.setIamPolicy = (params) => this._makeRequest('dns/v1/{+resource}:setIamPolicy', 'POST', params);
    this.managedZones.getIamPolicy = (params) => this._makeRequest('dns/v1/{+resource}:getIamPolicy', 'POST', params);
    this.managedZones.testIamPermissions = (params) => this._makeRequest('dns/v1/{+resource}:testIamPermissions', 'POST', params);

    this.policies = {};
    this.policies.create = (params) => this._makeRequest('dns/v1/projects/{project}/policies', 'POST', params);
    this.policies.get = (params) => this._makeRequest('dns/v1/projects/{project}/policies/{policy}', 'GET', params);
    this.policies.list = (params) => this._makeRequest('dns/v1/projects/{project}/policies', 'GET', params);
    this.policies.delete = (params) => this._makeRequest('dns/v1/projects/{project}/policies/{policy}', 'DELETE', params);
    this.policies.patch = (params) => this._makeRequest('dns/v1/projects/{project}/policies/{policy}', 'PATCH', params);
    this.policies.update = (params) => this._makeRequest('dns/v1/projects/{project}/policies/{policy}', 'PUT', params);

    this.responsePolicies = {};
    this.responsePolicies.create = (params) => this._makeRequest('dns/v1/projects/{project}/responsePolicies', 'POST', params);
    this.responsePolicies.get = (params) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}', 'GET', params);
    this.responsePolicies.list = (params) => this._makeRequest('dns/v1/projects/{project}/responsePolicies', 'GET', params);
    this.responsePolicies.delete = (params) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}', 'DELETE', params);
    this.responsePolicies.patch = (params) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}', 'PATCH', params);
    this.responsePolicies.update = (params) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}', 'PUT', params);

    this.responsePolicyRules = {};
    this.responsePolicyRules.create = (params) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules', 'POST', params);
    this.responsePolicyRules.get = (params) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'GET', params);
    this.responsePolicyRules.delete = (params) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'DELETE', params);
    this.responsePolicyRules.list = (params) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules', 'GET', params);
    this.responsePolicyRules.patch = (params) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'PATCH', params);
    this.responsePolicyRules.update = (params) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'PUT', params);
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
