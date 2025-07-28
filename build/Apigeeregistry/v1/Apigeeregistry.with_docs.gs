
/**
 * Google Apps Script client library for the Apigee Registry API
 * Documentation URL: https://cloud.google.com/apigee/docs/api-hub/what-is-api-hub
 * @class
 */
class Apigeeregistry {
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
    this._rootUrl = 'https://apigeeregistry.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
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
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.instances = {};

    /**
     * Provisions instance resources for the Registry.
     * @param {string} params.instanceId - Required. Identifier to assign to the Instance. Must be unique within scope of the parent resource.
     * @param {string} params.parent - (Required) Required. Parent resource of the Instance, of the form: `projects/*\/locations/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.create = (params) => this._makeRequest('v1/{+parent}/instances', 'POST', params);

    /**
     * Deletes the Registry instance.
     * @param {string} params.name - (Required) Required. The name of the Instance to delete. Format: `projects/*\/locations/*\/instances/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets details of a single Instance.
     * @param {string} params.name - (Required) Required. The name of the Instance to retrieve. Format: `projects/*\/locations/*\/instances/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis = {};

    /**
     * Returns matching APIs.
     * @param {string} params.filter - An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
     * @param {string} params.orderBy - A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
     * @param {integer} params.pageSize - The maximum number of APIs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListApis` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApis` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of APIs. Format: `projects/*\/locations/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.list = (params) => this._makeRequest('v1/{+parent}/apis', 'GET', params);

    /**
     * Returns a specified API.
     * @param {string} params.name - (Required) Required. The name of the API to retrieve. Format: `projects/*\/locations/*\/apis/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a specified API.
     * @param {string} params.apiId - Required. The ID to use for the API, which will become the final component of the API's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of APIs. Format: `projects/*\/locations/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.create = (params) => this._makeRequest('v1/{+parent}/apis', 'POST', params);

    /**
     * Used to modify a specified API.
     * @param {boolean} params.allowMissing - If set to true, and the API is not found, a new API will be created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Resource name.
     * @param {string} params.updateMask - The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If an asterisk "*" is specified, all fields are updated, including fields that are unspecified/default in the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Removes a specified API and all of the resources that it owns.
     * @param {boolean} params.force - If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)
     * @param {string} params.name - (Required) Required. The name of the API to delete. Format: `projects/*\/locations/*\/apis/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis.versions = {};

    /**
     * Returns matching versions.
     * @param {string} params.filter - An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
     * @param {string} params.orderBy - A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
     * @param {integer} params.pageSize - The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListApiVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiVersions` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of versions. Format: `projects/*\/locations/*\/apis/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    /**
     * Returns a specified version.
     * @param {string} params.name - (Required) Required. The name of the version to retrieve. Format: `projects/*\/locations/*\/apis/*\/versions/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a specified version.
     * @param {string} params.apiVersionId - Required. The ID to use for the version, which will become the final component of the version's resource name. This value should be 1-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of versions. Format: `projects/*\/locations/*\/apis/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);

    /**
     * Used to modify a specified version.
     * @param {boolean} params.allowMissing - If set to true, and the version is not found, a new version will be created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Resource name.
     * @param {string} params.updateMask - The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If an asterisk "*" is specified, all fields are updated, including fields that are unspecified/default in the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Removes a specified version and all of the resources that it owns.
     * @param {boolean} params.force - If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)
     * @param {string} params.name - (Required) Required. The name of the version to delete. Format: `projects/*\/locations/*\/apis/*\/versions/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis.versions.specs = {};

    /**
     * Returns matching specs.
     * @param {string} params.filter - An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
     * @param {string} params.orderBy - A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
     * @param {integer} params.pageSize - The maximum number of specs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListApiSpecs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiSpecs` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of specs. Format: `projects/*\/locations/*\/apis/*\/versions/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.list = (params) => this._makeRequest('v1/{+parent}/specs', 'GET', params);

    /**
     * Returns a specified spec.
     * @param {string} params.name - (Required) Required. The name of the spec to retrieve. Format: `projects/*\/locations/*\/apis/*\/versions/*\/specs/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns the contents of a specified spec. If specs are stored with GZip compression, the default behavior is to return the spec uncompressed (the mime_type response field indicates the exact format returned).
     * @param {string} params.name - (Required) Required. The name of the spec whose contents should be retrieved. Format: `projects/*\/locations/*\/apis/*\/versions/*\/specs/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.getContents = (params) => this._makeRequest('v1/{+name}:getContents', 'GET', params);

    /**
     * Creates a specified spec.
     * @param {string} params.apiSpecId - Required. The ID to use for the spec, which will become the final component of the spec's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of specs. Format: `projects/*\/locations/*\/apis/*\/versions/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.create = (params) => this._makeRequest('v1/{+parent}/specs', 'POST', params);

    /**
     * Used to modify a specified spec.
     * @param {boolean} params.allowMissing - If set to true, and the spec is not found, a new spec will be created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Resource name.
     * @param {string} params.updateMask - The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If an asterisk "*" is specified, all fields are updated, including fields that are unspecified/default in the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Removes a specified spec, all revisions, and all child resources (e.g., artifacts).
     * @param {boolean} params.force - If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)
     * @param {string} params.name - (Required) Required. The name of the spec to delete. Format: `projects/*\/locations/*\/apis/*\/versions/*\/specs/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Adds a tag to a specified revision of a spec.
     * @param {string} params.name - (Required) Required. The name of the spec to be tagged, including the revision ID is optional. If a revision is not specified, it will tag the latest revision.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.tagRevision = (params) => this._makeRequest('v1/{+name}:tagRevision', 'POST', params);

    /**
     * Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.
     * @param {string} params.filter - An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
     * @param {string} params.name - (Required) Required. The name of the spec to list revisions for.
     * @param {integer} params.pageSize - The maximum number of revisions to return per page.
     * @param {string} params.pageToken - The page token, received from a previous ListApiSpecRevisions call. Provide this to retrieve the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.listRevisions = (params) => this._makeRequest('v1/{+name}:listRevisions', 'GET', params);

    /**
     * Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
     * @param {string} params.name - (Required) Required. The spec being rolled back.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.rollback = (params) => this._makeRequest('v1/{+name}:rollback', 'POST', params);

    /**
     * Deletes a revision of a spec.
     * @param {string} params.name - (Required) Required. The name of the spec revision to be deleted, with a revision ID explicitly included. Example: `projects/sample/locations/global/apis/petstore/versions/1.0.0/specs/openapi.yaml@c7cfa2a8`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.deleteRevision = (params) => this._makeRequest('v1/{+name}:deleteRevision', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis.versions.specs.artifacts = {};

    /**
     * Returns matching artifacts.
     * @param {string} params.filter - An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
     * @param {string} params.orderBy - A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
     * @param {integer} params.pageSize - The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of artifacts. Format: `{parent}`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.artifacts.list = (params) => this._makeRequest('v1/{+parent}/artifacts', 'GET', params);

    /**
     * Returns a specified artifact.
     * @param {string} params.name - (Required) Required. The name of the artifact to retrieve. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.artifacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
     * @param {string} params.name - (Required) Required. The name of the artifact whose contents should be retrieved. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.artifacts.getContents = (params) => this._makeRequest('v1/{+name}:getContents', 'GET', params);

    /**
     * Creates a specified artifact.
     * @param {string} params.artifactId - Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of artifacts. Format: `{parent}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.artifacts.create = (params) => this._makeRequest('v1/{+parent}/artifacts', 'POST', params);

    /**
     * Used to replace a specified artifact.
     * @param {string} params.name - (Required) Resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.artifacts.replaceArtifact = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Removes a specified artifact.
     * @param {string} params.name - (Required) Required. The name of the artifact to delete. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.artifacts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.artifacts.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.artifacts.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.specs.artifacts.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis.versions.artifacts = {};

    /**
     * Returns matching artifacts.
     * @param {string} params.filter - An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
     * @param {string} params.orderBy - A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
     * @param {integer} params.pageSize - The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of artifacts. Format: `{parent}`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.artifacts.list = (params) => this._makeRequest('v1/{+parent}/artifacts', 'GET', params);

    /**
     * Returns a specified artifact.
     * @param {string} params.name - (Required) Required. The name of the artifact to retrieve. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.artifacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
     * @param {string} params.name - (Required) Required. The name of the artifact whose contents should be retrieved. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.artifacts.getContents = (params) => this._makeRequest('v1/{+name}:getContents', 'GET', params);

    /**
     * Creates a specified artifact.
     * @param {string} params.artifactId - Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of artifacts. Format: `{parent}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.artifacts.create = (params) => this._makeRequest('v1/{+parent}/artifacts', 'POST', params);

    /**
     * Used to replace a specified artifact.
     * @param {string} params.name - (Required) Resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.artifacts.replaceArtifact = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Removes a specified artifact.
     * @param {string} params.name - (Required) Required. The name of the artifact to delete. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.artifacts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.artifacts.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.artifacts.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.versions.artifacts.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis.deployments = {};

    /**
     * Returns matching deployments.
     * @param {string} params.filter - An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
     * @param {string} params.orderBy - A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
     * @param {integer} params.pageSize - The maximum number of deployments to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListApiDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiDeployments` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of deployments. Format: `projects/*\/locations/*\/apis/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    /**
     * Returns a specified deployment.
     * @param {string} params.name - (Required) Required. The name of the deployment to retrieve. Format: `projects/*\/locations/*\/apis/*\/deployments/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a specified deployment.
     * @param {string} params.apiDeploymentId - Required. The ID to use for the deployment, which will become the final component of the deployment's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of deployments. Format: `projects/*\/locations/*\/apis/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.create = (params) => this._makeRequest('v1/{+parent}/deployments', 'POST', params);

    /**
     * Used to modify a specified deployment.
     * @param {boolean} params.allowMissing - If set to true, and the deployment is not found, a new deployment will be created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Resource name.
     * @param {string} params.updateMask - The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If an asterisk "*" is specified, all fields are updated, including fields that are unspecified/default in the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Removes a specified deployment, all revisions, and all child resources (e.g., artifacts).
     * @param {boolean} params.force - If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)
     * @param {string} params.name - (Required) Required. The name of the deployment to delete. Format: `projects/*\/locations/*\/apis/*\/deployments/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Adds a tag to a specified revision of a deployment.
     * @param {string} params.name - (Required) Required. The name of the deployment to be tagged, including the revision ID is optional. If a revision is not specified, it will tag the latest revision.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.tagRevision = (params) => this._makeRequest('v1/{+name}:tagRevision', 'POST', params);

    /**
     * Lists all revisions of a deployment. Revisions are returned in descending order of revision creation time.
     * @param {string} params.filter - An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
     * @param {string} params.name - (Required) Required. The name of the deployment to list revisions for.
     * @param {integer} params.pageSize - The maximum number of revisions to return per page.
     * @param {string} params.pageToken - The page token, received from a previous ListApiDeploymentRevisions call. Provide this to retrieve the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.listRevisions = (params) => this._makeRequest('v1/{+name}:listRevisions', 'GET', params);

    /**
     * Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
     * @param {string} params.name - (Required) Required. The deployment being rolled back.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.rollback = (params) => this._makeRequest('v1/{+name}:rollback', 'POST', params);

    /**
     * Deletes a revision of a deployment.
     * @param {string} params.name - (Required) Required. The name of the deployment revision to be deleted, with a revision ID explicitly included. Example: `projects/sample/locations/global/apis/petstore/deployments/prod@c7cfa2a8`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.deleteRevision = (params) => this._makeRequest('v1/{+name}:deleteRevision', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis.deployments.artifacts = {};

    /**
     * Returns matching artifacts.
     * @param {string} params.filter - An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
     * @param {string} params.orderBy - A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
     * @param {integer} params.pageSize - The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of artifacts. Format: `{parent}`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.artifacts.list = (params) => this._makeRequest('v1/{+parent}/artifacts', 'GET', params);

    /**
     * Returns a specified artifact.
     * @param {string} params.name - (Required) Required. The name of the artifact to retrieve. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.artifacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
     * @param {string} params.name - (Required) Required. The name of the artifact whose contents should be retrieved. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.artifacts.getContents = (params) => this._makeRequest('v1/{+name}:getContents', 'GET', params);

    /**
     * Creates a specified artifact.
     * @param {string} params.artifactId - Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of artifacts. Format: `{parent}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.artifacts.create = (params) => this._makeRequest('v1/{+parent}/artifacts', 'POST', params);

    /**
     * Used to replace a specified artifact.
     * @param {string} params.name - (Required) Resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.artifacts.replaceArtifact = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Removes a specified artifact.
     * @param {string} params.name - (Required) Required. The name of the artifact to delete. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.deployments.artifacts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.apis.artifacts = {};

    /**
     * Returns matching artifacts.
     * @param {string} params.filter - An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
     * @param {string} params.orderBy - A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
     * @param {integer} params.pageSize - The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of artifacts. Format: `{parent}`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.artifacts.list = (params) => this._makeRequest('v1/{+parent}/artifacts', 'GET', params);

    /**
     * Returns a specified artifact.
     * @param {string} params.name - (Required) Required. The name of the artifact to retrieve. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.artifacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
     * @param {string} params.name - (Required) Required. The name of the artifact whose contents should be retrieved. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.artifacts.getContents = (params) => this._makeRequest('v1/{+name}:getContents', 'GET', params);

    /**
     * Creates a specified artifact.
     * @param {string} params.artifactId - Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of artifacts. Format: `{parent}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.artifacts.create = (params) => this._makeRequest('v1/{+parent}/artifacts', 'POST', params);

    /**
     * Used to replace a specified artifact.
     * @param {string} params.name - (Required) Resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.artifacts.replaceArtifact = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Removes a specified artifact.
     * @param {string} params.name - (Required) Required. The name of the artifact to delete. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.artifacts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.artifacts.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.artifacts.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.artifacts.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.artifacts = {};

    /**
     * Returns matching artifacts.
     * @param {string} params.filter - An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
     * @param {string} params.orderBy - A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
     * @param {integer} params.pageSize - The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of artifacts. Format: `{parent}`
     * @return {object} The API response object.
     */
    this.projects.locations.artifacts.list = (params) => this._makeRequest('v1/{+parent}/artifacts', 'GET', params);

    /**
     * Returns a specified artifact.
     * @param {string} params.name - (Required) Required. The name of the artifact to retrieve. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.artifacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
     * @param {string} params.name - (Required) Required. The name of the artifact whose contents should be retrieved. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.artifacts.getContents = (params) => this._makeRequest('v1/{+name}:getContents', 'GET', params);

    /**
     * Creates a specified artifact.
     * @param {string} params.artifactId - Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of artifacts. Format: `{parent}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.artifacts.create = (params) => this._makeRequest('v1/{+parent}/artifacts', 'POST', params);

    /**
     * Used to replace a specified artifact.
     * @param {string} params.name - (Required) Resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.artifacts.replaceArtifact = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Removes a specified artifact.
     * @param {string} params.name - (Required) Required. The name of the artifact to delete. Format: `{parent}/artifacts/*`
     * @return {object} The API response object.
     */
    this.projects.locations.artifacts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.artifacts.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.artifacts.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.artifacts.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.runtime = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtime.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.runtime.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runtime.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.documents = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
