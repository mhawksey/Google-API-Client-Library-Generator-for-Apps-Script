
/**
 * Google Apps Script client library for the Agent Registry API
 * Documentation URL: https://docs.cloud.google.com/agent-registry/overview
 * Generator: https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/
 * @class
 */
class Agentregistry {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://agentregistry.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name for the location.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} apiParams.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/locations', 'GET', apiParams, clientConfig);

    this.projects.locations.aiApplications = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.aiApplications.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Lists AI Applications in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filtering results.
     * @param {string} apiParams.orderBy - Optional. Hint for how to order the results.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} apiParams.parent - (Required) Required. Parent project and location to query. Format: `projects/{project}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.aiApplications.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/aiApplications', 'GET', apiParams, clientConfig);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.aiApplications.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    /**
     * Gets details of a single AI Application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Target AI Application resource name. Format: `projects/{project}/locations/{location}/aiApplications/{ai_application}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.aiApplications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.aiApplications.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.aiApplications.agents = {};

    /**
     * Gets details of a single Agent under an AI Application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource. Format: `projects/{project}/locations/{location}/aiApplications/{ai_application}/agents/{agent}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.aiApplications.agents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists Agents under an AI Application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} apiParams.parent - (Required) Required. Parent value (AI Application) for ListAiApplicationAgentsRequest. Format: `projects/{project}/locations/{location}/aiApplications/{ai_application}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.aiApplications.agents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/agents', 'GET', apiParams, clientConfig);

    this.projects.locations.aiApplications.mcpServers = {};

    /**
     * Gets details of a single McpServer under an AI Application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource. Format: `projects/{project}/locations/{location}/aiApplications/{ai_application}/mcpServers/{mcp_server}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.aiApplications.mcpServers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists McpServers under an AI Application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} apiParams.parent - (Required) Required. Parent value (AI Application) for ListAiApplicationMcpServersRequest. Format: `projects/{project}/locations/{location}/aiApplications/{ai_application}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.aiApplications.mcpServers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/mcpServers', 'GET', apiParams, clientConfig);

    this.projects.locations.aiApplications.endpoints = {};

    /**
     * Gets details of a single Endpoint under an AI Application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource. Format: `projects/{project}/locations/{location}/aiApplications/{ai_application}/endpoints/{endpoint}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.aiApplications.endpoints.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists Endpoints under an AI Application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} apiParams.parent - (Required) Required. Parent value (AI Application) for ListAiApplicationEndpointsRequest. Format: `projects/{project}/locations/{location}/aiApplications/{ai_application}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.aiApplications.endpoints.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/endpoints', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {boolean} apiParams.returnPartialSuccess - When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.mcpServers = {};

    /**
     * Lists McpServers in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filtering results
     * @param {string} apiParams.orderBy - Optional. Hint for how to order the results
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} apiParams.parent - (Required) Required. Parent value for ListMcpServersRequest. Format: `projects/{project}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.mcpServers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/mcpServers', 'GET', apiParams, clientConfig);

    /**
     * Gets details of a single McpServer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.mcpServers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Searches McpServers in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Parent value for SearchMcpServersRequest. Format: `projects/{project}/locations/{location}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.mcpServers.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/mcpServers:search', 'POST', apiParams, clientConfig);

    this.projects.locations.services = {};

    /**
     * Gets details of a single Service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Service. Format: `projects/{project}/locations/{location}/services/{service}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.services.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a single Service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Service. Format: `projects/{project}/locations/{location}/services/{service}`.
     * @param {string} apiParams.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.services.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates the parameters of a single Service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the Service. Format: `projects/{project}/locations/{location}/services/{service}`.
     * @param {string} apiParams.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the Service resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields present in the request will be overwritten.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.services.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Creates a new Service in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project and location to create the Service in. Expected format: `projects/{project}/locations/{location}`.
     * @param {string} apiParams.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.serviceId - Required. The ID to use for the service, which will become the final component of the service's resource name. This value should be 4-63 characters, and valid characters are `/a-z-/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.services.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/services', 'POST', apiParams, clientConfig);

    /**
     * Lists Services in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A query string used to filter the list of services returned. The filter expression must follow AIP-160 syntax. Filtering is supported on the `name`, `display_name`, `description`, and `labels` fields. Some examples: * `name = "projects/p1/locations/l1/services/s1"` * `display_name = "my-service"` * `description : "myservice description"` * `labels.env = "prod"`
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} apiParams.parent - (Required) Required. The project and location to list services in. Expected format: `projects/{project}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.services.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/services', 'GET', apiParams, clientConfig);

    this.projects.locations.endpoints = {};

    /**
     * Lists Endpoints in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A query string used to filter the list of endpoints returned. The filter expression must follow AIP-160 syntax. Filtering is supported on the `name`, `display_name`, `description`, `version`, and `interfaces` fields. Some examples: * `name = "projects/p1/locations/l1/endpoints/e1"` * `display_name = "my-endpoint"` * `description = "my-endpoint-description"` * `version = "v1"` * `interfaces.transport = "HTTP_JSON"`
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} apiParams.parent - (Required) Required. The project and location to list endpoints in. Expected format: `projects/{project}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.endpoints.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/endpoints', 'GET', apiParams, clientConfig);

    /**
     * Gets details of a single Endpoint.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the endpoint to retrieve. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.endpoints.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.agents = {};

    /**
     * Lists Agents in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filtering results
     * @param {string} apiParams.orderBy - Optional. Hint for how to order the results
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} apiParams.parent - (Required) Required. Parent value for ListAgentsRequest
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/agents', 'GET', apiParams, clientConfig);

    /**
     * Gets details of a single Agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Searches Agents in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Parent value for SearchAgentsRequest. Format: `projects/{project}/locations/{location}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/agents:search', 'POST', apiParams, clientConfig);

    this.projects.locations.publishers = {};

    /**
     * Fetches details of a specific Publisher.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Target publisher resource name. Format: `projects/{project}/locations/{location}/publishers/{publisher}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.publishers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all Publishers in a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Page limit size.
     * @param {string} apiParams.pageToken - Optional. Page offset token.
     * @param {string} apiParams.parent - (Required) Required. Parent location to query. Format: `projects/{project}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.publishers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/publishers', 'GET', apiParams, clientConfig);

    this.projects.locations.skills = {};

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.skills.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.skills.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Lists logical Skills available in a project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Use this field to specify filter criteria on list results. Filter expressions can be used to restrict results based upon filterable fields, where equality operators can be used. See [instructions](https://docs.cloud.google.com/agent-registry/search-agents-and-tools) for more details. Allowed operators: `=`, `<`, `>`, `NOT`, `AND`, `OR`, and `()`. | Field | `=` | `<`, `>` | |--------------|-----|----------| | state | Yes | No | | targetState | Yes | No | | createTime | Yes | Yes | | updateTime | Yes | Yes | Examples: * `state=ACTIVE` to restrict results to skills in the `ACTIVE` state.
     * @param {string} apiParams.orderBy - Optional. Hint for how to order the results
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} apiParams.parent - (Required) Required. Parent value for ListSkillsRequest
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.skills.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/skills', 'GET', apiParams, clientConfig);

    /**
     * Custom deep-search method to filter by frontmatter or query SKILL.md text blobs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Use this field to specify additional filter criteria on search results. Filter expressions can be used to restrict results based upon filterable fields, where equality operators can be used. See [instructions](https://docs.cloud.google.com/agent-registry/search-agents-and-tools) for more details. Allowed operators: `=`, `<`, `>`, `NOT`, `AND`, `OR`, and `()`. | Field | `=` | `<`, `>` | |--------------|-----|----------| | state | Yes | No | | targetState | Yes | No | | createTime | Yes | Yes | | updateTime | Yes | Yes | Examples: * `state=ACTIVE` to restrict results to skills in the `ACTIVE` state.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of search results to return per page. The page size is capped at `100`, even if a larger value is specified. A negative value will result in an `INVALID_ARGUMENT` error. If unspecified or set to `0`, a default value of `20` will be used. The server may return fewer results than requested.
     * @param {string} apiParams.pageToken - Optional. If present, retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call.
     * @param {string} apiParams.parent - (Required) Required. Parent value for SearchSkillsRequest. Format: `projects/{project}/locations/{location}`.
     * @param {string} apiParams.searchString - Optional. Search criteria used to select the Skills to return. If no search criteria is specified then all accessible Skills will be returned. Search expressions can be used to restrict results based upon searchable fields, where the operators can be used along with the suffix wildcard symbol `*`. See [instructions](https://docs.cloud.google.com/agent-registry/search-agents-and-tools) for more details. Allowed operators: `=`, `:`, `NOT`, `AND`, `OR`, and `()`. Searchable fields: | Field | `=` | `:` | `*` | Keyword Search | |---------------------------|-----|-----|-----|----------------| | skillId | Yes | Yes | Yes | Included | | name | No | Yes | Yes | Included | | displayName | No | Yes | Yes | Included | | description | No | Yes | No | Included | | frontmatter.name | No | Yes | No | Included | | frontmatter.description | No | Yes | No | Included | | frontmatter.compatibility | No | Yes | No | Included | | frontmatter.license | No | Yes | No | Included | Examples: * `skillId="urn:skill:projects-1234:locations:global:private-important-skill"` to find the skill with the specified skill ID. * `name:important` to find skills whose name contains `important` as a word. * `displayName:works*` to find skills whose display name contains words that start with `works`.
     * @param {string} apiParams.searchType - Optional. The type of search.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.skills.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/skills:search', 'GET', apiParams, clientConfig);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.skills.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    /**
     * Deletes a Skill container along with all its revisions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. If set to true, any child SkillRevisions under this Skill will also be deleted. Otherwise, the request will only succeed if the Skill has no child SkillRevisions.
     * @param {string} apiParams.name - (Required) Required. Target Skill container name to remove.
     * @param {string} apiParams.requestId - Optional. Signed UUID request idempotency token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.skills.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates Skill metadata or overrides active pointers/state using REST standard PATCH.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Resource name of the Skill. Format: `projects/{project}/locations/{location}/skills/{skill}` The `{skill}` segment acts as the resource ID. If the skill is associated with a Publisher, this segment typically uses a hyphenated namespace prefix corresponding to the publisher (e.g., `google-workspace-create-docs`).
     * @param {string} apiParams.requestId - Optional. Signed UUID request idempotency token.
     * @param {string} apiParams.updateMask - Optional. Standard update target mask mapping relative fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.skills.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * ========================================================================= # Skills Collection APIs Creates a Skill resource container, optionally publishing the initial SkillRevision inline in a single, atomic CRUD roundtrip.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project and location location to bootstrap.
     * @param {string} apiParams.requestId - Optional. Signed UUID request idempotency token.
     * @param {string} apiParams.skillId - Required. Custom, user-defined unique container identifier. Must be unique within the parent project and location. This value should be 4-64 characters, and valid characters are `/a-z-/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.skills.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/skills', 'POST', apiParams, clientConfig);

    /**
     * Fetches the active configuration and metadata of a Skill.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Target resource container name.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.skills.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.skills.revisions = {};

    /**
     * Creates a new immutable revision and triggers validation pipelines.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Parent logical container name.
     * @param {string} apiParams.requestId - Optional. Signed UUID request idempotency token.
     * @param {string} apiParams.skillRevisionId - Optional. Custom, user-defined unique revision identifier. Format: 4-63 characters, matching regex `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.skills.revisions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/revisions', 'POST', apiParams, clientConfig);

    /**
     * Deletes a specific revision (restricted to admins to purge accidentally committed secrets).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Target revision name to remove.
     * @param {string} apiParams.requestId - Optional. Signed UUID request idempotency token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.skills.revisions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists all revisions belonging to a parent Skill.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Page limit size.
     * @param {string} apiParams.pageToken - Optional. Page offset token.
     * @param {string} apiParams.parent - (Required) Required. Parent logical container name to query.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.skills.revisions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/revisions', 'GET', apiParams, clientConfig);

    /**
     * Gets details of a single immutable Revision.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Target revision name.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.skills.revisions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.bindings = {};

    /**
     * Creates a new Binding in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bindingId - Required. The ID to use for the binding, which will become the final component of the binding's resource name. This value should be 4-63 characters, and must conform to RFC-1034. Specifically, it must match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
     * @param {string} apiParams.parent - (Required) Required. The project and location to create the Binding in. Expected format: `projects/{project}/locations/{location}`.
     * @param {string} apiParams.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bindings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/bindings', 'POST', apiParams, clientConfig);

    /**
     * Gets details of a single Binding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Binding. Format: `projects/{project}/locations/{location}/bindings/{binding}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bindings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Fetches available Bindings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer items than requested. Page size is 500 if unspecified and is capped at `500` even if a larger value is given.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} apiParams.parent - (Required) Required. The parent, in the format `projects/{project}/locations/{location}`.
     * @param {string} apiParams.sourceIdentifier - The identifier of the source Agent. Format: * `urn:agent:{publisher}:{namespace}:{name}`
     * @param {string} apiParams.targetIdentifier - Optional. The identifier of the target Agent, MCP Server, or Endpoint. Format: * `urn:agent:{publisher}:{namespace}:{name}` * `urn:mcp:{publisher}:{namespace}:{name}` * `urn:endpoint:{publisher}:{namespace}:{name}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bindings.fetchAvailable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/bindings:fetchAvailable', 'GET', apiParams, clientConfig);

    /**
     * Deletes a single Binding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Binding. Format: `projects/{project}/locations/{location}/bindings/{binding}`.
     * @param {string} apiParams.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bindings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists Bindings in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A query string used to filter the list of bindings returned. The filter expression must follow AIP-160 syntax.
     * @param {string} apiParams.orderBy - Optional. Hint for how to order the results
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer items than requested. Page size is 500 if unspecified and is capped at `500` even if a larger value is given.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} apiParams.parent - (Required) Required. The project and location to list bindings in. Expected format: `projects/{project}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bindings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/bindings', 'GET', apiParams, clientConfig);

    /**
     * Updates the parameters of a single Binding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Identifier. The resource name of the Binding. Format: `projects/{project}/locations/{location}/bindings/{binding}`.
     * @param {string} apiParams.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the Binding resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields present in the request will be overwritten.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bindings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.findings = {};

    /**
     * Gets details of a single Finding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Finding to retrieve. Format: `projects/{project}/locations/{location}/findings/{finding}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.findings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists Findings in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filtering results
     * @param {string} apiParams.orderBy - Optional. Hint for how to order the results
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} apiParams.parent - (Required) Required. Parent value for ListFindingsRequest. Format: `projects/{project}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.findings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/findings', 'GET', apiParams, clientConfig);
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
