
/**
 * Google Apps Script client library for the Cloud Dataplex API
 * Documentation URL: https://cloud.google.com/dataplex/docs
 * @class
 */
class Dataplex {
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
    this._rootUrl = 'https://dataplex.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Looks up an entry by name using the permission on the source system.
     * @param {string} params.aspectTypes - Optional. Limits the aspects returned to the provided aspect types. It only works for CUSTOM view.
     * @param {string} params.entry - Required. The resource name of the Entry: projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}.
     * @param {string} params.name - (Required) Required. The project to which the request should be attributed in the following form: projects/{project}/locations/{location}.
     * @param {string} params.paths - Optional. Limits the aspects returned to those associated with the provided paths within the Entry. It only works for CUSTOM view.
     * @param {string} params.view - Optional. View to control which parts of an entry the service should return.
     * @return {object} The API response object.
     */
    this.projects.locations.lookupEntry = (params) => this._makeRequest('v1/{+name}:lookupEntry', 'GET', params);

    /**
     * Searches for Entries matching the given query and scope.
     * @param {string} params.name - (Required) Required. The project to which the request should be attributed in the following form: projects/{project}/locations/global.
     * @param {string} params.orderBy - Optional. Specifies the ordering of results. Supported values are: relevance last_modified_timestamp last_modified_timestamp asc
     * @param {integer} params.pageSize - Optional. Number of results in the search page. If <=0, then defaults to 10. Max limit for page_size is 1000. Throws an invalid argument for page_size > 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous SearchEntries call. Provide this to retrieve the subsequent page.
     * @param {string} params.query - Required. The query against which entries in scope should be matched. The query syntax is defined in Search syntax for Dataplex Universal Catalog (https://cloud.google.com/dataplex/docs/search-syntax).
     * @param {string} params.scope - Optional. The scope under which the search should be operating. It must either be organizations/ or projects/. If it is unspecified, it defaults to the organization where the project provided in name is located.
     * @param {boolean} params.semanticSearch - Optional. Specifies whether the search should understand the meaning and intent behind the query, rather than just matching keywords.
     * @return {object} The API response object.
     */
    this.projects.locations.searchEntries = (params) => this._makeRequest('v1/{+name}:searchEntries', 'POST', params);

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
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
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.entryTypes = {};

    /**
     * Creates an EntryType.
     * @param {string} params.entryTypeId - Required. EntryType identifier.
     * @param {string} params.parent - (Required) Required. The resource name of the EntryType, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region.
     * @param {boolean} params.validateOnly - Optional. The service validates the request without performing any mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryTypes.create = (params) => this._makeRequest('v1/{+parent}/entryTypes', 'POST', params);

    /**
     * Updates an EntryType.
     * @param {string} params.name - (Required) Output only. The relative resource name of the EntryType, of the form: projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id}.
     * @param {string} params.updateMask - Required. Mask of fields to update.
     * @param {boolean} params.validateOnly - Optional. The service validates the request without performing any mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryTypes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an EntryType.
     * @param {string} params.etag - Optional. If the client provided etag value does not match the current etag value, the DeleteEntryTypeRequest method returns an ABORTED error response.
     * @param {string} params.name - (Required) Required. The resource name of the EntryType: projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.entryTypes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists EntryType resources in a project and location.
     * @param {string} params.filter - Optional. Filter request. Filters are case-sensitive. The service supports the following formats: labels.key1 = "value1" labels:key1 name = "value"These restrictions can be conjoined with AND, OR, and NOT conjunctions.
     * @param {string} params.orderBy - Optional. Orders the result by name or create_time fields. If not specified, the ordering is undefined.
     * @param {integer} params.pageSize - Optional. Maximum number of EntryTypes to return. The service may return fewer than this value. If unspecified, the service returns at most 10 EntryTypes. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListEntryTypes call. Provide this to retrieve the subsequent page. When paginating, all other parameters you provided to ListEntryTypes must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the EntryType location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.entryTypes.list = (params) => this._makeRequest('v1/{+parent}/entryTypes', 'GET', params);

    /**
     * Gets an EntryType.
     * @param {string} params.name - (Required) Required. The resource name of the EntryType: projects/{project_number}/locations/{location_id}/entryTypes/{entry_type_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.entryTypes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryTypes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.entryTypes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryTypes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.aspectTypes = {};

    /**
     * Creates an AspectType.
     * @param {string} params.aspectTypeId - Required. AspectType identifier.
     * @param {string} params.parent - (Required) Required. The resource name of the AspectType, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region.
     * @param {boolean} params.validateOnly - Optional. The service validates the request without performing any mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.aspectTypes.create = (params) => this._makeRequest('v1/{+parent}/aspectTypes', 'POST', params);

    /**
     * Updates an AspectType.
     * @param {string} params.name - (Required) Output only. The relative resource name of the AspectType, of the form: projects/{project_number}/locations/{location_id}/aspectTypes/{aspect_type_id}.
     * @param {string} params.updateMask - Required. Mask of fields to update.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.aspectTypes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an AspectType.
     * @param {string} params.etag - Optional. If the client provided etag value does not match the current etag value, the DeleteAspectTypeRequest method returns an ABORTED error response.
     * @param {string} params.name - (Required) Required. The resource name of the AspectType: projects/{project_number}/locations/{location_id}/aspectTypes/{aspect_type_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.aspectTypes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists AspectType resources in a project and location.
     * @param {string} params.filter - Optional. Filter request. Filters are case-sensitive. The service supports the following formats: labels.key1 = "value1" labels:key1 name = "value"These restrictions can be conjoined with AND, OR, and NOT conjunctions.
     * @param {string} params.orderBy - Optional. Orders the result by name or create_time fields. If not specified, the ordering is undefined.
     * @param {integer} params.pageSize - Optional. Maximum number of AspectTypes to return. The service may return fewer than this value. If unspecified, the service returns at most 10 AspectTypes. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListAspectTypes call. Provide this to retrieve the subsequent page. When paginating, all other parameters you provide to ListAspectTypes must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the AspectType location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.aspectTypes.list = (params) => this._makeRequest('v1/{+parent}/aspectTypes', 'GET', params);

    /**
     * Gets an AspectType.
     * @param {string} params.name - (Required) Required. The resource name of the AspectType: projects/{project_number}/locations/{location_id}/aspectTypes/{aspect_type_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.aspectTypes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.aspectTypes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.aspectTypes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.aspectTypes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.entryGroups = {};

    /**
     * Creates an EntryGroup.
     * @param {string} params.entryGroupId - Required. EntryGroup identifier.
     * @param {string} params.parent - (Required) Required. The resource name of the entryGroup, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region.
     * @param {boolean} params.validateOnly - Optional. The service validates the request without performing any mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.create = (params) => this._makeRequest('v1/{+parent}/entryGroups', 'POST', params);

    /**
     * Updates an EntryGroup.
     * @param {string} params.name - (Required) Output only. The relative resource name of the EntryGroup, in the format projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}.
     * @param {string} params.updateMask - Required. Mask of fields to update.
     * @param {boolean} params.validateOnly - Optional. The service validates the request, without performing any mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an EntryGroup.
     * @param {string} params.etag - Optional. If the client provided etag value does not match the current etag value, the DeleteEntryGroupRequest method returns an ABORTED error response.
     * @param {string} params.name - (Required) Required. The resource name of the EntryGroup: projects/{project_number}/locations/{location_id}/entryGroups/{entry_group_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists EntryGroup resources in a project and location.
     * @param {string} params.filter - Optional. Filter request.
     * @param {string} params.orderBy - Optional. Order by fields for the result.
     * @param {integer} params.pageSize - Optional. Maximum number of EntryGroups to return. The service may return fewer than this value. If unspecified, the service returns at most 10 EntryGroups. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListEntryGroups call. Provide this to retrieve the subsequent page. When paginating, all other parameters you provide to ListEntryGroups must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the entryGroup location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.list = (params) => this._makeRequest('v1/{+parent}/entryGroups', 'GET', params);

    /**
     * Gets an EntryGroup.
     * @param {string} params.name - (Required) Required. The resource name of the EntryGroup: projects/{project_number}/locations/{location_id}/entryGroups/{entry_group_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.entryGroups.entries = {};

    /**
     * Creates an Entry.
     * @param {string} params.entryId - Required. Entry identifier. It has to be unique within an Entry Group.Entries corresponding to Google Cloud resources use an Entry ID format based on full resource names (https://cloud.google.com/apis/design/resource_names#full_resource_name). The format is a full resource name of the resource without the prefix double slashes in the API service name part of the full resource name. This allows retrieval of entries using their associated resource name.For example, if the full resource name of a resource is //library.googleapis.com/shelves/shelf1/books/book2, then the suggested entry_id is library.googleapis.com/shelves/shelf1/books/book2.It is also suggested to follow the same convention for entries corresponding to resources from providers or systems other than Google Cloud.The maximum size of the field is 4000 characters.
     * @param {string} params.parent - (Required) Required. The resource name of the parent Entry Group: projects/{project}/locations/{location}/entryGroups/{entry_group}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.create = (params) => this._makeRequest('v1/{+parent}/entries', 'POST', params);

    /**
     * Updates an Entry.
     * @param {boolean} params.allowMissing - Optional. If set to true and the entry doesn't exist, the service will create it.
     * @param {string} params.aspectKeys - Optional. The map keys of the Aspects which the service should modify. It supports the following syntaxes: - matches an aspect of the given type and empty path. @path - matches an aspect of the given type and specified path. For example, to attach an aspect to a field that is specified by the schema aspect, the path should have the format Schema.. @* - matches aspects of the given type for all paths. *@path - matches aspects of all types on the given path.The service will not remove existing aspects matching the syntax unless delete_missing_aspects is set to true.If this field is left empty, the service treats it as specifying exactly those Aspects present in the request.
     * @param {boolean} params.deleteMissingAspects - Optional. If set to true and the aspect_keys specify aspect ranges, the service deletes any existing aspects from that range that weren't provided in the request.
     * @param {string} params.name - (Required) Identifier. The relative resource name of the entry, in the format projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}.
     * @param {string} params.updateMask - Optional. Mask of fields to update. To update Aspects, the update_mask must contain the value "aspects".If the update_mask is empty, the service will update all modifiable fields present in the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an Entry.
     * @param {string} params.name - (Required) Required. The resource name of the Entry: projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists Entries within an EntryGroup.
     * @param {string} params.filter - Optional. A filter on the entries to return. Filters are case-sensitive. You can filter the request by the following fields: entry_type entry_source.display_nameThe comparison operators are =, !=, <, >, <=, >=. The service compares strings according to lexical order.You can use the logical operators AND, OR, NOT in the filter.You can use Wildcard "*", but for entry_type you need to provide the full project id or number.Example filter expressions: "entry_source.display_name=AnExampleDisplayName" "entry_type=projects/example-project/locations/global/entryTypes/example-entry_type" "entry_type=projects/example-project/locations/us/entryTypes/a* OR entry_type=projects/another-project/locations/*" "NOT entry_source.display_name=AnotherExampleDisplayName"
     * @param {integer} params.pageSize - Optional. Number of items to return per page. If there are remaining results, the service returns a next_page_token. If unspecified, the service returns at most 10 Entries. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListEntries call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The resource name of the parent Entry Group: projects/{project}/locations/{location}/entryGroups/{entry_group}.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.list = (params) => this._makeRequest('v1/{+parent}/entries', 'GET', params);

    /**
     * Gets an Entry.
     * @param {string} params.aspectTypes - Optional. Limits the aspects returned to the provided aspect types. It only works for CUSTOM view.
     * @param {string} params.name - (Required) Required. The resource name of the Entry: projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}.
     * @param {string} params.paths - Optional. Limits the aspects returned to those associated with the provided paths within the Entry. It only works for CUSTOM view.
     * @param {string} params.view - Optional. View to control which parts of an entry the service should return.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.entryGroups.entryLinks = {};

    /**
     * Creates an Entry Link.
     * @param {string} params.entryLinkId - Required. Entry Link identifier * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the EntryGroup.
     * @param {string} params.parent - (Required) Required. The resource name of the parent Entry Group: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entryLinks.create = (params) => this._makeRequest('v1/{+parent}/entryLinks', 'POST', params);

    /**
     * Deletes an Entry Link.
     * @param {string} params.name - (Required) Required. The resource name of the Entry Link: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entryLinks/{entry_link_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entryLinks.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets an Entry Link.
     * @param {string} params.name - (Required) Required. The resource name of the Entry Link: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entryLinks/{entry_link_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.entryGroups.entryLinks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.metadataJobs = {};

    /**
     * Creates a metadata job. For example, use a metadata job to import metadata from a third-party system into Dataplex Universal Catalog.
     * @param {string} params.metadataJobId - Optional. The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-.
     * @param {string} params.parent - (Required) Required. The resource name of the parent location, in the format projects/{project_id_or_number}/locations/{location_id}
     * @param {boolean} params.validateOnly - Optional. The service validates the request without performing any mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataJobs.create = (params) => this._makeRequest('v1/{+parent}/metadataJobs', 'POST', params);

    /**
     * Gets a metadata job.
     * @param {string} params.name - (Required) Required. The resource name of the metadata job, in the format projects/{project_id_or_number}/locations/{location_id}/metadataJobs/{metadata_job_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists metadata jobs.
     * @param {string} params.filter - Optional. Filter request. Filters are case-sensitive. The service supports the following formats: labels.key1 = "value1" labels:key1 name = "value"You can combine filters with AND, OR, and NOT operators.
     * @param {string} params.orderBy - Optional. The field to sort the results by, either name or create_time. If not specified, the ordering is undefined.
     * @param {integer} params.pageSize - Optional. The maximum number of metadata jobs to return. The service might return fewer jobs than this value. If unspecified, at most 10 jobs are returned. The maximum value is 1,000.
     * @param {string} params.pageToken - Optional. The page token received from a previous ListMetadataJobs call. Provide this token to retrieve the subsequent page of results. When paginating, all other parameters that are provided to the ListMetadataJobs request must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent location, in the format projects/{project_id_or_number}/locations/{location_id}
     * @return {object} The API response object.
     */
    this.projects.locations.metadataJobs.list = (params) => this._makeRequest('v1/{+parent}/metadataJobs', 'GET', params);

    /**
     * Cancels a metadata job.If you cancel a metadata import job that is in progress, the changes in the job might be partially applied. We recommend that you reset the state of the entry groups in your project by running another metadata job that reverts the changes from the canceled job.
     * @param {string} params.name - (Required) Required. The resource name of the job, in the format projects/{project_id_or_number}/locations/{location_id}/metadataJobs/{metadata_job_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.metadataJobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.glossaries = {};

    /**
     * Creates a new Glossary resource.
     * @param {string} params.glossaryId - Required. Glossary ID: Glossary identifier.
     * @param {string} params.parent - (Required) Required. The parent resource where this Glossary will be created. Format: projects/{project_id_or_number}/locations/{location_id} where location_id refers to a Google Cloud region.
     * @param {boolean} params.validateOnly - Optional. Validates the request without actually creating the Glossary. Default: false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.create = (params) => this._makeRequest('v1/{+parent}/glossaries', 'POST', params);

    /**
     * Updates a Glossary resource.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of the Glossary. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {boolean} params.validateOnly - Optional. Validates the request without actually updating the Glossary. Default: false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a Glossary resource. All the categories and terms within the Glossary must be deleted before the Glossary can be deleted.
     * @param {string} params.etag - Optional. The etag of the Glossary. If this is provided, it must match the server's etag. If the etag is provided and does not match the server-computed etag, the request must fail with a ABORTED error code.
     * @param {string} params.name - (Required) Required. The name of the Glossary to delete. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a Glossary resource.
     * @param {string} params.name - (Required) Required. The name of the Glossary to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists Glossary resources in a project and location.
     * @param {string} params.filter - Optional. Filter expression that filters Glossaries listed in the response. Filters on proto fields of Glossary are supported. Examples of using a filter are: - display_name="my-glossary" - categoryCount=1 - termCount=0
     * @param {string} params.orderBy - Optional. Order by expression that orders Glossaries listed in the response. Order by fields are: name or create_time for the result. If not specified, the ordering is undefined.
     * @param {integer} params.pageSize - Optional. The maximum number of Glossaries to return. The service may return fewer than this value. If unspecified, at most 50 Glossaries will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous ListGlossaries call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListGlossaries must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which has this collection of Glossaries. Format: projects/{project_id_or_number}/locations/{location_id} where location_id refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.list = (params) => this._makeRequest('v1/{+parent}/glossaries', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.glossaries.categories = {};

    /**
     * Creates a new GlossaryCategory resource.
     * @param {string} params.categoryId - Required. GlossaryCategory identifier.
     * @param {string} params.parent - (Required) Required. The parent resource where this GlossaryCategory will be created. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} where locationId refers to a Google Cloud region.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.categories.create = (params) => this._makeRequest('v1/{+parent}/categories', 'POST', params);

    /**
     * Updates a GlossaryCategory resource.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of the GlossaryCategory. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id}
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.categories.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a GlossaryCategory resource. All the GlossaryCategories and GlossaryTerms nested directly under the specified GlossaryCategory will be moved one level up to the parent in the hierarchy.
     * @param {string} params.name - (Required) Required. The name of the GlossaryCategory to delete. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id}
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.categories.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a GlossaryCategory resource.
     * @param {string} params.name - (Required) Required. The name of the GlossaryCategory to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id}
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.categories.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists GlossaryCategory resources in a Glossary.
     * @param {string} params.filter - Optional. Filter expression that filters GlossaryCategories listed in the response. Filters are supported on the following fields: - immediate_parentExamples of using a filter are: - immediate_parent="projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}" - immediate_parent="projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id}"This will only return the GlossaryCategories that are directly nested under the specified parent.
     * @param {string} params.orderBy - Optional. Order by expression that orders GlossaryCategories listed in the response. Order by fields are: name or create_time for the result. If not specified, the ordering is undefined.
     * @param {integer} params.pageSize - Optional. The maximum number of GlossaryCategories to return. The service may return fewer than this value. If unspecified, at most 50 GlossaryCategories will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous ListGlossaryCategories call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListGlossaryCategories must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which has this collection of GlossaryCategories. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} Location is the Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.categories.list = (params) => this._makeRequest('v1/{+parent}/categories', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.categories.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.categories.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.categories.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.glossaries.terms = {};

    /**
     * Creates a new GlossaryTerm resource.
     * @param {string} params.parent - (Required) Required. The parent resource where the GlossaryTerm will be created. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} where location_id refers to a Google Cloud region.
     * @param {string} params.termId - Required. GlossaryTerm identifier.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.terms.create = (params) => this._makeRequest('v1/{+parent}/terms', 'POST', params);

    /**
     * Updates a GlossaryTerm resource.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of the GlossaryTerm. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/terms/{term_id}
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.terms.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a GlossaryTerm resource.
     * @param {string} params.name - (Required) Required. The name of the GlossaryTerm to delete. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/terms/{term_id}
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.terms.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a GlossaryTerm resource.
     * @param {string} params.name - (Required) Required. The name of the GlossaryTerm to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/terms/{term_id}
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.terms.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists GlossaryTerm resources in a Glossary.
     * @param {string} params.filter - Optional. Filter expression that filters GlossaryTerms listed in the response. Filters are supported on the following fields: - immediate_parentExamples of using a filter are: - immediate_parent="projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}" - immediate_parent="projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id}/categories/{category_id}"This will only return the GlossaryTerms that are directly nested under the specified parent.
     * @param {string} params.orderBy - Optional. Order by expression that orders GlossaryTerms listed in the response. Order by fields are: name or create_time for the result. If not specified, the ordering is undefined.
     * @param {integer} params.pageSize - Optional. The maximum number of GlossaryTerms to return. The service may return fewer than this value. If unspecified, at most 50 GlossaryTerms will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous ListGlossaryTerms call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListGlossaryTerms must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which has this collection of GlossaryTerms. Format: projects/{project_id_or_number}/locations/{location_id}/glossaries/{glossary_id} where location_id refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.terms.list = (params) => this._makeRequest('v1/{+parent}/terms', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.terms.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.terms.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.terms.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.lakes = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates a lake resource.
     * @param {string} params.lakeId - Required. Lake identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the customer project / location.
     * @param {string} params.parent - (Required) Required. The resource name of the lake location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.create = (params) => this._makeRequest('v1/{+parent}/lakes', 'POST', params);

    /**
     * Updates a lake resource.
     * @param {string} params.name - (Required) Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
     * @param {string} params.updateMask - Required. Mask of fields to update.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a lake resource. All zones within the lake must be deleted before the lake can be deleted.
     * @param {string} params.name - (Required) Required. The resource name of the lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists lake resources in a project and location.
     * @param {string} params.filter - Optional. Filter request.
     * @param {string} params.orderBy - Optional. Order by fields for the result.
     * @param {integer} params.pageSize - Optional. Maximum number of Lakes to return. The service may return fewer than this value. If unspecified, at most 10 lakes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListLakes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListLakes must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the lake location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.list = (params) => this._makeRequest('v1/{+parent}/lakes', 'GET', params);

    /**
     * Retrieves a lake resource.
     * @param {string} params.name - (Required) Required. The resource name of the lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.lakes.zones = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates a zone resource within a lake.
     * @param {string} params.parent - (Required) Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {string} params.zoneId - Required. Zone identifier. This ID will be used to generate names such as database and dataset names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique across all lakes from all locations in a project. * Must not be one of the reserved IDs (i.e. "default", "global-temp")
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.create = (params) => this._makeRequest('v1/{+parent}/zones', 'POST', params);

    /**
     * Updates a zone resource.
     * @param {string} params.name - (Required) Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.
     * @param {string} params.updateMask - Required. Mask of fields to update.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a zone resource. All assets within a zone must be deleted before the zone can be deleted.
     * @param {string} params.name - (Required) Required. The resource name of the zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists zone resources in a lake.
     * @param {string} params.filter - Optional. Filter request.
     * @param {string} params.orderBy - Optional. Order by fields for the result.
     * @param {integer} params.pageSize - Optional. Maximum number of zones to return. The service may return fewer than this value. If unspecified, at most 10 zones will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.list = (params) => this._makeRequest('v1/{+parent}/zones', 'GET', params);

    /**
     * Retrieves a zone resource.
     * @param {string} params.name - (Required) Required. The resource name of the zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.lakes.zones.assets = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.assets.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.assets.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.assets.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates an asset resource.
     * @param {string} params.assetId - Required. Asset identifier. This ID will be used to generate names such as table names when publishing metadata to Hive Metastore and BigQuery. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must end with a number or a letter. * Must be between 1-63 characters. * Must be unique within the zone.
     * @param {string} params.parent - (Required) Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.assets.create = (params) => this._makeRequest('v1/{+parent}/assets', 'POST', params);

    /**
     * Updates an asset resource.
     * @param {string} params.name - (Required) Output only. The relative resource name of the asset, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.
     * @param {string} params.updateMask - Required. Mask of fields to update.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.assets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an asset resource. The referenced storage resource is detached (default) or deleted based on the associated Lifecycle policy.
     * @param {string} params.name - (Required) Required. The resource name of the asset: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.assets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists asset resources in a zone.
     * @param {string} params.filter - Optional. Filter request.
     * @param {string} params.orderBy - Optional. Order by fields for the result.
     * @param {integer} params.pageSize - Optional. Maximum number of asset to return. The service may return fewer than this value. If unspecified, at most 10 assets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListAssets call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssets must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.assets.list = (params) => this._makeRequest('v1/{+parent}/assets', 'GET', params);

    /**
     * Retrieves an asset resource.
     * @param {string} params.name - (Required) Required. The resource name of the asset: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.assets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.lakes.zones.assets.actions = {};

    /**
     * Lists action resources in an asset.
     * @param {integer} params.pageSize - Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListAssetActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssetActions must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent asset: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/assets/{asset_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.assets.actions.list = (params) => this._makeRequest('v1/{+parent}/actions', 'GET', params);

    this.projects.locations.lakes.zones.entities = {};

    /**
     * Create a metadata entity.
     * @param {string} params.parent - (Required) Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.entities.create = (params) => this._makeRequest('v1/{+parent}/entities', 'POST', params);

    /**
     * Update a metadata entity. Only supports full resource update.
     * @param {string} params.name - (Required) Output only. The resource name of the entity, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{id}.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.entities.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Delete a metadata entity.
     * @param {string} params.etag - Required. The etag associated with the entity, which can be retrieved with a GetEntity request.
     * @param {string} params.name - (Required) Required. The resource name of the entity: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.entities.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Get a metadata entity.
     * @param {string} params.name - (Required) Required. The resource name of the entity: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}.
     * @param {string} params.view - Optional. Used to select the subset of entity information to return. Defaults to BASIC.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.entities.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List metadata entities in a zone.
     * @param {string} params.filter - Optional. The following filter parameters can be added to the URL to limit the entities returned by the API: Entity ID: ?filter="id=entityID" Asset ID: ?filter="asset=assetID" Data path ?filter="data_path=gs://my-bucket" Is HIVE compatible: ?filter="hive_compatible=true" Is BigQuery compatible: ?filter="bigquery_compatible=true"
     * @param {integer} params.pageSize - Optional. Maximum number of entities to return. The service may return fewer than this value. If unspecified, 100 entities will be returned by default. The maximum value is 500; larger values will will be truncated to 500.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListEntities call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEntities must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.
     * @param {string} params.view - Required. Specify the entity view to make a partial list request.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.entities.list = (params) => this._makeRequest('v1/{+parent}/entities', 'GET', params);

    this.projects.locations.lakes.zones.entities.partitions = {};

    /**
     * Create a metadata partition.
     * @param {string} params.parent - (Required) Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.entities.partitions.create = (params) => this._makeRequest('v1/{+parent}/partitions', 'POST', params);

    /**
     * Delete a metadata partition.
     * @param {string} params.etag - Optional. The etag associated with the partition.
     * @param {string} params.name - (Required) Required. The resource name of the partition. format: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}/partitions/{partition_value_path}. The {partition_value_path} segment consists of an ordered sequence of partition values separated by "/". All values must be provided.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.entities.partitions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Get a metadata partition of an entity.
     * @param {string} params.name - (Required) Required. The resource name of the partition: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}/partitions/{partition_value_path}. The {partition_value_path} segment consists of an ordered sequence of partition values separated by "/". All values must be provided.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.entities.partitions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List metadata partitions of an entity.
     * @param {string} params.filter - Optional. Filter the partitions returned to the caller using a key value pair expression. Supported operators and syntax: logic operators: AND, OR comparison operators: <, >, >=, <= ,=, != LIKE operators: The right hand of a LIKE operator supports "." and "*" for wildcard searches, for example "value1 LIKE ".*oo.*" parenthetical grouping: ( )Sample filter expression: `?filter="key1 < value1 OR key2 > value2"Notes: Keys to the left of operators are case insensitive. Partition results are sorted first by creation time, then by lexicographic order. Up to 20 key value filter pairs are allowed, but due to performance considerations, only the first 10 will be used as a filter.
     * @param {integer} params.pageSize - Optional. Maximum number of partitions to return. The service may return fewer than this value. If unspecified, 100 partitions will be returned by default. The maximum page size is 500; larger values will will be truncated to 500.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListPartitions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListPartitions must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent entity: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.entities.partitions.list = (params) => this._makeRequest('v1/{+parent}/partitions', 'GET', params);

    this.projects.locations.lakes.zones.actions = {};

    /**
     * Lists action resources in a zone.
     * @param {integer} params.pageSize - Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListZoneActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZoneActions must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent zone: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.zones.actions.list = (params) => this._makeRequest('v1/{+parent}/actions', 'GET', params);

    this.projects.locations.lakes.tasks = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.tasks.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.tasks.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.tasks.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates a task resource within a lake.
     * @param {string} params.parent - (Required) Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
     * @param {string} params.taskId - Required. Task identifier.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.tasks.create = (params) => this._makeRequest('v1/{+parent}/tasks', 'POST', params);

    /**
     * Update the task resource.
     * @param {string} params.name - (Required) Output only. The relative resource name of the task, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/ tasks/{task_id}.
     * @param {string} params.updateMask - Required. Mask of fields to update.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.tasks.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete the task resource.
     * @param {string} params.name - (Required) Required. The resource name of the task: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/task/{task_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.tasks.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists tasks under the given lake.
     * @param {string} params.filter - Optional. Filter request.
     * @param {string} params.orderBy - Optional. Order by fields for the result.
     * @param {integer} params.pageSize - Optional. Maximum number of tasks to return. The service may return fewer than this value. If unspecified, at most 10 tasks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListZones call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListZones must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.tasks.list = (params) => this._makeRequest('v1/{+parent}/tasks', 'GET', params);

    /**
     * Get task resource.
     * @param {string} params.name - (Required) Required. The resource name of the task: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{tasks_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.tasks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Run an on demand execution of a Task.
     * @param {string} params.name - (Required) Required. The resource name of the task: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.tasks.run = (params) => this._makeRequest('v1/{+name}:run', 'POST', params);

    this.projects.locations.lakes.tasks.jobs = {};

    /**
     * Lists Jobs under the given task.
     * @param {integer} params.pageSize - Optional. Maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 10 jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListJobs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListJobs must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent environment: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.tasks.jobs.list = (params) => this._makeRequest('v1/{+parent}/jobs', 'GET', params);

    /**
     * Get job resource.
     * @param {string} params.name - (Required) Required. The resource name of the job: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/tasks/{task_id}/jobs/{job_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.tasks.jobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Cancel jobs running for the task resource.
     * @param {string} params.name - (Required) Required. The resource name of the job: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/task/{task_id}/job/{job_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.tasks.jobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.lakes.environments = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.environments.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.environments.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.environments.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Create an environment resource.
     * @param {string} params.environmentId - Required. Environment identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the lake.
     * @param {string} params.parent - (Required) Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.environments.create = (params) => this._makeRequest('v1/{+parent}/environments', 'POST', params);

    /**
     * Update the environment resource.
     * @param {string} params.name - (Required) Output only. The relative resource name of the environment, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}
     * @param {string} params.updateMask - Required. Mask of fields to update.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.environments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete the environment resource. All the child resources must have been deleted before environment deletion can be initiated.
     * @param {string} params.name - (Required) Required. The resource name of the environment: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environments/{environment_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.environments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists environments under the given lake.
     * @param {string} params.filter - Optional. Filter request.
     * @param {string} params.orderBy - Optional. Order by fields for the result.
     * @param {integer} params.pageSize - Optional. Maximum number of environments to return. The service may return fewer than this value. If unspecified, at most 10 environments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListEnvironments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListEnvironments must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.environments.list = (params) => this._makeRequest('v1/{+parent}/environments', 'GET', params);

    /**
     * Get environment resource.
     * @param {string} params.name - (Required) Required. The resource name of the environment: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environments/{environment_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.environments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.lakes.environments.sessions = {};

    /**
     * Lists session resources in an environment.
     * @param {string} params.filter - Optional. Filter request. The following mode filter is supported to return only the sessions belonging to the requester when the mode is USER and return sessions of all the users when the mode is ADMIN. When no filter is sent default to USER mode. NOTE: When the mode is ADMIN, the requester should have dataplex.environments.listAllSessions permission to list all sessions, in absence of the permission, the request fails.mode = ADMIN | USER
     * @param {integer} params.pageSize - Optional. Maximum number of sessions to return. The service may return fewer than this value. If unspecified, at most 10 sessions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListSessions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListSessions must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent environment: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.environments.sessions.list = (params) => this._makeRequest('v1/{+parent}/sessions', 'GET', params);

    this.projects.locations.lakes.contentitems = {};

    /**
     * Create a content.
     * @param {string} params.parent - (Required) Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.contentitems.create = (params) => this._makeRequest('v1/{+parent}/contentitems', 'POST', params);

    /**
     * Update a content. Only supports full resource update.
     * @param {string} params.name - (Required) Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id}
     * @param {string} params.updateMask - Required. Mask of fields to update.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.contentitems.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a content.
     * @param {string} params.name - (Required) Required. The resource name of the content: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id}
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.contentitems.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Get a content resource.
     * @param {string} params.name - (Required) Required. The resource name of the content: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id}
     * @param {string} params.view - Optional. Specify content view to make a partial request.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.contentitems.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the access control policy for a contentitem resource. A NOT_FOUND error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.Caller must have Google IAM dataplex.content.getIamPolicy permission on the resource.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.contentitems.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Sets the access control policy on the specified contentitem resource. Replaces any existing policy.Caller must have Google IAM dataplex.content.setIamPolicy permission on the resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.contentitems.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (a NOT_FOUND error is not returned).A caller is not required to have Google IAM permission to make this request.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.contentitems.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * List content.
     * @param {string} params.filter - Optional. Filter request. Filters are case-sensitive. The following formats are supported:labels.key1 = "value1" labels:key1 type = "NOTEBOOK" type = "SQL_SCRIPT"These restrictions can be coinjoined with AND, OR and NOT conjunctions.
     * @param {integer} params.pageSize - Optional. Maximum number of content to return. The service may return fewer than this value. If unspecified, at most 10 content will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListContent call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListContent must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.contentitems.list = (params) => this._makeRequest('v1/{+parent}/contentitems', 'GET', params);

    this.projects.locations.lakes.content = {};

    /**
     * Create a content.
     * @param {string} params.parent - (Required) Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.content.create = (params) => this._makeRequest('v1/{+parent}/content', 'POST', params);

    /**
     * Update a content. Only supports full resource update.
     * @param {string} params.name - (Required) Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id}
     * @param {string} params.updateMask - Required. Mask of fields to update.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.content.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a content.
     * @param {string} params.name - (Required) Required. The resource name of the content: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id}
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.content.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Get a content resource.
     * @param {string} params.name - (Required) Required. The resource name of the content: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id}
     * @param {string} params.view - Optional. Specify content view to make a partial request.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.content.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the access control policy for a contentitem resource. A NOT_FOUND error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.Caller must have Google IAM dataplex.content.getIamPolicy permission on the resource.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.content.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Sets the access control policy on the specified contentitem resource. Replaces any existing policy.Caller must have Google IAM dataplex.content.setIamPolicy permission on the resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.content.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (a NOT_FOUND error is not returned).A caller is not required to have Google IAM permission to make this request.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.content.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * List content.
     * @param {string} params.filter - Optional. Filter request. Filters are case-sensitive. The following formats are supported:labels.key1 = "value1" labels:key1 type = "NOTEBOOK" type = "SQL_SCRIPT"These restrictions can be coinjoined with AND, OR and NOT conjunctions.
     * @param {integer} params.pageSize - Optional. Maximum number of content to return. The service may return fewer than this value. If unspecified, at most 10 content will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListContent call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListContent must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent lake: projects/{project_id}/locations/{location_id}/lakes/{lake_id}
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.content.list = (params) => this._makeRequest('v1/{+parent}/content', 'GET', params);

    this.projects.locations.lakes.actions = {};

    /**
     * Lists action resources in a lake.
     * @param {integer} params.pageSize - Optional. Maximum number of actions to return. The service may return fewer than this value. If unspecified, at most 10 actions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListLakeActions call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListLakeActions must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent lake: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.lakes.actions.list = (params) => this._makeRequest('v1/{+parent}/actions', 'GET', params);

    this.projects.locations.dataScans = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataScans.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.dataScans.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataScans.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Creates a DataScan resource.
     * @param {string} params.dataScanId - Required. DataScan identifier. Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter. Must be between 1-63 characters. Must be unique within the customer project / location.
     * @param {string} params.parent - (Required) Required. The resource name of the parent location: projects/{project}/locations/{location_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataScans.create = (params) => this._makeRequest('v1/{+parent}/dataScans', 'POST', params);

    /**
     * Updates a DataScan resource.
     * @param {string} params.name - (Required) Output only. Identifier. The relative resource name of the scan, of the form: projects/{project}/locations/{location_id}/dataScans/{datascan_id}, where project refers to a project_id or project_number and location_id refers to a Google Cloud region.
     * @param {string} params.updateMask - Optional. Mask of fields to update.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataScans.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a DataScan resource.
     * @param {boolean} params.force - Optional. If set to true, any child resources of this data scan will also be deleted. (Otherwise, the request will only work if the data scan has no child resources.)
     * @param {string} params.name - (Required) Required. The resource name of the dataScan: projects/{project}/locations/{location_id}/dataScans/{data_scan_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.dataScans.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a DataScan resource.
     * @param {string} params.name - (Required) Required. The resource name of the dataScan: projects/{project}/locations/{location_id}/dataScans/{data_scan_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region.
     * @param {string} params.view - Optional. Select the DataScan view to return. Defaults to BASIC.
     * @return {object} The API response object.
     */
    this.projects.locations.dataScans.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists DataScans.
     * @param {string} params.filter - Optional. Filter request.
     * @param {string} params.orderBy - Optional. Order by fields (name or create_time) for the result. If not specified, the ordering is undefined.
     * @param {integer} params.pageSize - Optional. Maximum number of dataScans to return. The service may return fewer than this value. If unspecified, at most 500 scans will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListDataScans call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataScans must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent location: projects/{project}/locations/{location_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.dataScans.list = (params) => this._makeRequest('v1/{+parent}/dataScans', 'GET', params);

    /**
     * Runs an on-demand execution of a DataScan
     * @param {string} params.name - (Required) Required. The resource name of the DataScan: projects/{project}/locations/{location_id}/dataScans/{data_scan_id}. where project refers to a project_id or project_number and location_id refers to a Google Cloud region.Only OnDemand data scans are allowed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataScans.run = (params) => this._makeRequest('v1/{+name}:run', 'POST', params);

    /**
     * Generates recommended data quality rules based on the results of a data profiling scan.Use the recommendations to build rules for a data quality scan.
     * @param {string} params.name - (Required) Required. The name must be one of the following: The name of a data scan with at least one successful, completed data profiling job The name of a successful, completed data profiling job (a data scan job where the job type is data profiling)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataScans.generateDataQualityRules = (params) => this._makeRequest('v1/{+name}:generateDataQualityRules', 'POST', params);

    this.projects.locations.dataScans.jobs = {};

    /**
     * Gets a DataScanJob resource.
     * @param {string} params.name - (Required) Required. The resource name of the DataScanJob: projects/{project}/locations/{location_id}/dataScans/{data_scan_id}/jobs/{data_scan_job_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region.
     * @param {string} params.view - Optional. Select the DataScanJob view to return. Defaults to BASIC.
     * @return {object} The API response object.
     */
    this.projects.locations.dataScans.jobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists DataScanJobs under the given DataScan.
     * @param {string} params.filter - Optional. An expression for filtering the results of the ListDataScanJobs request.If unspecified, all datascan jobs will be returned. Multiple filters can be applied (with AND, OR logical operators). Filters are case-sensitive.Allowed fields are: start_time end_timestart_time and end_time expect RFC-3339 formatted strings (e.g. 2018-10-08T18:30:00-07:00).For instance, 'start_time > 2018-10-08T00:00:00.123456789Z AND end_time < 2018-10-09T00:00:00.123456789Z' limits results to DataScanJobs between specified start and end times.
     * @param {integer} params.pageSize - Optional. Maximum number of DataScanJobs to return. The service may return fewer than this value. If unspecified, at most 10 DataScanJobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListDataScanJobs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataScanJobs must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent environment: projects/{project}/locations/{location_id}/dataScans/{data_scan_id} where project refers to a project_id or project_number and location_id refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.dataScans.jobs.list = (params) => this._makeRequest('v1/{+parent}/jobs', 'GET', params);

    /**
     * Generates recommended data quality rules based on the results of a data profiling scan.Use the recommendations to build rules for a data quality scan.
     * @param {string} params.name - (Required) Required. The name must be one of the following: The name of a data scan with at least one successful, completed data profiling job The name of a successful, completed data profiling job (a data scan job where the job type is data profiling)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataScans.jobs.generateDataQualityRules = (params) => this._makeRequest('v1/{+name}:generateDataQualityRules', 'POST', params);

    this.projects.locations.dataTaxonomies = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Create a DataTaxonomy resource.
     * @param {string} params.dataTaxonomyId - Required. DataTaxonomy identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the Project.
     * @param {string} params.parent - (Required)
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.create = (params) => this._makeRequest('v1/{+parent}/dataTaxonomies', 'POST', params);

    /**
     * Updates a DataTaxonomy resource.
     * @param {string} params.name - (Required) Output only. The relative resource name of the DataTaxonomy, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}.
     * @param {string} params.updateMask - Required. Mask of fields to update.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a DataTaxonomy resource. All attributes within the DataTaxonomy must be deleted before the DataTaxonomy can be deleted.
     * @param {string} params.etag - Optional. If the client provided etag value does not match the current etag value,the DeleteDataTaxonomy method returns an ABORTED error.
     * @param {string} params.name - (Required) Required. The resource name of the DataTaxonomy: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists DataTaxonomy resources in a project and location.
     * @param {string} params.filter - Optional. Filter request.
     * @param {string} params.orderBy - Optional. Order by fields for the result.
     * @param {integer} params.pageSize - Optional. Maximum number of DataTaxonomies to return. The service may return fewer than this value. If unspecified, at most 10 DataTaxonomies will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListDataTaxonomies call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataTaxonomies must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the DataTaxonomy location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a Google Cloud region.
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.list = (params) => this._makeRequest('v1/{+parent}/dataTaxonomies', 'GET', params);

    /**
     * Retrieves a DataTaxonomy resource.
     * @param {string} params.name - (Required)
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.dataTaxonomies.attributes = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.attributes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.attributes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.attributes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Create a DataAttribute resource.
     * @param {string} params.dataAttributeId - Required. DataAttribute identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the DataTaxonomy.
     * @param {string} params.parent - (Required) Required. The resource name of the parent data taxonomy projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.attributes.create = (params) => this._makeRequest('v1/{+parent}/attributes', 'POST', params);

    /**
     * Updates a DataAttribute resource.
     * @param {string} params.name - (Required) Output only. The relative resource name of the dataAttribute, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}.
     * @param {string} params.updateMask - Required. Mask of fields to update.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.attributes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a Data Attribute resource.
     * @param {string} params.etag - Optional. If the client provided etag value does not match the current etag value, the DeleteDataAttribute method returns an ABORTED error response.
     * @param {string} params.name - (Required) Required. The resource name of the DataAttribute: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.attributes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists Data Attribute resources in a DataTaxonomy.
     * @param {string} params.filter - Optional. Filter request.
     * @param {string} params.orderBy - Optional. Order by fields for the result.
     * @param {integer} params.pageSize - Optional. Maximum number of DataAttributes to return. The service may return fewer than this value. If unspecified, at most 10 dataAttributes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListDataAttributes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataAttributes must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the DataTaxonomy: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.attributes.list = (params) => this._makeRequest('v1/{+parent}/attributes', 'GET', params);

    /**
     * Retrieves a Data Attribute resource.
     * @param {string} params.name - (Required) Required. The resource name of the dataAttribute: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}
     * @return {object} The API response object.
     */
    this.projects.locations.dataTaxonomies.attributes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.dataAttributeBindings = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataAttributeBindings.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.dataAttributeBindings.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataAttributeBindings.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Create a DataAttributeBinding resource.
     * @param {string} params.dataAttributeBindingId - Required. DataAttributeBinding identifier. * Must contain only lowercase letters, numbers and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the Location.
     * @param {string} params.parent - (Required) Required. The resource name of the parent data taxonomy projects/{project_number}/locations/{location_id}
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataAttributeBindings.create = (params) => this._makeRequest('v1/{+parent}/dataAttributeBindings', 'POST', params);

    /**
     * Updates a DataAttributeBinding resource.
     * @param {string} params.name - (Required) Output only. The relative resource name of the Data Attribute Binding, of the form: projects/{project_number}/locations/{location}/dataAttributeBindings/{data_attribute_binding_id}
     * @param {string} params.updateMask - Required. Mask of fields to update.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataAttributeBindings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a DataAttributeBinding resource. All attributes within the DataAttributeBinding must be deleted before the DataAttributeBinding can be deleted.
     * @param {string} params.etag - Required. If the client provided etag value does not match the current etag value, the DeleteDataAttributeBindingRequest method returns an ABORTED error response. Etags must be used when calling the DeleteDataAttributeBinding.
     * @param {string} params.name - (Required) Required. The resource name of the DataAttributeBinding: projects/{project_number}/locations/{location_id}/dataAttributeBindings/{data_attribute_binding_id}
     * @return {object} The API response object.
     */
    this.projects.locations.dataAttributeBindings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists DataAttributeBinding resources in a project and location.
     * @param {string} params.filter - Optional. Filter request. Filter using resource: filter=resource:"resource-name" Filter using attribute: filter=attributes:"attribute-name" Filter using attribute in paths list: filter=paths.attributes:"attribute-name"
     * @param {string} params.orderBy - Optional. Order by fields for the result.
     * @param {integer} params.pageSize - Optional. Maximum number of DataAttributeBindings to return. The service may return fewer than this value. If unspecified, at most 10 DataAttributeBindings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListDataAttributeBindings call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDataAttributeBindings must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the Location: projects/{project_number}/locations/{location_id}
     * @return {object} The API response object.
     */
    this.projects.locations.dataAttributeBindings.list = (params) => this._makeRequest('v1/{+parent}/dataAttributeBindings', 'GET', params);

    /**
     * Retrieves a DataAttributeBinding resource.
     * @param {string} params.name - (Required) Required. The resource name of the DataAttributeBinding: projects/{project_number}/locations/{location_id}/dataAttributeBindings/{data_attribute_binding_id}
     * @return {object} The API response object.
     */
    this.projects.locations.dataAttributeBindings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.entryLinkTypes = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryLinkTypes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.entryLinkTypes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.entryLinkTypes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.governanceRules = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.governanceRules.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.governanceRules.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.governanceRules.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.dataProducts = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataProducts.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataProducts.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.dataProducts.dataAssets = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataProducts.dataAssets.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataProducts.dataAssets.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.organizations.locations.encryptionConfigs = {};

    /**
     * Create an EncryptionConfig.
     * @param {string} params.encryptionConfigId - Required. The ID of the EncryptionConfig to create. Currently, only a value of "default" is supported.
     * @param {string} params.parent - (Required) Required. The location at which the EncryptionConfig is to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.encryptionConfigs.create = (params) => this._makeRequest('v1/{+parent}/encryptionConfigs', 'POST', params);

    /**
     * Update an EncryptionConfig.
     * @param {string} params.name - (Required) Identifier. The resource name of the EncryptionConfig. Format: organizations/{organization}/locations/{location}/encryptionConfigs/{encryption_config} Global location is not supported.
     * @param {string} params.updateMask - Optional. Mask of fields to update. The service treats an omitted field mask as an implied field mask equivalent to all fields that are populated (have a non-empty value).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.encryptionConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete an EncryptionConfig.
     * @param {string} params.etag - Optional. Etag of the EncryptionConfig. This is a strong etag.
     * @param {string} params.name - (Required) Required. The name of the EncryptionConfig to delete.
     * @return {object} The API response object.
     */
    this.organizations.locations.encryptionConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * List EncryptionConfigs.
     * @param {string} params.filter - Optional. Filter the EncryptionConfigs to be returned. Using bare literals: (These values will be matched anywhere it may appear in the object's field values) * filter=some_value Using fields: (These values will be matched only in the specified field) * filter=some_field=some_value Supported fields: * name, key, create_time, update_time, encryption_state Example: * filter=name=organizations/123/locations/us-central1/encryptionConfigs/test-config conjunctions: (AND, OR, NOT) * filter=name=organizations/123/locations/us-central1/encryptionConfigs/test-config AND mode=CMEK logical operators: (>, <, >=, <=, !=, =, :), * filter=create_time>2024-05-01T00:00:00.000Z
     * @param {string} params.orderBy - Optional. Order by fields for the result.
     * @param {integer} params.pageSize - Optional. Maximum number of EncryptionConfigs to return. The service may return fewer than this value. If unspecified, at most 10 EncryptionConfigs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListEncryptionConfigs call. Provide this to retrieve the subsequent page. When paginating, the parameters - filter and order_by provided to ListEncryptionConfigs must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The location for which the EncryptionConfig is to be listed.
     * @return {object} The API response object.
     */
    this.organizations.locations.encryptionConfigs.list = (params) => this._makeRequest('v1/{+parent}/encryptionConfigs', 'GET', params);

    /**
     * Get an EncryptionConfig.
     * @param {string} params.name - (Required) Required. The name of the EncryptionConfig to fetch.
     * @return {object} The API response object.
     */
    this.organizations.locations.encryptionConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.encryptionConfigs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.organizations.locations.encryptionConfigs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.encryptionConfigs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
