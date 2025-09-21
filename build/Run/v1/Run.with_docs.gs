
/**
 * Google Apps Script client library for the Cloud Run Admin API
 * Documentation URL: https://cloud.google.com/run/
 * @class
 */
class Run {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://run.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} apiParams.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter for matching the completed or in-progress operations. The supported formats of *filter* are: To query for only completed operations: done:true To query for only ongoing operations: done:false Must be empty to query for all of the latest operations for the given parent project.
     * @param {string} apiParams.name - (Required) Required. To query for all of the operations for a project.
     * @param {integer} apiParams.pageSize - The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set or set to less than or equal to 0, the default page size is 100. .
     * @param {string} apiParams.pageToken - Token identifying which result to start with, which is returned by a previous list call.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to wait on.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.authorizeddomains = {};

    /**
     * List authorized domains.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum results to return per page.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) Name of the parent Project resource. Example: `projects/myproject`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizeddomains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizeddomains', 'GET', apiParams, clientConfig);

    this.projects.locations.revisions = {};

    /**
     * List revisions. Results are sorted by creation time, descending.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.continue - Optional. Encoded string to continue paging.
     * @param {string} apiParams.fieldSelector - Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean} apiParams.includeUninitialized - Not currently used by Cloud Run.
     * @param {string} apiParams.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} apiParams.limit - Optional. The maximum number of records that should be returned.
     * @param {string} apiParams.parent - (Required) The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.resourceVersion - The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean} apiParams.watch - Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.revisions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/revisions', 'GET', apiParams, clientConfig);

    /**
     * Get information about a revision.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.revisions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Delete a revision.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.apiVersion - Cloud Run currently ignores this parameter.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.kind - Cloud Run currently ignores this parameter.
     * @param {string} apiParams.name - (Required) The name of the revision to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.propagationPolicy - Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.revisions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.configurations = {};

    /**
     * List configurations. Results are sorted by creation time, descending.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.continue - Optional. Encoded string to continue paging.
     * @param {string} apiParams.fieldSelector - Not supported by Cloud Run.
     * @param {boolean} apiParams.includeUninitialized - Not supported by Cloud Run.
     * @param {string} apiParams.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} apiParams.limit - Optional. The maximum number of the records that should be returned.
     * @param {string} apiParams.parent - (Required) The namespace from which the configurations should be listed. For Cloud Run, replace {namespace_id} with the project ID or number.
     * @param {string} apiParams.resourceVersion - Not supported by Cloud Run.
     * @param {boolean} apiParams.watch - Not supported by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.configurations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/configurations', 'GET', apiParams, clientConfig);

    /**
     * Get information about a configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the configuration to retrieve. For Cloud Run, replace {namespace_id} with the project ID or number.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.configurations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.domainmappings = {};

    /**
     * Create a new domain mapping.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.parent - (Required) Required. The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.domainmappings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/domainmappings', 'POST', apiParams, clientConfig);

    /**
     * List all domain mappings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.continue - Optional. Encoded string to continue paging.
     * @param {string} apiParams.fieldSelector - Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean} apiParams.includeUninitialized - Not currently used by Cloud Run.
     * @param {string} apiParams.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} apiParams.limit - Optional. The maximum number of records that should be returned.
     * @param {string} apiParams.parent - (Required) Required. The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.resourceVersion - The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean} apiParams.watch - Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.domainmappings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/domainmappings', 'GET', apiParams, clientConfig);

    /**
     * Get information about a domain mapping.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.domainmappings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Delete a domain mapping.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.apiVersion - Cloud Run currently ignores this parameter.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.kind - Cloud Run currently ignores this parameter.
     * @param {string} apiParams.name - (Required) Required. The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.propagationPolicy - Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.domainmappings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.jobs = {};

    /**
     * Get the IAM Access Control policy currently in effect for the given job. This result does not include any inherited policies.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    /**
     * Sets the IAM Access control policy for the specified job. Overwrites any existing policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified job. There are no permissions required for making this API call.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.routes = {};

    /**
     * List routes. Results are sorted by creation time, descending.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.continue - Optional. Encoded string to continue paging.
     * @param {string} apiParams.fieldSelector - Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean} apiParams.includeUninitialized - Not currently used by Cloud Run.
     * @param {string} apiParams.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} apiParams.limit - Optional. The maximum number of records that should be returned.
     * @param {string} apiParams.parent - (Required) The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.resourceVersion - The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean} apiParams.watch - Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.routes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/routes', 'GET', apiParams, clientConfig);

    /**
     * Get information about a route.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.routes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.services = {};

    /**
     * Lists services for the given project and region. Results are sorted by creation time, descending.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.continue - Encoded string to continue paging.
     * @param {string} apiParams.fieldSelector - Not supported, and ignored by Cloud Run.
     * @param {boolean} apiParams.includeUninitialized - Not supported, and ignored by Cloud Run.
     * @param {string} apiParams.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} apiParams.limit - The maximum number of records that should be returned.
     * @param {string} apiParams.parent - (Required) Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
     * @param {string} apiParams.resourceVersion - Not supported, and ignored by Cloud Run.
     * @param {boolean} apiParams.watch - Not supported, and ignored by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.services.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/services', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully qualified name of the service to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.services.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.parent - (Required) Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.services.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/services', 'POST', apiParams, clientConfig);

    /**
     * Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.name - (Required) Required. The fully qualified name of the service to replace. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.services.replaceService = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.apiVersion - Not supported, and ignored by Cloud Run.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.kind - Not supported, and ignored by Cloud Run.
     * @param {string} apiParams.name - (Required) Required. The fully qualified name of the service to delete. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
     * @param {string} apiParams.propagationPolicy - Not supported, and ignored by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.services.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.services.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    /**
     * Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.services.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.services.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.workerpools = {};

    /**
     * Get the IAM Access Control policy currently in effect for the given worker pool. This result does not include any inherited policies.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workerpools.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    /**
     * Sets the IAM Access control policy for the specified worker pool. Overwrites any existing policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workerpools.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified worker pool. There are no permissions required for making this API call.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workerpools.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.authorizeddomains = {};

    /**
     * List authorized domains.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum results to return per page.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) Name of the parent Project resource. Example: `projects/myproject`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.authorizeddomains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizeddomains', 'GET', apiParams, clientConfig);

    this.namespaces = {};

    this.namespaces.authorizeddomains = {};

    /**
     * List authorized domains.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum results to return per page.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.parent - (Required) Name of the parent Project resource. Example: `projects/myproject`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.authorizeddomains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/domains.cloudrun.com/v1/{+parent}/authorizeddomains', 'GET', apiParams, clientConfig);

    this.namespaces.revisions = {};

    /**
     * List revisions. Results are sorted by creation time, descending.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.continue - Optional. Encoded string to continue paging.
     * @param {string} apiParams.fieldSelector - Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean} apiParams.includeUninitialized - Not currently used by Cloud Run.
     * @param {string} apiParams.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} apiParams.limit - Optional. The maximum number of records that should be returned.
     * @param {string} apiParams.parent - (Required) The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.resourceVersion - The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean} apiParams.watch - Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.revisions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/revisions', 'GET', apiParams, clientConfig);

    /**
     * Get information about a revision.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.revisions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Delete a revision.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.apiVersion - Cloud Run currently ignores this parameter.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.kind - Cloud Run currently ignores this parameter.
     * @param {string} apiParams.name - (Required) The name of the revision to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.propagationPolicy - Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.revisions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.namespaces.configurations = {};

    /**
     * List configurations. Results are sorted by creation time, descending.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.continue - Optional. Encoded string to continue paging.
     * @param {string} apiParams.fieldSelector - Not supported by Cloud Run.
     * @param {boolean} apiParams.includeUninitialized - Not supported by Cloud Run.
     * @param {string} apiParams.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} apiParams.limit - Optional. The maximum number of the records that should be returned.
     * @param {string} apiParams.parent - (Required) The namespace from which the configurations should be listed. For Cloud Run, replace {namespace_id} with the project ID or number.
     * @param {string} apiParams.resourceVersion - Not supported by Cloud Run.
     * @param {boolean} apiParams.watch - Not supported by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.configurations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/configurations', 'GET', apiParams, clientConfig);

    /**
     * Get information about a configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the configuration to retrieve. For Cloud Run, replace {namespace_id} with the project ID or number.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.configurations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'GET', apiParams, clientConfig);

    this.namespaces.domainmappings = {};

    /**
     * Create a new domain mapping.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.parent - (Required) Required. The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.domainmappings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/domains.cloudrun.com/v1/{+parent}/domainmappings', 'POST', apiParams, clientConfig);

    /**
     * List all domain mappings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.continue - Optional. Encoded string to continue paging.
     * @param {string} apiParams.fieldSelector - Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean} apiParams.includeUninitialized - Not currently used by Cloud Run.
     * @param {string} apiParams.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} apiParams.limit - Optional. The maximum number of records that should be returned.
     * @param {string} apiParams.parent - (Required) Required. The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.resourceVersion - The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean} apiParams.watch - Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.domainmappings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/domains.cloudrun.com/v1/{+parent}/domainmappings', 'GET', apiParams, clientConfig);

    /**
     * Get information about a domain mapping.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.domainmappings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/domains.cloudrun.com/v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Delete a domain mapping.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.apiVersion - Cloud Run currently ignores this parameter.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.kind - Cloud Run currently ignores this parameter.
     * @param {string} apiParams.name - (Required) Required. The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.propagationPolicy - Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.domainmappings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/domains.cloudrun.com/v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.namespaces.tasks = {};

    /**
     * Get information about a task.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the task to retrieve. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.tasks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List tasks.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.continue - Optional. Optional encoded string to continue paging.
     * @param {string} apiParams.fieldSelector - Optional. Not supported by Cloud Run.
     * @param {boolean} apiParams.includeUninitialized - Optional. Not supported by Cloud Run.
     * @param {string} apiParams.labelSelector - Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. For example, to list all tasks of execution "foo" in succeeded state: `run.googleapis.com/execution=foo,run.googleapis.com/runningState=Succeeded`. Supported states are: * `Pending`: Initial state of all tasks. The task has not yet started but eventually will. * `Running`: Container instances for this task are running or will be running shortly. * `Succeeded`: No more container instances to run for the task, and the last attempt succeeded. * `Failed`: No more container instances to run for the task, and the last attempt failed. This task has run out of retry attempts. * `Cancelled`: Task was running but got stopped because its parent execution has been aborted. * `Abandoned`: The task has not yet started and never will because its parent execution has been aborted.
     * @param {integer} apiParams.limit - Optional. The maximum number of records that should be returned.
     * @param {string} apiParams.parent - (Required) Required. The namespace from which the tasks should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.resourceVersion - Optional. Not supported by Cloud Run.
     * @param {boolean} apiParams.watch - Optional. Not supported by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.tasks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/tasks', 'GET', apiParams, clientConfig);

    this.namespaces.executions = {};

    /**
     * Delete an execution.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.apiVersion - Optional. Cloud Run currently ignores this parameter.
     * @param {string} apiParams.kind - Optional. Cloud Run currently ignores this parameter.
     * @param {string} apiParams.name - (Required) Required. The name of the execution to delete. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.propagationPolicy - Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.executions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Get information about an execution.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the execution to retrieve. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.executions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List executions. Results are sorted by creation time, descending.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.continue - Optional. Optional encoded string to continue paging.
     * @param {string} apiParams.fieldSelector - Optional. Not supported by Cloud Run.
     * @param {boolean} apiParams.includeUninitialized - Optional. Not supported by Cloud Run.
     * @param {string} apiParams.labelSelector - Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} apiParams.limit - Optional. The maximum number of the records that should be returned.
     * @param {string} apiParams.parent - (Required) Required. The namespace from which the executions should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.resourceVersion - Optional. Not supported by Cloud Run.
     * @param {boolean} apiParams.watch - Optional. Not supported by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.executions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/executions', 'GET', apiParams, clientConfig);

    /**
     * Cancel an execution.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the execution to cancel. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.executions.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.namespaces.jobs = {};

    /**
     * Create a job.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The namespace in which the job should be created. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.jobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/jobs', 'POST', apiParams, clientConfig);

    /**
     * Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the job being replaced. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.jobs.replaceJob = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Delete a job.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.apiVersion - Optional. Cloud Run currently ignores this parameter.
     * @param {string} apiParams.kind - Optional. Cloud Run currently ignores this parameter.
     * @param {string} apiParams.name - (Required) Required. The name of the job to delete. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.propagationPolicy - Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.jobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Get information about a job.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the job to retrieve. It takes the form namespaces/{namespace}/jobs/{job_name} and the `endpoint` must be regional. Replace {namespace} with the project ID or number.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.jobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List jobs. Results are sorted by creation time, descending.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.continue - Optional. Optional encoded string to continue paging.
     * @param {string} apiParams.fieldSelector - Optional. Not supported by Cloud Run.
     * @param {boolean} apiParams.includeUninitialized - Optional. Not supported by Cloud Run.
     * @param {string} apiParams.labelSelector - Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} apiParams.limit - Optional. The maximum number of records that should be returned.
     * @param {string} apiParams.parent - (Required) Required. The namespace from which the jobs should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.resourceVersion - Optional. Not supported by Cloud Run.
     * @param {boolean} apiParams.watch - Optional. Not supported by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.jobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/jobs', 'GET', apiParams, clientConfig);

    /**
     * Trigger creation of a new execution of this job.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the job to run. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.jobs.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+name}:run', 'POST', apiParams, clientConfig);

    this.namespaces.routes = {};

    /**
     * List routes. Results are sorted by creation time, descending.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.continue - Optional. Encoded string to continue paging.
     * @param {string} apiParams.fieldSelector - Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean} apiParams.includeUninitialized - Not currently used by Cloud Run.
     * @param {string} apiParams.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} apiParams.limit - Optional. The maximum number of records that should be returned.
     * @param {string} apiParams.parent - (Required) The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} apiParams.resourceVersion - The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean} apiParams.watch - Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.routes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/routes', 'GET', apiParams, clientConfig);

    /**
     * Get information about a route.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.routes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'GET', apiParams, clientConfig);

    this.namespaces.services = {};

    /**
     * Lists services for the given project and region. Results are sorted by creation time, descending.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.continue - Encoded string to continue paging.
     * @param {string} apiParams.fieldSelector - Not supported, and ignored by Cloud Run.
     * @param {boolean} apiParams.includeUninitialized - Not supported, and ignored by Cloud Run.
     * @param {string} apiParams.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} apiParams.limit - The maximum number of records that should be returned.
     * @param {string} apiParams.parent - (Required) Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
     * @param {string} apiParams.resourceVersion - Not supported, and ignored by Cloud Run.
     * @param {boolean} apiParams.watch - Not supported, and ignored by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.services.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/services', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully qualified name of the service to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.services.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.parent - (Required) Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.services.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/services', 'POST', apiParams, clientConfig);

    /**
     * Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.name - (Required) Required. The fully qualified name of the service to replace. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.services.replaceService = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.apiVersion - Not supported, and ignored by Cloud Run.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.kind - Not supported, and ignored by Cloud Run.
     * @param {string} apiParams.name - (Required) Required. The fully qualified name of the service to delete. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
     * @param {string} apiParams.propagationPolicy - Not supported, and ignored by Cloud Run.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.services.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.namespaces.workerpools = {};

    /**
     * Lists worker pools for the given project and region. Results are sorted by creation time, descending.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.continue - Encoded string to continue paging.
     * @param {string} apiParams.labelSelector - =, !=, exists, in, and notIn.
     * @param {integer} apiParams.limit - The maximum number of records that should be returned.
     * @param {string} apiParams.parent - (Required) Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/workerpools` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.workerpools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/workerpools', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a worker pool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully qualified name of the worker pool to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number}/workerpools/{worker_pool_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/workerpools/{worker_pool_name}` * `projects/{project_id_or_number}/regions/{region}/workerpools/{worker_pool_name}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.workerpools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new WorkerPool. WorkerPool creation will trigger a new deployment. Use GetWorkerPool, and check worker_pool.status to determine if the WorkerPool is ready.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.parent - (Required) Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/workerpools` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.workerpools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/workerpools', 'POST', apiParams, clientConfig);

    /**
     * Replaces a worker pool. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.name - (Required) Required. The fully qualified name of the worker pool to replace. It can be any of the following forms: * `namespaces/{project_id_or_number}/workerpools/{worker_pool_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/workerpools/{worker_pool_name}` * `projects/{project_id_or_number}/regions/{region}/workerpools/{worker_pool_name}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.workerpools.replaceWorkerPool = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes the provided worker pool. This will cause the WorkerPool to stop all instances and will delete all associated WorkerPoolRevisions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} apiParams.name - (Required) Required. The fully qualified name of the worker pool to delete. It can be any of the following forms: * `namespaces/{project_id_or_number}/workerpools/{worker_pool_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/workerpools/{worker_pool_name}` * `projects/{project_id_or_number}/regions/{region}/workerpools/{worker_pool_name}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.namespaces.workerpools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'DELETE', apiParams, clientConfig);
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
