
/**
 * Google Apps Script client library for the OS Config API
 * Documentation URL: https://cloud.google.com/compute/docs/osconfig/rest
 * @class
 */
class Osconfig {
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
    this._rootUrl = 'https://osconfig.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.global = {};

    /**
     * GetProjectFeatureSettings returns the VM Manager feature settings for a project.
     * @param {string} params.name - (Required) Required. Name specifies the URL for the ProjectFeatureSettings resource: projects/project_id/locations/global/projectFeatureSettings.
     * @return {object} The API response object.
     */
    this.projects.locations.global.getProjectFeatureSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * UpdateProjectFeatureSettings sets the VM Manager features for a project.
     * @param {string} params.name - (Required) Required. Immutable. Name specifies the URL for the ProjectFeatureSettings resource: projects/project_id/locations/global/projectFeatureSettings.
     * @param {string} params.updateMask - Optional. Field mask that controls which fields of the ProjectFeatureSettings should be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.updateProjectFeatureSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.osPolicyAssignments = {};

    /**
     * Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
     * @param {string} params.osPolicyAssignmentId - Required. The logical name of the OS policy assignment in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     * @param {string} params.parent - (Required) Required. The parent resource name in the form: projects/{project}/locations/{location}. Note: Specify the zone of your VMs as the location.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.osPolicyAssignments.create = (params) => this._makeRequest('v1/{+parent}/osPolicyAssignments', 'POST', params);

    /**
     * Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
     * @param {boolean} params.allowMissing - Optional. If set to true, and the OS policy assignment is not found, a new OS policy assignment will be created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Resource name. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id}` This field is ignored when you create an OS policy assignment.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided.
     * @param {string} params.updateMask - Optional. Field mask that controls which fields of the assignment should be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.osPolicyAssignments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Retrieve an existing OS policy assignment. This method always returns the latest revision. In order to retrieve a previous revision of the assignment, also provide the revision ID in the `name` parameter.
     * @param {string} params.name - (Required) Required. The resource name of OS policy assignment. Format: `projects/{project}/locations/{location}/osPolicyAssignments/{os_policy_assignment}@{revisionId}`
     * @return {object} The API response object.
     */
    this.projects.locations.osPolicyAssignments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
     * @param {integer} params.pageSize - The maximum number of assignments to return.
     * @param {string} params.pageToken - A pagination token returned from a previous call to `ListOSPolicyAssignments` that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The parent resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.osPolicyAssignments.list = (params) => this._makeRequest('v1/{+parent}/osPolicyAssignments', 'GET', params);

    /**
     * List the OS policy assignment revisions for a given OS policy assignment.
     * @param {string} params.name - (Required) Required. The name of the OS policy assignment to list revisions for.
     * @param {integer} params.pageSize - The maximum number of revisions to return.
     * @param {string} params.pageToken - A pagination token returned from a previous call to `ListOSPolicyAssignmentRevisions` that indicates where this listing should continue from.
     * @return {object} The API response object.
     */
    this.projects.locations.osPolicyAssignments.listRevisions = (params) => this._makeRequest('v1/{+name}:listRevisions', 'GET', params);

    /**
     * Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
     * @param {string} params.name - (Required) Required. The name of the OS policy assignment to be deleted
     * @param {string} params.requestId - Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided.
     * @return {object} The API response object.
     */
    this.projects.locations.osPolicyAssignments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.osPolicyAssignments.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.osPolicyAssignments.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.osPolicyAssignments.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.instances = {};

    this.projects.locations.instances.osPolicyAssignments = {};

    this.projects.locations.instances.osPolicyAssignments.reports = {};

    /**
     * Get the OS policy assignment report for the specified Compute Engine VM instance.
     * @param {string} params.name - (Required) Required. API resource name for OS policy assignment report. Format: `/projects/{project}/locations/{location}/instances/{instance}/osPolicyAssignments/{assignment}/report` For `{project}`, either `project-number` or `project-id` can be provided. For `{instance_id}`, either Compute Engine `instance-id` or `instance-name` can be provided. For `{assignment_id}`, the OSPolicyAssignment id must be provided.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.osPolicyAssignments.reports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List OS policy assignment reports for all Compute Engine VM instances in the specified zone.
     * @param {string} params.filter - If provided, this field specifies the criteria that must be met by the `OSPolicyAssignmentReport` API resource that is included in the response.
     * @param {integer} params.pageSize - The maximum number of results to return.
     * @param {string} params.pageToken - A pagination token returned from a previous call to the `ListOSPolicyAssignmentReports` method that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The parent resource name. Format: `projects/{project}/locations/{location}/instances/{instance}/osPolicyAssignments/{assignment}/reports` For `{project}`, either `project-number` or `project-id` can be provided. For `{instance}`, either `instance-name`, `instance-id`, or `-` can be provided. If '-' is provided, the response will include OSPolicyAssignmentReports for all instances in the project/location. For `{assignment}`, either `assignment-id` or `-` can be provided. If '-' is provided, the response will include OSPolicyAssignmentReports for all OSPolicyAssignments in the project/location. Either {instance} or {assignment} must be `-`. For example: `projects/{project}/locations/{location}/instances/{instance}/osPolicyAssignments/-/reports` returns all reports for the instance `projects/{project}/locations/{location}/instances/-/osPolicyAssignments/{assignment-id}/reports` returns all the reports for the given assignment across all instances. `projects/{project}/locations/{location}/instances/-/osPolicyAssignments/-/reports` returns all the reports for all assignments across all instances.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.osPolicyAssignments.reports.list = (params) => this._makeRequest('v1/{+parent}/reports', 'GET', params);

    this.projects.locations.instances.inventories = {};

    /**
     * Get inventory data for the specified VM instance. If the VM has no associated inventory, the message `NOT_FOUND` is returned.
     * @param {string} params.name - (Required) Required. API resource name for inventory resource. Format: `projects/{project}/locations/{location}/instances/{instance}/inventory` For `{project}`, either `project-number` or `project-id` can be provided. For `{instance}`, either Compute Engine `instance-id` or `instance-name` can be provided.
     * @param {string} params.view - Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.inventories.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List inventory data for all VM instances in the specified zone.
     * @param {string} params.filter - If provided, this field specifies the criteria that must be met by a `Inventory` API resource to be included in the response.
     * @param {integer} params.pageSize - The maximum number of results to return.
     * @param {string} params.pageToken - A pagination token returned from a previous call to `ListInventories` that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The parent resource name. Format: `projects/{project}/locations/{location}/instances/-` For `{project}`, either `project-number` or `project-id` can be provided.
     * @param {string} params.view - Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.inventories.list = (params) => this._makeRequest('v1/{+parent}/inventories', 'GET', params);

    this.projects.locations.instances.vulnerabilityReports = {};

    /**
     * Gets the vulnerability report for the specified VM instance. Only VMs with inventory data have vulnerability reports associated with them.
     * @param {string} params.name - (Required) Required. API resource name for vulnerability resource. Format: `projects/{project}/locations/{location}/instances/{instance}/vulnerabilityReport` For `{project}`, either `project-number` or `project-id` can be provided. For `{instance}`, either Compute Engine `instance-id` or `instance-name` can be provided.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.vulnerabilityReports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List vulnerability reports for all VM instances in the specified zone.
     * @param {string} params.filter - This field supports filtering by the severity level for the vulnerability. For a list of severity levels, see [Severity levels for vulnerabilities](https://cloud.google.com/container-analysis/docs/container-scanning-overview#severity_levels_for_vulnerabilities). The filter field follows the rules described in the [AIP-160](https://google.aip.dev/160) guidelines as follows: + **Filter for a specific severity type**: you can list reports that contain vulnerabilities that are classified as medium by specifying `vulnerabilities.details.severity:MEDIUM`. + **Filter for a range of severities** : you can list reports that have vulnerabilities that are classified as critical or high by specifying `vulnerabilities.details.severity:HIGH OR vulnerabilities.details.severity:CRITICAL`
     * @param {integer} params.pageSize - The maximum number of results to return.
     * @param {string} params.pageToken - A pagination token returned from a previous call to `ListVulnerabilityReports` that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The parent resource name. Format: `projects/{project}/locations/{location}/instances/-` For `{project}`, either `project-number` or `project-id` can be provided.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.vulnerabilityReports.list = (params) => this._makeRequest('v1/{+parent}/vulnerabilityReports', 'GET', params);

    this.projects.patchJobs = {};

    /**
     * Patch VM instances by creating and running a patch job.
     * @param {string} params.parent - (Required) Required. The project in which to run this patch in the form `projects/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.patchJobs.execute = (params) => this._makeRequest('v1/{+parent}/patchJobs:execute', 'POST', params);

    /**
     * Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
     * @param {string} params.name - (Required) Required. Name of the patch in the form `projects/*\/patchJobs/*`
     * @return {object} The API response object.
     */
    this.projects.patchJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
     * @param {string} params.name - (Required) Required. Name of the patch in the form `projects/*\/patchJobs/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.patchJobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    /**
     * Get a list of patch jobs.
     * @param {string} params.filter - If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field.
     * @param {integer} params.pageSize - The maximum number of instance status to return.
     * @param {string} params.pageToken - A pagination token returned from a previous call that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. In the form of `projects/*`
     * @return {object} The API response object.
     */
    this.projects.patchJobs.list = (params) => this._makeRequest('v1/{+parent}/patchJobs', 'GET', params);

    this.projects.patchJobs.instanceDetails = {};

    /**
     * Get a list of instance details for a given patch job.
     * @param {string} params.filter - A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`.
     * @param {integer} params.pageSize - The maximum number of instance details records to return. Default is 100.
     * @param {string} params.pageToken - A pagination token returned from a previous call that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The parent for the instances are in the form of `projects/*\/patchJobs/*`.
     * @return {object} The API response object.
     */
    this.projects.patchJobs.instanceDetails.list = (params) => this._makeRequest('v1/{+parent}/instanceDetails', 'GET', params);

    this.projects.patchDeployments = {};

    /**
     * Create an OS Config patch deployment.
     * @param {string} params.parent - (Required) Required. The project to apply this patch deployment to in the form `projects/*`.
     * @param {string} params.patchDeploymentId - Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.patchDeployments.create = (params) => this._makeRequest('v1/{+parent}/patchDeployments', 'POST', params);

    /**
     * Get an OS Config patch deployment.
     * @param {string} params.name - (Required) Required. The resource name of the patch deployment in the form `projects/*\/patchDeployments/*`.
     * @return {object} The API response object.
     */
    this.projects.patchDeployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Get a page of OS Config patch deployments.
     * @param {integer} params.pageSize - Optional. The maximum number of patch deployments to return. Default is 100.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The resource name of the parent in the form `projects/*`.
     * @return {object} The API response object.
     */
    this.projects.patchDeployments.list = (params) => this._makeRequest('v1/{+parent}/patchDeployments', 'GET', params);

    /**
     * Delete an OS Config patch deployment.
     * @param {string} params.name - (Required) Required. The resource name of the patch deployment in the form `projects/*\/patchDeployments/*`.
     * @return {object} The API response object.
     */
    this.projects.patchDeployments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Update an OS Config patch deployment.
     * @param {string} params.name - (Required) Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment.
     * @param {string} params.updateMask - Optional. Field mask that controls which fields of the patch deployment should be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.patchDeployments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
     * @param {string} params.name - (Required) Required. The resource name of the patch deployment in the form `projects/*\/patchDeployments/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.patchDeployments.pause = (params) => this._makeRequest('v1/{+name}:pause', 'POST', params);

    /**
     * Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
     * @param {string} params.name - (Required) Required. The resource name of the patch deployment in the form `projects/*\/patchDeployments/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.patchDeployments.resume = (params) => this._makeRequest('v1/{+name}:resume', 'POST', params);
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
