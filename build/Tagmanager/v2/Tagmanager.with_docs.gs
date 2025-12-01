
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://tagmanager.googleapis.com/';
    this._servicePath = '';


    this.accounts = {};

    /**
     * Lists all GTM Accounts that a user has access to.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.includeGoogleTags - Also retrieve accounts associated with Google Tag when true.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/accounts', 'GET', apiParams, clientConfig);

    /**
     * Gets a GTM Account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Account's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Updates a GTM Account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the account in storage.
     * @param {string} apiParams.path - (Required) GTM Account's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    this.accounts.user_permissions = {};

    /**
     * Creates a user's Account & Container access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM Account's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.user_permissions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/user_permissions', 'POST', apiParams, clientConfig);

    /**
     * List all users that have access to the account along with Account and Container user access granted to each of them.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) GTM Account's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.user_permissions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/user_permissions', 'GET', apiParams, clientConfig);

    /**
     * Gets a user's Account & Container access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM UserPermission's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.user_permissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Updates a user's Account & Container access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM UserPermission's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.user_permissions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    /**
     * Removes a user from the account, revoking access to it and all of its containers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM UserPermission's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.user_permissions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    this.accounts.containers = {};

    /**
     * Creates a Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM Account's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/containers', 'POST', apiParams, clientConfig);

    /**
     * Lists all Containers that belongs to a GTM Account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) GTM Account's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/containers', 'GET', apiParams, clientConfig);

    /**
     * Gets a Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Container's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Gets the tagging snippet for a Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) Container snippet's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.snippet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:snippet', 'GET', apiParams, clientConfig);

    /**
     * Looks up a Container by destination ID or tag ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.destinationId - Destination ID linked to a GTM Container, e.g. AW-123456789. Only one of destination_id or tag_id should be set.
     * @param {string} apiParams.tagId - Tag ID for a GTM Container, e.g. GTM-123456789. Only one of destination_id or tag_id should be set.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/accounts/containers:lookup', 'GET', apiParams, clientConfig);

    /**
     * Updates a Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the container in storage.
     * @param {string} apiParams.path - (Required) GTM Container's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    /**
     * Combines Containers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowUserPermissionFeatureUpdate - Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.
     * @param {string} apiParams.containerId - ID of container that will be merged into the current container.
     * @param {string} apiParams.path - (Required) GTM Container's API relative path.
     * @param {string} apiParams.settingSource - Specify the source of config setting after combine
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.combine = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:combine', 'POST', apiParams, clientConfig);

    /**
     * Move Tag ID out of a Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowUserPermissionFeatureUpdate - Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.
     * @param {boolean} apiParams.copySettings - Whether or not to copy tag settings from this tag to the new tag.
     * @param {boolean} apiParams.copyTermsOfService - Must be set to true to accept all terms of service agreements copied from the current tag to the newly created tag. If this bit is false, the operation will fail.
     * @param {boolean} apiParams.copyUsers - Whether or not to copy users from this tag to the new tag.
     * @param {string} apiParams.path - (Required) GTM Container's API relative path.
     * @param {string} apiParams.tagId - Tag ID to be removed from the current Container.
     * @param {string} apiParams.tagName - The name for the newly created tag.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.move_tag_id = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:move_tag_id', 'POST', apiParams, clientConfig);

    /**
     * Deletes a Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Container's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    this.accounts.containers.destinations = {};

    /**
     * Gets a Destination.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) Google Tag Destination's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.destinations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Lists all Destinations linked to a GTM Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM parent Container's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.destinations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/destinations', 'GET', apiParams, clientConfig);

    /**
     * Adds a Destination to this Container and removes it from the Container to which it is currently linked.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowUserPermissionFeatureUpdate - Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.
     * @param {string} apiParams.destinationId - Destination ID to be linked to the current container.
     * @param {string} apiParams.parent - (Required) GTM parent Container's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.destinations.link = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/destinations:link', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces = {};

    /**
     * Creates a Workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM parent Container's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/workspaces', 'POST', apiParams, clientConfig);

    /**
     * Deletes a Workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a Workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Updates a Workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the workspace in storage.
     * @param {string} apiParams.path - (Required) GTM Workspace's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    /**
     * Lists all Workspaces that belong to a GTM Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) GTM parent Container's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/workspaces', 'GET', apiParams, clientConfig);

    /**
     * Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.sync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:sync', 'POST', apiParams, clientConfig);

    /**
     * Finds conflicting and modified entities in the workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.getStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}/status', 'GET', apiParams, clientConfig);

    /**
     * Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict.
     * @param {string} apiParams.path - (Required) GTM Workspace's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.resolve_conflict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:resolve_conflict', 'POST', apiParams, clientConfig);

    /**
     * Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.quick_preview = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:quick_preview', 'POST', apiParams, clientConfig);

    /**
     * Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Workspace's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.create_version = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:create_version', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.variables = {};

    /**
     * Creates a GTM Variable.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.variables.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/variables', 'POST', apiParams, clientConfig);

    /**
     * Lists all GTM Variables of a Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.variables.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/variables', 'GET', apiParams, clientConfig);

    /**
     * Gets a GTM Variable.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Variable's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.variables.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Updates a GTM Variable.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the variable in storage.
     * @param {string} apiParams.path - (Required) GTM Variable's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.variables.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a GTM Variable.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Variable's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.variables.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    /**
     * Reverts changes to a GTM Variable in a GTM Workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the variable in storage.
     * @param {string} apiParams.path - (Required) GTM Variable's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.variables.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.built_in_variables = {};

    /**
     * Creates one or more GTM Built-In Variables.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {string} apiParams.type - The types of built-in variables to enable.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.built_in_variables.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/built_in_variables', 'POST', apiParams, clientConfig);

    /**
     * Deletes one or more GTM Built-In Variables.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM BuiltInVariable's API relative path.
     * @param {string} apiParams.type - The types of built-in variables to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.built_in_variables.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists all the enabled Built-In Variables of a GTM Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.built_in_variables.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/built_in_variables', 'GET', apiParams, clientConfig);

    /**
     * Reverts changes to a GTM Built-In Variables in a GTM Workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM BuiltInVariable's API relative path.
     * @param {string} apiParams.type - The type of built-in variable to revert.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.built_in_variables.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}/built_in_variables:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.triggers = {};

    /**
     * Creates a GTM Trigger.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.triggers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/triggers', 'POST', apiParams, clientConfig);

    /**
     * Lists all GTM Triggers of a Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.triggers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/triggers', 'GET', apiParams, clientConfig);

    /**
     * Gets a GTM Trigger.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Trigger's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.triggers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Updates a GTM Trigger.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the trigger in storage.
     * @param {string} apiParams.path - (Required) GTM Trigger's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.triggers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a GTM Trigger.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Trigger's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.triggers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    /**
     * Reverts changes to a GTM Trigger in a GTM Workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the trigger in storage.
     * @param {string} apiParams.path - (Required) GTM Trigger's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.triggers.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.tags = {};

    /**
     * Creates a GTM Tag.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.tags.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/tags', 'POST', apiParams, clientConfig);

    /**
     * Lists all GTM Tags of a Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.tags.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/tags', 'GET', apiParams, clientConfig);

    /**
     * Gets a GTM Tag.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Tag's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.tags.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Updates a GTM Tag.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the tag in storage.
     * @param {string} apiParams.path - (Required) GTM Tag's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.tags.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a GTM Tag.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Tag's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.tags.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    /**
     * Reverts changes to a GTM Tag in a GTM Workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of thetag in storage.
     * @param {string} apiParams.path - (Required) GTM Tag's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.tags.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.gtag_config = {};

    /**
     * Creates a Google tag config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Workspace's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.gtag_config.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/gtag_config', 'POST', apiParams, clientConfig);

    /**
     * Lists all Google tag configs in a Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.gtag_config.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/gtag_config', 'GET', apiParams, clientConfig);

    /**
     * Gets a Google tag config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) Google tag config's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.gtag_config.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Updates a Google tag config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the config in storage.
     * @param {string} apiParams.path - (Required) Google tag config's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.gtag_config.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a Google tag config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) Google tag config's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.gtag_config.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    this.accounts.containers.workspaces.templates = {};

    /**
     * Creates a GTM Custom Template.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.templates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/templates', 'POST', apiParams, clientConfig);

    /**
     * Imports a GTM Custom Template from Gallery.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.acknowledgePermissions - Must be set to true to allow Gallery template to be imported into the workspace. If this bit is false, the import operation will fail.
     * @param {string} apiParams.galleryOwner - Owner of the Gallery template to import
     * @param {string} apiParams.galleryRepository - Repository of the Gallery template to import
     * @param {string} apiParams.gallerySha - SHA version of the Gallery template to import. Defaulted to the latest SHA version if not provided.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.templates.import_from_gallery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/templates:import_from_gallery', 'POST', apiParams, clientConfig);

    /**
     * Lists all GTM Templates of a GTM container workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.templates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/templates', 'GET', apiParams, clientConfig);

    /**
     * Gets a GTM Template.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Custom Template's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.templates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Updates a GTM Template.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the templates in storage.
     * @param {string} apiParams.path - (Required) GTM Custom Template's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.templates.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a GTM Template.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Custom Template's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.templates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    /**
     * Reverts changes to a GTM Template in a GTM Workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the template in storage.
     * @param {string} apiParams.path - (Required) GTM Custom Template's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.templates.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.folders = {};

    /**
     * Creates a GTM Folder.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.folders.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/folders', 'POST', apiParams, clientConfig);

    /**
     * Lists all GTM Folders of a Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.folders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/folders', 'GET', apiParams, clientConfig);

    /**
     * Gets a GTM Folder.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Folder's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.folders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * List all entities in a GTM Folder.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.path - (Required) GTM Folder's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.folders.entities = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:entities', 'POST', apiParams, clientConfig);

    /**
     * Updates a GTM Folder.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the folder in storage.
     * @param {string} apiParams.path - (Required) GTM Folder's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.folders.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a GTM Folder.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Folder's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.folders.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    /**
     * Moves entities to a GTM Folder. If {folder_id} in the request path equals 0, this will instead move entities out of the folder they currently belong to.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Folder's API relative path.
     * @param {string} apiParams.tagId - The tags to be moved to the folder.
     * @param {string} apiParams.triggerId - The triggers to be moved to the folder.
     * @param {string} apiParams.variableId - The variables to be moved to the folder.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.folders.move_entities_to_folder = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:move_entities_to_folder', 'POST', apiParams, clientConfig);

    /**
     * Reverts changes to a GTM Folder in a GTM Workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the tag in storage.
     * @param {string} apiParams.path - (Required) GTM Folder's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.folders.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.zones = {};

    /**
     * Creates a GTM Zone.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.zones.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/zones', 'POST', apiParams, clientConfig);

    /**
     * Lists all GTM Zones of a GTM container workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.zones.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/zones', 'GET', apiParams, clientConfig);

    /**
     * Gets a GTM Zone.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Zone's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.zones.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Updates a GTM Zone.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the zone in storage.
     * @param {string} apiParams.path - (Required) GTM Zone's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.zones.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a GTM Zone.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Zone's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.zones.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    /**
     * Reverts changes to a GTM Zone in a GTM Workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the zone in storage.
     * @param {string} apiParams.path - (Required) GTM Zone's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.zones.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.clients = {};

    /**
     * Creates a GTM Client.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.clients.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/clients', 'POST', apiParams, clientConfig);

    /**
     * Lists all GTM Clients of a GTM container workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.clients.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/clients', 'GET', apiParams, clientConfig);

    /**
     * Gets a GTM Client.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Client's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.clients.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Updates a GTM Client.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the client in storage.
     * @param {string} apiParams.path - (Required) GTM Client's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.clients.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a GTM Client.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Client's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.clients.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    /**
     * Reverts changes to a GTM Client in a GTM Workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the client in storage.
     * @param {string} apiParams.path - (Required) GTM Client's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.clients.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.transformations = {};

    /**
     * Creates a GTM Transformation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.transformations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/transformations', 'POST', apiParams, clientConfig);

    /**
     * Lists all GTM Transformations of a GTM container workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) GTM Workspace's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.transformations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/transformations', 'GET', apiParams, clientConfig);

    /**
     * Gets a GTM Transformation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Transformation's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.transformations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Updates a GTM Transformation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the transformation in storage.
     * @param {string} apiParams.path - (Required) GTM Transformation's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.transformations.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a GTM Transformation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Transformation's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.transformations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    /**
     * Reverts changes to a GTM Transformation in a GTM Workspace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the transformation in storage.
     * @param {string} apiParams.path - (Required) GTM Transformation's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.workspaces.transformations.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.versions = {};

    /**
     * Gets a Container Version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.containerVersionId - The GTM ContainerVersion ID. Specify published to retrieve the currently published version.
     * @param {string} apiParams.path - (Required) GTM ContainerVersion's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Updates a Container Version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the container version in storage.
     * @param {string} apiParams.path - (Required) GTM ContainerVersion's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.versions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a Container Version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM ContainerVersion's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes a Container Version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM ContainerVersion's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.versions.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:undelete', 'POST', apiParams, clientConfig);

    /**
     * Publishes a Container Version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the container version in storage.
     * @param {string} apiParams.path - (Required) GTM ContainerVersion's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.versions.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:publish', 'POST', apiParams, clientConfig);

    /**
     * Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM ContainerVersion's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.versions.set_latest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:set_latest', 'POST', apiParams, clientConfig);

    /**
     * Gets the live (i.e. published) container version
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM Container's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.versions.live = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/versions:live', 'GET', apiParams, clientConfig);

    this.accounts.containers.version_headers = {};

    /**
     * Lists all Container Versions of a GTM Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.includeDeleted - Also retrieve deleted (archived) versions when true.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) GTM Container's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.version_headers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/version_headers', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest container version header
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM Container's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.version_headers.latest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/version_headers:latest', 'GET', apiParams, clientConfig);

    this.accounts.containers.environments = {};

    /**
     * Creates a GTM Environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) GTM Container's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.environments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/environments', 'POST', apiParams, clientConfig);

    /**
     * Lists all GTM Environments of a GTM Container.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) GTM Container's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.environments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/environments', 'GET', apiParams, clientConfig);

    /**
     * Gets a GTM Environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Environment's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.environments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);

    /**
     * Updates a GTM Environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fingerprint - When provided, this fingerprint must match the fingerprint of the environment in storage.
     * @param {string} apiParams.path - (Required) GTM Environment's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.environments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a GTM Environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Environment's API relative path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.environments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    /**
     * Re-generates the authorization code for a GTM Environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.path - (Required) GTM Environment's API relative path.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.containers.environments.reauthorize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:reauthorize', 'POST', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
