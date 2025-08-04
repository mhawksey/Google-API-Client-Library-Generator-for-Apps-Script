
/**
 * Google Apps Script client library for the Assured Workloads API
 * Documentation URL: https://cloud.google.com/learnmoreurl
 * @class
 */
class Assuredworkloads {
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
    this._rootUrl = 'https://assuredworkloads.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.locations.workloads = {};

    /**
     * Creates Assured Workload.
     * @param {string} params.externalId - Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the identifier will add a label to the workload and contained projects with the identifier as the value.
     * @param {string} params.parent - (Required) Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id}/locations/{location_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.create = (params) => this._makeRequest('v1/{+parent}/workloads', 'POST', params);

    /**
     * Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
     * @param {string} params.name - (Required) Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only.
     * @param {string} params.updateMask - Required. The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
     * @param {string} params.name - (Required) Required. The resource name of the Workload. This is the workloads's relative path in the API, formatted as "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.restrictAllowedResources = (params) => this._makeRequest('v1/{+name}:restrictAllowedResources', 'POST', params);

    /**
     * Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error. In addition to assuredworkloads.workload.delete permission, the user should also have orgpolicy.policy.set permission on the deleted folder to remove Assured Workloads OrgPolicies.
     * @param {string} params.etag - Optional. The etag of the workload. If this is provided, it must match the server's etag.
     * @param {string} params.name - (Required) Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id}
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets Assured Workload associated with a CRM Node
     * @param {string} params.name - (Required) Required. The resource name of the Workload to fetch. This is the workloads's relative path in the API, formatted as "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Analyzes a hypothetical move of a source resource to a target workload to surface compliance risks. The analysis is best effort and is not guaranteed to be exhaustive.
     * @param {string} params.assetTypes - Optional. List of asset types to be analyzed, including and under the source resource. If empty, all assets are analyzed. The complete list of asset types is available [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types).
     * @param {integer} params.pageSize - Optional. Page size. If a value is not specified, the default value of 10 is used. The maximum value is 50.
     * @param {string} params.pageToken - Optional. The page token from the previous response. It needs to be passed in the second and following requests.
     * @param {string} params.project - The source type is a project. Specify the project's relative resource name, formatted as either a project number or a project ID: "projects/{PROJECT_NUMBER}" or "projects/{PROJECT_ID}" For example: "projects/951040570662" when specifying a project number, or "projects/my-project-123" when specifying a project ID.
     * @param {string} params.target - (Required) Required. The resource ID of the folder-based destination workload. This workload is where the source resource will hypothetically be moved to. Specify the workload's relative resource name, formatted as: "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-2"
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.analyzeWorkloadMove = (params) => this._makeRequest('v1/{+target}:analyzeWorkloadMove', 'GET', params);

    /**
     * Lists Assured Workloads under a CRM Node.
     * @param {string} params.filter - A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests.
     * @param {string} params.parent - (Required) Required. Parent Resource to list workloads from. Must be of the form `organizations/{org_id}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.list = (params) => this._makeRequest('v1/{+parent}/workloads', 'GET', params);

    /**
     * Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
     * @param {string} params.name - (Required) Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.mutatePartnerPermissions = (params) => this._makeRequest('v1/{+name}:mutatePartnerPermissions', 'PATCH', params);

    /**
     * Enable resource violation monitoring for a workload.
     * @param {string} params.name - (Required) Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id}
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.enableResourceMonitoring = (params) => this._makeRequest('v1/{+name}:enableResourceMonitoring', 'POST', params);

    /**
     * This endpoint enables Assured Workloads service to offer compliance updates for the folder based assured workload. It sets up an Assured Workloads Service Agent, having permissions to read compliance controls (for example: Org Policies) applied on the workload. The caller must have `resourcemanager.folders.getIamPolicy` and `resourcemanager.folders.setIamPolicy` permissions on the assured workload folder.
     * @param {string} params.name - (Required) Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id}
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.enableComplianceUpdates = (params) => this._makeRequest('v1/{+name}:enableComplianceUpdates', 'PUT', params);

    this.organizations.locations.workloads.violations = {};

    /**
     * Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`
     * @param {string} params.filter - Optional. A custom filter for filtering by the Violations properties.
     * @param {string} params.interval.endTime - The end of the time window.
     * @param {string} params.interval.startTime - The start of the time window.
     * @param {integer} params.pageSize - Optional. Page size.
     * @param {string} params.pageToken - Optional. Page token returned from previous request.
     * @param {string} params.parent - (Required) Required. The Workload name. Format `organizations/{org_id}/locations/{location}/workloads/{workload}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.violations.list = (params) => this._makeRequest('v1/{+parent}/violations', 'GET', params);

    /**
     * Retrieves Assured Workload Violation based on ID.
     * @param {string} params.name - (Required) Required. The resource name of the Violation to fetch (ie. Violation.name). Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation}
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.violations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
     * @param {string} params.name - (Required) Required. The resource name of the Violation to acknowledge. Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.violations.acknowledge = (params) => this._makeRequest('v1/{+name}:acknowledge', 'POST', params);

    this.organizations.locations.workloads.updates = {};

    /**
     * This endpoint lists all updates for the given workload.
     * @param {integer} params.pageSize - Page size. The default value is 20 and the max allowed value is 100.
     * @param {string} params.pageToken - Page token returned from previous request.
     * @param {string} params.parent - (Required) Required. organizations/{org_id}/locations/{location_id}/workloads/{workload_id}
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.updates.list = (params) => this._makeRequest('v1/{+parent}/updates', 'GET', params);

    /**
     * This endpoint creates a new operation to apply the given update.
     * @param {string} params.name - (Required) Required. The resource name of the update. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id}/updates/{update_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.workloads.updates.apply = (params) => this._makeRequest('v1/{+name}:apply', 'POST', params);
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
