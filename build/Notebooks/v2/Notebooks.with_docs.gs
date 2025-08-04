
/**
 * Google Apps Script client library for the Notebooks API
 * Documentation URL: https://cloud.google.com/notebooks/docs/
 * @class
 */
class Notebooks {
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
    this._rootUrl = 'https://notebooks.googleapis.com/';
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

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.projects.locations.instances = {};

    /**
     * Lists instances in a given project and location.
     * @param {string} params.filter - Optional. List filter.
     * @param {string} params.orderBy - Optional. Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer} params.pageSize - Optional. Maximum return size of the list call.
     * @param {string} params.pageToken - Optional. A previous returned page token that can be used to continue listing from the last result.
     * @param {string} params.parent - (Required) Required. Format: `parent=projects/{project_id}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.instances.list = (params) => this._makeRequest('v2/{+parent}/instances', 'GET', params);

    /**
     * Gets details of a single Instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.instances.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new Instance in a given project and location.
     * @param {string} params.instanceId - Required. User-defined unique ID of this instance.
     * @param {string} params.parent - (Required) Required. Format: `parent=projects/{project_id}/locations/{location}`
     * @param {string} params.requestId - Optional. Idempotent request UUID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.create = (params) => this._makeRequest('v2/{+parent}/instances', 'POST', params);

    /**
     * UpdateInstance updates an Instance.
     * @param {string} params.name - (Required) Output only. The name of this notebook instance. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {string} params.requestId - Optional. Idempotent request UUID.
     * @param {string} params.updateMask - Required. Mask used to update an instance. Updatable fields: * `labels` * `gce_setup.min_cpu_platform` * `gce_setup.metadata` * `gce_setup.machine_type` * `gce_setup.accelerator_configs` * `gce_setup.accelerator_configs.type` * `gce_setup.accelerator_configs.core_count` * `gce_setup.gpu_driver_config` * `gce_setup.gpu_driver_config.enable_gpu_driver` * `gce_setup.gpu_driver_config.custom_gpu_driver_path` * `gce_setup.shielded_instance_config` * `gce_setup.shielded_instance_config.enable_secure_boot` * `gce_setup.shielded_instance_config.enable_vtpm` * `gce_setup.shielded_instance_config.enable_integrity_monitoring` * `gce_setup.reservation_affinity` * `gce_setup.reservation_affinity.consume_reservation_type` * `gce_setup.reservation_affinity.key` * `gce_setup.reservation_affinity.values` * `gce_setup.tags` * `gce_setup.container_image` * `gce_setup.container_image.repository` * `gce_setup.container_image.tag` * `gce_setup.disable_public_ip` * `disable_proxy_access`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a single Instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {string} params.requestId - Optional. Idempotent request UUID.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Starts a notebook instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.start = (params) => this._makeRequest('v2/{+name}:start', 'POST', params);

    /**
     * Stops a notebook instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.stop = (params) => this._makeRequest('v2/{+name}:stop', 'POST', params);

    /**
     * Resets a notebook instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.reset = (params) => this._makeRequest('v2/{+name}:reset', 'POST', params);

    /**
     * Checks whether a notebook instance is upgradable.
     * @param {string} params.notebookInstance - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.instances.checkUpgradability = (params) => this._makeRequest('v2/{+notebookInstance}:checkUpgradability', 'GET', params);

    /**
     * Upgrades a notebook instance to the latest version.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.upgrade = (params) => this._makeRequest('v2/{+name}:upgrade', 'POST', params);

    /**
     * Resize a notebook instance disk to a higher capacity.
     * @param {string} params.notebookInstance - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.resizeDisk = (params) => this._makeRequest('v2/{+notebookInstance}:resizeDisk', 'POST', params);

    /**
     * Rollbacks a notebook instance to the previous version.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.rollback = (params) => this._makeRequest('v2/{+name}:rollback', 'POST', params);

    /**
     * Creates a Diagnostic File and runs Diagnostic Tool given an Instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.diagnose = (params) => this._makeRequest('v2/{+name}:diagnose', 'POST', params);

    /**
     * Returns various configuration parameters.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.instances.getConfig = (params) => this._makeRequest('v2/{+name}/instances:getConfig', 'GET', params);

    /**
     * RestoreInstance restores an Instance from a BackupSource.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.restore = (params) => this._makeRequest('v2/{+name}:restore', 'POST', params);

    /**
     * Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.reportInfoSystem = (params) => this._makeRequest('v2/{+name}:reportInfoSystem', 'POST', params);

    /**
     * Allows notebook instances to upgrade themselves. Do not use this method directly.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.upgradeSystem = (params) => this._makeRequest('v2/{+name}:upgradeSystem', 'POST', params);

    /**
     * Initiated by Cloud Console for Oauth consent flow for Workbench Instances. Do not use this method directly. Design doc: go/wbi-euc:auth-dd
     * @param {string} params.name - (Required) Required. The name of the Notebook Instance resource. Format: `projects/{project}/locations/{location}/instances/{instance}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.checkAuthorization = (params) => this._makeRequest('v2/{+name}:checkAuthorization', 'POST', params);

    /**
     * Called by VM to return an EUC for the instance owner. Do not use this method directly. Design doc: go/wbi-euc:dd
     * @param {string} params.name - (Required) Required. Format: `projects/{project}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.generateAccessToken = (params) => this._makeRequest('v2/{+name}:generateAccessToken', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);
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
