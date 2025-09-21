
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://documentai.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    /**
     * Fetches processor types. Note that we don't use ListProcessorTypes here, because it isn't paginated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The location of processor types to list. Format: `projects/{project}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.fetchProcessorTypes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+parent}:fetchProcessorTypes', 'GET', apiParams, clientConfig);

    /**
     * Lists information about the supported locations for this service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} apiParams.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}/locations', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name for the location.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}', 'GET', apiParams, clientConfig);

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
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.processors = {};

    /**
     * Processes a single document.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the Processor or ProcessorVersion to use for processing. If a Processor is specified, the server will use its default version. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.process = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}:process', 'POST', apiParams, clientConfig);

    /**
     * LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of Processor or ProcessorVersion. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.batchProcess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}:batchProcess', 'POST', apiParams, clientConfig);

    /**
     * Lists all processors which belong to this project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of processors to return. If unspecified, at most `50` processors will be returned. The maximum value is `100`. Values above `100` will be coerced to `100`.
     * @param {string} apiParams.pageToken - We will return the processors sorted by creation time. The page token will point to the next processor.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) which owns this collection of Processors. Format: `projects/{project}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+parent}/processors', 'GET', apiParams, clientConfig);

    /**
     * Gets a processor detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The processor resource name.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a processor from the ProcessorType provided. The processor will be at `ENABLED` state by default after its creation. Note that this method requires the `documentai.processors.create` permission on the project, which is highly privileged. A user or service account with this permission can create new processors that can interact with any gcs bucket in your project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent (project and location) under which to create the processor. Format: `projects/{project}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+parent}/processors', 'POST', apiParams, clientConfig);

    /**
     * Deletes the processor, unloads all deployed model artifacts if it was enabled and then deletes all artifacts associated with this processor.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The processor resource name to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Enables a processor
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The processor resource name to be enabled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.enable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}:enable', 'POST', apiParams, clientConfig);

    /**
     * Disables a processor
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The processor resource name to be disabled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}:disable', 'POST', apiParams, clientConfig);

    /**
     * Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.processor - (Required) Required. The resource name of the Processor to change default version.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.setDefaultProcessorVersion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+processor}:setDefaultProcessorVersion', 'POST', apiParams, clientConfig);

    /**
     * Updates metadata associated with a dataset. Note that this method requires the `documentai.googleapis.com/datasets.update` permission on the project, which is highly privileged. A user or service account with this permission can create new processors that can interact with any gcs bucket in your project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Dataset resource name. Format: `projects/{project}/locations/{location}/processors/{processor}/dataset`
     * @param {string} apiParams.updateMask - The update mask applies to the resource.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.updateDataset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.processors.processorVersions = {};

    /**
     * Processes a single document.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the Processor or ProcessorVersion to use for processing. If a Processor is specified, the server will use its default version. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.processorVersions.process = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}:process', 'POST', apiParams, clientConfig);

    /**
     * LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of Processor or ProcessorVersion. Format: `projects/{project}/locations/{location}/processors/{processor}`, or `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.processorVersions.batchProcess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}:batchProcess', 'POST', apiParams, clientConfig);

    /**
     * Trains a new processor version. Operation metadata is returned as TrainProcessorVersionMetadata.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent (project, location and processor) to create the new version for. Format: `projects/{project}/locations/{location}/processors/{processor}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.processorVersions.train = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+parent}/processorVersions:train', 'POST', apiParams, clientConfig);

    /**
     * Gets a processor version detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The processor resource name.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.processorVersions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all versions of a processor.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of processor versions to return. If unspecified, at most `10` processor versions will be returned. The maximum value is `20`. Values above `20` will be coerced to `20`.
     * @param {string} apiParams.pageToken - We will return the processor versions sorted by creation time. The page token will point to the next processor version.
     * @param {string} apiParams.parent - (Required) Required. The parent (project, location and processor) to list all versions. Format: `projects/{project}/locations/{location}/processors/{processor}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.processorVersions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+parent}/processorVersions', 'GET', apiParams, clientConfig);

    /**
     * Deletes the processor version, all artifacts under the processor version will be deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The processor version resource name to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.processorVersions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Deploys the processor version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The processor version resource name to be deployed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.processorVersions.deploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}:deploy', 'POST', apiParams, clientConfig);

    /**
     * Undeploys the processor version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The processor version resource name to be undeployed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.processorVersions.undeploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}:undeploy', 'POST', apiParams, clientConfig);

    /**
     * Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.processorVersion - (Required) Required. The resource name of the ProcessorVersion to evaluate. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.processorVersions.evaluateProcessorVersion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+processorVersion}:evaluateProcessorVersion', 'POST', apiParams, clientConfig);

    /**
     * Imports a processor version from source processor version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The destination processor name to create the processor version in. Format: `projects/{project}/locations/{location}/processors/{processor}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.processorVersions.importProcessorVersion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+parent}/processorVersions:importProcessorVersion', 'POST', apiParams, clientConfig);

    this.projects.locations.processors.processorVersions.evaluations = {};

    /**
     * Retrieves a specific evaluation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the Evaluation to get. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}/evaluations/{evaluation}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.processorVersions.evaluations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a set of evaluations for a given processor version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The standard list page size. If unspecified, at most `5` evaluations are returned. The maximum value is `100`. Values above `100` are coerced to `100`.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListEvaluations` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the ProcessorVersion to list evaluations for. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.processorVersions.evaluations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+parent}/evaluations', 'GET', apiParams, clientConfig);

    this.projects.locations.processors.humanReviewConfig = {};

    /**
     * Send a document for Human Review. The input document should be processed by the specified processor.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.humanReviewConfig - (Required) Required. The resource name of the HumanReviewConfig that the document will be reviewed with.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.humanReviewConfig.reviewDocument = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+humanReviewConfig}:reviewDocument', 'POST', apiParams, clientConfig);

    this.projects.locations.processors.dataset = {};

    /**
     * Import documents into a dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dataset - (Required) Required. The dataset resource name. Format: projects/{project}/locations/{location}/processors/{processor}/dataset
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.dataset.importDocuments = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+dataset}:importDocuments', 'POST', apiParams, clientConfig);

    /**
     * Returns relevant fields present in the requested document.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dataset - (Required) Required. The resource name of the dataset that the document belongs to . Format: projects/{project}/locations/{location}/processors/{processor}/dataset
     * @param {string} apiParams.documentId.gcsManagedDocId.cwDocId - Id of the document (indexed) managed by Content Warehouse.
     * @param {string} apiParams.documentId.gcsManagedDocId.gcsUri - Required. The Cloud Storage URI where the actual document is stored.
     * @param {string} apiParams.documentId.revisionRef.latestProcessorVersion - Reads the revision generated by the processor version. The format takes the full resource name of processor version. `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
     * @param {string} apiParams.documentId.revisionRef.revisionCase - Reads the revision by the predefined case.
     * @param {string} apiParams.documentId.revisionRef.revisionId - Reads the revision given by the id.
     * @param {string} apiParams.documentId.unmanagedDocId.docId - Required. The id of the document.
     * @param {integer} apiParams.pageRange.end - Last page number (one-based index) to be returned.
     * @param {integer} apiParams.pageRange.start - First page number (one-based index) to be returned.
     * @param {string} apiParams.readMask - If set, only fields listed here will be returned. Otherwise, all fields will be returned by default.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.dataset.getDocument = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+dataset}:getDocument', 'GET', apiParams, clientConfig);

    /**
     * Returns a list of documents present in the dataset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dataset - (Required) Required. The resource name of the dataset to be listed. Format: projects/{project}/locations/{location}/processors/{processor}/dataset
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.dataset.listDocuments = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+dataset}:listDocuments', 'POST', apiParams, clientConfig);

    /**
     * Deletes a set of documents.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dataset - (Required) Required. The dataset resource name. Format: projects/{project}/locations/{location}/processors/{processor}/dataset
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.dataset.batchDeleteDocuments = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+dataset}:batchDeleteDocuments', 'POST', apiParams, clientConfig);

    /**
     * Gets the `DatasetSchema` of a `Dataset`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The dataset schema resource name. Format: projects/{project}/locations/{location}/processors/{processor}/dataset/datasetSchema
     * @param {boolean} apiParams.visibleFieldsOnly - If set, only returns the visible fields of the schema.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.dataset.getDatasetSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a `DatasetSchema`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Dataset schema resource name. Format: `projects/{project}/locations/{location}/processors/{processor}/dataset/datasetSchema`
     * @param {string} apiParams.updateMask - The update mask applies to the resource.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processors.dataset.updateDatasetSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.processorTypes = {};

    /**
     * Lists the processor types that exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of processor types to return. If unspecified, at most `100` processor types will be returned. The maximum value is `500`. Values above `500` will be coerced to `500`.
     * @param {string} apiParams.pageToken - Used to retrieve the next page of results, empty if at the end of the list.
     * @param {string} apiParams.parent - (Required) Required. The location of processor types to list. Format: `projects/{project}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processorTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+parent}/processorTypes', 'GET', apiParams, clientConfig);

    /**
     * Gets a processor type detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The processor type resource name.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processorTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta3/{+name}', 'GET', apiParams, clientConfig);
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
