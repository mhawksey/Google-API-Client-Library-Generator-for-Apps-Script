
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://containeranalysis.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.occurrences = {};

    /**
     * Gets the specified occurrence.
     * @param {string} params.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @return {object} The API response object.
     */
    this.projects.occurrences.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists occurrences for the specified project.
     * @param {string} params.filter - The filter expression.
     * @param {integer} params.pageSize - Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     * @param {string} params.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} params.parent - (Required) Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.
     * @param {boolean} params.returnPartialSuccess - If set, the request will return all reachable Occurrences and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     * @return {object} The API response object.
     */
    this.projects.occurrences.list = (params) => this._makeRequest('v1/{+parent}/occurrences', 'GET', params);

    /**
     * Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.
     * @param {string} params.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @return {object} The API response object.
     */
    this.projects.occurrences.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates a new occurrence.
     * @param {string} params.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.occurrences.create = (params) => this._makeRequest('v1/{+parent}/occurrences', 'POST', params);

    /**
     * Creates new occurrences in batch.
     * @param {string} params.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.occurrences.batchCreate = (params) => this._makeRequest('v1/{+parent}/occurrences:batchCreate', 'POST', params);

    /**
     * Updates the specified occurrence.
     * @param {string} params.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @param {string} params.updateMask - The fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.occurrences.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.
     * @param {string} params.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @return {object} The API response object.
     */
    this.projects.occurrences.getNotes = (params) => this._makeRequest('v1/{+name}/notes', 'GET', params);

    /**
     * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.occurrences.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.occurrences.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.occurrences.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Gets a summary of the number and severity of occurrences.
     * @param {string} params.filter - The filter expression.
     * @param {string} params.parent - (Required) Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.
     * @param {boolean} params.returnPartialSuccess - If set, the request will return all reachable occurrence summaries and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     * @return {object} The API response object.
     */
    this.projects.occurrences.getVulnerabilitySummary = (params) => this._makeRequest('v1/{+parent}/occurrences:vulnerabilitySummary', 'GET', params);

    this.projects.locations = {};

    this.projects.locations.occurrences = {};

    /**
     * Gets the specified occurrence.
     * @param {string} params.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @return {object} The API response object.
     */
    this.projects.locations.occurrences.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists occurrences for the specified project.
     * @param {string} params.filter - The filter expression.
     * @param {integer} params.pageSize - Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     * @param {string} params.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} params.parent - (Required) Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.
     * @param {boolean} params.returnPartialSuccess - If set, the request will return all reachable Occurrences and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     * @return {object} The API response object.
     */
    this.projects.locations.occurrences.list = (params) => this._makeRequest('v1/{+parent}/occurrences', 'GET', params);

    /**
     * Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.
     * @param {string} params.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @return {object} The API response object.
     */
    this.projects.locations.occurrences.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates a new occurrence.
     * @param {string} params.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.occurrences.create = (params) => this._makeRequest('v1/{+parent}/occurrences', 'POST', params);

    /**
     * Creates new occurrences in batch.
     * @param {string} params.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.occurrences.batchCreate = (params) => this._makeRequest('v1/{+parent}/occurrences:batchCreate', 'POST', params);

    /**
     * Updates the specified occurrence.
     * @param {string} params.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @param {string} params.updateMask - The fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.occurrences.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.
     * @param {string} params.name - (Required) Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     * @return {object} The API response object.
     */
    this.projects.locations.occurrences.getNotes = (params) => this._makeRequest('v1/{+name}/notes', 'GET', params);

    /**
     * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.occurrences.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.occurrences.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.occurrences.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Gets a summary of the number and severity of occurrences.
     * @param {string} params.filter - The filter expression.
     * @param {string} params.parent - (Required) Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.
     * @param {boolean} params.returnPartialSuccess - If set, the request will return all reachable occurrence summaries and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     * @return {object} The API response object.
     */
    this.projects.locations.occurrences.getVulnerabilitySummary = (params) => this._makeRequest('v1/{+parent}/occurrences:vulnerabilitySummary', 'GET', params);

    this.projects.locations.notes = {};

    /**
     * Gets the specified note.
     * @param {string} params.name - (Required) Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @return {object} The API response object.
     */
    this.projects.locations.notes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists notes for the specified project.
     * @param {string} params.filter - The filter expression.
     * @param {integer} params.pageSize - Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     * @param {string} params.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} params.parent - (Required) Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.
     * @param {boolean} params.returnPartialSuccess - If set, the request will return all reachable Notes and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     * @return {object} The API response object.
     */
    this.projects.locations.notes.list = (params) => this._makeRequest('v1/{+parent}/notes', 'GET', params);

    /**
     * Deletes the specified note.
     * @param {string} params.name - (Required) Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @return {object} The API response object.
     */
    this.projects.locations.notes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates a new note.
     * @param {string} params.noteId - Required. The ID to use for this note.
     * @param {string} params.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notes.create = (params) => this._makeRequest('v1/{+parent}/notes', 'POST', params);

    /**
     * Creates new notes in batch.
     * @param {string} params.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notes.batchCreate = (params) => this._makeRequest('v1/{+parent}/notes:batchCreate', 'POST', params);

    /**
     * Updates the specified note.
     * @param {string} params.name - (Required) Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @param {string} params.updateMask - The fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.notes.occurrences = {};

    /**
     * Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.
     * @param {string} params.filter - The filter expression.
     * @param {string} params.name - (Required) Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @param {integer} params.pageSize - Number of occurrences to return in the list.
     * @param {string} params.pageToken - Token to provide to skip to a particular spot in the list.
     * @return {object} The API response object.
     */
    this.projects.locations.notes.occurrences.list = (params) => this._makeRequest('v1/{+name}/occurrences', 'GET', params);

    this.projects.locations.resources = {};

    /**
     * Generates an SBOM for the given resource.
     * @param {string} params.name - (Required) Required. The name of the resource in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.resources.exportSBOM = (params) => this._makeRequest('v1/{+name}:exportSBOM', 'POST', params);

    this.projects.notes = {};

    /**
     * Gets the specified note.
     * @param {string} params.name - (Required) Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @return {object} The API response object.
     */
    this.projects.notes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists notes for the specified project.
     * @param {string} params.filter - The filter expression.
     * @param {integer} params.pageSize - Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     * @param {string} params.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} params.parent - (Required) Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.
     * @param {boolean} params.returnPartialSuccess - If set, the request will return all reachable Notes and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     * @return {object} The API response object.
     */
    this.projects.notes.list = (params) => this._makeRequest('v1/{+parent}/notes', 'GET', params);

    /**
     * Deletes the specified note.
     * @param {string} params.name - (Required) Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @return {object} The API response object.
     */
    this.projects.notes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates a new note.
     * @param {string} params.noteId - Required. The ID to use for this note.
     * @param {string} params.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notes.create = (params) => this._makeRequest('v1/{+parent}/notes', 'POST', params);

    /**
     * Creates new notes in batch.
     * @param {string} params.parent - (Required) Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notes.batchCreate = (params) => this._makeRequest('v1/{+parent}/notes:batchCreate', 'POST', params);

    /**
     * Updates the specified note.
     * @param {string} params.name - (Required) Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @param {string} params.updateMask - The fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.notes.occurrences = {};

    /**
     * Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.
     * @param {string} params.filter - The filter expression.
     * @param {string} params.name - (Required) Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     * @param {integer} params.pageSize - Number of occurrences to return in the list.
     * @param {string} params.pageToken - Token to provide to skip to a particular spot in the list.
     * @return {object} The API response object.
     */
    this.projects.notes.occurrences.list = (params) => this._makeRequest('v1/{+name}/occurrences', 'GET', params);

    this.projects.resources = {};

    /**
     * Generates an SBOM for the given resource.
     * @param {string} params.name - (Required) Required. The name of the resource in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.resources.exportSBOM = (params) => this._makeRequest('v1/{+name}:exportSBOM', 'POST', params);
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
