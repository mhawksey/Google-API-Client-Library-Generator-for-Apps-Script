
/**
 * Google Apps Script client library for the Google Cloud Data Catalog API
 * Documentation URL: https://cloud.google.com/data-catalog/docs/
 * @class
 */
class Datacatalog {
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
    this._rootUrl = 'https://datacatalog.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.catalog = {};

    /**
     * Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.catalog.search = (params) => this._makeRequest('v1beta1/catalog:search', 'POST', params);

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.entryGroups = {};

    /**
     * A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     * @param {string} params.entryGroupId - Required. The id of the entry group to create. The id must begin with a letter or underscore, contain only English letters, numbers and underscores, and be at most 64 characters.
     * @param {string} params.parent - (Required) Required. The name of the project this entry group is in. Example: * projects/{project_id}/locations/{location} Note that this EntryGroup and its child resources may not actually be stored in the location in this name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.create = (params) => this._makeRequest('v1beta1/{+parent}/entryGroups', 'POST', params);

    /**
     * Updates an EntryGroup. The user should enable the Data Catalog API in the project identified by the `entry_group.name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     * @param {string} params.name - (Required) Identifier. The resource name of the entry group in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this EntryGroup and its child resources may not actually be stored in the location in this name.
     * @param {string} params.updateMask - Names of fields whose values to overwrite on an entry group. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Gets an EntryGroup.
     * @param {string} params.name - (Required) Required. The name of the entry group. For example, `projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}`.
     * @param {string} params.readMask - The fields to return. If not set or empty, all fields are returned.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes an EntryGroup. Only entry groups that do not contain entries can be deleted. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     * @param {boolean} params.force - Optional. If true, deletes all entries in the entry group.
     * @param {string} params.name - (Required) Required. The name of the entry group. For example, `projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Lists entry groups.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`.
     * @param {string} params.pageToken - Optional. Token that specifies which page is requested. If empty, the first page is returned.
     * @param {string} params.parent - (Required) Required. The name of the location that contains the entry groups, which can be provided in URL format. Example: * projects/{project_id}/locations/{location}
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.list = (params) => this._makeRequest('v1beta1/{+parent}/entryGroups', 'GET', params);

    /**
     * Sets the access control policy for a resource. Replaces any existing policy. Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. Callers must have following Google IAM permission - `datacatalog.tagTemplates.setIamPolicy` to set policies on tag templates. - `datacatalog.entries.setIamPolicy` to set policies on entries. - `datacatalog.entryGroups.setIamPolicy` to set policies on entry groups.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. Callers must have following Google IAM permission - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entries.getIamPolicy` to get policies on entries. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (We don't return a `NOT_FOUND` error). Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. A caller is not required to have Google IAM permission to make this request.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.entryGroups.entries = {};

    /**
     * Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.
     * @param {string} params.entryId - Required. The id of the entry to create.
     * @param {string} params.parent - (Required) Required. The name of the entry group this entry is in. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this Entry and its child resources may not actually be stored in the location in this name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.create = (params) => this._makeRequest('v1beta1/{+parent}/entries', 'POST', params);

    /**
     * Updates an existing entry. Users should enable the Data Catalog API in the project identified by the `entry.name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     * @param {string} params.name - (Required) Output only. Identifier. The Data Catalog resource name of the entry in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Entry and its child resources may not actually be stored in the location in this name.
     * @param {string} params.updateMask - Names of fields whose values to overwrite on an entry. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. The following fields are modifiable: * For entries with type `DATA_STREAM`: * `schema` * For entries with type `FILESET`: * `schema` * `display_name` * `description` * `gcs_fileset_spec` * `gcs_fileset_spec.file_patterns` * For entries with `user_specified_type`: * `schema` * `display_name` * `description` * `user_specified_type` * `user_specified_system` * `linked_resource` * `source_system_timestamps`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes an existing entry. Only entries created through CreateEntry method can be deleted. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     * @param {string} params.name - (Required) Required. The name of the entry. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Gets an entry.
     * @param {string} params.name - (Required) Required. The name of the entry. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists entries.
     * @param {integer} params.pageSize - The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`.
     * @param {string} params.pageToken - Token that specifies which page is requested. If empty, the first page is returned.
     * @param {string} params.parent - (Required) Required. The name of the entry group that contains the entries, which can be provided in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}
     * @param {string} params.readMask - The fields to return for each Entry. If not set or empty, all fields are returned. For example, setting read_mask to contain only one path "name" will cause ListEntries to return a list of Entries with only "name" field.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.list = (params) => this._makeRequest('v1beta1/{+parent}/entries', 'GET', params);

    /**
     * Gets the access control policy for a resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. Callers must have following Google IAM permission - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entries.getIamPolicy` to get policies on entries. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (We don't return a `NOT_FOUND` error). Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. A caller is not required to have Google IAM permission to make this request.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.entryGroups.entries.tags = {};

    /**
     * Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
     * @param {string} params.parent - (Required) Required. The name of the resource to attach this tag to. Tags can be attached to Entries. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Tag and its child resources may not actually be stored in the location in this name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.tags.create = (params) => this._makeRequest('v1beta1/{+parent}/tags', 'POST', params);

    /**
     * Updates an existing tag.
     * @param {string} params.name - (Required) Identifier. The resource name of the tag in URL format. Example: * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.
     * @param {string} params.updateMask - Note: Currently, this parameter can only take `"fields"` as value. Names of fields whose values to overwrite on a tag. Currently, a tag has the only modifiable field with the name `fields`. In general, if this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.tags.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a tag.
     * @param {string} params.name - (Required) Required. The name of the tag to delete. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id}
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.tags.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Lists tags assigned to an Entry. The columns in the response are lowercased.
     * @param {integer} params.pageSize - The maximum number of tags to return. Default is 10. Max limit is 1000.
     * @param {string} params.pageToken - Token that specifies which page is requested. If empty, the first page is returned.
     * @param {string} params.parent - (Required) Required. The name of the Data Catalog resource to list the tags of. The resource could be an Entry or an EntryGroup. Examples: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.tags.list = (params) => this._makeRequest('v1beta1/{+parent}/tags', 'GET', params);

    this.projects.locations.entryGroups.tags = {};

    /**
     * Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
     * @param {string} params.parent - (Required) Required. The name of the resource to attach this tag to. Tags can be attached to Entries. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Tag and its child resources may not actually be stored in the location in this name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.tags.create = (params) => this._makeRequest('v1beta1/{+parent}/tags', 'POST', params);

    /**
     * Updates an existing tag.
     * @param {string} params.name - (Required) Identifier. The resource name of the tag in URL format. Example: * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.
     * @param {string} params.updateMask - Note: Currently, this parameter can only take `"fields"` as value. Names of fields whose values to overwrite on a tag. Currently, a tag has the only modifiable field with the name `fields`. In general, if this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.tags.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a tag.
     * @param {string} params.name - (Required) Required. The name of the tag to delete. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id}
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.tags.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Lists tags assigned to an Entry. The columns in the response are lowercased.
     * @param {integer} params.pageSize - The maximum number of tags to return. Default is 10. Max limit is 1000.
     * @param {string} params.pageToken - Token that specifies which page is requested. If empty, the first page is returned.
     * @param {string} params.parent - (Required) Required. The name of the Data Catalog resource to list the tags of. The resource could be an Entry or an EntryGroup. Examples: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.tags.list = (params) => this._makeRequest('v1beta1/{+parent}/tags', 'GET', params);

    this.projects.locations.tagTemplates = {};

    /**
     * Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     * @param {string} params.parent - (Required) Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions. Example: * projects/{project_id}/locations/us-central1
     * @param {string} params.tagTemplateId - Required. The id of the tag template to create.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.create = (params) => this._makeRequest('v1beta1/{+parent}/tagTemplates', 'POST', params);

    /**
     * Gets a tag template.
     * @param {string} params.name - (Required) Required. The name of the tag template. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates a tag template. This method cannot be used to update the fields of a template. The tag template fields are represented as separate resources and should be updated using their own create/update/delete methods. Users should enable the Data Catalog API in the project identified by the `tag_template.name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     * @param {string} params.name - (Required) Identifier. The resource name of the tag template in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} Note that this TagTemplate and its child resources may not actually be stored in the location in this name.
     * @param {string} params.updateMask - Names of fields whose values to overwrite on a tag template. Currently, only `display_name` can be overwritten. In general, if this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a tag template and all tags using the template. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     * @param {boolean} params.force - Required. Currently, this field must always be set to `true`. This confirms the deletion of any possible tags using this template. `force = false` will be supported in the future.
     * @param {string} params.name - (Required) Required. The name of the tag template to delete. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy for a resource. Replaces any existing policy. Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. Callers must have following Google IAM permission - `datacatalog.tagTemplates.setIamPolicy` to set policies on tag templates. - `datacatalog.entries.setIamPolicy` to set policies on entries. - `datacatalog.entryGroups.setIamPolicy` to set policies on entry groups.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. Callers must have following Google IAM permission - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entries.getIamPolicy` to get policies on entries. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (We don't return a `NOT_FOUND` error). Supported resources are: - Tag templates. - Entries. - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Pub/Sub and any external Google Cloud Platform resources synced to Data Catalog. A caller is not required to have Google IAM permission to make this request.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.tagTemplates.fields = {};

    /**
     * Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     * @param {string} params.parent - (Required) Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions). Example: * projects/{project_id}/locations/us-central1/tagTemplates/{tag_template_id}
     * @param {string} params.tagTemplateFieldId - Required. The ID of the tag template field to create. Field ids can contain letters (both uppercase and lowercase), numbers (0-9), underscores (_) and dashes (-). Field IDs must be at least 1 character long and at most 128 characters long. Field IDs must also be unique within their template.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.fields.create = (params) => this._makeRequest('v1beta1/{+parent}/fields', 'POST', params);

    /**
     * Updates a field in a tag template. This method cannot be used to update the field type. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     * @param {string} params.name - (Required) Required. The name of the tag template field. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}
     * @param {string} params.updateMask - Optional. Names of fields whose values to overwrite on an individual field of a tag template. The following fields are modifiable: * `display_name` * `type.enum_type` * `is_required` If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied with one exception: when updating an enum type, the provided values are merged with the existing values. Therefore, enum values can only be added, existing enum values cannot be deleted or renamed. Additionally, updating a template field from optional to required is *not* allowed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.fields.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Renames a field in a tag template. The user should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     * @param {string} params.name - (Required) Required. The name of the tag template. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.fields.rename = (params) => this._makeRequest('v1beta1/{+name}:rename', 'POST', params);

    /**
     * Deletes a field in a tag template and all uses of that field. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
     * @param {boolean} params.force - Required. Currently, this field must always be set to `true`. This confirms the deletion of this field from any tags using this field. `force = false` will be supported in the future.
     * @param {string} params.name - (Required) Required. The name of the tag template field to delete. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.fields.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.tagTemplates.fields.enumValues = {};

    /**
     * Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.
     * @param {string} params.name - (Required) Required. The name of the enum field value. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}/enumValues/{enum_value_display_name}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.fields.enumValues.rename = (params) => this._makeRequest('v1beta1/{+name}:rename', 'POST', params);

    this.projects.locations.taxonomies = {};

    /**
     * Creates a taxonomy in the specified project.
     * @param {string} params.parent - (Required) Required. Resource name of the project that the taxonomy will belong to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.create = (params) => this._makeRequest('v1beta1/{+parent}/taxonomies', 'POST', params);

    /**
     * Deletes a taxonomy. This operation will also delete all policy tags in this taxonomy along with their associated policies.
     * @param {string} params.name - (Required) Required. Resource name of the taxonomy to be deleted. All policy tags in this taxonomy will also be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Updates a taxonomy.
     * @param {string} params.name - (Required) Identifier. Resource name of this taxonomy, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{id}".
     * @param {string} params.updateMask - The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Lists all taxonomies in a project in a particular location that the caller has permission to view.
     * @param {string} params.filter - Supported field for filter is 'service' and value is 'dataplex'. Eg: service=dataplex.
     * @param {integer} params.pageSize - The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request, if any. If not set, defaults to an empty string.
     * @param {string} params.parent - (Required) Required. Resource name of the project to list the taxonomies of.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.list = (params) => this._makeRequest('v1beta1/{+parent}/taxonomies', 'GET', params);

    /**
     * Gets a taxonomy.
     * @param {string} params.name - (Required) Required. Resource name of the requested taxonomy.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Gets the IAM policy for a taxonomy or a policy tag.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM policy for a taxonomy or a policy tag.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns the permissions that a caller has on the specified taxonomy or policy tag.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.
     * @param {string} params.parent - (Required) Required. Resource name of project that the imported taxonomies will belong to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.import = (params) => this._makeRequest('v1beta1/{+parent}/taxonomies:import', 'POST', params);

    /**
     * Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
     * @param {string} params.parent - (Required) Required. Resource name of the project that taxonomies to be exported will share.
     * @param {boolean} params.serializedTaxonomies - Export taxonomies as serialized taxonomies.
     * @param {string} params.taxonomies - Required. Resource names of the taxonomies to be exported.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.export = (params) => this._makeRequest('v1beta1/{+parent}/taxonomies:export', 'GET', params);

    this.projects.locations.taxonomies.policyTags = {};

    /**
     * Creates a policy tag in the specified taxonomy.
     * @param {string} params.parent - (Required) Required. Resource name of the taxonomy that the policy tag will belong to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.create = (params) => this._makeRequest('v1beta1/{+parent}/policyTags', 'POST', params);

    /**
     * Deletes a policy tag. Also deletes all of its descendant policy tags.
     * @param {string} params.name - (Required) Required. Resource name of the policy tag to be deleted. All of its descendant policy tags will also be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Updates a policy tag.
     * @param {string} params.name - (Required) Identifier. Resource name of this policy tag, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}".
     * @param {string} params.updateMask - The update mask applies to the resource. Only display_name, description and parent_policy_tag can be updated and thus can be listed in the mask. If update_mask is not provided, all allowed fields (i.e. display_name, description and parent) will be updated. For more information including the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Lists all policy tags in a taxonomy.
     * @param {integer} params.pageSize - The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any. If not set, defaults to an empty string.
     * @param {string} params.parent - (Required) Required. Resource name of the taxonomy to list the policy tags of.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.list = (params) => this._makeRequest('v1beta1/{+parent}/policyTags', 'GET', params);

    /**
     * Gets a policy tag.
     * @param {string} params.name - (Required) Required. Resource name of the requested policy tag.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Gets the IAM policy for a taxonomy or a policy tag.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM policy for a taxonomy or a policy tag.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns the permissions that a caller has on the specified taxonomy or policy tag.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.entries = {};

    /**
     * Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.
     * @param {string} params.linkedResource - The full name of the Google Cloud Platform resource the Data Catalog entry represents. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Full names are case-sensitive. Examples: * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId * //pubsub.googleapis.com/projects/projectId/topics/topicId
     * @param {string} params.sqlResource - The SQL name of the entry. SQL names are case-sensitive. Examples: * `pubsub.project_id.topic_id` * ``pubsub.project_id.`topic.id.with.dots` `` * `bigquery.table.project_id.dataset_id.table_id` * `bigquery.dataset.project_id.dataset_id` * `datacatalog.entry.project_id.location_id.entry_group_id.entry_id` `*_id`s should satisfy the GoogleSQL rules for identifiers. https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical.
     * @return {object} The API response object.
     */
    this.entries.lookup = (params) => this._makeRequest('v1beta1/entries:lookup', 'GET', params);
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
