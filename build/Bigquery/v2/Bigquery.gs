
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://bigquery.googleapis.com/';
    this._servicePath = 'bigquery/v2/';


    this.datasets = {};

    /**
     * Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of dataset being deleted
     * @param {boolean} apiParams.deleteContents - If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the dataset being deleted
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datasets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns the dataset specified by datasetID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.accessPolicyVersion - Optional. The version of the access policy schema to fetch. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for conditional access policy binding in datasets must specify version 3. Dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. This field will be mapped to [IAM Policy version] (https://cloud.google.com/iam/docs/policies#versions) and will be used to fetch policy from IAM. If unset or if 0 or 1 value is used for dataset with conditional bindings, access entry with condition will have role string appended by 'withcond' string followed by a hash value. For example : { "access": [ { "role": "roles/bigquery.dataViewer_with_conditionalbinding_7a34awqsda", "userByEmail": "user@example.com", } ] } Please refer https://cloud.google.com/iam/docs/troubleshooting-withcond for more details.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the requested dataset
     * @param {string} apiParams.datasetView - Optional. Specifies the view that determines which dataset information is returned. By default, metadata and ACL information are returned.
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the requested dataset
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datasets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new empty dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.accessPolicyVersion - Optional. The version of the provided access policy schema. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. This version refers to the schema version of the access policy and not the version of access policy. This field's value can be equal or more than the access policy schema provided in the request. For example, * Requests with conditional access policy binding in datasets must specify version 3. * But dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. If unset or if 0 or 1 value is used for dataset with conditional bindings, request will be rejected. This field will be mapped to IAM Policy version (https://cloud.google.com/iam/docs/policies#versions) and will be used to set policy in IAM.
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the new dataset
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datasets.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets', 'POST', apiParams, clientConfig);

    /**
     * Lists all datasets in the specified project to which the user has been granted the READER dataset role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.all - Whether to list all datasets, including hidden ones
     * @param {string} apiParams.filter - An expression for filtering the results of the request by label. The syntax is `labels.[:]`. Multiple filters can be AND-ed together by connecting with a space. Example: `labels.department:receiving labels.active`. See [Filtering datasets using labels](https://cloud.google.com/bigquery/docs/filtering-labels#filtering_datasets_using_labels) for details.
     * @param {integer} apiParams.maxResults - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} apiParams.pageToken - Page token, returned by a previous call, to request the next page of results
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the datasets to be listed
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datasets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets', 'GET', apiParams, clientConfig);

    /**
     * Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports RFC5789 patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.accessPolicyVersion - Optional. The version of the provided access policy schema. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. This version refers to the schema version of the access policy and not the version of access policy. This field's value can be equal or more than the access policy schema provided in the request. For example, * Operations updating conditional access policy binding in datasets must specify version 3. Some of the operations are : - Adding a new access policy entry with condition. - Removing an access policy entry with condition. - Updating an access policy entry with condition. * But dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. If unset or if 0 or 1 value is used for dataset with conditional bindings, request will be rejected. This field will be mapped to IAM Policy version (https://cloud.google.com/iam/docs/policies#versions) and will be used to set policy in IAM.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the dataset being updated
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the dataset being updated
     * @param {string} apiParams.updateMode - Optional. Specifies the fields of dataset that update/patch operation is targeting By default, both metadata and ACL fields are updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datasets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}', 'PATCH', apiParams, clientConfig);

    /**
     * Undeletes a dataset which is within time travel window based on datasetId. If a time is specified, the dataset version deleted at that time is undeleted, else the last live version is undeleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of dataset being deleted
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the dataset to be undeleted
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datasets.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}:undelete', 'POST', apiParams, clientConfig);

    /**
     * Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.accessPolicyVersion - Optional. The version of the provided access policy schema. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. This version refers to the schema version of the access policy and not the version of access policy. This field's value can be equal or more than the access policy schema provided in the request. For example, * Operations updating conditional access policy binding in datasets must specify version 3. Some of the operations are : - Adding a new access policy entry with condition. - Removing an access policy entry with condition. - Updating an access policy entry with condition. * But dataset with no conditional role bindings in access policy may specify any valid value or leave the field unset. If unset or if 0 or 1 value is used for dataset with conditional bindings, request will be rejected. This field will be mapped to IAM Policy version (https://cloud.google.com/iam/docs/policies#versions) and will be used to set policy in IAM.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the dataset being updated
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the dataset being updated
     * @param {string} apiParams.updateMode - Optional. Specifies the fields of dataset that update/patch operation is targeting By default, both metadata and ACL fields are updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.datasets.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}', 'PUT', apiParams, clientConfig);

    this.jobs = {};

    /**
     * Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) Required. Job ID of the job to cancel
     * @param {string} apiParams.location - The geographic location of the job. You must [specify the location](https://cloud.google.com/bigquery/docs/locations#specify_locations) to run the job for the following scenarios: * If the location to run a job is not in the `us` or the `eu` multi-regional location * If the job's location is in a single region (for example, `us-central1`)
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the job to cancel
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/jobs/{+jobId}/cancel', 'POST', apiParams, clientConfig);

    /**
     * Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) Required. Job ID of the job for which metadata is to be deleted. If this is a parent job which has child jobs, the metadata from all child jobs will be deleted as well. Direct deletion of the metadata of child jobs is not allowed.
     * @param {string} apiParams.location - The geographic location of the job. Required. For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations).
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the job for which metadata is to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/jobs/{+jobId}/delete', 'DELETE', apiParams, clientConfig);

    /**
     * Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) Required. Job ID of the requested job.
     * @param {string} apiParams.location - The geographic location of the job. You must specify the location to run the job for the following scenarios: * If the location to run a job is not in the `us` or the `eu` multi-regional location * If the job's location is in a single region (for example, `us-central1`) For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations).
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the requested job.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/jobs/{+jobId}', 'GET', apiParams, clientConfig);

    /**
     * RPC to get the results of a query job.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.formatOptions.timestampOutputFormat - Optional. The API output format for a timestamp. This offers more explicit control over the timestamp output format as compared to the existing `use_int64_timestamp` option.
     * @param {boolean} apiParams.formatOptions.useInt64Timestamp - Optional. Output timestamp as usec int64. Default is false.
     * @param {string} apiParams.jobId - (Required) Required. Job ID of the query job.
     * @param {string} apiParams.location - The geographic location of the job. You must specify the location to run the job for the following scenarios: * If the location to run a job is not in the `us` or the `eu` multi-regional location * If the job's location is in a single region (for example, `us-central1`) For more information, see how to [specify locations](https://cloud.google.com/bigquery/docs/locations#specify_locations).
     * @param {integer} apiParams.maxResults - Maximum number of results to read.
     * @param {string} apiParams.pageToken - Page token, returned by a previous call, to request the next page of results.
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the query job.
     * @param {string} apiParams.startIndex - Zero-based index of the starting row.
     * @param {integer} apiParams.timeoutMs - Optional: Specifies the maximum amount of time, in milliseconds, that the client is willing to wait for the query to complete. By default, this limit is 10 seconds (10,000 milliseconds). If the query is complete, the jobComplete field in the response is true. If the query has not yet completed, jobComplete is false. You can request a longer timeout period in the timeoutMs field. However, the call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. If jobComplete is false, you can continue to wait for the query to complete by calling the getQueryResults method until the jobComplete field in the getQueryResults response is true.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jobs.getQueryResults = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/queries/{+jobId}', 'GET', apiParams, clientConfig);

    /**
     * Starts a new asynchronous job. This API has two different kinds of endpoint URIs, as this method supports a variety of use cases. * The *Metadata* URI is used for most interactions, as it accepts the job configuration directly. * The *Upload* URI is ONLY for the case when you're sending both a load job configuration and a data stream together. In this case, the Upload URI accepts the job configuration and the data as two distinct multipart MIME parts.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.projectId - (Required) Project ID of project that will be billed for the job.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jobs.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/bigquery/v2/projects/{+projectId}/jobs' : 'projects/{+projectId}/jobs';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allUsers - Whether to display jobs owned by all users in the project. Default False.
     * @param {string} apiParams.maxCreationTime - Max value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created before or at this timestamp are returned.
     * @param {integer} apiParams.maxResults - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} apiParams.minCreationTime - Min value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created after or at this timestamp are returned.
     * @param {string} apiParams.pageToken - Page token, returned by a previous call, to request the next page of results.
     * @param {string} apiParams.parentJobId - If set, show only child jobs of the specified parent. Otherwise, show all top-level jobs.
     * @param {string} apiParams.projectId - (Required) Project ID of the jobs to list.
     * @param {string} apiParams.projection - Restrict information returned to a set of selected fields
     * @param {string} apiParams.stateFilter - Filter for job state
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/jobs', 'GET', apiParams, clientConfig);

    /**
     * Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the query request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jobs.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/queries', 'POST', apiParams, clientConfig);

    this.models = {};

    /**
     * Deletes the model specified by modelId from the dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the model to delete.
     * @param {string} apiParams.modelId - (Required) Required. Model ID of the model to delete.
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the model to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.models.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the specified model resource by model ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the requested model.
     * @param {string} apiParams.modelId - (Required) Required. Model ID of the requested model.
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the requested model.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.models.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}', 'GET', apiParams, clientConfig);

    /**
     * Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the models to list.
     * @param {integer} apiParams.maxResults - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} apiParams.pageToken - Page token, returned by a previous call to request the next page of results
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the models to list.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.models.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/models', 'GET', apiParams, clientConfig);

    /**
     * Patch specific fields in the specified model.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the model to patch.
     * @param {string} apiParams.modelId - (Required) Required. Model ID of the model to patch.
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the model to patch.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.models.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}', 'PATCH', apiParams, clientConfig);

    this.projects = {};

    /**
     * RPC to get the service account for a project used for interactions with Google Cloud KMS
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.projectId - (Required) Required. ID of the project.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.getServiceAccount = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/serviceAccount', 'GET', apiParams, clientConfig);

    /**
     * RPC to list projects to which the user has been granted any project role. Users of this method are encouraged to consider the [Resource Manager](https://cloud.google.com/resource-manager/docs/) API, which provides the underlying data for this method and has more capabilities.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - `maxResults` unset returns all results, up to 50 per page. Additionally, the number of projects in a page may be fewer than `maxResults` because projects are retrieved and then filtered to only projects with the BigQuery API enabled.
     * @param {string} apiParams.pageToken - Page token, returned by a previous call, to request the next page of results. If not present, no further pages are present.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects', 'GET', apiParams, clientConfig);

    this.routines = {};

    /**
     * Deletes the routine specified by routineId from the dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the routine to delete
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the routine to delete
     * @param {string} apiParams.routineId - (Required) Required. Routine ID of the routine to delete
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.routines.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the specified routine resource by routine ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the requested routine
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the requested routine
     * @param {string} apiParams.readMask - If set, only the Routine fields in the field mask are returned in the response. If unset, all Routine fields are returned.
     * @param {string} apiParams.routineId - (Required) Required. Routine ID of the requested routine
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.routines.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}', 'GET', apiParams, clientConfig);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.routines.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Creates a new routine in the dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the new routine
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the new routine
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.routines.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines', 'POST', apiParams, clientConfig);

    /**
     * Lists all routines in the specified dataset. Requires the READER dataset role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the routines to list
     * @param {string} apiParams.filter - If set, then only the Routines matching this filter are returned. The supported format is `routineType:{RoutineType}`, where `{RoutineType}` is a RoutineType enum. For example: `routineType:SCALAR_FUNCTION`.
     * @param {integer} apiParams.maxResults - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} apiParams.pageToken - Page token, returned by a previous call, to request the next page of results
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the routines to list
     * @param {string} apiParams.readMask - If set, then only the Routine fields in the field mask, as well as project_id, dataset_id and routine_id, are returned in the response. If unset, then the following Routine fields are returned: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, and language.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.routines.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines', 'GET', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.routines.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.routines.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    /**
     * Updates information in an existing routine. The update method replaces the entire Routine resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the routine to update
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the routine to update
     * @param {string} apiParams.routineId - (Required) Required. Routine ID of the routine to update
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.routines.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}', 'PUT', apiParams, clientConfig);

    this.rowAccessPolicies = {};

    /**
     * Deletes provided row access policies.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the table to delete the row access policies.
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the table to delete the row access policies.
     * @param {string} apiParams.tableId - (Required) Required. Table ID of the table to delete the row access policies.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.rowAccessPolicies.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies:batchDelete', 'POST', apiParams, clientConfig);

    /**
     * Deletes a row access policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the table to delete the row access policy.
     * @param {boolean} apiParams.force - If set to true, it deletes the row access policy even if it's the last row access policy on the table and the deletion will widen the access rather narrowing it.
     * @param {string} apiParams.policyId - (Required) Required. Policy ID of the row access policy.
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the table to delete the row access policy.
     * @param {string} apiParams.tableId - (Required) Required. Table ID of the table to delete the row access policy.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.rowAccessPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies/{+policyId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the specified row access policy by policy ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the table to get the row access policy.
     * @param {string} apiParams.policyId - (Required) Required. Policy ID of the row access policy.
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the table to get the row access policy.
     * @param {string} apiParams.tableId - (Required) Required. Table ID of the table to get the row access policy.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.rowAccessPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies/{+policyId}', 'GET', apiParams, clientConfig);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.rowAccessPolicies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Creates a row access policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the table to get the row access policy.
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the table to get the row access policy.
     * @param {string} apiParams.tableId - (Required) Required. Table ID of the table to get the row access policy.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.rowAccessPolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies', 'POST', apiParams, clientConfig);

    /**
     * Lists all row access policies on the specified table.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of row access policies to list.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} apiParams.pageToken - Page token, returned by a previous call, to request the next page of results.
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the row access policies to list.
     * @param {string} apiParams.tableId - (Required) Required. Table ID of the table to list row access policies.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.rowAccessPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies', 'GET', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.rowAccessPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    /**
     * Updates a row access policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the table to get the row access policy.
     * @param {string} apiParams.policyId - (Required) Required. Policy ID of the row access policy.
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the table to get the row access policy.
     * @param {string} apiParams.tableId - (Required) Required. Table ID of the table to get the row access policy.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.rowAccessPolicies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies/{+policyId}', 'PUT', apiParams, clientConfig);

    this.tabledata = {};

    /**
     * Streams data into BigQuery one record at a time without needing to run a load job.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the destination.
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the destination.
     * @param {string} apiParams.tableId - (Required) Required. Table ID of the destination.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tabledata.insertAll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/insertAll', 'POST', apiParams, clientConfig);

    /**
     * List the content of a table in rows.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset id of the table to list.
     * @param {string} apiParams.formatOptions.timestampOutputFormat - Optional. The API output format for a timestamp. This offers more explicit control over the timestamp output format as compared to the existing `use_int64_timestamp` option.
     * @param {boolean} apiParams.formatOptions.useInt64Timestamp - Optional. Output timestamp as usec int64. Default is false.
     * @param {integer} apiParams.maxResults - Row limit of the table.
     * @param {string} apiParams.pageToken - To retrieve the next page of table data, set this field to the string provided in the pageToken field of the response body from your previous call to tabledata.list.
     * @param {string} apiParams.projectId - (Required) Required. Project id of the table to list.
     * @param {string} apiParams.selectedFields - Subset of fields to return, supports select into sub fields. Example: selected_fields = "a,e.d.f";
     * @param {string} apiParams.startIndex - Start row index of the table.
     * @param {string} apiParams.tableId - (Required) Required. Table id of the table to list.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tabledata.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/data', 'GET', apiParams, clientConfig);

    this.tables = {};

    /**
     * Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the table to delete
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the table to delete
     * @param {string} apiParams.tableId - (Required) Required. Table ID of the table to delete
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tables.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the requested table
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the requested table
     * @param {string} apiParams.selectedFields - List of table schema fields to return (comma-separated). If unspecified, all fields are returned. A fieldMask cannot be used here because the fields will automatically be converted from camelCase to snake_case and the conversion will fail if there are underscores. Since these are fields in BigQuery table schemas, underscores are allowed.
     * @param {string} apiParams.tableId - (Required) Required. Table ID of the requested table
     * @param {string} apiParams.view - Optional. Specifies the view that determines which table information is returned. By default, basic table information and storage statistics (STORAGE_STATS) are returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tables.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}', 'GET', apiParams, clientConfig);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tables.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Creates a new, empty table in the dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the new table
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the new table
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tables.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables', 'POST', apiParams, clientConfig);

    /**
     * Lists all tables in the specified dataset. Requires the READER dataset role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the tables to list
     * @param {integer} apiParams.maxResults - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} apiParams.pageToken - Page token, returned by a previous call, to request the next page of results
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the tables to list
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tables.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables', 'GET', apiParams, clientConfig);

    /**
     * Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports RFC5789 patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.autodetect_schema - Optional.  When true will autodetect schema, else will keep original schema
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the table to update
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the table to update
     * @param {string} apiParams.tableId - (Required) Required. Table ID of the table to update
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tables.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}', 'PATCH', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tables.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tables.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    /**
     * Updates information in an existing table. The update method replaces the entire Table resource, whereas the patch method only replaces fields that are provided in the submitted Table resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.autodetect_schema - Optional.  When true will autodetect schema, else will keep original schema
     * @param {string} apiParams.datasetId - (Required) Required. Dataset ID of the table to update
     * @param {string} apiParams.projectId - (Required) Required. Project ID of the table to update
     * @param {string} apiParams.tableId - (Required) Required. Table ID of the table to update
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tables.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}', 'PUT', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
