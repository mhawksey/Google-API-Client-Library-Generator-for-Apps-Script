
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

    this.projects = {};

    this.projects.locations = {};

    /**
     * Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project.
     * @param {string} params.name - (Required) Required. The organization or project whose config is being specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.setConfig = (params) => this._makeRequest('v1/{+name}:setConfig', 'POST', params);

    /**
     * Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project. If there is no specific configuration set for the resource, the setting is checked hierarchicahlly through the ancestors of the resource, starting from the resource itself.
     * @param {string} params.name - (Required) Required. The resource whose effective config is being retrieved.
     * @return {object} The API response object.
     */
    this.projects.locations.retrieveEffectiveConfig = (params) => this._makeRequest('v1/{+name}:retrieveEffectiveConfig', 'GET', params);

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
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.entryGroups = {};

    /**
     * Creates an entry group. An entry group contains logically related entries together with [Cloud Identity and Access Management](/data-catalog/docs/concepts/iam) policies. These policies specify users who can create, edit, and view entries within entry groups. Data Catalog automatically creates entry groups with names that start with the `@` symbol for the following resources: * BigQuery entries (`@bigquery`) * Pub/Sub topics (`@pubsub`) * Dataproc Metastore services (`@dataproc_metastore_{SERVICE_NAME_HASH}`) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies. User-created entry groups can't contain the `@` symbol, it is reserved for automatically created groups. Entry groups, like entries, can be searched. A maximum of 10,000 entry groups may be created per organization across all locations. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     * @param {string} params.entryGroupId - Required. The ID of the entry group to create. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and must start with a letter or underscore. The maximum size is 64 bytes when encoded in UTF-8.
     * @param {string} params.parent - (Required) Required. The names of the project and location that the new entry group belongs to. Note: The entry group itself and its child resources might not be stored in the location specified in its name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.create = (params) => this._makeRequest('v1/{+parent}/entryGroups', 'POST', params);

    /**
     * Gets an entry group.
     * @param {string} params.name - (Required) Required. The name of the entry group to get.
     * @param {string} params.readMask - The fields to return. If empty or omitted, all fields are returned.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates an entry group. You must enable the Data Catalog API in the project identified by the `entry_group.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     * @param {string} params.name - (Required) Identifier. The resource name of the entry group in URL format. Note: The entry group itself and its child resources might not be stored in the location specified in its name.
     * @param {string} params.updateMask - Names of fields whose values to overwrite on an entry group. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an entry group. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     * @param {boolean} params.force - Optional. If true, deletes all entries in the entry group.
     * @param {string} params.name - (Required) Required. The name of the entry group to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists entry groups.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. Default is 10. Maximum limit is 1000. Throws an invalid argument if `page_size` is greater than 1000.
     * @param {string} params.pageToken - Optional. Pagination token that specifies the next page to return. If empty, returns the first page.
     * @param {string} params.parent - (Required) Required. The name of the location that contains the entry groups to list. Can be provided as a URL.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.list = (params) => this._makeRequest('v1/{+parent}/entryGroups', 'GET', params);

    /**
     * Sets an access control policy for a resource. Replaces any existing policy. Supported resources are: - Tag templates - Entry groups Note: This method sets policies only within Data Catalog and can't be used to manage policies in BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources synced with the Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.setIamPolicy` to set policies on tag templates. - `datacatalog.entryGroups.setIamPolicy` to set policies on entry groups.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. May return: * A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it. * An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Tag templates - Entry groups Note: This method doesn't get policies from Google Cloud Platform resources ingested into Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Tag templates - Entry groups Note: This method gets policies only within Data Catalog and can't be used to get policies from BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources ingested into Data Catalog. No Google IAM permissions are required to call this method.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.entryGroups.entries = {};

    /**
     * Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries.
     * @param {string} params.entryId - Required. The ID of the entry to create. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores (_). The maximum size is 64 bytes when encoded in UTF-8.
     * @param {string} params.parent - (Required) Required. The name of the entry group this entry belongs to. Note: The entry itself and its child resources might not be stored in the location specified in its name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.create = (params) => this._makeRequest('v1/{+parent}/entries', 'POST', params);

    /**
     * Updates an existing entry. You must enable the Data Catalog API in the project identified by the `entry.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of an entry in URL format. Note: The entry itself and its child resources might not be stored in the location specified in its name.
     * @param {string} params.updateMask - Names of fields whose values to overwrite on an entry. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. You can modify only the fields listed below. For entries with type `DATA_STREAM`: * `schema` For entries with type `FILESET`: * `schema` * `display_name` * `description` * `gcs_fileset_spec` * `gcs_fileset_spec.file_patterns` For entries with `user_specified_type`: * `schema` * `display_name` * `description` * `user_specified_type` * `user_specified_system` * `linked_resource` * `source_system_timestamps`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an existing entry. You can delete only the entries created by the CreateEntry method. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     * @param {string} params.name - (Required) Required. The name of the entry to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets an entry.
     * @param {string} params.name - (Required) Required. The name of the entry to get.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog.
     * @param {integer} params.pageSize - The maximum number of items to return. Default is 10. Maximum limit is 1000. Throws an invalid argument if `page_size` is more than 1000.
     * @param {string} params.pageToken - Pagination token that specifies the next page to return. If empty, the first page is returned.
     * @param {string} params.parent - (Required) Required. The name of the entry group that contains the entries to list. Can be provided in URL format.
     * @param {string} params.readMask - The fields to return for each entry. If empty or omitted, all fields are returned. For example, to return a list of entries with only the `name` field, set `read_mask` to only one path with the `name` value.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.list = (params) => this._makeRequest('v1/{+parent}/entries', 'GET', params);

    /**
     * Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project.
     * @param {string} params.name - (Required) Required. The full resource name of the entry.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.modifyEntryOverview = (params) => this._makeRequest('v1/{+name}:modifyEntryOverview', 'POST', params);

    /**
     * Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project.
     * @param {string} params.name - (Required) Required. The full resource name of the entry.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.modifyEntryContacts = (params) => this._makeRequest('v1/{+name}:modifyEntryContacts', 'POST', params);

    /**
     * Marks an Entry as starred by the current user. Starring information is private to each user.
     * @param {string} params.name - (Required) Required. The name of the entry to mark as starred.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.star = (params) => this._makeRequest('v1/{+name}:star', 'POST', params);

    /**
     * Marks an Entry as NOT starred by the current user. Starring information is private to each user.
     * @param {string} params.name - (Required) Required. The name of the entry to mark as **not** starred.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.unstar = (params) => this._makeRequest('v1/{+name}:unstar', 'POST', params);

    /**
     * Gets the access control policy for a resource. May return: * A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it. * An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Tag templates - Entry groups Note: This method doesn't get policies from Google Cloud Platform resources ingested into Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Tag templates - Entry groups Note: This method gets policies only within Data Catalog and can't be used to get policies from BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources ingested into Data Catalog. No Google IAM permissions are required to call this method.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Imports entries from a source, such as data previously dumped into a Cloud Storage bucket, into Data Catalog. Import of entries is a sync operation that reconciles the state of the third-party system with the Data Catalog. `ImportEntries` accepts source data snapshots of a third-party system. Snapshot should be delivered as a .wire or base65-encoded .txt file containing a sequence of Protocol Buffer messages of DumpItem type. `ImportEntries` returns a long-running operation resource that can be queried with Operations.GetOperation to return ImportEntriesMetadata and an ImportEntriesResponse message.
     * @param {string} params.parent - (Required) Required. Target entry group for ingested entries.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.import = (params) => this._makeRequest('v1/{+parent}/entries:import', 'POST', params);

    this.projects.locations.entryGroups.entries.tags = {};

    /**
     * Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.
     * @param {string} params.parent - (Required) Required. The name of the resource to attach this tag to. Tags can be attached to entries or entry groups. An entry can have up to 1000 attached tags. Note: The tag and its child resources might not be stored in the location specified in its name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.tags.create = (params) => this._makeRequest('v1/{+parent}/tags', 'POST', params);

    /**
     * Updates an existing tag.
     * @param {string} params.name - (Required) Identifier. The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name.
     * @param {string} params.updateMask - Names of fields whose values to overwrite on a tag. Currently, a tag has the only modifiable field with the name `fields`. In general, if this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.tags.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a tag.
     * @param {string} params.name - (Required) Required. The name of the tag to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.tags.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists tags assigned to an Entry. The columns in the response are lowercased.
     * @param {integer} params.pageSize - The maximum number of tags to return. Default is 10. Maximum limit is 1000.
     * @param {string} params.pageToken - Pagination token that specifies the next page to return. If empty, the first page is returned.
     * @param {string} params.parent - (Required) Required. The name of the Data Catalog resource to list the tags of. The resource can be an Entry or an EntryGroup (without `/entries/{entries}` at the end).
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.tags.list = (params) => this._makeRequest('v1/{+parent}/tags', 'GET', params);

    /**
     * `ReconcileTags` creates or updates a list of tags on the entry. If the ReconcileTagsRequest.force_delete_missing parameter is set, the operation deletes tags not included in the input tag list. `ReconcileTags` returns a long-running operation resource that can be queried with Operations.GetOperation to return ReconcileTagsMetadata and a ReconcileTagsResponse message. Note: SearchCatalog might return stale search results for up to 24 hours after the `ReconcileTags` operation completes.
     * @param {string} params.parent - (Required) Required. Name of Entry to be tagged.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.tags.reconcile = (params) => this._makeRequest('v1/{+parent}/tags:reconcile', 'POST', params);

    this.projects.locations.entryGroups.tags = {};

    /**
     * Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.
     * @param {string} params.parent - (Required) Required. The name of the resource to attach this tag to. Tags can be attached to entries or entry groups. An entry can have up to 1000 attached tags. Note: The tag and its child resources might not be stored in the location specified in its name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.tags.create = (params) => this._makeRequest('v1/{+parent}/tags', 'POST', params);

    /**
     * Updates an existing tag.
     * @param {string} params.name - (Required) Identifier. The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name.
     * @param {string} params.updateMask - Names of fields whose values to overwrite on a tag. Currently, a tag has the only modifiable field with the name `fields`. In general, if this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.tags.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a tag.
     * @param {string} params.name - (Required) Required. The name of the tag to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.tags.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists tags assigned to an Entry. The columns in the response are lowercased.
     * @param {integer} params.pageSize - The maximum number of tags to return. Default is 10. Maximum limit is 1000.
     * @param {string} params.pageToken - Pagination token that specifies the next page to return. If empty, the first page is returned.
     * @param {string} params.parent - (Required) Required. The name of the Data Catalog resource to list the tags of. The resource can be an Entry or an EntryGroup (without `/entries/{entries}` at the end).
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.tags.list = (params) => this._makeRequest('v1/{+parent}/tags', 'GET', params);

    this.projects.locations.tagTemplates = {};

    /**
     * Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     * @param {string} params.parent - (Required) Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions).
     * @param {string} params.tagTemplateId - Required. The ID of the tag template to create. The ID must contain only lowercase letters (a-z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum size is 64 bytes when encoded in UTF-8.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.create = (params) => this._makeRequest('v1/{+parent}/tagTemplates', 'POST', params);

    /**
     * Gets a tag template.
     * @param {string} params.name - (Required) Required. The name of the tag template to get.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a tag template. You can't update template fields with this method. These fields are separate resources with their own create, update, and delete methods. You must enable the Data Catalog API in the project identified by the `tag_template.name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     * @param {string} params.name - (Required) Identifier. The resource name of the tag template in URL format. Note: The tag template itself and its child resources might not be stored in the location specified in its name.
     * @param {string} params.updateMask - Names of fields whose values to overwrite on a tag template. Currently, only `display_name` and `is_publicly_readable` can be overwritten. If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied. Note: Updating the `is_publicly_readable` field may require up to 12 hours to take effect in search results.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a tag template and all tags that use it. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     * @param {boolean} params.force - Required. If true, deletes all tags that use this template. Currently, `true` is the only supported value.
     * @param {string} params.name - (Required) Required. The name of the tag template to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets an access control policy for a resource. Replaces any existing policy. Supported resources are: - Tag templates - Entry groups Note: This method sets policies only within Data Catalog and can't be used to manage policies in BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources synced with the Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.setIamPolicy` to set policies on tag templates. - `datacatalog.entryGroups.setIamPolicy` to set policies on entry groups.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. May return: * A`NOT_FOUND` error if the resource doesn't exist or you don't have the permission to view it. * An empty policy if the resource exists but doesn't have a set policy. Supported resources are: - Tag templates - Entry groups Note: This method doesn't get policies from Google Cloud Platform resources ingested into Data Catalog. To call this method, you must have the following Google IAM permissions: - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag templates. - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Gets your permissions on a resource. Returns an empty set of permissions if the resource doesn't exist. Supported resources are: - Tag templates - Entry groups Note: This method gets policies only within Data Catalog and can't be used to get policies from BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources ingested into Data Catalog. No Google IAM permissions are required to call this method.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.tagTemplates.fields = {};

    /**
     * Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     * @param {string} params.parent - (Required) Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions).
     * @param {string} params.tagTemplateFieldId - Required. The ID of the tag template field to create. Note: Adding a required field to an existing template is *not* allowed. Field IDs can contain letters (both uppercase and lowercase), numbers (0-9), underscores (_) and dashes (-). Field IDs must be at least 1 character long and at most 128 characters long. Field IDs must also be unique within their template.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.fields.create = (params) => this._makeRequest('v1/{+parent}/fields', 'POST', params);

    /**
     * Updates a field in a tag template. You can't update the field type with this method. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     * @param {string} params.name - (Required) Required. The name of the tag template field.
     * @param {string} params.updateMask - Optional. Names of fields whose values to overwrite on an individual field of a tag template. The following fields are modifiable: * `display_name` * `type.enum_type` * `is_required` If this parameter is absent or empty, all modifiable fields are overwritten. If such fields are non-required and omitted in the request body, their values are emptied with one exception: when updating an enum type, the provided values are merged with the existing values. Therefore, enum values can only be added, existing enum values cannot be deleted or renamed. Additionally, updating a template field from optional to required is *not* allowed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.fields.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Renames a field in a tag template. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     * @param {string} params.name - (Required) Required. The name of the tag template field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.fields.rename = (params) => this._makeRequest('v1/{+name}:rename', 'POST', params);

    /**
     * Deletes a field in a tag template and all uses of this field from the tags based on this template. You must enable the Data Catalog API in the project identified by the `name` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
     * @param {boolean} params.force - Required. If true, deletes this field from any tags that use it. Currently, `true` is the only supported value.
     * @param {string} params.name - (Required) Required. The name of the tag template field to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.fields.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.tagTemplates.fields.enumValues = {};

    /**
     * Renames an enum value in a tag template. Within a single enum field, enum values must be unique.
     * @param {string} params.name - (Required) Required. The name of the enum field value.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tagTemplates.fields.enumValues.rename = (params) => this._makeRequest('v1/{+name}:rename', 'POST', params);

    this.projects.locations.taxonomies = {};

    /**
     * Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.
     * @param {string} params.parent - (Required) Required. Resource name of the project that the taxonomy will belong to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.create = (params) => this._makeRequest('v1/{+parent}/taxonomies', 'POST', params);

    /**
     * Deletes a taxonomy, including all policy tags in this taxonomy, their associated policies, and the policy tags references from BigQuery columns.
     * @param {string} params.name - (Required) Required. Resource name of the taxonomy to delete. Note: All policy tags in this taxonomy are also deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates a taxonomy, including its display name, description, and activated policy types.
     * @param {string} params.name - (Required) Identifier. Resource name of this taxonomy in URL format. Note: Policy tag manager generates unique taxonomy IDs.
     * @param {string} params.updateMask - Specifies fields to update. If not set, defaults to all fields you can update. For more information, see [FieldMask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists all taxonomies in a project in a particular location that you have a permission to view.
     * @param {string} params.filter - Supported field for filter is 'service' and value is 'dataplex'. Eg: service=dataplex.
     * @param {integer} params.pageSize - The maximum number of items to return. Must be a value between 1 and 1000 inclusively. If not set, defaults to 50.
     * @param {string} params.pageToken - The pagination token of the next results page. If not set, the first page is returned. The token is returned in the response to a previous list request.
     * @param {string} params.parent - (Required) Required. Resource name of the project to list the taxonomies of.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.list = (params) => this._makeRequest('v1/{+parent}/taxonomies', 'GET', params);

    /**
     * Gets a taxonomy.
     * @param {string} params.name - (Required) Required. Resource name of the taxonomy to get.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the IAM policy for a policy tag or a taxonomy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM policy for a policy tag or a taxonomy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns your permissions on a specified policy tag or taxonomy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.
     * @param {string} params.name - (Required) Required. Resource name of the taxonomy to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.replace = (params) => this._makeRequest('v1/{+name}:replace', 'POST', params);

    /**
     * Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.
     * @param {string} params.parent - (Required) Required. Resource name of project that the imported taxonomies will belong to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.import = (params) => this._makeRequest('v1/{+parent}/taxonomies:import', 'POST', params);

    /**
     * Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.
     * @param {string} params.parent - (Required) Required. Resource name of the project that the exported taxonomies belong to.
     * @param {boolean} params.serializedTaxonomies - Serialized export taxonomies that contain all the policy tags as nested protocol buffers.
     * @param {string} params.taxonomies - Required. Resource names of the taxonomies to export.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.export = (params) => this._makeRequest('v1/{+parent}/taxonomies:export', 'GET', params);

    this.projects.locations.taxonomies.policyTags = {};

    /**
     * Creates a policy tag in a taxonomy.
     * @param {string} params.parent - (Required) Required. Resource name of the taxonomy that the policy tag will belong to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.create = (params) => this._makeRequest('v1/{+parent}/policyTags', 'POST', params);

    /**
     * Deletes a policy tag together with the following: * All of its descendant policy tags, if any * Policies associated with the policy tag and its descendants * References from BigQuery table schema of the policy tag and its descendants
     * @param {string} params.name - (Required) Required. Resource name of the policy tag to delete. Note: All of its descendant policy tags are also deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates a policy tag, including its display name, description, and parent policy tag.
     * @param {string} params.name - (Required) Identifier. Resource name of this policy tag in the URL format. The policy tag manager generates unique taxonomy IDs and policy tag IDs.
     * @param {string} params.updateMask - Specifies the fields to update. You can update only display name, description, and parent policy tag. If not set, defaults to all updatable fields. For more information, see [FieldMask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists all policy tags in a taxonomy.
     * @param {integer} params.pageSize - The maximum number of items to return. Must be a value between 1 and 1000 inclusively. If not set, defaults to 50.
     * @param {string} params.pageToken - The pagination token of the next results page. If not set, returns the first page. The token is returned in the response to a previous list request.
     * @param {string} params.parent - (Required) Required. Resource name of the taxonomy to list the policy tags of.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.list = (params) => this._makeRequest('v1/{+parent}/policyTags', 'GET', params);

    /**
     * Gets a policy tag.
     * @param {string} params.name - (Required) Required. Resource name of the policy tag.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the IAM policy for a policy tag or a taxonomy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM policy for a policy tag or a taxonomy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns your permissions on a specified policy tag or taxonomy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.taxonomies.policyTags.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.catalog = {};

    /**
     * Searches Data Catalog for multiple resources like entries and tags that match a query. This is a [Custom Method] (https://cloud.google.com/apis/design/custom_methods) that doesn't return all information on a resource, only its ID and high level fields. To get more information, you can subsequently call specific get methods. Note: Data Catalog search queries don't guarantee full recall. Results that match your query might not be returned, even in subsequent result pages. Additionally, returned (and not returned) results can vary if you repeat search queries. For more information, see [Data Catalog search syntax] (https://cloud.google.com/data-catalog/docs/how-to/search-reference).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.catalog.search = (params) => this._makeRequest('v1/catalog:search', 'POST', params);

    this.entries = {};

    /**
     * Gets an entry by its target resource name. The resource name comes from the source Google Cloud Platform service.
     * @param {string} params.fullyQualifiedName - [Fully Qualified Name (FQN)](https://cloud.google.com//data-catalog/docs/fully-qualified-names) of the resource. FQNs take two forms: * For non-regionalized resources: `{SYSTEM}:{PROJECT}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}` * For regionalized resources: `{SYSTEM}:{PROJECT}.{LOCATION_ID}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}` Example for a DPMS table: `dataproc_metastore:{PROJECT_ID}.{LOCATION_ID}.{INSTANCE_ID}.{DATABASE_ID}.{TABLE_ID}`
     * @param {string} params.linkedResource - The full name of the Google Cloud Platform resource the Data Catalog entry represents. For more information, see [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). Full names are case-sensitive. For example: * `//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}` * `//pubsub.googleapis.com/projects/{PROJECT_ID}/topics/{TOPIC_ID}`
     * @param {string} params.location - Location where the lookup should be performed. Required to lookup entry that is not a part of `DPMS` or `DATAPLEX` `integrated_system` using its `fully_qualified_name`. Ignored in other cases.
     * @param {string} params.project - Project where the lookup should be performed. Required to lookup entry that is not a part of `DPMS` or `DATAPLEX` `integrated_system` using its `fully_qualified_name`. Ignored in other cases.
     * @param {string} params.sqlResource - The SQL name of the entry. SQL names are case-sensitive. Examples: * `pubsub.topic.{PROJECT_ID}.{TOPIC_ID}` * `pubsub.topic.{PROJECT_ID}.`\``{TOPIC.ID.SEPARATED.WITH.DOTS}`\` * `bigquery.table.{PROJECT_ID}.{DATASET_ID}.{TABLE_ID}` * `bigquery.dataset.{PROJECT_ID}.{DATASET_ID}` * `datacatalog.entry.{PROJECT_ID}.{LOCATION_ID}.{ENTRY_GROUP_ID}.{ENTRY_ID}` Identifiers (`*_ID`) should comply with the [Lexical structure in GoogleSQL] (https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical).
     * @return {object} The API response object.
     */
    this.entries.lookup = (params) => this._makeRequest('v1/entries:lookup', 'GET', params);

    this.organizations = {};

    this.organizations.locations = {};

    /**
     * Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project.
     * @param {string} params.name - (Required) Required. The organization or project whose config is being specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.setConfig = (params) => this._makeRequest('v1/{+name}:setConfig', 'POST', params);

    /**
     * Retrieves the configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization, including all the projects under it which have a separate configuration set.
     * @param {string} params.name - (Required) Required. The organization whose config is being retrieved.
     * @return {object} The API response object.
     */
    this.organizations.locations.retrieveConfig = (params) => this._makeRequest('v1/{+name}:retrieveConfig', 'GET', params);

    /**
     * Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project. If there is no specific configuration set for the resource, the setting is checked hierarchicahlly through the ancestors of the resource, starting from the resource itself.
     * @param {string} params.name - (Required) Required. The resource whose effective config is being retrieved.
     * @return {object} The API response object.
     */
    this.organizations.locations.retrieveEffectiveConfig = (params) => this._makeRequest('v1/{+name}:retrieveEffectiveConfig', 'GET', params);
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
