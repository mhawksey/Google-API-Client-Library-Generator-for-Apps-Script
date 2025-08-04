
/**
 * Google Apps Script client library for the Document AI Warehouse API
 * Documentation URL: https://cloud.google.com/document-warehouse
 * @class
 */
class Contentwarehouse {
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
    this._rootUrl = 'https://contentwarehouse.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Gets the access control policy for a resource. Returns NOT_FOUND error if the resource does not exist. Returns an empty policy if the resource exists but does not have a policy set.
     * @param {string} params.resource - (Required) Required. REQUIRED: The resource for which the policy is being requested. Format for document: projects/{project_number}/locations/{location}/documents/{document_id}. Format for collection: projects/{project_number}/locations/{location}/collections/{collection_id}. Format for project: projects/{project_number}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.fetchAcl = (params) => this._makeRequest('v1/{+resource}:fetchAcl', 'POST', params);

    /**
     * Sets the access control policy for a resource. Replaces any existing policy.
     * @param {string} params.resource - (Required) Required. REQUIRED: The resource for which the policy is being requested. Format for document: projects/{project_number}/locations/{location}/documents/{document_id}. Format for collection: projects/{project_number}/locations/{location}/collections/{collection_id}. Format for project: projects/{project_number}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.setAcl = (params) => this._makeRequest('v1/{+resource}:setAcl', 'POST', params);

    this.projects.locations = {};

    /**
     * Get the project status.
     * @param {string} params.location - (Required) Required. The location to be queried Format: projects/{project_number}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.getStatus = (params) => this._makeRequest('v1/{+location}:getStatus', 'GET', params);

    /**
     * Run a predefined pipeline.
     * @param {string} params.name - (Required) Required. The resource name which owns the resources of the pipeline. Format: projects/{project_number}/locations/{location}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.runPipeline = (params) => this._makeRequest('v1/{+name}:runPipeline', 'POST', params);

    /**
     * Provisions resources for given tenant project. Returns a long running operation.
     * @param {string} params.location - (Required) Required. The location to be initialized Format: projects/{project_number}/locations/{location}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.initialize = (params) => this._makeRequest('v1/{+location}:initialize', 'POST', params);

    this.projects.locations.documentSchemas = {};

    /**
     * Updates a Document Schema. Returns INVALID_ARGUMENT if the name of the Document Schema is non-empty and does not equal the existing name. Supports only appending new properties, adding new ENUM possible values, and updating the EnumTypeOptions.validation_check_disabled flag for ENUM possible values. Updating existing properties will result into INVALID_ARGUMENT.
     * @param {string} params.name - (Required) Required. The name of the document schema to update. Format: projects/{project_number}/locations/{location}/documentSchemas/{document_schema_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documentSchemas.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Creates a document schema.
     * @param {string} params.parent - (Required) Required. The parent name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documentSchemas.create = (params) => this._makeRequest('v1/{+parent}/documentSchemas', 'POST', params);

    /**
     * Gets a document schema. Returns NOT_FOUND if the document schema does not exist.
     * @param {string} params.name - (Required) Required. The name of the document schema to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.documentSchemas.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists document schemas.
     * @param {integer} params.pageSize - The maximum number of document schemas to return. The service may return fewer than this value. If unspecified, at most 50 document schemas will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListDocumentSchemas` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDocumentSchemas` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of document schemas. Format: projects/{project_number}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.documentSchemas.list = (params) => this._makeRequest('v1/{+parent}/documentSchemas', 'GET', params);

    /**
     * Deletes a document schema. Returns NOT_FOUND if the document schema does not exist. Returns BAD_REQUEST if the document schema has documents depending on it.
     * @param {string} params.name - (Required) Required. The name of the document schema to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.documentSchemas.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.ruleSets = {};

    /**
     * Gets a ruleset. Returns NOT_FOUND if the ruleset does not exist.
     * @param {string} params.name - (Required) Required. The name of the rule set to retrieve. Format: projects/{project_number}/locations/{location}/ruleSets/{rule_set_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.ruleSets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a ruleset. Returns NOT_FOUND if the document does not exist.
     * @param {string} params.name - (Required) Required. The name of the rule set to delete. Format: projects/{project_number}/locations/{location}/ruleSets/{rule_set_id}.
     * @return {object} The API response object.
     */
    this.projects.locations.ruleSets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates a ruleset. Returns INVALID_ARGUMENT if the name of the ruleset is non-empty and does not equal the existing name.
     * @param {string} params.name - (Required) Required. The name of the rule set to update. Format: projects/{project_number}/locations/{location}/ruleSets/{rule_set_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.ruleSets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists rulesets.
     * @param {integer} params.pageSize - The maximum number of rule sets to return. The service may return fewer than this value. If unspecified, at most 50 rule sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListRuleSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRuleSets` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of document. Format: projects/{project_number}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.ruleSets.list = (params) => this._makeRequest('v1/{+parent}/ruleSets', 'GET', params);

    /**
     * Creates a ruleset.
     * @param {string} params.parent - (Required) Required. The parent name. Format: projects/{project_number}/locations/{location}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.ruleSets.create = (params) => this._makeRequest('v1/{+parent}/ruleSets', 'POST', params);

    this.projects.locations.documents = {};

    /**
     * Deletes a document. Returns NOT_FOUND if the document does not exist.
     * @param {string} params.name - (Required) Required. The name of the document to delete. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.delete = (params) => this._makeRequest('v1/{+name}:delete', 'POST', params);

    /**
     * Sets the access control policy for a resource. Replaces any existing policy.
     * @param {string} params.resource - (Required) Required. REQUIRED: The resource for which the policy is being requested. Format for document: projects/{project_number}/locations/{location}/documents/{document_id}. Format for collection: projects/{project_number}/locations/{location}/collections/{collection_id}. Format for project: projects/{project_number}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.setAcl = (params) => this._makeRequest('v1/{+resource}:setAcl', 'POST', params);

    /**
     * Lock the document so the document cannot be updated by other users.
     * @param {string} params.name - (Required) Required. The name of the document to lock. Format: projects/{project_number}/locations/{location}/documents/{document}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.lock = (params) => this._makeRequest('v1/{+name}:lock', 'POST', params);

    /**
     * Return all target document-links from the document.
     * @param {string} params.parent - (Required) Required. The name of the document, for which all target links are returned. Format: projects/{project_number}/locations/{location}/documents/{target_document_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.linkedTargets = (params) => this._makeRequest('v1/{+parent}/linkedTargets', 'POST', params);

    /**
     * Searches for documents using provided SearchDocumentsRequest. This call only returns documents that the caller has permission to search against.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of documents. Format: projects/{project_number}/locations/{location}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.search = (params) => this._makeRequest('v1/{+parent}/documents:search', 'POST', params);

    /**
     * Return all source document-links from the document.
     * @param {string} params.parent - (Required) Required. The name of the document, for which all source links are returned. Format: projects/{project_number}/locations/{location}/documents/{source_document_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.linkedSources = (params) => this._makeRequest('v1/{+parent}/linkedSources', 'POST', params);

    /**
     * Creates a document.
     * @param {string} params.parent - (Required) Required. The parent name. Format: projects/{project_number}/locations/{location}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.create = (params) => this._makeRequest('v1/{+parent}/documents', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns NOT_FOUND error if the resource does not exist. Returns an empty policy if the resource exists but does not have a policy set.
     * @param {string} params.resource - (Required) Required. REQUIRED: The resource for which the policy is being requested. Format for document: projects/{project_number}/locations/{location}/documents/{document_id}. Format for collection: projects/{project_number}/locations/{location}/collections/{collection_id}. Format for project: projects/{project_number}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.fetchAcl = (params) => this._makeRequest('v1/{+resource}:fetchAcl', 'POST', params);

    /**
     * Gets a document. Returns NOT_FOUND if the document does not exist.
     * @param {string} params.name - (Required) Required. The name of the document to retrieve. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.get = (params) => this._makeRequest('v1/{+name}:get', 'POST', params);

    /**
     * Updates a document. Returns INVALID_ARGUMENT if the name of the document is non-empty and does not equal the existing name.
     * @param {string} params.name - (Required) Required. The name of the document to update. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.documents.referenceId = {};

    /**
     * Gets a document. Returns NOT_FOUND if the document does not exist.
     * @param {string} params.name - (Required) Required. The name of the document to retrieve. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.referenceId.get = (params) => this._makeRequest('v1/{+name}:get', 'POST', params);

    /**
     * Deletes a document. Returns NOT_FOUND if the document does not exist.
     * @param {string} params.name - (Required) Required. The name of the document to delete. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.referenceId.delete = (params) => this._makeRequest('v1/{+name}:delete', 'POST', params);

    /**
     * Updates a document. Returns INVALID_ARGUMENT if the name of the document is non-empty and does not equal the existing name.
     * @param {string} params.name - (Required) Required. The name of the document to update. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.referenceId.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.documents.documentLinks = {};

    /**
     * Remove the link between the source and target documents.
     * @param {string} params.name - (Required) Required. The name of the document-link to be deleted. Format: projects/{project_number}/locations/{location}/documents/{source_document_id}/documentLinks/{document_link_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.documentLinks.delete = (params) => this._makeRequest('v1/{+name}:delete', 'POST', params);

    /**
     * Create a link between a source document and a target document.
     * @param {string} params.parent - (Required) Required. Parent of the document-link to be created. parent of document-link should be a document. Format: projects/{project_number}/locations/{location}/documents/{source_document_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.documents.documentLinks.create = (params) => this._makeRequest('v1/{+parent}/documentLinks', 'POST', params);

    this.projects.locations.synonymSets = {};

    /**
     * Remove the existing SynonymSet for the context and replaces it with a new one. Throws a NOT_FOUND exception if the SynonymSet is not found.
     * @param {string} params.name - (Required) Required. The name of the synonymSet to update Format: projects/{project_number}/locations/{location}/synonymSets/{context}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.synonymSets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets a SynonymSet for a particular context. Throws a NOT_FOUND exception if the Synonymset does not exist
     * @param {string} params.name - (Required) Required. The name of the synonymSet to retrieve Format: projects/{project_number}/locations/{location}/synonymSets/{context}.
     * @return {object} The API response object.
     */
    this.projects.locations.synonymSets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns all SynonymSets (for all contexts) for the specified location.
     * @param {integer} params.pageSize - The maximum number of synonymSets to return. The service may return fewer than this value. If unspecified, at most 50 rule sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListSynonymSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSynonymSets` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent name. Format: projects/{project_number}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.synonymSets.list = (params) => this._makeRequest('v1/{+parent}/synonymSets', 'GET', params);

    /**
     * Deletes a SynonymSet for a given context. Throws a NOT_FOUND exception if the SynonymSet is not found.
     * @param {string} params.name - (Required) Required. The name of the synonymSet to delete Format: projects/{project_number}/locations/{location}/synonymSets/{context}.
     * @return {object} The API response object.
     */
    this.projects.locations.synonymSets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates a SynonymSet for a single context. Throws an ALREADY_EXISTS exception if a synonymset already exists for the context.
     * @param {string} params.parent - (Required) Required. The parent name. Format: projects/{project_number}/locations/{location}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.synonymSets.create = (params) => this._makeRequest('v1/{+parent}/synonymSets', 'POST', params);

    this.projects.locations.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
