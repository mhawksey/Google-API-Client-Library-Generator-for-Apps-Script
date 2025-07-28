
/**
 * Google Apps Script client library for the Cloud Logging API
 * Documentation URL: https://cloud.google.com/logging/docs/
 * @class
 */
class Logging {
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
    this._rootUrl = 'https://logging.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.locations.buckets = {};

    /**
     * Lists log buckets.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose buckets are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" Note: The locations portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all buckets.
     * @return {object} The API response object.
     */
    this.locations.buckets.list = (params) => this._makeRequest('v2/{+parent}/buckets', 'GET', params);

    /**
     * Gets a log bucket.
     * @param {string} params.name - (Required) Required. The resource name of the bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @return {object} The API response object.
     */
    this.locations.buckets.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.bucketId - Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. Bucket identifiers must start with an alphanumeric character.
     * @param {string} params.parent - (Required) Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.buckets.createAsync = (params) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', params);

    /**
     * Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.updateMask - Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.buckets.updateAsync = (params) => this._makeRequest('v2/{+name}:updateAsync', 'POST', params);

    /**
     * Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.bucketId - Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. Bucket identifiers must start with an alphanumeric character.
     * @param {string} params.parent - (Required) Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.buckets.create = (params) => this._makeRequest('v2/{+parent}/buckets', 'POST', params);

    /**
     * Updates a log bucket.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.updateMask - Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.buckets.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a log bucket.Changes the bucket's lifecycle_state to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all log entries in the bucket will be permanently deleted.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @return {object} The API response object.
     */
    this.locations.buckets.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to undelete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.buckets.undelete = (params) => this._makeRequest('v2/{+name}:undelete', 'POST', params);

    this.locations.buckets.views = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.buckets.views.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.buckets.views.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.buckets.views.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Lists views on a log bucket.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The bucket whose views are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @return {object} The API response object.
     */
    this.locations.buckets.views.list = (params) => this._makeRequest('v2/{+parent}/views', 'GET', params);

    /**
     * Gets a view on a log bucket.
     * @param {string} params.name - (Required) Required. The resource name of the policy: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @return {object} The API response object.
     */
    this.locations.buckets.views.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.
     * @param {string} params.parent - (Required) Required. The bucket in which to create the view `"projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"` For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.viewId - Required. A client-assigned identifier such as "my-view". Identifiers are limited to 100 characters and can include only letters, digits, underscores, and hyphens.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.buckets.views.create = (params) => this._makeRequest('v2/{+parent}/views', 'POST', params);

    /**
     * Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.
     * @param {string} params.name - (Required) Required. The full resource name of the view to update "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in view that need an update. A field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.buckets.views.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.
     * @param {string} params.name - (Required) Required. The full resource name of the view to delete: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @return {object} The API response object.
     */
    this.locations.buckets.views.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.locations.buckets.links = {};

    /**
     * Lists links.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response.
     * @param {string} params.parent - (Required) Required. The parent resource whose links are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @return {object} The API response object.
     */
    this.locations.buckets.links.list = (params) => this._makeRequest('v2/{+parent}/links', 'GET', params);

    /**
     * Gets a link.
     * @param {string} params.name - (Required) Required. The resource name of the link: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]"
     * @return {object} The API response object.
     */
    this.locations.buckets.links.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.
     * @param {string} params.linkId - Required. The ID to use for the link. The link_id can have up to 100 characters. A valid link_id must only have alphanumeric characters and underscores within it.
     * @param {string} params.parent - (Required) Required. The full resource name of the bucket to create a link for. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.buckets.links.create = (params) => this._makeRequest('v2/{+parent}/links', 'POST', params);

    /**
     * Deletes a link. This will also delete the corresponding BigQuery linked dataset.
     * @param {string} params.name - (Required) Required. The full resource name of the link to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]"
     * @return {object} The API response object.
     */
    this.locations.buckets.links.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.exclusions = {};

    /**
     * Lists all the exclusions on the _Default sink in a parent resource.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @return {object} The API response object.
     */
    this.exclusions.list = (params) => this._makeRequest('v2/{+parent}/exclusions', 'GET', params);

    /**
     * Gets the description of an exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @return {object} The API response object.
     */
    this.exclusions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new exclusion in the _Default sink in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
     * @param {string} params.parent - (Required) Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" For examples:"projects/my-logging-project" "organizations/123456789"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.exclusions.create = (params) => this._makeRequest('v2/{+parent}/exclusions', 'POST', params);

    /**
     * Changes one or more properties of an existing exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @param {string} params.updateMask - Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.exclusions.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes an exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @return {object} The API response object.
     */
    this.exclusions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.sinks = {};

    /**
     * Lists sinks.
     * @param {string} params.filter - Optional. A filter expression to constrain the sinks returned. Today, this only supports the following strings: '' 'in_scope("ALL")', 'in_scope("ANCESTOR")', 'in_scope("DEFAULT")'.Description of scopes below. ALL: Includes all of the sinks which can be returned in any other scope. ANCESTOR: Includes intercepting sinks owned by ancestor resources. DEFAULT: Includes sinks owned by parent.When the empty string is provided, then the filter 'in_scope("DEFAULT")' is applied.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @return {object} The API response object.
     */
    this.sinks.list = (params) => this._makeRequest('v2/{+parent}/sinks', 'GET', params);

    /**
     * Gets a sink.
     * @param {string} params.sinkName - (Required) Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @return {object} The API response object.
     */
    this.sinks.get = (params) => this._makeRequest('v2/{+sinkName}', 'GET', params);

    /**
     * Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
     * @param {string} params.customWriterIdentity - Optional. The service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified when you are routing logs to a log bucket that is in a different project than the sink. When not specified, a Logging service account will automatically be generated.
     * @param {string} params.parent - (Required) Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" For examples:"projects/my-project" "organizations/123456789"
     * @param {boolean} params.uniqueWriterIdentity - Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Cloud Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) used by the sinks with the same parent. For more information, see writer_identity in LogSink.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sinks.create = (params) => this._makeRequest('v2/{+parent}/sinks', 'POST', params);

    /**
     * Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @param {string} params.customWriterIdentity - Optional. The service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified when you are routing logs to a log bucket that is in a different project than the sink. When not specified, a Logging service account will automatically be generated.
     * @param {string} params.sinkName - (Required) Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @param {boolean} params.uniqueWriterIdentity - Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) owned by Cloud Logging. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:destination,filter,includeChildrenAt some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sinks.update = (params) => this._makeRequest('v2/{+sinkName}', 'PUT', params);

    /**
     * Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
     * @param {string} params.sinkName - (Required) Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @return {object} The API response object.
     */
    this.sinks.delete = (params) => this._makeRequest('v2/{+sinkName}', 'DELETE', params);

    this.v2 = {};

    /**
     * Gets the Logging CMEK settings for the given resource.Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations, and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
     * @param {string} params.name - (Required) Required. The resource for which to retrieve CMEK settings. "projects/[PROJECT_ID]/cmekSettings" "organizations/[ORGANIZATION_ID]/cmekSettings" "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings" "folders/[FOLDER_ID]/cmekSettings" For example:"organizations/12345/cmekSettings"Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations, and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.
     * @return {object} The API response object.
     */
    this.v2.getCmekSettings = (params) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', params);

    /**
     * Updates the Log Router CMEK settings for the given resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.UpdateCmekSettings fails when any of the following are true: The value of kms_key_name is invalid. The associated service account doesn't have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key. Access to the key is disabled.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
     * @param {string} params.name - (Required) Required. The resource name for the CMEK settings to update. "projects/[PROJECT_ID]/cmekSettings" "organizations/[ORGANIZATION_ID]/cmekSettings" "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings" "folders/[FOLDER_ID]/cmekSettings" For example:"organizations/12345/cmekSettings"Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.
     * @param {string} params.updateMask - Optional. Field mask identifying which fields from cmek_settings should be updated. A field will be overwritten if and only if it is in the update mask. Output only fields cannot be updated.See FieldMask for more information.For example: "updateMask=kmsKeyName"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.v2.updateCmekSettings = (params) => this._makeRequest('v2/{+name}/cmekSettings', 'PATCH', params);

    /**
     * Gets the settings for the given resource.Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.See View default resource settings for Logging (https://cloud.google.com/logging/docs/default-settings#view-org-settings) for more information.
     * @param {string} params.name - (Required) Required. The resource for which to retrieve settings. "projects/[PROJECT_ID]/settings" "organizations/[ORGANIZATION_ID]/settings" "billingAccounts/[BILLING_ACCOUNT_ID]/settings" "folders/[FOLDER_ID]/settings" For example:"organizations/12345/settings"Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.
     * @return {object} The API response object.
     */
    this.v2.getSettings = (params) => this._makeRequest('v2/{+name}/settings', 'GET', params);

    /**
     * Updates the settings for the given resource. This method applies to all feature configurations for organization and folders.UpdateSettings fails when any of the following are true: The value of storage_location either isn't supported by Logging or violates the location OrgPolicy. The default_sink_config field is set, but it has an unspecified filter write mode. The value of kms_key_name is invalid. The associated service account doesn't have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key. Access to the key is disabled.See Configure default settings for organizations and folders (https://cloud.google.com/logging/docs/default-settings) for more information.
     * @param {string} params.name - (Required) Required. The resource name for the settings to update. "organizations/[ORGANIZATION_ID]/settings" "folders/[FOLDER_ID]/settings" For example:"organizations/12345/settings"
     * @param {string} params.updateMask - Optional. Field mask identifying which fields from settings should be updated. A field will be overwritten if and only if it is in the update mask. Output only fields cannot be updated.See FieldMask for more information.For example: "updateMask=kmsKeyName"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.v2.updateSettings = (params) => this._makeRequest('v2/{+name}/settings', 'PATCH', params);

    this.projects = {};

    /**
     * Gets the Logging CMEK settings for the given resource.Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations, and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
     * @param {string} params.name - (Required) Required. The resource for which to retrieve CMEK settings. "projects/[PROJECT_ID]/cmekSettings" "organizations/[ORGANIZATION_ID]/cmekSettings" "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings" "folders/[FOLDER_ID]/cmekSettings" For example:"organizations/12345/cmekSettings"Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations, and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.
     * @return {object} The API response object.
     */
    this.projects.getCmekSettings = (params) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', params);

    /**
     * Gets the settings for the given resource.Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.See View default resource settings for Logging (https://cloud.google.com/logging/docs/default-settings#view-org-settings) for more information.
     * @param {string} params.name - (Required) Required. The resource for which to retrieve settings. "projects/[PROJECT_ID]/settings" "organizations/[ORGANIZATION_ID]/settings" "billingAccounts/[BILLING_ACCOUNT_ID]/settings" "folders/[FOLDER_ID]/settings" For example:"organizations/12345/settings"Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.
     * @return {object} The API response object.
     */
    this.projects.getSettings = (params) => this._makeRequest('v2/{+name}/settings', 'GET', params);

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.projects.locations.buckets = {};

    /**
     * Lists log buckets.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose buckets are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" Note: The locations portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all buckets.
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.list = (params) => this._makeRequest('v2/{+parent}/buckets', 'GET', params);

    /**
     * Gets a log bucket.
     * @param {string} params.name - (Required) Required. The resource name of the bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.bucketId - Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. Bucket identifiers must start with an alphanumeric character.
     * @param {string} params.parent - (Required) Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.createAsync = (params) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', params);

    /**
     * Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.updateMask - Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.updateAsync = (params) => this._makeRequest('v2/{+name}:updateAsync', 'POST', params);

    /**
     * Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.bucketId - Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. Bucket identifiers must start with an alphanumeric character.
     * @param {string} params.parent - (Required) Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.create = (params) => this._makeRequest('v2/{+parent}/buckets', 'POST', params);

    /**
     * Updates a log bucket.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.updateMask - Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a log bucket.Changes the bucket's lifecycle_state to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all log entries in the bucket will be permanently deleted.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to undelete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.undelete = (params) => this._makeRequest('v2/{+name}:undelete', 'POST', params);

    this.projects.locations.buckets.views = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.views.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.views.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.views.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Lists views on a log bucket.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The bucket whose views are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.views.list = (params) => this._makeRequest('v2/{+parent}/views', 'GET', params);

    /**
     * Gets a view on a log bucket.
     * @param {string} params.name - (Required) Required. The resource name of the policy: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.views.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.
     * @param {string} params.parent - (Required) Required. The bucket in which to create the view `"projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"` For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.viewId - Required. A client-assigned identifier such as "my-view". Identifiers are limited to 100 characters and can include only letters, digits, underscores, and hyphens.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.views.create = (params) => this._makeRequest('v2/{+parent}/views', 'POST', params);

    /**
     * Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.
     * @param {string} params.name - (Required) Required. The full resource name of the view to update "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in view that need an update. A field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.views.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.
     * @param {string} params.name - (Required) Required. The full resource name of the view to delete: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.views.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.buckets.views.logs = {};

    /**
     * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource name to list logs for: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]
     * @param {string} params.resourceNames - Optional. List of resource names to list logs for: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]To support legacy queries, it could also be: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]The resource name in the parent field is added to this list.
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.views.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.projects.locations.buckets.links = {};

    /**
     * Lists links.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response.
     * @param {string} params.parent - (Required) Required. The parent resource whose links are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.links.list = (params) => this._makeRequest('v2/{+parent}/links', 'GET', params);

    /**
     * Gets a link.
     * @param {string} params.name - (Required) Required. The resource name of the link: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]"
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.links.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.
     * @param {string} params.linkId - Required. The ID to use for the link. The link_id can have up to 100 characters. A valid link_id must only have alphanumeric characters and underscores within it.
     * @param {string} params.parent - (Required) Required. The full resource name of the bucket to create a link for. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.links.create = (params) => this._makeRequest('v2/{+parent}/links', 'POST', params);

    /**
     * Deletes a link. This will also delete the corresponding BigQuery linked dataset.
     * @param {string} params.name - (Required) Required. The full resource name of the link to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]"
     * @return {object} The API response object.
     */
    this.projects.locations.buckets.links.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.logScopes = {};

    /**
     * Lists log scopes.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose log scopes are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]"
     * @return {object} The API response object.
     */
    this.projects.locations.logScopes.list = (params) => this._makeRequest('v2/{+parent}/logScopes', 'GET', params);

    /**
     * Gets a log scope.
     * @param {string} params.name - (Required) Required. The resource name of the log scope: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/logScopes/[LOG_SCOPE_ID]" For example:"projects/my-project/locations/global/logScopes/my-log-scope"
     * @return {object} The API response object.
     */
    this.projects.locations.logScopes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a log scope.
     * @param {string} params.logScopeId - Required. A client-assigned identifier such as "log-scope". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.
     * @param {string} params.parent - (Required) Required. The parent project in which to create the log scope "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.logScopes.create = (params) => this._makeRequest('v2/{+parent}/logScopes', 'POST', params);

    /**
     * Updates a log scope.
     * @param {string} params.name - (Required) Output only. The resource name of the log scope.Log scopes are only available in the global location. For example:projects/my-project/locations/global/logScopes/my-log-scope
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in log_scope that need an update. A field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=description
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.logScopes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a log scope.
     * @param {string} params.name - (Required) Required. The resource name of the log scope to delete: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/logScopes/[LOG_SCOPE_ID]" For example:"projects/my-project/locations/global/logScopes/my-log-scope"
     * @return {object} The API response object.
     */
    this.projects.locations.logScopes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.savedQueries = {};

    /**
     * Lists the SavedQueries that were created by the user making the request.
     * @param {string} params.filter - Optional. Specifies the type ("Logging" or "OpsAnalytics") and the visibility (PRIVATE or SHARED) of the saved queries to list. If provided, the filter must contain either the type function or a visibility token, or both. If both are chosen, they can be placed in any order, but they must be joined by the AND operator or the empty character.The two supported type function calls are: type("Logging") type("OpsAnalytics")The two supported visibility tokens are: visibility = PRIVATE visibility = SHAREDFor example:type("Logging") AND visibility = PRIVATE visibility=SHARED type("OpsAnalytics") type("OpsAnalytics)" visibility = PRIVATE visibility = SHARED
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource to which the listed queries belong. "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/us-central1" Note: The locations portion of the resource must be specified. To get a list of all saved queries, a wildcard character - can be used for LOCATION_ID, for example: "projects/my-project/locations/-"
     * @return {object} The API response object.
     */
    this.projects.locations.savedQueries.list = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'GET', params);

    /**
     * Returns all data associated with the requested query.
     * @param {string} params.name - (Required) Required. The resource name of the saved query. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For example: "projects/my-project/locations/global/savedQueries/my-saved-query"
     * @return {object} The API response object.
     */
    this.projects.locations.savedQueries.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new SavedQuery for the user making the request.
     * @param {string} params.parent - (Required) Required. The parent resource in which to create the saved query: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/global" "organizations/123456789/locations/us-central1"
     * @param {string} params.savedQueryId - Optional. The ID to use for the saved query, which will become the final component of the saved query's resource name.If the saved_query_id is not provided, the system will generate an alphanumeric ID.The saved_query_id is limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.savedQueries.create = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'POST', params);

    /**
     * Updates an existing SavedQuery.
     * @param {string} params.name - (Required) Output only. Resource name of the saved query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support#bucket-regions)After the saved query is created, the location cannot be changed.If the user doesn't provide a QUERY_ID, the system will generate an alphanumeric ID.
     * @param {string} params.updateMask - Required. A non-empty list of fields to change in the existing saved query. Fields are relative to the saved_query and new values for the fields are taken from the corresponding fields in the SavedQuery included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.To update all mutable fields, specify an update_mask of *.For example, to change the description and query filter text of a saved query, specify an update_mask of "description, query.filter".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.savedQueries.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes an existing SavedQuery that was created by the user making the request.
     * @param {string} params.name - (Required) Required. The full resource name of the saved query to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For example: "projects/my-project/locations/global/savedQueries/my-saved-query"
     * @return {object} The API response object.
     */
    this.projects.locations.savedQueries.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.recentQueries = {};

    /**
     * Lists the RecentQueries that were created by the user making the request.
     * @param {string} params.filter - Optional. Specifies the type ("Logging" or "OpsAnalytics") of the recent queries to list. The only valid value for this field is one of the two allowable type function calls, which are the following: type("Logging") type("OpsAnalytics")
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource to which the listed queries belong. "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example:projects/my-project/locations/us-central1Note: The location portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all recent queries.
     * @return {object} The API response object.
     */
    this.projects.locations.recentQueries.list = (params) => this._makeRequest('v2/{+parent}/recentQueries', 'GET', params);

    this.projects.exclusions = {};

    /**
     * Lists all the exclusions on the _Default sink in a parent resource.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @return {object} The API response object.
     */
    this.projects.exclusions.list = (params) => this._makeRequest('v2/{+parent}/exclusions', 'GET', params);

    /**
     * Gets the description of an exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @return {object} The API response object.
     */
    this.projects.exclusions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new exclusion in the _Default sink in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
     * @param {string} params.parent - (Required) Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" For examples:"projects/my-logging-project" "organizations/123456789"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.exclusions.create = (params) => this._makeRequest('v2/{+parent}/exclusions', 'POST', params);

    /**
     * Changes one or more properties of an existing exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @param {string} params.updateMask - Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.exclusions.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes an exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @return {object} The API response object.
     */
    this.projects.exclusions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.sinks = {};

    /**
     * Lists sinks.
     * @param {string} params.filter - Optional. A filter expression to constrain the sinks returned. Today, this only supports the following strings: '' 'in_scope("ALL")', 'in_scope("ANCESTOR")', 'in_scope("DEFAULT")'.Description of scopes below. ALL: Includes all of the sinks which can be returned in any other scope. ANCESTOR: Includes intercepting sinks owned by ancestor resources. DEFAULT: Includes sinks owned by parent.When the empty string is provided, then the filter 'in_scope("DEFAULT")' is applied.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @return {object} The API response object.
     */
    this.projects.sinks.list = (params) => this._makeRequest('v2/{+parent}/sinks', 'GET', params);

    /**
     * Gets a sink.
     * @param {string} params.sinkName - (Required) Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @return {object} The API response object.
     */
    this.projects.sinks.get = (params) => this._makeRequest('v2/{+sinkName}', 'GET', params);

    /**
     * Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
     * @param {string} params.customWriterIdentity - Optional. The service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified when you are routing logs to a log bucket that is in a different project than the sink. When not specified, a Logging service account will automatically be generated.
     * @param {string} params.parent - (Required) Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" For examples:"projects/my-project" "organizations/123456789"
     * @param {boolean} params.uniqueWriterIdentity - Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Cloud Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) used by the sinks with the same parent. For more information, see writer_identity in LogSink.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sinks.create = (params) => this._makeRequest('v2/{+parent}/sinks', 'POST', params);

    /**
     * Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @param {string} params.customWriterIdentity - Optional. The service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified when you are routing logs to a log bucket that is in a different project than the sink. When not specified, a Logging service account will automatically be generated.
     * @param {string} params.sinkName - (Required) Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @param {boolean} params.uniqueWriterIdentity - Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) owned by Cloud Logging. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:destination,filter,includeChildrenAt some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sinks.update = (params) => this._makeRequest('v2/{+sinkName}', 'PUT', params);

    /**
     * Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @param {string} params.customWriterIdentity - Optional. The service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified when you are routing logs to a log bucket that is in a different project than the sink. When not specified, a Logging service account will automatically be generated.
     * @param {string} params.sinkName - (Required) Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @param {boolean} params.uniqueWriterIdentity - Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) owned by Cloud Logging. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:destination,filter,includeChildrenAt some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sinks.patch = (params) => this._makeRequest('v2/{+sinkName}', 'PATCH', params);

    /**
     * Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
     * @param {string} params.sinkName - (Required) Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @return {object} The API response object.
     */
    this.projects.sinks.delete = (params) => this._makeRequest('v2/{+sinkName}', 'DELETE', params);

    this.projects.logs = {};

    /**
     * Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.
     * @param {string} params.logName - (Required) Required. The resource name of the log to delete: projects/[PROJECT_ID]/logs/[LOG_ID] organizations/[ORGANIZATION_ID]/logs/[LOG_ID] billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID] folders/[FOLDER_ID]/logs/[LOG_ID][LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/123/logs/cloudaudit.googleapis.com%2Factivity".For more information about log names, see LogEntry.
     * @return {object} The API response object.
     */
    this.projects.logs.delete = (params) => this._makeRequest('v2/{+logName}', 'DELETE', params);

    /**
     * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource name to list logs for: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]
     * @param {string} params.resourceNames - Optional. List of resource names to list logs for: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]To support legacy queries, it could also be: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]The resource name in the parent field is added to this list.
     * @return {object} The API response object.
     */
    this.projects.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.projects.metrics = {};

    /**
     * Lists logs-based metrics.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The name of the project containing the metrics: "projects/[PROJECT_ID]"
     * @return {object} The API response object.
     */
    this.projects.metrics.list = (params) => this._makeRequest('v2/{+parent}/metrics', 'GET', params);

    /**
     * Gets a logs-based metric.
     * @param {string} params.metricName - (Required) Required. The resource name of the desired metric: "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
     * @return {object} The API response object.
     */
    this.projects.metrics.get = (params) => this._makeRequest('v2/{+metricName}', 'GET', params);

    /**
     * Creates a logs-based metric.
     * @param {string} params.parent - (Required) Required. The resource name of the project in which to create the metric: "projects/[PROJECT_ID]" The new metric must be provided in the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.metrics.create = (params) => this._makeRequest('v2/{+parent}/metrics', 'POST', params);

    /**
     * Creates or updates a logs-based metric.
     * @param {string} params.metricName - (Required) Required. The resource name of the metric to update: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" The updated metric must be provided in the request and it's name field must be the same as [METRIC_ID] If the metric does not exist in [PROJECT_ID], then a new metric is created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.metrics.update = (params) => this._makeRequest('v2/{+metricName}', 'PUT', params);

    /**
     * Deletes a logs-based metric.
     * @param {string} params.metricName - (Required) Required. The resource name of the metric to delete: "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
     * @return {object} The API response object.
     */
    this.projects.metrics.delete = (params) => this._makeRequest('v2/{+metricName}', 'DELETE', params);

    this.organizations = {};

    /**
     * Gets the Logging CMEK settings for the given resource.Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations, and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
     * @param {string} params.name - (Required) Required. The resource for which to retrieve CMEK settings. "projects/[PROJECT_ID]/cmekSettings" "organizations/[ORGANIZATION_ID]/cmekSettings" "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings" "folders/[FOLDER_ID]/cmekSettings" For example:"organizations/12345/cmekSettings"Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations, and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.
     * @return {object} The API response object.
     */
    this.organizations.getCmekSettings = (params) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', params);

    /**
     * Updates the Log Router CMEK settings for the given resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.UpdateCmekSettings fails when any of the following are true: The value of kms_key_name is invalid. The associated service account doesn't have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key. Access to the key is disabled.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
     * @param {string} params.name - (Required) Required. The resource name for the CMEK settings to update. "projects/[PROJECT_ID]/cmekSettings" "organizations/[ORGANIZATION_ID]/cmekSettings" "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings" "folders/[FOLDER_ID]/cmekSettings" For example:"organizations/12345/cmekSettings"Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.
     * @param {string} params.updateMask - Optional. Field mask identifying which fields from cmek_settings should be updated. A field will be overwritten if and only if it is in the update mask. Output only fields cannot be updated.See FieldMask for more information.For example: "updateMask=kmsKeyName"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.updateCmekSettings = (params) => this._makeRequest('v2/{+name}/cmekSettings', 'PATCH', params);

    /**
     * Gets the settings for the given resource.Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.See View default resource settings for Logging (https://cloud.google.com/logging/docs/default-settings#view-org-settings) for more information.
     * @param {string} params.name - (Required) Required. The resource for which to retrieve settings. "projects/[PROJECT_ID]/settings" "organizations/[ORGANIZATION_ID]/settings" "billingAccounts/[BILLING_ACCOUNT_ID]/settings" "folders/[FOLDER_ID]/settings" For example:"organizations/12345/settings"Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.
     * @return {object} The API response object.
     */
    this.organizations.getSettings = (params) => this._makeRequest('v2/{+name}/settings', 'GET', params);

    /**
     * Updates the settings for the given resource. This method applies to all feature configurations for organization and folders.UpdateSettings fails when any of the following are true: The value of storage_location either isn't supported by Logging or violates the location OrgPolicy. The default_sink_config field is set, but it has an unspecified filter write mode. The value of kms_key_name is invalid. The associated service account doesn't have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key. Access to the key is disabled.See Configure default settings for organizations and folders (https://cloud.google.com/logging/docs/default-settings) for more information.
     * @param {string} params.name - (Required) Required. The resource name for the settings to update. "organizations/[ORGANIZATION_ID]/settings" "folders/[FOLDER_ID]/settings" For example:"organizations/12345/settings"
     * @param {string} params.updateMask - Optional. Field mask identifying which fields from settings should be updated. A field will be overwritten if and only if it is in the update mask. Output only fields cannot be updated.See FieldMask for more information.For example: "updateMask=kmsKeyName"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.updateSettings = (params) => this._makeRequest('v2/{+name}/settings', 'PATCH', params);

    this.organizations.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.organizations.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.organizations.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.organizations.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.organizations.locations.buckets = {};

    /**
     * Lists log buckets.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose buckets are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" Note: The locations portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all buckets.
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.list = (params) => this._makeRequest('v2/{+parent}/buckets', 'GET', params);

    /**
     * Gets a log bucket.
     * @param {string} params.name - (Required) Required. The resource name of the bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.bucketId - Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. Bucket identifiers must start with an alphanumeric character.
     * @param {string} params.parent - (Required) Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.createAsync = (params) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', params);

    /**
     * Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.updateMask - Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.updateAsync = (params) => this._makeRequest('v2/{+name}:updateAsync', 'POST', params);

    /**
     * Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.bucketId - Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. Bucket identifiers must start with an alphanumeric character.
     * @param {string} params.parent - (Required) Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.create = (params) => this._makeRequest('v2/{+parent}/buckets', 'POST', params);

    /**
     * Updates a log bucket.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.updateMask - Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a log bucket.Changes the bucket's lifecycle_state to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all log entries in the bucket will be permanently deleted.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to undelete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.undelete = (params) => this._makeRequest('v2/{+name}:undelete', 'POST', params);

    this.organizations.locations.buckets.views = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.views.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.views.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.views.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Lists views on a log bucket.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The bucket whose views are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.views.list = (params) => this._makeRequest('v2/{+parent}/views', 'GET', params);

    /**
     * Gets a view on a log bucket.
     * @param {string} params.name - (Required) Required. The resource name of the policy: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.views.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.
     * @param {string} params.parent - (Required) Required. The bucket in which to create the view `"projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"` For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.viewId - Required. A client-assigned identifier such as "my-view". Identifiers are limited to 100 characters and can include only letters, digits, underscores, and hyphens.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.views.create = (params) => this._makeRequest('v2/{+parent}/views', 'POST', params);

    /**
     * Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.
     * @param {string} params.name - (Required) Required. The full resource name of the view to update "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in view that need an update. A field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.views.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.
     * @param {string} params.name - (Required) Required. The full resource name of the view to delete: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.views.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.buckets.views.logs = {};

    /**
     * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource name to list logs for: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]
     * @param {string} params.resourceNames - Optional. List of resource names to list logs for: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]To support legacy queries, it could also be: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]The resource name in the parent field is added to this list.
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.views.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.organizations.locations.buckets.links = {};

    /**
     * Lists links.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response.
     * @param {string} params.parent - (Required) Required. The parent resource whose links are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.links.list = (params) => this._makeRequest('v2/{+parent}/links', 'GET', params);

    /**
     * Gets a link.
     * @param {string} params.name - (Required) Required. The resource name of the link: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]"
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.links.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.
     * @param {string} params.linkId - Required. The ID to use for the link. The link_id can have up to 100 characters. A valid link_id must only have alphanumeric characters and underscores within it.
     * @param {string} params.parent - (Required) Required. The full resource name of the bucket to create a link for. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.links.create = (params) => this._makeRequest('v2/{+parent}/links', 'POST', params);

    /**
     * Deletes a link. This will also delete the corresponding BigQuery linked dataset.
     * @param {string} params.name - (Required) Required. The full resource name of the link to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]"
     * @return {object} The API response object.
     */
    this.organizations.locations.buckets.links.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.logScopes = {};

    /**
     * Lists log scopes.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose log scopes are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]"
     * @return {object} The API response object.
     */
    this.organizations.locations.logScopes.list = (params) => this._makeRequest('v2/{+parent}/logScopes', 'GET', params);

    /**
     * Gets a log scope.
     * @param {string} params.name - (Required) Required. The resource name of the log scope: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/logScopes/[LOG_SCOPE_ID]" For example:"projects/my-project/locations/global/logScopes/my-log-scope"
     * @return {object} The API response object.
     */
    this.organizations.locations.logScopes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a log scope.
     * @param {string} params.logScopeId - Required. A client-assigned identifier such as "log-scope". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.
     * @param {string} params.parent - (Required) Required. The parent project in which to create the log scope "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.logScopes.create = (params) => this._makeRequest('v2/{+parent}/logScopes', 'POST', params);

    /**
     * Updates a log scope.
     * @param {string} params.name - (Required) Output only. The resource name of the log scope.Log scopes are only available in the global location. For example:projects/my-project/locations/global/logScopes/my-log-scope
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in log_scope that need an update. A field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=description
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.logScopes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a log scope.
     * @param {string} params.name - (Required) Required. The resource name of the log scope to delete: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/logScopes/[LOG_SCOPE_ID]" For example:"projects/my-project/locations/global/logScopes/my-log-scope"
     * @return {object} The API response object.
     */
    this.organizations.locations.logScopes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.savedQueries = {};

    /**
     * Lists the SavedQueries that were created by the user making the request.
     * @param {string} params.filter - Optional. Specifies the type ("Logging" or "OpsAnalytics") and the visibility (PRIVATE or SHARED) of the saved queries to list. If provided, the filter must contain either the type function or a visibility token, or both. If both are chosen, they can be placed in any order, but they must be joined by the AND operator or the empty character.The two supported type function calls are: type("Logging") type("OpsAnalytics")The two supported visibility tokens are: visibility = PRIVATE visibility = SHAREDFor example:type("Logging") AND visibility = PRIVATE visibility=SHARED type("OpsAnalytics") type("OpsAnalytics)" visibility = PRIVATE visibility = SHARED
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource to which the listed queries belong. "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/us-central1" Note: The locations portion of the resource must be specified. To get a list of all saved queries, a wildcard character - can be used for LOCATION_ID, for example: "projects/my-project/locations/-"
     * @return {object} The API response object.
     */
    this.organizations.locations.savedQueries.list = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'GET', params);

    /**
     * Returns all data associated with the requested query.
     * @param {string} params.name - (Required) Required. The resource name of the saved query. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For example: "projects/my-project/locations/global/savedQueries/my-saved-query"
     * @return {object} The API response object.
     */
    this.organizations.locations.savedQueries.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new SavedQuery for the user making the request.
     * @param {string} params.parent - (Required) Required. The parent resource in which to create the saved query: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/global" "organizations/123456789/locations/us-central1"
     * @param {string} params.savedQueryId - Optional. The ID to use for the saved query, which will become the final component of the saved query's resource name.If the saved_query_id is not provided, the system will generate an alphanumeric ID.The saved_query_id is limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.savedQueries.create = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'POST', params);

    /**
     * Updates an existing SavedQuery.
     * @param {string} params.name - (Required) Output only. Resource name of the saved query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support#bucket-regions)After the saved query is created, the location cannot be changed.If the user doesn't provide a QUERY_ID, the system will generate an alphanumeric ID.
     * @param {string} params.updateMask - Required. A non-empty list of fields to change in the existing saved query. Fields are relative to the saved_query and new values for the fields are taken from the corresponding fields in the SavedQuery included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.To update all mutable fields, specify an update_mask of *.For example, to change the description and query filter text of a saved query, specify an update_mask of "description, query.filter".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.savedQueries.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes an existing SavedQuery that was created by the user making the request.
     * @param {string} params.name - (Required) Required. The full resource name of the saved query to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For example: "projects/my-project/locations/global/savedQueries/my-saved-query"
     * @return {object} The API response object.
     */
    this.organizations.locations.savedQueries.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.recentQueries = {};

    /**
     * Lists the RecentQueries that were created by the user making the request.
     * @param {string} params.filter - Optional. Specifies the type ("Logging" or "OpsAnalytics") of the recent queries to list. The only valid value for this field is one of the two allowable type function calls, which are the following: type("Logging") type("OpsAnalytics")
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource to which the listed queries belong. "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example:projects/my-project/locations/us-central1Note: The location portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all recent queries.
     * @return {object} The API response object.
     */
    this.organizations.locations.recentQueries.list = (params) => this._makeRequest('v2/{+parent}/recentQueries', 'GET', params);

    this.organizations.exclusions = {};

    /**
     * Lists all the exclusions on the _Default sink in a parent resource.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @return {object} The API response object.
     */
    this.organizations.exclusions.list = (params) => this._makeRequest('v2/{+parent}/exclusions', 'GET', params);

    /**
     * Gets the description of an exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @return {object} The API response object.
     */
    this.organizations.exclusions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new exclusion in the _Default sink in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
     * @param {string} params.parent - (Required) Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" For examples:"projects/my-logging-project" "organizations/123456789"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.exclusions.create = (params) => this._makeRequest('v2/{+parent}/exclusions', 'POST', params);

    /**
     * Changes one or more properties of an existing exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @param {string} params.updateMask - Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.exclusions.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes an exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @return {object} The API response object.
     */
    this.organizations.exclusions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.sinks = {};

    /**
     * Lists sinks.
     * @param {string} params.filter - Optional. A filter expression to constrain the sinks returned. Today, this only supports the following strings: '' 'in_scope("ALL")', 'in_scope("ANCESTOR")', 'in_scope("DEFAULT")'.Description of scopes below. ALL: Includes all of the sinks which can be returned in any other scope. ANCESTOR: Includes intercepting sinks owned by ancestor resources. DEFAULT: Includes sinks owned by parent.When the empty string is provided, then the filter 'in_scope("DEFAULT")' is applied.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @return {object} The API response object.
     */
    this.organizations.sinks.list = (params) => this._makeRequest('v2/{+parent}/sinks', 'GET', params);

    /**
     * Gets a sink.
     * @param {string} params.sinkName - (Required) Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @return {object} The API response object.
     */
    this.organizations.sinks.get = (params) => this._makeRequest('v2/{+sinkName}', 'GET', params);

    /**
     * Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
     * @param {string} params.customWriterIdentity - Optional. The service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified when you are routing logs to a log bucket that is in a different project than the sink. When not specified, a Logging service account will automatically be generated.
     * @param {string} params.parent - (Required) Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" For examples:"projects/my-project" "organizations/123456789"
     * @param {boolean} params.uniqueWriterIdentity - Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Cloud Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) used by the sinks with the same parent. For more information, see writer_identity in LogSink.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sinks.create = (params) => this._makeRequest('v2/{+parent}/sinks', 'POST', params);

    /**
     * Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @param {string} params.customWriterIdentity - Optional. The service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified when you are routing logs to a log bucket that is in a different project than the sink. When not specified, a Logging service account will automatically be generated.
     * @param {string} params.sinkName - (Required) Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @param {boolean} params.uniqueWriterIdentity - Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) owned by Cloud Logging. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:destination,filter,includeChildrenAt some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sinks.update = (params) => this._makeRequest('v2/{+sinkName}', 'PUT', params);

    /**
     * Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @param {string} params.customWriterIdentity - Optional. The service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified when you are routing logs to a log bucket that is in a different project than the sink. When not specified, a Logging service account will automatically be generated.
     * @param {string} params.sinkName - (Required) Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @param {boolean} params.uniqueWriterIdentity - Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) owned by Cloud Logging. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:destination,filter,includeChildrenAt some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sinks.patch = (params) => this._makeRequest('v2/{+sinkName}', 'PATCH', params);

    /**
     * Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
     * @param {string} params.sinkName - (Required) Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @return {object} The API response object.
     */
    this.organizations.sinks.delete = (params) => this._makeRequest('v2/{+sinkName}', 'DELETE', params);

    this.organizations.logs = {};

    /**
     * Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.
     * @param {string} params.logName - (Required) Required. The resource name of the log to delete: projects/[PROJECT_ID]/logs/[LOG_ID] organizations/[ORGANIZATION_ID]/logs/[LOG_ID] billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID] folders/[FOLDER_ID]/logs/[LOG_ID][LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/123/logs/cloudaudit.googleapis.com%2Factivity".For more information about log names, see LogEntry.
     * @return {object} The API response object.
     */
    this.organizations.logs.delete = (params) => this._makeRequest('v2/{+logName}', 'DELETE', params);

    /**
     * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource name to list logs for: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]
     * @param {string} params.resourceNames - Optional. List of resource names to list logs for: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]To support legacy queries, it could also be: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]The resource name in the parent field is added to this list.
     * @return {object} The API response object.
     */
    this.organizations.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.folders = {};

    /**
     * Gets the Logging CMEK settings for the given resource.Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations, and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
     * @param {string} params.name - (Required) Required. The resource for which to retrieve CMEK settings. "projects/[PROJECT_ID]/cmekSettings" "organizations/[ORGANIZATION_ID]/cmekSettings" "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings" "folders/[FOLDER_ID]/cmekSettings" For example:"organizations/12345/cmekSettings"Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations, and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.
     * @return {object} The API response object.
     */
    this.folders.getCmekSettings = (params) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', params);

    /**
     * Gets the settings for the given resource.Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.See View default resource settings for Logging (https://cloud.google.com/logging/docs/default-settings#view-org-settings) for more information.
     * @param {string} params.name - (Required) Required. The resource for which to retrieve settings. "projects/[PROJECT_ID]/settings" "organizations/[ORGANIZATION_ID]/settings" "billingAccounts/[BILLING_ACCOUNT_ID]/settings" "folders/[FOLDER_ID]/settings" For example:"organizations/12345/settings"Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.
     * @return {object} The API response object.
     */
    this.folders.getSettings = (params) => this._makeRequest('v2/{+name}/settings', 'GET', params);

    /**
     * Updates the settings for the given resource. This method applies to all feature configurations for organization and folders.UpdateSettings fails when any of the following are true: The value of storage_location either isn't supported by Logging or violates the location OrgPolicy. The default_sink_config field is set, but it has an unspecified filter write mode. The value of kms_key_name is invalid. The associated service account doesn't have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key. Access to the key is disabled.See Configure default settings for organizations and folders (https://cloud.google.com/logging/docs/default-settings) for more information.
     * @param {string} params.name - (Required) Required. The resource name for the settings to update. "organizations/[ORGANIZATION_ID]/settings" "folders/[FOLDER_ID]/settings" For example:"organizations/12345/settings"
     * @param {string} params.updateMask - Optional. Field mask identifying which fields from settings should be updated. A field will be overwritten if and only if it is in the update mask. Output only fields cannot be updated.See FieldMask for more information.For example: "updateMask=kmsKeyName"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.updateSettings = (params) => this._makeRequest('v2/{+name}/settings', 'PATCH', params);

    this.folders.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.folders.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.folders.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.folders.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.folders.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.folders.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.folders.locations.buckets = {};

    /**
     * Lists log buckets.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose buckets are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" Note: The locations portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all buckets.
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.list = (params) => this._makeRequest('v2/{+parent}/buckets', 'GET', params);

    /**
     * Gets a log bucket.
     * @param {string} params.name - (Required) Required. The resource name of the bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.bucketId - Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. Bucket identifiers must start with an alphanumeric character.
     * @param {string} params.parent - (Required) Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.createAsync = (params) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', params);

    /**
     * Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.updateMask - Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.updateAsync = (params) => this._makeRequest('v2/{+name}:updateAsync', 'POST', params);

    /**
     * Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.bucketId - Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. Bucket identifiers must start with an alphanumeric character.
     * @param {string} params.parent - (Required) Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.create = (params) => this._makeRequest('v2/{+parent}/buckets', 'POST', params);

    /**
     * Updates a log bucket.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.updateMask - Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a log bucket.Changes the bucket's lifecycle_state to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all log entries in the bucket will be permanently deleted.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to undelete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.undelete = (params) => this._makeRequest('v2/{+name}:undelete', 'POST', params);

    this.folders.locations.buckets.views = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.views.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.views.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.views.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Lists views on a log bucket.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The bucket whose views are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.views.list = (params) => this._makeRequest('v2/{+parent}/views', 'GET', params);

    /**
     * Gets a view on a log bucket.
     * @param {string} params.name - (Required) Required. The resource name of the policy: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.views.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.
     * @param {string} params.parent - (Required) Required. The bucket in which to create the view `"projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"` For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.viewId - Required. A client-assigned identifier such as "my-view". Identifiers are limited to 100 characters and can include only letters, digits, underscores, and hyphens.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.views.create = (params) => this._makeRequest('v2/{+parent}/views', 'POST', params);

    /**
     * Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.
     * @param {string} params.name - (Required) Required. The full resource name of the view to update "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in view that need an update. A field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.views.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.
     * @param {string} params.name - (Required) Required. The full resource name of the view to delete: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.views.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.folders.locations.buckets.views.logs = {};

    /**
     * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource name to list logs for: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]
     * @param {string} params.resourceNames - Optional. List of resource names to list logs for: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]To support legacy queries, it could also be: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]The resource name in the parent field is added to this list.
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.views.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.folders.locations.buckets.links = {};

    /**
     * Lists links.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response.
     * @param {string} params.parent - (Required) Required. The parent resource whose links are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.links.list = (params) => this._makeRequest('v2/{+parent}/links', 'GET', params);

    /**
     * Gets a link.
     * @param {string} params.name - (Required) Required. The resource name of the link: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]"
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.links.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.
     * @param {string} params.linkId - Required. The ID to use for the link. The link_id can have up to 100 characters. A valid link_id must only have alphanumeric characters and underscores within it.
     * @param {string} params.parent - (Required) Required. The full resource name of the bucket to create a link for. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.links.create = (params) => this._makeRequest('v2/{+parent}/links', 'POST', params);

    /**
     * Deletes a link. This will also delete the corresponding BigQuery linked dataset.
     * @param {string} params.name - (Required) Required. The full resource name of the link to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]"
     * @return {object} The API response object.
     */
    this.folders.locations.buckets.links.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.folders.locations.logScopes = {};

    /**
     * Lists log scopes.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose log scopes are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]"
     * @return {object} The API response object.
     */
    this.folders.locations.logScopes.list = (params) => this._makeRequest('v2/{+parent}/logScopes', 'GET', params);

    /**
     * Gets a log scope.
     * @param {string} params.name - (Required) Required. The resource name of the log scope: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/logScopes/[LOG_SCOPE_ID]" For example:"projects/my-project/locations/global/logScopes/my-log-scope"
     * @return {object} The API response object.
     */
    this.folders.locations.logScopes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a log scope.
     * @param {string} params.logScopeId - Required. A client-assigned identifier such as "log-scope". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.
     * @param {string} params.parent - (Required) Required. The parent project in which to create the log scope "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.logScopes.create = (params) => this._makeRequest('v2/{+parent}/logScopes', 'POST', params);

    /**
     * Updates a log scope.
     * @param {string} params.name - (Required) Output only. The resource name of the log scope.Log scopes are only available in the global location. For example:projects/my-project/locations/global/logScopes/my-log-scope
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in log_scope that need an update. A field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=description
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.logScopes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a log scope.
     * @param {string} params.name - (Required) Required. The resource name of the log scope to delete: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/logScopes/[LOG_SCOPE_ID]" For example:"projects/my-project/locations/global/logScopes/my-log-scope"
     * @return {object} The API response object.
     */
    this.folders.locations.logScopes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.folders.locations.savedQueries = {};

    /**
     * Lists the SavedQueries that were created by the user making the request.
     * @param {string} params.filter - Optional. Specifies the type ("Logging" or "OpsAnalytics") and the visibility (PRIVATE or SHARED) of the saved queries to list. If provided, the filter must contain either the type function or a visibility token, or both. If both are chosen, they can be placed in any order, but they must be joined by the AND operator or the empty character.The two supported type function calls are: type("Logging") type("OpsAnalytics")The two supported visibility tokens are: visibility = PRIVATE visibility = SHAREDFor example:type("Logging") AND visibility = PRIVATE visibility=SHARED type("OpsAnalytics") type("OpsAnalytics)" visibility = PRIVATE visibility = SHARED
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource to which the listed queries belong. "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/us-central1" Note: The locations portion of the resource must be specified. To get a list of all saved queries, a wildcard character - can be used for LOCATION_ID, for example: "projects/my-project/locations/-"
     * @return {object} The API response object.
     */
    this.folders.locations.savedQueries.list = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'GET', params);

    /**
     * Returns all data associated with the requested query.
     * @param {string} params.name - (Required) Required. The resource name of the saved query. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For example: "projects/my-project/locations/global/savedQueries/my-saved-query"
     * @return {object} The API response object.
     */
    this.folders.locations.savedQueries.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new SavedQuery for the user making the request.
     * @param {string} params.parent - (Required) Required. The parent resource in which to create the saved query: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/global" "organizations/123456789/locations/us-central1"
     * @param {string} params.savedQueryId - Optional. The ID to use for the saved query, which will become the final component of the saved query's resource name.If the saved_query_id is not provided, the system will generate an alphanumeric ID.The saved_query_id is limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.savedQueries.create = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'POST', params);

    /**
     * Updates an existing SavedQuery.
     * @param {string} params.name - (Required) Output only. Resource name of the saved query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support#bucket-regions)After the saved query is created, the location cannot be changed.If the user doesn't provide a QUERY_ID, the system will generate an alphanumeric ID.
     * @param {string} params.updateMask - Required. A non-empty list of fields to change in the existing saved query. Fields are relative to the saved_query and new values for the fields are taken from the corresponding fields in the SavedQuery included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.To update all mutable fields, specify an update_mask of *.For example, to change the description and query filter text of a saved query, specify an update_mask of "description, query.filter".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.savedQueries.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes an existing SavedQuery that was created by the user making the request.
     * @param {string} params.name - (Required) Required. The full resource name of the saved query to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For example: "projects/my-project/locations/global/savedQueries/my-saved-query"
     * @return {object} The API response object.
     */
    this.folders.locations.savedQueries.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.folders.locations.recentQueries = {};

    /**
     * Lists the RecentQueries that were created by the user making the request.
     * @param {string} params.filter - Optional. Specifies the type ("Logging" or "OpsAnalytics") of the recent queries to list. The only valid value for this field is one of the two allowable type function calls, which are the following: type("Logging") type("OpsAnalytics")
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource to which the listed queries belong. "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example:projects/my-project/locations/us-central1Note: The location portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all recent queries.
     * @return {object} The API response object.
     */
    this.folders.locations.recentQueries.list = (params) => this._makeRequest('v2/{+parent}/recentQueries', 'GET', params);

    this.folders.exclusions = {};

    /**
     * Lists all the exclusions on the _Default sink in a parent resource.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @return {object} The API response object.
     */
    this.folders.exclusions.list = (params) => this._makeRequest('v2/{+parent}/exclusions', 'GET', params);

    /**
     * Gets the description of an exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @return {object} The API response object.
     */
    this.folders.exclusions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new exclusion in the _Default sink in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
     * @param {string} params.parent - (Required) Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" For examples:"projects/my-logging-project" "organizations/123456789"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.exclusions.create = (params) => this._makeRequest('v2/{+parent}/exclusions', 'POST', params);

    /**
     * Changes one or more properties of an existing exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @param {string} params.updateMask - Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.exclusions.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes an exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @return {object} The API response object.
     */
    this.folders.exclusions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.folders.sinks = {};

    /**
     * Lists sinks.
     * @param {string} params.filter - Optional. A filter expression to constrain the sinks returned. Today, this only supports the following strings: '' 'in_scope("ALL")', 'in_scope("ANCESTOR")', 'in_scope("DEFAULT")'.Description of scopes below. ALL: Includes all of the sinks which can be returned in any other scope. ANCESTOR: Includes intercepting sinks owned by ancestor resources. DEFAULT: Includes sinks owned by parent.When the empty string is provided, then the filter 'in_scope("DEFAULT")' is applied.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @return {object} The API response object.
     */
    this.folders.sinks.list = (params) => this._makeRequest('v2/{+parent}/sinks', 'GET', params);

    /**
     * Gets a sink.
     * @param {string} params.sinkName - (Required) Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @return {object} The API response object.
     */
    this.folders.sinks.get = (params) => this._makeRequest('v2/{+sinkName}', 'GET', params);

    /**
     * Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
     * @param {string} params.customWriterIdentity - Optional. The service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified when you are routing logs to a log bucket that is in a different project than the sink. When not specified, a Logging service account will automatically be generated.
     * @param {string} params.parent - (Required) Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" For examples:"projects/my-project" "organizations/123456789"
     * @param {boolean} params.uniqueWriterIdentity - Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Cloud Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) used by the sinks with the same parent. For more information, see writer_identity in LogSink.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.sinks.create = (params) => this._makeRequest('v2/{+parent}/sinks', 'POST', params);

    /**
     * Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @param {string} params.customWriterIdentity - Optional. The service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified when you are routing logs to a log bucket that is in a different project than the sink. When not specified, a Logging service account will automatically be generated.
     * @param {string} params.sinkName - (Required) Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @param {boolean} params.uniqueWriterIdentity - Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) owned by Cloud Logging. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:destination,filter,includeChildrenAt some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.sinks.update = (params) => this._makeRequest('v2/{+sinkName}', 'PUT', params);

    /**
     * Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @param {string} params.customWriterIdentity - Optional. The service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified when you are routing logs to a log bucket that is in a different project than the sink. When not specified, a Logging service account will automatically be generated.
     * @param {string} params.sinkName - (Required) Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @param {boolean} params.uniqueWriterIdentity - Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) owned by Cloud Logging. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:destination,filter,includeChildrenAt some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.sinks.patch = (params) => this._makeRequest('v2/{+sinkName}', 'PATCH', params);

    /**
     * Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
     * @param {string} params.sinkName - (Required) Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @return {object} The API response object.
     */
    this.folders.sinks.delete = (params) => this._makeRequest('v2/{+sinkName}', 'DELETE', params);

    this.folders.logs = {};

    /**
     * Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.
     * @param {string} params.logName - (Required) Required. The resource name of the log to delete: projects/[PROJECT_ID]/logs/[LOG_ID] organizations/[ORGANIZATION_ID]/logs/[LOG_ID] billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID] folders/[FOLDER_ID]/logs/[LOG_ID][LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/123/logs/cloudaudit.googleapis.com%2Factivity".For more information about log names, see LogEntry.
     * @return {object} The API response object.
     */
    this.folders.logs.delete = (params) => this._makeRequest('v2/{+logName}', 'DELETE', params);

    /**
     * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource name to list logs for: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]
     * @param {string} params.resourceNames - Optional. List of resource names to list logs for: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]To support legacy queries, it could also be: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]The resource name in the parent field is added to this list.
     * @return {object} The API response object.
     */
    this.folders.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.billingAccounts = {};

    /**
     * Gets the Logging CMEK settings for the given resource.Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations, and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
     * @param {string} params.name - (Required) Required. The resource for which to retrieve CMEK settings. "projects/[PROJECT_ID]/cmekSettings" "organizations/[ORGANIZATION_ID]/cmekSettings" "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings" "folders/[FOLDER_ID]/cmekSettings" For example:"organizations/12345/cmekSettings"Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations, and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.
     * @return {object} The API response object.
     */
    this.billingAccounts.getCmekSettings = (params) => this._makeRequest('v2/{+name}/cmekSettings', 'GET', params);

    /**
     * Gets the settings for the given resource.Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.See View default resource settings for Logging (https://cloud.google.com/logging/docs/default-settings#view-org-settings) for more information.
     * @param {string} params.name - (Required) Required. The resource for which to retrieve settings. "projects/[PROJECT_ID]/settings" "organizations/[ORGANIZATION_ID]/settings" "billingAccounts/[BILLING_ACCOUNT_ID]/settings" "folders/[FOLDER_ID]/settings" For example:"organizations/12345/settings"Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.
     * @return {object} The API response object.
     */
    this.billingAccounts.getSettings = (params) => this._makeRequest('v2/{+name}/settings', 'GET', params);

    this.billingAccounts.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.billingAccounts.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.billingAccounts.locations.buckets = {};

    /**
     * Lists log buckets.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose buckets are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" Note: The locations portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all buckets.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.list = (params) => this._makeRequest('v2/{+parent}/buckets', 'GET', params);

    /**
     * Gets a log bucket.
     * @param {string} params.name - (Required) Required. The resource name of the bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.bucketId - Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. Bucket identifiers must start with an alphanumeric character.
     * @param {string} params.parent - (Required) Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.createAsync = (params) => this._makeRequest('v2/{+parent}/buckets:createAsync', 'POST', params);

    /**
     * Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.updateMask - Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.updateAsync = (params) => this._makeRequest('v2/{+name}:updateAsync', 'POST', params);

    /**
     * Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.bucketId - Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. Bucket identifiers must start with an alphanumeric character.
     * @param {string} params.parent - (Required) Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.create = (params) => this._makeRequest('v2/{+parent}/buckets', 'POST', params);

    /**
     * Updates a log bucket.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.updateMask - Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a log bucket.Changes the bucket's lifecycle_state to the DELETE_REQUESTED state. After 7 days, the bucket will be purged and all log entries in the bucket will be permanently deleted.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.
     * @param {string} params.name - (Required) Required. The full resource name of the bucket to undelete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.undelete = (params) => this._makeRequest('v2/{+name}:undelete', 'POST', params);

    this.billingAccounts.locations.buckets.views = {};

    /**
     * Lists views on a log bucket.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The bucket whose views are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.views.list = (params) => this._makeRequest('v2/{+parent}/views', 'GET', params);

    /**
     * Gets a view on a log bucket.
     * @param {string} params.name - (Required) Required. The resource name of the policy: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.views.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.
     * @param {string} params.parent - (Required) Required. The bucket in which to create the view `"projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"` For example:"projects/my-project/locations/global/buckets/my-bucket"
     * @param {string} params.viewId - Required. A client-assigned identifier such as "my-view". Identifiers are limited to 100 characters and can include only letters, digits, underscores, and hyphens.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.views.create = (params) => this._makeRequest('v2/{+parent}/views', 'POST', params);

    /**
     * Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.
     * @param {string} params.name - (Required) Required. The full resource name of the view to update "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in view that need an update. A field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.views.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.
     * @param {string} params.name - (Required) Required. The full resource name of the view to delete: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.views.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.billingAccounts.locations.buckets.views.logs = {};

    /**
     * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource name to list logs for: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]
     * @param {string} params.resourceNames - Optional. List of resource names to list logs for: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]To support legacy queries, it could also be: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]The resource name in the parent field is added to this list.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.views.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.billingAccounts.locations.buckets.links = {};

    /**
     * Lists links.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response.
     * @param {string} params.parent - (Required) Required. The parent resource whose links are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.links.list = (params) => this._makeRequest('v2/{+parent}/links', 'GET', params);

    /**
     * Gets a link.
     * @param {string} params.name - (Required) Required. The resource name of the link: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]"
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.links.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.
     * @param {string} params.linkId - Required. The ID to use for the link. The link_id can have up to 100 characters. A valid link_id must only have alphanumeric characters and underscores within it.
     * @param {string} params.parent - (Required) Required. The full resource name of the bucket to create a link for. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.links.create = (params) => this._makeRequest('v2/{+parent}/links', 'POST', params);

    /**
     * Deletes a link. This will also delete the corresponding BigQuery linked dataset.
     * @param {string} params.name - (Required) Required. The full resource name of the link to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]"
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.buckets.links.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.billingAccounts.locations.savedQueries = {};

    /**
     * Lists the SavedQueries that were created by the user making the request.
     * @param {string} params.filter - Optional. Specifies the type ("Logging" or "OpsAnalytics") and the visibility (PRIVATE or SHARED) of the saved queries to list. If provided, the filter must contain either the type function or a visibility token, or both. If both are chosen, they can be placed in any order, but they must be joined by the AND operator or the empty character.The two supported type function calls are: type("Logging") type("OpsAnalytics")The two supported visibility tokens are: visibility = PRIVATE visibility = SHAREDFor example:type("Logging") AND visibility = PRIVATE visibility=SHARED type("OpsAnalytics") type("OpsAnalytics)" visibility = PRIVATE visibility = SHARED
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource to which the listed queries belong. "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/us-central1" Note: The locations portion of the resource must be specified. To get a list of all saved queries, a wildcard character - can be used for LOCATION_ID, for example: "projects/my-project/locations/-"
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.savedQueries.list = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'GET', params);

    /**
     * Returns all data associated with the requested query.
     * @param {string} params.name - (Required) Required. The resource name of the saved query. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For example: "projects/my-project/locations/global/savedQueries/my-saved-query"
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.savedQueries.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new SavedQuery for the user making the request.
     * @param {string} params.parent - (Required) Required. The parent resource in which to create the saved query: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/global" "organizations/123456789/locations/us-central1"
     * @param {string} params.savedQueryId - Optional. The ID to use for the saved query, which will become the final component of the saved query's resource name.If the saved_query_id is not provided, the system will generate an alphanumeric ID.The saved_query_id is limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.savedQueries.create = (params) => this._makeRequest('v2/{+parent}/savedQueries', 'POST', params);

    /**
     * Updates an existing SavedQuery.
     * @param {string} params.name - (Required) Output only. Resource name of the saved query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support#bucket-regions)After the saved query is created, the location cannot be changed.If the user doesn't provide a QUERY_ID, the system will generate an alphanumeric ID.
     * @param {string} params.updateMask - Required. A non-empty list of fields to change in the existing saved query. Fields are relative to the saved_query and new values for the fields are taken from the corresponding fields in the SavedQuery included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.To update all mutable fields, specify an update_mask of *.For example, to change the description and query filter text of a saved query, specify an update_mask of "description, query.filter".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.savedQueries.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes an existing SavedQuery that was created by the user making the request.
     * @param {string} params.name - (Required) Required. The full resource name of the saved query to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For example: "projects/my-project/locations/global/savedQueries/my-saved-query"
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.savedQueries.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.billingAccounts.locations.recentQueries = {};

    /**
     * Lists the RecentQueries that were created by the user making the request.
     * @param {string} params.filter - Optional. Specifies the type ("Logging" or "OpsAnalytics") of the recent queries to list. The only valid value for this field is one of the two allowable type function calls, which are the following: type("Logging") type("OpsAnalytics")
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource to which the listed queries belong. "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example:projects/my-project/locations/us-central1Note: The location portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all recent queries.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.recentQueries.list = (params) => this._makeRequest('v2/{+parent}/recentQueries', 'GET', params);

    this.billingAccounts.exclusions = {};

    /**
     * Lists all the exclusions on the _Default sink in a parent resource.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @return {object} The API response object.
     */
    this.billingAccounts.exclusions.list = (params) => this._makeRequest('v2/{+parent}/exclusions', 'GET', params);

    /**
     * Gets the description of an exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @return {object} The API response object.
     */
    this.billingAccounts.exclusions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new exclusion in the _Default sink in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
     * @param {string} params.parent - (Required) Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" For examples:"projects/my-logging-project" "organizations/123456789"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.exclusions.create = (params) => this._makeRequest('v2/{+parent}/exclusions', 'POST', params);

    /**
     * Changes one or more properties of an existing exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @param {string} params.updateMask - Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.exclusions.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes an exclusion in the _Default sink.
     * @param {string} params.name - (Required) Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" For example:"projects/my-project/exclusions/my-exclusion"
     * @return {object} The API response object.
     */
    this.billingAccounts.exclusions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.billingAccounts.sinks = {};

    /**
     * Lists sinks.
     * @param {string} params.filter - Optional. A filter expression to constrain the sinks returned. Today, this only supports the following strings: '' 'in_scope("ALL")', 'in_scope("ANCESTOR")', 'in_scope("DEFAULT")'.Description of scopes below. ALL: Includes all of the sinks which can be returned in any other scope. ANCESTOR: Includes intercepting sinks owned by ancestor resources. DEFAULT: Includes sinks owned by parent.When the empty string is provided, then the filter 'in_scope("DEFAULT")' is applied.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @return {object} The API response object.
     */
    this.billingAccounts.sinks.list = (params) => this._makeRequest('v2/{+parent}/sinks', 'GET', params);

    /**
     * Gets a sink.
     * @param {string} params.sinkName - (Required) Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @return {object} The API response object.
     */
    this.billingAccounts.sinks.get = (params) => this._makeRequest('v2/{+sinkName}', 'GET', params);

    /**
     * Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
     * @param {string} params.customWriterIdentity - Optional. The service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified when you are routing logs to a log bucket that is in a different project than the sink. When not specified, a Logging service account will automatically be generated.
     * @param {string} params.parent - (Required) Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" For examples:"projects/my-project" "organizations/123456789"
     * @param {boolean} params.uniqueWriterIdentity - Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Cloud Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) used by the sinks with the same parent. For more information, see writer_identity in LogSink.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.sinks.create = (params) => this._makeRequest('v2/{+parent}/sinks', 'POST', params);

    /**
     * Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @param {string} params.customWriterIdentity - Optional. The service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified when you are routing logs to a log bucket that is in a different project than the sink. When not specified, a Logging service account will automatically be generated.
     * @param {string} params.sinkName - (Required) Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @param {boolean} params.uniqueWriterIdentity - Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) owned by Cloud Logging. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:destination,filter,includeChildrenAt some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.sinks.update = (params) => this._makeRequest('v2/{+sinkName}', 'PUT', params);

    /**
     * Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @param {string} params.customWriterIdentity - Optional. The service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified when you are routing logs to a log bucket that is in a different project than the sink. When not specified, a Logging service account will automatically be generated.
     * @param {string} params.sinkName - (Required) Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @param {boolean} params.uniqueWriterIdentity - Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) owned by Cloud Logging. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string} params.updateMask - Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:destination,filter,includeChildrenAt some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.sinks.patch = (params) => this._makeRequest('v2/{+sinkName}', 'PATCH', params);

    /**
     * Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
     * @param {string} params.sinkName - (Required) Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"
     * @return {object} The API response object.
     */
    this.billingAccounts.sinks.delete = (params) => this._makeRequest('v2/{+sinkName}', 'DELETE', params);

    this.billingAccounts.logs = {};

    /**
     * Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.
     * @param {string} params.logName - (Required) Required. The resource name of the log to delete: projects/[PROJECT_ID]/logs/[LOG_ID] organizations/[ORGANIZATION_ID]/logs/[LOG_ID] billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID] folders/[FOLDER_ID]/logs/[LOG_ID][LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/123/logs/cloudaudit.googleapis.com%2Factivity".For more information about log names, see LogEntry.
     * @return {object} The API response object.
     */
    this.billingAccounts.logs.delete = (params) => this._makeRequest('v2/{+logName}', 'DELETE', params);

    /**
     * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource name to list logs for: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]
     * @param {string} params.resourceNames - Optional. List of resource names to list logs for: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]To support legacy queries, it could also be: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]The resource name in the parent field is added to this list.
     * @return {object} The API response object.
     */
    this.billingAccounts.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.entries = {};

    /**
     * Copies a set of log entries from a log bucket to a Cloud Storage bucket.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.entries.copy = (params) => this._makeRequest('v2/entries:copy', 'POST', params);

    /**
     * Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resource names (projects, organizations, billing accounts or folders), where the resource name for a log entry is determined from its logName field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.entries.write = (params) => this._makeRequest('v2/entries:write', 'POST', params);

    /**
     * Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see Exporting Logs (https://cloud.google.com/logging/docs/export).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.entries.list = (params) => this._makeRequest('v2/entries:list', 'POST', params);

    /**
     * Streaming read of log entries as they are received. Until the stream is terminated, it will continue reading logs.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.entries.tail = (params) => this._makeRequest('v2/entries:tail', 'POST', params);

    this.logs = {};

    /**
     * Deletes all the log entries in a log for the global _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.
     * @param {string} params.logName - (Required) Required. The resource name of the log to delete: projects/[PROJECT_ID]/logs/[LOG_ID] organizations/[ORGANIZATION_ID]/logs/[LOG_ID] billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID] folders/[FOLDER_ID]/logs/[LOG_ID][LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/123/logs/cloudaudit.googleapis.com%2Factivity".For more information about log names, see LogEntry.
     * @return {object} The API response object.
     */
    this.logs.delete = (params) => this._makeRequest('v2/{+logName}', 'DELETE', params);

    /**
     * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The resource name to list logs for: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]
     * @param {string} params.resourceNames - Optional. List of resource names to list logs for: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]To support legacy queries, it could also be: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]The resource name in the parent field is added to this list.
     * @return {object} The API response object.
     */
    this.logs.list = (params) => this._makeRequest('v2/{+parent}/logs', 'GET', params);

    this.monitoredResourceDescriptors = {};

    /**
     * Lists the descriptors for monitored resource types used by Logging.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @return {object} The API response object.
     */
    this.monitoredResourceDescriptors.list = (params) => this._makeRequest('v2/monitoredResourceDescriptors', 'GET', params);
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
