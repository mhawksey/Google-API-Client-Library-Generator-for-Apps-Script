
/**
 * Google Apps Script client library for the Access Context Manager API
 * Documentation URL: https://cloud.google.com/access-context-manager/docs/reference/rest/
 * @class
 */
class Accesscontextmanager {
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
    this._rootUrl = 'https://accesscontextmanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.accessPolicies = {};

    /**
     * Lists all access policies in an organization.
     * @param {integer} params.pageSize - Number of AccessPolicy instances to include in the list. Default 100.
     * @param {string} params.pageToken - Next page token for the next batch of AccessPolicy instances. Defaults to the first page of results.
     * @param {string} params.parent - Required. Resource name for the container to list AccessPolicy instances from. Format: `organizations/{org_id}`
     * @return {object} The API response object.
     */
    this.accessPolicies.list = (params) => this._makeRequest('v1/accessPolicies', 'GET', params);

    /**
     * Returns an access policy based on the name.
     * @param {string} params.name - (Required) Required. Resource name for the access policy to get. Format `accessPolicies/{policy_id}`
     * @return {object} The API response object.
     */
    this.accessPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates an access policy. This method fails if the organization already has an access policy. The long-running operation has a successful status after the access policy propagates to long-lasting storage. Syntactic and basic semantic errors are returned in `metadata` as a BadRequest proto.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.create = (params) => this._makeRequest('v1/accessPolicies', 'POST', params);

    /**
     * Updates an access policy. The long-running operation from this RPC has a successful status after the changes to the access policy propagate to long-lasting storage.
     * @param {string} params.name - (Required) Output only. Identifier. Resource name of the `AccessPolicy`. Format: `accessPolicies/{access_policy}`
     * @param {string} params.updateMask - Required. Mask to control which fields get updated. Must be non-empty.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an access policy based on the resource name. The long-running operation has a successful status after the access policy is removed from long-lasting storage.
     * @param {string} params.name - (Required) Required. Resource name for the access policy to delete. Format `accessPolicies/{policy_id}`
     * @return {object} The API response object.
     */
    this.accessPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the IAM policy for the specified Access Context Manager access policy. This method replaces the existing IAM policy on the access policy. The IAM policy controls the set of users who can perform specific operations on the Access Context Manager access policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the IAM policy for the specified Access Context Manager access policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.accessPolicies.accessLevels = {};

    /**
     * Lists all access levels for an access policy.
     * @param {string} params.accessLevelFormat - Whether to return `BasicLevels` in the Cloud Common Expression language, as `CustomLevels`, rather than as `BasicLevels`. Defaults to returning `AccessLevels` in the format they were defined.
     * @param {integer} params.pageSize - Number of Access Levels to include in the list. Default 100.
     * @param {string} params.pageToken - Next page token for the next batch of Access Level instances. Defaults to the first page of results.
     * @param {string} params.parent - (Required) Required. Resource name for the access policy to list Access Levels from. Format: `accessPolicies/{policy_id}`
     * @return {object} The API response object.
     */
    this.accessPolicies.accessLevels.list = (params) => this._makeRequest('v1/{+parent}/accessLevels', 'GET', params);

    /**
     * Gets an access level based on the resource name.
     * @param {string} params.accessLevelFormat - Whether to return `BasicLevels` in the Cloud Common Expression Language rather than as `BasicLevels`. Defaults to AS_DEFINED, where Access Levels are returned as `BasicLevels` or `CustomLevels` based on how they were created. If set to CEL, all Access Levels are returned as `CustomLevels`. In the CEL case, `BasicLevels` are translated to equivalent `CustomLevels`.
     * @param {string} params.name - (Required) Required. Resource name for the Access Level. Format: `accessPolicies/{policy_id}/accessLevels/{access_level_id}`
     * @return {object} The API response object.
     */
    this.accessPolicies.accessLevels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates an access level. The long-running operation from this RPC has a successful status after the access level propagates to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
     * @param {string} params.parent - (Required) Required. Resource name for the access policy which owns this Access Level. Format: `accessPolicies/{policy_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.accessLevels.create = (params) => this._makeRequest('v1/{+parent}/accessLevels', 'POST', params);

    /**
     * Updates an access level. The long-running operation from this RPC has a successful status after the changes to the access level propagate to long-lasting storage. If access levels contain errors, an error response is returned for the first error encountered.
     * @param {string} params.name - (Required) Identifier. Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`.
     * @param {string} params.updateMask - Required. Mask to control which fields get updated. Must be non-empty.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.accessLevels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an access level based on the resource name. The long-running operation from this RPC has a successful status after the access level has been removed from long-lasting storage.
     * @param {string} params.name - (Required) Required. Resource name for the Access Level. Format: `accessPolicies/{policy_id}/accessLevels/{access_level_id}`
     * @return {object} The API response object.
     */
    this.accessPolicies.accessLevels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Replaces all existing access levels in an access policy with the access levels provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. If the replacement contains errors, an error response is returned for the first error encountered. Upon error, the replacement is cancelled, and existing access levels are not affected. The Operation.response field contains ReplaceAccessLevelsResponse. Removing access levels contained in existing service perimeters result in an error.
     * @param {string} params.parent - (Required) Required. Resource name for the access policy which owns these Access Levels. Format: `accessPolicies/{policy_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.accessLevels.replaceAll = (params) => this._makeRequest('v1/{+parent}/accessLevels:replaceAll', 'POST', params);

    /**
     * Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.accessLevels.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.accessPolicies.servicePerimeters = {};

    /**
     * Lists all service perimeters for an access policy.
     * @param {integer} params.pageSize - Number of Service Perimeters to include in the list. Default 100.
     * @param {string} params.pageToken - Next page token for the next batch of Service Perimeter instances. Defaults to the first page of results.
     * @param {string} params.parent - (Required) Required. Resource name for the access policy to list Service Perimeters from. Format: `accessPolicies/{policy_id}`
     * @return {object} The API response object.
     */
    this.accessPolicies.servicePerimeters.list = (params) => this._makeRequest('v1/{+parent}/servicePerimeters', 'GET', params);

    /**
     * Gets a service perimeter based on the resource name.
     * @param {string} params.name - (Required) Required. Resource name for the Service Perimeter. Format: `accessPolicies/{policy_id}/servicePerimeters/{service_perimeters_id}`
     * @return {object} The API response object.
     */
    this.accessPolicies.servicePerimeters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
     * @param {string} params.parent - (Required) Required. Resource name for the access policy which owns this Service Perimeter. Format: `accessPolicies/{policy_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.servicePerimeters.create = (params) => this._makeRequest('v1/{+parent}/servicePerimeters', 'POST', params);

    /**
     * Updates a service perimeter. The long-running operation from this RPC has a successful status after the service perimeter propagates to long-lasting storage. If a service perimeter contains errors, an error response is returned for the first error encountered.
     * @param {string} params.name - (Required) Identifier. Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`.
     * @param {string} params.updateMask - Required. Mask to control which fields get updated. Must be non-empty.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.servicePerimeters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a service perimeter based on the resource name. The long-running operation from this RPC has a successful status after the service perimeter is removed from long-lasting storage.
     * @param {string} params.name - (Required) Required. Resource name for the Service Perimeter. Format: `accessPolicies/{policy_id}/servicePerimeters/{service_perimeter_id}`
     * @return {object} The API response object.
     */
    this.accessPolicies.servicePerimeters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Replace all existing service perimeters in an access policy with the service perimeters provided. This is done atomically. The long-running operation from this RPC has a successful status after all replacements propagate to long-lasting storage. Replacements containing errors result in an error response for the first error encountered. Upon an error, replacement are cancelled and existing service perimeters are not affected. The Operation.response field contains ReplaceServicePerimetersResponse.
     * @param {string} params.parent - (Required) Required. Resource name for the access policy which owns these Service Perimeters. Format: `accessPolicies/{policy_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.servicePerimeters.replaceAll = (params) => this._makeRequest('v1/{+parent}/servicePerimeters:replaceAll', 'POST', params);

    /**
     * Commits the dry-run specification for all the service perimeters in an access policy. A commit operation on a service perimeter involves copying its `spec` field to the `status` field of the service perimeter. Only service perimeters with `use_explicit_dry_run_spec` field set to true are affected by a commit operation. The long-running operation from this RPC has a successful status after the dry-run specifications for all the service perimeters have been committed. If a commit fails, it causes the long-running operation to return an error response and the entire commit operation is cancelled. When successful, the Operation.response field contains CommitServicePerimetersResponse. The `dry_run` and the `spec` fields are cleared after a successful commit operation.
     * @param {string} params.parent - (Required) Required. Resource name for the parent Access Policy which owns all Service Perimeters in scope for the commit operation. Format: `accessPolicies/{policy_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.servicePerimeters.commit = (params) => this._makeRequest('v1/{+parent}/servicePerimeters:commit', 'POST', params);

    /**
     * Returns the IAM permissions that the caller has on the specified Access Context Manager resource. The resource can be an AccessPolicy, AccessLevel, or ServicePerimeter. This method does not support other resources.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.servicePerimeters.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.accessPolicies.authorizedOrgsDescs = {};

    /**
     * Lists all authorized orgs descs for an access policy.
     * @param {integer} params.pageSize - Number of Authorized Orgs Descs to include in the list. Default 100.
     * @param {string} params.pageToken - Next page token for the next batch of Authorized Orgs Desc instances. Defaults to the first page of results.
     * @param {string} params.parent - (Required) Required. Resource name for the access policy to list Authorized Orgs Desc from. Format: `accessPolicies/{policy_id}`
     * @return {object} The API response object.
     */
    this.accessPolicies.authorizedOrgsDescs.list = (params) => this._makeRequest('v1/{+parent}/authorizedOrgsDescs', 'GET', params);

    /**
     * Gets an authorized orgs desc based on the resource name.
     * @param {string} params.name - (Required) Required. Resource name for the Authorized Orgs Desc. Format: `accessPolicies/{policy_id}/authorizedOrgsDescs/{authorized_orgs_descs_id}`
     * @return {object} The API response object.
     */
    this.accessPolicies.authorizedOrgsDescs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. The name of this `AuthorizedOrgsDesc` will be assigned during creation.
     * @param {string} params.parent - (Required) Required. Resource name for the access policy which owns this Authorized Orgs Desc. Format: `accessPolicies/{policy_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.authorizedOrgsDescs.create = (params) => this._makeRequest('v1/{+parent}/authorizedOrgsDescs', 'POST', params);

    /**
     * Updates an authorized orgs desc. The long-running operation from this RPC has a successful status after the authorized orgs desc propagates to long-lasting storage. If a authorized orgs desc contains errors, an error response is returned for the first error encountered. Only the organization list in `AuthorizedOrgsDesc` can be updated. The name, authorization_type, asset_type and authorization_direction cannot be updated.
     * @param {string} params.name - (Required) Identifier. Resource name for the `AuthorizedOrgsDesc`. Format: `accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}`. The `authorized_orgs_desc` component must begin with a letter, followed by alphanumeric characters or `_`. After you create an `AuthorizedOrgsDesc`, you cannot change its `name`.
     * @param {string} params.updateMask - Required. Mask to control which fields get updated. Must be non-empty.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessPolicies.authorizedOrgsDescs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an authorized orgs desc based on the resource name. The long-running operation from this RPC has a successful status after the authorized orgs desc is removed from long-lasting storage.
     * @param {string} params.name - (Required) Required. Resource name for the Authorized Orgs Desc. Format: `accessPolicies/{policy_id}/authorizedOrgsDesc/{authorized_orgs_desc_id}`
     * @return {object} The API response object.
     */
    this.accessPolicies.authorizedOrgsDescs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.services = {};

    /**
     * Lists all VPC-SC supported services.
     * @param {integer} params.pageSize - This flag specifies the maximum number of services to return per page. Default is 100.
     * @param {string} params.pageToken - Token to start on a later page. Default is the first page.
     * @return {object} The API response object.
     */
    this.services.list = (params) => this._makeRequest('v1/services', 'GET', params);

    /**
     * Returns a VPC-SC supported service based on the service name.
     * @param {string} params.name - (Required) The name of the service to get information about. The names must be in the same format as used in defining a service perimeter, for example, `storage.googleapis.com`.
     * @return {object} The API response object.
     */
    this.services.get = (params) => this._makeRequest('v1/services/{name}', 'GET', params);

    this.organizations = {};

    this.organizations.gcpUserAccessBindings = {};

    /**
     * Lists all GcpUserAccessBindings for a Google Cloud organization.
     * @param {integer} params.pageSize - Optional. Maximum number of items to return. The server may return fewer items. If left blank, the server may return any number of items.
     * @param {string} params.pageToken - Optional. If left blank, returns the first page. To enumerate all items, use the next_page_token from your previous list operation.
     * @param {string} params.parent - (Required) Required. Example: "organizations/256"
     * @return {object} The API response object.
     */
    this.organizations.gcpUserAccessBindings.list = (params) => this._makeRequest('v1/{+parent}/gcpUserAccessBindings', 'GET', params);

    /**
     * Gets the GcpUserAccessBinding with the given name.
     * @param {string} params.name - (Required) Required. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N"
     * @return {object} The API response object.
     */
    this.organizations.gcpUserAccessBindings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.
     * @param {string} params.parent - (Required) Required. Example: "organizations/256"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.gcpUserAccessBindings.create = (params) => this._makeRequest('v1/{+parent}/gcpUserAccessBindings', 'POST', params);

    /**
     * Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.
     * @param {boolean} params.append - Optional. This field controls whether or not certain repeated settings in the update request overwrite or append to existing settings on the binding. If true, then append. Otherwise overwrite. So far, only scoped_access_settings with session_settings supports appending. Global access_levels, access_levels in scoped_access_settings, dry_run_access_levels, and session_settings are not compatible with append functionality, and the request will return an error if append=true when these settings are in the update_mask. The request will also return an error if append=true when "scoped_access_settings" is not set in the update_mask.
     * @param {string} params.name - (Required) Immutable. Assigned by the server during creation. The last segment has an arbitrary length and has only URI unreserved characters (as defined by [RFC 3986 Section 2.3](https://tools.ietf.org/html/rfc3986#section-2.3)). Should not be specified by the client during creation. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N"
     * @param {string} params.updateMask - Required. Only the fields specified in this mask are updated. Because name and group_key cannot be changed, update_mask is required and may only contain the following fields: `access_levels`, `dry_run_access_levels`, `session_settings`, `scoped_access_settings`. update_mask { paths: "access_levels" }
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.gcpUserAccessBindings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.
     * @param {string} params.name - (Required) Required. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N"
     * @return {object} The API response object.
     */
    this.organizations.gcpUserAccessBindings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
