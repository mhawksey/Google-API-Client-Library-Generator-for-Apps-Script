
/**
 * Google Apps Script client library for the Container Analysis API
 * Documentation URL: https://cloud.google.com/container-analysis/api/reference/rest/
 * @class
 */
class Containeranalysis {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://containeranalysis.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.occurrences = {};

    /**
     * Gets the specified occurrence.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.occurrences.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists occurrences for the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression.
     * @param {integer} apiParams.pageSize - Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     * @param {string} apiParams.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} apiParams.parent - (Required) Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.
     * @param {boolean} apiParams.returnPartialSuccess - If set, the request will return all reachable Occurrences and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.occurrences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/occurrences', 'GET', apiParams, clientConfig);

    /**
     * Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.occurrences.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Creates a new occurrence.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.occurrences.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/occurrences', 'POST', apiParams, clientConfig);

    /**
     * Creates new occurrences in batch.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.occurrences.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/occurrences:batchCreate', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified occurrence.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @param {string} apiParams.updateMask - The fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.occurrences.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.occurrences.getNotes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/notes', 'GET', apiParams, clientConfig);

    /**
     * Gets a summary of the number and severity of occurrences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression.
     * @param {string} apiParams.parent - (Required) Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.
     * @param {boolean} apiParams.returnPartialSuccess - If set, the request will return all reachable occurrence summaries and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.occurrences.getVulnerabilitySummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/occurrences:vulnerabilitySummary', 'GET', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.occurrences.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.occurrences.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.occurrences.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations = {};

    this.projects.locations.occurrences = {};

    /**
     * Gets the specified occurrence.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.occurrences.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists occurrences for the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression.
     * @param {integer} apiParams.pageSize - Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     * @param {string} apiParams.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} apiParams.parent - (Required) Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.
     * @param {boolean} apiParams.returnPartialSuccess - If set, the request will return all reachable Occurrences and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.occurrences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/occurrences', 'GET', apiParams, clientConfig);

    /**
     * Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.occurrences.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Creates a new occurrence.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.occurrences.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/occurrences', 'POST', apiParams, clientConfig);

    /**
     * Creates new occurrences in batch.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.occurrences.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/occurrences:batchCreate', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified occurrence.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @param {string} apiParams.updateMask - The fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.occurrences.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.occurrences.getNotes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/notes', 'GET', apiParams, clientConfig);

    /**
     * Gets a summary of the number and severity of occurrences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression.
     * @param {string} apiParams.parent - (Required) Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.
     * @param {boolean} apiParams.returnPartialSuccess - If set, the request will return all reachable occurrence summaries and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.occurrences.getVulnerabilitySummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/occurrences:vulnerabilitySummary', 'GET', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.occurrences.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.occurrences.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.occurrences.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.notes = {};

    /**
     * Gets the specified note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.notes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists notes for the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression.
     * @param {integer} apiParams.pageSize - Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     * @param {string} apiParams.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} apiParams.parent - (Required) Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.
     * @param {boolean} apiParams.returnPartialSuccess - If set, the request will return all reachable Notes and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.notes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/notes', 'GET', apiParams, clientConfig);

    /**
     * Deletes the specified note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.notes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Creates a new note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.noteId - Required. The ID to use for this note.
     * @param {string} apiParams.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.notes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/notes', 'POST', apiParams, clientConfig);

    /**
     * Creates new notes in batch.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.notes.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/notes:batchCreate', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @param {string} apiParams.updateMask - The fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.notes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.notes.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.notes.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.notes.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.notes.occurrences = {};

    /**
     * Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression.
     * @param {string} apiParams.name - (Required) Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @param {integer} apiParams.pageSize - Number of occurrences to return in the list.
     * @param {string} apiParams.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.notes.occurrences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/occurrences', 'GET', apiParams, clientConfig);

    this.projects.locations.resources = {};

    /**
     * Gets a summary of the packages within a given resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the resource to get a packages summary for in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.resources.generatePackagesSummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:generatePackagesSummary', 'POST', apiParams, clientConfig);

    /**
     * Generates an SBOM and other dependency information for the given resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the resource in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.resources.exportSBOM = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:exportSBOM', 'POST', apiParams, clientConfig);

    this.projects.notes = {};

    /**
     * Gets the specified note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists notes for the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression.
     * @param {integer} apiParams.pageSize - Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     * @param {string} apiParams.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} apiParams.parent - (Required) Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.
     * @param {boolean} apiParams.returnPartialSuccess - If set, the request will return all reachable Notes and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/notes', 'GET', apiParams, clientConfig);

    /**
     * Deletes the specified note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Creates a new note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.noteId - Required. The ID to use for this note.
     * @param {string} apiParams.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/notes', 'POST', apiParams, clientConfig);

    /**
     * Creates new notes in batch.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notes.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/notes:batchCreate', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @param {string} apiParams.updateMask - The fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notes.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notes.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notes.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.notes.occurrences = {};

    /**
     * Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression.
     * @param {string} apiParams.name - (Required) Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @param {integer} apiParams.pageSize - Number of occurrences to return in the list.
     * @param {string} apiParams.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notes.occurrences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/occurrences', 'GET', apiParams, clientConfig);

    this.projects.resources = {};

    /**
     * Gets a summary of the packages within a given resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the resource to get a packages summary for in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.resources.generatePackagesSummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:generatePackagesSummary', 'POST', apiParams, clientConfig);

    /**
     * Generates an SBOM and other dependency information for the given resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the resource in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.resources.exportSBOM = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:exportSBOM', 'POST', apiParams, clientConfig);
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
