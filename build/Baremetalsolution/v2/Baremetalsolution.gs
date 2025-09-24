
/**
 * Google Apps Script client library for the Bare Metal Solution API
 * Documentation URL: https://cloud.google.com/bare-metal
 * @class
 */
class Baremetalsolution {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://baremetalsolution.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} apiParams.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/locations', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name for the location.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.instances = {};

    /**
     * List servers in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - List filter.
     * @param {integer} apiParams.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results from the server.
     * @param {string} apiParams.parent - (Required) Required. Parent value for ListInstancesRequest.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.instances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/instances', 'GET', apiParams, clientConfig);

    /**
     * Get details about a single server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.instances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Load auth info for a server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the server.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.instances.loadAuthInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:loadAuthInfo', 'GET', apiParams, clientConfig);

    /**
     * Update details of a single server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of this `Instance`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/instances/{instance}`
     * @param {string} apiParams.updateMask - The list of fields to update. The currently supported fields are: `labels` `hyperthreading_enabled` `os_image` `ssh_keys` `kms_key_version`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.instances.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Perform reimage operation on a single server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The `name` field is used to identify the instance. Format: projects/{project}/locations/{location}/instances/{instance}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.instances.reimage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:reimage', 'POST', apiParams, clientConfig);

    /**
     * Perform enable hyperthreading operation on a single server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The `name` field is used to identify the instance. Format: projects/{project}/locations/{location}/instances/{instance}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.instances.enableHyperthreading = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:enableHyperthreading', 'POST', apiParams, clientConfig);

    /**
     * Perform disable hyperthreading operation on a single server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The `name` field is used to identify the instance. Format: projects/{project}/locations/{location}/instances/{instance}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.instances.disableHyperthreading = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:disableHyperthreading', 'POST', apiParams, clientConfig);

    /**
     * RenameInstance sets a new name for an instance. Use with caution, previous names become immediately invalidated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The `name` field is used to identify the instance. Format: projects/{project}/locations/{location}/instances/{instance}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.instances.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:rename', 'POST', apiParams, clientConfig);

    /**
     * Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.instances.reset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:reset', 'POST', apiParams, clientConfig);

    /**
     * Starts a server that was shutdown.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.instances.start = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:start', 'POST', apiParams, clientConfig);

    /**
     * Stop a running server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.instances.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:stop', 'POST', apiParams, clientConfig);

    /**
     * Enable the interactive serial console feature on an instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.instances.enableInteractiveSerialConsole = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:enableInteractiveSerialConsole', 'POST', apiParams, clientConfig);

    /**
     * Disable the interactive serial console feature on an instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.instances.disableInteractiveSerialConsole = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:disableInteractiveSerialConsole', 'POST', apiParams, clientConfig);

    /**
     * Detach LUN from Instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.instance - (Required) Required. Name of the instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.instances.detachLun = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+instance}:detachLun', 'POST', apiParams, clientConfig);

    this.projects.locations.sshKeys = {};

    /**
     * Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} apiParams.parent - (Required) Required. The parent containing the SSH keys. Currently, the only valid value for the location is "global".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sshKeys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sshKeys', 'GET', apiParams, clientConfig);

    /**
     * Register a public SSH key in the specified project for use with the interactive serial console feature.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent containing the SSH keys.
     * @param {string} apiParams.sshKeyId - Required. The ID to use for the key, which will become the final component of the key's resource name. This value must match the regex: [a-zA-Z0-9@.\-_]{1,64}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sshKeys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sshKeys', 'POST', apiParams, clientConfig);

    /**
     * Deletes a public SSH key registered in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SSH key to delete. Currently, the only valid value for the location is "global".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sshKeys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.volumes = {};

    /**
     * List storage volumes in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - List filter.
     * @param {integer} apiParams.pageSize - Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results from the server.
     * @param {string} apiParams.parent - (Required) Required. Parent value for ListVolumesRequest.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.volumes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/volumes', 'GET', apiParams, clientConfig);

    /**
     * Get details of a single storage volume.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.volumes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update details of a single storage volume.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/volumes/{volume}`
     * @param {string} apiParams.updateMask - The list of fields to update. The only currently supported fields are: 'labels'
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.volumes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The `name` field is used to identify the volume. Format: projects/{project}/locations/{location}/volumes/{volume}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.volumes.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:rename', 'POST', apiParams, clientConfig);

    /**
     * Skips volume's cooloff and deletes it now. Volume must be in cooloff state.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Volume.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.volumes.evict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:evict', 'POST', apiParams, clientConfig);

    /**
     * Emergency Volume resize.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.volume - (Required) Required. Volume to resize.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.volumes.resize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+volume}:resize', 'POST', apiParams, clientConfig);

    this.projects.locations.volumes.snapshots = {};

    /**
     * Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The volume to snapshot.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.volumes.snapshots.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/snapshots', 'POST', apiParams, clientConfig);

    /**
     * Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.volumeSnapshot - (Required) Required. Name of the snapshot which will be used to restore its parent volume.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.volumes.snapshots.restoreVolumeSnapshot = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+volumeSnapshot}:restoreVolumeSnapshot', 'POST', apiParams, clientConfig);

    /**
     * Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the snapshot to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.volumes.snapshots.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the snapshot.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.volumes.snapshots.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results from the server.
     * @param {string} apiParams.parent - (Required) Required. Parent value for ListVolumesRequest.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.volumes.snapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/snapshots', 'GET', apiParams, clientConfig);

    this.projects.locations.volumes.luns = {};

    /**
     * Get details of a single storage logical unit number(LUN).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.volumes.luns.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List storage volume luns for given storage volume.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results from the server.
     * @param {string} apiParams.parent - (Required) Required. Parent value for ListLunsRequest.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.volumes.luns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/luns', 'GET', apiParams, clientConfig);

    /**
     * Skips lun's cooloff and deletes it now. Lun must be in cooloff state.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the lun.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.volumes.luns.evict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:evict', 'POST', apiParams, clientConfig);

    this.projects.locations.networks = {};

    /**
     * List network in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - List filter.
     * @param {integer} apiParams.pageSize - Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results from the server.
     * @param {string} apiParams.parent - (Required) Required. Parent value for ListNetworksRequest.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.networks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/networks', 'GET', apiParams, clientConfig);

    /**
     * List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) Required. Parent value (project and location).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.networks.listNetworkUsage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+location}/networks:listNetworkUsage', 'GET', apiParams, clientConfig);

    /**
     * Get details of a single network.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.networks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update details of a single network.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name of this `Network`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/networks/{network}`
     * @param {string} apiParams.updateMask - The list of fields to update. The only currently supported fields are: `labels`, `reservations`, `vrf.vlan_attachments`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.networks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * RenameNetwork sets a new name for a network. Use with caution, previous names become immediately invalidated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The `name` field is used to identify the network. Format: projects/{project}/locations/{location}/networks/{network}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.networks.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:rename', 'POST', apiParams, clientConfig);

    this.projects.locations.nfsShares = {};

    /**
     * Get details of a single NFS share.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.nfsShares.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List NFS shares.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - List filter.
     * @param {integer} apiParams.pageSize - Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results from the server.
     * @param {string} apiParams.parent - (Required) Required. Parent value for ListNfsSharesRequest.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.nfsShares.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/nfsShares', 'GET', apiParams, clientConfig);

    /**
     * Update details of a single NFS share.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. The name of the NFS share.
     * @param {string} apiParams.updateMask - The list of fields to update. The only currently supported fields are: `labels` `allowed_clients`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.nfsShares.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Create an NFS share.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent project and location.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.nfsShares.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/nfsShares', 'POST', apiParams, clientConfig);

    /**
     * RenameNfsShare sets a new name for an nfsshare. Use with caution, previous names become immediately invalidated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The `name` field is used to identify the nfsshare. Format: projects/{project}/locations/{location}/nfsshares/{nfsshare}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.nfsShares.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:rename', 'POST', apiParams, clientConfig);

    /**
     * Delete an NFS share. The underlying volume is automatically deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the NFS share to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.nfsShares.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.provisioningQuotas = {};

    /**
     * List the budget details to provision resources on a given project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. Notice that page_size field is not supported and won't be respected in the API request for now, will be updated when pagination is supported.
     * @param {string} apiParams.pageToken - A token identifying a page of results from the server.
     * @param {string} apiParams.parent - (Required) Required. Parent value for ListProvisioningQuotasRequest.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.provisioningQuotas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/provisioningQuotas', 'GET', apiParams, clientConfig);

    this.projects.locations.provisioningConfigs = {};

    /**
     * Submit a provisioning configuration for a given project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent project and location containing the ProvisioningConfig.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.provisioningConfigs.submit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/provisioningConfigs:submit', 'POST', apiParams, clientConfig);

    /**
     * Get ProvisioningConfig by name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the ProvisioningConfig.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.provisioningConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Create new ProvisioningConfig.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.email - Optional. Email provided to send a confirmation with provisioning config to.
     * @param {string} apiParams.parent - (Required) Required. The parent project and location containing the ProvisioningConfig.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.provisioningConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/provisioningConfigs', 'POST', apiParams, clientConfig);

    /**
     * Update existing ProvisioningConfig.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.email - Optional. Email provided to send a confirmation with provisioning config to.
     * @param {string} apiParams.name - (Required) Output only. The system-generated name of the provisioning config. This follows the UUID format.
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.provisioningConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.operations = {};

    /**
     * Get details about an operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.osImages = {};

    /**
     * Retrieves the list of OS images which are currently approved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. Notice that page_size field is not supported and won't be respected in the API request for now, will be updated when pagination is supported.
     * @param {string} apiParams.pageToken - A token identifying a page of results from the server.
     * @param {string} apiParams.parent - (Required) Required. Parent value for ListOSImagesRequest.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.osImages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/osImages', 'GET', apiParams, clientConfig);

    /**
     * Get details of a single OS image.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the OS image.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.osImages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
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
