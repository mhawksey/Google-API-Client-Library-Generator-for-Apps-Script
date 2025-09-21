
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://translation.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    /**
     * Translates input text and returns translated text.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.translateText = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}:translateText', 'POST', apiParams, clientConfig);

    /**
     * Romanize input text written in non-Latin scripts to Latin text.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.romanizeText = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}:romanizeText', 'POST', apiParams, clientConfig);

    /**
     * Detects the language of text within a request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.detectLanguage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}:detectLanguage', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of supported languages for translation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.displayLanguageCode - Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.
     * @param {string} apiParams.model - Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model.
     * @param {string} apiParams.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for AutoML models. Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.getSupportedLanguages = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/supportedLanguages', 'GET', apiParams, clientConfig);

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} apiParams.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/locations', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name for the location.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Translates input text and returns translated text.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.translateText = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}:translateText', 'POST', apiParams, clientConfig);

    /**
     * Romanize input text written in non-Latin scripts to Latin text.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.romanizeText = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}:romanizeText', 'POST', apiParams, clientConfig);

    /**
     * Detects the language of text within a request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.detectLanguage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}:detectLanguage', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of supported languages for translation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.displayLanguageCode - Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.
     * @param {string} apiParams.model - Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model.
     * @param {string} apiParams.parent - (Required) Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for AutoML models. Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.getSupportedLanguages = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/supportedLanguages', 'GET', apiParams, clientConfig);

    /**
     * Translates documents in synchronous mode.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have the same location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.translateDocument = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}:translateDocument', 'POST', apiParams, clientConfig);

    /**
     * Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}`. The `global` location is not supported for batch translation. Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.batchTranslateText = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}:batchTranslateText', 'POST', apiParams, clientConfig);

    /**
     * Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. The `global` location is not supported for batch translation. Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.batchTranslateDocument = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}:batchTranslateDocument', 'POST', apiParams, clientConfig);

    /**
     * Translate text using Adaptive MT.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.adaptiveMtTranslate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}:adaptiveMtTranslate', 'POST', apiParams, clientConfig);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:cancel', 'POST', apiParams, clientConfig);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to wait on.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.glossaries = {};

    /**
     * Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project name.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.glossaries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/glossaries', 'POST', apiParams, clientConfig);

    /**
     * Updates a glossary. A LRO is used since the update can be async if the glossary's entry file is updated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`.
     * @param {string} apiParams.updateMask - The list of fields to be updated. Currently only `display_name` and 'input_config'
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.glossaries.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter specifying constraints of a list operation. Specify the constraint by the format of "key=value", where key must be "src" or "tgt", and the value must be a valid language code. For multiple restrictions, concatenate them by "AND" (uppercase only), such as: "src=en-US AND tgt=zh-CN". Notice that the exact match is used here, which means using 'en-US' and 'en' can lead to different results, which depends on the language code you used when you create the glossary. For the unidirectional glossaries, the "src" and "tgt" add restrictions on the source and target language code separately. For the equivalent term set glossaries, the "src" and/or "tgt" add restrictions on the term set. For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional glossaries which exactly match the source language code as "en-US" and the target language code "zh-CN", but all equivalent term set glossaries which contain "en-US" and "zh-CN" in their language set will be picked. If missing, no filtering is performed.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. The server may return fewer glossaries than requested. If unspecified, the server picks an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossariesResponse.next_page_token] returned from the previous call to `ListGlossaries` method. The first page is returned if `page_token`is empty or missing.
     * @param {string} apiParams.parent - (Required) Required. The name of the project from which to list all of the glossaries.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.glossaries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/glossaries', 'GET', apiParams, clientConfig);

    /**
     * Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the glossary to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.glossaries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if the glossary doesn't exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the glossary to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.glossaries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.glossaries.glossaryEntries = {};

    /**
     * Gets a single glossary entry by the given id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the glossary entry to get
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.glossaries.glossaryEntries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List the entries for the glossary.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. The server may return fewer glossary entries than requested. If unspecified, the server picks an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossaryEntriesResponse.next_page_token] returned from the previous call. The first page is returned if `page_token`is empty or missing.
     * @param {string} apiParams.parent - (Required) Required. The parent glossary resource name for listing the glossary's entries.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.glossaries.glossaryEntries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/glossaryEntries', 'GET', apiParams, clientConfig);

    /**
     * Creates a glossary entry.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the glossary to create the entry under.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.glossaries.glossaryEntries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/glossaryEntries', 'POST', apiParams, clientConfig);

    /**
     * Updates a glossary entry.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the entry. Format: `projects/*\/locations/*\/glossaries/*\/glossaryEntries/*`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.glossaries.glossaryEntries.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a single entry from the glossary
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the glossary entry to delete
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.glossaries.glossaryEntries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.datasets = {};

    /**
     * Creates a Dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project name.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/datasets', 'POST', apiParams, clientConfig);

    /**
     * Gets a Dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the dataset to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists datasets.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. The server can return fewer results than requested.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListDatasets call.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/datasets', 'GET', apiParams, clientConfig);

    /**
     * Deletes a dataset and all of its contents.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the dataset to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Import sentence pairs into translation Dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dataset - (Required) Required. Name of the dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.importData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+dataset}:importData', 'POST', apiParams, clientConfig);

    /**
     * Exports dataset's data to the provided output location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dataset - (Required) Required. Name of the dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.exportData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+dataset}:exportData', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.examples = {};

    /**
     * Lists sentence pairs in the dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression for filtering the examples that will be returned. Example filter: * `usage=TRAIN`
     * @param {integer} apiParams.pageSize - Optional. Requested page size. The server can return fewer results than requested.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListExamples call.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.datasets.examples.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/examples', 'GET', apiParams, clientConfig);

    this.projects.locations.adaptiveMtDatasets = {};

    /**
     * Creates an Adaptive MT dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.adaptiveMtDatasets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/adaptiveMtDatasets', 'POST', apiParams, clientConfig);

    /**
     * Deletes an Adaptive MT dataset, including all its entries and associated metadata.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the dataset. In the form of `projects/{project-number-or-id}/locations/{location-id}/adaptiveMtDatasets/{adaptive-mt-dataset-id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.adaptiveMtDatasets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the Adaptive MT dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the dataset. In the form of `projects/{project-number-or-id}/locations/{location-id}/adaptiveMtDatasets/{adaptive-mt-dataset-id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.adaptiveMtDatasets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all Adaptive MT datasets for which the caller has read permission.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression for filtering the results of the request. Filter is not supported yet.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. The server may return fewer results than requested. If unspecified, the server picks an appropriate default.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtDatasetsResponse.next_page_token returned from the previous call to `ListAdaptiveMtDatasets` method. The first page is returned if `page_token`is empty or missing.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the project from which to list the Adaptive MT datasets. `projects/{project-number-or-id}/locations/{location-id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.adaptiveMtDatasets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/adaptiveMtDatasets', 'GET', apiParams, clientConfig);

    /**
     * Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.adaptiveMtDatasets.importAdaptiveMtFile = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}:importAdaptiveMtFile', 'POST', apiParams, clientConfig);

    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles = {};

    /**
     * Gets and AdaptiveMtFile
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes an AdaptiveMtFile along with its sentences.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the file to delete, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtFilesResponse.next_page_token returned from the previous call to `ListAdaptiveMtFiles` method. The first page is returned if `page_token`is empty or missing.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the project from which to list the Adaptive MT files. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/adaptiveMtFiles', 'GET', apiParams, clientConfig);

    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences = {};

    /**
     * Lists all AdaptiveMtSentences under a given file/dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to `ListTranslationMemories` method. The first page is returned if `page_token` is empty or missing.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the project from which to list the Adaptive MT files. The following format lists all sentences under a file. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` The following format lists all sentences within a dataset. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/adaptiveMtSentences', 'GET', apiParams, clientConfig);

    this.projects.locations.adaptiveMtDatasets.adaptiveMtSentences = {};

    /**
     * Lists all AdaptiveMtSentences under a given file/dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to `ListTranslationMemories` method. The first page is returned if `page_token` is empty or missing.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the project from which to list the Adaptive MT files. The following format lists all sentences under a file. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` The following format lists all sentences within a dataset. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.adaptiveMtDatasets.adaptiveMtSentences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/adaptiveMtSentences', 'GET', apiParams, clientConfig);

    this.projects.locations.models = {};

    /**
     * Creates a Model.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project name, in form of `projects/{project}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.models.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/models', 'POST', apiParams, clientConfig);

    /**
     * Lists models.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression for filtering the models that will be returned. Supported filter: `dataset_id=${dataset_id}`
     * @param {integer} apiParams.pageSize - Optional. Requested page size. The server can return fewer results than requested.
     * @param {string} apiParams.pageToken - Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListModels call.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.models.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/models', 'GET', apiParams, clientConfig);

    /**
     * Gets a model.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the model to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.models.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a model.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the model to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.models.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);
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
