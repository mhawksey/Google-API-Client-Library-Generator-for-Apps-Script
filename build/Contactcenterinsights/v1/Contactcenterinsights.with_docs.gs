
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://contactcenterinsights.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Gets project-level settings.
     * @param {string} params.name - (Required) Required. The name of the settings resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.getSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates project-level settings.
     * @param {string} params.name - (Required) Immutable. The resource name of the settings resource. Format: projects/{project}/locations/{location}/settings
     * @param {string} params.updateMask - Required. The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.updateSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets location-level encryption key specification.
     * @param {string} params.name - (Required) Required. The name of the encryption spec resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.getEncryptionSpec = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Query metrics.
     * @param {string} params.location - (Required) Required. The location of the data. "projects/{project}/locations/{location}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.queryMetrics = (params) => this._makeRequest('v1/{+location}:queryMetrics', 'POST', params);

    /**
     * Generates a summary of predefined performance metrics for a set of conversations. Conversations can be specified by specifying a time window and an agent id, for now. The summary includes a comparison of metrics computed for conversations in the previous time period, and also a comparison with peers in the same time period.
     * @param {string} params.parent - (Required) Required. The parent resource of the conversations to derive performance stats from. "projects/{project}/locations/{location}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.queryPerformanceOverview = (params) => this._makeRequest('v1/{+parent}:queryPerformanceOverview', 'POST', params);

    /**
     * List all feedback labels by project number.
     * @param {string} params.filter - Optional. A filter to reduce results to a specific subset in the entire project. Supports disjunctions (OR) and conjunctions (AND). Supported fields: * `issue_model_id` * `qa_question_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING
     * @param {integer} params.pageSize - Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListAllFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListAllFeedbackLabels` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of all feedback labels per project.
     * @return {object} The API response object.
     */
    this.projects.locations.listAllFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:listAllFeedbackLabels', 'GET', params);

    /**
     * Upload feedback labels from an external source in bulk. Currently supports labeling Quality AI example conversations.
     * @param {string} params.parent - (Required) Required. The parent resource for new feedback labels.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bulkUploadFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:bulkUploadFeedbackLabels', 'POST', params);

    /**
     * Download feedback labels in bulk from an external source. Currently supports exporting Quality AI example conversations with transcripts and question bodies.
     * @param {string} params.parent - (Required) Required. The parent resource for new feedback labels.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bulkDownloadFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:bulkDownloadFeedbackLabels', 'POST', params);

    /**
     * Delete feedback labels in bulk using a filter.
     * @param {string} params.parent - (Required) Required. The parent resource for new feedback labels.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bulkDeleteFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:bulkDeleteFeedbackLabels', 'POST', params);

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
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.conversations = {};

    /**
     * Creates a conversation. Note that this method does not support audio transcription or redaction. Use `conversations.upload` instead.
     * @param {string} params.conversationId - A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`
     * @param {string} params.parent - (Required) Required. The parent resource of the conversation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.create = (params) => this._makeRequest('v1/{+parent}/conversations', 'POST', params);

    /**
     * Create a long-running conversation upload operation. This method differs from `CreateConversation` by allowing audio transcription and optional DLP redaction.
     * @param {string} params.parent - (Required) Required. The parent resource of the conversation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.upload = (params) => this._makeRequest('v1/{+parent}/conversations:upload', 'POST', params);

    /**
     * Updates a conversation.
     * @param {boolean} params.allowMissing - Optional. Defaults to false. If set to true, and the conversation is not found, a new conversation will be created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation}
     * @param {string} params.updateMask - The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `agent_id` * `language_code` * `labels` * `metadata` * `quality_metadata` * `call_metadata` * `start_time` * `expire_time` or `ttl` * `data_source.gcs_source.audio_uri` or `data_source.dialogflow_source.audio_uri`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets a conversation.
     * @param {string} params.name - (Required) Required. The name of the conversation to get.
     * @param {string} params.view - The level of details of the conversation. Default is `FULL`.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists conversations.
     * @param {string} params.filter - A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     * @param {string} params.orderBy - Optional. The attribute by which to order conversations in the response. If empty, conversations will be ordered by descending creation time. Supported values are one of the following: * create_time * customer_satisfaction_rating * duration * latest_analysis * start_time * turn_count The default sort order is ascending. To specify order, append `asc` or `desc` (`create_time desc`). For more details, see [Google AIPs Ordering](https://google.aip.dev/132#ordering).
     * @param {integer} params.pageSize - The maximum number of conversations to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} params.pageToken - The value returned by the last `ListConversationsResponse`. This value indicates that this is a continuation of a prior `ListConversations` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the conversation.
     * @param {string} params.view - The level of details of the conversation. Default is `BASIC`.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.list = (params) => this._makeRequest('v1/{+parent}/conversations', 'GET', params);

    /**
     * Deletes a conversation.
     * @param {boolean} params.force - If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses.
     * @param {string} params.name - (Required) Required. The name of the conversation to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Samples conversations based on user configuration and handles the sampled conversations for different use cases.
     * @param {string} params.parent - (Required) Required. The parent resource of the dataset.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.sample = (params) => this._makeRequest('v1/{+parent}/conversations:sample', 'POST', params);

    /**
     * Analyzes multiple conversations in a single request.
     * @param {string} params.parent - (Required) Required. The parent resource to create analyses in.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.bulkAnalyze = (params) => this._makeRequest('v1/{+parent}/conversations:bulkAnalyze', 'POST', params);

    /**
     * Deletes multiple conversations in a single request.
     * @param {string} params.parent - (Required) Required. The parent resource to delete conversations from. Format: projects/{project}/locations/{location}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.bulkDelete = (params) => this._makeRequest('v1/{+parent}/conversations:bulkDelete', 'POST', params);

    /**
     * Imports conversations and processes them according to the user's configuration.
     * @param {string} params.parent - (Required) Required. The parent resource for new conversations.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.ingest = (params) => this._makeRequest('v1/{+parent}/conversations:ingest', 'POST', params);

    /**
     * Gets conversation statistics.
     * @param {string} params.filter - A filter to reduce results to a specific subset. This field is useful for getting statistics about conversations with specific properties.
     * @param {string} params.location - (Required) Required. The location of the conversations.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.calculateStats = (params) => this._makeRequest('v1/{+location}/conversations:calculateStats', 'GET', params);

    this.projects.locations.conversations.analyses = {};

    /**
     * Creates an analysis. The long running operation is done when the analysis has completed.
     * @param {string} params.parent - (Required) Required. The parent resource of the analysis.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.analyses.create = (params) => this._makeRequest('v1/{+parent}/analyses', 'POST', params);

    /**
     * Gets an analysis.
     * @param {string} params.name - (Required) Required. The name of the analysis to get.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.analyses.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists analyses.
     * @param {string} params.filter - A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     * @param {integer} params.pageSize - The maximum number of analyses to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - The value returned by the last `ListAnalysesResponse`; indicates that this is a continuation of a prior `ListAnalyses` call and the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the analyses.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.analyses.list = (params) => this._makeRequest('v1/{+parent}/analyses', 'GET', params);

    /**
     * Deletes an analysis.
     * @param {string} params.name - (Required) Required. The name of the analysis to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.analyses.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.conversations.feedbackLabels = {};

    /**
     * Create feedback label.
     * @param {string} params.feedbackLabelId - Optional. The ID of the feedback label to create. If one is not specified it will be generated by the server.
     * @param {string} params.parent - (Required) Required. The parent resource of the feedback label.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.feedbackLabels.create = (params) => this._makeRequest('v1/{+parent}/feedbackLabels', 'POST', params);

    /**
     * List feedback labels.
     * @param {string} params.filter - Optional. A filter to reduce results to a specific subset. Supports disjunctions (OR) and conjunctions (AND). Automatically sorts by conversation ID. To sort by all feedback labels in a project see ListAllFeedbackLabels. Supported fields: * `issue_model_id` * `qa_question_id` * `qa_scorecard_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING
     * @param {integer} params.pageSize - Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListFeedbackLabels` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the feedback labels.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.feedbackLabels.list = (params) => this._makeRequest('v1/{+parent}/feedbackLabels', 'GET', params);

    /**
     * Get feedback label.
     * @param {string} params.name - (Required) Required. The name of the feedback label to get.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.feedbackLabels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update feedback label.
     * @param {string} params.name - (Required) Immutable. Resource name of the FeedbackLabel. Format: projects/{project}/locations/{location}/conversations/{conversation}/feedbackLabels/{feedback_label}
     * @param {string} params.updateMask - Required. The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.feedbackLabels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete feedback label.
     * @param {string} params.name - (Required) Required. The name of the feedback label to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.feedbackLabels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.conversations.assessments = {};

    /**
     * Create Assessment.
     * @param {string} params.parent - (Required) Required. The parent resource of the assessment.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.assessments.create = (params) => this._makeRequest('v1/{+parent}/assessments', 'POST', params);

    /**
     * Get Assessment.
     * @param {string} params.name - (Required) Required. The name of the assessment to get.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.assessments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List Assessments.
     * @param {string} params.filter - Optional. A filter to reduce results to a specific subset. Supported filters include: * `state` - The state of the assessment * `agent_info.agent_id` - The ID of the agent the assessment is for
     * @param {integer} params.pageSize - The maximum number of assessments to list. If zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListAssessmentRulesResponse`; indicates that this is a continuation of a prior `ListAssessmentRules` call and the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the assessments. To list all assessments in a location, substitute the conversation ID with a '-' character.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.assessments.list = (params) => this._makeRequest('v1/{+parent}/assessments', 'GET', params);

    /**
     * Delete an Assessment.
     * @param {boolean} params.force - Optional. If set to true, all of this assessment's notes will also be deleted. Otherwise, the request will only succeed if it has no notes.
     * @param {string} params.name - (Required) Required. The name of the assessment to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.assessments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Publish an Assessment.
     * @param {string} params.name - (Required) Required. The name of the assessment to publish.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.assessments.publish = (params) => this._makeRequest('v1/{+name}:publish', 'POST', params);

    /**
     * Appeal an Assessment.
     * @param {string} params.name - (Required) Required. The name of the assessment to appeal.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.assessments.appeal = (params) => this._makeRequest('v1/{+name}:appeal', 'POST', params);

    /**
     * Finalize an Assessment.
     * @param {string} params.name - (Required) Required. The name of the assessment to finalize.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.assessments.finalize = (params) => this._makeRequest('v1/{+name}:finalize', 'POST', params);

    this.projects.locations.conversations.assessments.notes = {};

    /**
     * Create Note.
     * @param {string} params.parent - (Required) Required. The parent resource of the note.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.assessments.notes.create = (params) => this._makeRequest('v1/{+parent}/notes', 'POST', params);

    /**
     * List Notes.
     * @param {integer} params.pageSize - Optional. The maximum number of notes to return in the response. If zero the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListNotesResponse`. This value indicates that this is a continuation of a prior `ListNotes` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the notes.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.assessments.notes.list = (params) => this._makeRequest('v1/{+parent}/notes', 'GET', params);

    /**
     * Update Note.
     * @param {string} params.name - (Required) Identifier. The resource name of the note. Format: projects/{project}/locations/{location}/conversations/{conversation}/assessments/{assessment}/notes/{note}
     * @param {string} params.updateMask - Optional. The list of fields to be updated. If the update_mask is empty, all updateable fields will be updated. Acceptable fields include: * `content`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.assessments.notes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a Note.
     * @param {string} params.name - (Required) Required. The name of the note to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.assessments.notes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.datasets = {};

    /**
     * Creates a dataset.
     * @param {string} params.datasetId - Optional. The ID to use for the dataset.
     * @param {string} params.parent - (Required) Required. The parent resource of the dataset.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.create = (params) => this._makeRequest('v1/{+parent}/datasets', 'POST', params);

    /**
     * List datasets matching the input.
     * @param {string} params.filter - Optional. A filter to reduce results to a specific subset. Useful for querying datasets with specific properties. Supported fields include, for Q2 though we only support list by project: - `type` - `description` - `project_number`
     * @param {integer} params.pageSize - Optional. The maximum number of datasets to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListDatasetsResponse`; indicates that this is a continuation of a prior `ListDatasets` call and the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the dataset.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.list = (params) => this._makeRequest('v1/{+parent}/datasets', 'GET', params);

    /**
     * Gets a dataset.
     * @param {string} params.name - (Required) Required. The name of the dataset to get.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a dataset.
     * @param {string} params.name - (Required) Immutable. Identifier. Resource name of the dataset. Format: projects/{project}/locations/{location}/datasets/{dataset}
     * @param {string} params.updateMask - Optional. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a dataset.
     * @param {string} params.name - (Required) Required. The name of the dataset to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * List all feedback labels by project number.
     * @param {string} params.filter - Optional. A filter to reduce results to a specific subset in the entire project. Supports disjunctions (OR) and conjunctions (AND). Supported fields: * `issue_model_id` * `qa_question_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING
     * @param {integer} params.pageSize - Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListAllFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListAllFeedbackLabels` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of all feedback labels per project.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.listAllFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:listAllFeedbackLabels', 'GET', params);

    /**
     * Upload feedback labels from an external source in bulk. Currently supports labeling Quality AI example conversations.
     * @param {string} params.parent - (Required) Required. The parent resource for new feedback labels.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.bulkUploadFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:bulkUploadFeedbackLabels', 'POST', params);

    /**
     * Download feedback labels in bulk from an external source. Currently supports exporting Quality AI example conversations with transcripts and question bodies.
     * @param {string} params.parent - (Required) Required. The parent resource for new feedback labels.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.bulkDownloadFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:bulkDownloadFeedbackLabels', 'POST', params);

    /**
     * Delete feedback labels in bulk using a filter.
     * @param {string} params.parent - (Required) Required. The parent resource for new feedback labels.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.bulkDeleteFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:bulkDeleteFeedbackLabels', 'POST', params);

    this.projects.locations.datasets.conversations = {};

    /**
     * Gets a conversation.
     * @param {string} params.name - (Required) Required. The name of the conversation to get.
     * @param {string} params.view - The level of details of the conversation. Default is `FULL`.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists conversations.
     * @param {string} params.filter - A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     * @param {string} params.orderBy - Optional. The attribute by which to order conversations in the response. If empty, conversations will be ordered by descending creation time. Supported values are one of the following: * create_time * customer_satisfaction_rating * duration * latest_analysis * start_time * turn_count The default sort order is ascending. To specify order, append `asc` or `desc` (`create_time desc`). For more details, see [Google AIPs Ordering](https://google.aip.dev/132#ordering).
     * @param {integer} params.pageSize - The maximum number of conversations to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} params.pageToken - The value returned by the last `ListConversationsResponse`. This value indicates that this is a continuation of a prior `ListConversations` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the conversation.
     * @param {string} params.view - The level of details of the conversation. Default is `BASIC`.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.list = (params) => this._makeRequest('v1/{+parent}/conversations', 'GET', params);

    /**
     * Deletes a conversation.
     * @param {boolean} params.force - If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses.
     * @param {string} params.name - (Required) Required. The name of the conversation to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Samples conversations based on user configuration and handles the sampled conversations for different use cases.
     * @param {string} params.parent - (Required) Required. The parent resource of the dataset.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.sample = (params) => this._makeRequest('v1/{+parent}/conversations:sample', 'POST', params);

    /**
     * Analyzes multiple conversations in a single request.
     * @param {string} params.parent - (Required) Required. The parent resource to create analyses in.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.bulkAnalyze = (params) => this._makeRequest('v1/{+parent}/conversations:bulkAnalyze', 'POST', params);

    /**
     * Deletes multiple conversations in a single request.
     * @param {string} params.parent - (Required) Required. The parent resource to delete conversations from. Format: projects/{project}/locations/{location}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.bulkDelete = (params) => this._makeRequest('v1/{+parent}/conversations:bulkDelete', 'POST', params);

    /**
     * Imports conversations and processes them according to the user's configuration.
     * @param {string} params.parent - (Required) Required. The parent resource for new conversations.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.ingest = (params) => this._makeRequest('v1/{+parent}/conversations:ingest', 'POST', params);

    /**
     * Gets conversation statistics.
     * @param {string} params.location - (Required) Required. The location of the conversations.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.calculateStats = (params) => this._makeRequest('v1/{+location}/conversations:calculateStats', 'POST', params);

    this.projects.locations.datasets.conversations.analyses = {};

    /**
     * Creates an analysis. The long running operation is done when the analysis has completed.
     * @param {string} params.parent - (Required) Required. The parent resource of the analysis.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.analyses.create = (params) => this._makeRequest('v1/{+parent}/analyses', 'POST', params);

    /**
     * Gets an analysis.
     * @param {string} params.name - (Required) Required. The name of the analysis to get.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.analyses.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists analyses.
     * @param {string} params.filter - A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     * @param {integer} params.pageSize - The maximum number of analyses to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - The value returned by the last `ListAnalysesResponse`; indicates that this is a continuation of a prior `ListAnalyses` call and the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the analyses.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.analyses.list = (params) => this._makeRequest('v1/{+parent}/analyses', 'GET', params);

    /**
     * Deletes an analysis.
     * @param {string} params.name - (Required) Required. The name of the analysis to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.analyses.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.datasets.conversations.feedbackLabels = {};

    /**
     * Create feedback label.
     * @param {string} params.feedbackLabelId - Optional. The ID of the feedback label to create. If one is not specified it will be generated by the server.
     * @param {string} params.parent - (Required) Required. The parent resource of the feedback label.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.feedbackLabels.create = (params) => this._makeRequest('v1/{+parent}/feedbackLabels', 'POST', params);

    /**
     * List feedback labels.
     * @param {string} params.filter - Optional. A filter to reduce results to a specific subset. Supports disjunctions (OR) and conjunctions (AND). Automatically sorts by conversation ID. To sort by all feedback labels in a project see ListAllFeedbackLabels. Supported fields: * `issue_model_id` * `qa_question_id` * `qa_scorecard_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING
     * @param {integer} params.pageSize - Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListFeedbackLabels` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the feedback labels.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.feedbackLabels.list = (params) => this._makeRequest('v1/{+parent}/feedbackLabels', 'GET', params);

    /**
     * Get feedback label.
     * @param {string} params.name - (Required) Required. The name of the feedback label to get.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.feedbackLabels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update feedback label.
     * @param {string} params.name - (Required) Immutable. Resource name of the FeedbackLabel. Format: projects/{project}/locations/{location}/conversations/{conversation}/feedbackLabels/{feedback_label}
     * @param {string} params.updateMask - Required. The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.feedbackLabels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete feedback label.
     * @param {string} params.name - (Required) Required. The name of the feedback label to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.conversations.feedbackLabels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.datasets.insightsdata = {};

    /**
     * Export insights data to a destination defined in the request body.
     * @param {string} params.parent - (Required) Required. The parent resource to export data from.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.insightsdata.export = (params) => this._makeRequest('v1/{+parent}/insightsdata:export', 'POST', params);

    this.projects.locations.insightsdata = {};

    /**
     * Export insights data to a destination defined in the request body.
     * @param {string} params.parent - (Required) Required. The parent resource to export data from.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.insightsdata.export = (params) => this._makeRequest('v1/{+parent}/insightsdata:export', 'POST', params);

    this.projects.locations.issueModels = {};

    /**
     * Creates an issue model.
     * @param {string} params.parent - (Required) Required. The parent resource of the issue model.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.create = (params) => this._makeRequest('v1/{+parent}/issueModels', 'POST', params);

    /**
     * Updates an issue model.
     * @param {string} params.name - (Required) Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model}
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets an issue model.
     * @param {string} params.name - (Required) Required. The name of the issue model to get.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists issue models.
     * @param {string} params.parent - (Required) Required. The parent resource of the issue model.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.list = (params) => this._makeRequest('v1/{+parent}/issueModels', 'GET', params);

    /**
     * Deletes an issue model.
     * @param {string} params.name - (Required) Required. The name of the issue model to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
     * @param {string} params.name - (Required) Required. The issue model to deploy.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.deploy = (params) => this._makeRequest('v1/{+name}:deploy', 'POST', params);

    /**
     * Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
     * @param {string} params.name - (Required) Required. The issue model to undeploy.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.undeploy = (params) => this._makeRequest('v1/{+name}:undeploy', 'POST', params);

    /**
     * Exports an issue model to the provided destination.
     * @param {string} params.name - (Required) Required. The issue model to export.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.export = (params) => this._makeRequest('v1/{+name}:export', 'POST', params);

    /**
     * Imports an issue model from a Cloud Storage bucket.
     * @param {string} params.parent - (Required) Required. The parent resource of the issue model.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.import = (params) => this._makeRequest('v1/{+parent}/issueModels:import', 'POST', params);

    /**
     * Gets an issue model's statistics.
     * @param {string} params.issueModel - (Required) Required. The resource name of the issue model to query against.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.calculateIssueModelStats = (params) => this._makeRequest('v1/{+issueModel}:calculateIssueModelStats', 'GET', params);

    this.projects.locations.issueModels.issues = {};

    /**
     * Gets an issue.
     * @param {string} params.name - (Required) Required. The name of the issue to get.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.issues.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists issues.
     * @param {string} params.parent - (Required) Required. The parent resource of the issue.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.issues.list = (params) => this._makeRequest('v1/{+parent}/issues', 'GET', params);

    /**
     * Updates an issue.
     * @param {string} params.name - (Required) Immutable. The resource name of the issue. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue}
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.issues.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Creates an issue.
     * @param {string} params.parent - (Required) Required. The parent resource of the issue.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.issues.create = (params) => this._makeRequest('v1/{+parent}/issues', 'POST', params);

    /**
     * Deletes an issue.
     * @param {string} params.name - (Required) Required. The name of the issue to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.issueModels.issues.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.phraseMatchers = {};

    /**
     * Creates a phrase matcher.
     * @param {string} params.parent - (Required) Required. The parent resource of the phrase matcher. Required. The location to create a phrase matcher for. Format: `projects//locations/` or `projects//locations/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.phraseMatchers.create = (params) => this._makeRequest('v1/{+parent}/phraseMatchers', 'POST', params);

    /**
     * Gets a phrase matcher.
     * @param {string} params.name - (Required) Required. The name of the phrase matcher to get.
     * @return {object} The API response object.
     */
    this.projects.locations.phraseMatchers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists phrase matchers.
     * @param {string} params.filter - A filter to reduce results to a specific subset. Useful for querying phrase matchers with specific properties.
     * @param {integer} params.pageSize - The maximum number of phrase matchers to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - The value returned by the last `ListPhraseMatchersResponse`. This value indicates that this is a continuation of a prior `ListPhraseMatchers` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the phrase matcher.
     * @return {object} The API response object.
     */
    this.projects.locations.phraseMatchers.list = (params) => this._makeRequest('v1/{+parent}/phraseMatchers', 'GET', params);

    /**
     * Deletes a phrase matcher.
     * @param {string} params.name - (Required) Required. The name of the phrase matcher to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.phraseMatchers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates a phrase matcher.
     * @param {string} params.name - (Required) The resource name of the phrase matcher. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.phraseMatchers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.analysisRules = {};

    /**
     * Creates a analysis rule.
     * @param {string} params.parent - (Required) Required. The parent resource of the analysis rule. Required. The location to create a analysis rule for. Format: `projects//locations/` or `projects//locations/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.analysisRules.create = (params) => this._makeRequest('v1/{+parent}/analysisRules', 'POST', params);

    /**
     * Get a analysis rule.
     * @param {string} params.name - (Required) Required. The name of the AnalysisRule to get.
     * @return {object} The API response object.
     */
    this.projects.locations.analysisRules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists analysis rules.
     * @param {integer} params.pageSize - Optional. The maximum number of analysis rule to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListAnalysisRulesResponse`; indicates that this is a continuation of a prior `ListAnalysisRules` call and the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the analysis rules.
     * @return {object} The API response object.
     */
    this.projects.locations.analysisRules.list = (params) => this._makeRequest('v1/{+parent}/analysisRules', 'GET', params);

    /**
     * Updates a analysis rule.
     * @param {string} params.name - (Required) Identifier. The resource name of the analysis rule. Format: projects/{project}/locations/{location}/analysisRules/{analysis_rule}
     * @param {string} params.updateMask - Optional. The list of fields to be updated. If the update_mask is not provided, the update will be applied to all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.analysisRules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a analysis rule.
     * @param {string} params.name - (Required) Required. The name of the analysis rule to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.analysisRules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.assessmentRules = {};

    /**
     * Creates an assessment rule.
     * @param {string} params.assessmentRuleId - Optional. A unique ID for the new AssessmentRule. This ID will become the final component of the AssessmentRule's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
     * @param {string} params.parent - (Required) Required. The parent resource of the assessment rule. Required. The location to create a assessment rule for. Format: `projects//locations/` or `projects//locations/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.assessmentRules.create = (params) => this._makeRequest('v1/{+parent}/assessmentRules', 'POST', params);

    /**
     * Get an assessment rule.
     * @param {string} params.name - (Required) Required. The name of the assessment rule to get.
     * @return {object} The API response object.
     */
    this.projects.locations.assessmentRules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists assessment rules.
     * @param {integer} params.pageSize - Optional. The maximum number of assessment rule to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListAssessmentRulesResponse`; indicates that this is a continuation of a prior `ListAssessmentRules` call and the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the assessment rules.
     * @return {object} The API response object.
     */
    this.projects.locations.assessmentRules.list = (params) => this._makeRequest('v1/{+parent}/assessmentRules', 'GET', params);

    /**
     * Updates an assessment rule.
     * @param {string} params.name - (Required) Identifier. The resource name of the assessment rule. Format: projects/{project}/locations/{location}/assessmentRules/{assessment_rule}
     * @param {string} params.updateMask - Optional. The list of fields to be updated. If the update_mask is not provided, the update will be applied to all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.assessmentRules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an assessment rule.
     * @param {string} params.name - (Required) Required. The name of the assessment rule to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.assessmentRules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.encryptionSpec = {};

    /**
     * Initializes a location-level encryption key specification. An error will result if the location has resources already created before the initialization. After the encryption specification is initialized at a location, it is immutable and all newly created resources under the location will be encrypted with the existing specification.
     * @param {string} params.name - (Required) Immutable. The resource name of the encryption key specification resource. Format: projects/{project}/locations/{location}/encryptionSpec
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.encryptionSpec.initialize = (params) => this._makeRequest('v1/{+name}:initialize', 'POST', params);

    this.projects.locations.views = {};

    /**
     * Creates a view.
     * @param {string} params.parent - (Required) Required. The parent resource of the view. Required. The location to create a view for. Format: `projects//locations/` or `projects//locations/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.views.create = (params) => this._makeRequest('v1/{+parent}/views', 'POST', params);

    /**
     * Gets a view.
     * @param {string} params.name - (Required) Required. The name of the view to get.
     * @return {object} The API response object.
     */
    this.projects.locations.views.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists views.
     * @param {integer} params.pageSize - The maximum number of views to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - The value returned by the last `ListViewsResponse`; indicates that this is a continuation of a prior `ListViews` call and the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the views.
     * @return {object} The API response object.
     */
    this.projects.locations.views.list = (params) => this._makeRequest('v1/{+parent}/views', 'GET', params);

    /**
     * Updates a view.
     * @param {string} params.name - (Required) Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view}
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.views.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a view.
     * @param {string} params.name - (Required) Required. The name of the view to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.views.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.qaQuestionTags = {};

    /**
     * Creates a QaQuestionTag.
     * @param {string} params.parent - (Required) Required. The parent resource of the QaQuestionTag.
     * @param {string} params.qaQuestionTagId - Optional. A unique ID for the new QaQuestionTag. This ID will become the final component of the QaQuestionTag's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.qaQuestionTags.create = (params) => this._makeRequest('v1/{+parent}/qaQuestionTags', 'POST', params);

    /**
     * Gets a QaQuestionTag.
     * @param {string} params.name - (Required) Required. The name of the QaQuestionTag to get.
     * @return {object} The API response object.
     */
    this.projects.locations.qaQuestionTags.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a QaQuestionTag.
     * @param {string} params.name - (Required) Identifier. Resource name for the QaQuestionTag Format projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag} In the above format, the last segment, i.e., qa_question_tag, is a server-generated ID corresponding to the tag resource.
     * @param {string} params.updateMask - Optional. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `qa_question_tag_name` - the name of the tag * `qa_question_ids` - the list of questions the tag applies to
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.qaQuestionTags.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a QaQuestionTag.
     * @param {string} params.name - (Required) Required. The name of the QaQuestionTag to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.qaQuestionTags.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists the question tags.
     * @param {string} params.filter - Optional. A filter to reduce results to a specific subset. Supports conjunctions (ie. AND operators). Supported fields include the following: * `project_id` - id of the project to list tags for * `qa_scorecard_id` - id of the scorecard to list tags for * `revision_id` - id of the scorecard revision to list tags for` * `qa_question_id - id of the question to list tags for`
     * @param {string} params.parent - (Required) Required. The parent resource of the QaQuestionTags.
     * @return {object} The API response object.
     */
    this.projects.locations.qaQuestionTags.list = (params) => this._makeRequest('v1/{+parent}/qaQuestionTags', 'GET', params);

    this.projects.locations.qaScorecards = {};

    /**
     * Create a QaScorecard.
     * @param {string} params.parent - (Required) Required. The parent resource of the QaScorecard.
     * @param {string} params.qaScorecardId - Optional. A unique ID for the new QaScorecard. This ID will become the final component of the QaScorecard's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.create = (params) => this._makeRequest('v1/{+parent}/qaScorecards', 'POST', params);

    /**
     * Gets a QaScorecard.
     * @param {string} params.name - (Required) Required. The name of the QaScorecard to get.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a QaScorecard.
     * @param {string} params.name - (Required) Identifier. The scorecard name. Format: projects/{project}/locations/{location}/qaScorecards/{qa_scorecard}
     * @param {string} params.updateMask - Required. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `description` * `display_name`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a QaScorecard.
     * @param {boolean} params.force - Optional. If set to true, all of this QaScorecard's child resources will also be deleted. Otherwise, the request will only succeed if it has none.
     * @param {string} params.name - (Required) Required. The name of the QaScorecard to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists QaScorecards.
     * @param {integer} params.pageSize - Optional. The maximum number of scorecards to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListQaScorecardsResponse`. This value indicates that this is a continuation of a prior `ListQaScorecards` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the scorecards.
     * @param {string} params.qaScorecardSources - Optional. The source of scorecards are based on how those Scorecards were created, e.g., a customer-defined scorecard, a predefined scorecard, etc. This field is used to retrieve Scorecards of one or more sources.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.list = (params) => this._makeRequest('v1/{+parent}/qaScorecards', 'GET', params);

    this.projects.locations.qaScorecards.revisions = {};

    /**
     * Creates a QaScorecardRevision.
     * @param {string} params.parent - (Required) Required. The parent resource of the QaScorecardRevision.
     * @param {string} params.qaScorecardRevisionId - Optional. A unique ID for the new QaScorecardRevision. This ID will become the final component of the QaScorecardRevision's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.revisions.create = (params) => this._makeRequest('v1/{+parent}/revisions', 'POST', params);

    /**
     * Gets a QaScorecardRevision.
     * @param {string} params.name - (Required) Required. The name of the QaScorecardRevision to get.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.revisions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Fine tune one or more QaModels.
     * @param {string} params.parent - (Required) Required. The parent resource for new fine tuning job instance.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.revisions.tuneQaScorecardRevision = (params) => this._makeRequest('v1/{+parent}:tuneQaScorecardRevision', 'POST', params);

    /**
     * Deploy a QaScorecardRevision.
     * @param {string} params.name - (Required) Required. The name of the QaScorecardRevision to deploy.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.revisions.deploy = (params) => this._makeRequest('v1/{+name}:deploy', 'POST', params);

    /**
     * Undeploy a QaScorecardRevision.
     * @param {string} params.name - (Required) Required. The name of the QaScorecardRevision to undeploy.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.revisions.undeploy = (params) => this._makeRequest('v1/{+name}:undeploy', 'POST', params);

    /**
     * Deletes a QaScorecardRevision.
     * @param {boolean} params.force - Optional. If set to true, all of this QaScorecardRevision's child resources will also be deleted. Otherwise, the request will only succeed if it has none.
     * @param {string} params.name - (Required) Required. The name of the QaScorecardRevision to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.revisions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists all revisions under the parent QaScorecard.
     * @param {string} params.filter - Optional. A filter to reduce results to a specific subset. Useful for querying scorecard revisions with specific properties.
     * @param {integer} params.pageSize - Optional. The maximum number of scorecard revisions to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListQaScorecardRevisionsResponse`. This value indicates that this is a continuation of a prior `ListQaScorecardRevisions` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the scorecard revisions. To list all revisions of all scorecards, substitute the QaScorecard ID with a '-' character.
     * @param {string} params.qaScorecardSources - Optional. The source of scorecards are based on how those Scorecards were created, e.g., a customer-defined scorecard, a predefined scorecard, etc. This field is used to retrieve Scorecards Revisions from Scorecards of one or more sources.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.revisions.list = (params) => this._makeRequest('v1/{+parent}/revisions', 'GET', params);

    this.projects.locations.qaScorecards.revisions.qaQuestions = {};

    /**
     * Create a QaQuestion.
     * @param {string} params.parent - (Required) Required. The parent resource of the QaQuestion.
     * @param {string} params.qaQuestionId - Optional. A unique ID for the new question. This ID will become the final component of the question's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.revisions.qaQuestions.create = (params) => this._makeRequest('v1/{+parent}/qaQuestions', 'POST', params);

    /**
     * Gets a QaQuestion.
     * @param {string} params.name - (Required) Required. The name of the QaQuestion to get.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.revisions.qaQuestions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a QaQuestion.
     * @param {string} params.name - (Required) Identifier. The resource name of the question. Format: projects/{project}/locations/{location}/qaScorecards/{qa_scorecard}/revisions/{revision}/qaQuestions/{qa_question}
     * @param {string} params.updateMask - Required. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `abbreviation` * `answer_choices` * `answer_instructions` * `order` * `question_body` * `tags`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.revisions.qaQuestions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a QaQuestion.
     * @param {string} params.name - (Required) Required. The name of the QaQuestion to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.revisions.qaQuestions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists QaQuestions.
     * @param {integer} params.pageSize - Optional. The maximum number of questions to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListQaQuestionsResponse`. This value indicates that this is a continuation of a prior `ListQaQuestions` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the questions.
     * @return {object} The API response object.
     */
    this.projects.locations.qaScorecards.revisions.qaQuestions.list = (params) => this._makeRequest('v1/{+parent}/qaQuestions', 'GET', params);

    this.projects.locations.authorizedViewSets = {};

    /**
     * Create AuthorizedViewSet
     * @param {string} params.authorizedViewSetId - Optional. A unique ID for the new AuthorizedViewSet. This ID will become the final component of the AuthorizedViewSet's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. See aip.dev/122#resource-id-segments
     * @param {string} params.parent - (Required) Required. The parent resource of the AuthorizedViewSet.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.create = (params) => this._makeRequest('v1/{+parent}/authorizedViewSets', 'POST', params);

    /**
     * Get AuthorizedViewSet
     * @param {string} params.name - (Required) Required. The name of the AuthorizedViewSet to get.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List AuthorizedViewSets
     * @param {string} params.filter - Optional. The filter expression to filter authorized view sets listed in the response.
     * @param {string} params.orderBy - Optional. The order by expression to order authorized view sets listed in the response.
     * @param {integer} params.pageSize - Optional. The maximum number of view sets to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListAuthorizedViewSetsResponse`. This value indicates that this is a continuation of a prior `ListAuthorizedViewSets` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the AuthorizedViewSets.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.list = (params) => this._makeRequest('v1/{+parent}/authorizedViewSets', 'GET', params);

    /**
     * Updates an AuthorizedViewSet.
     * @param {string} params.name - (Required) Identifier. The resource name of the AuthorizedViewSet. Format: projects/{project}/locations/{location}/authorizedViewSets/{authorized_view_set}
     * @param {string} params.updateMask - Optional. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `display_name`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an AuthorizedViewSet.
     * @param {boolean} params.force - Optional. If set to true, all of this AuthorizedViewSet's child resources will also be deleted. Otherwise, the request will only succeed if it has none.
     * @param {string} params.name - (Required) Required. The name of the AuthorizedViewSet to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.authorizedViewSets.authorizedViews = {};

    /**
     * Query metrics.
     * @param {string} params.location - (Required) Required. The location of the data. "projects/{project}/locations/{location}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.queryMetrics = (params) => this._makeRequest('v1/{+location}:queryMetrics', 'POST', params);

    /**
     * Generates a summary of predefined performance metrics for a set of conversations. Conversations can be specified by specifying a time window and an agent id, for now. The summary includes a comparison of metrics computed for conversations in the previous time period, and also a comparison with peers in the same time period.
     * @param {string} params.parent - (Required) Required. The parent resource of the conversations to derive performance stats from. "projects/{project}/locations/{location}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.queryPerformanceOverview = (params) => this._makeRequest('v1/{+parent}:queryPerformanceOverview', 'POST', params);

    /**
     * Create AuthorizedView
     * @param {string} params.authorizedViewId - Optional. A unique ID for the new AuthorizedView. This ID will become the final component of the AuthorizedView's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. See aip.dev/122#resource-id-segments
     * @param {string} params.parent - (Required) Required. The parent resource of the AuthorizedView.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.create = (params) => this._makeRequest('v1/{+parent}/authorizedViews', 'POST', params);

    /**
     * Get AuthorizedView
     * @param {string} params.name - (Required) Required. The name of the AuthorizedView to get.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List AuthorizedViewSets
     * @param {string} params.filter - Optional. The filter expression to filter authorized views listed in the response.
     * @param {string} params.orderBy - Optional. The order by expression to order authorized views listed in the response.
     * @param {integer} params.pageSize - Optional. The maximum number of view to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListAuthorizedViewsResponse`. This value indicates that this is a continuation of a prior `ListAuthorizedViews` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the AuthorizedViews. If the parent is set to `-`, all AuthorizedViews under the location will be returned.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.list = (params) => this._makeRequest('v1/{+parent}/authorizedViews', 'GET', params);

    /**
     * SearchAuthorizedViewSets
     * @param {string} params.orderBy - Optional. The order by expression to order authorized views listed in the response.
     * @param {integer} params.pageSize - Optional. The maximum number of view to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListAuthorizedViewsResponse`. This value indicates that this is a continuation of a prior `ListAuthorizedViews` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the AuthorizedViews. If the parent is set to `-`, all AuthorizedViews under the location will be returned.
     * @param {string} params.query - Optional. The query expression to search authorized views.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.search = (params) => this._makeRequest('v1/{+parent}/authorizedViews:search', 'GET', params);

    /**
     * Updates an AuthorizedView.
     * @param {string} params.name - (Required) Identifier. The resource name of the AuthorizedView. Format: projects/{project}/locations/{location}/authorizedViewSets/{authorized_view_set}/authorizedViews/{authorized_view}
     * @param {string} params.updateMask - Optional. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `conversation_filter` * `display_name`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an AuthorizedView.
     * @param {string} params.name - (Required) Required. The name of the AuthorizedView to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.authorizedViewSets.authorizedViews.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations = {};

    /**
     * Gets a conversation.
     * @param {string} params.name - (Required) Required. The name of the conversation to get.
     * @param {string} params.view - The level of details of the conversation. Default is `FULL`.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists conversations.
     * @param {string} params.filter - A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     * @param {string} params.orderBy - Optional. The attribute by which to order conversations in the response. If empty, conversations will be ordered by descending creation time. Supported values are one of the following: * create_time * customer_satisfaction_rating * duration * latest_analysis * start_time * turn_count The default sort order is ascending. To specify order, append `asc` or `desc` (`create_time desc`). For more details, see [Google AIPs Ordering](https://google.aip.dev/132#ordering).
     * @param {integer} params.pageSize - The maximum number of conversations to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} params.pageToken - The value returned by the last `ListConversationsResponse`. This value indicates that this is a continuation of a prior `ListConversations` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the conversation.
     * @param {string} params.view - The level of details of the conversation. Default is `BASIC`.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.list = (params) => this._makeRequest('v1/{+parent}/conversations', 'GET', params);

    /**
     * Deletes a conversation.
     * @param {boolean} params.force - If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses.
     * @param {string} params.name - (Required) Required. The name of the conversation to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Analyzes multiple conversations in a single request.
     * @param {string} params.parent - (Required) Required. The parent resource to create analyses in.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.bulkAnalyze = (params) => this._makeRequest('v1/{+parent}/conversations:bulkAnalyze', 'POST', params);

    /**
     * Gets conversation statistics.
     * @param {string} params.filter - A filter to reduce results to a specific subset. This field is useful for getting statistics about conversations with specific properties.
     * @param {string} params.location - (Required) Required. The location of the conversations.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.calculateStats = (params) => this._makeRequest('v1/{+location}/conversations:calculateStats', 'GET', params);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses = {};

    /**
     * Creates an analysis. The long running operation is done when the analysis has completed.
     * @param {string} params.parent - (Required) Required. The parent resource of the analysis.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.create = (params) => this._makeRequest('v1/{+parent}/analyses', 'POST', params);

    /**
     * Gets an analysis.
     * @param {string} params.name - (Required) Required. The name of the analysis to get.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists analyses.
     * @param {string} params.filter - A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
     * @param {integer} params.pageSize - The maximum number of analyses to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - The value returned by the last `ListAnalysesResponse`; indicates that this is a continuation of a prior `ListAnalyses` call and the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the analyses.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.list = (params) => this._makeRequest('v1/{+parent}/analyses', 'GET', params);

    /**
     * Deletes an analysis.
     * @param {string} params.name - (Required) Required. The name of the analysis to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels = {};

    /**
     * Create feedback label.
     * @param {string} params.feedbackLabelId - Optional. The ID of the feedback label to create. If one is not specified it will be generated by the server.
     * @param {string} params.parent - (Required) Required. The parent resource of the feedback label.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.create = (params) => this._makeRequest('v1/{+parent}/feedbackLabels', 'POST', params);

    /**
     * List feedback labels.
     * @param {string} params.filter - Optional. A filter to reduce results to a specific subset. Supports disjunctions (OR) and conjunctions (AND). Automatically sorts by conversation ID. To sort by all feedback labels in a project see ListAllFeedbackLabels. Supported fields: * `issue_model_id` * `qa_question_id` * `qa_scorecard_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING
     * @param {integer} params.pageSize - Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListFeedbackLabels` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the feedback labels.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.list = (params) => this._makeRequest('v1/{+parent}/feedbackLabels', 'GET', params);

    /**
     * Get feedback label.
     * @param {string} params.name - (Required) Required. The name of the feedback label to get.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update feedback label.
     * @param {string} params.name - (Required) Immutable. Resource name of the FeedbackLabel. Format: projects/{project}/locations/{location}/conversations/{conversation}/feedbackLabels/{feedback_label}
     * @param {string} params.updateMask - Required. The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete feedback label.
     * @param {string} params.name - (Required) Required. The name of the feedback label to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments = {};

    /**
     * Create Assessment.
     * @param {string} params.parent - (Required) Required. The parent resource of the assessment.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.create = (params) => this._makeRequest('v1/{+parent}/assessments', 'POST', params);

    /**
     * Get Assessment.
     * @param {string} params.name - (Required) Required. The name of the assessment to get.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List Assessments.
     * @param {string} params.filter - Optional. A filter to reduce results to a specific subset. Supported filters include: * `state` - The state of the assessment * `agent_info.agent_id` - The ID of the agent the assessment is for
     * @param {integer} params.pageSize - The maximum number of assessments to list. If zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListAssessmentRulesResponse`; indicates that this is a continuation of a prior `ListAssessmentRules` call and the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the assessments. To list all assessments in a location, substitute the conversation ID with a '-' character.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.list = (params) => this._makeRequest('v1/{+parent}/assessments', 'GET', params);

    /**
     * Delete an Assessment.
     * @param {boolean} params.force - Optional. If set to true, all of this assessment's notes will also be deleted. Otherwise, the request will only succeed if it has no notes.
     * @param {string} params.name - (Required) Required. The name of the assessment to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Publish an Assessment.
     * @param {string} params.name - (Required) Required. The name of the assessment to publish.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.publish = (params) => this._makeRequest('v1/{+name}:publish', 'POST', params);

    /**
     * Appeal an Assessment.
     * @param {string} params.name - (Required) Required. The name of the assessment to appeal.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.appeal = (params) => this._makeRequest('v1/{+name}:appeal', 'POST', params);

    /**
     * Finalize an Assessment.
     * @param {string} params.name - (Required) Required. The name of the assessment to finalize.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.finalize = (params) => this._makeRequest('v1/{+name}:finalize', 'POST', params);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes = {};

    /**
     * Create Note.
     * @param {string} params.parent - (Required) Required. The parent resource of the note.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.create = (params) => this._makeRequest('v1/{+parent}/notes', 'POST', params);

    /**
     * List Notes.
     * @param {integer} params.pageSize - Optional. The maximum number of notes to return in the response. If zero the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
     * @param {string} params.pageToken - Optional. The value returned by the last `ListNotesResponse`. This value indicates that this is a continuation of a prior `ListNotes` call and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The parent resource of the notes.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.list = (params) => this._makeRequest('v1/{+parent}/notes', 'GET', params);

    /**
     * Update Note.
     * @param {string} params.name - (Required) Identifier. The resource name of the note. Format: projects/{project}/locations/{location}/conversations/{conversation}/assessments/{assessment}/notes/{note}
     * @param {string} params.updateMask - Optional. The list of fields to be updated. If the update_mask is empty, all updateable fields will be updated. Acceptable fields include: * `content`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a Note.
     * @param {string} params.name - (Required) Required. The name of the note to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
