# Cloud Tool Results API - Apps Script Client Library

Auto-generated client library for using the **Cloud Tool Results API (version: v1beta3)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:53:40 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:53:40 GMT
- **Created:** Sun, 20 Jul 2025 16:55:50 GMT



---

## API Reference

### `projects`

#### `projects.getSettings()`

Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |

#### `projects.initializeSettings()`

Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |

### `projects.histories`

#### `projects.histories.create()`

Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.requestId` | `string` | No | A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.histories.get()`

Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.historyId` | `string` | Yes | A History id. Required. |

#### `projects.histories.list()`

Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.pageToken` | `string` | No | A continuation token to resume the query at the next item. Optional. |
| `params.pageSize` | `integer` | No | The maximum number of Histories to fetch. Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100. Optional. |
| `params.filterByName` | `string` | No | If set, only return histories with the given name. Optional. |

### `projects.histories.executions`

#### `projects.histories.executions.create()`

Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.historyId` | `string` | Yes | A History id. Required. |
| `params.requestId` | `string` | No | A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.histories.executions.list()`

Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.historyId` | `string` | Yes | A History id. Required. |
| `params.pageToken` | `string` | No | A continuation token to resume the query at the next item. Optional. |
| `params.pageSize` | `integer` | No | The maximum number of Executions to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional. |

#### `projects.histories.executions.get()`

Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.historyId` | `string` | Yes | A History id. Required. |
| `params.executionId` | `string` | Yes | An Execution id. Required. |

#### `projects.histories.executions.patch()`

Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.historyId` | `string` | Yes | Required. |
| `params.executionId` | `string` | Yes | Required. |
| `params.requestId` | `string` | No | A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.histories.executions.steps`

#### `projects.histories.executions.steps.accessibilityClusters()`

Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Required. |
| `params.locale` | `string` | No | The accepted format is the canonical Unicode format with hyphen as a delimiter. Language must be lowercase, Language Script - Capitalized, Region - UPPERCASE. See http://www.unicode.org/reports/tr35/#Unicode_locale_identifier for details. Required. |

#### `projects.histories.executions.steps.create()`

Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. A Project id. |
| `params.historyId` | `string` | Yes | Required. A History id. |
| `params.executionId` | `string` | Yes | Required. An Execution id. |
| `params.requestId` | `string` | No | A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.histories.executions.steps.get()`

Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.historyId` | `string` | Yes | A History id. Required. |
| `params.executionId` | `string` | Yes | A Execution id. Required. |
| `params.stepId` | `string` | Yes | A Step id. Required. |

#### `projects.histories.executions.steps.list()`

Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.historyId` | `string` | Yes | A History id. Required. |
| `params.executionId` | `string` | Yes | A Execution id. Required. |
| `params.pageToken` | `string` | No | A continuation token to resume the query at the next item. Optional. |
| `params.pageSize` | `integer` | No | The maximum number of Steps to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional. |

#### `projects.histories.executions.steps.patch()`

Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.historyId` | `string` | Yes | A History id. Required. |
| `params.executionId` | `string` | Yes | A Execution id. Required. |
| `params.stepId` | `string` | Yes | A Step id. Required. |
| `params.requestId` | `string` | No | A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.histories.executions.steps.publishXunitXmlFiles()`

Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.historyId` | `string` | Yes | A History id. Required. |
| `params.executionId` | `string` | Yes | A Execution id. Required. |
| `params.stepId` | `string` | Yes | A Step id. Note: This step must include a TestExecutionStep. Required. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.histories.executions.steps.getPerfMetricsSummary()`

Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The cloud project |
| `params.historyId` | `string` | Yes | A tool results history ID. |
| `params.executionId` | `string` | Yes | A tool results execution ID. |
| `params.stepId` | `string` | Yes | A tool results step ID. |

### `projects.histories.executions.steps.testCases`

#### `projects.histories.executions.steps.testCases.get()`

Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.historyId` | `string` | Yes | A History id. Required. |
| `params.executionId` | `string` | Yes | A Execution id Required. |
| `params.stepId` | `string` | Yes | A Step id. Note: This step must include a TestExecutionStep. Required. |
| `params.testCaseId` | `string` | Yes | A Test Case id. Required. |

#### `projects.histories.executions.steps.testCases.list()`

Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.historyId` | `string` | Yes | A History id. Required. |
| `params.executionId` | `string` | Yes | A Execution id Required. |
| `params.stepId` | `string` | Yes | A Step id. Note: This step must include a TestExecutionStep. Required. |
| `params.pageToken` | `string` | No | A continuation token to resume the query at the next item. Optional. |
| `params.pageSize` | `integer` | No | The maximum number of TestCases to fetch. Default value: 100. The server will use this default if the field is not set or has a value of 0. Optional. |

### `projects.histories.executions.steps.thumbnails`

#### `projects.histories.executions.steps.thumbnails.list()`

Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.historyId` | `string` | Yes | A History id. Required. |
| `params.executionId` | `string` | Yes | An Execution id. Required. |
| `params.stepId` | `string` | Yes | A Step id. Required. |
| `params.pageToken` | `string` | No | A continuation token to resume the query at the next item. Optional. |
| `params.pageSize` | `integer` | No | The maximum number of thumbnails to fetch. Default value: 50. The server will use this default if the field is not set or has a value of 0. Optional. |

### `projects.histories.executions.steps.perfMetricsSummary`

#### `projects.histories.executions.steps.perfMetricsSummary.create()`

Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The cloud project |
| `params.historyId` | `string` | Yes | A tool results history ID. |
| `params.executionId` | `string` | Yes | A tool results execution ID. |
| `params.stepId` | `string` | Yes | A tool results step ID. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.histories.executions.steps.perfSampleSeries`

#### `projects.histories.executions.steps.perfSampleSeries.create()`

Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The cloud project |
| `params.historyId` | `string` | Yes | A tool results history ID. |
| `params.executionId` | `string` | Yes | A tool results execution ID. |
| `params.stepId` | `string` | Yes | A tool results step ID. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.histories.executions.steps.perfSampleSeries.get()`

Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The cloud project |
| `params.historyId` | `string` | Yes | A tool results history ID. |
| `params.executionId` | `string` | Yes | A tool results execution ID. |
| `params.stepId` | `string` | Yes | A tool results step ID. |
| `params.sampleSeriesId` | `string` | Yes | A sample series id |

#### `projects.histories.executions.steps.perfSampleSeries.list()`

Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The cloud project |
| `params.historyId` | `string` | Yes | A tool results history ID. |
| `params.executionId` | `string` | Yes | A tool results execution ID. |
| `params.stepId` | `string` | Yes | A tool results step ID. |
| `params.filter` | `string` | No | Specify one or more PerfMetricType values such as CPU to filter the result |

### `projects.histories.executions.steps.perfSampleSeries.samples`

#### `projects.histories.executions.steps.perfSampleSeries.samples.batchCreate()`

Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The cloud project |
| `params.historyId` | `string` | Yes | A tool results history ID. |
| `params.executionId` | `string` | Yes | A tool results execution ID. |
| `params.stepId` | `string` | Yes | A tool results step ID. |
| `params.sampleSeriesId` | `string` | Yes | A sample series id |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.histories.executions.steps.perfSampleSeries.samples.list()`

Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The cloud project |
| `params.historyId` | `string` | Yes | A tool results history ID. |
| `params.executionId` | `string` | Yes | A tool results execution ID. |
| `params.stepId` | `string` | Yes | A tool results step ID. |
| `params.sampleSeriesId` | `string` | Yes | A sample series id |
| `params.pageSize` | `integer` | No | The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000 |
| `params.pageToken` | `string` | No | Optional, the next_page_token returned in the previous response |

### `projects.histories.executions.clusters`

#### `projects.histories.executions.clusters.get()`

Retrieves a single screenshot cluster by its ID

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.historyId` | `string` | Yes | A History id. Required. |
| `params.executionId` | `string` | Yes | An Execution id. Required. |
| `params.clusterId` | `string` | Yes | A Cluster id Required. |

#### `projects.histories.executions.clusters.list()`

Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A Project id. Required. |
| `params.historyId` | `string` | Yes | A History id. Required. |
| `params.executionId` | `string` | Yes | An Execution id. Required. |

### `projects.histories.executions.environments`

#### `projects.histories.executions.environments.get()`

Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. A Project id. |
| `params.historyId` | `string` | Yes | Required. A History id. |
| `params.executionId` | `string` | Yes | Required. An Execution id. |
| `params.environmentId` | `string` | Yes | Required. An Environment id. |

#### `projects.histories.executions.environments.list()`

Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. A Project id. |
| `params.historyId` | `string` | Yes | Required. A History id. |
| `params.executionId` | `string` | Yes | Required. An Execution id. |
| `params.pageToken` | `string` | No | A continuation token to resume the query at the next item. |
| `params.pageSize` | `integer` | No | The maximum number of Environments to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. |