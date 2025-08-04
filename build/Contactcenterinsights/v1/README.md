# Contact Center AI Insights API - Apps Script Client Library

Auto-generated client library for using the **Contact Center AI Insights API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:04:57 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:04:57 GMT
- **Created:** Sun, 20 Jul 2025 16:23:58 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.getSettings()`

Gets project-level settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the settings resource to get. |

#### `projects.locations.updateSettings()`

Updates project-level settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the settings resource. Format: projects/{project}/locations/{location}/settings |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.getEncryptionSpec()`

Gets location-level encryption key specification.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the encryption spec resource to get. |

#### `projects.locations.queryMetrics()`

Query metrics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location of the data. "projects/{project}/locations/{location}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.queryPerformanceOverview()`

Generates a summary of predefined performance metrics for a set of conversations. Conversations can be specified by specifying a time window and an agent id, for now. The summary includes a comparison of metrics computed for conversations in the previous time period, and also a comparison with peers in the same time period.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the conversations to derive performance stats from. "projects/{project}/locations/{location}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.listAllFeedbackLabels()`

List all feedback labels by project number.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of all feedback labels per project. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListAllFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListAllFeedbackLabels` call and that the system should return the next page of data. |
| `params.filter` | `string` | No | Optional. A filter to reduce results to a specific subset in the entire project. Supports disjunctions (OR) and conjunctions (AND). Supported fields: * `issue_model_id` * `qa_question_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING |

#### `projects.locations.bulkUploadFeedbackLabels()`

Upload feedback labels from an external source in bulk. Currently supports labeling Quality AI example conversations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource for new feedback labels. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.bulkDownloadFeedbackLabels()`

Download feedback labels in bulk from an external source. Currently supports exporting Quality AI example conversations with transcripts and question bodies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource for new feedback labels. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.bulkDeleteFeedbackLabels()`

Delete feedback labels in bulk using a filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource for new feedback labels. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.locations.conversations`

#### `projects.locations.conversations.create()`

Creates a conversation. Note that this method does not support audio transcription or redaction. Use `conversations.upload` instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the conversation. |
| `params.conversationId` | `string` | No | A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.upload()`

Create a long-running conversation upload operation. This method differs from `CreateConversation` by allowing audio transcription and optional DLP redaction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the conversation. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.patch()`

Updates a conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation} |
| `params.updateMask` | `string` | No | The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `agent_id` * `language_code` * `labels` * `metadata` * `quality_metadata` * `call_metadata` * `start_time` * `expire_time` or `ttl` * `data_source.gcs_source.audio_uri` or `data_source.dialogflow_source.audio_uri` |
| `params.allowMissing` | `boolean` | No | Optional. Defaults to false. If set to true, and the conversation is not found, a new conversation will be created. In this situation, `update_mask` is ignored. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.get()`

Gets a conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the conversation to get. |
| `params.view` | `string` | No | The level of details of the conversation. Default is `FULL`. |

#### `projects.locations.conversations.list()`

Lists conversations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the conversation. |
| `params.pageSize` | `integer` | No | The maximum number of conversations to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size. |
| `params.pageToken` | `string` | No | The value returned by the last `ListConversationsResponse`. This value indicates that this is a continuation of a prior `ListConversations` call and that the system should return the next page of data. |
| `params.filter` | `string` | No | A filter to reduce results to a specific subset. Useful for querying conversations with specific properties. |
| `params.orderBy` | `string` | No | Optional. The attribute by which to order conversations in the response. If empty, conversations will be ordered by descending creation time. Supported values are one of the following: * create_time * customer_satisfaction_rating * duration * latest_analysis * start_time * turn_count The default sort order is ascending. To specify order, append `asc` or `desc` (`create_time desc`). For more details, see [Google AIPs Ordering](https://google.aip.dev/132#ordering). |
| `params.view` | `string` | No | The level of details of the conversation. Default is `BASIC`. |

#### `projects.locations.conversations.delete()`

Deletes a conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the conversation to delete. |
| `params.force` | `boolean` | No | If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses. |

#### `projects.locations.conversations.bulkAnalyze()`

Analyzes multiple conversations in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to create analyses in. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.bulkDelete()`

Deletes multiple conversations in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to delete conversations from. Format: projects/{project}/locations/{location} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.ingest()`

Imports conversations and processes them according to the user's configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource for new conversations. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.calculateStats()`

Gets conversation statistics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location of the conversations. |
| `params.filter` | `string` | No | A filter to reduce results to a specific subset. This field is useful for getting statistics about conversations with specific properties. |

### `projects.locations.conversations.analyses`

#### `projects.locations.conversations.analyses.create()`

Creates an analysis. The long running operation is done when the analysis has completed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the analysis. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.analyses.get()`

Gets an analysis.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the analysis to get. |

#### `projects.locations.conversations.analyses.list()`

Lists analyses.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the analyses. |
| `params.pageSize` | `integer` | No | The maximum number of analyses to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | The value returned by the last `ListAnalysesResponse`; indicates that this is a continuation of a prior `ListAnalyses` call and the system should return the next page of data. |
| `params.filter` | `string` | No | A filter to reduce results to a specific subset. Useful for querying conversations with specific properties. |

#### `projects.locations.conversations.analyses.delete()`

Deletes an analysis.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the analysis to delete. |

### `projects.locations.conversations.feedbackLabels`

#### `projects.locations.conversations.feedbackLabels.create()`

Create feedback label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the feedback label. |
| `params.feedbackLabelId` | `string` | No | Optional. The ID of the feedback label to create. If one is not specified it will be generated by the server. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.feedbackLabels.list()`

List feedback labels.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the feedback labels. |
| `params.filter` | `string` | No | Optional. A filter to reduce results to a specific subset. Supports disjunctions (OR) and conjunctions (AND). Automatically sorts by conversation ID. To sort by all feedback labels in a project see ListAllFeedbackLabels. Supported fields: * `issue_model_id` * `qa_question_id` * `qa_scorecard_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING |
| `params.pageSize` | `integer` | No | Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListFeedbackLabels` call and that the system should return the next page of data. |

#### `projects.locations.conversations.feedbackLabels.get()`

Get feedback label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the feedback label to get. |

#### `projects.locations.conversations.feedbackLabels.patch()`

Update feedback label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Resource name of the FeedbackLabel. Format: projects/{project}/locations/{location}/conversations/{conversation}/feedbackLabels/{feedback_label} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.feedbackLabels.delete()`

Delete feedback label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the feedback label to delete. |

### `projects.locations.conversations.assessments`

#### `projects.locations.conversations.assessments.create()`

Create Assessment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the assessment. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.assessments.get()`

Get Assessment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the assessment to get. |

#### `projects.locations.conversations.assessments.list()`

List Assessments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the assessments. To list all assessments in a location, substitute the conversation ID with a '-' character. |
| `params.pageSize` | `integer` | No | The maximum number of assessments to list. If zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListAssessmentRulesResponse`; indicates that this is a continuation of a prior `ListAssessmentRules` call and the system should return the next page of data. |
| `params.filter` | `string` | No | Optional. A filter to reduce results to a specific subset. Supported filters include: * `state` - The state of the assessment * `agent_info.agent_id` - The ID of the agent the assessment is for |

#### `projects.locations.conversations.assessments.delete()`

Delete an Assessment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the assessment to delete. |
| `params.force` | `boolean` | No | Optional. If set to true, all of this assessment's notes will also be deleted. Otherwise, the request will only succeed if it has no notes. |

#### `projects.locations.conversations.assessments.publish()`

Publish an Assessment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the assessment to publish. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.assessments.appeal()`

Appeal an Assessment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the assessment to appeal. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.assessments.finalize()`

Finalize an Assessment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the assessment to finalize. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.conversations.assessments.notes`

#### `projects.locations.conversations.assessments.notes.create()`

Create Note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the note. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.assessments.notes.list()`

List Notes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the notes. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of notes to return in the response. If zero the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListNotesResponse`. This value indicates that this is a continuation of a prior `ListNotes` call and that the system should return the next page of data. |

#### `projects.locations.conversations.assessments.notes.patch()`

Update Note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the note. Format: projects/{project}/locations/{location}/conversations/{conversation}/assessments/{assessment}/notes/{note} |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. If the update_mask is empty, all updateable fields will be updated. Acceptable fields include: * `content` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.assessments.notes.delete()`

Deletes a Note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the note to delete. |

### `projects.locations.insightsdata`

#### `projects.locations.insightsdata.export()`

Export insights data to a destination defined in the request body.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to export data from. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.issueModels`

#### `projects.locations.issueModels.create()`

Creates an issue model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the issue model. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.issueModels.patch()`

Updates an issue model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model} |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.issueModels.get()`

Gets an issue model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the issue model to get. |

#### `projects.locations.issueModels.list()`

Lists issue models.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the issue model. |

#### `projects.locations.issueModels.delete()`

Deletes an issue model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the issue model to delete. |

#### `projects.locations.issueModels.deploy()`

Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The issue model to deploy. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.issueModels.undeploy()`

Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The issue model to undeploy. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.issueModels.export()`

Exports an issue model to the provided destination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The issue model to export. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.issueModels.import()`

Imports an issue model from a Cloud Storage bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the issue model. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.issueModels.calculateIssueModelStats()`

Gets an issue model's statistics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.issueModel` | `string` | Yes | Required. The resource name of the issue model to query against. |

### `projects.locations.issueModels.issues`

#### `projects.locations.issueModels.issues.get()`

Gets an issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the issue to get. |

#### `projects.locations.issueModels.issues.list()`

Lists issues.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the issue. |

#### `projects.locations.issueModels.issues.patch()`

Updates an issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the issue. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue} |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.issueModels.issues.create()`

Creates an issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the issue. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.issueModels.issues.delete()`

Deletes an issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the issue to delete. |

### `projects.locations.phraseMatchers`

#### `projects.locations.phraseMatchers.create()`

Creates a phrase matcher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the phrase matcher. Required. The location to create a phrase matcher for. Format: `projects//locations/` or `projects//locations/` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.phraseMatchers.get()`

Gets a phrase matcher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the phrase matcher to get. |

#### `projects.locations.phraseMatchers.list()`

Lists phrase matchers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the phrase matcher. |
| `params.pageSize` | `integer` | No | The maximum number of phrase matchers to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | The value returned by the last `ListPhraseMatchersResponse`. This value indicates that this is a continuation of a prior `ListPhraseMatchers` call and that the system should return the next page of data. |
| `params.filter` | `string` | No | A filter to reduce results to a specific subset. Useful for querying phrase matchers with specific properties. |

#### `projects.locations.phraseMatchers.delete()`

Deletes a phrase matcher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the phrase matcher to delete. |

#### `projects.locations.phraseMatchers.patch()`

Updates a phrase matcher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the phrase matcher. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher} |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.analysisRules`

#### `projects.locations.analysisRules.create()`

Creates a analysis rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the analysis rule. Required. The location to create a analysis rule for. Format: `projects//locations/` or `projects//locations/` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.analysisRules.get()`

Get a analysis rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the AnalysisRule to get. |

#### `projects.locations.analysisRules.list()`

Lists analysis rules.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the analysis rules. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of analysis rule to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListAnalysisRulesResponse`; indicates that this is a continuation of a prior `ListAnalysisRules` call and the system should return the next page of data. |

#### `projects.locations.analysisRules.patch()`

Updates a analysis rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the analysis rule. Format: projects/{project}/locations/{location}/analysisRules/{analysis_rule} |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. If the update_mask is not provided, the update will be applied to all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.analysisRules.delete()`

Deletes a analysis rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the analysis rule to delete. |

### `projects.locations.assessmentRules`

#### `projects.locations.assessmentRules.create()`

Creates an assessment rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the assessment rule. Required. The location to create a assessment rule for. Format: `projects//locations/` or `projects//locations/` |
| `params.assessmentRuleId` | `string` | No | Optional. A unique ID for the new AssessmentRule. This ID will become the final component of the AssessmentRule's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.assessmentRules.get()`

Get an assessment rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the assessment rule to get. |

#### `projects.locations.assessmentRules.list()`

Lists assessment rules.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the assessment rules. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of assessment rule to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListAssessmentRulesResponse`; indicates that this is a continuation of a prior `ListAssessmentRules` call and the system should return the next page of data. |

#### `projects.locations.assessmentRules.patch()`

Updates an assessment rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the assessment rule. Format: projects/{project}/locations/{location}/assessmentRules/{assessment_rule} |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. If the update_mask is not provided, the update will be applied to all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.assessmentRules.delete()`

Deletes an assessment rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the assessment rule to delete. |

### `projects.locations.encryptionSpec`

#### `projects.locations.encryptionSpec.initialize()`

Initializes a location-level encryption key specification. An error will result if the location has resources already created before the initialization. After the encryption specification is initialized at a location, it is immutable and all newly created resources under the location will be encrypted with the existing specification.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the encryption key specification resource. Format: projects/{project}/locations/{location}/encryptionSpec |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.views`

#### `projects.locations.views.create()`

Creates a view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the view. Required. The location to create a view for. Format: `projects//locations/` or `projects//locations/` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.views.get()`

Gets a view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the view to get. |

#### `projects.locations.views.list()`

Lists views.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the views. |
| `params.pageSize` | `integer` | No | The maximum number of views to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | The value returned by the last `ListViewsResponse`; indicates that this is a continuation of a prior `ListViews` call and the system should return the next page of data. |

#### `projects.locations.views.patch()`

Updates a view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view} |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.views.delete()`

Deletes a view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the view to delete. |

### `projects.locations.qaQuestionTags`

#### `projects.locations.qaQuestionTags.create()`

Creates a QaQuestionTag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the QaQuestionTag. |
| `params.qaQuestionTagId` | `string` | No | Optional. A unique ID for the new QaQuestionTag. This ID will become the final component of the QaQuestionTag's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.qaQuestionTags.get()`

Gets a QaQuestionTag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the QaQuestionTag to get. |

#### `projects.locations.qaQuestionTags.patch()`

Updates a QaQuestionTag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name for the QaQuestionTag Format projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag} In the above format, the last segment, i.e., qa_question_tag, is a server-generated ID corresponding to the tag resource. |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `qa_question_tag_name` - the name of the tag * `qa_question_ids` - the list of questions the tag applies to |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.qaQuestionTags.delete()`

Deletes a QaQuestionTag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the QaQuestionTag to delete. |

#### `projects.locations.qaQuestionTags.list()`

Lists the question tags.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the QaQuestionTags. |
| `params.filter` | `string` | No | Optional. A filter to reduce results to a specific subset. Supports disjunctions (OR) and conjunctions (AND). Supported fields include the following: * `project_id` - id of the project to list tags for * `qa_scorecard_revision_id` - id of the scorecard revision to list tags for * `qa_question_id - id of the question to list tags for` |

### `projects.locations.qaScorecards`

#### `projects.locations.qaScorecards.create()`

Create a QaScorecard.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the QaScorecard. |
| `params.qaScorecardId` | `string` | No | Optional. A unique ID for the new QaScorecard. This ID will become the final component of the QaScorecard's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.qaScorecards.get()`

Gets a QaScorecard.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the QaScorecard to get. |

#### `projects.locations.qaScorecards.patch()`

Updates a QaScorecard.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The scorecard name. Format: projects/{project}/locations/{location}/qaScorecards/{qa_scorecard} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `description` * `display_name` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.qaScorecards.delete()`

Deletes a QaScorecard.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the QaScorecard to delete. |
| `params.force` | `boolean` | No | Optional. If set to true, all of this QaScorecard's child resources will also be deleted. Otherwise, the request will only succeed if it has none. |

#### `projects.locations.qaScorecards.list()`

Lists QaScorecards.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the scorecards. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of scorecards to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListQaScorecardsResponse`. This value indicates that this is a continuation of a prior `ListQaScorecards` call and that the system should return the next page of data. |

### `projects.locations.qaScorecards.revisions`

#### `projects.locations.qaScorecards.revisions.create()`

Creates a QaScorecardRevision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the QaScorecardRevision. |
| `params.qaScorecardRevisionId` | `string` | No | Optional. A unique ID for the new QaScorecardRevision. This ID will become the final component of the QaScorecardRevision's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.qaScorecards.revisions.get()`

Gets a QaScorecardRevision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the QaScorecardRevision to get. |

#### `projects.locations.qaScorecards.revisions.tuneQaScorecardRevision()`

Fine tune one or more QaModels.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource for new fine tuning job instance. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.qaScorecards.revisions.deploy()`

Deploy a QaScorecardRevision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the QaScorecardRevision to deploy. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.qaScorecards.revisions.undeploy()`

Undeploy a QaScorecardRevision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the QaScorecardRevision to undeploy. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.qaScorecards.revisions.delete()`

Deletes a QaScorecardRevision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the QaScorecardRevision to delete. |
| `params.force` | `boolean` | No | Optional. If set to true, all of this QaScorecardRevision's child resources will also be deleted. Otherwise, the request will only succeed if it has none. |

#### `projects.locations.qaScorecards.revisions.list()`

Lists all revisions under the parent QaScorecard.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the scorecard revisions. To list all revisions of all scorecards, substitute the QaScorecard ID with a '-' character. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of scorecard revisions to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListQaScorecardRevisionsResponse`. This value indicates that this is a continuation of a prior `ListQaScorecardRevisions` call and that the system should return the next page of data. |
| `params.filter` | `string` | No | Optional. A filter to reduce results to a specific subset. Useful for querying scorecard revisions with specific properties. |

### `projects.locations.qaScorecards.revisions.qaQuestions`

#### `projects.locations.qaScorecards.revisions.qaQuestions.create()`

Create a QaQuestion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the QaQuestion. |
| `params.qaQuestionId` | `string` | No | Optional. A unique ID for the new question. This ID will become the final component of the question's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.qaScorecards.revisions.qaQuestions.get()`

Gets a QaQuestion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the QaQuestion to get. |

#### `projects.locations.qaScorecards.revisions.qaQuestions.patch()`

Updates a QaQuestion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the question. Format: projects/{project}/locations/{location}/qaScorecards/{qa_scorecard}/revisions/{revision}/qaQuestions/{qa_question} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `abbreviation` * `answer_choices` * `answer_instructions` * `order` * `question_body` * `tags` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.qaScorecards.revisions.qaQuestions.delete()`

Deletes a QaQuestion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the QaQuestion to delete. |

#### `projects.locations.qaScorecards.revisions.qaQuestions.list()`

Lists QaQuestions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the questions. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of questions to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListQaQuestionsResponse`. This value indicates that this is a continuation of a prior `ListQaQuestions` call and that the system should return the next page of data. |

### `projects.locations.datasets`

#### `projects.locations.datasets.listAllFeedbackLabels()`

List all feedback labels by project number.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of all feedback labels per project. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListAllFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListAllFeedbackLabels` call and that the system should return the next page of data. |
| `params.filter` | `string` | No | Optional. A filter to reduce results to a specific subset in the entire project. Supports disjunctions (OR) and conjunctions (AND). Supported fields: * `issue_model_id` * `qa_question_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING |

#### `projects.locations.datasets.bulkUploadFeedbackLabels()`

Upload feedback labels from an external source in bulk. Currently supports labeling Quality AI example conversations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource for new feedback labels. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.bulkDownloadFeedbackLabels()`

Download feedback labels in bulk from an external source. Currently supports exporting Quality AI example conversations with transcripts and question bodies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource for new feedback labels. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.bulkDeleteFeedbackLabels()`

Delete feedback labels in bulk using a filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource for new feedback labels. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.datasets.conversations`

#### `projects.locations.datasets.conversations.get()`

Gets a conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the conversation to get. |
| `params.view` | `string` | No | The level of details of the conversation. Default is `FULL`. |

#### `projects.locations.datasets.conversations.list()`

Lists conversations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the conversation. |
| `params.pageSize` | `integer` | No | The maximum number of conversations to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size. |
| `params.pageToken` | `string` | No | The value returned by the last `ListConversationsResponse`. This value indicates that this is a continuation of a prior `ListConversations` call and that the system should return the next page of data. |
| `params.filter` | `string` | No | A filter to reduce results to a specific subset. Useful for querying conversations with specific properties. |
| `params.orderBy` | `string` | No | Optional. The attribute by which to order conversations in the response. If empty, conversations will be ordered by descending creation time. Supported values are one of the following: * create_time * customer_satisfaction_rating * duration * latest_analysis * start_time * turn_count The default sort order is ascending. To specify order, append `asc` or `desc` (`create_time desc`). For more details, see [Google AIPs Ordering](https://google.aip.dev/132#ordering). |
| `params.view` | `string` | No | The level of details of the conversation. Default is `BASIC`. |

#### `projects.locations.datasets.conversations.delete()`

Deletes a conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the conversation to delete. |
| `params.force` | `boolean` | No | If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses. |

#### `projects.locations.datasets.conversations.bulkAnalyze()`

Analyzes multiple conversations in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to create analyses in. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.conversations.bulkDelete()`

Deletes multiple conversations in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to delete conversations from. Format: projects/{project}/locations/{location} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.conversations.ingest()`

Imports conversations and processes them according to the user's configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource for new conversations. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.conversations.calculateStats()`

Gets conversation statistics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location of the conversations. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.datasets.conversations.analyses`

#### `projects.locations.datasets.conversations.analyses.create()`

Creates an analysis. The long running operation is done when the analysis has completed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the analysis. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.conversations.analyses.get()`

Gets an analysis.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the analysis to get. |

#### `projects.locations.datasets.conversations.analyses.list()`

Lists analyses.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the analyses. |
| `params.pageSize` | `integer` | No | The maximum number of analyses to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | The value returned by the last `ListAnalysesResponse`; indicates that this is a continuation of a prior `ListAnalyses` call and the system should return the next page of data. |
| `params.filter` | `string` | No | A filter to reduce results to a specific subset. Useful for querying conversations with specific properties. |

#### `projects.locations.datasets.conversations.analyses.delete()`

Deletes an analysis.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the analysis to delete. |

### `projects.locations.datasets.conversations.feedbackLabels`

#### `projects.locations.datasets.conversations.feedbackLabels.create()`

Create feedback label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the feedback label. |
| `params.feedbackLabelId` | `string` | No | Optional. The ID of the feedback label to create. If one is not specified it will be generated by the server. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.conversations.feedbackLabels.list()`

List feedback labels.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the feedback labels. |
| `params.filter` | `string` | No | Optional. A filter to reduce results to a specific subset. Supports disjunctions (OR) and conjunctions (AND). Automatically sorts by conversation ID. To sort by all feedback labels in a project see ListAllFeedbackLabels. Supported fields: * `issue_model_id` * `qa_question_id` * `qa_scorecard_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING |
| `params.pageSize` | `integer` | No | Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListFeedbackLabels` call and that the system should return the next page of data. |

#### `projects.locations.datasets.conversations.feedbackLabels.get()`

Get feedback label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the feedback label to get. |

#### `projects.locations.datasets.conversations.feedbackLabels.patch()`

Update feedback label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Resource name of the FeedbackLabel. Format: projects/{project}/locations/{location}/conversations/{conversation}/feedbackLabels/{feedback_label} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.conversations.feedbackLabels.delete()`

Delete feedback label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the feedback label to delete. |

### `projects.locations.datasets.insightsdata`

#### `projects.locations.datasets.insightsdata.export()`

Export insights data to a destination defined in the request body.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to export data from. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.authorizedViewSets`

#### `projects.locations.authorizedViewSets.create()`

Create AuthorizedViewSet

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the AuthorizedViewSet. |
| `params.authorizedViewSetId` | `string` | No | Optional. A unique ID for the new AuthorizedViewSet. This ID will become the final component of the AuthorizedViewSet's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. See aip.dev/122#resource-id-segments |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.get()`

Get AuthorizedViewSet

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the AuthorizedViewSet to get. |

#### `projects.locations.authorizedViewSets.list()`

List AuthorizedViewSets

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the AuthorizedViewSets. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of view sets to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListAuthorizedViewSetsResponse`. This value indicates that this is a continuation of a prior `ListAuthorizedViewSets` call and that the system should return the next page of data. |
| `params.filter` | `string` | No | Optional. The filter expression to filter authorized view sets listed in the response. |
| `params.orderBy` | `string` | No | Optional. The order by expression to order authorized view sets listed in the response. |

#### `projects.locations.authorizedViewSets.patch()`

Updates an AuthorizedViewSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the AuthorizedViewSet. Format: projects/{project}/locations/{location}/authorizedViewSets/{authorized_view_set} |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `display_name` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.delete()`

Deletes an AuthorizedViewSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the AuthorizedViewSet to delete. |
| `params.force` | `boolean` | No | Optional. If set to true, all of this AuthorizedViewSet's child resources will also be deleted. Otherwise, the request will only succeed if it has none. |

### `projects.locations.authorizedViewSets.authorizedViews`

#### `projects.locations.authorizedViewSets.authorizedViews.queryMetrics()`

Query metrics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location of the data. "projects/{project}/locations/{location}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.authorizedViews.queryPerformanceOverview()`

Generates a summary of predefined performance metrics for a set of conversations. Conversations can be specified by specifying a time window and an agent id, for now. The summary includes a comparison of metrics computed for conversations in the previous time period, and also a comparison with peers in the same time period.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the conversations to derive performance stats from. "projects/{project}/locations/{location}" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.authorizedViews.create()`

Create AuthorizedView

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the AuthorizedView. |
| `params.authorizedViewId` | `string` | No | Optional. A unique ID for the new AuthorizedView. This ID will become the final component of the AuthorizedView's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. See aip.dev/122#resource-id-segments |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.authorizedViews.get()`

Get AuthorizedView

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the AuthorizedView to get. |

#### `projects.locations.authorizedViewSets.authorizedViews.list()`

List AuthorizedViewSets

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the AuthorizedViews. If the parent is set to `-`, all AuthorizedViews under the location will be returned. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of view to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListAuthorizedViewsResponse`. This value indicates that this is a continuation of a prior `ListAuthorizedViews` call and that the system should return the next page of data. |
| `params.filter` | `string` | No | Optional. The filter expression to filter authorized views listed in the response. |
| `params.orderBy` | `string` | No | Optional. The order by expression to order authorized views listed in the response. |

#### `projects.locations.authorizedViewSets.authorizedViews.search()`

SearchAuthorizedViewSets

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the AuthorizedViews. If the parent is set to `-`, all AuthorizedViews under the location will be returned. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of view to return in the response. If the value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListAuthorizedViewsResponse`. This value indicates that this is a continuation of a prior `ListAuthorizedViews` call and that the system should return the next page of data. |
| `params.query` | `string` | No | Optional. The query expression to search authorized views. |
| `params.orderBy` | `string` | No | Optional. The order by expression to order authorized views listed in the response. |

#### `projects.locations.authorizedViewSets.authorizedViews.patch()`

Updates an AuthorizedView.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the AuthorizedView. Format: projects/{project}/locations/{location}/authorizedViewSets/{authorized_view_set}/authorizedViews/{authorized_view} |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. All possible fields can be updated by passing `*`, or a subset of the following updateable fields can be provided: * `conversation_filter` * `display_name` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.authorizedViews.delete()`

Deletes an AuthorizedView.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the AuthorizedView to delete. |

### `projects.locations.authorizedViewSets.authorizedViews.operations`

#### `projects.locations.authorizedViewSets.authorizedViews.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.authorizedViewSets.authorizedViews.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.authorizedViewSets.authorizedViews.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.locations.authorizedViewSets.authorizedViews.conversations`

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.get()`

Gets a conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the conversation to get. |
| `params.view` | `string` | No | The level of details of the conversation. Default is `FULL`. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.list()`

Lists conversations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the conversation. |
| `params.pageSize` | `integer` | No | The maximum number of conversations to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size. |
| `params.pageToken` | `string` | No | The value returned by the last `ListConversationsResponse`. This value indicates that this is a continuation of a prior `ListConversations` call and that the system should return the next page of data. |
| `params.filter` | `string` | No | A filter to reduce results to a specific subset. Useful for querying conversations with specific properties. |
| `params.orderBy` | `string` | No | Optional. The attribute by which to order conversations in the response. If empty, conversations will be ordered by descending creation time. Supported values are one of the following: * create_time * customer_satisfaction_rating * duration * latest_analysis * start_time * turn_count The default sort order is ascending. To specify order, append `asc` or `desc` (`create_time desc`). For more details, see [Google AIPs Ordering](https://google.aip.dev/132#ordering). |
| `params.view` | `string` | No | The level of details of the conversation. Default is `BASIC`. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.delete()`

Deletes a conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the conversation to delete. |
| `params.force` | `boolean` | No | If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.bulkAnalyze()`

Analyzes multiple conversations in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to create analyses in. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.calculateStats()`

Gets conversation statistics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location of the conversations. |
| `params.filter` | `string` | No | A filter to reduce results to a specific subset. This field is useful for getting statistics about conversations with specific properties. |

### `projects.locations.authorizedViewSets.authorizedViews.conversations.analyses`

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.create()`

Creates an analysis. The long running operation is done when the analysis has completed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the analysis. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.get()`

Gets an analysis.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the analysis to get. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.list()`

Lists analyses.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the analyses. |
| `params.pageSize` | `integer` | No | The maximum number of analyses to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | The value returned by the last `ListAnalysesResponse`; indicates that this is a continuation of a prior `ListAnalyses` call and the system should return the next page of data. |
| `params.filter` | `string` | No | A filter to reduce results to a specific subset. Useful for querying conversations with specific properties. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.delete()`

Deletes an analysis.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the analysis to delete. |

### `projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels`

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.create()`

Create feedback label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the feedback label. |
| `params.feedbackLabelId` | `string` | No | Optional. The ID of the feedback label to create. If one is not specified it will be generated by the server. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.list()`

List feedback labels.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the feedback labels. |
| `params.filter` | `string` | No | Optional. A filter to reduce results to a specific subset. Supports disjunctions (OR) and conjunctions (AND). Automatically sorts by conversation ID. To sort by all feedback labels in a project see ListAllFeedbackLabels. Supported fields: * `issue_model_id` * `qa_question_id` * `qa_scorecard_id` * `min_create_time` * `max_create_time` * `min_update_time` * `max_update_time` * `feedback_label_type`: QUALITY_AI, TOPIC_MODELING |
| `params.pageSize` | `integer` | No | Optional. The maximum number of feedback labels to return in the response. A valid page size ranges from 0 to 100,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListFeedbackLabelsResponse`. This value indicates that this is a continuation of a prior `ListFeedbackLabels` call and that the system should return the next page of data. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.get()`

Get feedback label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the feedback label to get. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.patch()`

Update feedback label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Resource name of the FeedbackLabel. Format: projects/{project}/locations/{location}/conversations/{conversation}/feedbackLabels/{feedback_label} |
| `params.updateMask` | `string` | No | Required. The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.delete()`

Delete feedback label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the feedback label to delete. |

### `projects.locations.authorizedViewSets.authorizedViews.conversations.assessments`

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.create()`

Create Assessment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the assessment. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.get()`

Get Assessment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the assessment to get. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.list()`

List Assessments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the assessments. To list all assessments in a location, substitute the conversation ID with a '-' character. |
| `params.pageSize` | `integer` | No | The maximum number of assessments to list. If zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListAssessmentRulesResponse`; indicates that this is a continuation of a prior `ListAssessmentRules` call and the system should return the next page of data. |
| `params.filter` | `string` | No | Optional. A filter to reduce results to a specific subset. Supported filters include: * `state` - The state of the assessment * `agent_info.agent_id` - The ID of the agent the assessment is for |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.delete()`

Delete an Assessment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the assessment to delete. |
| `params.force` | `boolean` | No | Optional. If set to true, all of this assessment's notes will also be deleted. Otherwise, the request will only succeed if it has no notes. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.publish()`

Publish an Assessment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the assessment to publish. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.appeal()`

Appeal an Assessment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the assessment to appeal. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.finalize()`

Finalize an Assessment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the assessment to finalize. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes`

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.create()`

Create Note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the note. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.list()`

List Notes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the notes. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of notes to return in the response. If zero the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListNotesResponse`. This value indicates that this is a continuation of a prior `ListNotes` call and that the system should return the next page of data. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.patch()`

Update Note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the note. Format: projects/{project}/locations/{location}/conversations/{conversation}/assessments/{assessment}/notes/{note} |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. If the update_mask is empty, all updateable fields will be updated. Acceptable fields include: * `content` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.delete()`

Deletes a Note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the note to delete. |