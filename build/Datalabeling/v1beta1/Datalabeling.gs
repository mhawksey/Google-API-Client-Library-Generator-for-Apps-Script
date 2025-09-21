
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://datalabeling.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'GET', apiParams, clientConfig);

    this.projects.datasets = {};

    /**
     * Creates dataset. If success return a Dataset resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Dataset resource parent, format: projects/{project_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/datasets', 'POST', apiParams, clientConfig);

    /**
     * Gets dataset by resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists datasets under a project. Pagination is supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter on dataset is not supported at this moment.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListDatasetsResponse.next_page_token of the previous [DataLabelingService.ListDatasets] call. Returns the first page if empty.
     * @param {string} apiParams.parent - (Required) Required. Dataset resource parent, format: projects/{project_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/datasets', 'GET', apiParams, clientConfig);

    /**
     * Deletes a dataset by resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.importData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:importData', 'POST', apiParams, clientConfig);

    /**
     * Exports data and annotations from dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.exportData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:exportData', 'POST', apiParams, clientConfig);

    this.projects.datasets.dataItems = {};

    /**
     * Gets a data item in a dataset by resource name. This API can be called after data are imported into dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the data item to get, format: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.dataItems.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter is not supported at this moment.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty.
     * @param {string} apiParams.parent - (Required) Required. Name of the dataset to list data items, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.dataItems.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dataItems', 'GET', apiParams, clientConfig);

    this.projects.datasets.annotatedDatasets = {};

    /**
     * Gets an annotated dataset by resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the annotated dataset to get, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.annotatedDatasets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists annotated datasets for a dataset. Pagination is supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter is not supported at this moment.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotatedDatasetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotatedDatasets] call. Return first page if empty.
     * @param {string} apiParams.parent - (Required) Required. Name of the dataset to list annotated datasets, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.annotatedDatasets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/annotatedDatasets', 'GET', apiParams, clientConfig);

    /**
     * Deletes an annotated dataset by resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the annotated dataset to delete, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.annotatedDatasets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.datasets.annotatedDatasets.dataItems = {};

    /**
     * Gets a data item in a dataset by resource name. This API can be called after data are imported into dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the data item to get, format: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.annotatedDatasets.dataItems.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter is not supported at this moment.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty.
     * @param {string} apiParams.parent - (Required) Required. Name of the dataset to list data items, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.annotatedDatasets.dataItems.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dataItems', 'GET', apiParams, clientConfig);

    this.projects.datasets.annotatedDatasets.examples = {};

    /**
     * Gets an example by resource name, including both data and annotation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression for filtering Examples. Filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}"
     * @param {string} apiParams.name - (Required) Required. Name of example, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}/examples/{example_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.annotatedDatasets.examples.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists examples in an annotated dataset. Pagination is supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression for filtering Examples. For annotated datasets that have annotation spec set, filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}"
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListExamplesResponse.next_page_token of the previous [DataLabelingService.ListExamples] call. Return first page if empty.
     * @param {string} apiParams.parent - (Required) Required. Example resource parent.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.annotatedDatasets.examples.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/examples', 'GET', apiParams, clientConfig);

    this.projects.datasets.annotatedDatasets.feedbackThreads = {};

    /**
     * Get a FeedbackThread object.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the feedback. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.annotatedDatasets.feedbackThreads.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List FeedbackThreads with pagination.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackThreads.next_page_token of the previous [DataLabelingService.ListFeedbackThreads] call. Return first page if empty.
     * @param {string} apiParams.parent - (Required) Required. FeedbackThread resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.annotatedDatasets.feedbackThreads.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/feedbackThreads', 'GET', apiParams, clientConfig);

    /**
     * Delete a FeedbackThread.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the FeedbackThread that is going to be deleted. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.annotatedDatasets.feedbackThreads.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages = {};

    /**
     * Create a FeedbackMessage object.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. FeedbackMessage resource parent, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/feedbackMessages', 'POST', apiParams, clientConfig);

    /**
     * Get a FeedbackMessage object.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the feedback. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessages/{feedback_message_id}'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List FeedbackMessages with pagination.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackMessages.next_page_token of the previous [DataLabelingService.ListFeedbackMessages] call. Return first page if empty.
     * @param {string} apiParams.parent - (Required) Required. FeedbackMessage resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/feedbackMessages', 'GET', apiParams, clientConfig);

    /**
     * Delete a FeedbackMessage.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the FeedbackMessage that is going to be deleted. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessages/{feedback_message_id}'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.datasets.image = {};

    /**
     * Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.image.label = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/image:label', 'POST', apiParams, clientConfig);

    this.projects.datasets.video = {};

    /**
     * Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.video.label = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/video:label', 'POST', apiParams, clientConfig);

    this.projects.datasets.text = {};

    /**
     * Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Name of the data set to request labeling task, format: projects/{project_id}/datasets/{dataset_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.text.label = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/text:label', 'POST', apiParams, clientConfig);

    this.projects.datasets.evaluations = {};

    /**
     * Gets an evaluation by resource name (to search, use projects.evaluations.search).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the evaluation. Format: "projects/{project_id}/datasets/ {dataset_id}/evaluations/{evaluation_id}'
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.evaluations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.datasets.evaluations.exampleComparisons = {};

    /**
     * Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Name of the Evaluation resource to search for example comparisons from. Format: "projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.datasets.evaluations.exampleComparisons.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/exampleComparisons:search', 'POST', apiParams, clientConfig);

    this.projects.annotationSpecSets = {};

    /**
     * Creates an annotation spec set by providing a set of labels.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. AnnotationSpecSet resource parent, format: projects/{project_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.annotationSpecSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/annotationSpecSets', 'POST', apiParams, clientConfig);

    /**
     * Gets an annotation spec set by resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. AnnotationSpecSet resource name, format: projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.annotationSpecSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists annotation spec sets for a project. Pagination is supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter is not supported at this moment.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotationSpecSetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotationSpecSets] call. Return first page if empty.
     * @param {string} apiParams.parent - (Required) Required. Parent of AnnotationSpecSet resource, format: projects/{project_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.annotationSpecSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/annotationSpecSets', 'GET', apiParams, clientConfig);

    /**
     * Deletes an annotation spec set by resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. AnnotationSpec resource name, format: `projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.annotationSpecSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.instructions = {};

    /**
     * Creates an instruction for how data should be labeled.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Instruction resource parent, format: projects/{project_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.instructions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/instructions', 'POST', apiParams, clientConfig);

    /**
     * Gets an instruction by resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.instructions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists instructions for a project. Pagination is supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter is not supported at this moment.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by ListInstructionsResponse.next_page_token of the previous [DataLabelingService.ListInstructions] call. Return first page if empty.
     * @param {string} apiParams.parent - (Required) Required. Instruction resource parent, format: projects/{project_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.instructions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/instructions', 'GET', apiParams, clientConfig);

    /**
     * Deletes an instruction object by resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.instructions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.evaluations = {};

    /**
     * Searches evaluations within a project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. To search evaluations, you can filter by the following: * evaluation_job.evaluation_job_id (the last part of EvaluationJob.name) * evaluation_job.model_id (the {model_name} portion of EvaluationJob.modelVersion) * evaluation_job.evaluation_job_run_time_start (Minimum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.evaluation_job_run_time_end (Maximum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.job_state (EvaluationJob.state) * annotation_spec.display_name (the Evaluation contains a metric for the annotation spec with this displayName) To filter by multiple critiera, use the `AND` operator or the `OR` operator. The following examples shows a string that filters by several critiera: "evaluation_job.evaluation_job_id = {evaluation_job_id} AND evaluation_job.model_id = {model_name} AND evaluation_job.evaluation_job_run_time_start = {timestamp_1} AND evaluation_job.evaluation_job_run_time_end = {timestamp_2} AND annotation_spec.display_name = {display_name}"
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search request. If you don't specify this field, the API call requests the first page of the search.
     * @param {string} apiParams.parent - (Required) Required. Evaluation search parent (project ID). Format: "projects/ {project_id}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.evaluations.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/evaluations:search', 'GET', apiParams, clientConfig);

    this.projects.evaluationJobs = {};

    /**
     * Creates an evaluation job.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Evaluation job resource parent. Format: "projects/{project_id}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.evaluationJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/evaluationJobs', 'POST', apiParams, clientConfig);

    /**
     * Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}"
     * @param {string} apiParams.updateMask - Optional. Mask for which fields to update. You can only provide the following fields: * `evaluationJobConfig.humanAnnotationConfig.instruction` * `evaluationJobConfig.exampleCount` * `evaluationJobConfig.exampleSamplePercentage` You can provide more than one of these fields by separating them with commas.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.evaluationJobs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Gets an evaluation job by resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the evaluation job. Format: "projects/{project_id} /evaluationJobs/{evaluation_job_id}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.evaluationJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the evaluation job that is going to be paused. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.evaluationJobs.pause = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:pause', 'POST', apiParams, clientConfig);

    /**
     * Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the evaluation job that is going to be resumed. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.evaluationJobs.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:resume', 'POST', apiParams, clientConfig);

    /**
     * Stops and deletes an evaluation job.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the evaluation job that is going to be deleted. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.evaluationJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists all evaluation jobs within a project with possible filters. Pagination is supported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. You can filter the jobs to list by model_id (also known as model_name, as described in EvaluationJob.modelVersion) or by evaluation job state (as described in EvaluationJob.state). To filter by both criteria, use the `AND` operator or the `OR` operator. For example, you can use the following string for your filter: "evaluation_job.model_id = {model_name} AND evaluation_job.state = {evaluation_job_state}"
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken in the response to the previous request. The request returns the first page if this is empty.
     * @param {string} apiParams.parent - (Required) Required. Evaluation job resource parent. Format: "projects/{project_id}"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.evaluationJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/evaluationJobs', 'GET', apiParams, clientConfig);
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
