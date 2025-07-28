
/**
 * Google Apps Script client library for the Tag Manager API
 * Documentation URL: https://developers.google.com/tag-manager
 * @class
 */
class Tagmanager {
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
    this._rootUrl = 'https://tagmanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};

    /**
     * Lists all GTM Accounts that a user has access to.
     * @return {object} The API response object.
     */
    this.accounts.list = (params) => this._makeRequest('tagmanager/v1/accounts', 'GET', params);

    /**
     * Gets a GTM Account.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @return {object} The API response object.
     */
    this.accounts.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}', 'GET', params);

    /**
     * Updates a GTM Account.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the account in storage.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}', 'PUT', params);

    this.accounts.permissions = {};

    /**
     * Creates a user's Account & Container Permissions.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.permissions.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions', 'POST', params);

    /**
     * List all users that have access to the account along with Account and Container Permissions granted to each of them.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @return {object} The API response object.
     */
    this.accounts.permissions.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions', 'GET', params);

    /**
     * Gets a user's Account & Container Permissions.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.permissionId - (Required) The GTM User ID.
     * @return {object} The API response object.
     */
    this.accounts.permissions.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions/{permissionId}', 'GET', params);

    /**
     * Updates a user's Account & Container Permissions.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.permissionId - (Required) The GTM User ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.permissions.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions/{permissionId}', 'PUT', params);

    /**
     * Removes a user from the account, revoking access to it and all of its containers.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.permissionId - (Required) The GTM User ID.
     * @return {object} The API response object.
     */
    this.accounts.permissions.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions/{permissionId}', 'DELETE', params);

    this.accounts.containers = {};

    /**
     * Creates a Container.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers', 'POST', params);

    /**
     * Lists all Containers that belongs to a GTM Account.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers', 'GET', params);

    /**
     * Gets a Container.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}', 'GET', params);

    /**
     * Updates a Container.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the container in storage.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}', 'PUT', params);

    /**
     * Deletes a Container.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}', 'DELETE', params);

    this.accounts.containers.versions = {};

    /**
     * Creates a Container Version.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions', 'POST', params);

    /**
     * Gets a Container Version.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.containerVersionId - (Required) The GTM Container Version ID. Specify published to retrieve the currently published version.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}', 'GET', params);

    /**
     * Updates a Container Version.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.containerVersionId - (Required) The GTM Container Version ID.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the container version in storage.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}', 'PUT', params);

    /**
     * Deletes a Container Version.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.containerVersionId - (Required) The GTM Container Version ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}', 'DELETE', params);

    /**
     * Undeletes a Container Version.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.containerVersionId - (Required) The GTM Container Version ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.undelete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/undelete', 'POST', params);

    /**
     * Publishes a Container Version.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.containerVersionId - (Required) The GTM Container Version ID.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the container version in storage.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.publish = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/publish', 'POST', params);

    /**
     * Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.containerVersionId - (Required) The GTM Container Version ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.restore = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/restore', 'POST', params);

    /**
     * Lists all Container Versions of a GTM Container.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {boolean} params.headers - Retrieve headers only when true.
     * @param {boolean} params.includeDeleted - Also retrieve deleted (archived) versions when true.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions', 'GET', params);

    this.accounts.containers.variables = {};

    /**
     * Creates a GTM Variable.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.variables.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables', 'POST', params);

    /**
     * Lists all GTM Variables of a Container.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.variables.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables', 'GET', params);

    /**
     * Gets a GTM Variable.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.variableId - (Required) The GTM Variable ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.variables.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}', 'GET', params);

    /**
     * Updates a GTM Variable.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the variable in storage.
     * @param {string} params.variableId - (Required) The GTM Variable ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.variables.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}', 'PUT', params);

    /**
     * Deletes a GTM Variable.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.variableId - (Required) The GTM Variable ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.variables.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}', 'DELETE', params);

    this.accounts.containers.triggers = {};

    /**
     * Creates a GTM Trigger.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.triggers.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers', 'POST', params);

    /**
     * Lists all GTM Triggers of a Container.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.triggers.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers', 'GET', params);

    /**
     * Gets a GTM Trigger.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.triggerId - (Required) The GTM Trigger ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.triggers.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}', 'GET', params);

    /**
     * Updates a GTM Trigger.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the trigger in storage.
     * @param {string} params.triggerId - (Required) The GTM Trigger ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.triggers.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}', 'PUT', params);

    /**
     * Deletes a GTM Trigger.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.triggerId - (Required) The GTM Trigger ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.triggers.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}', 'DELETE', params);

    this.accounts.containers.tags = {};

    /**
     * Creates a GTM Tag.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.tags.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags', 'POST', params);

    /**
     * Lists all GTM Tags of a Container.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.tags.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags', 'GET', params);

    /**
     * Gets a GTM Tag.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.tagId - (Required) The GTM Tag ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.tags.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}', 'GET', params);

    /**
     * Updates a GTM Tag.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the tag in storage.
     * @param {string} params.tagId - (Required) The GTM Tag ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.tags.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}', 'PUT', params);

    /**
     * Deletes a GTM Tag.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.tagId - (Required) The GTM Tag ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.tags.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}', 'DELETE', params);

    this.accounts.containers.folders = {};

    /**
     * Creates a GTM Folder.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.folders.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders', 'POST', params);

    /**
     * Lists all GTM Folders of a Container.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.folders.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders', 'GET', params);

    /**
     * Gets a GTM Folder.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.folderId - (Required) The GTM Folder ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.folders.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}', 'GET', params);

    /**
     * Updates a GTM Folder.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the folder in storage.
     * @param {string} params.folderId - (Required) The GTM Folder ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.folders.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}', 'PUT', params);

    /**
     * Deletes a GTM Folder.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.folderId - (Required) The GTM Folder ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.folders.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}', 'DELETE', params);

    this.accounts.containers.folders.entities = {};

    /**
     * List all entities in a GTM Folder.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.folderId - (Required) The GTM Folder ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.folders.entities.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}/entities', 'GET', params);

    this.accounts.containers.move_folders = {};

    /**
     * Moves entities to a GTM Folder.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.folderId - (Required) The GTM Folder ID.
     * @param {string} params.tagId - The tags to be moved to the folder.
     * @param {string} params.triggerId - The triggers to be moved to the folder.
     * @param {string} params.variableId - The variables to be moved to the folder.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.move_folders.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/move_folders/{folderId}', 'PUT', params);

    this.accounts.containers.environments = {};

    /**
     * Creates a GTM Environment.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.environments.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments', 'POST', params);

    /**
     * Lists all GTM Environments of a GTM Container.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.environments.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments', 'GET', params);

    /**
     * Gets a GTM Environment.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.environmentId - (Required) The GTM Environment ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.environments.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}', 'GET', params);

    /**
     * Updates a GTM Environment.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.environmentId - (Required) The GTM Environment ID.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the environment in storage.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.environments.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}', 'PUT', params);

    /**
     * Deletes a GTM Environment.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.environmentId - (Required) The GTM Environment ID.
     * @return {object} The API response object.
     */
    this.accounts.containers.environments.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}', 'DELETE', params);

    this.accounts.containers.reauthorize_environments = {};

    /**
     * Re-generates the authorization code for a GTM Environment.
     * @param {string} params.accountId - (Required) The GTM Account ID.
     * @param {string} params.containerId - (Required) The GTM Container ID.
     * @param {string} params.environmentId - (Required) The GTM Environment ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.reauthorize_environments.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/reauthorize_environments/{environmentId}', 'PUT', params);
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
