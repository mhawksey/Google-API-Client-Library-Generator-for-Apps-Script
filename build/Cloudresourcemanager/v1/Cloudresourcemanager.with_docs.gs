
/**
 * Google Apps Script client library for the Cloud Resource Manager API
 * Documentation URL: https://cloud.google.com/resource-manager
 * @class
 */
class Cloudresourcemanager {
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
    this._rootUrl = 'https://cloudresourcemanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.liens = {};

    /**
     * List all Liens applied to the `parent` resource. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`.
     * @param {integer} params.pageSize - The maximum number of items to return. This is a suggestion for the server. The server can return fewer liens than requested. If unspecified, server picks an appropriate default.
     * @param {string} params.pageToken - The `next_page_token` value returned from a previous List request, if any.
     * @param {string} params.parent - Required. The name of the resource to list all attached Liens. For example, `projects/1234`. (google.api.field_policy).resource_type annotation is not set since the parent depends on the meta api implementation. This field could be a project or other sub project resources.
     * @return {object} The API response object.
     */
    this.liens.list = (params) => this._makeRequest('v1/liens', 'GET', params);

    /**
     * Retrieve a Lien by `name`. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`
     * @param {string} params.name - (Required) Required. The name/identifier of the Lien.
     * @return {object} The API response object.
     */
    this.liens.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.liens.create = (params) => this._makeRequest('v1/liens', 'POST', params);

    /**
     * Delete a Lien by `name`. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.updateLiens`.
     * @param {string} params.name - (Required) Required. The name/identifier of the Lien to delete.
     * @return {object} The API response object.
     */
    this.liens.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects = {};

    /**
     * Lists `Constraints` that could be applied on the specified resource.
     * @param {string} params.resource - (Required) Name of the resource to list `Constraints` for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.listAvailableOrgPolicyConstraints = (params) => this._makeRequest('v1/{+resource}:listAvailableOrgPolicyConstraints', 'POST', params);

    /**
     * Lists all the `Policies` set for a particular resource.
     * @param {string} params.resource - (Required) Name of the resource to list Policies for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.listOrgPolicies = (params) => this._makeRequest('v1/{+resource}:listOrgPolicies', 'POST', params);

    /**
     * Gets a `Policy` on a resource. If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.
     * @param {string} params.resource - (Required) Name of the resource the `Policy` is set on.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.getOrgPolicy = (params) => this._makeRequest('v1/{+resource}:getOrgPolicy', 'POST', params);

    /**
     * Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
     * @param {string} params.resource - (Required) The name of the resource to start computing the effective `Policy`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.getEffectiveOrgPolicy = (params) => this._makeRequest('v1/{+resource}:getEffectiveOrgPolicy', 'POST', params);

    /**
     * Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist. Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.
     * @param {string} params.resource - (Required) Resource name of the resource to attach the `Policy`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.setOrgPolicy = (params) => this._makeRequest('v1/{+resource}:setOrgPolicy', 'POST', params);

    /**
     * Clears a `Policy` from a resource.
     * @param {string} params.resource - (Required) Name of the resource for the `Policy` to clear.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.clearOrgPolicy = (params) => this._makeRequest('v1/{+resource}:clearOrgPolicy', 'POST', params);

    /**
     * Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
     * @param {string} params.projectId - (Required) Required. The Project ID (for example, `my-project-123`).
     * @return {object} The API response object.
     */
    this.projects.get = (params) => this._makeRequest('v1/projects/{projectId}', 'GET', params);

    /**
     * Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter. This method returns Projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method. NOTE: If the request filter contains a `parent.type` and `parent.id` and the caller has the `resourcemanager.projects.list` permission on the parent, the results will be drawn from an alternate index which provides more consistent results. In future versions of this API, this List method will be split into List and Search to properly capture the behavioral difference.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request. Filter rules are case insensitive. If multiple fields are included in a filter query, the query will return results that match any of the fields. Some eligible fields for filtering are: + `name` + `id` + `labels.` (where *key* is the name of a label) + `parent.type` + `parent.id` + `lifecycleState` Some examples of filter queries: | Query | Description | |------------------|-----------------------------------------------------| | name:how* | The project's name starts with "how". | | name:Howl | The project's name is `Howl` or `howl`. | | name:HOWL | Equivalent to above. | | NAME:howl | Equivalent to above. | | labels.color:* | The project has the label `color`. | | labels.color:red | The project's label `color` has the value `red`. | | labels.color:red labels.size:big | The project's label `color` has the value `red` or its label `size` has the value `big`. | | lifecycleState:DELETE_REQUESTED | Only show projects that are pending deletion.| If no filter is specified, the call will return projects for which the user has the `resourcemanager.projects.get` permission. NOTE: To perform a by-parent query (eg., what projects are directly in a Folder), the caller must have the `resourcemanager.projects.list` permission on the parent and the filter must contain both a `parent.type` and a `parent.id` restriction (example: "parent.type:folder parent.id:123"). In this case an alternate search index is used which provides more consistent results.
     * @param {integer} params.pageSize - Optional. The maximum number of Projects to return in the response. The server can return fewer Projects than requested. If unspecified, server picks an appropriate default.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous call to ListProjects that indicates from where listing should continue.
     * @return {object} The API response object.
     */
    this.projects.list = (params) => this._makeRequest('v1/projects', 'GET', params);

    /**
     * Request that a new Project be created. The result is an Operation which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking Operation is automatically deleted after a few hours, so there is no need to call DeleteOperation. Authorization requires the Google IAM permission `resourcemanager.projects.create` on the specified parent for the new project. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.create = (params) => this._makeRequest('v1/projects', 'POST', params);

    /**
     * Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.
     * @param {string} params.projectId - (Required) The project ID (for example, `my-project-123`). Required.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.update = (params) => this._makeRequest('v1/projects/{projectId}', 'PUT', params);

    /**
     * Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the Project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.
     * @param {string} params.projectId - (Required) The Project ID (for example, `foo-bar-123`). Required.
     * @return {object} The API response object.
     */
    this.projects.delete = (params) => this._makeRequest('v1/projects/{projectId}', 'DELETE', params);

    /**
     * Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored. The caller must have undelete permissions for this Project.
     * @param {string} params.projectId - (Required) Required. The project ID (for example, `foo-bar-123`).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.undelete = (params) => this._makeRequest('v1/projects/{projectId}:undelete', 'POST', params);

    /**
     * Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
     * @param {string} params.projectId - (Required) Required. The Project ID (for example, `my-project-123`).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.getAncestry = (params) => this._makeRequest('v1/projects/{projectId}:getAncestry', 'POST', params);

    /**
     * Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. Authorization requires the Google IAM permission `resourcemanager.projects.getIamPolicy` on the project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.getIamPolicy = (params) => this._makeRequest('v1/projects/{resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + You can only grant ownership of a project to a member by using the Google Cloud console. Inviting a member will deliver an invitation email that they must accept. An invitation email is not generated if you are granting a role other than owner, or if both the member you are inviting and the project are part of your organization. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. If the project is part of an organization, you can remove all owners, potentially making the organization inaccessible. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.setIamPolicy = (params) => this._makeRequest('v1/projects/{resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified Project. For additional information about `resource` (e.g. my-project-id) structure and identification, see [Resource Names](https://cloud.google.com/apis/design/resource_names). There are no permissions required for making this API call.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.testIamPermissions = (params) => this._makeRequest('v1/projects/{resource}:testIamPermissions', 'POST', params);

    this.folders = {};

    /**
     * Lists `Constraints` that could be applied on the specified resource.
     * @param {string} params.resource - (Required) Name of the resource to list `Constraints` for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.listAvailableOrgPolicyConstraints = (params) => this._makeRequest('v1/{+resource}:listAvailableOrgPolicyConstraints', 'POST', params);

    /**
     * Lists all the `Policies` set for a particular resource.
     * @param {string} params.resource - (Required) Name of the resource to list Policies for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.listOrgPolicies = (params) => this._makeRequest('v1/{+resource}:listOrgPolicies', 'POST', params);

    /**
     * Gets a `Policy` on a resource. If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.
     * @param {string} params.resource - (Required) Name of the resource the `Policy` is set on.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.getOrgPolicy = (params) => this._makeRequest('v1/{+resource}:getOrgPolicy', 'POST', params);

    /**
     * Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
     * @param {string} params.resource - (Required) The name of the resource to start computing the effective `Policy`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.getEffectiveOrgPolicy = (params) => this._makeRequest('v1/{+resource}:getEffectiveOrgPolicy', 'POST', params);

    /**
     * Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist. Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.
     * @param {string} params.resource - (Required) Resource name of the resource to attach the `Policy`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.setOrgPolicy = (params) => this._makeRequest('v1/{+resource}:setOrgPolicy', 'POST', params);

    /**
     * Clears a `Policy` from a resource.
     * @param {string} params.resource - (Required) Name of the resource for the `Policy` to clear.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.clearOrgPolicy = (params) => this._makeRequest('v1/{+resource}:clearOrgPolicy', 'POST', params);

    this.organizations = {};

    /**
     * Lists `Constraints` that could be applied on the specified resource.
     * @param {string} params.resource - (Required) Name of the resource to list `Constraints` for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.listAvailableOrgPolicyConstraints = (params) => this._makeRequest('v1/{+resource}:listAvailableOrgPolicyConstraints', 'POST', params);

    /**
     * Lists all the `Policies` set for a particular resource.
     * @param {string} params.resource - (Required) Name of the resource to list Policies for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.listOrgPolicies = (params) => this._makeRequest('v1/{+resource}:listOrgPolicies', 'POST', params);

    /**
     * Gets a `Policy` on a resource. If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.
     * @param {string} params.resource - (Required) Name of the resource the `Policy` is set on.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.getOrgPolicy = (params) => this._makeRequest('v1/{+resource}:getOrgPolicy', 'POST', params);

    /**
     * Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
     * @param {string} params.resource - (Required) The name of the resource to start computing the effective `Policy`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.getEffectiveOrgPolicy = (params) => this._makeRequest('v1/{+resource}:getEffectiveOrgPolicy', 'POST', params);

    /**
     * Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist. Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.
     * @param {string} params.resource - (Required) Resource name of the resource to attach the `Policy`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.setOrgPolicy = (params) => this._makeRequest('v1/{+resource}:setOrgPolicy', 'POST', params);

    /**
     * Clears a `Policy` from a resource.
     * @param {string} params.resource - (Required) Name of the resource for the `Policy` to clear.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.clearOrgPolicy = (params) => this._makeRequest('v1/{+resource}:clearOrgPolicy', 'POST', params);

    /**
     * Searches Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the results. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get` or has super admin privileges.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.search = (params) => this._makeRequest('v1/organizations:search', 'POST', params);

    /**
     * Fetches an Organization resource identified by the specified resource name.
     * @param {string} params.name - (Required) The resource name of the Organization to fetch. This is the organization's relative path in the API, formatted as "organizations/[organizationId]". For example, "organizations/1234".
     * @return {object} The API response object.
     */
    this.organizations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.setIamPolicy` on the specified organization
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.getIamPolicy` on the specified organization
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123". There are no permissions required for making this API call.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
