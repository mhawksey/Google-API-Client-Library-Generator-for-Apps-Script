
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://serviceusage.googleapis.com/';
    this._servicePath = '';


    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/operations', 'GET', apiParams, clientConfig);

    this.services = {};

    /**
     * Lists all services available to the specified project, and the current state of those services with respect to the project. The list includes all public services, all services for which the calling user has the `servicemanagement.services.bind` permission, and all services that have already been enabled on the project. The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Only list services that conform to the given filter. The allowed filter strings are `state:ENABLED` and `state:DISABLED`.
     * @param {integer} apiParams.pageSize - Requested size of the next page of data. Requested page size cannot exceed 200. If not set, the default page size is 50.
     * @param {string} apiParams.pageToken - Token identifying which result to start with, which is returned by a previous list call.
     * @param {string} apiParams.parent - (Required) Parent to search for services on. An example name would be: `projects/123` where `123` is the project number (not project ID).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/services', 'GET', apiParams, clientConfig);

    /**
     * Enables a service so that it can be used with a project. Operation response type: `google.protobuf.Empty`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Name of the consumer and service to enable the service on. The `EnableService` and `DisableService` methods currently only support projects. Enabling a service requires that the service is public or is shared with the user enabling the service. An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number (not project ID).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.enable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:enable', 'POST', apiParams, clientConfig);

    /**
     * Returns the service configuration and enabled state for a given service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Name of the consumer and service to get the `ConsumerState` for. An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number (not project ID).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Disables a service so that it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks. It is not valid to call the disable method on a service that is not currently enabled. Callers will receive a `FAILED_PRECONDITION` status if the target service is not currently enabled. Operation response type: `google.protobuf.Empty`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Name of the consumer and service to disable the service on. The enable and disable methods currently only support projects. An example name would be: `projects/123/services/serviceusage.googleapis.com` where `123` is the project number (not project ID).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:disable', 'POST', apiParams, clientConfig);

    /**
     * Generates service identity for service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Name of the consumer and service to generate an identity for. The `GenerateServiceIdentity` methods currently support projects, folders, organizations. Example parents would be: `projects/123/services/example.googleapis.com` `folders/123/services/example.googleapis.com` `organizations/123/services/example.googleapis.com`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.generateServiceIdentity = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:generateServiceIdentity', 'POST', apiParams, clientConfig);

    /**
     * Enables multiple services on a project. The operation is atomic: if enabling any service fails, then the entire batch fails, and no state changes occur. Operation response type: `google.protobuf.Empty`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Parent to enable services on. An example name would be: `projects/123` where `123` is the project number (not project ID). The `BatchEnableServices` method currently only supports projects.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.batchEnable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/services:batchEnable', 'POST', apiParams, clientConfig);

    this.services.consumerQuotaMetrics = {};

    /**
     * Creates or updates multiple admin overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The resource name of the consumer. An example name would be: `projects/123/services/compute.googleapis.com`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.importAdminOverrides = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics:importAdminOverrides', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a summary of all quota information visible to the service consumer, organized by service metric. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Requested size of the next page of data.
     * @param {string} apiParams.pageToken - Token identifying which result to start with; returned by a previous list call.
     * @param {string} apiParams.parent - (Required) Parent of the quotas resource. Some example names would be: `projects/123/services/serviceconsumermanagement.googleapis.com` `folders/345/services/serviceconsumermanagement.googleapis.com` `organizations/456/services/serviceconsumermanagement.googleapis.com`
     * @param {string} apiParams.view - Specifies the level of detail for quota information in the response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a summary of quota information for a specific quota metric
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the quota. An example name would be: `projects/123/services/serviceusage.googleapis.com/consumerQuotaMetrics/serviceusage.googleapis.com%2Fmutate_requests`
     * @param {string} apiParams.view - Specifies the level of detail for quota information in the response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates or updates multiple consumer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The resource name of the consumer. An example name would be: `projects/123/services/compute.googleapis.com`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.importConsumerOverrides = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics:importConsumerOverrides', 'POST', apiParams, clientConfig);

    this.services.consumerQuotaMetrics.limits = {};

    /**
     * Retrieves a summary of quota information for a specific quota limit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the quota limit. Use the quota limit resource name returned by previous ListConsumerQuotaMetrics and GetConsumerQuotaMetric API calls.
     * @param {string} apiParams.view - Specifies the level of detail for quota information in the response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.services.consumerQuotaMetrics.limits.consumerOverrides = {};

    /**
     * Lists all consumer overrides on this limit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Requested size of the next page of data.
     * @param {string} apiParams.pageToken - Token identifying which result to start with; returned by a previous list call.
     * @param {string} apiParams.parent - (Required) The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.consumerOverrides.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/consumerOverrides', 'GET', apiParams, clientConfig);

    /**
     * Creates a consumer override. A consumer override is applied to the consumer on its own authority to limit its own quota usage. Consumer overrides cannot be used to grant more quota than would be allowed by admin overrides, producer overrides, or the default limit of the service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Whether to force the creation of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} apiParams.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} apiParams.parent - (Required) The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.consumerOverrides.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/consumerOverrides', 'POST', apiParams, clientConfig);

    /**
     * Updates a consumer override.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Whether to force the update of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} apiParams.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} apiParams.name - (Required) The resource name of the override to update. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
     * @param {string} apiParams.updateMask - Update only the specified fields of the override. If unset, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.consumerOverrides.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a consumer override.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Whether to force the deletion of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} apiParams.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} apiParams.name - (Required) The resource name of the override to delete. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.consumerOverrides.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.services.consumerQuotaMetrics.limits.adminOverrides = {};

    /**
     * Deletes an admin override.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Whether to force the deletion of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} apiParams.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} apiParams.name - (Required) The resource name of the override to delete. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.adminOverrides.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Creates an admin override. An admin override is applied by an administrator of a parent folder or parent organization of the consumer receiving the override. An admin override is intended to limit the amount of quota the consumer can use out of the total quota pool allocated to all children of the folder or organization.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Whether to force the creation of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} apiParams.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} apiParams.parent - (Required) The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.adminOverrides.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/adminOverrides', 'POST', apiParams, clientConfig);

    /**
     * Updates an admin override.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Whether to force the update of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations. If force is set to true, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} apiParams.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set. If force_only is specified, it is recommended to include a case id in "X-Goog-Request-Reason" header when sending the request.
     * @param {string} apiParams.name - (Required) The resource name of the override to update. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
     * @param {string} apiParams.updateMask - Update only the specified fields of the override. If unset, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.adminOverrides.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists all admin overrides on this limit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Requested size of the next page of data.
     * @param {string} apiParams.pageToken - Token identifying which result to start with; returned by a previous list call.
     * @param {string} apiParams.parent - (Required) The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.adminOverrides.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/adminOverrides', 'GET', apiParams, clientConfig);
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
