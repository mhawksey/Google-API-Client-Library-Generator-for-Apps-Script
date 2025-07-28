
/**
 * Google Apps Script client library for the Data Labeling API
 * Documentation URL: https://cloud.google.com/data-labeling/docs/
 * @class
 */
class Datalabeling {
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
    this._rootUrl = 'https://datalabeling.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'GET', params);

    this.projects.datasets = {};

    /**
     * Creates dataset. If success return a Dataset resource.
     * @param {string} params.parent - (Required) Required. Dataset resource parent, format: projects/{project_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.datasets.create = (params) => this._makeRequest('v1beta1/{+parent}/datasets', 'POST', params);

    /**
     * Gets dataset by resource name.
     * @param {string} params.name - (Required) Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}
     * @return {object} The API response object.
     */
    this.projects.datasets.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists datasets under a project. Pagination is supported.
     * @param {string} params.filter - Optional. Filter on dataset is not supported at this moment.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} params.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListDatasetsResponse.next_page_token of the previous [DataLabelingService.ListDatasets] call. Returns the first page if empty.
     * @param {string} params.parent - (Required) Required. Dataset resource parent, format: projects/{project_id}
     * @return {object} The API response object.
     */
    this.projects.datasets.list = (params) => this._makeRequest('v1beta1/{+parent}/datasets', 'GET', params);

    /**
     * Deletes a dataset by resource name.
     * @param {string} params.name - (Required) Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}
     * @return {object} The API response object.
     */
    this.projects.datasets.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
     * @param {string} params.name - (Required) Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.datasets.importData = (params) => this._makeRequest('v1beta1/{+name}:importData', 'POST', params);

    /**
     * Exports data and annotations from dataset.
     * @param {string} params.name - (Required) Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.datasets.exportData = (params) => this._makeRequest('v1beta1/{+name}:exportData', 'POST', params);

    this.projects.datasets.dataItems = {};

    /**
     * Gets a data item in a dataset by resource name. This API can be called after data are imported into dataset.
     * @param {string} params.name - (Required) Required. The name of the data item to get, format: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id}
     * @return {object} The API response object.
     */
    this.projects.datasets.dataItems.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
     * @param {string} params.filter - Optional. Filter is not supported at this moment.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} params.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty.
     * @param {string} params.parent - (Required) Required. Name of the dataset to list data items, format: projects/{project_id}/datasets/{dataset_id}
     * @return {object} The API response object.
     */
    this.projects.datasets.dataItems.list = (params) => this._makeRequest('v1beta1/{+parent}/dataItems', 'GET', params);

    this.projects.datasets.annotatedDatasets = {};

    /**
     * Gets an annotated dataset by resource name.
     * @param {string} params.name - (Required) Required. Name of the annotated dataset to get, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}
     * @return {object} The API response object.
     */
    this.projects.datasets.annotatedDatasets.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists annotated datasets for a dataset. Pagination is supported.
     * @param {string} params.filter - Optional. Filter is not supported at this moment.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} params.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotatedDatasetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotatedDatasets] call. Return first page if empty.
     * @param {string} params.parent - (Required) Required. Name of the dataset to list annotated datasets, format: projects/{project_id}/datasets/{dataset_id}
     * @return {object} The API response object.
     */
    this.projects.datasets.annotatedDatasets.list = (params) => this._makeRequest('v1beta1/{+parent}/annotatedDatasets', 'GET', params);

    /**
     * Deletes an annotated dataset by resource name.
     * @param {string} params.name - (Required) Required. Name of the annotated dataset to delete, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}
     * @return {object} The API response object.
     */
    this.projects.datasets.annotatedDatasets.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.datasets.annotatedDatasets.dataItems = {};

    /**
     * Gets a data item in a dataset by resource name. This API can be called after data are imported into dataset.
     * @param {string} params.name - (Required) Required. The name of the data item to get, format: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id}
     * @return {object} The API response object.
     */
    this.projects.datasets.annotatedDatasets.dataItems.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
     * @param {string} params.filter - Optional. Filter is not supported at this moment.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} params.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty.
     * @param {string} params.parent - (Required) Required. Name of the dataset to list data items, format: projects/{project_id}/datasets/{dataset_id}
     * @return {object} The API response object.
     */
    this.projects.datasets.annotatedDatasets.dataItems.list = (params) => this._makeRequest('v1beta1/{+parent}/dataItems', 'GET', params);

    this.projects.datasets.annotatedDatasets.examples = {};

    /**
     * Gets an example by resource name, including both data and annotation.
     * @param {string} params.filter - Optional. An expression for filtering Examples. Filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}"
     * @param {string} params.name - (Required) Required. Name of example, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}/examples/{example_id}
     * @return {object} The API response object.
     */
    this.projects.datasets.annotatedDatasets.examples.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists examples in an annotated dataset. Pagination is supported.
     * @param {string} params.filter - Optional. An expression for filtering Examples. For annotated datasets that have annotation spec set, filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}"
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} params.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListExamplesResponse.next_page_token of the previous [DataLabelingService.ListExamples] call. Return first page if empty.
     * @param {string} params.parent - (Required) Required. Example resource parent.
     * @return {object} The API response object.
     */
    this.projects.datasets.annotatedDatasets.examples.list = (params) => this._makeRequest('v1beta1/{+parent}/examples', 'GET', params);

    this.projects.datasets.annotatedDatasets.feedbackThreads = {};

    /**
     * Get a FeedbackThread object.
     * @param {string} params.name - (Required) Required. Name of the feedback. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}'.
     * @return {object} The API response object.
     */
    this.projects.datasets.annotatedDatasets.feedbackThreads.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * List FeedbackThreads with pagination.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} params.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackThreads.next_page_token of the previous [DataLabelingService.ListFeedbackThreads] call. Return first page if empty.
     * @param {string} params.parent - (Required) Required. FeedbackThread resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}"
     * @return {object} The API response object.
     */
    this.projects.datasets.annotatedDatasets.feedbackThreads.list = (params) => this._makeRequest('v1beta1/{+parent}/feedbackThreads', 'GET', params);

    /**
     * Delete a FeedbackThread.
     * @param {string} params.name - (Required) Required. Name of the FeedbackThread that is going to be deleted. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}'.
     * @return {object} The API response object.
     */
    this.projects.datasets.annotatedDatasets.feedbackThreads.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages = {};

    /**
     * Create a FeedbackMessage object.
     * @param {string} params.parent - (Required) Required. FeedbackMessage resource parent, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.create = (params) => this._makeRequest('v1beta1/{+parent}/feedbackMessages', 'POST', params);

    /**
     * Get a FeedbackMessage object.
     * @param {string} params.name - (Required) Required. Name of the feedback. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessages/{feedback_message_id}'.
     * @return {object} The API response object.
     */
    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * List FeedbackMessages with pagination.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} params.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackMessages.next_page_token of the previous [DataLabelingService.ListFeedbackMessages] call. Return first page if empty.
     * @param {string} params.parent - (Required) Required. FeedbackMessage resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}"
     * @return {object} The API response object.
     */
    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.list = (params) => this._makeRequest('v1beta1/{+parent}/feedbackMessages', 'GET', params);

    /**
     * Delete a FeedbackMessage.
     * @param {string} params.name - (Required) Required. Name of the FeedbackMessage that is going to be deleted. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessages/{feedback_message_id}'.
     * @return {object} The API response object.
     */
    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.datasets.image = {};

    /**
     * Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
     * @param {string} params.parent - (Required) Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.datasets.image.label = (params) => this._makeRequest('v1beta1/{+parent}/image:label', 'POST', params);

    this.projects.datasets.video = {};

    /**
     * Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
     * @param {string} params.parent - (Required) Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.datasets.video.label = (params) => this._makeRequest('v1beta1/{+parent}/video:label', 'POST', params);

    this.projects.datasets.text = {};

    /**
     * Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
     * @param {string} params.parent - (Required) Required. Name of the data set to request labeling task, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.datasets.text.label = (params) => this._makeRequest('v1beta1/{+parent}/text:label', 'POST', params);

    this.projects.datasets.evaluations = {};

    /**
     * Gets an evaluation by resource name (to search, use projects.evaluations.search).
     * @param {string} params.name - (Required) Required. Name of the evaluation. Format: "projects/{project_id}/datasets/ {dataset_id}/evaluations/{evaluation_id}'
     * @return {object} The API response object.
     */
    this.projects.datasets.evaluations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.datasets.evaluations.exampleComparisons = {};

    /**
     * Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
     * @param {string} params.parent - (Required) Required. Name of the Evaluation resource to search for example comparisons from. Format: "projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.datasets.evaluations.exampleComparisons.search = (params) => this._makeRequest('v1beta1/{+parent}/exampleComparisons:search', 'POST', params);

    this.projects.annotationSpecSets = {};

    /**
     * Creates an annotation spec set by providing a set of labels.
     * @param {string} params.parent - (Required) Required. AnnotationSpecSet resource parent, format: projects/{project_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.annotationSpecSets.create = (params) => this._makeRequest('v1beta1/{+parent}/annotationSpecSets', 'POST', params);

    /**
     * Gets an annotation spec set by resource name.
     * @param {string} params.name - (Required) Required. AnnotationSpecSet resource name, format: projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}
     * @return {object} The API response object.
     */
    this.projects.annotationSpecSets.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists annotation spec sets for a project. Pagination is supported.
     * @param {string} params.filter - Optional. Filter is not supported at this moment.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} params.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotationSpecSetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotationSpecSets] call. Return first page if empty.
     * @param {string} params.parent - (Required) Required. Parent of AnnotationSpecSet resource, format: projects/{project_id}
     * @return {object} The API response object.
     */
    this.projects.annotationSpecSets.list = (params) => this._makeRequest('v1beta1/{+parent}/annotationSpecSets', 'GET', params);

    /**
     * Deletes an annotation spec set by resource name.
     * @param {string} params.name - (Required) Required. AnnotationSpec resource name, format: `projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}`.
     * @return {object} The API response object.
     */
    this.projects.annotationSpecSets.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.instructions = {};

    /**
     * Creates an instruction for how data should be labeled.
     * @param {string} params.parent - (Required) Required. Instruction resource parent, format: projects/{project_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.instructions.create = (params) => this._makeRequest('v1beta1/{+parent}/instructions', 'POST', params);

    /**
     * Gets an instruction by resource name.
     * @param {string} params.name - (Required) Required. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id}
     * @return {object} The API response object.
     */
    this.projects.instructions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists instructions for a project. Pagination is supported.
     * @param {string} params.filter - Optional. Filter is not supported at this moment.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} params.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListInstructionsResponse.next_page_token of the previous [DataLabelingService.ListInstructions] call. Return first page if empty.
     * @param {string} params.parent - (Required) Required. Instruction resource parent, format: projects/{project_id}
     * @return {object} The API response object.
     */
    this.projects.instructions.list = (params) => this._makeRequest('v1beta1/{+parent}/instructions', 'GET', params);

    /**
     * Deletes an instruction object by resource name.
     * @param {string} params.name - (Required) Required. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id}
     * @return {object} The API response object.
     */
    this.projects.instructions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.evaluations = {};

    /**
     * Searches evaluations within a project.
     * @param {string} params.filter - Optional. To search evaluations, you can filter by the following: * evaluation_job.evaluation_job_id (the last part of EvaluationJob.name) * evaluation_job.model_id (the {model_name} portion of EvaluationJob.modelVersion) * evaluation_job.evaluation_job_run_time_start (Minimum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.evaluation_job_run_time_end (Maximum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.job_state (EvaluationJob.state) * annotation_spec.display_name (the Evaluation contains a metric for the annotation spec with this displayName) To filter by multiple critiera, use the `AND` operator or the `OR` operator. The following examples shows a string that filters by several critiera: "evaluation_job.evaluation_job_id = {evaluation_job_id} AND evaluation_job.model_id = {model_name} AND evaluation_job.evaluation_job_run_time_start = {timestamp_1} AND evaluation_job.evaluation_job_run_time_end = {timestamp_2} AND annotation_spec.display_name = {display_name}"
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} params.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search request. If you don't specify this field, the API call requests the first page of the search.
     * @param {string} params.parent - (Required) Required. Evaluation search parent (project ID). Format: "projects/ {project_id}"
     * @return {object} The API response object.
     */
    this.projects.evaluations.search = (params) => this._makeRequest('v1beta1/{+parent}/evaluations:search', 'GET', params);

    this.projects.evaluationJobs = {};

    /**
     * Creates an evaluation job.
     * @param {string} params.parent - (Required) Required. Evaluation job resource parent. Format: "projects/{project_id}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.evaluationJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/evaluationJobs', 'POST', params);

    /**
     * Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
     * @param {string} params.name - (Required) Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}"
     * @param {string} params.updateMask - Optional. Mask for which fields to update. You can only provide the following fields: * `evaluationJobConfig.humanAnnotationConfig.instruction` * `evaluationJobConfig.exampleCount` * `evaluationJobConfig.exampleSamplePercentage` You can provide more than one of these fields by separating them with commas.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.evaluationJobs.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Gets an evaluation job by resource name.
     * @param {string} params.name - (Required) Required. Name of the evaluation job. Format: "projects/{project_id} /evaluationJobs/{evaluation_job_id}"
     * @return {object} The API response object.
     */
    this.projects.evaluationJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
     * @param {string} params.name - (Required) Required. Name of the evaluation job that is going to be paused. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.evaluationJobs.pause = (params) => this._makeRequest('v1beta1/{+name}:pause', 'POST', params);

    /**
     * Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
     * @param {string} params.name - (Required) Required. Name of the evaluation job that is going to be resumed. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.evaluationJobs.resume = (params) => this._makeRequest('v1beta1/{+name}:resume', 'POST', params);

    /**
     * Stops and deletes an evaluation job.
     * @param {string} params.name - (Required) Required. Name of the evaluation job that is going to be deleted. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}"
     * @return {object} The API response object.
     */
    this.projects.evaluationJobs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Lists all evaluation jobs within a project with possible filters. Pagination is supported.
     * @param {string} params.filter - Optional. You can filter the jobs to list by model_id (also known as model_name, as described in EvaluationJob.modelVersion) or by evaluation job state (as described in EvaluationJob.state). To filter by both criteria, use the `AND` operator or the `OR` operator. For example, you can use the following string for your filter: "evaluation_job.model_id = {model_name} AND evaluation_job.state = {evaluation_job_state}"
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} params.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken in the response to the previous request. The request returns the first page if this is empty.
     * @param {string} params.parent - (Required) Required. Evaluation job resource parent. Format: "projects/{project_id}"
     * @return {object} The API response object.
     */
    this.projects.evaluationJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/evaluationJobs', 'GET', params);
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
