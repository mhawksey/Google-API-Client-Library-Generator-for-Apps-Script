
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
     * @param {boolean} params.includeGoogleTags - Also retrieve accounts associated with Google Tag when true.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @return {object} The API response object.
     */
    this.accounts.list = (params) => this._makeRequest('tagmanager/v2/accounts', 'GET', params);

    /**
     * Gets a GTM Account.
     * @param {string} params.path - (Required) GTM Account's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Updates a GTM Account.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the account in storage.
     * @param {string} params.path - (Required) GTM Account's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    this.accounts.user_permissions = {};

    /**
     * Creates a user's Account & Container access.
     * @param {string} params.parent - (Required) GTM Account's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.user_permissions.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/user_permissions', 'POST', params);

    /**
     * List all users that have access to the account along with Account and Container user access granted to each of them.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) GTM Account's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.user_permissions.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/user_permissions', 'GET', params);

    /**
     * Gets a user's Account & Container access.
     * @param {string} params.path - (Required) GTM UserPermission's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.user_permissions.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Updates a user's Account & Container access.
     * @param {string} params.path - (Required) GTM UserPermission's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.user_permissions.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    /**
     * Removes a user from the account, revoking access to it and all of its containers.
     * @param {string} params.path - (Required) GTM UserPermission's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.user_permissions.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    this.accounts.containers = {};

    /**
     * Creates a Container.
     * @param {string} params.parent - (Required) GTM Account's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/containers', 'POST', params);

    /**
     * Lists all Containers that belongs to a GTM Account.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) GTM Account's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/containers', 'GET', params);

    /**
     * Gets a Container.
     * @param {string} params.path - (Required) GTM Container's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Gets the tagging snippet for a Container.
     * @param {string} params.path - (Required) Container snippet's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.snippet = (params) => this._makeRequest('tagmanager/v2/{+path}:snippet', 'GET', params);

    /**
     * Looks up a Container by destination ID or tag ID.
     * @param {string} params.destinationId - Destination ID linked to a GTM Container, e.g. AW-123456789. Only one of destination_id or tag_id should be set.
     * @param {string} params.tagId - Tag ID for a GTM Container, e.g. GTM-123456789. Only one of destination_id or tag_id should be set.
     * @return {object} The API response object.
     */
    this.accounts.containers.lookup = (params) => this._makeRequest('tagmanager/v2/accounts/containers:lookup', 'GET', params);

    /**
     * Updates a Container.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the container in storage.
     * @param {string} params.path - (Required) GTM Container's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    /**
     * Combines Containers.
     * @param {boolean} params.allowUserPermissionFeatureUpdate - Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.
     * @param {string} params.containerId - ID of container that will be merged into the current container.
     * @param {string} params.path - (Required) GTM Container's API relative path.
     * @param {string} params.settingSource - Specify the source of config setting after combine
     * @return {object} The API response object.
     */
    this.accounts.containers.combine = (params) => this._makeRequest('tagmanager/v2/{+path}:combine', 'POST', params);

    /**
     * Move Tag ID out of a Container.
     * @param {boolean} params.allowUserPermissionFeatureUpdate - Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.
     * @param {boolean} params.copySettings - Whether or not to copy tag settings from this tag to the new tag.
     * @param {boolean} params.copyTermsOfService - Must be set to true to accept all terms of service agreements copied from the current tag to the newly created tag. If this bit is false, the operation will fail.
     * @param {boolean} params.copyUsers - Whether or not to copy users from this tag to the new tag.
     * @param {string} params.path - (Required) GTM Container's API relative path.
     * @param {string} params.tagId - Tag ID to be removed from the current Container.
     * @param {string} params.tagName - The name for the newly created tag.
     * @return {object} The API response object.
     */
    this.accounts.containers.move_tag_id = (params) => this._makeRequest('tagmanager/v2/{+path}:move_tag_id', 'POST', params);

    /**
     * Deletes a Container.
     * @param {string} params.path - (Required) GTM Container's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    this.accounts.containers.destinations = {};

    /**
     * Gets a Destination.
     * @param {string} params.path - (Required) Google Tag Destination's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.destinations.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Lists all Destinations linked to a GTM Container.
     * @param {string} params.parent - (Required) GTM parent Container's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.destinations.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/destinations', 'GET', params);

    /**
     * Adds a Destination to this Container and removes it from the Container to which it is currently linked.
     * @param {boolean} params.allowUserPermissionFeatureUpdate - Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.
     * @param {string} params.destinationId - Destination ID to be linked to the current container.
     * @param {string} params.parent - (Required) GTM parent Container's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.destinations.link = (params) => this._makeRequest('tagmanager/v2/{+parent}/destinations:link', 'POST', params);

    this.accounts.containers.workspaces = {};

    /**
     * Creates a Workspace.
     * @param {string} params.parent - (Required) GTM parent Container's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/workspaces', 'POST', params);

    /**
     * Deletes a Workspace.
     * @param {string} params.path - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    /**
     * Gets a Workspace.
     * @param {string} params.path - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Updates a Workspace.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the workspace in storage.
     * @param {string} params.path - (Required) GTM Workspace's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    /**
     * Lists all Workspaces that belong to a GTM Container.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) GTM parent Container's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/workspaces', 'GET', params);

    /**
     * Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
     * @param {string} params.path - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.sync = (params) => this._makeRequest('tagmanager/v2/{+path}:sync', 'POST', params);

    /**
     * Finds conflicting and modified entities in the workspace.
     * @param {string} params.path - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.getStatus = (params) => this._makeRequest('tagmanager/v2/{+path}/status', 'GET', params);

    /**
     * Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict.
     * @param {string} params.path - (Required) GTM Workspace's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.resolve_conflict = (params) => this._makeRequest('tagmanager/v2/{+path}:resolve_conflict', 'POST', params);

    /**
     * Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
     * @param {string} params.path - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.quick_preview = (params) => this._makeRequest('tagmanager/v2/{+path}:quick_preview', 'POST', params);

    /**
     * Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
     * @param {string} params.path - (Required) GTM Workspace's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.create_version = (params) => this._makeRequest('tagmanager/v2/{+path}:create_version', 'POST', params);

    this.accounts.containers.workspaces.variables = {};

    /**
     * Creates a GTM Variable.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.variables.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/variables', 'POST', params);

    /**
     * Lists all GTM Variables of a Container.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.variables.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/variables', 'GET', params);

    /**
     * Gets a GTM Variable.
     * @param {string} params.path - (Required) GTM Variable's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.variables.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Updates a GTM Variable.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the variable in storage.
     * @param {string} params.path - (Required) GTM Variable's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.variables.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    /**
     * Deletes a GTM Variable.
     * @param {string} params.path - (Required) GTM Variable's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.variables.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    /**
     * Reverts changes to a GTM Variable in a GTM Workspace.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the variable in storage.
     * @param {string} params.path - (Required) GTM Variable's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.variables.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.workspaces.built_in_variables = {};

    /**
     * Creates one or more GTM Built-In Variables.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @param {string} params.type - The types of built-in variables to enable.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.built_in_variables.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/built_in_variables', 'POST', params);

    /**
     * Deletes one or more GTM Built-In Variables.
     * @param {string} params.path - (Required) GTM BuiltInVariable's API relative path.
     * @param {string} params.type - The types of built-in variables to delete.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.built_in_variables.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    /**
     * Lists all the enabled Built-In Variables of a GTM Container.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.built_in_variables.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/built_in_variables', 'GET', params);

    /**
     * Reverts changes to a GTM Built-In Variables in a GTM Workspace.
     * @param {string} params.path - (Required) GTM BuiltInVariable's API relative path.
     * @param {string} params.type - The type of built-in variable to revert.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.built_in_variables.revert = (params) => this._makeRequest('tagmanager/v2/{+path}/built_in_variables:revert', 'POST', params);

    this.accounts.containers.workspaces.triggers = {};

    /**
     * Creates a GTM Trigger.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.triggers.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/triggers', 'POST', params);

    /**
     * Lists all GTM Triggers of a Container.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.triggers.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/triggers', 'GET', params);

    /**
     * Gets a GTM Trigger.
     * @param {string} params.path - (Required) GTM Trigger's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.triggers.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Updates a GTM Trigger.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the trigger in storage.
     * @param {string} params.path - (Required) GTM Trigger's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.triggers.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    /**
     * Deletes a GTM Trigger.
     * @param {string} params.path - (Required) GTM Trigger's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.triggers.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    /**
     * Reverts changes to a GTM Trigger in a GTM Workspace.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the trigger in storage.
     * @param {string} params.path - (Required) GTM Trigger's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.triggers.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.workspaces.tags = {};

    /**
     * Creates a GTM Tag.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.tags.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/tags', 'POST', params);

    /**
     * Lists all GTM Tags of a Container.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.tags.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/tags', 'GET', params);

    /**
     * Gets a GTM Tag.
     * @param {string} params.path - (Required) GTM Tag's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.tags.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Updates a GTM Tag.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the tag in storage.
     * @param {string} params.path - (Required) GTM Tag's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.tags.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    /**
     * Deletes a GTM Tag.
     * @param {string} params.path - (Required) GTM Tag's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.tags.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    /**
     * Reverts changes to a GTM Tag in a GTM Workspace.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of thetag in storage.
     * @param {string} params.path - (Required) GTM Tag's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.tags.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.workspaces.gtag_config = {};

    /**
     * Creates a Google tag config.
     * @param {string} params.parent - (Required) Workspace's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.gtag_config.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/gtag_config', 'POST', params);

    /**
     * Lists all Google tag configs in a Container.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.gtag_config.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/gtag_config', 'GET', params);

    /**
     * Gets a Google tag config.
     * @param {string} params.path - (Required) Google tag config's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.gtag_config.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Updates a Google tag config.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the config in storage.
     * @param {string} params.path - (Required) Google tag config's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.gtag_config.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    /**
     * Deletes a Google tag config.
     * @param {string} params.path - (Required) Google tag config's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.gtag_config.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    this.accounts.containers.workspaces.templates = {};

    /**
     * Creates a GTM Custom Template.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.templates.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/templates', 'POST', params);

    /**
     * Imports a GTM Custom Template from Gallery.
     * @param {boolean} params.acknowledgePermissions - Must be set to true to allow Gallery template to be imported into the workspace. If this bit is false, the import operation will fail.
     * @param {string} params.galleryOwner - Owner of the Gallery template to import
     * @param {string} params.galleryRepository - Repository of the Gallery template to import
     * @param {string} params.gallerySha - SHA version of the Gallery template to import. Defaulted to the latest SHA version if not provided.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.templates.import_from_gallery = (params) => this._makeRequest('tagmanager/v2/{+parent}/templates:import_from_gallery', 'POST', params);

    /**
     * Lists all GTM Templates of a GTM container workspace.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.templates.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/templates', 'GET', params);

    /**
     * Gets a GTM Template.
     * @param {string} params.path - (Required) GTM Custom Template's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.templates.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Updates a GTM Template.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the templates in storage.
     * @param {string} params.path - (Required) GTM Custom Template's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.templates.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    /**
     * Deletes a GTM Template.
     * @param {string} params.path - (Required) GTM Custom Template's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.templates.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    /**
     * Reverts changes to a GTM Template in a GTM Workspace.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the template in storage.
     * @param {string} params.path - (Required) GTM Custom Template's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.templates.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.workspaces.folders = {};

    /**
     * Creates a GTM Folder.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.folders.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/folders', 'POST', params);

    /**
     * Lists all GTM Folders of a Container.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.folders.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/folders', 'GET', params);

    /**
     * Gets a GTM Folder.
     * @param {string} params.path - (Required) GTM Folder's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.folders.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * List all entities in a GTM Folder.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.path - (Required) GTM Folder's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.folders.entities = (params) => this._makeRequest('tagmanager/v2/{+path}:entities', 'POST', params);

    /**
     * Updates a GTM Folder.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the folder in storage.
     * @param {string} params.path - (Required) GTM Folder's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.folders.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    /**
     * Deletes a GTM Folder.
     * @param {string} params.path - (Required) GTM Folder's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.folders.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    /**
     * Moves entities to a GTM Folder. If {folder_id} in the request path equals 0, this will instead move entities out of the folder they currently belong to.
     * @param {string} params.path - (Required) GTM Folder's API relative path.
     * @param {string} params.tagId - The tags to be moved to the folder.
     * @param {string} params.triggerId - The triggers to be moved to the folder.
     * @param {string} params.variableId - The variables to be moved to the folder.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.folders.move_entities_to_folder = (params) => this._makeRequest('tagmanager/v2/{+path}:move_entities_to_folder', 'POST', params);

    /**
     * Reverts changes to a GTM Folder in a GTM Workspace.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the tag in storage.
     * @param {string} params.path - (Required) GTM Folder's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.folders.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.workspaces.zones = {};

    /**
     * Creates a GTM Zone.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.zones.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/zones', 'POST', params);

    /**
     * Lists all GTM Zones of a GTM container workspace.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.zones.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/zones', 'GET', params);

    /**
     * Gets a GTM Zone.
     * @param {string} params.path - (Required) GTM Zone's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.zones.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Updates a GTM Zone.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the zone in storage.
     * @param {string} params.path - (Required) GTM Zone's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.zones.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    /**
     * Deletes a GTM Zone.
     * @param {string} params.path - (Required) GTM Zone's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.zones.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    /**
     * Reverts changes to a GTM Zone in a GTM Workspace.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the zone in storage.
     * @param {string} params.path - (Required) GTM Zone's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.zones.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.workspaces.clients = {};

    /**
     * Creates a GTM Client.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.clients.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/clients', 'POST', params);

    /**
     * Lists all GTM Clients of a GTM container workspace.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.clients.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/clients', 'GET', params);

    /**
     * Gets a GTM Client.
     * @param {string} params.path - (Required) GTM Client's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.clients.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Updates a GTM Client.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the client in storage.
     * @param {string} params.path - (Required) GTM Client's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.clients.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    /**
     * Deletes a GTM Client.
     * @param {string} params.path - (Required) GTM Client's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.clients.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    /**
     * Reverts changes to a GTM Client in a GTM Workspace.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the client in storage.
     * @param {string} params.path - (Required) GTM Client's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.clients.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.workspaces.transformations = {};

    /**
     * Creates a GTM Transformation.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.transformations.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/transformations', 'POST', params);

    /**
     * Lists all GTM Transformations of a GTM container workspace.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) GTM Workspace's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.transformations.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/transformations', 'GET', params);

    /**
     * Gets a GTM Transformation.
     * @param {string} params.path - (Required) GTM Transformation's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.transformations.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Updates a GTM Transformation.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the transformation in storage.
     * @param {string} params.path - (Required) GTM Transformation's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.transformations.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    /**
     * Deletes a GTM Transformation.
     * @param {string} params.path - (Required) GTM Transformation's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.transformations.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    /**
     * Reverts changes to a GTM Transformation in a GTM Workspace.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the transformation in storage.
     * @param {string} params.path - (Required) GTM Transformation's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.workspaces.transformations.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.versions = {};

    /**
     * Gets a Container Version.
     * @param {string} params.containerVersionId - The GTM ContainerVersion ID. Specify published to retrieve the currently published version.
     * @param {string} params.path - (Required) GTM ContainerVersion's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Updates a Container Version.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the container version in storage.
     * @param {string} params.path - (Required) GTM ContainerVersion's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    /**
     * Deletes a Container Version.
     * @param {string} params.path - (Required) GTM ContainerVersion's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    /**
     * Undeletes a Container Version.
     * @param {string} params.path - (Required) GTM ContainerVersion's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.undelete = (params) => this._makeRequest('tagmanager/v2/{+path}:undelete', 'POST', params);

    /**
     * Publishes a Container Version.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the container version in storage.
     * @param {string} params.path - (Required) GTM ContainerVersion's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.publish = (params) => this._makeRequest('tagmanager/v2/{+path}:publish', 'POST', params);

    /**
     * Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
     * @param {string} params.path - (Required) GTM ContainerVersion's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.set_latest = (params) => this._makeRequest('tagmanager/v2/{+path}:set_latest', 'POST', params);

    /**
     * Gets the live (i.e. published) container version
     * @param {string} params.parent - (Required) GTM Container's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.versions.live = (params) => this._makeRequest('tagmanager/v2/{+parent}/versions:live', 'GET', params);

    this.accounts.containers.version_headers = {};

    /**
     * Lists all Container Versions of a GTM Container.
     * @param {boolean} params.includeDeleted - Also retrieve deleted (archived) versions when true.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) GTM Container's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.version_headers.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/version_headers', 'GET', params);

    /**
     * Gets the latest container version header
     * @param {string} params.parent - (Required) GTM Container's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.version_headers.latest = (params) => this._makeRequest('tagmanager/v2/{+parent}/version_headers:latest', 'GET', params);

    this.accounts.containers.environments = {};

    /**
     * Creates a GTM Environment.
     * @param {string} params.parent - (Required) GTM Container's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.environments.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/environments', 'POST', params);

    /**
     * Lists all GTM Environments of a GTM Container.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) GTM Container's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.environments.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/environments', 'GET', params);

    /**
     * Gets a GTM Environment.
     * @param {string} params.path - (Required) GTM Environment's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.environments.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);

    /**
     * Updates a GTM Environment.
     * @param {string} params.fingerprint - When provided, this fingerprint must match the fingerprint of the environment in storage.
     * @param {string} params.path - (Required) GTM Environment's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.environments.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    /**
     * Deletes a GTM Environment.
     * @param {string} params.path - (Required) GTM Environment's API relative path.
     * @return {object} The API response object.
     */
    this.accounts.containers.environments.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    /**
     * Re-generates the authorization code for a GTM Environment.
     * @param {string} params.path - (Required) GTM Environment's API relative path.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.containers.environments.reauthorize = (params) => this._makeRequest('tagmanager/v2/{+path}:reauthorize', 'POST', params);
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
