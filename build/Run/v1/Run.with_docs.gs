
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://run.googleapis.com/';
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

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - Optional. A filter for matching the completed or in-progress operations. The supported formats of *filter* are: To query for only completed operations: done:true To query for only ongoing operations: done:false Must be empty to query for all of the latest operations for the given parent project.
     * @param {string} params.name - (Required) Required. To query for all of the operations for a project.
     * @param {integer} params.pageSize - The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set or set to less than or equal to 0, the default page size is 100. .
     * @param {string} params.pageToken - Token identifying which result to start with, which is returned by a previous list call.
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
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.authorizeddomains = {};

    /**
     * List authorized domains.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) Name of the parent Project resource. Example: `projects/myproject`.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizeddomains.list = (params) => this._makeRequest('v1/{+parent}/authorizeddomains', 'GET', params);

    this.projects.locations.revisions = {};

    /**
     * List revisions. Results are sorted by creation time, descending.
     * @param {string} params.continue - Optional. Encoded string to continue paging.
     * @param {string} params.fieldSelector - Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean} params.includeUninitialized - Not currently used by Cloud Run.
     * @param {string} params.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} params.limit - Optional. The maximum number of records that should be returned.
     * @param {string} params.parent - (Required) The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.resourceVersion - The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean} params.watch - Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @return {object} The API response object.
     */
    this.projects.locations.revisions.list = (params) => this._makeRequest('v1/{+parent}/revisions', 'GET', params);

    /**
     * Get information about a revision.
     * @param {string} params.name - (Required) The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @return {object} The API response object.
     */
    this.projects.locations.revisions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Delete a revision.
     * @param {string} params.apiVersion - Cloud Run currently ignores this parameter.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.kind - Cloud Run currently ignores this parameter.
     * @param {string} params.name - (Required) The name of the revision to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.propagationPolicy - Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background.
     * @return {object} The API response object.
     */
    this.projects.locations.revisions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.configurations = {};

    /**
     * List configurations. Results are sorted by creation time, descending.
     * @param {string} params.continue - Optional. Encoded string to continue paging.
     * @param {string} params.fieldSelector - Not supported by Cloud Run.
     * @param {boolean} params.includeUninitialized - Not supported by Cloud Run.
     * @param {string} params.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} params.limit - Optional. The maximum number of the records that should be returned.
     * @param {string} params.parent - (Required) The namespace from which the configurations should be listed. For Cloud Run, replace {namespace_id} with the project ID or number.
     * @param {string} params.resourceVersion - Not supported by Cloud Run.
     * @param {boolean} params.watch - Not supported by Cloud Run.
     * @return {object} The API response object.
     */
    this.projects.locations.configurations.list = (params) => this._makeRequest('v1/{+parent}/configurations', 'GET', params);

    /**
     * Get information about a configuration.
     * @param {string} params.name - (Required) The name of the configuration to retrieve. For Cloud Run, replace {namespace_id} with the project ID or number.
     * @return {object} The API response object.
     */
    this.projects.locations.configurations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.domainmappings = {};

    /**
     * Create a new domain mapping.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.parent - (Required) Required. The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.domainmappings.create = (params) => this._makeRequest('v1/{+parent}/domainmappings', 'POST', params);

    /**
     * List all domain mappings.
     * @param {string} params.continue - Optional. Encoded string to continue paging.
     * @param {string} params.fieldSelector - Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean} params.includeUninitialized - Not currently used by Cloud Run.
     * @param {string} params.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} params.limit - Optional. The maximum number of records that should be returned.
     * @param {string} params.parent - (Required) Required. The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.resourceVersion - The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean} params.watch - Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @return {object} The API response object.
     */
    this.projects.locations.domainmappings.list = (params) => this._makeRequest('v1/{+parent}/domainmappings', 'GET', params);

    /**
     * Get information about a domain mapping.
     * @param {string} params.name - (Required) Required. The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @return {object} The API response object.
     */
    this.projects.locations.domainmappings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Delete a domain mapping.
     * @param {string} params.apiVersion - Cloud Run currently ignores this parameter.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.kind - Cloud Run currently ignores this parameter.
     * @param {string} params.name - (Required) Required. The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.propagationPolicy - Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information.
     * @return {object} The API response object.
     */
    this.projects.locations.domainmappings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.jobs = {};

    /**
     * Get the IAM Access Control policy currently in effect for the given job. This result does not include any inherited policies.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Sets the IAM Access control policy for the specified job. Overwrites any existing policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified job. There are no permissions required for making this API call.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.routes = {};

    /**
     * List routes. Results are sorted by creation time, descending.
     * @param {string} params.continue - Optional. Encoded string to continue paging.
     * @param {string} params.fieldSelector - Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean} params.includeUninitialized - Not currently used by Cloud Run.
     * @param {string} params.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} params.limit - Optional. The maximum number of records that should be returned.
     * @param {string} params.parent - (Required) The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.resourceVersion - The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean} params.watch - Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @return {object} The API response object.
     */
    this.projects.locations.routes.list = (params) => this._makeRequest('v1/{+parent}/routes', 'GET', params);

    /**
     * Get information about a route.
     * @param {string} params.name - (Required) The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @return {object} The API response object.
     */
    this.projects.locations.routes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.services = {};

    /**
     * Lists services for the given project and region. Results are sorted by creation time, descending.
     * @param {string} params.continue - Encoded string to continue paging.
     * @param {string} params.fieldSelector - Not supported, and ignored by Cloud Run.
     * @param {boolean} params.includeUninitialized - Not supported, and ignored by Cloud Run.
     * @param {string} params.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} params.limit - The maximum number of records that should be returned.
     * @param {string} params.parent - (Required) Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
     * @param {string} params.resourceVersion - Not supported, and ignored by Cloud Run.
     * @param {boolean} params.watch - Not supported, and ignored by Cloud Run.
     * @return {object} The API response object.
     */
    this.projects.locations.services.list = (params) => this._makeRequest('v1/{+parent}/services', 'GET', params);

    /**
     * Gets information about a service.
     * @param {string} params.name - (Required) Required. The fully qualified name of the service to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
     * @return {object} The API response object.
     */
    this.projects.locations.services.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.parent - (Required) Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.services.create = (params) => this._makeRequest('v1/{+parent}/services', 'POST', params);

    /**
     * Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.name - (Required) Required. The fully qualified name of the service to replace. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.services.replaceService = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
     * @param {string} params.apiVersion - Not supported, and ignored by Cloud Run.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.kind - Not supported, and ignored by Cloud Run.
     * @param {string} params.name - (Required) Required. The fully qualified name of the service to delete. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
     * @param {string} params.propagationPolicy - Not supported, and ignored by Cloud Run.
     * @return {object} The API response object.
     */
    this.projects.locations.services.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.services.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.services.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.services.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.workerpools = {};

    /**
     * Get the IAM Access Control policy currently in effect for the given worker pool. This result does not include any inherited policies.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.workerpools.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Sets the IAM Access control policy for the specified worker pool. Overwrites any existing policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workerpools.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified worker pool. There are no permissions required for making this API call.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workerpools.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.authorizeddomains = {};

    /**
     * List authorized domains.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) Name of the parent Project resource. Example: `projects/myproject`.
     * @return {object} The API response object.
     */
    this.projects.authorizeddomains.list = (params) => this._makeRequest('v1/{+parent}/authorizeddomains', 'GET', params);

    this.namespaces = {};

    this.namespaces.authorizeddomains = {};

    /**
     * List authorized domains.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.parent - (Required) Name of the parent Project resource. Example: `projects/myproject`.
     * @return {object} The API response object.
     */
    this.namespaces.authorizeddomains.list = (params) => this._makeRequest('apis/domains.cloudrun.com/v1/{+parent}/authorizeddomains', 'GET', params);

    this.namespaces.revisions = {};

    /**
     * List revisions. Results are sorted by creation time, descending.
     * @param {string} params.continue - Optional. Encoded string to continue paging.
     * @param {string} params.fieldSelector - Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean} params.includeUninitialized - Not currently used by Cloud Run.
     * @param {string} params.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} params.limit - Optional. The maximum number of records that should be returned.
     * @param {string} params.parent - (Required) The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.resourceVersion - The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean} params.watch - Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @return {object} The API response object.
     */
    this.namespaces.revisions.list = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/revisions', 'GET', params);

    /**
     * Get information about a revision.
     * @param {string} params.name - (Required) The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @return {object} The API response object.
     */
    this.namespaces.revisions.get = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'GET', params);

    /**
     * Delete a revision.
     * @param {string} params.apiVersion - Cloud Run currently ignores this parameter.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.kind - Cloud Run currently ignores this parameter.
     * @param {string} params.name - (Required) The name of the revision to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.propagationPolicy - Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background.
     * @return {object} The API response object.
     */
    this.namespaces.revisions.delete = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'DELETE', params);

    this.namespaces.configurations = {};

    /**
     * List configurations. Results are sorted by creation time, descending.
     * @param {string} params.continue - Optional. Encoded string to continue paging.
     * @param {string} params.fieldSelector - Not supported by Cloud Run.
     * @param {boolean} params.includeUninitialized - Not supported by Cloud Run.
     * @param {string} params.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} params.limit - Optional. The maximum number of the records that should be returned.
     * @param {string} params.parent - (Required) The namespace from which the configurations should be listed. For Cloud Run, replace {namespace_id} with the project ID or number.
     * @param {string} params.resourceVersion - Not supported by Cloud Run.
     * @param {boolean} params.watch - Not supported by Cloud Run.
     * @return {object} The API response object.
     */
    this.namespaces.configurations.list = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/configurations', 'GET', params);

    /**
     * Get information about a configuration.
     * @param {string} params.name - (Required) The name of the configuration to retrieve. For Cloud Run, replace {namespace_id} with the project ID or number.
     * @return {object} The API response object.
     */
    this.namespaces.configurations.get = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'GET', params);

    this.namespaces.domainmappings = {};

    /**
     * Create a new domain mapping.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.parent - (Required) Required. The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.namespaces.domainmappings.create = (params) => this._makeRequest('apis/domains.cloudrun.com/v1/{+parent}/domainmappings', 'POST', params);

    /**
     * List all domain mappings.
     * @param {string} params.continue - Optional. Encoded string to continue paging.
     * @param {string} params.fieldSelector - Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean} params.includeUninitialized - Not currently used by Cloud Run.
     * @param {string} params.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} params.limit - Optional. The maximum number of records that should be returned.
     * @param {string} params.parent - (Required) Required. The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.resourceVersion - The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean} params.watch - Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @return {object} The API response object.
     */
    this.namespaces.domainmappings.list = (params) => this._makeRequest('apis/domains.cloudrun.com/v1/{+parent}/domainmappings', 'GET', params);

    /**
     * Get information about a domain mapping.
     * @param {string} params.name - (Required) Required. The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @return {object} The API response object.
     */
    this.namespaces.domainmappings.get = (params) => this._makeRequest('apis/domains.cloudrun.com/v1/{+name}', 'GET', params);

    /**
     * Delete a domain mapping.
     * @param {string} params.apiVersion - Cloud Run currently ignores this parameter.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.kind - Cloud Run currently ignores this parameter.
     * @param {string} params.name - (Required) Required. The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.propagationPolicy - Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information.
     * @return {object} The API response object.
     */
    this.namespaces.domainmappings.delete = (params) => this._makeRequest('apis/domains.cloudrun.com/v1/{+name}', 'DELETE', params);

    this.namespaces.tasks = {};

    /**
     * Get information about a task.
     * @param {string} params.name - (Required) Required. The name of the task to retrieve. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @return {object} The API response object.
     */
    this.namespaces.tasks.get = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'GET', params);

    /**
     * List tasks.
     * @param {string} params.continue - Optional. Optional encoded string to continue paging.
     * @param {string} params.fieldSelector - Optional. Not supported by Cloud Run.
     * @param {boolean} params.includeUninitialized - Optional. Not supported by Cloud Run.
     * @param {string} params.labelSelector - Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. For example, to list all tasks of execution "foo" in succeeded state: `run.googleapis.com/execution=foo,run.googleapis.com/runningState=Succeeded`. Supported states are: * `Pending`: Initial state of all tasks. The task has not yet started but eventually will. * `Running`: Container instances for this task are running or will be running shortly. * `Succeeded`: No more container instances to run for the task, and the last attempt succeeded. * `Failed`: No more container instances to run for the task, and the last attempt failed. This task has run out of retry attempts. * `Cancelled`: Task was running but got stopped because its parent execution has been aborted. * `Abandoned`: The task has not yet started and never will because its parent execution has been aborted.
     * @param {integer} params.limit - Optional. The maximum number of records that should be returned.
     * @param {string} params.parent - (Required) Required. The namespace from which the tasks should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.resourceVersion - Optional. Not supported by Cloud Run.
     * @param {boolean} params.watch - Optional. Not supported by Cloud Run.
     * @return {object} The API response object.
     */
    this.namespaces.tasks.list = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/tasks', 'GET', params);

    this.namespaces.executions = {};

    /**
     * Delete an execution.
     * @param {string} params.apiVersion - Optional. Cloud Run currently ignores this parameter.
     * @param {string} params.kind - Optional. Cloud Run currently ignores this parameter.
     * @param {string} params.name - (Required) Required. The name of the execution to delete. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.propagationPolicy - Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting.
     * @return {object} The API response object.
     */
    this.namespaces.executions.delete = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'DELETE', params);

    /**
     * Get information about an execution.
     * @param {string} params.name - (Required) Required. The name of the execution to retrieve. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @return {object} The API response object.
     */
    this.namespaces.executions.get = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'GET', params);

    /**
     * List executions. Results are sorted by creation time, descending.
     * @param {string} params.continue - Optional. Optional encoded string to continue paging.
     * @param {string} params.fieldSelector - Optional. Not supported by Cloud Run.
     * @param {boolean} params.includeUninitialized - Optional. Not supported by Cloud Run.
     * @param {string} params.labelSelector - Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} params.limit - Optional. The maximum number of the records that should be returned.
     * @param {string} params.parent - (Required) Required. The namespace from which the executions should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.resourceVersion - Optional. Not supported by Cloud Run.
     * @param {boolean} params.watch - Optional. Not supported by Cloud Run.
     * @return {object} The API response object.
     */
    this.namespaces.executions.list = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/executions', 'GET', params);

    /**
     * Cancel an execution.
     * @param {string} params.name - (Required) Required. The name of the execution to cancel. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.namespaces.executions.cancel = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}:cancel', 'POST', params);

    this.namespaces.jobs = {};

    /**
     * Create a job.
     * @param {string} params.parent - (Required) Required. The namespace in which the job should be created. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.namespaces.jobs.create = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/jobs', 'POST', params);

    /**
     * Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @param {string} params.name - (Required) Required. The name of the job being replaced. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.namespaces.jobs.replaceJob = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'PUT', params);

    /**
     * Delete a job.
     * @param {string} params.apiVersion - Optional. Cloud Run currently ignores this parameter.
     * @param {string} params.kind - Optional. Cloud Run currently ignores this parameter.
     * @param {string} params.name - (Required) Required. The name of the job to delete. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.propagationPolicy - Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     * @return {object} The API response object.
     */
    this.namespaces.jobs.delete = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'DELETE', params);

    /**
     * Get information about a job.
     * @param {string} params.name - (Required) Required. The name of the job to retrieve. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @return {object} The API response object.
     */
    this.namespaces.jobs.get = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'GET', params);

    /**
     * List jobs. Results are sorted by creation time, descending.
     * @param {string} params.continue - Optional. Optional encoded string to continue paging.
     * @param {string} params.fieldSelector - Optional. Not supported by Cloud Run.
     * @param {boolean} params.includeUninitialized - Optional. Not supported by Cloud Run.
     * @param {string} params.labelSelector - Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} params.limit - Optional. The maximum number of records that should be returned.
     * @param {string} params.parent - (Required) Required. The namespace from which the jobs should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.resourceVersion - Optional. Not supported by Cloud Run.
     * @param {boolean} params.watch - Optional. Not supported by Cloud Run.
     * @return {object} The API response object.
     */
    this.namespaces.jobs.list = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/jobs', 'GET', params);

    /**
     * Trigger creation of a new execution of this job.
     * @param {string} params.name - (Required) Required. The name of the job to run. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.namespaces.jobs.run = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}:run', 'POST', params);

    this.namespaces.routes = {};

    /**
     * List routes. Results are sorted by creation time, descending.
     * @param {string} params.continue - Optional. Encoded string to continue paging.
     * @param {string} params.fieldSelector - Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean} params.includeUninitialized - Not currently used by Cloud Run.
     * @param {string} params.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} params.limit - Optional. The maximum number of records that should be returned.
     * @param {string} params.parent - (Required) The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @param {string} params.resourceVersion - The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean} params.watch - Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @return {object} The API response object.
     */
    this.namespaces.routes.list = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/routes', 'GET', params);

    /**
     * Get information about a route.
     * @param {string} params.name - (Required) The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
     * @return {object} The API response object.
     */
    this.namespaces.routes.get = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'GET', params);

    this.namespaces.services = {};

    /**
     * Lists services for the given project and region. Results are sorted by creation time, descending.
     * @param {string} params.continue - Encoded string to continue paging.
     * @param {string} params.fieldSelector - Not supported, and ignored by Cloud Run.
     * @param {boolean} params.includeUninitialized - Not supported, and ignored by Cloud Run.
     * @param {string} params.labelSelector - Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer} params.limit - The maximum number of records that should be returned.
     * @param {string} params.parent - (Required) Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
     * @param {string} params.resourceVersion - Not supported, and ignored by Cloud Run.
     * @param {boolean} params.watch - Not supported, and ignored by Cloud Run.
     * @return {object} The API response object.
     */
    this.namespaces.services.list = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/services', 'GET', params);

    /**
     * Gets information about a service.
     * @param {string} params.name - (Required) Required. The fully qualified name of the service to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
     * @return {object} The API response object.
     */
    this.namespaces.services.get = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'GET', params);

    /**
     * Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.parent - (Required) Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.namespaces.services.create = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/services', 'POST', params);

    /**
     * Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.name - (Required) Required. The fully qualified name of the service to replace. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.namespaces.services.replaceService = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'PUT', params);

    /**
     * Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
     * @param {string} params.apiVersion - Not supported, and ignored by Cloud Run.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.kind - Not supported, and ignored by Cloud Run.
     * @param {string} params.name - (Required) Required. The fully qualified name of the service to delete. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
     * @param {string} params.propagationPolicy - Not supported, and ignored by Cloud Run.
     * @return {object} The API response object.
     */
    this.namespaces.services.delete = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'DELETE', params);

    this.namespaces.workerpools = {};

    /**
     * Lists worker pools for the given project and region. Results are sorted by creation time, descending.
     * @param {string} params.continue - Encoded string to continue paging.
     * @param {string} params.labelSelector - =, !=, exists, in, and notIn.
     * @param {integer} params.limit - The maximum number of records that should be returned.
     * @param {string} params.parent - (Required) Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/workerpools` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
     * @return {object} The API response object.
     */
    this.namespaces.workerpools.list = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/workerpools', 'GET', params);

    /**
     * Gets information about a worker pool.
     * @param {string} params.name - (Required) Required. The fully qualified name of the worker pool to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number}/workerpools/{worker_pool_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/workerpools/{worker_pool_name}` * `projects/{project_id_or_number}/regions/{region}/workerpools/{worker_pool_name}`
     * @return {object} The API response object.
     */
    this.namespaces.workerpools.get = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'GET', params);

    /**
     * Creates a new WorkerPool. WorkerPool creation will trigger a new deployment. Use GetWorkerPool, and check worker_pool.status to determine if the WorkerPool is ready.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.parent - (Required) Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/workerpools` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.namespaces.workerpools.create = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/workerpools', 'POST', params);

    /**
     * Replaces a worker pool. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.name - (Required) Required. The fully qualified name of the worker pool to replace. It can be any of the following forms: * `namespaces/{project_id_or_number}/workerpools/{worker_pool_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/workerpools/{worker_pool_name}` * `projects/{project_id_or_number}/regions/{region}/workerpools/{worker_pool_name}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.namespaces.workerpools.replaceWorkerPool = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'PUT', params);

    /**
     * Deletes the provided worker pool. This will cause the WorkerPool to stop all instances and will delete all associated WorkerPoolRevisions.
     * @param {string} params.dryRun - Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     * @param {string} params.name - (Required) Required. The fully qualified name of the worker pool to delete. It can be any of the following forms: * `namespaces/{project_id_or_number}/workerpools/{worker_pool_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/workerpools/{worker_pool_name}` * `projects/{project_id_or_number}/regions/{region}/workerpools/{worker_pool_name}`
     * @return {object} The API response object.
     */
    this.namespaces.workerpools.delete = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'DELETE', params);
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
