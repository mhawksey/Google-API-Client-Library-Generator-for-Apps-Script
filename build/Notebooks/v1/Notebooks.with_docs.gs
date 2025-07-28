
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
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.runtimes = {};

    /**
     * Lists Runtimes in a given project and location.
     * @param {string} params.filter - Optional. List filter.
     * @param {string} params.orderBy - Optional. Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer} params.pageSize - Maximum return size of the list call.
     * @param {string} params.pageToken - A previous returned page token that can be used to continue listing from the last result.
     * @param {string} params.parent - (Required) Required. Format: `parent=projects/{project_id}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.list = (params) => this._makeRequest('v1/{+parent}/runtimes', 'GET', params);

    /**
     * Gets details of a single Runtime. The location must be a regional endpoint rather than zonal.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Runtime in a given project and location.
     * @param {string} params.parent - (Required) Required. Format: `parent=projects/{project_id}/locations/{location}`
     * @param {string} params.requestId - Idempotent request UUID.
     * @param {string} params.runtimeId - Required. User-defined unique ID of this Runtime.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.create = (params) => this._makeRequest('v1/{+parent}/runtimes', 'POST', params);

    /**
     * Update Notebook Runtime configuration.
     * @param {string} params.name - (Required) Output only. The resource name of the runtime. Format: `projects/{project}/locations/{location}/runtimes/{runtimeId}`
     * @param {string} params.requestId - Idempotent request UUID.
     * @param {string} params.updateMask - Required. Specifies the path, relative to `Runtime`, of the field to update. For example, to change the software configuration kernels, the `update_mask` parameter would be specified as `software_config.kernels`, and the `PATCH` request body would specify the new value, as follows: { "software_config":{ "kernels": [{ 'repository': 'gcr.io/deeplearning-platform-release/pytorch-gpu', 'tag': 'latest' }], } } Currently, only the following fields can be updated: - `software_config.kernels` - `software_config.post_startup_script` - `software_config.custom_gpu_driver_path` - `software_config.idle_shutdown` - `software_config.idle_shutdown_timeout` - `software_config.disable_terminal` - `labels`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Runtime.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
     * @param {string} params.requestId - Idempotent request UUID.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts a Managed Notebook Runtime. Perform "Start" on GPU instances; "Resume" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.start = (params) => this._makeRequest('v1/{+name}:start', 'POST', params);

    /**
     * Stops a Managed Notebook Runtime. Perform "Stop" on GPU instances; "Suspend" on CPU instances See: https://cloud.google.com/compute/docs/instances/stop-start-instance https://cloud.google.com/compute/docs/instances/suspend-resume-instance
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);

    /**
     * Switch a Managed Notebook Runtime.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.switch = (params) => this._makeRequest('v1/{+name}:switch', 'POST', params);

    /**
     * Resets a Managed Notebook Runtime.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.reset = (params) => this._makeRequest('v1/{+name}:reset', 'POST', params);

    /**
     * Upgrades a Managed Notebook Runtime to the latest version.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.upgrade = (params) => this._makeRequest('v1/{+name}:upgrade', 'POST', params);

    /**
     * Reports and processes a runtime event.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.reportEvent = (params) => this._makeRequest('v1/{+name}:reportEvent', 'POST', params);

    /**
     * Gets an access token for the consumer service account that the customer attached to the runtime. Only accessible from the tenant instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.refreshRuntimeTokenInternal = (params) => this._makeRequest('v1/{+name}:refreshRuntimeTokenInternal', 'POST', params);

    /**
     * Creates a Diagnostic File and runs Diagnostic Tool given a Runtime.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtimes_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.diagnose = (params) => this._makeRequest('v1/{+name}:diagnose', 'POST', params);

    /**
     * Migrate an existing Runtime to a new Workbench Instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/runtimes/{runtime_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.migrate = (params) => this._makeRequest('v1/{+name}:migrate', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.instances = {};

    /**
     * Lists instances in a given project and location.
     * @param {string} params.filter - Optional. List filter.
     * @param {string} params.orderBy - Optional. Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer} params.pageSize - Maximum return size of the list call.
     * @param {string} params.pageToken - A previous returned page token that can be used to continue listing from the last result.
     * @param {string} params.parent - (Required) Required. Format: `parent=projects/{project_id}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.instances.list = (params) => this._makeRequest('v1/{+parent}/instances', 'GET', params);

    /**
     * Gets details of a single Instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.instances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Instance in a given project and location.
     * @param {string} params.instanceId - Required. User-defined unique ID of this instance.
     * @param {string} params.parent - (Required) Required. Format: `parent=projects/{project_id}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.create = (params) => this._makeRequest('v1/{+parent}/instances', 'POST', params);

    /**
     * Registers an existing legacy notebook instance to the Notebooks API server. Legacy instances are instances created with the legacy Compute Engine calls. They are not manageable by the Notebooks API out of the box. This call makes these instances manageable by the Notebooks API.
     * @param {string} params.parent - (Required) Required. Format: `parent=projects/{project_id}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.register = (params) => this._makeRequest('v1/{+parent}/instances:register', 'POST', params);

    /**
     * Updates the guest accelerators of a single Instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.setAccelerator = (params) => this._makeRequest('v1/{+name}:setAccelerator', 'PATCH', params);

    /**
     * Updates the machine type of a single Instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.setMachineType = (params) => this._makeRequest('v1/{+name}:setMachineType', 'PATCH', params);

    /**
     * Update Notebook Instance configurations.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.updateConfig = (params) => this._makeRequest('v1/{+name}:updateConfig', 'PATCH', params);

    /**
     * Updates the Shielded instance configuration of a single Instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.updateShieldedInstanceConfig = (params) => this._makeRequest('v1/{+name}:updateShieldedInstanceConfig', 'PATCH', params);

    /**
     * Replaces all the labels of an Instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.setLabels = (params) => this._makeRequest('v1/{+name}:setLabels', 'PATCH', params);

    /**
     * Add/update metadata items for an instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.updateMetadataItems = (params) => this._makeRequest('v1/{+name}:updateMetadataItems', 'PATCH', params);

    /**
     * Deletes a single Instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.instances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts a notebook instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.start = (params) => this._makeRequest('v1/{+name}:start', 'POST', params);

    /**
     * Stops a notebook instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);

    /**
     * Resets a notebook instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.reset = (params) => this._makeRequest('v1/{+name}:reset', 'POST', params);

    /**
     * Allows notebook instances to report their latest instance information to the Notebooks API server. The server will merge the reported information to the instance metadata store. Do not use this method directly.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.report = (params) => this._makeRequest('v1/{+name}:report', 'POST', params);

    /**
     * Checks whether a notebook instance is upgradable.
     * @param {string} params.notebookInstance - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {string} params.type - Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.isUpgradeable = (params) => this._makeRequest('v1/{+notebookInstance}:isUpgradeable', 'GET', params);

    /**
     * Checks whether a notebook instance is healthy.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.instances.getInstanceHealth = (params) => this._makeRequest('v1/{+name}:getInstanceHealth', 'GET', params);

    /**
     * Upgrades a notebook instance to the latest version.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.upgrade = (params) => this._makeRequest('v1/{+name}:upgrade', 'POST', params);

    /**
     * Rollbacks a notebook instance to the previous version.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.rollback = (params) => this._makeRequest('v1/{+name}:rollback', 'POST', params);

    /**
     * Creates a Diagnostic File and runs Diagnostic Tool given an Instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.diagnose = (params) => this._makeRequest('v1/{+name}:diagnose', 'POST', params);

    /**
     * Allows notebook instances to call this endpoint to upgrade themselves. Do not use this method directly.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.upgradeInternal = (params) => this._makeRequest('v1/{+name}:upgradeInternal', 'POST', params);

    /**
     * Reports and processes an instance event.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.reportEvent = (params) => this._makeRequest('v1/{+name}:reportEvent', 'POST', params);

    /**
     * Migrates an existing User-Managed Notebook to Workbench Instances.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/instances/{instance_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.migrate = (params) => this._makeRequest('v1/{+name}:migrate', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.environments = {};

    /**
     * Lists environments in a project.
     * @param {integer} params.pageSize - Maximum return size of the list call.
     * @param {string} params.pageToken - A previous returned page token that can be used to continue listing from the last result.
     * @param {string} params.parent - (Required) Required. Format: `projects/{project_id}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.environments.list = (params) => this._makeRequest('v1/{+parent}/environments', 'GET', params);

    /**
     * Gets details of a single Environment.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/environments/{environment_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.environments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Environment.
     * @param {string} params.environmentId - Required. User-defined unique ID of this environment. The `environment_id` must be 1 to 63 characters long and contain only lowercase letters, numeric characters, and dashes. The first character must be a lowercase letter and the last character cannot be a dash.
     * @param {string} params.parent - (Required) Required. Format: `projects/{project_id}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.environments.create = (params) => this._makeRequest('v1/{+parent}/environments', 'POST', params);

    /**
     * Deletes a single Environment.
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/environments/{environment_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.environments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.schedules = {};

    /**
     * Lists schedules in a given project and location.
     * @param {string} params.filter - Filter applied to resulting schedules.
     * @param {string} params.orderBy - Field to order results by.
     * @param {integer} params.pageSize - Maximum return size of the list call.
     * @param {string} params.pageToken - A previous returned page token that can be used to continue listing from the last result.
     * @param {string} params.parent - (Required) Required. Format: `parent=projects/{project_id}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.list = (params) => this._makeRequest('v1/{+parent}/schedules', 'GET', params);

    /**
     * Gets details of schedule
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/schedules/{schedule_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes schedule and all underlying jobs
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/schedules/{schedule_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates a new Scheduled Notebook in a given project and location.
     * @param {string} params.parent - (Required) Required. Format: `parent=projects/{project_id}/locations/{location}`
     * @param {string} params.scheduleId - Required. User-defined unique ID of this schedule.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.create = (params) => this._makeRequest('v1/{+parent}/schedules', 'POST', params);

    /**
     * Triggers execution of an existing schedule.
     * @param {string} params.name - (Required) Required. Format: `parent=projects/{project_id}/locations/{location}/schedules/{schedule_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.schedules.trigger = (params) => this._makeRequest('v1/{+name}:trigger', 'POST', params);

    this.projects.locations.executions = {};

    /**
     * Lists executions in a given project and location
     * @param {string} params.filter - Filter applied to resulting executions. Currently only supports filtering executions by a specified `schedule_id`. Format: `schedule_id=`
     * @param {string} params.orderBy - Sort by field.
     * @param {integer} params.pageSize - Maximum return size of the list call.
     * @param {string} params.pageToken - A previous returned page token that can be used to continue listing from the last result.
     * @param {string} params.parent - (Required) Required. Format: `parent=projects/{project_id}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.executions.list = (params) => this._makeRequest('v1/{+parent}/executions', 'GET', params);

    /**
     * Gets details of executions
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/executions/{execution_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.executions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes execution
     * @param {string} params.name - (Required) Required. Format: `projects/{project_id}/locations/{location}/executions/{execution_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.executions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates a new Execution in a given project and location.
     * @param {string} params.executionId - Required. User-defined unique ID of this execution.
     * @param {string} params.parent - (Required) Required. Format: `parent=projects/{project_id}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.executions.create = (params) => this._makeRequest('v1/{+parent}/executions', 'POST', params);
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
