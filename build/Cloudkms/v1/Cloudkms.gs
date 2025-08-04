
/**
 * Google Apps Script client library for the Cloud Key Management Service (KMS) API
 * Documentation URL: https://cloud.google.com/kms/
 * @class
 */
class Cloudkms {
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
    this._rootUrl = 'https://cloudkms.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.folders = {};
    this.folders.updateAutokeyConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.folders.getAutokeyConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.folders.getKajPolicyConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.folders.updateKajPolicyConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects = {};
    this.projects.showEffectiveAutokeyConfig = (params) => this._makeRequest('v1/{+parent}:showEffectiveAutokeyConfig', 'GET', params);
    this.projects.getKajPolicyConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.updateKajPolicyConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.showEffectiveKeyAccessJustificationsPolicyConfig = (params) => this._makeRequest('v1/{+project}:showEffectiveKeyAccessJustificationsPolicyConfig', 'GET', params);
    this.projects.showEffectiveKeyAccessJustificationsEnrollmentConfig = (params) => this._makeRequest('v1/{+project}:showEffectiveKeyAccessJustificationsEnrollmentConfig', 'GET', params);

    this.projects.locations = {};
    this.projects.locations.getEkmConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.updateEkmConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.generateRandomBytes = (params) => this._makeRequest('v1/{+location}:generateRandomBytes', 'POST', params);
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.keyHandles = {};
    this.projects.locations.keyHandles.create = (params) => this._makeRequest('v1/{+parent}/keyHandles', 'POST', params);
    this.projects.locations.keyHandles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.keyHandles.list = (params) => this._makeRequest('v1/{+parent}/keyHandles', 'GET', params);

    this.projects.locations.ekmConnections = {};
    this.projects.locations.ekmConnections.list = (params) => this._makeRequest('v1/{+parent}/ekmConnections', 'GET', params);
    this.projects.locations.ekmConnections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.ekmConnections.create = (params) => this._makeRequest('v1/{+parent}/ekmConnections', 'POST', params);
    this.projects.locations.ekmConnections.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.ekmConnections.verifyConnectivity = (params) => this._makeRequest('v1/{+name}:verifyConnectivity', 'GET', params);
    this.projects.locations.ekmConnections.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.ekmConnections.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.ekmConnections.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.keyRings = {};
    this.projects.locations.keyRings.list = (params) => this._makeRequest('v1/{+parent}/keyRings', 'GET', params);
    this.projects.locations.keyRings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.keyRings.create = (params) => this._makeRequest('v1/{+parent}/keyRings', 'POST', params);
    this.projects.locations.keyRings.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.keyRings.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.keyRings.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.keyRings.cryptoKeys = {};
    this.projects.locations.keyRings.cryptoKeys.list = (params) => this._makeRequest('v1/{+parent}/cryptoKeys', 'GET', params);
    this.projects.locations.keyRings.cryptoKeys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.keyRings.cryptoKeys.create = (params) => this._makeRequest('v1/{+parent}/cryptoKeys', 'POST', params);
    this.projects.locations.keyRings.cryptoKeys.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.keyRings.cryptoKeys.updatePrimaryVersion = (params) => this._makeRequest('v1/{+name}:updatePrimaryVersion', 'POST', params);
    this.projects.locations.keyRings.cryptoKeys.encrypt = (params) => this._makeRequest('v1/{+name}:encrypt', 'POST', params);
    this.projects.locations.keyRings.cryptoKeys.decrypt = (params) => this._makeRequest('v1/{+name}:decrypt', 'POST', params);
    this.projects.locations.keyRings.cryptoKeys.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.keyRings.cryptoKeys.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.keyRings.cryptoKeys.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions = {};
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list = (params) => this._makeRequest('v1/{+parent}/cryptoKeyVersions', 'GET', params);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.getPublicKey = (params) => this._makeRequest('v1/{+name}/publicKey', 'GET', params);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create = (params) => this._makeRequest('v1/{+parent}/cryptoKeyVersions', 'POST', params);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.import = (params) => this._makeRequest('v1/{+parent}/cryptoKeyVersions:import', 'POST', params);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy = (params) => this._makeRequest('v1/{+name}:destroy', 'POST', params);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore = (params) => this._makeRequest('v1/{+name}:restore', 'POST', params);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.rawEncrypt = (params) => this._makeRequest('v1/{+name}:rawEncrypt', 'POST', params);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.rawDecrypt = (params) => this._makeRequest('v1/{+name}:rawDecrypt', 'POST', params);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricSign = (params) => this._makeRequest('v1/{+name}:asymmetricSign', 'POST', params);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricDecrypt = (params) => this._makeRequest('v1/{+name}:asymmetricDecrypt', 'POST', params);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.macSign = (params) => this._makeRequest('v1/{+name}:macSign', 'POST', params);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.macVerify = (params) => this._makeRequest('v1/{+name}:macVerify', 'POST', params);

    this.projects.locations.keyRings.importJobs = {};
    this.projects.locations.keyRings.importJobs.list = (params) => this._makeRequest('v1/{+parent}/importJobs', 'GET', params);
    this.projects.locations.keyRings.importJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.keyRings.importJobs.create = (params) => this._makeRequest('v1/{+parent}/importJobs', 'POST', params);
    this.projects.locations.keyRings.importJobs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.keyRings.importJobs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.keyRings.importJobs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.ekmConfig = {};
    this.projects.locations.ekmConfig.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.ekmConfig.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.ekmConfig.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.organizations = {};
    this.organizations.getKajPolicyConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.updateKajPolicyConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
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
