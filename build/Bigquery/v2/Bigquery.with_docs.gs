
/**
 * Google Apps Script client library for the BigQuery API
 * Documentation URL: https://cloud.google.com/bigquery/
 * @class
 */
class Bigquery {
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
    this._rootUrl = 'https://bigquery.googleapis.com/';
    this._servicePath = 'bigquery/v2/';

    // --- Public Interface Initialization ---

    this.datasets = {};

    /**
     * Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of dataset being deleted
     * @param {boolean} params.deleteContents - If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
     * @param {string} params.projectId - (Required) Required. Project ID of the dataset being deleted
     * @return {object} The API response object.
     */
    this.datasets.delete = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}', 'DELETE', params);

    /**
     * Returns the dataset specified by datasetID.
     * @param {integer} params.accessPolicyVersion - Optional. The version of the access policy schema to fetch. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for conditional access policy binding in datasets must specify version 3. Dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. This field will be mapped to [IAM Policy version] (https://cloud.google.com/iam/docs/policies#versions) and will be used to fetch policy from IAM. If unset or if 0 or 1 value is used for dataset with conditional bindings, access entry with condition will have role string appended by 'withcond' string followed by a hash value. For example : { "access": [ { "role": "roles/bigquery.dataViewer_with_conditionalbinding_7a34awqsda", "userByEmail": "user@example.com", } ] } Please refer https://cloud.google.com/iam/docs/troubleshooting-withcond for more details.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the requested dataset
     * @param {string} params.datasetView - Optional. Specifies the view that determines which dataset information is returned. By default, metadata and ACL information are returned.
     * @param {string} params.projectId - (Required) Required. Project ID of the requested dataset
     * @return {object} The API response object.
     */
    this.datasets.get = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}', 'GET', params);

    /**
     * Creates a new empty dataset.
     * @param {integer} params.accessPolicyVersion - Optional. The version of the provided access policy schema. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. This version refers to the schema version of the access policy and not the version of access policy. This field's value can be equal or more than the access policy schema provided in the request. For example, * Requests with conditional access policy binding in datasets must specify version 3. * But dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. If unset or if 0 or 1 value is used for dataset with conditional bindings, request will be rejected. This field will be mapped to IAM Policy version (https://cloud.google.com/iam/docs/policies#versions) and will be used to set policy in IAM.
     * @param {string} params.projectId - (Required) Required. Project ID of the new dataset
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.datasets.insert = (params) => this._makeRequest('projects/{+projectId}/datasets', 'POST', params);

    /**
     * Lists all datasets in the specified project to which the user has been granted the READER dataset role.
     * @param {boolean} params.all - Whether to list all datasets, including hidden ones
     * @param {string} params.filter - An expression for filtering the results of the request by label. The syntax is `labels.[:]`. Multiple filters can be AND-ed together by connecting with a space. Example: `labels.department:receiving labels.active`. See [Filtering datasets using labels](https://cloud.google.com/bigquery/docs/filtering-labels#filtering_datasets_using_labels) for details.
     * @param {integer} params.maxResults - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} params.pageToken - Page token, returned by a previous call, to request the next page of results
     * @param {string} params.projectId - (Required) Required. Project ID of the datasets to be listed
     * @return {object} The API response object.
     */
    this.datasets.list = (params) => this._makeRequest('projects/{+projectId}/datasets', 'GET', params);

    /**
     * Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports RFC5789 patch semantics.
     * @param {integer} params.accessPolicyVersion - Optional. The version of the provided access policy schema. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. This version refers to the schema version of the access policy and not the version of access policy. This field's value can be equal or more than the access policy schema provided in the request. For example, * Operations updating conditional access policy binding in datasets must specify version 3. Some of the operations are : - Adding a new access policy entry with condition. - Removing an access policy entry with condition. - Updating an access policy entry with condition. * But dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. If unset or if 0 or 1 value is used for dataset with conditional bindings, request will be rejected. This field will be mapped to IAM Policy version (https://cloud.google.com/iam/docs/policies#versions) and will be used to set policy in IAM.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the dataset being updated
     * @param {string} params.projectId - (Required) Required. Project ID of the dataset being updated
     * @param {string} params.updateMode - Optional. Specifies the fields of dataset that update/patch operation is targeting By default, both metadata and ACL fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.datasets.patch = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}', 'PATCH', params);

    /**
     * Undeletes a dataset which is within time travel window based on datasetId. If a time is specified, the dataset version deleted at that time is undeleted, else the last live version is undeleted.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of dataset being deleted
     * @param {string} params.projectId - (Required) Required. Project ID of the dataset to be undeleted
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.datasets.undelete = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}:undelete', 'POST', params);

    /**
     * Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
     * @param {integer} params.accessPolicyVersion - Optional. The version of the provided access policy schema. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. This version refers to the schema version of the access policy and not the version of access policy. This field's value can be equal or more than the access policy schema provided in the request. For example, * Operations updating conditional access policy binding in datasets must specify version 3. Some of the operations are : - Adding a new access policy entry with condition. - Removing an access policy entry with condition. - Updating an access policy entry with condition. * But dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. If unset or if 0 or 1 value is used for dataset with conditional bindings, request will be rejected. This field will be mapped to IAM Policy version (https://cloud.google.com/iam/docs/policies#versions) and will be used to set policy in IAM.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the dataset being updated
     * @param {string} params.projectId - (Required) Required. Project ID of the dataset being updated
     * @param {string} params.updateMode - Optional. Specifies the fields of dataset that update/patch operation is targeting By default, both metadata and ACL fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.datasets.update = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}', 'PUT', params);

    this.jobs = {};

    /**
     * Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
     * @param {string} params.jobId - (Required) Required. Job ID of the job to cancel
     * @param {string} params.location - The geographic location of the job. You must [specify the location](https://cloud.google.com/bigquery/docs/locations#specify_locations) to run the job for the following scenarios: * If the location to run a job is not in the `us` or the `eu` multi-regional location * If the job's location is in a single region (for example, `us-central1`)
     * @param {string} params.projectId - (Required) Required. Project ID of the job to cancel
     * @return {object} The API response object.
     */
    this.jobs.cancel = (params) => this._makeRequest('projects/{+projectId}/jobs/{+jobId}/cancel', 'POST', params);

    /**
     * Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
     * @param {string} params.jobId - (Required) Required. Job ID of the job for which metadata is to be deleted. If this is a parent job which has child jobs, the metadata from all child jobs will be deleted as well. Direct deletion of the metadata of child jobs is not allowed.
     * @param {string} params.location - The geographic location of the job. Required. For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations).
     * @param {string} params.projectId - (Required) Required. Project ID of the job for which metadata is to be deleted.
     * @return {object} The API response object.
     */
    this.jobs.delete = (params) => this._makeRequest('projects/{+projectId}/jobs/{+jobId}/delete', 'DELETE', params);

    /**
     * Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
     * @param {string} params.jobId - (Required) Required. Job ID of the requested job.
     * @param {string} params.location - The geographic location of the job. You must specify the location to run the job for the following scenarios: * If the location to run a job is not in the `us` or the `eu` multi-regional location * If the job's location is in a single region (for example, `us-central1`) For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations).
     * @param {string} params.projectId - (Required) Required. Project ID of the requested job.
     * @return {object} The API response object.
     */
    this.jobs.get = (params) => this._makeRequest('projects/{+projectId}/jobs/{+jobId}', 'GET', params);

    /**
     * RPC to get the results of a query job.
     * @param {string} params.formatOptions.timestampOutputFormat - Optional. The API output format for a timestamp. This offers more explicit control over the timestamp output format as compared to the existing `use_int64_timestamp` option.
     * @param {boolean} params.formatOptions.useInt64Timestamp - Optional. Output timestamp as usec int64. Default is false.
     * @param {string} params.jobId - (Required) Required. Job ID of the query job.
     * @param {string} params.location - The geographic location of the job. You must specify the location to run the job for the following scenarios: * If the location to run a job is not in the `us` or the `eu` multi-regional location * If the job's location is in a single region (for example, `us-central1`) For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations).
     * @param {integer} params.maxResults - Maximum number of results to read.
     * @param {string} params.pageToken - Page token, returned by a previous call, to request the next page of results.
     * @param {string} params.projectId - (Required) Required. Project ID of the query job.
     * @param {string} params.startIndex - Zero-based index of the starting row.
     * @param {integer} params.timeoutMs - Optional: Specifies the maximum amount of time, in milliseconds, that the client is willing to wait for the query to complete. By default, this limit is 10 seconds (10,000 milliseconds). If the query is complete, the jobComplete field in the response is true. If the query has not yet completed, jobComplete is false. You can request a longer timeout period in the timeoutMs field. However, the call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. If jobComplete is false, you can continue to wait for the query to complete by calling the getQueryResults method until the jobComplete field in the getQueryResults response is true.
     * @return {object} The API response object.
     */
    this.jobs.getQueryResults = (params) => this._makeRequest('projects/{+projectId}/queries/{+jobId}', 'GET', params);

    /**
     * Starts a new asynchronous job. This API has two different kinds of endpoint URIs, as this method supports a variety of use cases. * The *Metadata* URI is used for most interactions, as it accepts the job configuration directly. * The *Upload* URI is ONLY for the case when you're sending both a load job configuration and a data stream together. In this case, the Upload URI accepts the job configuration and the data as two distinct multipart MIME parts.
     * @param {string} params.projectId - (Required) Project ID of project that will be billed for the job.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.jobs.insert = (params) => this._makeRequest('projects/{+projectId}/jobs', 'POST', params);

    /**
     * Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
     * @param {boolean} params.allUsers - Whether to display jobs owned by all users in the project. Default False.
     * @param {string} params.maxCreationTime - Max value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created before or at this timestamp are returned.
     * @param {integer} params.maxResults - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} params.minCreationTime - Min value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created after or at this timestamp are returned.
     * @param {string} params.pageToken - Page token, returned by a previous call, to request the next page of results.
     * @param {string} params.parentJobId - If set, show only child jobs of the specified parent. Otherwise, show all top-level jobs.
     * @param {string} params.projectId - (Required) Project ID of the jobs to list.
     * @param {string} params.projection - Restrict information returned to a set of selected fields
     * @param {string} params.stateFilter - Filter for job state
     * @return {object} The API response object.
     */
    this.jobs.list = (params) => this._makeRequest('projects/{+projectId}/jobs', 'GET', params);

    /**
     * Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
     * @param {string} params.projectId - (Required) Required. Project ID of the query request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.jobs.query = (params) => this._makeRequest('projects/{+projectId}/queries', 'POST', params);

    this.models = {};

    /**
     * Deletes the model specified by modelId from the dataset.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the model to delete.
     * @param {string} params.modelId - (Required) Required. Model ID of the model to delete.
     * @param {string} params.projectId - (Required) Required. Project ID of the model to delete.
     * @return {object} The API response object.
     */
    this.models.delete = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}', 'DELETE', params);

    /**
     * Gets the specified model resource by model ID.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the requested model.
     * @param {string} params.modelId - (Required) Required. Model ID of the requested model.
     * @param {string} params.projectId - (Required) Required. Project ID of the requested model.
     * @return {object} The API response object.
     */
    this.models.get = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}', 'GET', params);

    /**
     * Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the models to list.
     * @param {integer} params.maxResults - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} params.pageToken - Page token, returned by a previous call to request the next page of results
     * @param {string} params.projectId - (Required) Required. Project ID of the models to list.
     * @return {object} The API response object.
     */
    this.models.list = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/models', 'GET', params);

    /**
     * Patch specific fields in the specified model.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the model to patch.
     * @param {string} params.modelId - (Required) Required. Model ID of the model to patch.
     * @param {string} params.projectId - (Required) Required. Project ID of the model to patch.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.models.patch = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}', 'PATCH', params);

    this.projects = {};

    /**
     * RPC to get the service account for a project used for interactions with Google Cloud KMS
     * @param {string} params.projectId - (Required) Required. ID of the project.
     * @return {object} The API response object.
     */
    this.projects.getServiceAccount = (params) => this._makeRequest('projects/{+projectId}/serviceAccount', 'GET', params);

    /**
     * RPC to list projects to which the user has been granted any project role. Users of this method are encouraged to consider the [Resource Manager](https://cloud.google.com/resource-manager/docs/) API, which provides the underlying data for this method and has more capabilities.
     * @param {integer} params.maxResults - `maxResults` unset returns all results, up to 50 per page. Additionally, the number of projects in a page may be fewer than `maxResults` because projects are retrieved and then filtered to only projects with the BigQuery API enabled.
     * @param {string} params.pageToken - Page token, returned by a previous call, to request the next page of results. If not present, no further pages are present.
     * @return {object} The API response object.
     */
    this.projects.list = (params) => this._makeRequest('projects', 'GET', params);

    this.routines = {};

    /**
     * Deletes the routine specified by routineId from the dataset.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the routine to delete
     * @param {string} params.projectId - (Required) Required. Project ID of the routine to delete
     * @param {string} params.routineId - (Required) Required. Routine ID of the routine to delete
     * @return {object} The API response object.
     */
    this.routines.delete = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}', 'DELETE', params);

    /**
     * Gets the specified routine resource by routine ID.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the requested routine
     * @param {string} params.projectId - (Required) Required. Project ID of the requested routine
     * @param {string} params.readMask - If set, only the Routine fields in the field mask are returned in the response. If unset, all Routine fields are returned.
     * @param {string} params.routineId - (Required) Required. Routine ID of the requested routine
     * @return {object} The API response object.
     */
    this.routines.get = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}', 'GET', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.routines.getIamPolicy = (params) => this._makeRequest('{+resource}:getIamPolicy', 'POST', params);

    /**
     * Creates a new routine in the dataset.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the new routine
     * @param {string} params.projectId - (Required) Required. Project ID of the new routine
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.routines.insert = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines', 'POST', params);

    /**
     * Lists all routines in the specified dataset. Requires the READER dataset role.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the routines to list
     * @param {string} params.filter - If set, then only the Routines matching this filter are returned. The supported format is `routineType:{RoutineType}`, where `{RoutineType}` is a RoutineType enum. For example: `routineType:SCALAR_FUNCTION`.
     * @param {integer} params.maxResults - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} params.pageToken - Page token, returned by a previous call, to request the next page of results
     * @param {string} params.projectId - (Required) Required. Project ID of the routines to list
     * @param {string} params.readMask - If set, then only the Routine fields in the field mask, as well as project_id, dataset_id and routine_id, are returned in the response. If unset, then the following Routine fields are returned: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, and language.
     * @return {object} The API response object.
     */
    this.routines.list = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.routines.setIamPolicy = (params) => this._makeRequest('{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.routines.testIamPermissions = (params) => this._makeRequest('{+resource}:testIamPermissions', 'POST', params);

    /**
     * Updates information in an existing routine. The update method replaces the entire Routine resource.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the routine to update
     * @param {string} params.projectId - (Required) Required. Project ID of the routine to update
     * @param {string} params.routineId - (Required) Required. Routine ID of the routine to update
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.routines.update = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}', 'PUT', params);

    this.rowAccessPolicies = {};

    /**
     * Deletes provided row access policies.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the table to delete the row access policies.
     * @param {string} params.projectId - (Required) Required. Project ID of the table to delete the row access policies.
     * @param {string} params.tableId - (Required) Required. Table ID of the table to delete the row access policies.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.rowAccessPolicies.batchDelete = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies:batchDelete', 'POST', params);

    /**
     * Deletes a row access policy.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the table to delete the row access policy.
     * @param {boolean} params.force - If set to true, it deletes the row access policy even if it's the last row access policy on the table and the deletion will widen the access rather narrowing it.
     * @param {string} params.policyId - (Required) Required. Policy ID of the row access policy.
     * @param {string} params.projectId - (Required) Required. Project ID of the table to delete the row access policy.
     * @param {string} params.tableId - (Required) Required. Table ID of the table to delete the row access policy.
     * @return {object} The API response object.
     */
    this.rowAccessPolicies.delete = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies/{+policyId}', 'DELETE', params);

    /**
     * Gets the specified row access policy by policy ID.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the table to get the row access policy.
     * @param {string} params.policyId - (Required) Required. Policy ID of the row access policy.
     * @param {string} params.projectId - (Required) Required. Project ID of the table to get the row access policy.
     * @param {string} params.tableId - (Required) Required. Table ID of the table to get the row access policy.
     * @return {object} The API response object.
     */
    this.rowAccessPolicies.get = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies/{+policyId}', 'GET', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.rowAccessPolicies.getIamPolicy = (params) => this._makeRequest('{+resource}:getIamPolicy', 'POST', params);

    /**
     * Creates a row access policy.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the table to get the row access policy.
     * @param {string} params.projectId - (Required) Required. Project ID of the table to get the row access policy.
     * @param {string} params.tableId - (Required) Required. Table ID of the table to get the row access policy.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.rowAccessPolicies.insert = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies', 'POST', params);

    /**
     * Lists all row access policies on the specified table.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of row access policies to list.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} params.pageToken - Page token, returned by a previous call, to request the next page of results.
     * @param {string} params.projectId - (Required) Required. Project ID of the row access policies to list.
     * @param {string} params.tableId - (Required) Required. Table ID of the table to list row access policies.
     * @return {object} The API response object.
     */
    this.rowAccessPolicies.list = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.rowAccessPolicies.testIamPermissions = (params) => this._makeRequest('{+resource}:testIamPermissions', 'POST', params);

    /**
     * Updates a row access policy.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the table to get the row access policy.
     * @param {string} params.policyId - (Required) Required. Policy ID of the row access policy.
     * @param {string} params.projectId - (Required) Required. Project ID of the table to get the row access policy.
     * @param {string} params.tableId - (Required) Required. Table ID of the table to get the row access policy.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.rowAccessPolicies.update = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies/{+policyId}', 'PUT', params);

    this.tabledata = {};

    /**
     * Streams data into BigQuery one record at a time without needing to run a load job.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the destination.
     * @param {string} params.projectId - (Required) Required. Project ID of the destination.
     * @param {string} params.tableId - (Required) Required. Table ID of the destination.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tabledata.insertAll = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/insertAll', 'POST', params);

    /**
     * List the content of a table in rows.
     * @param {string} params.datasetId - (Required) Required. Dataset id of the table to list.
     * @param {string} params.formatOptions.timestampOutputFormat - Optional. The API output format for a timestamp. This offers more explicit control over the timestamp output format as compared to the existing `use_int64_timestamp` option.
     * @param {boolean} params.formatOptions.useInt64Timestamp - Optional. Output timestamp as usec int64. Default is false.
     * @param {integer} params.maxResults - Row limit of the table.
     * @param {string} params.pageToken - To retrieve the next page of table data, set this field to the string provided in the pageToken field of the response body from your previous call to tabledata.list.
     * @param {string} params.projectId - (Required) Required. Project id of the table to list.
     * @param {string} params.selectedFields - Subset of fields to return, supports select into sub fields. Example: selected_fields = "a,e.d.f";
     * @param {string} params.startIndex - Start row index of the table.
     * @param {string} params.tableId - (Required) Required. Table id of the table to list.
     * @return {object} The API response object.
     */
    this.tabledata.list = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/data', 'GET', params);

    this.tables = {};

    /**
     * Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the table to delete
     * @param {string} params.projectId - (Required) Required. Project ID of the table to delete
     * @param {string} params.tableId - (Required) Required. Table ID of the table to delete
     * @return {object} The API response object.
     */
    this.tables.delete = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}', 'DELETE', params);

    /**
     * Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the requested table
     * @param {string} params.projectId - (Required) Required. Project ID of the requested table
     * @param {string} params.selectedFields - List of table schema fields to return (comma-separated). If unspecified, all fields are returned. A fieldMask cannot be used here because the fields will automatically be converted from camelCase to snake_case and the conversion will fail if there are underscores. Since these are fields in BigQuery table schemas, underscores are allowed.
     * @param {string} params.tableId - (Required) Required. Table ID of the requested table
     * @param {string} params.view - Optional. Specifies the view that determines which table information is returned. By default, basic table information and storage statistics (STORAGE_STATS) are returned.
     * @return {object} The API response object.
     */
    this.tables.get = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}', 'GET', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tables.getIamPolicy = (params) => this._makeRequest('{+resource}:getIamPolicy', 'POST', params);

    /**
     * Creates a new, empty table in the dataset.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the new table
     * @param {string} params.projectId - (Required) Required. Project ID of the new table
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tables.insert = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables', 'POST', params);

    /**
     * Lists all tables in the specified dataset. Requires the READER dataset role.
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the tables to list
     * @param {integer} params.maxResults - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} params.pageToken - Page token, returned by a previous call, to request the next page of results
     * @param {string} params.projectId - (Required) Required. Project ID of the tables to list
     * @return {object} The API response object.
     */
    this.tables.list = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables', 'GET', params);

    /**
     * Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports RFC5789 patch semantics.
     * @param {boolean} params.autodetect_schema - Optional.  When true will autodetect schema, else will keep original schema
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the table to update
     * @param {string} params.projectId - (Required) Required. Project ID of the table to update
     * @param {string} params.tableId - (Required) Required. Table ID of the table to update
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tables.patch = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}', 'PATCH', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tables.setIamPolicy = (params) => this._makeRequest('{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tables.testIamPermissions = (params) => this._makeRequest('{+resource}:testIamPermissions', 'POST', params);

    /**
     * Updates information in an existing table. The update method replaces the entire Table resource, whereas the patch method only replaces fields that are provided in the submitted Table resource.
     * @param {boolean} params.autodetect_schema - Optional.  When true will autodetect schema, else will keep original schema
     * @param {string} params.datasetId - (Required) Required. Dataset ID of the table to update
     * @param {string} params.projectId - (Required) Required. Project ID of the table to update
     * @param {string} params.tableId - (Required) Required. Table ID of the table to update
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tables.update = (params) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}', 'PUT', params);
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
