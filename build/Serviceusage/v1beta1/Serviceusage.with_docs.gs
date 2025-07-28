
/**
 * Google Apps Script client library for the Service Usage API
 * Documentation URL: https://cloud.google.com/service-usage/
 * @class
 */
class Serviceusage {
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
    this._rootUrl = 'https://serviceusage.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.operations.list = (params) => this._makeRequest('v1beta1/operations', 'GET', params);

    this.services = {};

    /**
     * Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.
     * @param {string} params.filter - Only list services that conform to the given filter. The allowed filter strings are `state:ENABLED` and `state:DISABLED`.
     * @param {integer} params.pageSize - Requested size of the next page of data. Requested page size cannot exceed 200. If not set, the default page size is 50.
     * @param {string} params.pageToken - Token identifying which result to start with, which is returned by a previous list call.
     * @param {string} params.parent - (Required) Parent to search for services on. An example name would be: `projects/123` where `123` is the project number (not project ID).
     * @return {object} The API response object.
     */
    this.services.list = (params) => this._makeRequest('v1beta1/{+parent}/services', 'GET', params);

    /**
     * Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`
     * @param {string} params.name - (Required) Name of the consumer and service to enable the service on. The `EnableService` and `DisableService` methods currently only support projects. Enabling a service requires that the service is public or is shared with the user enabling the service. An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number (not project ID).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.enable = (params) => this._makeRequest('v1beta1/{+name}:enable', 'POST', params);

    /**
     * Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`
     * @param {string} params.parent - (Required) Parent to enable services on. An example name would be: `projects/123` where `123` is the project number (not project ID). The `BatchEnableServices` method currently only supports projects.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.batchEnable = (params) => this._makeRequest('v1beta1/{+parent}/services:batchEnable', 'POST', params);

    /**
     * Returns the service configuration and enabled state for a given service.
     * @param {string} params.name - (Required) Name of the consumer and service to get the `ConsumerState` for. An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number (not project ID).
     * @return {object} The API response object.
     */
    this.services.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Generates service identity for service.
     * @param {string} params.parent - (Required) Name of the consumer and service to generate an identity for. The `GenerateServiceIdentity` methods currently support projects, folders, organizations. Example parents would be: `projects/123/services/example.googleapis.com` `folders/123/services/example.googleapis.com` `organizations/123/services/example.googleapis.com`
     * @return {object} The API response object.
     */
    this.services.generateServiceIdentity = (params) => this._makeRequest('v1beta1/{+parent}:generateServiceIdentity', 'POST', params);

    /**
     * Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`
     * @param {string} params.name - (Required) Name of the consumer and service to disable the service on. The enable and disable methods currently only support projects. An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number (not project ID).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.disable = (params) => this._makeRequest('v1beta1/{+name}:disable', 'POST', params);

    this.services.consumerQuotaMetrics = {};

    /**
     * Retrieves a summary of quota information for a specific quota metric
     * @param {string} params.name - (Required) The resource name of the quota. An example name would be: `projects/123/services/serviceusage.googleapis.com/consumerQuotaMetrics/serviceusage.googleapis.com%2Fmutate_requests`
     * @param {string} params.view - Specifies the level of detail for quota information in the response.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
     * @param {string} params.parent - (Required) The resource name of the consumer. An example name would be: `projects/123/services/compute.googleapis.com`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.importConsumerOverrides = (params) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics:importConsumerOverrides', 'POST', params);

    /**
     * Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
     * @param {string} params.parent - (Required) The resource name of the consumer. An example name would be: `projects/123/services/compute.googleapis.com`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.importAdminOverrides = (params) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics:importAdminOverrides', 'POST', params);

    /**
     * Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
     * @param {integer} params.pageSize - Requested size of the next page of data.
     * @param {string} params.pageToken - Token identifying which result to start with; returned by a previous list call.
     * @param {string} params.parent - (Required) Parent of the quotas resource. Some example names would be: `projects/123/services/serviceconsumermanagement.googleapis.com` `folders/345/services/serviceconsumermanagement.googleapis.com` `organizations/456/services/serviceconsumermanagement.googleapis.com`
     * @param {string} params.view - Specifies the level of detail for quota information in the response.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.list = (params) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics', 'GET', params);

    this.services.consumerQuotaMetrics.limits = {};

    /**
     * Retrieves a summary of quota information for a specific quota limit.
     * @param {string} params.name - (Required) The resource name of the quota limit. Use the quota limit resource name returned by previous ListConsumerQuotaMetrics and GetConsumerQuotaMetric API calls.
     * @param {string} params.view - Specifies the level of detail for quota information in the response.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.services.consumerQuotaMetrics.limits.adminOverrides = {};

    /**
     * Lists all admin overrides on this limit.
     * @param {integer} params.pageSize - Requested size of the next page of data.
     * @param {string} params.pageToken - Token identifying which result to start with; returned by a previous list call.
     * @param {string} params.parent - (Required) The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.adminOverrides.list = (params) => this._makeRequest('v1beta1/{+parent}/adminOverrides', 'GET', params);

    /**
     * Updates an admin override.
     * @param {boolean} params.force - Whether to force the update of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} params.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} params.name - (Required) The resource name of the override to update. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
     * @param {string} params.updateMask - Update only the specified fields of the override. If unset, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.adminOverrides.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.
     * @param {boolean} params.force - Whether to force the creation of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} params.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} params.parent - (Required) The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.adminOverrides.create = (params) => this._makeRequest('v1beta1/{+parent}/adminOverrides', 'POST', params);

    /**
     * Deletes an admin override.
     * @param {boolean} params.force - Whether to force the deletion of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} params.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} params.name - (Required) The resource name of the override to delete. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.adminOverrides.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.services.consumerQuotaMetrics.limits.consumerOverrides = {};

    /**
     * Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.
     * @param {boolean} params.force - Whether to force the creation of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} params.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} params.parent - (Required) The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.consumerOverrides.create = (params) => this._makeRequest('v1beta1/{+parent}/consumerOverrides', 'POST', params);

    /**
     * Deletes a consumer override.
     * @param {boolean} params.force - Whether to force the deletion of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} params.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} params.name - (Required) The resource name of the override to delete. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.consumerOverrides.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Updates a consumer override.
     * @param {boolean} params.force - Whether to force the update of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} params.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} params.name - (Required) The resource name of the override to update. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
     * @param {string} params.updateMask - Update only the specified fields of the override. If unset, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.consumerOverrides.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Lists all consumer overrides on this limit.
     * @param {integer} params.pageSize - Requested size of the next page of data.
     * @param {string} params.pageToken - Token identifying which result to start with; returned by a previous list call.
     * @param {string} params.parent - (Required) The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.consumerOverrides.list = (params) => this._makeRequest('v1beta1/{+parent}/consumerOverrides', 'GET', params);
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
