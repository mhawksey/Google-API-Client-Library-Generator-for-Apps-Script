
/**
 * Google Apps Script client library for the Cloud Identity API
 * Documentation URL: https://cloud.google.com/identity/
 * @class
 */
class Cloudidentity {
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
    this._rootUrl = 'https://cloudidentity.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.devices = {};
    this.devices.create = (params) => this._makeRequest('v1/devices', 'POST', params);
    this.devices.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.devices.list = (params) => this._makeRequest('v1/devices', 'GET', params);
    this.devices.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.devices.wipe = (params) => this._makeRequest('v1/{+name}:wipe', 'POST', params);
    this.devices.cancelWipe = (params) => this._makeRequest('v1/{+name}:cancelWipe', 'POST', params);

    this.devices.deviceUsers = {};
    this.devices.deviceUsers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.devices.deviceUsers.list = (params) => this._makeRequest('v1/{+parent}/deviceUsers', 'GET', params);
    this.devices.deviceUsers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.devices.deviceUsers.lookup = (params) => this._makeRequest('v1/{+parent}:lookup', 'GET', params);
    this.devices.deviceUsers.approve = (params) => this._makeRequest('v1/{+name}:approve', 'POST', params);
    this.devices.deviceUsers.block = (params) => this._makeRequest('v1/{+name}:block', 'POST', params);
    this.devices.deviceUsers.wipe = (params) => this._makeRequest('v1/{+name}:wipe', 'POST', params);
    this.devices.deviceUsers.cancelWipe = (params) => this._makeRequest('v1/{+name}:cancelWipe', 'POST', params);

    this.devices.deviceUsers.clientStates = {};
    this.devices.deviceUsers.clientStates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.devices.deviceUsers.clientStates.list = (params) => this._makeRequest('v1/{+parent}/clientStates', 'GET', params);
    this.devices.deviceUsers.clientStates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.groups = {};
    this.groups.create = (params) => this._makeRequest('v1/groups', 'POST', params);
    this.groups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.groups.getSecuritySettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.groups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.groups.updateSecuritySettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.groups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.groups.lookup = (params) => this._makeRequest('v1/groups:lookup', 'GET', params);
    this.groups.search = (params) => this._makeRequest('v1/groups:search', 'GET', params);
    this.groups.list = (params) => this._makeRequest('v1/groups', 'GET', params);

    this.groups.memberships = {};
    this.groups.memberships.create = (params) => this._makeRequest('v1/{+parent}/memberships', 'POST', params);
    this.groups.memberships.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.groups.memberships.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.groups.memberships.lookup = (params) => this._makeRequest('v1/{+parent}/memberships:lookup', 'GET', params);
    this.groups.memberships.list = (params) => this._makeRequest('v1/{+parent}/memberships', 'GET', params);
    this.groups.memberships.modifyMembershipRoles = (params) => this._makeRequest('v1/{+name}:modifyMembershipRoles', 'POST', params);
    this.groups.memberships.searchTransitiveMemberships = (params) => this._makeRequest('v1/{+parent}/memberships:searchTransitiveMemberships', 'GET', params);
    this.groups.memberships.searchTransitiveGroups = (params) => this._makeRequest('v1/{+parent}/memberships:searchTransitiveGroups', 'GET', params);
    this.groups.memberships.checkTransitiveMembership = (params) => this._makeRequest('v1/{+parent}/memberships:checkTransitiveMembership', 'GET', params);
    this.groups.memberships.getMembershipGraph = (params) => this._makeRequest('v1/{+parent}/memberships:getMembershipGraph', 'GET', params);
    this.groups.memberships.searchDirectGroups = (params) => this._makeRequest('v1/{+parent}/memberships:searchDirectGroups', 'GET', params);

    this.inboundSamlSsoProfiles = {};
    this.inboundSamlSsoProfiles.create = (params) => this._makeRequest('v1/inboundSamlSsoProfiles', 'POST', params);
    this.inboundSamlSsoProfiles.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.inboundSamlSsoProfiles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.inboundSamlSsoProfiles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.inboundSamlSsoProfiles.list = (params) => this._makeRequest('v1/inboundSamlSsoProfiles', 'GET', params);

    this.inboundSamlSsoProfiles.idpCredentials = {};
    this.inboundSamlSsoProfiles.idpCredentials.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.inboundSamlSsoProfiles.idpCredentials.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.inboundSamlSsoProfiles.idpCredentials.list = (params) => this._makeRequest('v1/{+parent}/idpCredentials', 'GET', params);
    this.inboundSamlSsoProfiles.idpCredentials.add = (params) => this._makeRequest('v1/{+parent}/idpCredentials:add', 'POST', params);

    this.inboundSsoAssignments = {};
    this.inboundSsoAssignments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.inboundSsoAssignments.create = (params) => this._makeRequest('v1/inboundSsoAssignments', 'POST', params);
    this.inboundSsoAssignments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.inboundSsoAssignments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.inboundSsoAssignments.list = (params) => this._makeRequest('v1/inboundSsoAssignments', 'GET', params);

    this.policies = {};
    this.policies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.policies.list = (params) => this._makeRequest('v1/policies', 'GET', params);

    this.customers = {};

    this.customers.userinvitations = {};
    this.customers.userinvitations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.customers.userinvitations.list = (params) => this._makeRequest('v1/{+parent}/userinvitations', 'GET', params);
    this.customers.userinvitations.send = (params) => this._makeRequest('v1/{+name}:send', 'POST', params);
    this.customers.userinvitations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.customers.userinvitations.isInvitableUser = (params) => this._makeRequest('v1/{+name}:isInvitableUser', 'GET', params);
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
