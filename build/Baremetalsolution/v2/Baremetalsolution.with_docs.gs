
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://baremetalsolution.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.instances = {};

    /**
     * List servers in a given project and location.
     * @param {string} params.filter - List filter.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results from the server.
     * @param {string} params.parent - (Required) Required. Parent value for ListInstancesRequest.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.list = (params) => this._makeRequest('v2/{+parent}/instances', 'GET', params);

    /**
     * Get details about a single server.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Load auth info for a server.
     * @param {string} params.name - (Required) Required. Name of the server.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.loadAuthInfo = (params) => this._makeRequest('v2/{+name}:loadAuthInfo', 'GET', params);

    /**
     * Update details of a single server.
     * @param {string} params.name - (Required) Immutable. The resource name of this `Instance`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/instances/{instance}`
     * @param {string} params.updateMask - The list of fields to update. The currently supported fields are: `labels` `hyperthreading_enabled` `os_image` `ssh_keys` `kms_key_version`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Perform reimage operation on a single server.
     * @param {string} params.name - (Required) Required. The `name` field is used to identify the instance. Format: projects/{project}/locations/{location}/instances/{instance}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.reimage = (params) => this._makeRequest('v2/{+name}:reimage', 'POST', params);

    /**
     * Perform enable hyperthreading operation on a single server.
     * @param {string} params.name - (Required) Required. The `name` field is used to identify the instance. Format: projects/{project}/locations/{location}/instances/{instance}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.enableHyperthreading = (params) => this._makeRequest('v2/{+name}:enableHyperthreading', 'POST', params);

    /**
     * Perform disable hyperthreading operation on a single server.
     * @param {string} params.name - (Required) Required. The `name` field is used to identify the instance. Format: projects/{project}/locations/{location}/instances/{instance}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.disableHyperthreading = (params) => this._makeRequest('v2/{+name}:disableHyperthreading', 'POST', params);

    /**
     * RenameInstance sets a new name for an instance. Use with caution, previous names become immediately invalidated.
     * @param {string} params.name - (Required) Required. The `name` field is used to identify the instance. Format: projects/{project}/locations/{location}/instances/{instance}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.rename = (params) => this._makeRequest('v2/{+name}:rename', 'POST', params);

    /**
     * Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.reset = (params) => this._makeRequest('v2/{+name}:reset', 'POST', params);

    /**
     * Starts a server that was shutdown.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.start = (params) => this._makeRequest('v2/{+name}:start', 'POST', params);

    /**
     * Stop a running server.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.stop = (params) => this._makeRequest('v2/{+name}:stop', 'POST', params);

    /**
     * Enable the interactive serial console feature on an instance.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.enableInteractiveSerialConsole = (params) => this._makeRequest('v2/{+name}:enableInteractiveSerialConsole', 'POST', params);

    /**
     * Disable the interactive serial console feature on an instance.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.disableInteractiveSerialConsole = (params) => this._makeRequest('v2/{+name}:disableInteractiveSerialConsole', 'POST', params);

    /**
     * Detach LUN from Instance.
     * @param {string} params.instance - (Required) Required. Name of the instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.detachLun = (params) => this._makeRequest('v2/{+instance}:detachLun', 'POST', params);

    this.projects.locations.sshKeys = {};

    /**
     * Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The parent containing the SSH keys. Currently, the only valid value for the location is "global".
     * @return {object} The API response object.
     */
    this.projects.locations.sshKeys.list = (params) => this._makeRequest('v2/{+parent}/sshKeys', 'GET', params);

    /**
     * Register a public SSH key in the specified project for use with the interactive serial console feature.
     * @param {string} params.parent - (Required) Required. The parent containing the SSH keys.
     * @param {string} params.sshKeyId - Required. The ID to use for the key, which will become the final component of the key's resource name. This value must match the regex: [a-zA-Z0-9@.\-_]{1,64}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sshKeys.create = (params) => this._makeRequest('v2/{+parent}/sshKeys', 'POST', params);

    /**
     * Deletes a public SSH key registered in the specified project.
     * @param {string} params.name - (Required) Required. The name of the SSH key to delete. Currently, the only valid value for the location is "global".
     * @return {object} The API response object.
     */
    this.projects.locations.sshKeys.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.volumes = {};

    /**
     * List storage volumes in a given project and location.
     * @param {string} params.filter - List filter.
     * @param {integer} params.pageSize - Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results from the server.
     * @param {string} params.parent - (Required) Required. Parent value for ListVolumesRequest.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.list = (params) => this._makeRequest('v2/{+parent}/volumes', 'GET', params);

    /**
     * Get details of a single storage volume.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Update details of a single storage volume.
     * @param {string} params.name - (Required) Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/volumes/{volume}`
     * @param {string} params.updateMask - The list of fields to update. The only currently supported fields are: 'labels'
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.
     * @param {string} params.name - (Required) Required. The `name` field is used to identify the volume. Format: projects/{project}/locations/{location}/volumes/{volume}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.rename = (params) => this._makeRequest('v2/{+name}:rename', 'POST', params);

    /**
     * Skips volume's cooloff and deletes it now. Volume must be in cooloff state.
     * @param {string} params.name - (Required) Required. The name of the Volume.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.evict = (params) => this._makeRequest('v2/{+name}:evict', 'POST', params);

    /**
     * Emergency Volume resize.
     * @param {string} params.volume - (Required) Required. Volume to resize.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.resize = (params) => this._makeRequest('v2/{+volume}:resize', 'POST', params);

    this.projects.locations.volumes.snapshots = {};

    /**
     * Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
     * @param {string} params.parent - (Required) Required. The volume to snapshot.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.snapshots.create = (params) => this._makeRequest('v2/{+parent}/snapshots', 'POST', params);

    /**
     * Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
     * @param {string} params.volumeSnapshot - (Required) Required. Name of the snapshot which will be used to restore its parent volume.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.snapshots.restoreVolumeSnapshot = (params) => this._makeRequest('v2/{+volumeSnapshot}:restoreVolumeSnapshot', 'POST', params);

    /**
     * Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
     * @param {string} params.name - (Required) Required. The name of the snapshot to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.snapshots.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
     * @param {string} params.name - (Required) Required. The name of the snapshot.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.snapshots.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
     * @param {integer} params.pageSize - Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results from the server.
     * @param {string} params.parent - (Required) Required. Parent value for ListVolumesRequest.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.snapshots.list = (params) => this._makeRequest('v2/{+parent}/snapshots', 'GET', params);

    this.projects.locations.volumes.luns = {};

    /**
     * Get details of a single storage logical unit number(LUN).
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.luns.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * List storage volume luns for given storage volume.
     * @param {integer} params.pageSize - Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results from the server.
     * @param {string} params.parent - (Required) Required. Parent value for ListLunsRequest.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.luns.list = (params) => this._makeRequest('v2/{+parent}/luns', 'GET', params);

    /**
     * Skips lun's cooloff and deletes it now. Lun must be in cooloff state.
     * @param {string} params.name - (Required) Required. The name of the lun.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.luns.evict = (params) => this._makeRequest('v2/{+name}:evict', 'POST', params);

    this.projects.locations.networks = {};

    /**
     * List network in a given project and location.
     * @param {string} params.filter - List filter.
     * @param {integer} params.pageSize - Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results from the server.
     * @param {string} params.parent - (Required) Required. Parent value for ListNetworksRequest.
     * @return {object} The API response object.
     */
    this.projects.locations.networks.list = (params) => this._makeRequest('v2/{+parent}/networks', 'GET', params);

    /**
     * List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
     * @param {string} params.location - (Required) Required. Parent value (project and location).
     * @return {object} The API response object.
     */
    this.projects.locations.networks.listNetworkUsage = (params) => this._makeRequest('v2/{+location}/networks:listNetworkUsage', 'GET', params);

    /**
     * Get details of a single network.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.networks.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Update details of a single network.
     * @param {string} params.name - (Required) Output only. The resource name of this `Network`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/networks/{network}`
     * @param {string} params.updateMask - The list of fields to update. The only currently supported fields are: `labels`, `reservations`, `vrf.vlan_attachments`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.networks.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * RenameNetwork sets a new name for a network. Use with caution, previous names become immediately invalidated.
     * @param {string} params.name - (Required) Required. The `name` field is used to identify the network. Format: projects/{project}/locations/{location}/networks/{network}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.networks.rename = (params) => this._makeRequest('v2/{+name}:rename', 'POST', params);

    this.projects.locations.nfsShares = {};

    /**
     * Get details of a single NFS share.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.nfsShares.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * List NFS shares.
     * @param {string} params.filter - List filter.
     * @param {integer} params.pageSize - Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results from the server.
     * @param {string} params.parent - (Required) Required. Parent value for ListNfsSharesRequest.
     * @return {object} The API response object.
     */
    this.projects.locations.nfsShares.list = (params) => this._makeRequest('v2/{+parent}/nfsShares', 'GET', params);

    /**
     * Update details of a single NFS share.
     * @param {string} params.name - (Required) Immutable. The name of the NFS share.
     * @param {string} params.updateMask - The list of fields to update. The only currently supported fields are: `labels` `allowed_clients`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.nfsShares.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Create an NFS share.
     * @param {string} params.parent - (Required) Required. The parent project and location.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.nfsShares.create = (params) => this._makeRequest('v2/{+parent}/nfsShares', 'POST', params);

    /**
     * RenameNfsShare sets a new name for an nfsshare. Use with caution, previous names become immediately invalidated.
     * @param {string} params.name - (Required) Required. The `name` field is used to identify the nfsshare. Format: projects/{project}/locations/{location}/nfsshares/{nfsshare}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.nfsShares.rename = (params) => this._makeRequest('v2/{+name}:rename', 'POST', params);

    /**
     * Delete an NFS share. The underlying volume is automatically deleted.
     * @param {string} params.name - (Required) Required. The name of the NFS share to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.nfsShares.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.provisioningQuotas = {};

    /**
     * List the budget details to provision resources on a given project.
     * @param {integer} params.pageSize - Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. Notice that page_size field is not supported and won't be respected in the API request for now, will be updated when pagination is supported.
     * @param {string} params.pageToken - A token identifying a page of results from the server.
     * @param {string} params.parent - (Required) Required. Parent value for ListProvisioningQuotasRequest.
     * @return {object} The API response object.
     */
    this.projects.locations.provisioningQuotas.list = (params) => this._makeRequest('v2/{+parent}/provisioningQuotas', 'GET', params);

    this.projects.locations.provisioningConfigs = {};

    /**
     * Submit a provisioning configuration for a given project.
     * @param {string} params.parent - (Required) Required. The parent project and location containing the ProvisioningConfig.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.provisioningConfigs.submit = (params) => this._makeRequest('v2/{+parent}/provisioningConfigs:submit', 'POST', params);

    /**
     * Get ProvisioningConfig by name.
     * @param {string} params.name - (Required) Required. Name of the ProvisioningConfig.
     * @return {object} The API response object.
     */
    this.projects.locations.provisioningConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Create new ProvisioningConfig.
     * @param {string} params.email - Optional. Email provided to send a confirmation with provisioning config to.
     * @param {string} params.parent - (Required) Required. The parent project and location containing the ProvisioningConfig.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.provisioningConfigs.create = (params) => this._makeRequest('v2/{+parent}/provisioningConfigs', 'POST', params);

    /**
     * Update existing ProvisioningConfig.
     * @param {string} params.email - Optional. Email provided to send a confirmation with provisioning config to.
     * @param {string} params.name - (Required) Output only. The system-generated name of the provisioning config. This follows the UUID format.
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.provisioningConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.locations.operations = {};

    /**
     * Get details about an operation.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.osImages = {};

    /**
     * Retrieves the list of OS images which are currently approved.
     * @param {integer} params.pageSize - Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. Notice that page_size field is not supported and won't be respected in the API request for now, will be updated when pagination is supported.
     * @param {string} params.pageToken - A token identifying a page of results from the server.
     * @param {string} params.parent - (Required) Required. Parent value for ListOSImagesRequest.
     * @return {object} The API response object.
     */
    this.projects.locations.osImages.list = (params) => this._makeRequest('v2/{+parent}/osImages', 'GET', params);

    /**
     * Get details of a single OS image.
     * @param {string} params.name - (Required) Required. Name of the OS image.
     * @return {object} The API response object.
     */
    this.projects.locations.osImages.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
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
