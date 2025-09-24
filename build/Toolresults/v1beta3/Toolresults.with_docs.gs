
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://toolresults.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    /**
     * Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.getSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/settings', 'GET', apiParams, clientConfig);

    /**
     * Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.initializeSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}:initializeSettings', 'POST', apiParams, clientConfig);

    this.projects.histories = {};

    /**
     * Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {string} apiParams.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories', 'POST', apiParams, clientConfig);

    /**
     * Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.historyId - (Required) A History id. Required.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}', 'GET', apiParams, clientConfig);

    /**
     * Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterByName - If set, only return histories with the given name. Optional.
     * @param {integer} apiParams.pageSize - The maximum number of Histories to fetch. Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100. Optional.
     * @param {string} apiParams.pageToken - A continuation token to resume the query at the next item. Optional.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories', 'GET', apiParams, clientConfig);

    this.projects.histories.executions = {};

    /**
     * Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.historyId - (Required) A History id. Required.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {string} apiParams.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions', 'POST', apiParams, clientConfig);

    /**
     * Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.historyId - (Required) A History id. Required.
     * @param {integer} apiParams.pageSize - The maximum number of Executions to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.
     * @param {string} apiParams.pageToken - A continuation token to resume the query at the next item. Optional.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions', 'GET', apiParams, clientConfig);

    /**
     * Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) An Execution id. Required.
     * @param {string} apiParams.historyId - (Required) A History id. Required.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) Required.
     * @param {string} apiParams.historyId - (Required) Required.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {string} apiParams.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}', 'PATCH', apiParams, clientConfig);

    this.projects.histories.executions.steps = {};

    /**
     * Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.locale - The accepted format is the canonical Unicode format with hyphen as a delimiter. Language must be lowercase, Language Script - Capitalized, Region - UPPERCASE. See http://www.unicode.org/reports/tr35/#Unicode_locale_identifier for details. Required.
     * @param {string} apiParams.name - (Required) A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.accessibilityClusters = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/{+name}:accessibilityClusters', 'GET', apiParams, clientConfig);

    /**
     * Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) Required. An Execution id.
     * @param {string} apiParams.historyId - (Required) Required. A History id.
     * @param {string} apiParams.projectId - (Required) Required. A Project id.
     * @param {string} apiParams.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps', 'POST', apiParams, clientConfig);

    /**
     * Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) A Execution id. Required.
     * @param {string} apiParams.historyId - (Required) A History id. Required.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {string} apiParams.stepId - (Required) A Step id. Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}', 'GET', apiParams, clientConfig);

    /**
     * Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) A Execution id. Required.
     * @param {string} apiParams.historyId - (Required) A History id. Required.
     * @param {integer} apiParams.pageSize - The maximum number of Steps to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.
     * @param {string} apiParams.pageToken - A continuation token to resume the query at the next item. Optional.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) A Execution id. Required.
     * @param {string} apiParams.historyId - (Required) A History id. Required.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {string} apiParams.requestId - A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.
     * @param {string} apiParams.stepId - (Required) A Step id. Required.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}', 'PATCH', apiParams, clientConfig);

    /**
     * Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) A Execution id. Required.
     * @param {string} apiParams.historyId - (Required) A History id. Required.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {string} apiParams.stepId - (Required) A Step id. Note: This step must include a TestExecutionStep. Required.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.publishXunitXmlFiles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) A tool results execution ID.
     * @param {string} apiParams.historyId - (Required) A tool results history ID.
     * @param {string} apiParams.projectId - (Required) The cloud project
     * @param {string} apiParams.stepId - (Required) A tool results step ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.getPerfMetricsSummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary', 'GET', apiParams, clientConfig);

    this.projects.histories.executions.steps.testCases = {};

    /**
     * Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) A Execution id Required.
     * @param {string} apiParams.historyId - (Required) A History id. Required.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {string} apiParams.stepId - (Required) A Step id. Note: This step must include a TestExecutionStep. Required.
     * @param {string} apiParams.testCaseId - (Required) A Test Case id. Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.testCases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases/{testCaseId}', 'GET', apiParams, clientConfig);

    /**
     * Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) A Execution id Required.
     * @param {string} apiParams.historyId - (Required) A History id. Required.
     * @param {integer} apiParams.pageSize - The maximum number of TestCases to fetch. Default value: 100. The server will use this default if the field is not set or has a value of 0. Optional.
     * @param {string} apiParams.pageToken - A continuation token to resume the query at the next item. Optional.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {string} apiParams.stepId - (Required) A Step id. Note: This step must include a TestExecutionStep. Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.testCases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases', 'GET', apiParams, clientConfig);

    this.projects.histories.executions.steps.thumbnails = {};

    /**
     * Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) An Execution id. Required.
     * @param {string} apiParams.historyId - (Required) A History id. Required.
     * @param {integer} apiParams.pageSize - The maximum number of thumbnails to fetch. Default value: 50. The server will use this default if the field is not set or has a value of 0. Optional.
     * @param {string} apiParams.pageToken - A continuation token to resume the query at the next item. Optional.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {string} apiParams.stepId - (Required) A Step id. Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.thumbnails.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails', 'GET', apiParams, clientConfig);

    this.projects.histories.executions.steps.perfMetricsSummary = {};

    /**
     * Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) A tool results execution ID.
     * @param {string} apiParams.historyId - (Required) A tool results history ID.
     * @param {string} apiParams.projectId - (Required) The cloud project
     * @param {string} apiParams.stepId - (Required) A tool results step ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.perfMetricsSummary.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary', 'POST', apiParams, clientConfig);

    this.projects.histories.executions.steps.perfSampleSeries = {};

    /**
     * Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) A tool results execution ID.
     * @param {string} apiParams.historyId - (Required) A tool results history ID.
     * @param {string} apiParams.projectId - (Required) The cloud project
     * @param {string} apiParams.stepId - (Required) A tool results step ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.perfSampleSeries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries', 'POST', apiParams, clientConfig);

    /**
     * Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) A tool results execution ID.
     * @param {string} apiParams.historyId - (Required) A tool results history ID.
     * @param {string} apiParams.projectId - (Required) The cloud project
     * @param {string} apiParams.sampleSeriesId - (Required) A sample series id
     * @param {string} apiParams.stepId - (Required) A tool results step ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.perfSampleSeries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}', 'GET', apiParams, clientConfig);

    /**
     * Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) A tool results execution ID.
     * @param {string} apiParams.filter - Specify one or more PerfMetricType values such as CPU to filter the result
     * @param {string} apiParams.historyId - (Required) A tool results history ID.
     * @param {string} apiParams.projectId - (Required) The cloud project
     * @param {string} apiParams.stepId - (Required) A tool results step ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.perfSampleSeries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries', 'GET', apiParams, clientConfig);

    this.projects.histories.executions.steps.perfSampleSeries.samples = {};

    /**
     * Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) A tool results execution ID.
     * @param {string} apiParams.historyId - (Required) A tool results history ID.
     * @param {string} apiParams.projectId - (Required) The cloud project
     * @param {string} apiParams.sampleSeriesId - (Required) A sample series id
     * @param {string} apiParams.stepId - (Required) A tool results step ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples:batchCreate', 'POST', apiParams, clientConfig);

    /**
     * Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) A tool results execution ID.
     * @param {string} apiParams.historyId - (Required) A tool results history ID.
     * @param {integer} apiParams.pageSize - The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000
     * @param {string} apiParams.pageToken - Optional, the next_page_token returned in the previous response
     * @param {string} apiParams.projectId - (Required) The cloud project
     * @param {string} apiParams.sampleSeriesId - (Required) A sample series id
     * @param {string} apiParams.stepId - (Required) A tool results step ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.steps.perfSampleSeries.samples.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples', 'GET', apiParams, clientConfig);

    this.projects.histories.executions.clusters = {};

    /**
     * Retrieves a single screenshot cluster by its ID
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) A Cluster id Required.
     * @param {string} apiParams.executionId - (Required) An Execution id. Required.
     * @param {string} apiParams.historyId - (Required) A History id. Required.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.clusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters/{clusterId}', 'GET', apiParams, clientConfig);

    /**
     * Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) An Execution id. Required.
     * @param {string} apiParams.historyId - (Required) A History id. Required.
     * @param {string} apiParams.projectId - (Required) A Project id. Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.clusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters', 'GET', apiParams, clientConfig);

    this.projects.histories.executions.environments = {};

    /**
     * Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.environmentId - (Required) Required. An Environment id.
     * @param {string} apiParams.executionId - (Required) Required. An Execution id.
     * @param {string} apiParams.historyId - (Required) Required. A History id.
     * @param {string} apiParams.projectId - (Required) Required. A Project id.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.environments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments/{environmentId}', 'GET', apiParams, clientConfig);

    /**
     * Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.executionId - (Required) Required. An Execution id.
     * @param {string} apiParams.historyId - (Required) Required. A History id.
     * @param {integer} apiParams.pageSize - The maximum number of Environments to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0.
     * @param {string} apiParams.pageToken - A continuation token to resume the query at the next item.
     * @param {string} apiParams.projectId - (Required) Required. A Project id.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.histories.executions.environments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments', 'GET', apiParams, clientConfig);
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
