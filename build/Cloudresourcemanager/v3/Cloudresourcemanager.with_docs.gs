
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
    this.liens.list = (params) => this._makeRequest('v3/liens', 'GET', params);

    /**
     * Retrieve a Lien by `name`. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`
     * @param {string} params.name - (Required) Required. The name/identifier of the Lien.
     * @return {object} The API response object.
     */
    this.liens.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.liens.create = (params) => this._makeRequest('v3/liens', 'POST', params);

    /**
     * Delete a Lien by `name`. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.updateLiens`.
     * @param {string} params.name - (Required) Required. The name/identifier of the Lien to delete.
     * @return {object} The API response object.
     */
    this.liens.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.folders = {};

    /**
     * Retrieves a folder identified by the supplied resource name. Valid folder resource names have the format `folders/{folder_id}` (for example, `folders/1234`). The caller must have `resourcemanager.folders.get` permission on the identified folder.
     * @param {string} params.name - (Required) Required. The resource name of the folder to retrieve. Must be of the form `folders/{folder_id}`.
     * @return {object} The API response object.
     */
    this.folders.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Lists the folders that are direct descendants of supplied parent resource. `list()` provides a strongly consistent view of the folders underneath the specified parent resource. `list()` returns folders sorted based upon the (ascending) lexical ordering of their display_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.
     * @param {integer} params.pageSize - Optional. The maximum number of folders to return in the response. The server can return fewer folders than requested. If unspecified, server picks an appropriate default.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous call to `ListFolders` that indicates where this listing should continue from.
     * @param {string} params.parent - Required. The name of the parent resource whose folders are being listed. Only children of this parent resource are listed; descendants are not listed. If the parent is a folder, use the value `folders/{folder_id}`. If the parent is an organization, use the value `organizations/{org_id}`. Access to this method is controlled by checking the `resourcemanager.folders.list` permission on the `parent`.
     * @param {boolean} params.showDeleted - Optional. Controls whether folders in the DELETE_REQUESTED state should be returned. Defaults to false.
     * @return {object} The API response object.
     */
    this.folders.list = (params) => this._makeRequest('v3/folders', 'GET', params);

    /**
     * Search for folders that match specific filter criteria. `search()` provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria. This will only return folders on which the caller has the permission `resourcemanager.folders.get`.
     * @param {integer} params.pageSize - Optional. The maximum number of folders to return in the response. The server can return fewer folders than requested. If unspecified, server picks an appropriate default.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous call to `SearchFolders` that indicates from where search should continue.
     * @param {string} params.query - Optional. Search criteria used to select the folders to return. If no search criteria is specified then all accessible folders will be returned. Query expressions can be used to restrict results based upon displayName, state and parent, where the operators `=` (`:`) `NOT`, `AND` and `OR` can be used along with the suffix wildcard symbol `*`. The `displayName` field in a query expression should use escaped quotes for values that include whitespace to prevent unexpected behavior. ``` | Field | Description | |-------------------------|----------------------------------------| | displayName | Filters by displayName. | | parent | Filters by parent (for example: folders/123). | | state, lifecycleState | Filters by state. | ``` Some example queries are: * Query `displayName=Test*` returns Folder resources whose display name starts with "Test". * Query `state=ACTIVE` returns Folder resources with `state` set to `ACTIVE`. * Query `parent=folders/123` returns Folder resources that have `folders/123` as a parent resource. * Query `parent=folders/123 AND state=ACTIVE` returns active Folder resources that have `folders/123` as a parent resource. * Query `displayName=\\"Test String\\"` returns Folder resources with display names that include both "Test" and "String".
     * @return {object} The API response object.
     */
    this.folders.search = (params) => this._makeRequest('v3/folders:search', 'GET', params);

    /**
     * Creates a folder in the resource hierarchy. Returns an `Operation` which can be used to track the progress of the folder creation workflow. Upon success, the `Operation.response` field will be populated with the created Folder. In order to succeed, the addition of this new folder must not violate the folder naming, height, or fanout constraints. + The folder's `display_name` must be distinct from all other folders that share its parent. + The addition of the folder must not cause the active folder hierarchy to exceed a height of 10. Note, the full active + deleted folder hierarchy is allowed to reach a height of 20; this provides additional headroom when moving folders that contain deleted folders. + The addition of the folder must not cause the total number of folders under its parent to exceed 300. If the operation fails due to a folder constraint violation, some errors may be returned by the `CreateFolder` request, with status code `FAILED_PRECONDITION` and an error description. Other folder constraint violations will be communicated in the `Operation`, with the specific `PreconditionFailure` returned in the details list in the `Operation.error` field. The caller must have `resourcemanager.folders.create` permission on the identified parent.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.create = (params) => this._makeRequest('v3/folders', 'POST', params);

    /**
     * Updates a folder, changing its `display_name`. Changes to the folder `display_name` will be rejected if they violate either the `display_name` formatting rules or the naming constraints described in the CreateFolder documentation. The folder's `display_name` must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be between 3 and 30 characters. This is captured by the regular expression: `\p{L}\p{N}{1,28}[\p{L}\p{N}]`. The caller must have `resourcemanager.folders.update` permission on the identified folder. If the update fails due to the unique name constraint then a `PreconditionFailure` explaining this violation will be returned in the Status.details field.
     * @param {string} params.name - (Required) Identifier. The resource name of the folder. Its format is `folders/{folder_id}`, for example: "folders/1234".
     * @param {string} params.updateMask - Required. Fields to be updated. Only the `display_name` can be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Moves a folder under a new resource parent. Returns an `Operation` which can be used to track the progress of the folder move workflow. Upon success, the `Operation.response` field will be populated with the moved folder. Upon failure, a `FolderOperationError` categorizing the failure cause will be returned - if the failure occurs synchronously then the `FolderOperationError` will be returned in the `Status.details` field. If it occurs asynchronously, then the FolderOperation will be returned in the `Operation.error` field. In addition, the `Operation.metadata` field will be populated with a `FolderOperation` message as an aid to stateless clients. Folder moves will be rejected if they violate either the naming, height, or fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.move` permission on the folder's current and proposed new parent.
     * @param {string} params.name - (Required) Required. The resource name of the Folder to move. Must be of the form folders/{folder_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.move = (params) => this._makeRequest('v3/{+name}:move', 'POST', params);

    /**
     * Requests deletion of a folder. The folder is moved into the DELETE_REQUESTED state immediately, and is deleted approximately 30 days later. This method may only be called on an empty folder, where a folder is empty if it doesn't contain any folders or projects in the ACTIVE state. If called on a folder in DELETE_REQUESTED state the operation will result in a no-op success. The caller must have `resourcemanager.folders.delete` permission on the identified folder.
     * @param {string} params.name - (Required) Required. The resource name of the folder to be deleted. Must be of the form `folders/{folder_id}`.
     * @return {object} The API response object.
     */
    this.folders.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Cancels the deletion request for a folder. This method may be called on a folder in any state. If the folder is in the ACTIVE state the result will be a no-op success. In order to succeed, the folder's parent must be in the ACTIVE state. In addition, reintroducing the folder into the tree must not violate folder naming, height, and fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.undelete` permission on the identified folder.
     * @param {string} params.name - (Required) Required. The resource name of the folder to undelete. Must be of the form `folders/{folder_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.undelete = (params) => this._makeRequest('v3/{+name}:undelete', 'POST', params);

    /**
     * Gets the access control policy for a folder. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the folder's resource name, for example: "folders/1234". The caller must have `resourcemanager.folders.getIamPolicy` permission on the identified folder.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.getIamPolicy = (params) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the access control policy on a folder, replacing any existing policy. The `resource` field should be the folder's resource name, for example: "folders/1234". The caller must have `resourcemanager.folders.setIamPolicy` permission on the identified folder.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.setIamPolicy = (params) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified folder. The `resource` field should be the folder's resource name, for example: "folders/1234". There are no permissions required for making this API call.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.testIamPermissions = (params) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', params);

    this.folders.capabilities = {};

    /**
     * Retrieves the Capability identified by the supplied resource name.
     * @param {string} params.name - (Required) Required. The name of the capability to get. For example, `folders/123/capabilities/app-management`
     * @return {object} The API response object.
     */
    this.folders.capabilities.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Updates the Capability.
     * @param {string} params.name - (Required) Immutable. Identifier. The resource name of the capability. Must be in the following form: * `folders/{folder_id}/capabilities/{capability_name}` For example, `folders/123/capabilities/app-management` Following are the allowed {capability_name} values: * `app-management`
     * @param {string} params.updateMask - Optional. The list of fields to update. Only [Capability.value] can be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.capabilities.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    this.organizations = {};

    /**
     * Fetches an organization resource identified by the specified resource name.
     * @param {string} params.name - (Required) Required. The resource name of the Organization to fetch. This is the organization's relative path in the API, formatted as "organizations/[organizationId]". For example, "organizations/1234".
     * @return {object} The API response object.
     */
    this.organizations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Searches organization resources that are visible to the user and satisfy the specified filter. This method returns organizations in an unspecified order. New organizations do not necessarily appear at the end of the results, and may take a small amount of time to appear. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get` or has super admin privileges.
     * @param {integer} params.pageSize - Optional. The maximum number of organizations to return in the response. The server can return fewer organizations than requested. If unspecified, server picks an appropriate default.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous call to `SearchOrganizations` that indicates from where listing should continue.
     * @param {string} params.query - Optional. An optional query string used to filter the Organizations to return in the response. Query rules are case-insensitive. ``` | Field | Description | |------------------|--------------------------------------------| | directoryCustomerId, owner.directoryCustomerId | Filters by directory customer id. | | domain | Filters by domain. | ``` Organizations may be queried by `directoryCustomerId` or by `domain`, where the domain is a G Suite domain, for example: * Query `directorycustomerid:123456789` returns Organization resources with `owner.directory_customer_id` equal to `123456789`. * Query `domain:google.com` returns Organization resources corresponding to the domain `google.com`.
     * @return {object} The API response object.
     */
    this.organizations.search = (params) => this._makeRequest('v3/organizations:search', 'GET', params);

    /**
     * Gets the access control policy for an organization resource. The policy may be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, for example: "organizations/123". Authorization requires the IAM permission `resourcemanager.organizations.getIamPolicy` on the specified organization.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.getIamPolicy = (params) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the access control policy on an organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, for example: "organizations/123". Authorization requires the IAM permission `resourcemanager.organizations.setIamPolicy` on the specified organization.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.setIamPolicy = (params) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns the permissions that a caller has on the specified organization. The `resource` field should be the organization's resource name, for example: "organizations/123". There are no permissions required for making this API call.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.testIamPermissions = (params) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', params);

    this.projects = {};

    /**
     * Retrieves the project identified by the specified `name` (for example, `projects/415104041262`). The caller must have `resourcemanager.projects.get` permission for this project.
     * @param {string} params.name - (Required) Required. The name of the project (for example, `projects/415104041262`).
     * @return {object} The API response object.
     */
    this.projects.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Lists projects that are direct children of the specified folder or organization resource. `list()` provides a strongly consistent view of the projects underneath the specified parent resource. `list()` returns projects sorted based upon the (ascending) lexical ordering of their `display_name`. The caller must have `resourcemanager.projects.list` permission on the identified parent.
     * @param {integer} params.pageSize - Optional. The maximum number of projects to return in the response. The server can return fewer projects than requested. If unspecified, server picks an appropriate default.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous call to ListProjects that indicates from where listing should continue.
     * @param {string} params.parent - Required. The name of the parent resource whose projects are being listed. Only children of this parent resource are listed; descendants are not listed. If the parent is a folder, use the value `folders/{folder_id}`. If the parent is an organization, use the value `organizations/{org_id}`.
     * @param {boolean} params.showDeleted - Optional. Indicate that projects in the `DELETE_REQUESTED` state should also be returned. Normally only `ACTIVE` projects are returned.
     * @return {object} The API response object.
     */
    this.projects.list = (params) => this._makeRequest('v3/projects', 'GET', params);

    /**
     * Search for projects that the caller has the `resourcemanager.projects.get` permission on, and also satisfy the specified query. This method returns projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method.
     * @param {integer} params.pageSize - Optional. The maximum number of projects to return in the response. The server can return fewer projects than requested. If unspecified, server picks an appropriate default.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous call to ListProjects that indicates from where listing should continue.
     * @param {string} params.query - Optional. A query string for searching for projects that the caller has `resourcemanager.projects.get` permission to. If multiple fields are included in the query, then it will return results that match any of the fields. Some eligible fields are: ``` | Field | Description | |-------------------------|----------------------------------------------| | displayName, name | Filters by displayName. | | parent | Project's parent (for example: folders/123, organizations/*). Prefer parent field over parent.type and parent.id.| | parent.type | Parent's type: `folder` or `organization`. | | parent.id | Parent's id number (for example: 123) | | id, projectId | Filters by projectId. | | state, lifecycleState | Filters by state. | | labels | Filters by label name or value. | | labels.\ (where *key* is the name of a label) | Filters by label name.| ``` Search expressions are case insensitive. Some examples queries: ``` | Query | Description | |------------------|-----------------------------------------------------| | name:how* | The project's name starts with "how". | | name:Howl | The project's name is `Howl` or `howl`. | | name:HOWL | Equivalent to above. | | NAME:howl | Equivalent to above. | | labels.color:* | The project has the label `color`. | | labels.color:red | The project's label `color` has the value `red`. | | labels.color:red labels.size:big | The project's label `color` has the value `red` or its label `size` has the value `big`. | ``` If no query is specified, the call will return projects for which the user has the `resourcemanager.projects.get` permission.
     * @return {object} The API response object.
     */
    this.projects.search = (params) => this._makeRequest('v3/projects:search', 'GET', params);

    /**
     * Request that a new project be created. The result is an `Operation` which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking `Operation` is automatically deleted after a few hours, so there is no need to call `DeleteOperation`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.create = (params) => this._makeRequest('v3/projects', 'POST', params);

    /**
     * Updates the `display_name` and labels of the project identified by the specified `name` (for example, `projects/415104041262`). Deleting all labels requires an update mask for labels field. The caller must have `resourcemanager.projects.update` permission for this project.
     * @param {string} params.name - (Required) Output only. The unique resource name of the project. It is an int64 generated number prefixed by "projects/". Example: `projects/415104041262`
     * @param {string} params.updateMask - Optional. An update mask to selectively update fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Move a project to another place in your resource hierarchy, under a new resource parent. Returns an operation which can be used to track the process of the project move workflow. Upon success, the `Operation.response` field will be populated with the moved project. The caller must have `resourcemanager.projects.move` permission on the project, on the project's current and proposed new parent. If project has no current parent, or it currently does not have an associated organization resource, you will also need the `resourcemanager.projects.setIamPolicy` permission in the project.
     * @param {string} params.name - (Required) Required. The name of the project to move.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.move = (params) => this._makeRequest('v3/{+name}:move', 'POST', params);

    /**
     * Marks the project identified by the specified `name` (for example, `projects/415104041262`) for deletion. This method will only affect the project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the Project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the project with GetProject, and the project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the project is not retrievable by the GetProject, ListProjects, and SearchProjects methods. The caller must have `resourcemanager.projects.delete` permissions for this project.
     * @param {string} params.name - (Required) Required. The name of the Project (for example, `projects/415104041262`).
     * @return {object} The API response object.
     */
    this.projects.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Restores the project identified by the specified `name` (for example, `projects/415104041262`). You can only use this method for a project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the project cannot be restored. The caller must have `resourcemanager.projects.undelete` permission for this project.
     * @param {string} params.name - (Required) Required. The name of the project (for example, `projects/415104041262`). Required.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.undelete = (params) => this._makeRequest('v3/{+name}:undelete', 'POST', params);

    /**
     * Returns the IAM access control policy for the specified project, in the format `projects/{ProjectIdOrNumber}` e.g. projects/123. Permission is denied if the policy or the resource do not exist.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.getIamPolicy = (params) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM access control policy for the specified project, in the format `projects/{ProjectIdOrNumber}` e.g. projects/123. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. Note: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited using the Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + Invitations to grant the owner role cannot be sent using `setIamPolicy()`; they must be sent only using the Cloud Platform Console. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. If the project is part of an organization, you can remove all owners, potentially making the organization inaccessible.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.setIamPolicy = (params) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified project, in the format `projects/{ProjectIdOrNumber}` e.g. projects/123..
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.testIamPermissions = (params) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', params);

    this.locations = {};

    this.locations.tagBindingCollections = {};

    /**
     * Returns tag bindings directly attached to a GCP resource.
     * @param {string} params.name - (Required) Required. The full name of the TagBindingCollection in format: `locations/{location}/tagBindingCollections/{encoded-full-resource-name}` where the enoded-full-resource-name is the UTF-8 encoded name of the resource the TagBindings are bound to. E.g. "locations/global/tagBindingCollections/%2f%2fcloudresourcemanager.googleapis.com%2fprojects%2f123"
     * @return {object} The API response object.
     */
    this.locations.tagBindingCollections.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Updates tag bindings directly attached to a GCP resource.
     * @param {string} params.name - (Required) Identifier. The name of the TagBindingCollection, following the convention: `locations/{location}/tagBindingCollections/{encoded-full-resource-name}` where the encoded-full-resource-name is the UTF-8 encoded name of the GCP resource the TagBindings are bound to. "locations/global/tagBindingCollections/%2f%2fcloudresourcemanager.googleapis.com%2fprojects%2f123"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.tagBindingCollections.update = (params) => this._makeRequest('v3/{+name}', 'PUT', params);

    this.locations.effectiveTagBindingCollections = {};

    /**
     * Returns effective tag bindings on a GCP resource.
     * @param {string} params.name - (Required) Required. The full name of the EffectiveTagBindingCollection in format: `locations/{location}/effectiveTagBindingCollections/{encoded-full-resource-name}` where the encoded-full-resource-name is the UTF-8 encoded name of the resource the TagBindings are bound to. E.g. "locations/global/effectiveTagBindingCollections/%2f%2fcloudresourcemanager.googleapis.com%2fprojects%2f123"
     * @return {object} The API response object.
     */
    this.locations.effectiveTagBindingCollections.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.tagBindings = {};

    /**
     * Lists the TagBindings for the given Google Cloud resource, as specified with `parent`. NOTE: The `parent` field is expected to be a full resource name: https://cloud.google.com/apis/design/resource_names#full_resource_name
     * @param {integer} params.pageSize - Optional. The maximum number of TagBindings to return in the response. The server allows a maximum of 300 TagBindings to return. If unspecified, the server will use 100 as the default.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous call to `ListTagBindings` that indicates where this listing should continue from.
     * @param {string} params.parent - Required. The full resource name of a resource for which you want to list existing TagBindings. E.g. "//cloudresourcemanager.googleapis.com/projects/123"
     * @return {object} The API response object.
     */
    this.tagBindings.list = (params) => this._makeRequest('v3/tagBindings', 'GET', params);

    /**
     * Creates a TagBinding between a TagValue and a Google Cloud resource.
     * @param {boolean} params.validateOnly - Optional. Set to true to perform the validations necessary for creating the resource, but not actually perform the action.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tagBindings.create = (params) => this._makeRequest('v3/tagBindings', 'POST', params);

    /**
     * Deletes a TagBinding.
     * @param {string} params.name - (Required) Required. The name of the TagBinding. This is a String of the form: `tagBindings/{id}` (e.g. `tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2F123/tagValues/456`).
     * @return {object} The API response object.
     */
    this.tagBindings.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.effectiveTags = {};

    /**
     * Return a list of effective tags for the given Google Cloud resource, as specified in `parent`.
     * @param {integer} params.pageSize - Optional. The maximum number of effective tags to return in the response. The server allows a maximum of 300 effective tags to return in a single page. If unspecified, the server will use 100 as the default.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous call to `ListEffectiveTags` that indicates from where this listing should continue.
     * @param {string} params.parent - Required. The full resource name of a resource for which you want to list the effective tags. E.g. "//cloudresourcemanager.googleapis.com/projects/123"
     * @return {object} The API response object.
     */
    this.effectiveTags.list = (params) => this._makeRequest('v3/effectiveTags', 'GET', params);

    this.tagKeys = {};

    /**
     * Lists all TagKeys for a parent resource.
     * @param {integer} params.pageSize - Optional. The maximum number of TagKeys to return in the response. The server allows a maximum of 300 TagKeys to return. If unspecified, the server will use 100 as the default.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous call to `ListTagKey` that indicates where this listing should continue from.
     * @param {string} params.parent - Required. The resource name of the TagKey's parent. Must be of the form `organizations/{org_id}` or `projects/{project_id}` or `projects/{project_number}`
     * @return {object} The API response object.
     */
    this.tagKeys.list = (params) => this._makeRequest('v3/tagKeys', 'GET', params);

    /**
     * Retrieves a TagKey. This method will return `PERMISSION_DENIED` if the key does not exist or the user does not have permission to view it.
     * @param {string} params.name - (Required) Required. A resource name in the format `tagKeys/{id}`, such as `tagKeys/123`.
     * @return {object} The API response object.
     */
    this.tagKeys.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Retrieves a TagKey by its namespaced name. This method will return `PERMISSION_DENIED` if the key does not exist or the user does not have permission to view it.
     * @param {string} params.name - Required. A namespaced tag key name in the format `{parentId}/{tagKeyShort}`, such as `42/foo` for a key with short name "foo" under the organization with ID 42 or `r2-d2/bar` for a key with short name "bar" under the project `r2-d2`.
     * @return {object} The API response object.
     */
    this.tagKeys.getNamespaced = (params) => this._makeRequest('v3/tagKeys/namespaced', 'GET', params);

    /**
     * Creates a new TagKey. If another request with the same parameters is sent while the original request is in process, the second request will receive an error. A maximum of 1000 TagKeys can exist under a parent at any given time.
     * @param {boolean} params.validateOnly - Optional. Set to true to perform validations necessary for creating the resource, but not actually perform the action.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tagKeys.create = (params) => this._makeRequest('v3/tagKeys', 'POST', params);

    /**
     * Updates the attributes of the TagKey resource.
     * @param {string} params.name - (Required) Immutable. The resource name for a TagKey. Must be in the format `tagKeys/{tag_key_id}`, where `tag_key_id` is the generated numeric id for the TagKey.
     * @param {string} params.updateMask - Fields to be updated. The mask may only contain `description` or `etag`. If omitted entirely, both `description` and `etag` are assumed to be significant.
     * @param {boolean} params.validateOnly - Set as true to perform validations necessary for updating the resource, but not actually perform the action.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tagKeys.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes a TagKey. The TagKey cannot be deleted if it has any child TagValues.
     * @param {string} params.etag - Optional. The etag known to the client for the expected state of the TagKey. This is to be used for optimistic concurrency.
     * @param {string} params.name - (Required) Required. The resource name of a TagKey to be deleted in the format `tagKeys/123`. The TagKey cannot be a parent of any existing TagValues or it will not be deleted successfully.
     * @param {boolean} params.validateOnly - Optional. Set as true to perform validations necessary for deletion, but not actually perform the action.
     * @return {object} The API response object.
     */
    this.tagKeys.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Gets the access control policy for a TagKey. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagKey's resource name. For example, "tagKeys/1234". The caller must have `cloudresourcemanager.googleapis.com/tagKeys.getIamPolicy` permission on the specified TagKey.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tagKeys.getIamPolicy = (params) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the access control policy on a TagKey, replacing any existing policy. The `resource` field should be the TagKey's resource name. For example, "tagKeys/1234". The caller must have `resourcemanager.tagKeys.setIamPolicy` permission on the identified tagValue.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tagKeys.setIamPolicy = (params) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified TagKey. The `resource` field should be the TagKey's resource name. For example, "tagKeys/1234". There are no permissions required for making this API call.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tagKeys.testIamPermissions = (params) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', params);

    this.tagValues = {};

    /**
     * Lists all TagValues for a specific TagKey.
     * @param {integer} params.pageSize - Optional. The maximum number of TagValues to return in the response. The server allows a maximum of 300 TagValues to return. If unspecified, the server will use 100 as the default.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous call to `ListTagValues` that indicates where this listing should continue from.
     * @param {string} params.parent - Required. Resource name for the parent of the TagValues to be listed, in the format `tagKeys/123` or `tagValues/123`.
     * @return {object} The API response object.
     */
    this.tagValues.list = (params) => this._makeRequest('v3/tagValues', 'GET', params);

    /**
     * Retrieves a TagValue. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.
     * @param {string} params.name - (Required) Required. Resource name for TagValue to be fetched in the format `tagValues/456`.
     * @return {object} The API response object.
     */
    this.tagValues.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Retrieves a TagValue by its namespaced name. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.
     * @param {string} params.name - Required. A namespaced tag value name in the following format: `{parentId}/{tagKeyShort}/{tagValueShort}` Examples: - `42/foo/abc` for a value with short name "abc" under the key with short name "foo" under the organization with ID 42 - `r2-d2/bar/xyz` for a value with short name "xyz" under the key with short name "bar" under the project with ID "r2-d2"
     * @return {object} The API response object.
     */
    this.tagValues.getNamespaced = (params) => this._makeRequest('v3/tagValues/namespaced', 'GET', params);

    /**
     * Creates a TagValue as a child of the specified TagKey. If a another request with the same parameters is sent while the original request is in process the second request will receive an error. A maximum of 1000 TagValues can exist under a TagKey at any given time.
     * @param {boolean} params.validateOnly - Optional. Set as true to perform the validations necessary for creating the resource, but not actually perform the action.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tagValues.create = (params) => this._makeRequest('v3/tagValues', 'POST', params);

    /**
     * Updates the attributes of the TagValue resource.
     * @param {string} params.name - (Required) Immutable. Resource name for TagValue in the format `tagValues/456`.
     * @param {string} params.updateMask - Optional. Fields to be updated.
     * @param {boolean} params.validateOnly - Optional. True to perform validations necessary for updating the resource, but not actually perform the action.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tagValues.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes a TagValue. The TagValue cannot have any bindings when it is deleted.
     * @param {string} params.etag - Optional. The etag known to the client for the expected state of the TagValue. This is to be used for optimistic concurrency.
     * @param {string} params.name - (Required) Required. Resource name for TagValue to be deleted in the format tagValues/456.
     * @param {boolean} params.validateOnly - Optional. Set as true to perform the validations necessary for deletion, but not actually perform the action.
     * @return {object} The API response object.
     */
    this.tagValues.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Gets the access control policy for a TagValue. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have the `cloudresourcemanager.googleapis.com/tagValues.getIamPolicy` permission on the identified TagValue to get the access control policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tagValues.getIamPolicy = (params) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the access control policy on a TagValue, replacing any existing policy. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have `resourcemanager.tagValues.setIamPolicy` permission on the identified tagValue.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tagValues.setIamPolicy = (params) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified TagValue. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. There are no permissions required for making this API call.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tagValues.testIamPermissions = (params) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', params);

    this.tagValues.tagHolds = {};

    /**
     * Creates a TagHold. Returns ALREADY_EXISTS if a TagHold with the same resource and origin exists under the same TagValue.
     * @param {string} params.parent - (Required) Required. The resource name of the TagHold's parent TagValue. Must be of the form: `tagValues/{tag-value-id}`.
     * @param {boolean} params.validateOnly - Optional. Set to true to perform the validations necessary for creating the resource, but not actually perform the action.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tagValues.tagHolds.create = (params) => this._makeRequest('v3/{+parent}/tagHolds', 'POST', params);

    /**
     * Deletes a TagHold.
     * @param {string} params.name - (Required) Required. The resource name of the TagHold to delete. Must be of the form: `tagValues/{tag-value-id}/tagHolds/{tag-hold-id}`.
     * @param {boolean} params.validateOnly - Optional. Set to true to perform the validations necessary for deleting the resource, but not actually perform the action.
     * @return {object} The API response object.
     */
    this.tagValues.tagHolds.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Lists TagHolds under a TagValue.
     * @param {string} params.filter - Optional. Criteria used to select a subset of TagHolds parented by the TagValue to return. This field follows the syntax defined by aip.dev/160; the `holder` and `origin` fields are supported for filtering. Currently only `AND` syntax is supported. Some example queries are: * `holder = //compute.googleapis.com/compute/projects/myproject/regions/us-east-1/instanceGroupManagers/instance-group` * `origin = 35678234` * `holder = //compute.googleapis.com/compute/projects/myproject/regions/us-east-1/instanceGroupManagers/instance-group AND origin = 35678234`
     * @param {integer} params.pageSize - Optional. The maximum number of TagHolds to return in the response. The server allows a maximum of 300 TagHolds to return. If unspecified, the server will use 100 as the default.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous call to `ListTagHolds` that indicates where this listing should continue from.
     * @param {string} params.parent - (Required) Required. The resource name of the parent TagValue. Must be of the form: `tagValues/{tag-value-id}`.
     * @return {object} The API response object.
     */
    this.tagValues.tagHolds.list = (params) => this._makeRequest('v3/{+parent}/tagHolds', 'GET', params);
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
