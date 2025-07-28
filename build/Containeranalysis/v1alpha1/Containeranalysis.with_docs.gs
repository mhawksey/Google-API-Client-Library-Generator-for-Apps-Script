
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
     * Returns the requested `Occurrence`.
     * @param {string} params.name - (Required) The name of the occurrence of the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}"
     * @return {object} The API response object.
     */
    this.projects.occurrences.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Lists active `Occurrences` for a given project matching the filters.
     * @param {string} params.filter - The filter expression.
     * @param {string} params.kind - The kind of occurrences to filter on.
     * @param {string} params.name - The name field contains the project Id. For example: "projects/{project_id} @Deprecated
     * @param {integer} params.pageSize - Number of occurrences to return in the list.
     * @param {string} params.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} params.parent - (Required) This contains the project Id for example: projects/{project_id}.
     * @return {object} The API response object.
     */
    this.projects.occurrences.list = (params) => this._makeRequest('v1alpha1/{+parent}/occurrences', 'GET', params);

    /**
     * Deletes the given `Occurrence` from the system. Use this when an `Occurrence` is no longer applicable for the given resource.
     * @param {string} params.name - (Required) The name of the occurrence in the form of "projects/{project_id}/occurrences/{OCCURRENCE_ID}"
     * @return {object} The API response object.
     */
    this.projects.occurrences.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Creates a new `Occurrence`. Use this method to create `Occurrences` for a resource.
     * @param {string} params.name - The name of the project. Should be of the form "projects/{project_id}". @Deprecated
     * @param {string} params.parent - (Required) This field contains the project Id for example: "projects/{project_id}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.occurrences.create = (params) => this._makeRequest('v1alpha1/{+parent}/occurrences', 'POST', params);

    /**
     * Updates an existing occurrence.
     * @param {string} params.name - (Required) The name of the occurrence. Should be of the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}".
     * @param {string} params.updateMask - The fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.occurrences.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Gets the `Note` attached to the given `Occurrence`.
     * @param {string} params.name - (Required) The name of the occurrence in the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}"
     * @return {object} The API response object.
     */
    this.projects.occurrences.getNotes = (params) => this._makeRequest('v1alpha1/{+name}/notes', 'GET', params);

    /**
     * Gets a summary of the number and severity of occurrences.
     * @param {string} params.filter - The filter expression.
     * @param {string} params.parent - (Required) This contains the project Id for example: projects/{project_id}
     * @return {object} The API response object.
     */
    this.projects.occurrences.getVulnerabilitySummary = (params) => this._makeRequest('v1alpha1/{+parent}/occurrences:vulnerabilitySummary', 'GET', params);

    /**
     * Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.occurrences.setIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.occurrences.getIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.occurrences.testIamPermissions = (params) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.notes = {};

    /**
     * Returns the requested `Note`.
     * @param {string} params.name - (Required) The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}"
     * @return {object} The API response object.
     */
    this.projects.notes.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Lists all `Notes` for a given project.
     * @param {string} params.filter - The filter expression.
     * @param {string} params.name - The name field will contain the project Id for example: "providers/{provider_id} @Deprecated
     * @param {integer} params.pageSize - Number of notes to return in the list.
     * @param {string} params.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} params.parent - (Required) This field contains the project Id for example: "projects/{PROJECT_ID}".
     * @return {object} The API response object.
     */
    this.projects.notes.list = (params) => this._makeRequest('v1alpha1/{+parent}/notes', 'GET', params);

    /**
     * Deletes the given `Note` from the system.
     * @param {string} params.name - (Required) The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}"
     * @return {object} The API response object.
     */
    this.projects.notes.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Creates a new `Note`.
     * @param {string} params.name - The name of the project. Should be of the form "providers/{provider_id}". @Deprecated
     * @param {string} params.noteId - The ID to use for this note.
     * @param {string} params.parent - (Required) This field contains the project Id for example: "projects/{project_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notes.create = (params) => this._makeRequest('v1alpha1/{+parent}/notes', 'POST', params);

    /**
     * Updates an existing `Note`.
     * @param {string} params.name - (Required) The name of the note. Should be of the form "projects/{provider_id}/notes/{note_id}".
     * @param {string} params.updateMask - The fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notes.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notes.setIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notes.getIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notes.testIamPermissions = (params) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.notes.occurrences = {};

    /**
     * Lists `Occurrences` referencing the specified `Note`. Use this method to get all occurrences referencing your `Note` across all your customer projects.
     * @param {string} params.filter - The filter expression.
     * @param {string} params.name - (Required) The name field will contain the note name for example: "provider/{provider_id}/notes/{note_id}"
     * @param {integer} params.pageSize - Number of notes to return in the list.
     * @param {string} params.pageToken - Token to provide to skip to a particular spot in the list.
     * @return {object} The API response object.
     */
    this.projects.notes.occurrences.list = (params) => this._makeRequest('v1alpha1/{+name}/occurrences', 'GET', params);

    this.projects.operations = {};

    /**
     * Creates a new `Operation`.
     * @param {string} params.parent - (Required) The project Id that this operation should be created under.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.operations.create = (params) => this._makeRequest('v1alpha1/{+parent}/operations', 'POST', params);

    /**
     * Updates an existing operation returns an error if operation does not exist. The only valid operations are to update mark the done bit change the result.
     * @param {string} params.name - (Required) The name of the Operation. Should be of the form "projects/{provider_id}/operations/{operation_id}".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.operations.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    this.projects.scanConfigs = {};

    /**
     * Gets a specific scan configuration for a project.
     * @param {string} params.name - (Required) The name of the ScanConfig in the form projects/{project_id}/scanConfigs/{scan_config_id}
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Lists scan configurations for a project.
     * @param {string} params.filter - The filter expression.
     * @param {integer} params.pageSize - The number of items to return.
     * @param {string} params.pageToken - The page token to use for the next request.
     * @param {string} params.parent - (Required) This containers the project Id i.e.: projects/{project_id}
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.list = (params) => this._makeRequest('v1alpha1/{+parent}/scanConfigs', 'GET', params);

    /**
     * Updates the scan configuration to a new value.
     * @param {string} params.name - (Required) The scan config to update of the form projects/{project_id}/scanConfigs/{scan_config_id}.
     * @param {string} params.updateMask - The fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    this.providers = {};

    this.providers.notes = {};

    /**
     * Returns the requested `Note`.
     * @param {string} params.name - (Required) The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}"
     * @return {object} The API response object.
     */
    this.providers.notes.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Lists all `Notes` for a given project.
     * @param {string} params.filter - The filter expression.
     * @param {string} params.name - (Required) The name field will contain the project Id for example: "providers/{provider_id} @Deprecated
     * @param {integer} params.pageSize - Number of notes to return in the list.
     * @param {string} params.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} params.parent - This field contains the project Id for example: "projects/{PROJECT_ID}".
     * @return {object} The API response object.
     */
    this.providers.notes.list = (params) => this._makeRequest('v1alpha1/{+name}/notes', 'GET', params);

    /**
     * Deletes the given `Note` from the system.
     * @param {string} params.name - (Required) The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}"
     * @return {object} The API response object.
     */
    this.providers.notes.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Creates a new `Note`.
     * @param {string} params.name - (Required) The name of the project. Should be of the form "providers/{provider_id}". @Deprecated
     * @param {string} params.noteId - The ID to use for this note.
     * @param {string} params.parent - This field contains the project Id for example: "projects/{project_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.providers.notes.create = (params) => this._makeRequest('v1alpha1/{+name}/notes', 'POST', params);

    /**
     * Updates an existing `Note`.
     * @param {string} params.name - (Required) The name of the note. Should be of the form "projects/{provider_id}/notes/{note_id}".
     * @param {string} params.updateMask - The fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.providers.notes.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.providers.notes.setIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.providers.notes.getIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.providers.notes.testIamPermissions = (params) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', params);

    this.providers.notes.occurrences = {};

    /**
     * Lists `Occurrences` referencing the specified `Note`. Use this method to get all occurrences referencing your `Note` across all your customer projects.
     * @param {string} params.filter - The filter expression.
     * @param {string} params.name - (Required) The name field will contain the note name for example: "provider/{provider_id}/notes/{note_id}"
     * @param {integer} params.pageSize - Number of notes to return in the list.
     * @param {string} params.pageToken - Token to provide to skip to a particular spot in the list.
     * @return {object} The API response object.
     */
    this.providers.notes.occurrences.list = (params) => this._makeRequest('v1alpha1/{+name}/occurrences', 'GET', params);
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
