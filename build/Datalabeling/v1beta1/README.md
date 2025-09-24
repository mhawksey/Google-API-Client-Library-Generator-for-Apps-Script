# Data Labeling API - Apps Script Client Library

Auto-generated client library for using the **Data Labeling API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:15:56 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:15:56 GMT
- **Created:** Sun, 20 Jul 2025 16:24:57 GMT



---

## API Reference

### `projects`

### `projects.operations`

#### `projects.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.datasets`

#### `projects.datasets.create()`

 Creates dataset. If success return a Dataset resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Dataset resource parent, format: projects/{project_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.datasets.get()`

Gets dataset by resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id} |

#### `projects.datasets.list()`

Lists datasets under a project. Pagination is supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Dataset resource parent, format: projects/{project_id} |
| `params.filter` | `string` | No | Optional. Filter on dataset is not supported at this moment. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer results than requested. Default value is 100. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results for the server to return. Typically obtained by ListDatasetsResponse.next_page_token of the previous [DataLabelingService.ListDatasets] call. Returns the first page if empty. |

#### `projects.datasets.delete()`

Deletes a dataset by resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id} |

#### `projects.datasets.importData()`

Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.datasets.exportData()`

Exports data and annotations from dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id} |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.datasets.dataItems`

#### `projects.datasets.dataItems.get()`

Gets a data item in a dataset by resource name. This API can be called after data are imported into dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the data item to get, format: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id} |

#### `projects.datasets.dataItems.list()`

Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the dataset to list data items, format: projects/{project_id}/datasets/{dataset_id} |
| `params.filter` | `string` | No | Optional. Filter is not supported at this moment. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer results than requested. Default value is 100. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty. |

### `projects.datasets.annotatedDatasets`

#### `projects.datasets.annotatedDatasets.get()`

Gets an annotated dataset by resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the annotated dataset to get, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id} |

#### `projects.datasets.annotatedDatasets.list()`

Lists annotated datasets for a dataset. Pagination is supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the dataset to list annotated datasets, format: projects/{project_id}/datasets/{dataset_id} |
| `params.filter` | `string` | No | Optional. Filter is not supported at this moment. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer results than requested. Default value is 100. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotatedDatasetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotatedDatasets] call. Return first page if empty. |

#### `projects.datasets.annotatedDatasets.delete()`

Deletes an annotated dataset by resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the annotated dataset to delete, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id} |

### `projects.datasets.annotatedDatasets.dataItems`

#### `projects.datasets.annotatedDatasets.dataItems.get()`

Gets a data item in a dataset by resource name. This API can be called after data are imported into dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the data item to get, format: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id} |

#### `projects.datasets.annotatedDatasets.dataItems.list()`

Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the dataset to list data items, format: projects/{project_id}/datasets/{dataset_id} |
| `params.filter` | `string` | No | Optional. Filter is not supported at this moment. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer results than requested. Default value is 100. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty. |

### `projects.datasets.annotatedDatasets.examples`

#### `projects.datasets.annotatedDatasets.examples.get()`

Gets an example by resource name, including both data and annotation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of example, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}/examples/{example_id} |
| `params.filter` | `string` | No | Optional. An expression for filtering Examples. Filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}" |

#### `projects.datasets.annotatedDatasets.examples.list()`

Lists examples in an annotated dataset. Pagination is supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Example resource parent. |
| `params.filter` | `string` | No | Optional. An expression for filtering Examples. For annotated datasets that have annotation spec set, filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}" |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer results than requested. Default value is 100. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results for the server to return. Typically obtained by ListExamplesResponse.next_page_token of the previous [DataLabelingService.ListExamples] call. Return first page if empty. |

### `projects.datasets.annotatedDatasets.feedbackThreads`

#### `projects.datasets.annotatedDatasets.feedbackThreads.get()`

 Get a FeedbackThread object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the feedback. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}'. |

#### `projects.datasets.annotatedDatasets.feedbackThreads.list()`

List FeedbackThreads with pagination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. FeedbackThread resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}" |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer results than requested. Default value is 100. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackThreads.next_page_token of the previous [DataLabelingService.ListFeedbackThreads] call. Return first page if empty. |

#### `projects.datasets.annotatedDatasets.feedbackThreads.delete()`

Delete a FeedbackThread.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the FeedbackThread that is going to be deleted. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}'. |

### `projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages`

#### `projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.create()`

Create a FeedbackMessage object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. FeedbackMessage resource parent, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.get()`

Get a FeedbackMessage object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the feedback. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessages/{feedback_message_id}'. |

#### `projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.list()`

List FeedbackMessages with pagination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. FeedbackMessage resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}" |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer results than requested. Default value is 100. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackMessages.next_page_token of the previous [DataLabelingService.ListFeedbackMessages] call. Return first page if empty. |

#### `projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.delete()`

Delete a FeedbackMessage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the FeedbackMessage that is going to be deleted. Format: 'projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessages/{feedback_message_id}'. |

### `projects.datasets.image`

#### `projects.datasets.image.label()`

 Starts a labeling task for image. The type of image labeling task is configured by feature in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id} |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.datasets.video`

#### `projects.datasets.video.label()`

Starts a labeling task for video. The type of video labeling task is configured by feature in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id} |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.datasets.text`

#### `projects.datasets.text.label()`

Starts a labeling task for text. The type of text labeling task is configured by feature in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the data set to request labeling task, format: projects/{project_id}/datasets/{dataset_id} |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.datasets.evaluations`

#### `projects.datasets.evaluations.get()`

 Gets an evaluation by resource name (to search, use projects.evaluations.search).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the evaluation. Format: "projects/{project_id}/datasets/ {dataset_id}/evaluations/{evaluation_id}' |

### `projects.datasets.evaluations.exampleComparisons`

#### `projects.datasets.evaluations.exampleComparisons.search()`

Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the Evaluation resource to search for example comparisons from. Format: "projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}" |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.annotationSpecSets`

#### `projects.annotationSpecSets.create()`

Creates an annotation spec set by providing a set of labels.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. AnnotationSpecSet resource parent, format: projects/{project_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.annotationSpecSets.get()`

Gets an annotation spec set by resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. AnnotationSpecSet resource name, format: projects/{project_id}/annotationSpecSets/{annotation_spec_set_id} |

#### `projects.annotationSpecSets.list()`

Lists annotation spec sets for a project. Pagination is supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent of AnnotationSpecSet resource, format: projects/{project_id} |
| `params.filter` | `string` | No | Optional. Filter is not supported at this moment. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer results than requested. Default value is 100. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotationSpecSetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotationSpecSets] call. Return first page if empty. |

#### `projects.annotationSpecSets.delete()`

Deletes an annotation spec set by resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. AnnotationSpec resource name, format: `projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}`. |

### `projects.instructions`

#### `projects.instructions.create()`

Creates an instruction for how data should be labeled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Instruction resource parent, format: projects/{project_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.instructions.get()`

Gets an instruction by resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id} |

#### `projects.instructions.list()`

Lists instructions for a project. Pagination is supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Instruction resource parent, format: projects/{project_id} |
| `params.filter` | `string` | No | Optional. Filter is not supported at this moment. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer results than requested. Default value is 100. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results for the server to return. Typically obtained by ListInstructionsResponse.next_page_token of the previous [DataLabelingService.ListInstructions] call. Return first page if empty. |

#### `projects.instructions.delete()`

Deletes an instruction object by resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id} |

### `projects.evaluations`

#### `projects.evaluations.search()`

Searches evaluations within a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Evaluation search parent (project ID). Format: "projects/ {project_id}" |
| `params.filter` | `string` | No | Optional. To search evaluations, you can filter by the following: * evaluation_job.evaluation_job_id (the last part of EvaluationJob.name) * evaluation_job.model_id (the {model_name} portion of EvaluationJob.modelVersion) * evaluation_job.evaluation_job_run_time_start (Minimum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.evaluation_job_run_time_end (Maximum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.job_state (EvaluationJob.state) * annotation_spec.display_name (the Evaluation contains a metric for the annotation spec with this displayName) To filter by multiple critiera, use the `AND` operator or the `OR` operator. The following examples shows a string that filters by several critiera: "evaluation_job.evaluation_job_id = {evaluation_job_id} AND evaluation_job.model_id = {model_name} AND evaluation_job.evaluation_job_run_time_start = {timestamp_1} AND evaluation_job.evaluation_job_run_time_end = {timestamp_2} AND annotation_spec.display_name = {display_name}" |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer results than requested. Default value is 100. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search request. If you don't specify this field, the API call requests the first page of the search. |

### `projects.evaluationJobs`

#### `projects.evaluationJobs.create()`

 Creates an evaluation job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Evaluation job resource parent. Format: "projects/{project_id}" |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.evaluationJobs.patch()`

Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}" |
| `params.updateMask` | `string` | No | Optional. Mask for which fields to update. You can only provide the following fields: * `evaluationJobConfig.humanAnnotationConfig.instruction` * `evaluationJobConfig.exampleCount` * `evaluationJobConfig.exampleSamplePercentage` You can provide more than one of these fields by separating them with commas. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.evaluationJobs.get()`

Gets an evaluation job by resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the evaluation job. Format: "projects/{project_id} /evaluationJobs/{evaluation_job_id}" |

#### `projects.evaluationJobs.pause()`

Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the evaluation job that is going to be paused. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}" |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.evaluationJobs.resume()`

Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the evaluation job that is going to be resumed. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}" |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.evaluationJobs.delete()`

Stops and deletes an evaluation job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the evaluation job that is going to be deleted. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}" |

#### `projects.evaluationJobs.list()`

Lists all evaluation jobs within a project with possible filters. Pagination is supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Evaluation job resource parent. Format: "projects/{project_id}" |
| `params.filter` | `string` | No | Optional. You can filter the jobs to list by model_id (also known as model_name, as described in EvaluationJob.modelVersion) or by evaluation job state (as described in EvaluationJob.state). To filter by both criteria, use the `AND` operator or the `OR` operator. For example, you can use the following string for your filter: "evaluation_job.model_id = {model_name} AND evaluation_job.state = {evaluation_job_state}" |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer results than requested. Default value is 100. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken in the response to the previous request. The request returns the first page if this is empty. |