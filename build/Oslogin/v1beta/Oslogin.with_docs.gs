
/**
 * Google Apps Script client library for the Cloud OS Login API
 * Documentation URL: https://cloud.google.com/compute/docs/oslogin/
 * @class
 */
class Oslogin {
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
    this._rootUrl = 'https://oslogin.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Signs an SSH public key for a user to authenticate to a virtual machine on Google Compute Engine.
     * @param {string} params.parent - (Required) Required. The parent for the signing request. Format: projects/{project}/locations/{location}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.signSshPublicKey = (params) => this._makeRequest('v1beta/{+parent}:signSshPublicKey', 'POST', params);

    this.users = {};

    /**
     * Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
     * @param {string} params.name - (Required) Required. The unique ID for the user in format `users/{user}`.
     * @param {string} params.projectId - Required. The project ID of the Google Cloud Platform project.
     * @param {string} params.systemId - Optional. A system ID for filtering the results of the request.
     * @param {string} params.view - The view configures whether to retrieve security keys information.
     * @return {object} The API response object.
     */
    this.users.getLoginProfile = (params) => this._makeRequest('v1beta/{+name}/loginProfile', 'GET', params);

    /**
     * Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
     * @param {string} params.parent - (Required) The unique ID for the user in format `users/{user}`.
     * @param {string} params.projectId - The project ID of the Google Cloud Platform project.
     * @param {string} params.regions - Optional. The regions to which to assert that the key was written. If unspecified, defaults to all regions. Regions are listed at https://cloud.google.com/about/locations#region.
     * @param {string} params.view - The view configures whether to retrieve security keys information.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.importSshPublicKey = (params) => this._makeRequest('v1beta/{+parent}:importSshPublicKey', 'POST', params);

    this.users.sshPublicKeys = {};

    /**
     * Create an SSH public key
     * @param {string} params.parent - (Required) Required. The unique ID for the user in format `users/{user}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.sshPublicKeys.create = (params) => this._makeRequest('v1beta/{+parent}/sshPublicKeys', 'POST', params);

    /**
     * Deletes an SSH public key.
     * @param {string} params.name - (Required) Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
     * @return {object} The API response object.
     */
    this.users.sshPublicKeys.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Retrieves an SSH public key.
     * @param {string} params.name - (Required) Required. The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
     * @return {object} The API response object.
     */
    this.users.sshPublicKeys.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Updates an SSH public key and returns the profile information. This method supports patch semantics.
     * @param {string} params.name - (Required) Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
     * @param {string} params.updateMask - Mask to control which fields get updated. Updates all if not present.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.sshPublicKeys.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    this.users.projects = {};

    /**
     * Deletes a POSIX account.
     * @param {string} params.name - (Required) Required. A reference to the POSIX account to update. POSIX accounts are identified by the project ID they are associated with. A reference to the POSIX account is in format `users/{user}/projects/{project}`.
     * @return {object} The API response object.
     */
    this.users.projects.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Create a POSIX account if it doesn't exist.
     * @param {string} params.name - (Required) Required. The unique ID for the user in format `users/{user}/projects/{project}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.projects.provisionPosixAccount = (params) => this._makeRequest('v1beta/{+name}', 'POST', params);

    this.users.projects.zones = {};

    /**
     * Signs an SSH public key for a user to authenticate to an instance.
     * @param {string} params.parent - (Required) Required. The parent project and region for the signing request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.projects.zones.signSshPublicKey = (params) => this._makeRequest('v1beta/{+parent}:signSshPublicKey', 'POST', params);

    this.users.projects.locations = {};

    /**
     * Signs an SSH public key for a user to authenticate to an instance.
     * @param {string} params.parent - (Required) Required. The parent project and region for the signing request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.projects.locations.signSshPublicKey = (params) => this._makeRequest('v1beta/{+parent}:signSshPublicKey', 'POST', params);
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
