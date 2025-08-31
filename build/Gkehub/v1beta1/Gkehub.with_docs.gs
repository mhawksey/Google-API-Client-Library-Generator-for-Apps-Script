
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://gkehub.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.memberships = {};

    /**
     * Lists Memberships in a given project and location.
     * @param {string} params.filter - Optional. Lists Memberships that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Name is `bar` in project `foo-proj` and location `global`: name = "projects/foo-proj/locations/global/membership/bar" - Memberships that have a label called `foo`: labels.foo:* - Memberships that have a label called `foo` whose value is `bar`: labels.foo = bar - Memberships in the CREATING state: state = CREATING
     * @param {string} params.orderBy - Optional. One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.
     * @param {integer} params.pageSize - Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     * @param {string} params.pageToken - Optional. Token returned by previous call to `ListMemberships` which specifies the position in the list from where to continue listing the resources.
     * @param {string} params.parent - (Required) Required. The parent (project and location) where the Memberships will be listed. Specified in the format `projects/*\/locations/*`. `projects/*\/locations/-` list memberships in all the regions.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.list = (params) => this._makeRequest('v1beta1/{+parent}/memberships', 'GET', params);

    /**
     * Gets the details of a Membership.
     * @param {string} params.name - (Required) Required. The Membership resource name in the format `projects/*\/locations/*\/memberships/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
     * @param {string} params.membershipId - Required. Client chosen ID for the membership. `membership_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
     * @param {string} params.parent - (Required) Required. The parent (project and location) where the Memberships will be created. Specified in the format `projects/*\/locations/*`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.create = (params) => this._makeRequest('v1beta1/{+parent}/memberships', 'POST', params);

    /**
     * Removes a Membership. **This is currently only supported for GKE clusters on Google Cloud**. To unregister other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/unregistering-a-cluster.
     * @param {boolean} params.force - Optional. If set to true, any subresource from this Membership will also be deleted. Otherwise, the request will only work if the Membership has no subresource.
     * @param {string} params.name - (Required) Required. The Membership resource name in the format `projects/*\/locations/*\/memberships/*`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Updates an existing Membership.
     * @param {string} params.name - (Required) Required. The membership resource name in the format: `projects/[project_id]/locations/global/memberships/[membership_id]`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one field path must be specified in this mask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
     * @param {string} params.connectAgent.name - Do not set.
     * @param {string} params.connectAgent.namespace - Optional. Namespace for GKE Connect agent resources. Defaults to `gke-connect`. The Connect Agent is authorized automatically when run in the default namespace. Otherwise, explicit authorization must be granted with an additional IAM binding.
     * @param {string} params.connectAgent.proxy - Optional. URI of a proxy if connectivity from the agent to gkeconnect.googleapis.com requires the use of a proxy. Format must be in the form `http(s)://{proxy_address}`, depending on the HTTP/HTTPS protocol supported by the proxy. This will direct the connect agent's outbound traffic through a HTTP(S) proxy.
     * @param {string} params.imagePullSecretContent - Optional. The image pull secret content for the registry, if not public.
     * @param {boolean} params.isUpgrade - Optional. If true, generate the resources for upgrade only. Some resources generated only for installation (e.g. secrets) will be excluded.
     * @param {string} params.name - (Required) Required. The Membership resource name the Agent will associate with, in the format `projects/*\/locations/*\/memberships/*`.
     * @param {string} params.registry - Optional. The registry to fetch the connect agent image from. Defaults to gcr.io/gkeconnect.
     * @param {string} params.version - Optional. The Connect agent version to use. Defaults to the most current version.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.generateConnectManifest = (params) => this._makeRequest('v1beta1/{+name}:generateConnectManifest', 'GET', params);

    /**
     * ValidateExclusivity validates the state of exclusivity in the cluster. The validation does not depend on an existing Hub membership resource.
     * @param {string} params.crManifest - Optional. The YAML of the membership CR in the cluster. Empty if the membership CR does not exist.
     * @param {string} params.intendedMembership - Required. The intended membership name under the `parent`. This method only does validation in anticipation of a CreateMembership call with the same name.
     * @param {string} params.parent - (Required) Required. The parent (project and location) where the Memberships will be created. Specified in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.validateExclusivity = (params) => this._makeRequest('v1beta1/{+parent}/memberships:validateExclusivity', 'GET', params);

    /**
     * GenerateExclusivityManifest generates the manifests to update the exclusivity artifacts in the cluster if needed. Exclusivity artifacts include the Membership custom resource definition (CRD) and the singleton Membership custom resource (CR). Combined with ValidateExclusivity, exclusivity artifacts guarantee that a Kubernetes cluster is only registered to a single GKE Hub. The Membership CRD is versioned, and may require conversion when the GKE Hub API server begins serving a newer version of the CRD and corresponding CR. The response will be the converted CRD and CR if there are any differences between the versions.
     * @param {string} params.crManifest - Optional. The YAML manifest of the membership CR retrieved by `kubectl get memberships membership`. Leave empty if the resource does not exist.
     * @param {string} params.crdManifest - Optional. The YAML manifest of the membership CRD retrieved by `kubectl get customresourcedefinitions membership`. Leave empty if the resource does not exist.
     * @param {string} params.name - (Required) Required. The Membership resource name in the format `projects/*\/locations/*\/memberships/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.generateExclusivityManifest = (params) => this._makeRequest('v1beta1/{+name}:generateExclusivityManifest', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
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
