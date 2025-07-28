
/**
 * Google Apps Script client library for the Service Management API
 * Documentation URL: https://cloud.google.com/service-management/
 * @class
 */
class Servicemanagement {
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
    this._rootUrl = 'https://servicemanagement.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};

    /**
     * Lists service operations that match the specified filter in the request.
     * @param {string} params.filter - A string for filtering Operations. The following filter fields are supported: * serviceName: Required. Only `=` operator is allowed. * startTime: The time this job was started, in ISO 8601 format. Allowed operators are `>=`, `>`, `<=`, and `<`. * status: Can be `done`, `in_progress`, or `failed`. Allowed operators are `=`, and `!=`. Filter expression supports conjunction (AND) and disjunction (OR) logical operators. However, the serviceName restriction must be at the top-level and can only be combined with other restrictions via the AND logical operator. Examples: * `serviceName={some-service}.googleapis.com` * `serviceName={some-service}.googleapis.com AND startTime>="2017-02-01"` * `serviceName={some-service}.googleapis.com AND status=done` * `serviceName={some-service}.googleapis.com AND (status=done OR startTime>="2017-02-01")`
     * @param {string} params.name - Not used.
     * @param {integer} params.pageSize - The maximum number of operations to return. If unspecified, defaults to 50. The maximum value is 100.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.operations.list = (params) => this._makeRequest('v1/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.services = {};

    /**
     * Lists managed services. Returns all public services. For authenticated users, also returns all services the calling user has "servicemanagement.services.get" permission for.
     * @param {string} params.consumerId - Include services consumed by the specified consumer. The Google Service Management implementation accepts the following forms: - project:
     * @param {integer} params.pageSize - The max number of items to include in the response list. Page size is 50 if not specified. Maximum value is 500.
     * @param {string} params.pageToken - Token identifying which result to start with; returned by a previous list call.
     * @param {string} params.producerProjectId - Include services produced by the specified project.
     * @return {object} The API response object.
     */
    this.services.list = (params) => this._makeRequest('v1/services', 'GET', params);

    /**
     * Gets a managed service. Authentication is required unless the service is public.
     * @param {string} params.serviceName - (Required) Required. The name of the service. See the `ServiceManager` overview for naming requirements. For example: `example.googleapis.com`.
     * @return {object} The API response object.
     */
    this.services.get = (params) => this._makeRequest('v1/services/{serviceName}', 'GET', params);

    /**
     * Creates a new managed service. A managed service is immutable, and is subject to mandatory 30-day data retention. You cannot move a service or recreate it within 30 days after deletion. One producer project can own no more than 500 services. For security and reliability purposes, a production service should be hosted in a dedicated producer project. Operation
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.create = (params) => this._makeRequest('v1/services', 'POST', params);

    /**
     * Deletes a managed service. This method will change the service to the `Soft-Delete` state for 30 days. Within this period, service producers may call UndeleteService to restore the service. After 30 days, the service will be permanently deleted. Operation
     * @param {string} params.serviceName - (Required) Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`.
     * @return {object} The API response object.
     */
    this.services.delete = (params) => this._makeRequest('v1/services/{serviceName}', 'DELETE', params);

    /**
     * Revives a previously deleted managed service. The method restores the service using the configuration at the time the service was deleted. The target service must exist and must have been deleted within the last 30 days. Operation
     * @param {string} params.serviceName - (Required) Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`.
     * @return {object} The API response object.
     */
    this.services.undelete = (params) => this._makeRequest('v1/services/{serviceName}:undelete', 'POST', params);

    /**
     * Gets a service configuration (version) for a managed service.
     * @param {string} params.configId - Required. The id of the service configuration resource. This field must be specified for the server to return all fields, including `SourceInfo`.
     * @param {string} params.serviceName - (Required) Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`.
     * @param {string} params.view - Specifies which parts of the Service Config should be returned in the response.
     * @return {object} The API response object.
     */
    this.services.getConfig = (params) => this._makeRequest('v1/services/{serviceName}/config', 'GET', params);

    /**
     * Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value. If GenerateConfigReportRequest.old_value is not specified, this method will compare GenerateConfigReportRequest.new_value with the last pushed service configuration.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.generateConfigReport = (params) => this._makeRequest('v1/services:generateConfigReport', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.services.configs = {};

    /**
     * Lists the history of the service configuration for a managed service, from the newest to the oldest.
     * @param {integer} params.pageSize - The max number of items to include in the response list. Page size is 50 if not specified. Maximum value is 100.
     * @param {string} params.pageToken - The token of the page to retrieve.
     * @param {string} params.serviceName - (Required) Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`.
     * @return {object} The API response object.
     */
    this.services.configs.list = (params) => this._makeRequest('v1/services/{serviceName}/configs', 'GET', params);

    /**
     * Gets a service configuration (version) for a managed service.
     * @param {string} params.configId - (Required) Required. The id of the service configuration resource. This field must be specified for the server to return all fields, including `SourceInfo`.
     * @param {string} params.serviceName - (Required) Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`.
     * @param {string} params.view - Specifies which parts of the Service Config should be returned in the response.
     * @return {object} The API response object.
     */
    this.services.configs.get = (params) => this._makeRequest('v1/services/{serviceName}/configs/{configId}', 'GET', params);

    /**
     * Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout. Only the 100 most recent service configurations and ones referenced by existing rollouts are kept for each service. The rest will be deleted eventually.
     * @param {string} params.serviceName - (Required) Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.configs.create = (params) => this._makeRequest('v1/services/{serviceName}/configs', 'POST', params);

    /**
     * Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout. Only the 100 most recent configuration sources and ones referenced by existing service configurtions are kept for each service. The rest will be deleted eventually. Operation
     * @param {string} params.serviceName - (Required) Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.configs.submit = (params) => this._makeRequest('v1/services/{serviceName}/configs:submit', 'POST', params);

    this.services.rollouts = {};

    /**
     * Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.
     * @param {string} params.filter - Required. Use `filter` to return subset of rollouts. The following filters are supported: -- By status. For example, `filter='status=SUCCESS'` -- By strategy. For example, `filter='strategy=TrafficPercentStrategy'`
     * @param {integer} params.pageSize - The max number of items to include in the response list. Page size is 50 if not specified. Maximum value is 100.
     * @param {string} params.pageToken - The token of the page to retrieve.
     * @param {string} params.serviceName - (Required) Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`.
     * @return {object} The API response object.
     */
    this.services.rollouts.list = (params) => this._makeRequest('v1/services/{serviceName}/rollouts', 'GET', params);

    /**
     * Gets a service configuration rollout.
     * @param {string} params.rolloutId - (Required) Required. The id of the rollout resource.
     * @param {string} params.serviceName - (Required) Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`.
     * @return {object} The API response object.
     */
    this.services.rollouts.get = (params) => this._makeRequest('v1/services/{serviceName}/rollouts/{rolloutId}', 'GET', params);

    /**
     * Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging. Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts. Only the 100 most recent (in any state) and the last 10 successful (if not already part of the set of 100 most recent) rollouts are kept for each service. The rest will be deleted eventually. Operation
     * @param {string} params.serviceName - (Required) Required. The name of the service. See the [overview](https://cloud.google.com/service-management/overview) for naming requirements. For example: `example.googleapis.com`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.rollouts.create = (params) => this._makeRequest('v1/services/{serviceName}/rollouts', 'POST', params);

    this.services.consumers = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumers.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumers.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumers.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
