
/**
 * Google Apps Script client library for the Contact Center AI Insights API
 * Documentation URL: https://cloud.google.com/contact-center/insights/docs
 * @class
 */
class Contactcenterinsights {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://contactcenterinsights.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    /**
     * Gets project-level settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the settings resource to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.getSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates project-level settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the settings resource. Format: projects/{project}/locations/{location}/settings
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.updateSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Gets location-level encryption key specification.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the encryption spec resource to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.getEncryptionSpec = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Query metrics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) Required. The location of the data. "projects/{project}/locations/{location}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.queryMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}:queryMetrics', 'POST', apiParams, clientConfig);

    /**
     * Generates a summary of predefined performance metrics for a set of conversations. Conversations can be specified by specifying a time window and an agent id, for now. The summary includes a comparison of metrics computed for conversations in the previous time period, and also a comparison with peers in the same time period.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the conversations to derive performance stats from. "projects/{project}/locations/{location}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.queryPerformanceOverview = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:queryPerformanceOverview', 'POST', apiParams, clientConfig);

    /**
     * List all feedback labels by project number.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter to reduce results to a specific subset in the entire project. Supports disjunctions (OR) and conjunctions (AND). Supported fields: * `issue_model_id` * `qa_question_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING
     * @param {integer} apiParams.pageSize - Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListAllFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListAllFeedbackLabels` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of all feedback labels per project.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.listAllFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:listAllFeedbackLabels', 'GET', apiParams, clientConfig);

    /**
     * Upload feedback labels from an external source in bulk. Currently supports labeling Quality AI example conversations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for new feedback labels.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bulkUploadFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:bulkUploadFeedbackLabels', 'POST', apiParams, clientConfig);

    /**
     * Download feedback labels in bulk from an external source. Currently supports exporting Quality AI example conversations with transcripts and question bodies.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for new feedback labels.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bulkDownloadFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:bulkDownloadFeedbackLabels', 'POST', apiParams, clientConfig);

    /**
     * Delete feedback labels in bulk using a filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for new feedback labels.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bulkDeleteFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:bulkDeleteFeedbackLabels', 'POST', apiParams, clientConfig);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {boolean} apiParams.returnPartialSuccess - When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the [ListOperationsResponse.unreachable] field. This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`. This field is not by default supported and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.conversations = {};

    /**
     * Creates a conversation. Note that this method does not support audio transcription or redaction. Use `conversations.upload` instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversationId - A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the conversation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations', 'POST', apiParams, clientConfig);

    /**
     * Create a long-running conversation upload operation. This method differs from `CreateConversation` by allowing audio transcription and optional DLP redaction.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the conversation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:upload', 'POST', apiParams, clientConfig);

    /**
     * Updates a conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - Optional. Defaults to false. If set to true, and the conversation is not found, a new conversation will be created. In this situation, `update_mask` is ignored.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation}
     * @param {string} apiParams.updateMask - The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `agent_id` * `language_code` * `labels` * `metadata` * `quality_metadata` * `call_metadata` * `start_time` * `expire_time` or `ttl` * `data_source.gcs_source.audio_uri` or `data_source.dialogflow_source.audio_uri`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Gets a conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the conversation to get.
     * @param {string} apiParams.view - The level of details of the conversation. Default is `FULL`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists conversations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     * @param {string} apiParams.orderBy - Optional. The attribute by which to order conversations in the response. If empty, conversations will be ordered by descending creation time. Supported values are one of the following: * create_time * customer_satisfaction_rating * duration * latest_analysis * start_time * turn_count The default sort order is ascending. To specify order, append `asc` or `desc` (`create_time desc`). For more details, see [Google AIPs Ordering](https://google.aip.dev/132#ordering).
     * @param {integer} apiParams.pageSize - The maximum number of conversations to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} apiParams.pageToken - The value returned by the last `ListConversationsResponse`. This value indicates that this is a continuation of a prior `ListConversations` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the conversation.
     * @param {string} apiParams.view - The level of details of the conversation. Default is `BASIC`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations', 'GET', apiParams, clientConfig);

    /**
     * Deletes a conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses.
     * @param {string} apiParams.name - (Required) Required. The name of the conversation to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Samples conversations based on user configuration and handles the sampled conversations for different use cases.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the dataset.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.sample = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:sample', 'POST', apiParams, clientConfig);

    /**
     * Analyzes multiple conversations in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to create analyses in.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.bulkAnalyze = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:bulkAnalyze', 'POST', apiParams, clientConfig);

    /**
     * Deletes multiple conversations in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to delete conversations from. Format: projects/{project}/locations/{location}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.bulkDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:bulkDelete', 'POST', apiParams, clientConfig);

    /**
     * Imports conversations and processes them according to the user's configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for new conversations.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.ingest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:ingest', 'POST', apiParams, clientConfig);

    /**
     * Gets conversation statistics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter to reduce results to a specific subset. This field is useful for getting statistics about conversations with specific properties.
     * @param {string} apiParams.location - (Required) Required. The location of the conversations.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.calculateStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}/conversations:calculateStats', 'GET', apiParams, clientConfig);

    this.projects.locations.conversations.analyses = {};

    /**
     * Creates an analysis. The long running operation is done when the analysis has completed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the analysis.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.analyses.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analyses', 'POST', apiParams, clientConfig);

    /**
     * Gets an analysis.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the analysis to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.analyses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists analyses.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     * @param {integer} apiParams.pageSize - The maximum number of analyses to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - The value returned by the last `ListAnalysesResponse`; indicates that this is a continuation of a prior `ListAnalyses` call and the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the analyses.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.analyses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analyses', 'GET', apiParams, clientConfig);

    /**
     * Deletes an analysis.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the analysis to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.analyses.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.conversations.feedbackLabels = {};

    /**
     * Create feedback label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.feedbackLabelId - Optional. The ID of the feedback label to create. If one is not specified it will be generated by the server.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the feedback label.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.feedbackLabels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/feedbackLabels', 'POST', apiParams, clientConfig);

    /**
     * List feedback labels.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter to reduce results to a specific subset. Supports disjunctions (OR) and conjunctions (AND). Automatically sorts by conversation ID. To sort by all feedback labels in a project see ListAllFeedbackLabels. Supported fields: * `issue_model_id` * `qa_question_id` * `qa_scorecard_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING
     * @param {integer} apiParams.pageSize - Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListFeedbackLabels` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the feedback labels.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.feedbackLabels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/feedbackLabels', 'GET', apiParams, clientConfig);

    /**
     * Get feedback label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the feedback label to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.feedbackLabels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update feedback label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. Resource name of the FeedbackLabel. Format: projects/{project}/locations/{location}/conversations/{conversation}/feedbackLabels/{feedback_label}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.feedbackLabels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete feedback label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the feedback label to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.feedbackLabels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.conversations.assessments = {};

    /**
     * Create Assessment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the assessment.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.assessments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assessments', 'POST', apiParams, clientConfig);

    /**
     * Get Assessment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the assessment to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.assessments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List Assessments.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter to reduce results to a specific subset. Supported filters include: * `state` - The state of the assessment * `agent_info.agent_id` - The ID of the agent the assessment is for
     * @param {integer} apiParams.pageSize - The maximum number of assessments to list. If zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListAssessmentRulesResponse`; indicates that this is a continuation of a prior `ListAssessmentRules` call and the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the assessments. To list all assessments in a location, substitute the conversation ID with a '-' character.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.assessments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assessments', 'GET', apiParams, clientConfig);

    /**
     * Delete an Assessment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. If set to true, all of this assessment's notes will also be deleted. Otherwise, the request will only succeed if it has no notes.
     * @param {string} apiParams.name - (Required) Required. The name of the assessment to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.assessments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Publish an Assessment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the assessment to publish.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.assessments.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:publish', 'POST', apiParams, clientConfig);

    /**
     * Appeal an Assessment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the assessment to appeal.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.assessments.appeal = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:appeal', 'POST', apiParams, clientConfig);

    /**
     * Finalize an Assessment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the assessment to finalize.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.assessments.finalize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:finalize', 'POST', apiParams, clientConfig);

    this.projects.locations.conversations.assessments.notes = {};

    /**
     * Create Note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the note.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.assessments.notes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notes', 'POST', apiParams, clientConfig);

    /**
     * List Notes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of notes to return in the response. If zero the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListNotesResponse`. This value indicates that this is a continuation of a prior `ListNotes` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the notes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.assessments.notes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notes', 'GET', apiParams, clientConfig);

    /**
     * Update Note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the note. Format: projects/{project}/locations/{location}/conversations/{conversation}/assessments/{assessment}/notes/{note}
     * @param {string} apiParams.updateMask - Optional. The list of fields to be updated. If the update_mask is empty, all updateable fields will be updated. Acceptable fields include: * `content`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.assessments.notes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a Note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the note to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.assessments.notes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.datasets = {};

    /**
     * Creates a dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.datasetId - Optional. The ID to use for the dataset.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the dataset.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/datasets', 'POST', apiParams, clientConfig);

    /**
     * List datasets matching the input.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter to reduce results to a specific subset. Useful for querying datasets with specific properties. Supported fields include, for Q2 though we only support list by project: - `type` - `description` - `project_number`
     * @param {integer} apiParams.pageSize - Optional. The maximum number of datasets to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListDatasetsResponse`; indicates that this is a continuation of a prior `ListDatasets` call and the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the dataset.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/datasets', 'GET', apiParams, clientConfig);

    /**
     * Gets a dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the dataset to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. Identifier. Resource name of the dataset. Format: projects/{project}/locations/{location}/datasets/{dataset}
     * @param {string} apiParams.updateMask - Optional. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the dataset to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * List all feedback labels by project number.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter to reduce results to a specific subset in the entire project. Supports disjunctions (OR) and conjunctions (AND). Supported fields: * `issue_model_id` * `qa_question_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING
     * @param {integer} apiParams.pageSize - Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListAllFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListAllFeedbackLabels` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of all feedback labels per project.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.listAllFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:listAllFeedbackLabels', 'GET', apiParams, clientConfig);

    /**
     * Upload feedback labels from an external source in bulk. Currently supports labeling Quality AI example conversations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for new feedback labels.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.bulkUploadFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:bulkUploadFeedbackLabels', 'POST', apiParams, clientConfig);

    /**
     * Download feedback labels in bulk from an external source. Currently supports exporting Quality AI example conversations with transcripts and question bodies.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for new feedback labels.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.bulkDownloadFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:bulkDownloadFeedbackLabels', 'POST', apiParams, clientConfig);

    /**
     * Delete feedback labels in bulk using a filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for new feedback labels.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.bulkDeleteFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:bulkDeleteFeedbackLabels', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.conversations = {};

    /**
     * Gets a conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the conversation to get.
     * @param {string} apiParams.view - The level of details of the conversation. Default is `FULL`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists conversations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     * @param {string} apiParams.orderBy - Optional. The attribute by which to order conversations in the response. If empty, conversations will be ordered by descending creation time. Supported values are one of the following: * create_time * customer_satisfaction_rating * duration * latest_analysis * start_time * turn_count The default sort order is ascending. To specify order, append `asc` or `desc` (`create_time desc`). For more details, see [Google AIPs Ordering](https://google.aip.dev/132#ordering).
     * @param {integer} apiParams.pageSize - The maximum number of conversations to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} apiParams.pageToken - The value returned by the last `ListConversationsResponse`. This value indicates that this is a continuation of a prior `ListConversations` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the conversation.
     * @param {string} apiParams.view - The level of details of the conversation. Default is `BASIC`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations', 'GET', apiParams, clientConfig);

    /**
     * Deletes a conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses.
     * @param {string} apiParams.name - (Required) Required. The name of the conversation to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Samples conversations based on user configuration and handles the sampled conversations for different use cases.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the dataset.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.sample = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:sample', 'POST', apiParams, clientConfig);

    /**
     * Analyzes multiple conversations in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to create analyses in.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.bulkAnalyze = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:bulkAnalyze', 'POST', apiParams, clientConfig);

    /**
     * Deletes multiple conversations in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to delete conversations from. Format: projects/{project}/locations/{location}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.bulkDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:bulkDelete', 'POST', apiParams, clientConfig);

    /**
     * Imports conversations and processes them according to the user's configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for new conversations.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.ingest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:ingest', 'POST', apiParams, clientConfig);

    /**
     * Gets conversation statistics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) Required. The location of the conversations.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.calculateStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}/conversations:calculateStats', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.conversations.analyses = {};

    /**
     * Creates an analysis. The long running operation is done when the analysis has completed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the analysis.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.analyses.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analyses', 'POST', apiParams, clientConfig);

    /**
     * Gets an analysis.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the analysis to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.analyses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists analyses.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     * @param {integer} apiParams.pageSize - The maximum number of analyses to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - The value returned by the last `ListAnalysesResponse`; indicates that this is a continuation of a prior `ListAnalyses` call and the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the analyses.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.analyses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analyses', 'GET', apiParams, clientConfig);

    /**
     * Deletes an analysis.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the analysis to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.analyses.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.datasets.conversations.feedbackLabels = {};

    /**
     * Create feedback label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.feedbackLabelId - Optional. The ID of the feedback label to create. If one is not specified it will be generated by the server.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the feedback label.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.feedbackLabels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/feedbackLabels', 'POST', apiParams, clientConfig);

    /**
     * List feedback labels.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter to reduce results to a specific subset. Supports disjunctions (OR) and conjunctions (AND). Automatically sorts by conversation ID. To sort by all feedback labels in a project see ListAllFeedbackLabels. Supported fields: * `issue_model_id` * `qa_question_id` * `qa_scorecard_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING
     * @param {integer} apiParams.pageSize - Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListFeedbackLabels` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the feedback labels.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.feedbackLabels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/feedbackLabels', 'GET', apiParams, clientConfig);

    /**
     * Get feedback label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the feedback label to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.feedbackLabels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update feedback label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. Resource name of the FeedbackLabel. Format: projects/{project}/locations/{location}/conversations/{conversation}/feedbackLabels/{feedback_label}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.feedbackLabels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete feedback label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the feedback label to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.conversations.feedbackLabels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.datasets.insightsdata = {};

    /**
     * Export insights data to a destination defined in the request body.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to export data from.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.insightsdata.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/insightsdata:export', 'POST', apiParams, clientConfig);

    this.projects.locations.insightsdata = {};

    /**
     * Export insights data to a destination defined in the request body.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to export data from.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.insightsdata.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/insightsdata:export', 'POST', apiParams, clientConfig);

    this.projects.locations.issueModels = {};

    /**
     * Creates an issue model.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the issue model.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/issueModels', 'POST', apiParams, clientConfig);

    /**
     * Updates an issue model.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model}
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Gets an issue model.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the issue model to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists issue models.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the issue model.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/issueModels', 'GET', apiParams, clientConfig);

    /**
     * Deletes an issue model.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the issue model to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The issue model to deploy.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.deploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:deploy', 'POST', apiParams, clientConfig);

    /**
     * Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The issue model to undeploy.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.undeploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undeploy', 'POST', apiParams, clientConfig);

    /**
     * Exports an issue model to the provided destination.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The issue model to export.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:export', 'POST', apiParams, clientConfig);

    /**
     * Imports an issue model from a Cloud Storage bucket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the issue model.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/issueModels:import', 'POST', apiParams, clientConfig);

    /**
     * Gets an issue model's statistics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.issueModel - (Required) Required. The resource name of the issue model to query against.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.calculateIssueModelStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+issueModel}:calculateIssueModelStats', 'GET', apiParams, clientConfig);

    this.projects.locations.issueModels.issues = {};

    /**
     * Gets an issue.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the issue to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.issues.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists issues.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the issue.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.issues.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/issues', 'GET', apiParams, clientConfig);

    /**
     * Updates an issue.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the issue. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue}
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.issues.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Creates an issue.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the issue.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.issues.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/issues', 'POST', apiParams, clientConfig);

    /**
     * Deletes an issue.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the issue to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.issueModels.issues.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.phraseMatchers = {};

    /**
     * Creates a phrase matcher.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the phrase matcher. Required. The location to create a phrase matcher for. Format: `projects//locations/` or `projects//locations/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.phraseMatchers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/phraseMatchers', 'POST', apiParams, clientConfig);

    /**
     * Gets a phrase matcher.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the phrase matcher to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.phraseMatchers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists phrase matchers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter to reduce results to a specific subset. Useful for querying phrase matchers with specific properties.
     * @param {integer} apiParams.pageSize - The maximum number of phrase matchers to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - The value returned by the last `ListPhraseMatchersResponse`. This value indicates that this is a continuation of a prior `ListPhraseMatchers` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the phrase matcher.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.phraseMatchers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/phraseMatchers', 'GET', apiParams, clientConfig);

    /**
     * Deletes a phrase matcher.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the phrase matcher to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.phraseMatchers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a phrase matcher.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the phrase matcher. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.phraseMatchers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.analysisRules = {};

    /**
     * Creates a analysis rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the analysis rule. Required. The location to create a analysis rule for. Format: `projects//locations/` or `projects//locations/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.analysisRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analysisRules', 'POST', apiParams, clientConfig);

    /**
     * Get a analysis rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the AnalysisRule to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.analysisRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists analysis rules.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of analysis rule to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListAnalysisRulesResponse`; indicates that this is a continuation of a prior `ListAnalysisRules` call and the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the analysis rules.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.analysisRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analysisRules', 'GET', apiParams, clientConfig);

    /**
     * Updates a analysis rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the analysis rule. Format: projects/{project}/locations/{location}/analysisRules/{analysis_rule}
     * @param {string} apiParams.updateMask - Optional. The list of fields to be updated. If the update_mask is not provided, the update will be applied to all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.analysisRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a analysis rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the analysis rule to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.analysisRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.assessmentRules = {};

    /**
     * Creates an assessment rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.assessmentRuleId - Optional. A unique ID for the new AssessmentRule. This ID will become the final component of the AssessmentRule's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the assessment rule. Required. The location to create a assessment rule for. Format: `projects//locations/` or `projects//locations/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.assessmentRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assessmentRules', 'POST', apiParams, clientConfig);

    /**
     * Get an assessment rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the assessment rule to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.assessmentRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists assessment rules.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of assessment rule to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListAssessmentRulesResponse`; indicates that this is a continuation of a prior `ListAssessmentRules` call and the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the assessment rules.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.assessmentRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assessmentRules', 'GET', apiParams, clientConfig);

    /**
     * Updates an assessment rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the assessment rule. Format: projects/{project}/locations/{location}/assessmentRules/{assessment_rule}
     * @param {string} apiParams.updateMask - Optional. The list of fields to be updated. If the update_mask is not provided, the update will be applied to all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.assessmentRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an assessment rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the assessment rule to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.assessmentRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.encryptionSpec = {};

    /**
     * Initializes a location-level encryption key specification. An error will result if the location has resources already created before the initialization. After the encryption specification is initialized at a location, it is immutable and all newly created resources under the location will be encrypted with the existing specification.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the encryption key specification resource. Format: projects/{project}/locations/{location}/encryptionSpec
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.encryptionSpec.initialize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:initialize', 'POST', apiParams, clientConfig);

    this.projects.locations.views = {};

    /**
     * Creates a view.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the view. Required. The location to create a view for. Format: `projects//locations/` or `projects//locations/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.views.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/views', 'POST', apiParams, clientConfig);

    /**
     * Gets a view.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the view to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.views.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists views.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of views to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - The value returned by the last `ListViewsResponse`; indicates that this is a continuation of a prior `ListViews` call and the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the views.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.views.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/views', 'GET', apiParams, clientConfig);

    /**
     * Updates a view.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view}
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.views.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a view.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the view to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.views.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.qaQuestionTags = {};

    /**
     * Creates a QaQuestionTag.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the QaQuestionTag.
     * @param {string} apiParams.qaQuestionTagId - Optional. A unique ID for the new QaQuestionTag. This ID will become the final component of the QaQuestionTag's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaQuestionTags.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/qaQuestionTags', 'POST', apiParams, clientConfig);

    /**
     * Gets a QaQuestionTag.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the QaQuestionTag to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaQuestionTags.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a QaQuestionTag.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Resource name for the QaQuestionTag Format projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag} In the above format, the last segment, i.e., qa_question_tag, is a server-generated ID corresponding to the tag resource.
     * @param {string} apiParams.updateMask - Optional. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `qa_question_tag_name` - the name of the tag * `qa_question_ids` - the list of questions the tag applies to
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaQuestionTags.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a QaQuestionTag.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the QaQuestionTag to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaQuestionTags.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists the question tags.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter to reduce results to a specific subset. Supports conjunctions (ie. AND operators). Supported fields include the following: * `project_id` - id of the project to list tags for * `qa_scorecard_id` - id of the scorecard to list tags for * `revision_id` - id of the scorecard revision to list tags for` * `qa_question_id - id of the question to list tags for`
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the QaQuestionTags.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaQuestionTags.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/qaQuestionTags', 'GET', apiParams, clientConfig);

    this.projects.locations.qaScorecards = {};

    /**
     * Create a QaScorecard.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the QaScorecard.
     * @param {string} apiParams.qaScorecardId - Optional. A unique ID for the new QaScorecard. This ID will become the final component of the QaScorecard's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/qaScorecards', 'POST', apiParams, clientConfig);

    /**
     * Gets a QaScorecard.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the QaScorecard to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a QaScorecard.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The scorecard name. Format: projects/{project}/locations/{location}/qaScorecards/{qa_scorecard}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `description` * `display_name`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a QaScorecard.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. If set to true, all of this QaScorecard's child resources will also be deleted. Otherwise, the request will only succeed if it has none.
     * @param {string} apiParams.name - (Required) Required. The name of the QaScorecard to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists QaScorecards.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of scorecards to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListQaScorecardsResponse`. This value indicates that this is a continuation of a prior `ListQaScorecards` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the scorecards.
     * @param {string} apiParams.qaScorecardSources - Optional. The source of scorecards are based on how those Scorecards were created, e.g., a customer-defined scorecard, a predefined scorecard, etc. This field is used to retrieve Scorecards of one or more sources.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/qaScorecards', 'GET', apiParams, clientConfig);

    this.projects.locations.qaScorecards.revisions = {};

    /**
     * Creates a QaScorecardRevision.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the QaScorecardRevision.
     * @param {string} apiParams.qaScorecardRevisionId - Optional. A unique ID for the new QaScorecardRevision. This ID will become the final component of the QaScorecardRevision's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.revisions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/revisions', 'POST', apiParams, clientConfig);

    /**
     * Gets a QaScorecardRevision.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the QaScorecardRevision to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.revisions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Fine tune one or more QaModels.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for new fine tuning job instance.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.revisions.tuneQaScorecardRevision = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:tuneQaScorecardRevision', 'POST', apiParams, clientConfig);

    /**
     * Deploy a QaScorecardRevision.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the QaScorecardRevision to deploy.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.revisions.deploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:deploy', 'POST', apiParams, clientConfig);

    /**
     * Undeploy a QaScorecardRevision.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the QaScorecardRevision to undeploy.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.revisions.undeploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undeploy', 'POST', apiParams, clientConfig);

    /**
     * Deletes a QaScorecardRevision.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. If set to true, all of this QaScorecardRevision's child resources will also be deleted. Otherwise, the request will only succeed if it has none.
     * @param {string} apiParams.name - (Required) Required. The name of the QaScorecardRevision to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.revisions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists all revisions under the parent QaScorecard.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter to reduce results to a specific subset. Useful for querying scorecard revisions with specific properties.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of scorecard revisions to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListQaScorecardRevisionsResponse`. This value indicates that this is a continuation of a prior `ListQaScorecardRevisions` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the scorecard revisions. To list all revisions of all scorecards, substitute the QaScorecard ID with a '-' character.
     * @param {string} apiParams.qaScorecardSources - Optional. The source of scorecards are based on how those Scorecards were created, e.g., a customer-defined scorecard, a predefined scorecard, etc. This field is used to retrieve Scorecards Revisions from Scorecards of one or more sources.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.revisions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/revisions', 'GET', apiParams, clientConfig);

    this.projects.locations.qaScorecards.revisions.qaQuestions = {};

    /**
     * Create a QaQuestion.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the QaQuestion.
     * @param {string} apiParams.qaQuestionId - Optional. A unique ID for the new question. This ID will become the final component of the question's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.revisions.qaQuestions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/qaQuestions', 'POST', apiParams, clientConfig);

    /**
     * Gets a QaQuestion.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the QaQuestion to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.revisions.qaQuestions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a QaQuestion.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the question. Format: projects/{project}/locations/{location}/qaScorecards/{qa_scorecard}/revisions/{revision}/qaQuestions/{qa_question}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `abbreviation` * `answer_choices` * `answer_instructions` * `order` * `question_body` * `tags`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.revisions.qaQuestions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a QaQuestion.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the QaQuestion to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.revisions.qaQuestions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists QaQuestions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of questions to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListQaQuestionsResponse`. This value indicates that this is a continuation of a prior `ListQaQuestions` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the questions.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.qaScorecards.revisions.qaQuestions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/qaQuestions', 'GET', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets = {};

    /**
     * Create AuthorizedViewSet
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.authorizedViewSetId - Optional. A unique ID for the new AuthorizedViewSet. This ID will become the final component of the AuthorizedViewSet's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. See https://google.aip.dev/122#resource-id-segments
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the AuthorizedViewSet.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizedViewSets', 'POST', apiParams, clientConfig);

    /**
     * Get AuthorizedViewSet
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the AuthorizedViewSet to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List AuthorizedViewSets
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. The filter expression to filter authorized view sets listed in the response.
     * @param {string} apiParams.orderBy - Optional. The order by expression to order authorized view sets listed in the response.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of view sets to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListAuthorizedViewSetsResponse`. This value indicates that this is a continuation of a prior `ListAuthorizedViewSets` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the AuthorizedViewSets.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizedViewSets', 'GET', apiParams, clientConfig);

    /**
     * Updates an AuthorizedViewSet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the AuthorizedViewSet. Format: projects/{project}/locations/{location}/authorizedViewSets/{authorized_view_set}
     * @param {string} apiParams.updateMask - Optional. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `display_name`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an AuthorizedViewSet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. If set to true, all of this AuthorizedViewSet's child resources will also be deleted. Otherwise, the request will only succeed if it has none.
     * @param {string} apiParams.name - (Required) Required. The name of the AuthorizedViewSet to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets.authorizedViews = {};

    /**
     * Query metrics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) Required. The location of the data. "projects/{project}/locations/{location}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.queryMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}:queryMetrics', 'POST', apiParams, clientConfig);

    /**
     * Generates a summary of predefined performance metrics for a set of conversations. Conversations can be specified by specifying a time window and an agent id, for now. The summary includes a comparison of metrics computed for conversations in the previous time period, and also a comparison with peers in the same time period.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the conversations to derive performance stats from. "projects/{project}/locations/{location}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.queryPerformanceOverview = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:queryPerformanceOverview', 'POST', apiParams, clientConfig);

    /**
     * Create AuthorizedView
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.authorizedViewId - Optional. A unique ID for the new AuthorizedView. This ID will become the final component of the AuthorizedView's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. See https://google.aip.dev/122#resource-id-segments
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the AuthorizedView.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizedViews', 'POST', apiParams, clientConfig);

    /**
     * Get AuthorizedView
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the AuthorizedView to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List AuthorizedViewSets
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. The filter expression to filter authorized views listed in the response.
     * @param {string} apiParams.orderBy - Optional. The order by expression to order authorized views listed in the response.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of view to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListAuthorizedViewsResponse`. This value indicates that this is a continuation of a prior `ListAuthorizedViews` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the AuthorizedViews. If the parent is set to `-`, all AuthorizedViews under the location will be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizedViews', 'GET', apiParams, clientConfig);

    /**
     * SearchAuthorizedViewSets
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.orderBy - Optional. The order by expression to order authorized views listed in the response.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of view to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListAuthorizedViewsResponse`. This value indicates that this is a continuation of a prior `ListAuthorizedViews` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the AuthorizedViews. If the parent is set to `-`, all AuthorizedViews under the location will be returned.
     * @param {string} apiParams.query - Optional. The query expression to search authorized views.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizedViews:search', 'GET', apiParams, clientConfig);

    /**
     * Updates an AuthorizedView.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the AuthorizedView. Format: projects/{project}/locations/{location}/authorizedViewSets/{authorized_view_set}/authorizedViews/{authorized_view}
     * @param {string} apiParams.updateMask - Optional. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `conversation_filter` * `display_name`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an AuthorizedView.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the AuthorizedView to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets.authorizedViews.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {boolean} apiParams.returnPartialSuccess - When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the [ListOperationsResponse.unreachable] field. This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`. This field is not by default supported and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations = {};

    /**
     * Gets a conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the conversation to get.
     * @param {string} apiParams.view - The level of details of the conversation. Default is `FULL`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists conversations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     * @param {string} apiParams.orderBy - Optional. The attribute by which to order conversations in the response. If empty, conversations will be ordered by descending creation time. Supported values are one of the following: * create_time * customer_satisfaction_rating * duration * latest_analysis * start_time * turn_count The default sort order is ascending. To specify order, append `asc` or `desc` (`create_time desc`). For more details, see [Google AIPs Ordering](https://google.aip.dev/132#ordering).
     * @param {integer} apiParams.pageSize - The maximum number of conversations to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} apiParams.pageToken - The value returned by the last `ListConversationsResponse`. This value indicates that this is a continuation of a prior `ListConversations` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the conversation.
     * @param {string} apiParams.view - The level of details of the conversation. Default is `BASIC`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations', 'GET', apiParams, clientConfig);

    /**
     * Deletes a conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses.
     * @param {string} apiParams.name - (Required) Required. The name of the conversation to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Analyzes multiple conversations in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to create analyses in.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.bulkAnalyze = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:bulkAnalyze', 'POST', apiParams, clientConfig);

    /**
     * Gets conversation statistics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter to reduce results to a specific subset. This field is useful for getting statistics about conversations with specific properties.
     * @param {string} apiParams.location - (Required) Required. The location of the conversations.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.calculateStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}/conversations:calculateStats', 'GET', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses = {};

    /**
     * Creates an analysis. The long running operation is done when the analysis has completed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the analysis.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analyses', 'POST', apiParams, clientConfig);

    /**
     * Gets an analysis.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the analysis to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists analyses.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     * @param {integer} apiParams.pageSize - The maximum number of analyses to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - The value returned by the last `ListAnalysesResponse`; indicates that this is a continuation of a prior `ListAnalyses` call and the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the analyses.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analyses', 'GET', apiParams, clientConfig);

    /**
     * Deletes an analysis.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the analysis to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels = {};

    /**
     * Create feedback label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.feedbackLabelId - Optional. The ID of the feedback label to create. If one is not specified it will be generated by the server.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the feedback label.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/feedbackLabels', 'POST', apiParams, clientConfig);

    /**
     * List feedback labels.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter to reduce results to a specific subset. Supports disjunctions (OR) and conjunctions (AND). Automatically sorts by conversation ID. To sort by all feedback labels in a project see ListAllFeedbackLabels. Supported fields: * `issue_model_id` * `qa_question_id` * `qa_scorecard_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING
     * @param {integer} apiParams.pageSize - Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListFeedbackLabels` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the feedback labels.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/feedbackLabels', 'GET', apiParams, clientConfig);

    /**
     * Get feedback label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the feedback label to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update feedback label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. Resource name of the FeedbackLabel. Format: projects/{project}/locations/{location}/conversations/{conversation}/feedbackLabels/{feedback_label}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete feedback label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the feedback label to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments = {};

    /**
     * Create Assessment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the assessment.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assessments', 'POST', apiParams, clientConfig);

    /**
     * Get Assessment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the assessment to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List Assessments.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter to reduce results to a specific subset. Supported filters include: * `state` - The state of the assessment * `agent_info.agent_id` - The ID of the agent the assessment is for
     * @param {integer} apiParams.pageSize - The maximum number of assessments to list. If zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListAssessmentRulesResponse`; indicates that this is a continuation of a prior `ListAssessmentRules` call and the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the assessments. To list all assessments in a location, substitute the conversation ID with a '-' character.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assessments', 'GET', apiParams, clientConfig);

    /**
     * Delete an Assessment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. If set to true, all of this assessment's notes will also be deleted. Otherwise, the request will only succeed if it has no notes.
     * @param {string} apiParams.name - (Required) Required. The name of the assessment to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Publish an Assessment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the assessment to publish.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:publish', 'POST', apiParams, clientConfig);

    /**
     * Appeal an Assessment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the assessment to appeal.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.appeal = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:appeal', 'POST', apiParams, clientConfig);

    /**
     * Finalize an Assessment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the assessment to finalize.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.finalize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:finalize', 'POST', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes = {};

    /**
     * Create Note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the note.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notes', 'POST', apiParams, clientConfig);

    /**
     * List Notes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of notes to return in the response. If zero the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} apiParams.pageToken - Optional. The value returned by the last `ListNotesResponse`. This value indicates that this is a continuation of a prior `ListNotes` call and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The parent resource of the notes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notes', 'GET', apiParams, clientConfig);

    /**
     * Update Note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the note. Format: projects/{project}/locations/{location}/conversations/{conversation}/assessments/{assessment}/notes/{note}
     * @param {string} apiParams.updateMask - Optional. The list of fields to be updated. If the update_mask is empty, all updateable fields will be updated. Acceptable fields include: * `content`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a Note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the note to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
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
