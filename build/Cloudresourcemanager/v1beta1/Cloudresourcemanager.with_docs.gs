
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

    this.projects = {};

    /**
     * Creates a Project resource. Initially, the Project resource is owned by its creator exclusively. The creator can later grant permission to others to read or update the Project. Several APIs are activated automatically for the Project, including Google Cloud Storage. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as project, folder, or organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.
     * @param {boolean} params.useLegacyStack - A now unused experiment opt-out option.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.create = (params) => this._makeRequest('v1beta1/projects', 'POST', params);

    /**
     * Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter. This method returns Projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method. NOTE: If the request filter contains a `parent.type` and `parent.id` and the caller has the `resourcemanager.projects.list` permission on the parent, the results will be drawn from an alternate index which provides more consistent results. In future versions of this API, this List method will be split into List and Search to properly capture the behavioral difference.
     * @param {string} params.filter - An expression for filtering the results of the request. Filter rules are case insensitive. If multiple fields are included in a filter query, the query will return results that match any of the fields. Some eligible fields for filtering are: + `name` + `id` + `labels.` (where *key* is the name of a label) + `parent.type` + `parent.id` Some examples of using labels as filters: | Filter | Description | |------------------|-----------------------------------------------------| | name:how* | The project's name starts with "how". | | name:Howl | The project's name is `Howl` or `howl`. | | name:HOWL | Equivalent to above. | | NAME:howl | Equivalent to above. | | labels.color:* | The project has the label `color`. | | labels.color:red | The project's label `color` has the value `red`. | | labels.color:red labels.size:big | The project's label `color` has the value `red` or its label `size` has the value `big`. | If no filter is specified, the call will return projects for which the user has the `resourcemanager.projects.get` permission. NOTE: To perform a by-parent query (eg., what projects are directly in a Folder), the caller must have the `resourcemanager.projects.list` permission on the parent and the filter must contain both a `parent.type` and a `parent.id` restriction (example: "parent.type:folder parent.id:123"). In this case an alternate search index is used which provides more consistent results. Optional.
     * @param {integer} params.pageSize - The maximum number of Projects to return in the response. The server can return fewer Projects than requested. If unspecified, server picks an appropriate default. Optional.
     * @param {string} params.pageToken - A pagination token returned from a previous call to ListProjects that indicates from where listing should continue. Optional.
     * @return {object} The API response object.
     */
    this.projects.list = (params) => this._makeRequest('v1beta1/projects', 'GET', params);

    /**
     * Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
     * @param {string} params.projectId - (Required) Required. The Project ID (for example, `my-project-123`).
     * @return {object} The API response object.
     */
    this.projects.get = (params) => this._makeRequest('v1beta1/projects/{projectId}', 'GET', params);

    /**
     * Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.
     * @param {string} params.projectId - (Required) The project ID (for example, `my-project-123`).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.update = (params) => this._makeRequest('v1beta1/projects/{projectId}', 'PUT', params);

    /**
     * Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.
     * @param {string} params.projectId - (Required) The Project ID (for example, `foo-bar-123`).
     * @return {object} The API response object.
     */
    this.projects.delete = (params) => this._makeRequest('v1beta1/projects/{projectId}', 'DELETE', params);

    /**
     * Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored. The caller must have undelete permissions for this Project.
     * @param {string} params.projectId - (Required) Required. The project ID (for example, `foo-bar-123`).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.undelete = (params) => this._makeRequest('v1beta1/projects/{projectId}:undelete', 'POST', params);

    /**
     * Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
     * @param {string} params.projectId - (Required) Required. The Project ID (for example, `my-project-123`).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.getAncestry = (params) => this._makeRequest('v1beta1/projects/{projectId}:getAncestry', 'POST', params);

    /**
     * Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. For additional information about resource structure and identification, see [Resource Names](/apis/design/resource_names).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.getIamPolicy = (params) => this._makeRequest('v1beta1/projects/{resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + Invitations to grant the owner role cannot be sent using `setIamPolicy()`; they must be sent only using the Cloud Platform Console. + Membership changes that leave the project without any owners that have accepted the Terms of Service (ToS) will be rejected. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.setIamPolicy = (params) => this._makeRequest('v1beta1/projects/{resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified Project.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.testIamPermissions = (params) => this._makeRequest('v1beta1/projects/{resource}:testIamPermissions', 'POST', params);

    this.organizations = {};

    /**
     * Lists Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the list.
     * @param {string} params.filter - An optional query string used to filter the Organizations to return in the response. Filter rules are case-insensitive. Organizations may be filtered by `owner.directoryCustomerId` or by `domain`, where the domain is a verified G Suite domain, for example: * Filter `owner.directorycustomerid:123456789` returns Organization resources with `owner.directory_customer_id` equal to `123456789`. * Filter `domain:google.com` returns Organization resources corresponding to the domain `google.com`. This field is optional.
     * @param {integer} params.pageSize - The maximum number of Organizations to return in the response. This field is optional.
     * @param {string} params.pageToken - A pagination token returned from a previous call to `ListOrganizations` that indicates from where listing should continue. This field is optional.
     * @return {object} The API response object.
     */
    this.organizations.list = (params) => this._makeRequest('v1beta1/organizations', 'GET', params);

    /**
     * Fetches an Organization resource identified by the specified resource name.
     * @param {string} params.name - (Required) The resource name of the Organization to fetch. This is the organization's relative path in the API, formatted as "organizations/[organizationId]". For example, "organizations/1234".
     * @param {string} params.organizationId - The id of the Organization resource to fetch. This field is deprecated and will be removed in v1. Use name instead.
     * @return {object} The API response object.
     */
    this.organizations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates an Organization resource identified by the specified resource name.
     * @param {string} params.name - (Required) Output only. The resource name of the organization. This is the organization's relative path in the API. Its format is "organizations/[organization_id]". For example, "organizations/1234".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);

    /**
     * Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123".
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123".
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123".
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
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
