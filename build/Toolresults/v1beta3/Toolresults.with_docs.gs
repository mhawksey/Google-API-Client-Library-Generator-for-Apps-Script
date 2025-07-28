
/**
 * Google Apps Script client library for the Cloud Tool Results API
 * Documentation URL: https://firebase.google.com/docs/test-lab/
 * @class
 */
class Toolresults {
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
    this._rootUrl = 'https://toolresults.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @return {object} The API response object.
     */
    this.projects.getSettings = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/settings', 'GET', params);

    /**
     * Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @return {object} The API response object.
     */
    this.projects.initializeSettings = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}:initializeSettings', 'POST', params);

    this.projects.histories = {};

    /**
     * Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @param {string} params.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.histories.create = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories', 'POST', params);

    /**
     * Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
     * @param {string} params.historyId - (Required) A History id. Required.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @return {object} The API response object.
     */
    this.projects.histories.get = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}', 'GET', params);

    /**
     * Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
     * @param {string} params.filterByName - If set, only return histories with the given name. Optional.
     * @param {integer} params.pageSize - The maximum number of Histories to fetch. Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100. Optional.
     * @param {string} params.pageToken - A continuation token to resume the query at the next item. Optional.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @return {object} The API response object.
     */
    this.projects.histories.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories', 'GET', params);

    this.projects.histories.executions = {};

    /**
     * Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
     * @param {string} params.historyId - (Required) A History id. Required.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @param {string} params.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.create = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions', 'POST', params);

    /**
     * Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
     * @param {string} params.historyId - (Required) A History id. Required.
     * @param {integer} params.pageSize - The maximum number of Executions to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.
     * @param {string} params.pageToken - A continuation token to resume the query at the next item. Optional.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions', 'GET', params);

    /**
     * Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist
     * @param {string} params.executionId - (Required) An Execution id. Required.
     * @param {string} params.historyId - (Required) A History id. Required.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.get = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}', 'GET', params);

    /**
     * Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist
     * @param {string} params.executionId - (Required) Required.
     * @param {string} params.historyId - (Required) Required.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @param {string} params.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.patch = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}', 'PATCH', params);

    this.projects.histories.executions.steps = {};

    /**
     * Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist
     * @param {string} params.locale - The accepted format is the canonical Unicode format with hyphen as a delimiter. Language must be lowercase, Language Script - Capitalized, Region - UPPERCASE. See http://www.unicode.org/reports/tr35/#Unicode_locale_identifier for details. Required.
     * @param {string} params.name - (Required) A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Required.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.accessibilityClusters = (params) => this._makeRequest('toolresults/v1beta3/{+name}:accessibilityClusters', 'GET', params);

    /**
     * Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
     * @param {string} params.executionId - (Required) Required. An Execution id.
     * @param {string} params.historyId - (Required) Required. A History id.
     * @param {string} params.projectId - (Required) Required. A Project id.
     * @param {string} params.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.create = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps', 'POST', params);

    /**
     * Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist
     * @param {string} params.executionId - (Required) A Execution id. Required.
     * @param {string} params.historyId - (Required) A History id. Required.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @param {string} params.stepId - (Required) A Step id. Required.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.get = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}', 'GET', params);

    /**
     * Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist
     * @param {string} params.executionId - (Required) A Execution id. Required.
     * @param {string} params.historyId - (Required) A History id. Required.
     * @param {integer} params.pageSize - The maximum number of Steps to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.
     * @param {string} params.pageToken - A continuation token to resume the query at the next item. Optional.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps', 'GET', params);

    /**
     * Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
     * @param {string} params.executionId - (Required) A Execution id. Required.
     * @param {string} params.historyId - (Required) A History id. Required.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @param {string} params.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     * @param {string} params.stepId - (Required) A Step id. Required.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.patch = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}', 'PATCH', params);

    /**
     * Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist
     * @param {string} params.executionId - (Required) A Execution id. Required.
     * @param {string} params.historyId - (Required) A History id. Required.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @param {string} params.stepId - (Required) A Step id. Note: This step must include a TestExecutionStep. Required.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.publishXunitXmlFiles = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles', 'POST', params);

    /**
     * Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist
     * @param {string} params.executionId - (Required) A tool results execution ID.
     * @param {string} params.historyId - (Required) A tool results history ID.
     * @param {string} params.projectId - (Required) The cloud project
     * @param {string} params.stepId - (Required) A tool results step ID.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.getPerfMetricsSummary = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary', 'GET', params);

    this.projects.histories.executions.steps.testCases = {};

    /**
     * Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist
     * @param {string} params.executionId - (Required) A Execution id Required.
     * @param {string} params.historyId - (Required) A History id. Required.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @param {string} params.stepId - (Required) A Step id. Note: This step must include a TestExecutionStep. Required.
     * @param {string} params.testCaseId - (Required) A Test Case id. Required.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.testCases.get = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases/{testCaseId}', 'GET', params);

    /**
     * Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist
     * @param {string} params.executionId - (Required) A Execution id Required.
     * @param {string} params.historyId - (Required) A History id. Required.
     * @param {integer} params.pageSize - The maximum number of TestCases to fetch. Default value: 100. The server will use this default if the field is not set or has a value of 0. Optional.
     * @param {string} params.pageToken - A continuation token to resume the query at the next item. Optional.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @param {string} params.stepId - (Required) A Step id. Note: This step must include a TestExecutionStep. Required.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.testCases.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases', 'GET', params);

    this.projects.histories.executions.steps.thumbnails = {};

    /**
     * Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist
     * @param {string} params.executionId - (Required) An Execution id. Required.
     * @param {string} params.historyId - (Required) A History id. Required.
     * @param {integer} params.pageSize - The maximum number of thumbnails to fetch. Default value: 50. The server will use this default if the field is not set or has a value of 0. Optional.
     * @param {string} params.pageToken - A continuation token to resume the query at the next item. Optional.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @param {string} params.stepId - (Required) A Step id. Required.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.thumbnails.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails', 'GET', params);

    this.projects.histories.executions.steps.perfMetricsSummary = {};

    /**
     * Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist
     * @param {string} params.executionId - (Required) A tool results execution ID.
     * @param {string} params.historyId - (Required) A tool results history ID.
     * @param {string} params.projectId - (Required) The cloud project
     * @param {string} params.stepId - (Required) A tool results step ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.perfMetricsSummary.create = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary', 'POST', params);

    this.projects.histories.executions.steps.perfSampleSeries = {};

    /**
     * Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist
     * @param {string} params.executionId - (Required) A tool results execution ID.
     * @param {string} params.historyId - (Required) A tool results history ID.
     * @param {string} params.projectId - (Required) The cloud project
     * @param {string} params.stepId - (Required) A tool results step ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.perfSampleSeries.create = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries', 'POST', params);

    /**
     * Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist
     * @param {string} params.executionId - (Required) A tool results execution ID.
     * @param {string} params.historyId - (Required) A tool results history ID.
     * @param {string} params.projectId - (Required) The cloud project
     * @param {string} params.sampleSeriesId - (Required) A sample series id
     * @param {string} params.stepId - (Required) A tool results step ID.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.perfSampleSeries.get = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}', 'GET', params);

    /**
     * Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist
     * @param {string} params.executionId - (Required) A tool results execution ID.
     * @param {string} params.filter - Specify one or more PerfMetricType values such as CPU to filter the result
     * @param {string} params.historyId - (Required) A tool results history ID.
     * @param {string} params.projectId - (Required) The cloud project
     * @param {string} params.stepId - (Required) A tool results step ID.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.perfSampleSeries.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries', 'GET', params);

    this.projects.histories.executions.steps.perfSampleSeries.samples = {};

    /**
     * Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist
     * @param {string} params.executionId - (Required) A tool results execution ID.
     * @param {string} params.historyId - (Required) A tool results history ID.
     * @param {string} params.projectId - (Required) The cloud project
     * @param {string} params.sampleSeriesId - (Required) A sample series id
     * @param {string} params.stepId - (Required) A tool results step ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples:batchCreate', 'POST', params);

    /**
     * Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist
     * @param {string} params.executionId - (Required) A tool results execution ID.
     * @param {string} params.historyId - (Required) A tool results history ID.
     * @param {integer} params.pageSize - The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000
     * @param {string} params.pageToken - Optional, the next_page_token returned in the previous response
     * @param {string} params.projectId - (Required) The cloud project
     * @param {string} params.sampleSeriesId - (Required) A sample series id
     * @param {string} params.stepId - (Required) A tool results step ID.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.steps.perfSampleSeries.samples.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples', 'GET', params);

    this.projects.histories.executions.clusters = {};

    /**
     * Retrieves a single screenshot cluster by its ID
     * @param {string} params.clusterId - (Required) A Cluster id Required.
     * @param {string} params.executionId - (Required) An Execution id. Required.
     * @param {string} params.historyId - (Required) A History id. Required.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.clusters.get = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters/{clusterId}', 'GET', params);

    /**
     * Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.
     * @param {string} params.executionId - (Required) An Execution id. Required.
     * @param {string} params.historyId - (Required) A History id. Required.
     * @param {string} params.projectId - (Required) A Project id. Required.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.clusters.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters', 'GET', params);

    this.projects.histories.executions.environments = {};

    /**
     * Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist
     * @param {string} params.environmentId - (Required) Required. An Environment id.
     * @param {string} params.executionId - (Required) Required. An Execution id.
     * @param {string} params.historyId - (Required) Required. A History id.
     * @param {string} params.projectId - (Required) Required. A Project id.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.environments.get = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments/{environmentId}', 'GET', params);

    /**
     * Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist
     * @param {string} params.executionId - (Required) Required. An Execution id.
     * @param {string} params.historyId - (Required) Required. A History id.
     * @param {integer} params.pageSize - The maximum number of Environments to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0.
     * @param {string} params.pageToken - A continuation token to resume the query at the next item.
     * @param {string} params.projectId - (Required) Required. A Project id.
     * @return {object} The API response object.
     */
    this.projects.histories.executions.environments.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments', 'GET', params);
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
