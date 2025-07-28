
/**
 * Google Apps Script client library for the Cloud Document AI API
 * Documentation URL: https://cloud.google.com/document-ai/docs/
 * @class
 */
class Documentai {
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
    this._rootUrl = 'https://documentai.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations = {};

    /**
     * Fetches processor types. Note that we don't use ListProcessorTypes here, because it isn't paginated.
     * @param {string} params.parent - (Required) Required. The location of processor types to list. Format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.fetchProcessorTypes = (params) => this._makeRequest('v1/{+parent}:fetchProcessorTypes', 'GET', params);

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.processors = {};

    /**
     * Processes a single document.
     * @param {string} params.name - (Required) Required. The resource name of the Processor or ProcessorVersion to use for processing. If a Processor is specified, the server will use its default version. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.process = (params) => this._makeRequest('v1/{+name}:process', 'POST', params);

    /**
     * LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
     * @param {string} params.name - (Required) Required. The resource name of Processor or ProcessorVersion. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.batchProcess = (params) => this._makeRequest('v1/{+name}:batchProcess', 'POST', params);

    /**
     * Lists all processors which belong to this project.
     * @param {integer} params.pageSize - The maximum number of processors to return. If unspecified, at most `50` processors will be returned. The maximum value is `100`. Values above `100` will be coerced to `100`.
     * @param {string} params.pageToken - We will return the processors sorted by creation time. The page token will point to the next processor.
     * @param {string} params.parent - (Required) Required. The parent (project and location) which owns this collection of Processors. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.processors.list = (params) => this._makeRequest('v1/{+parent}/processors', 'GET', params);

    /**
     * Gets a processor detail.
     * @param {string} params.name - (Required) Required. The processor resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a processor from the ProcessorType provided. The processor will be at `ENABLED` state by default after its creation. Note that this method requires the `documentai.processors.create` permission on the project, which is highly privileged. A user or service account with this permission can create new processors that can interact with any gcs bucket in your project.
     * @param {string} params.parent - (Required) Required. The parent (project and location) under which to create the processor. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.create = (params) => this._makeRequest('v1/{+parent}/processors', 'POST', params);

    /**
     * Deletes the processor, unloads all deployed model artifacts if it was enabled and then deletes all artifacts associated with this processor.
     * @param {string} params.name - (Required) Required. The processor resource name to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Enables a processor
     * @param {string} params.name - (Required) Required. The processor resource name to be enabled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.enable = (params) => this._makeRequest('v1/{+name}:enable', 'POST', params);

    /**
     * Disables a processor
     * @param {string} params.name - (Required) Required. The processor resource name to be disabled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.disable = (params) => this._makeRequest('v1/{+name}:disable', 'POST', params);

    /**
     * Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
     * @param {string} params.processor - (Required) Required. The resource name of the Processor to change default version.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.setDefaultProcessorVersion = (params) => this._makeRequest('v1/{+processor}:setDefaultProcessorVersion', 'POST', params);

    this.projects.locations.processors.processorVersions = {};

    /**
     * Processes a single document.
     * @param {string} params.name - (Required) Required. The resource name of the Processor or ProcessorVersion to use for processing. If a Processor is specified, the server will use its default version. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.processorVersions.process = (params) => this._makeRequest('v1/{+name}:process', 'POST', params);

    /**
     * LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
     * @param {string} params.name - (Required) Required. The resource name of Processor or ProcessorVersion. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.processorVersions.batchProcess = (params) => this._makeRequest('v1/{+name}:batchProcess', 'POST', params);

    /**
     * Trains a new processor version. Operation metadata is returned as TrainProcessorVersionMetadata.
     * @param {string} params.parent - (Required) Required. The parent (project, location and processor) to create the new version for. Format: `projects/{project}/locations/{location}/processors/{processor}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.processorVersions.train = (params) => this._makeRequest('v1/{+parent}/processorVersions:train', 'POST', params);

    /**
     * Gets a processor version detail.
     * @param {string} params.name - (Required) Required. The processor resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.processorVersions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all versions of a processor.
     * @param {integer} params.pageSize - The maximum number of processor versions to return. If unspecified, at most `10` processor versions will be returned. The maximum value is `20`. Values above `20` will be coerced to `20`.
     * @param {string} params.pageToken - We will return the processor versions sorted by creation time. The page token will point to the next processor version.
     * @param {string} params.parent - (Required) Required. The parent (project, location and processor) to list all versions. Format: `projects/{project}/locations/{location}/processors/{processor}`
     * @return {object} The API response object.
     */
    this.projects.locations.processors.processorVersions.list = (params) => this._makeRequest('v1/{+parent}/processorVersions', 'GET', params);

    /**
     * Deletes the processor version, all artifacts under the processor version will be deleted.
     * @param {string} params.name - (Required) Required. The processor version resource name to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.processorVersions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Deploys the processor version.
     * @param {string} params.name - (Required) Required. The processor version resource name to be deployed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.processorVersions.deploy = (params) => this._makeRequest('v1/{+name}:deploy', 'POST', params);

    /**
     * Undeploys the processor version.
     * @param {string} params.name - (Required) Required. The processor version resource name to be undeployed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.processorVersions.undeploy = (params) => this._makeRequest('v1/{+name}:undeploy', 'POST', params);

    /**
     * Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.
     * @param {string} params.processorVersion - (Required) Required. The resource name of the ProcessorVersion to evaluate. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.processorVersions.evaluateProcessorVersion = (params) => this._makeRequest('v1/{+processorVersion}:evaluateProcessorVersion', 'POST', params);

    this.projects.locations.processors.processorVersions.evaluations = {};

    /**
     * Retrieves a specific evaluation.
     * @param {string} params.name - (Required) Required. The resource name of the Evaluation to get. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}/evaluations/{evaluation}`
     * @return {object} The API response object.
     */
    this.projects.locations.processors.processorVersions.evaluations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Retrieves a set of evaluations for a given processor version.
     * @param {integer} params.pageSize - The standard list page size. If unspecified, at most `5` evaluations are returned. The maximum value is `100`. Values above `100` are coerced to `100`.
     * @param {string} params.pageToken - A page token, received from a previous `ListEvaluations` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The resource name of the ProcessorVersion to list evaluations for. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
     * @return {object} The API response object.
     */
    this.projects.locations.processors.processorVersions.evaluations.list = (params) => this._makeRequest('v1/{+parent}/evaluations', 'GET', params);

    this.projects.locations.processors.humanReviewConfig = {};

    /**
     * Send a document for Human Review. The input document should be processed by the specified processor.
     * @param {string} params.humanReviewConfig - (Required) Required. The resource name of the HumanReviewConfig that the document will be reviewed with.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processors.humanReviewConfig.reviewDocument = (params) => this._makeRequest('v1/{+humanReviewConfig}:reviewDocument', 'POST', params);

    this.projects.locations.processorTypes = {};

    /**
     * Lists the processor types that exist.
     * @param {integer} params.pageSize - The maximum number of processor types to return. If unspecified, at most `100` processor types will be returned. The maximum value is `500`. Values above `500` will be coerced to `500`.
     * @param {string} params.pageToken - Used to retrieve the next page of results, empty if at the end of the list.
     * @param {string} params.parent - (Required) Required. The location of processor types to list. Format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.processorTypes.list = (params) => this._makeRequest('v1/{+parent}/processorTypes', 'GET', params);

    /**
     * Gets a processor type detail.
     * @param {string} params.name - (Required) Required. The processor type resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.processorTypes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.operations = {};

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
