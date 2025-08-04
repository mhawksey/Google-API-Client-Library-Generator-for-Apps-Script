
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

    this.projects.patchJobs = {};

    /**
     * Patch VM instances by creating and running a patch job.
     * @param {string} params.parent - (Required) Required. The project in which to run this patch in the form `projects/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.patchJobs.execute = (params) => this._makeRequest('v1beta/{+parent}/patchJobs:execute', 'POST', params);

    /**
     * Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
     * @param {string} params.name - (Required) Required. Name of the patch in the form `projects/*\/patchJobs/*`
     * @return {object} The API response object.
     */
    this.projects.patchJobs.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
     * @param {string} params.name - (Required) Required. Name of the patch in the form `projects/*\/patchJobs/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.patchJobs.cancel = (params) => this._makeRequest('v1beta/{+name}:cancel', 'POST', params);

    /**
     * Get a list of patch jobs.
     * @param {string} params.filter - If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field.
     * @param {integer} params.pageSize - The maximum number of instance status to return.
     * @param {string} params.pageToken - A pagination token returned from a previous call that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. In the form of `projects/*`
     * @return {object} The API response object.
     */
    this.projects.patchJobs.list = (params) => this._makeRequest('v1beta/{+parent}/patchJobs', 'GET', params);

    this.projects.patchJobs.instanceDetails = {};

    /**
     * Get a list of instance details for a given patch job.
     * @param {string} params.filter - A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`.
     * @param {integer} params.pageSize - The maximum number of instance details records to return. Default is 100.
     * @param {string} params.pageToken - A pagination token returned from a previous call that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The parent for the instances are in the form of `projects/*\/patchJobs/*`.
     * @return {object} The API response object.
     */
    this.projects.patchJobs.instanceDetails.list = (params) => this._makeRequest('v1beta/{+parent}/instanceDetails', 'GET', params);

    this.projects.patchDeployments = {};

    /**
     * Create an OS Config patch deployment.
     * @param {string} params.parent - (Required) Required. The project to apply this patch deployment to in the form `projects/*`.
     * @param {string} params.patchDeploymentId - Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.patchDeployments.create = (params) => this._makeRequest('v1beta/{+parent}/patchDeployments', 'POST', params);

    /**
     * Get an OS Config patch deployment.
     * @param {string} params.name - (Required) Required. The resource name of the patch deployment in the form `projects/*\/patchDeployments/*`.
     * @return {object} The API response object.
     */
    this.projects.patchDeployments.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Get a page of OS Config patch deployments.
     * @param {integer} params.pageSize - Optional. The maximum number of patch deployments to return. Default is 100.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The resource name of the parent in the form `projects/*`.
     * @return {object} The API response object.
     */
    this.projects.patchDeployments.list = (params) => this._makeRequest('v1beta/{+parent}/patchDeployments', 'GET', params);

    /**
     * Delete an OS Config patch deployment.
     * @param {string} params.name - (Required) Required. The resource name of the patch deployment in the form `projects/*\/patchDeployments/*`.
     * @return {object} The API response object.
     */
    this.projects.patchDeployments.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Update an OS Config patch deployment.
     * @param {string} params.name - (Required) Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment.
     * @param {string} params.updateMask - Optional. Field mask that controls which fields of the patch deployment should be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.patchDeployments.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    /**
     * Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
     * @param {string} params.name - (Required) Required. The resource name of the patch deployment in the form `projects/*\/patchDeployments/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.patchDeployments.pause = (params) => this._makeRequest('v1beta/{+name}:pause', 'POST', params);

    /**
     * Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
     * @param {string} params.name - (Required) Required. The resource name of the patch deployment in the form `projects/*\/patchDeployments/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.patchDeployments.resume = (params) => this._makeRequest('v1beta/{+name}:resume', 'POST', params);

    this.projects.guestPolicies = {};

    /**
     * Create an OS Config guest policy.
     * @param {string} params.guestPolicyId - Required. The logical name of the guest policy in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     * @param {string} params.parent - (Required) Required. The resource name of the parent using one of the following forms: `projects/{project_number}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.guestPolicies.create = (params) => this._makeRequest('v1beta/{+parent}/guestPolicies', 'POST', params);

    /**
     * Get an OS Config guest policy.
     * @param {string} params.name - (Required) Required. The resource name of the guest policy using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`.
     * @return {object} The API response object.
     */
    this.projects.guestPolicies.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Get a page of OS Config guest policies.
     * @param {integer} params.pageSize - The maximum number of guest policies to return.
     * @param {string} params.pageToken - A pagination token returned from a previous call to `ListGuestPolicies` that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The resource name of the parent using one of the following forms: `projects/{project_number}`.
     * @return {object} The API response object.
     */
    this.projects.guestPolicies.list = (params) => this._makeRequest('v1beta/{+parent}/guestPolicies', 'GET', params);

    /**
     * Update an OS Config guest policy.
     * @param {string} params.name - (Required) Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`.
     * @param {string} params.updateMask - Field mask that controls which fields of the guest policy should be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.guestPolicies.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    /**
     * Delete an OS Config guest policy.
     * @param {string} params.name - (Required) Required. The resource name of the guest policy using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`.
     * @return {object} The API response object.
     */
    this.projects.guestPolicies.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    this.projects.zones = {};

    this.projects.zones.instances = {};

    /**
     * Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.
     * @param {string} params.instance - (Required) Required. The VM instance whose policies are being looked up.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.zones.instances.lookupEffectiveGuestPolicy = (params) => this._makeRequest('v1beta/{+instance}:lookupEffectiveGuestPolicy', 'POST', params);
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
