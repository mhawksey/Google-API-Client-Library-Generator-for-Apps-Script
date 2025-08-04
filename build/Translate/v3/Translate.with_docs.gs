
/**
 * Google Apps Script client library for the Cloud Translation API
 * Documentation URL: https://cloud.google.com/translate/docs/quickstarts
 * @class
 */
class Translate {
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
    this._rootUrl = 'https://translation.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Translates input text and returns translated text.
     * @param {string} params.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.translateText = (params) => this._makeRequest('v3/{+parent}:translateText', 'POST', params);

    /**
     * Romanize input text written in non-Latin scripts to Latin text.
     * @param {string} params.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.romanizeText = (params) => this._makeRequest('v3/{+parent}:romanizeText', 'POST', params);

    /**
     * Detects the language of text within a request.
     * @param {string} params.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.detectLanguage = (params) => this._makeRequest('v3/{+parent}:detectLanguage', 'POST', params);

    /**
     * Returns a list of supported languages for translation.
     * @param {string} params.displayLanguageCode - Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.
     * @param {string} params.model - Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model.
     * @param {string} params.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for AutoML models. Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
     * @return {object} The API response object.
     */
    this.projects.getSupportedLanguages = (params) => this._makeRequest('v3/{+parent}/supportedLanguages', 'GET', params);

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v3/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Translates input text and returns translated text.
     * @param {string} params.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.translateText = (params) => this._makeRequest('v3/{+parent}:translateText', 'POST', params);

    /**
     * Romanize input text written in non-Latin scripts to Latin text.
     * @param {string} params.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.romanizeText = (params) => this._makeRequest('v3/{+parent}:romanizeText', 'POST', params);

    /**
     * Detects the language of text within a request.
     * @param {string} params.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.detectLanguage = (params) => this._makeRequest('v3/{+parent}:detectLanguage', 'POST', params);

    /**
     * Returns a list of supported languages for translation.
     * @param {string} params.displayLanguageCode - Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.
     * @param {string} params.model - Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model.
     * @param {string} params.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for AutoML models. Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.getSupportedLanguages = (params) => this._makeRequest('v3/{+parent}/supportedLanguages', 'GET', params);

    /**
     * Translates documents in synchronous mode.
     * @param {string} params.parent - (Required) Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have the same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.translateDocument = (params) => this._makeRequest('v3/{+parent}:translateDocument', 'POST', params);

    /**
     * Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
     * @param {string} params.parent - (Required) Required. Location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}`. The `global` location is not supported for batch translation. Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.batchTranslateText = (params) => this._makeRequest('v3/{+parent}:batchTranslateText', 'POST', params);

    /**
     * Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
     * @param {string} params.parent - (Required) Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. The `global` location is not supported for batch translation. Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.batchTranslateDocument = (params) => this._makeRequest('v3/{+parent}:batchTranslateDocument', 'POST', params);

    /**
     * Translate text using Adaptive MT.
     * @param {string} params.parent - (Required) Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.adaptiveMtTranslate = (params) => this._makeRequest('v3/{+parent}:adaptiveMtTranslate', 'POST', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v3/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v3/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.wait = (params) => this._makeRequest('v3/{+name}:wait', 'POST', params);

    this.projects.locations.glossaries = {};

    /**
     * Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
     * @param {string} params.parent - (Required) Required. The project name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.create = (params) => this._makeRequest('v3/{+parent}/glossaries', 'POST', params);

    /**
     * Updates a glossary. A LRO is used since the update can be async if the glossary's entry file is updated.
     * @param {string} params.name - (Required) Required. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`.
     * @param {string} params.updateMask - The list of fields to be updated. Currently only `display_name` and 'input_config'
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
     * @param {string} params.filter - Optional. Filter specifying constraints of a list operation. Specify the constraint by the format of "key=value", where key must be "src" or "tgt", and the value must be a valid language code. For multiple restrictions, concatenate them by "AND" (uppercase only), such as: "src=en-US AND tgt=zh-CN". Notice that the exact match is used here, which means using 'en-US' and 'en' can lead to different results, which depends on the language code you used when you create the glossary. For the unidirectional glossaries, the "src" and "tgt" add restrictions on the source and target language code separately. For the equivalent term set glossaries, the "src" and/or "tgt" add restrictions on the term set. For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional glossaries which exactly match the source language code as "en-US" and the target language code "zh-CN", but all equivalent term set glossaries which contain "en-US" and "zh-CN" in their language set will be picked. If missing, no filtering is performed.
     * @param {integer} params.pageSize - Optional. Requested page size. The server may return fewer glossaries than requested. If unspecified, the server picks an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossariesResponse.next_page_token] returned from the previous call to `ListGlossaries` method. The first page is returned if `page_token`is empty or missing.
     * @param {string} params.parent - (Required) Required. The name of the project from which to list all of the glossaries.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.list = (params) => this._makeRequest('v3/{+parent}/glossaries', 'GET', params);

    /**
     * Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist.
     * @param {string} params.name - (Required) Required. The name of the glossary to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if the glossary doesn't exist.
     * @param {string} params.name - (Required) Required. The name of the glossary to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.glossaries.glossaryEntries = {};

    /**
     * Gets a single glossary entry by the given id.
     * @param {string} params.name - (Required) Required. The resource name of the glossary entry to get
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.glossaryEntries.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * List the entries for the glossary.
     * @param {integer} params.pageSize - Optional. Requested page size. The server may return fewer glossary entries than requested. If unspecified, the server picks an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossaryEntriesResponse.next_page_token] returned from the previous call. The first page is returned if `page_token`is empty or missing.
     * @param {string} params.parent - (Required) Required. The parent glossary resource name for listing the glossary's entries.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.glossaryEntries.list = (params) => this._makeRequest('v3/{+parent}/glossaryEntries', 'GET', params);

    /**
     * Creates a glossary entry.
     * @param {string} params.parent - (Required) Required. The resource name of the glossary to create the entry under.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.glossaryEntries.create = (params) => this._makeRequest('v3/{+parent}/glossaryEntries', 'POST', params);

    /**
     * Updates a glossary entry.
     * @param {string} params.name - (Required) Identifier. The resource name of the entry. Format: `projects/*\/locations/*\/glossaries/*\/glossaryEntries/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.glossaryEntries.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes a single entry from the glossary
     * @param {string} params.name - (Required) Required. The resource name of the glossary entry to delete
     * @return {object} The API response object.
     */
    this.projects.locations.glossaries.glossaryEntries.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.datasets = {};

    /**
     * Creates a Dataset.
     * @param {string} params.parent - (Required) Required. The project name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.create = (params) => this._makeRequest('v3/{+parent}/datasets', 'POST', params);

    /**
     * Gets a Dataset.
     * @param {string} params.name - (Required) Required. The resource name of the dataset to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Lists datasets.
     * @param {integer} params.pageSize - Optional. Requested page size. The server can return fewer results than requested.
     * @param {string} params.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListDatasets call.
     * @param {string} params.parent - (Required) Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}`
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.list = (params) => this._makeRequest('v3/{+parent}/datasets', 'GET', params);

    /**
     * Deletes a dataset and all of its contents.
     * @param {string} params.name - (Required) Required. The name of the dataset to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Import sentence pairs into translation Dataset.
     * @param {string} params.dataset - (Required) Required. Name of the dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.importData = (params) => this._makeRequest('v3/{+dataset}:importData', 'POST', params);

    /**
     * Exports dataset's data to the provided output location.
     * @param {string} params.dataset - (Required) Required. Name of the dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.exportData = (params) => this._makeRequest('v3/{+dataset}:exportData', 'POST', params);

    this.projects.locations.datasets.examples = {};

    /**
     * Lists sentence pairs in the dataset.
     * @param {string} params.filter - Optional. An expression for filtering the examples that will be returned. Example filter: * `usage=TRAIN`
     * @param {integer} params.pageSize - Optional. Requested page size. The server can return fewer results than requested.
     * @param {string} params.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListExamples call.
     * @param {string} params.parent - (Required) Required. Name of the parent dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}`
     * @return {object} The API response object.
     */
    this.projects.locations.datasets.examples.list = (params) => this._makeRequest('v3/{+parent}/examples', 'GET', params);

    this.projects.locations.adaptiveMtDatasets = {};

    /**
     * Creates an Adaptive MT dataset.
     * @param {string} params.parent - (Required) Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.adaptiveMtDatasets.create = (params) => this._makeRequest('v3/{+parent}/adaptiveMtDatasets', 'POST', params);

    /**
     * Deletes an Adaptive MT dataset, including all its entries and associated metadata.
     * @param {string} params.name - (Required) Required. Name of the dataset. In the form of `projects/{project-number-or-id}/locations/{location-id}/adaptiveMtDatasets/{adaptive-mt-dataset-id}`
     * @return {object} The API response object.
     */
    this.projects.locations.adaptiveMtDatasets.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Gets the Adaptive MT dataset.
     * @param {string} params.name - (Required) Required. Name of the dataset. In the form of `projects/{project-number-or-id}/locations/{location-id}/adaptiveMtDatasets/{adaptive-mt-dataset-id}`
     * @return {object} The API response object.
     */
    this.projects.locations.adaptiveMtDatasets.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Lists all Adaptive MT datasets for which the caller has read permission.
     * @param {string} params.filter - Optional. An expression for filtering the results of the request. Filter is not supported yet.
     * @param {integer} params.pageSize - Optional. Requested page size. The server may return fewer results than requested. If unspecified, the server picks an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtDatasetsResponse.next_page_token returned from the previous call to `ListAdaptiveMtDatasets` method. The first page is returned if `page_token`is empty or missing.
     * @param {string} params.parent - (Required) Required. The resource name of the project from which to list the Adaptive MT datasets. `projects/{project-number-or-id}/locations/{location-id}`
     * @return {object} The API response object.
     */
    this.projects.locations.adaptiveMtDatasets.list = (params) => this._makeRequest('v3/{+parent}/adaptiveMtDatasets', 'GET', params);

    /**
     * Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.
     * @param {string} params.parent - (Required) Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.adaptiveMtDatasets.importAdaptiveMtFile = (params) => this._makeRequest('v3/{+parent}:importAdaptiveMtFile', 'POST', params);

    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles = {};

    /**
     * Gets and AdaptiveMtFile
     * @param {string} params.name - (Required) Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}`
     * @return {object} The API response object.
     */
    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Deletes an AdaptiveMtFile along with its sentences.
     * @param {string} params.name - (Required) Required. The resource name of the file to delete, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}`
     * @return {object} The API response object.
     */
    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.
     * @param {integer} params.pageSize - Optional.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtFilesResponse.next_page_token returned from the previous call to `ListAdaptiveMtFiles` method. The first page is returned if `page_token`is empty or missing.
     * @param {string} params.parent - (Required) Required. The resource name of the project from which to list the Adaptive MT files. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}`
     * @return {object} The API response object.
     */
    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.list = (params) => this._makeRequest('v3/{+parent}/adaptiveMtFiles', 'GET', params);

    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences = {};

    /**
     * Lists all AdaptiveMtSentences under a given file/dataset.
     * @param {integer} params.pageSize - 
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to `ListTranslationMemories` method. The first page is returned if `page_token` is empty or missing.
     * @param {string} params.parent - (Required) Required. The resource name of the project from which to list the Adaptive MT files. The following format lists all sentences under a file. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` The following format lists all sentences within a dataset. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}`
     * @return {object} The API response object.
     */
    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences.list = (params) => this._makeRequest('v3/{+parent}/adaptiveMtSentences', 'GET', params);

    this.projects.locations.adaptiveMtDatasets.adaptiveMtSentences = {};

    /**
     * Lists all AdaptiveMtSentences under a given file/dataset.
     * @param {integer} params.pageSize - 
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to `ListTranslationMemories` method. The first page is returned if `page_token` is empty or missing.
     * @param {string} params.parent - (Required) Required. The resource name of the project from which to list the Adaptive MT files. The following format lists all sentences under a file. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` The following format lists all sentences within a dataset. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}`
     * @return {object} The API response object.
     */
    this.projects.locations.adaptiveMtDatasets.adaptiveMtSentences.list = (params) => this._makeRequest('v3/{+parent}/adaptiveMtSentences', 'GET', params);

    this.projects.locations.models = {};

    /**
     * Creates a Model.
     * @param {string} params.parent - (Required) Required. The project name, in form of `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.models.create = (params) => this._makeRequest('v3/{+parent}/models', 'POST', params);

    /**
     * Lists models.
     * @param {string} params.filter - Optional. An expression for filtering the models that will be returned. Supported filter: `dataset_id=${dataset_id}`
     * @param {integer} params.pageSize - Optional. Requested page size. The server can return fewer results than requested.
     * @param {string} params.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListModels call.
     * @param {string} params.parent - (Required) Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}`
     * @return {object} The API response object.
     */
    this.projects.locations.models.list = (params) => this._makeRequest('v3/{+parent}/models', 'GET', params);

    /**
     * Gets a model.
     * @param {string} params.name - (Required) Required. The resource name of the model to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.models.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Deletes a model.
     * @param {string} params.name - (Required) Required. The name of the model to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.models.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
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
