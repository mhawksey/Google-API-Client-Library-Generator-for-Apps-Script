
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://contentwarehouse.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    /**
     * Gets the access control policy for a resource. Returns NOT_FOUND error if the resource does not exist. Returns an empty policy if the resource exists but does not have a policy set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) Required. REQUIRED: The resource for which the policy is being requested. Format for document: projects/{project_number}/locations/{location}/documents/{document_id}. Format for collection: projects/{project_number}/locations/{location}/collections/{collection_id}. Format for project: projects/{project_number}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.fetchAcl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:fetchAcl', 'POST', apiParams, clientConfig);

    /**
     * Sets the access control policy for a resource. Replaces any existing policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) Required. REQUIRED: The resource for which the policy is being requested. Format for document: projects/{project_number}/locations/{location}/documents/{document_id}. Format for collection: projects/{project_number}/locations/{location}/collections/{collection_id}. Format for project: projects/{project_number}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.setAcl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setAcl', 'POST', apiParams, clientConfig);

    this.projects.locations = {};

    /**
     * Provisions resources for given tenant project. Returns a long running operation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) Required. The location to be initialized Format: projects/{project_number}/locations/{location}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.initialize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}:initialize', 'POST', apiParams, clientConfig);

    /**
     * Get the project status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) Required. The location to be queried Format: projects/{project_number}/locations/{location}.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.getStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}:getStatus', 'GET', apiParams, clientConfig);

    /**
     * Run a predefined pipeline.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name which owns the resources of the pipeline. Format: projects/{project_number}/locations/{location}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.runPipeline = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:runPipeline', 'POST', apiParams, clientConfig);

    this.projects.locations.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.documentSchemas = {};

    /**
     * Creates a document schema.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent name.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documentSchemas.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/documentSchemas', 'POST', apiParams, clientConfig);

    /**
     * Deletes a document schema. Returns NOT_FOUND if the document schema does not exist. Returns BAD_REQUEST if the document schema has documents depending on it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document schema to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documentSchemas.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a document schema. Returns NOT_FOUND if the document schema does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document schema to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documentSchemas.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a Document Schema. Returns INVALID_ARGUMENT if the name of the Document Schema is non-empty and does not equal the existing name. Supports only appending new properties, adding new ENUM possible values, and updating the EnumTypeOptions.validation_check_disabled flag for ENUM possible values. Updating existing properties will result into INVALID_ARGUMENT.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document schema to update. Format: projects/{project_number}/locations/{location}/documentSchemas/{document_schema_id}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documentSchemas.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists document schemas.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of document schemas to return. The service may return fewer than this value. If unspecified, at most 50 document schemas will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListDocumentSchemas` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDocumentSchemas` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of document schemas. Format: projects/{project_number}/locations/{location}.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documentSchemas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/documentSchemas', 'GET', apiParams, clientConfig);

    this.projects.locations.documents = {};

    /**
     * Gets the access control policy for a resource. Returns NOT_FOUND error if the resource does not exist. Returns an empty policy if the resource exists but does not have a policy set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) Required. REQUIRED: The resource for which the policy is being requested. Format for document: projects/{project_number}/locations/{location}/documents/{document_id}. Format for collection: projects/{project_number}/locations/{location}/collections/{collection_id}. Format for project: projects/{project_number}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.fetchAcl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:fetchAcl', 'POST', apiParams, clientConfig);

    /**
     * Creates a document.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent name. Format: projects/{project_number}/locations/{location}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/documents', 'POST', apiParams, clientConfig);

    /**
     * Updates a document. Returns INVALID_ARGUMENT if the name of the document is non-empty and does not equal the existing name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to update. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Searches for documents using provided SearchDocumentsRequest. This call only returns documents that the caller has permission to search against.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of documents. Format: projects/{project_number}/locations/{location}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/documents:search', 'POST', apiParams, clientConfig);

    /**
     * Lock the document so the document cannot be updated by other users.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to lock. Format: projects/{project_number}/locations/{location}/documents/{document}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.lock = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:lock', 'POST', apiParams, clientConfig);

    /**
     * Return all source document-links from the document.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the document, for which all source links are returned. Format: projects/{project_number}/locations/{location}/documents/{source_document_id}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.linkedSources = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/linkedSources', 'POST', apiParams, clientConfig);

    /**
     * Deletes a document. Returns NOT_FOUND if the document does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to delete. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:delete', 'POST', apiParams, clientConfig);

    /**
     * Gets a document. Returns NOT_FOUND if the document does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to retrieve. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:get', 'POST', apiParams, clientConfig);

    /**
     * Return all target document-links from the document.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the document, for which all target links are returned. Format: projects/{project_number}/locations/{location}/documents/{target_document_id}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.linkedTargets = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/linkedTargets', 'POST', apiParams, clientConfig);

    /**
     * Sets the access control policy for a resource. Replaces any existing policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) Required. REQUIRED: The resource for which the policy is being requested. Format for document: projects/{project_number}/locations/{location}/documents/{document_id}. Format for collection: projects/{project_number}/locations/{location}/collections/{collection_id}. Format for project: projects/{project_number}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.setAcl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setAcl', 'POST', apiParams, clientConfig);

    this.projects.locations.documents.documentLinks = {};

    /**
     * Remove the link between the source and target documents.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document-link to be deleted. Format: projects/{project_number}/locations/{location}/documents/{source_document_id}/documentLinks/{document_link_id}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.documentLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:delete', 'POST', apiParams, clientConfig);

    /**
     * Create a link between a source document and a target document.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Parent of the document-link to be created. parent of document-link should be a document. Format: projects/{project_number}/locations/{location}/documents/{source_document_id}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.documentLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/documentLinks', 'POST', apiParams, clientConfig);

    this.projects.locations.documents.referenceId = {};

    /**
     * Updates a document. Returns INVALID_ARGUMENT if the name of the document is non-empty and does not equal the existing name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to update. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.referenceId.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a document. Returns NOT_FOUND if the document does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to delete. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.referenceId.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:delete', 'POST', apiParams, clientConfig);

    /**
     * Gets a document. Returns NOT_FOUND if the document does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to retrieve. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.documents.referenceId.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:get', 'POST', apiParams, clientConfig);

    this.projects.locations.ruleSets = {};

    /**
     * Gets a ruleset. Returns NOT_FOUND if the ruleset does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the rule set to retrieve. Format: projects/{project_number}/locations/{location}/ruleSets/{rule_set_id}.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.ruleSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a ruleset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent name. Format: projects/{project_number}/locations/{location}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.ruleSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/ruleSets', 'POST', apiParams, clientConfig);

    /**
     * Lists rulesets.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of rule sets to return. The service may return fewer than this value. If unspecified, at most 50 rule sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListRuleSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRuleSets` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of document. Format: projects/{project_number}/locations/{location}.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.ruleSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/ruleSets', 'GET', apiParams, clientConfig);

    /**
     * Updates a ruleset. Returns INVALID_ARGUMENT if the name of the ruleset is non-empty and does not equal the existing name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the rule set to update. Format: projects/{project_number}/locations/{location}/ruleSets/{rule_set_id}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.ruleSets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a ruleset. Returns NOT_FOUND if the document does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the rule set to delete. Format: projects/{project_number}/locations/{location}/ruleSets/{rule_set_id}.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.ruleSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.synonymSets = {};

    /**
     * Returns all SynonymSets (for all contexts) for the specified location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of synonymSets to return. The service may return fewer than this value. If unspecified, at most 50 rule sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListSynonymSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSynonymSets` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent name. Format: projects/{project_number}/locations/{location}.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.synonymSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/synonymSets', 'GET', apiParams, clientConfig);

    /**
     * Gets a SynonymSet for a particular context. Throws a NOT_FOUND exception if the Synonymset does not exist
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the synonymSet to retrieve Format: projects/{project_number}/locations/{location}/synonymSets/{context}.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.synonymSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a SynonymSet for a single context. Throws an ALREADY_EXISTS exception if a synonymset already exists for the context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent name. Format: projects/{project_number}/locations/{location}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.synonymSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/synonymSets', 'POST', apiParams, clientConfig);

    /**
     * Remove the existing SynonymSet for the context and replaces it with a new one. Throws a NOT_FOUND exception if the SynonymSet is not found.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the synonymSet to update Format: projects/{project_number}/locations/{location}/synonymSets/{context}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.synonymSets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a SynonymSet for a given context. Throws a NOT_FOUND exception if the SynonymSet is not found.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the synonymSet to delete Format: projects/{project_number}/locations/{location}/synonymSets/{context}.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.synonymSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
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
