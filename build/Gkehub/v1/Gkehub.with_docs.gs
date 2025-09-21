
/**
 * Google Apps Script client library for the GKE Hub API
 * Documentation URL: https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster
 * @class
 */
class Gkehub {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://gkehub.googleapis.com/';
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

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name for the location.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
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
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.memberships = {};

    /**
     * Lists Memberships in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Lists Memberships that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Name is `bar` in project `foo-proj` and location `global`: name = "projects/foo-proj/locations/global/membership/bar" - Memberships that have a label called `foo`: labels.foo:* - Memberships that have a label called `foo` whose value is `bar`: labels.foo = bar - Memberships in the CREATING state: state = CREATING
     * @param {string} apiParams.orderBy - Optional. One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.
     * @param {integer} apiParams.pageSize - Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     * @param {string} apiParams.pageToken - Optional. Token returned by previous call to `ListMemberships` which specifies the position in the list from where to continue listing the resources.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the Memberships will be listed. Specified in the format `projects/*\/locations/*`. `projects/*\/locations/-` list memberships in all the regions.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/memberships', 'GET', apiParams, clientConfig);

    /**
     * Gets the details of a Membership.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The Membership resource name in the format `projects/*\/locations/*\/memberships/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.membershipId - Required. Client chosen ID for the membership. `membership_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the Memberships will be created. Specified in the format `projects/*\/locations/*`.
     * @param {string} apiParams.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/memberships', 'POST', apiParams, clientConfig);

    /**
     * Removes a Membership. **This is currently only supported for GKE clusters on Google Cloud**. To unregister other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/unregistering-a-cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. If set to true, any subresource from this Membership will also be deleted. Otherwise, the request will only work if the Membership has no subresource.
     * @param {string} apiParams.name - (Required) Required. The Membership resource name in the format `projects/*\/locations/*\/memberships/*`.
     * @param {string} apiParams.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates an existing Membership.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The Membership resource name in the format `projects/*\/locations/*\/memberships/*`.
     * @param {string} apiParams.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.updateMask - Required. Mask of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.imagePullSecretContent - Optional. The image pull secret content for the registry, if not public.
     * @param {boolean} apiParams.isUpgrade - Optional. If true, generate the resources for upgrade only. Some resources generated only for installation (e.g. secrets) will be excluded.
     * @param {string} apiParams.name - (Required) Required. The Membership resource name the Agent will associate with, in the format `projects/*\/locations/*\/memberships/*`.
     * @param {string} apiParams.namespace - Optional. Namespace for GKE Connect agent resources. Defaults to `gke-connect`. The Connect Agent is authorized automatically when run in the default namespace. Otherwise, explicit authorization must be granted with an additional IAM binding.
     * @param {string} apiParams.proxy - Optional. URI of a proxy if connectivity from the agent to gkeconnect.googleapis.com requires the use of a proxy. Format must be in the form `http(s)://{proxy_address}`, depending on the HTTP/HTTPS protocol supported by the proxy. This will direct the connect agent's outbound traffic through a HTTP(S) proxy.
     * @param {string} apiParams.registry - Optional. The registry to fetch the connect agent image from. Defaults to gcr.io/gkeconnect.
     * @param {string} apiParams.version - Optional. The Connect agent version to use. Defaults to the most current version.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.generateConnectManifest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:generateConnectManifest', 'GET', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.memberships.bindings = {};

    /**
     * Returns the details of a MembershipBinding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The MembershipBinding resource name in the format `projects/*\/locations/*\/memberships/*\/bindings/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.bindings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a MembershipBinding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.membershipBindingId - Required. The ID to use for the MembershipBinding.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the MembershipBinding will be created. Specified in the format `projects/*\/locations/*\/memberships/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.bindings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bindings', 'POST', apiParams, clientConfig);

    /**
     * Updates a MembershipBinding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name for the membershipbinding itself `projects/{project}/locations/{location}/memberships/{membership}/bindings/{membershipbinding}`
     * @param {string} apiParams.updateMask - Required. The fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.bindings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a MembershipBinding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The MembershipBinding resource name in the format `projects/*\/locations/*\/memberships/*\/bindings/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.bindings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists MembershipBindings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Lists MembershipBindings that match the filter expression, following the syntax outlined in https://google.aip.dev/160.
     * @param {integer} apiParams.pageSize - Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     * @param {string} apiParams.pageToken - Optional. Token returned by previous call to `ListMembershipBindings` which specifies the position in the list from where to continue listing the resources.
     * @param {string} apiParams.parent - (Required) Required. The parent Membership for which the MembershipBindings will be listed. Specified in the format `projects/*\/locations/*\/memberships/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.bindings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bindings', 'GET', apiParams, clientConfig);

    this.projects.locations.memberships.rbacrolebindings = {};

    /**
     * Returns the details of a Membership RBACRoleBinding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The RBACRoleBinding resource name in the format `projects/*\/locations/*\/memberships/*\/rbacrolebindings/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.rbacrolebindings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a Membership RBACRoleBinding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/*\/locations/*\/memberships/*`.
     * @param {string} apiParams.rbacrolebindingId - Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.rbacrolebindings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/rbacrolebindings', 'POST', apiParams, clientConfig);

    /**
     * Updates a Membership RBACRoleBinding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name for the rbacrolebinding `projects/{project}/locations/{location}/scopes/{scope}/rbacrolebindings/{rbacrolebinding}` or `projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}`
     * @param {string} apiParams.updateMask - Required. The fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.rbacrolebindings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a Membership RBACRoleBinding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The RBACRoleBinding resource name in the format `projects/*\/locations/*\/memberships/*\/rbacrolebindings/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.rbacrolebindings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists all Membership RBACRoleBindings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     * @param {string} apiParams.pageToken - Optional. Token returned by previous call to `ListMembershipRBACRoleBindings` which specifies the position in the list from where to continue listing the resources.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/*\/locations/*\/memberships/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.rbacrolebindings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/rbacrolebindings', 'GET', apiParams, clientConfig);

    /**
     * Generates a YAML of the RBAC policies for the specified RoleBinding and its associated impersonation resources.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/*\/locations/*\/memberships/*`.
     * @param {string} apiParams.rbacrolebindingId - Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.memberships.rbacrolebindings.generateMembershipRBACRoleBindingYAML = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/rbacrolebindings:generateMembershipRBACRoleBindingYAML', 'POST', apiParams, clientConfig);

    this.projects.locations.scopes = {};

    /**
     * Lists Memberships bound to a Scope. The response includes relevant Memberships from all regions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Lists Memberships that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Currently, filtering can be done only based on Memberships's `name`, `labels`, `create_time`, `update_time`, and `unique_id`.
     * @param {integer} apiParams.pageSize - Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. Pagination is currently not supported; therefore, setting this field does not have any impact for now.
     * @param {string} apiParams.pageToken - Optional. Token returned by previous call to `ListBoundMemberships` which specifies the position in the list from where to continue listing the resources.
     * @param {string} apiParams.scopeName - (Required) Required. Name of the Scope, in the format `projects/*\/locations/global/scopes/*`, to which the Memberships are bound.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.listMemberships = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+scopeName}:listMemberships', 'GET', apiParams, clientConfig);

    /**
     * Returns the details of a Scope.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The Scope resource name in the format `projects/*\/locations/*\/scopes/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a Scope.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the Scope will be created. Specified in the format `projects/*\/locations/*`.
     * @param {string} apiParams.scopeId - Required. Client chosen ID for the Scope. `scope_id` must be a ????
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/scopes', 'POST', apiParams, clientConfig);

    /**
     * Updates a scopes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name for the scope `projects/{project}/locations/{location}/scopes/{scope}`
     * @param {string} apiParams.updateMask - Required. The fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a Scope.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The Scope resource name in the format `projects/*\/locations/*\/scopes/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists Scopes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     * @param {string} apiParams.pageToken - Optional. Token returned by previous call to `ListScopes` which specifies the position in the list from where to continue listing the resources.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the Scope will be listed. Specified in the format `projects/*\/locations/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/scopes', 'GET', apiParams, clientConfig);

    /**
     * Lists permitted Scopes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     * @param {string} apiParams.pageToken - Optional. Token returned by previous call to `ListPermittedScopes` which specifies the position in the list from where to continue listing the resources.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the Scope will be listed. Specified in the format `projects/*\/locations/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.listPermitted = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/scopes:listPermitted', 'GET', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.scopes.namespaces = {};

    /**
     * Returns the details of a fleet namespace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The Namespace resource name in the format `projects/*\/locations/*\/scopes/*\/namespaces/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.namespaces.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a fleet namespace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the Namespace will be created. Specified in the format `projects/*\/locations/*\/scopes/*`.
     * @param {string} apiParams.scopeNamespaceId - Required. Client chosen ID for the Namespace. `namespace_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.namespaces.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/namespaces', 'POST', apiParams, clientConfig);

    /**
     * Updates a fleet namespace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name for the namespace `projects/{project}/locations/{location}/namespaces/{namespace}`
     * @param {string} apiParams.updateMask - Required. The fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.namespaces.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a fleet namespace.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The Namespace resource name in the format `projects/*\/locations/*\/scopes/*\/namespaces/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.namespaces.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists fleet namespaces.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     * @param {string} apiParams.pageToken - Optional. Token returned by previous call to `ListFeatures` which specifies the position in the list from where to continue listing the resources.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/*\/locations/*\/scopes/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.namespaces.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/namespaces', 'GET', apiParams, clientConfig);

    this.projects.locations.scopes.rbacrolebindings = {};

    /**
     * Returns the details of a Scope RBACRoleBinding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The RBACRoleBinding resource name in the format `projects/*\/locations/*\/scopes/*\/rbacrolebindings/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.rbacrolebindings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a Scope RBACRoleBinding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/*\/locations/*\/scopes/*`.
     * @param {string} apiParams.rbacrolebindingId - Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.rbacrolebindings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/rbacrolebindings', 'POST', apiParams, clientConfig);

    /**
     * Updates a Scope RBACRoleBinding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name for the rbacrolebinding `projects/{project}/locations/{location}/scopes/{scope}/rbacrolebindings/{rbacrolebinding}` or `projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}`
     * @param {string} apiParams.updateMask - Required. The fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.rbacrolebindings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a Scope RBACRoleBinding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The RBACRoleBinding resource name in the format `projects/*\/locations/*\/scopes/*\/rbacrolebindings/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.rbacrolebindings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists all Scope RBACRoleBindings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     * @param {string} apiParams.pageToken - Optional. Token returned by previous call to `ListScopeRBACRoleBindings` which specifies the position in the list from where to continue listing the resources.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/*\/locations/*\/scopes/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.scopes.rbacrolebindings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/rbacrolebindings', 'GET', apiParams, clientConfig);

    this.projects.locations.features = {};

    /**
     * Lists Features in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Lists Features that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Feature with the name "servicemesh" in project "foo-proj": name = "projects/foo-proj/locations/global/features/servicemesh" - Features that have a label called `foo`: labels.foo:* - Features that have a label called `foo` whose value is `bar`: labels.foo = bar
     * @param {string} apiParams.orderBy - One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.
     * @param {integer} apiParams.pageSize - When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     * @param {string} apiParams.pageToken - Token returned by previous call to `ListFeatures` which specifies the position in the list from where to continue listing the resources.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/*\/locations/*`.
     * @param {boolean} apiParams.returnPartialSuccess - Optional. If set to true, the response will return partial results when some regions are unreachable and the unreachable field in Feature proto will be populated. If set to false, the request will fail when some regions are unreachable.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.features.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/features', 'GET', apiParams, clientConfig);

    /**
     * Gets details of a single Feature.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The Feature resource name in the format `projects/*\/locations/*\/features/*`
     * @param {boolean} apiParams.returnPartialSuccess - Optional. If set to true, the response will return partial results when some regions are unreachable and the unreachable field in Feature proto will be populated. If set to false, the request will fail when some regions are unreachable.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.features.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Adds a new Feature.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.featureId - The ID of the feature to create.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the Feature will be created. Specified in the format `projects/*\/locations/*`.
     * @param {string} apiParams.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.features.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/features', 'POST', apiParams, clientConfig);

    /**
     * Removes a Feature.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - If set to true, the delete will ignore any outstanding resources for this Feature (that is, `FeatureState.has_resources` is set to true). These resources will NOT be cleaned up or modified in any way.
     * @param {string} apiParams.name - (Required) Required. The Feature resource name in the format `projects/*\/locations/*\/features/*`.
     * @param {string} apiParams.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.features.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates an existing Feature.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The Feature resource name in the format `projects/*\/locations/*\/features/*`.
     * @param {string} apiParams.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} apiParams.updateMask - Mask of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.features.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.features.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.features.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.features.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.fleets = {};

    /**
     * Creates a fleet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) where the Fleet will be created. Specified in the format `projects/*\/locations/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.fleets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/fleets', 'POST', apiParams, clientConfig);

    /**
     * Returns the details of a fleet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The Fleet resource name in the format `projects/*\/locations/*\/fleets/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.fleets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a fleet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The full, unique resource name of this fleet in the format of `projects/{project}/locations/{location}/fleets/{fleet}`. Each Google Cloud project can have at most one fleet resource, named "default".
     * @param {string} apiParams.updateMask - Required. The fields to be updated;
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.fleets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Removes a Fleet. There must be no memberships remaining in the Fleet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The Fleet resource name in the format `projects/*\/locations/*\/fleets/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.fleets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns all fleets within an organization or a project that the caller has access to.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of fleets to return. The service may return fewer than this value. If unspecified, at most 200 fleets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListFleets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFleets` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The organization or project to list for Fleets under, in the format `organizations/*\/locations/*` or `projects/*\/locations/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.fleets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/fleets', 'GET', apiParams, clientConfig);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.fleets = {};

    /**
     * Returns all fleets within an organization or a project that the caller has access to.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of fleets to return. The service may return fewer than this value. If unspecified, at most 200 fleets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListFleets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFleets` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The organization or project to list for Fleets under, in the format `organizations/*\/locations/*` or `projects/*\/locations/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.fleets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/fleets', 'GET', apiParams, clientConfig);
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
