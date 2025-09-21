
/**
 * Google Apps Script client library for the Data Lineage API
 * Documentation URL: https://cloud.google.com/data-catalog
 * @class
 */
class Datalineage {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://datalineage.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    /**
     * Creates new lineage events together with their parents: process and run. Updates the process and run if they already exist. Mapped from Open Lineage specification: https://github.com/OpenLineage/OpenLineage/blob/main/spec/OpenLineage.json.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the project and its location that should own the process, run, and lineage event.
     * @param {string} apiParams.requestId - Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processOpenLineageRunEvent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:processOpenLineageRunEvent', 'POST', apiParams, clientConfig);

    /**
     * Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project and location you want search in.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.searchLinks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:searchLinks', 'POST', apiParams, clientConfig);

    /**
     * Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project and location where you want to search.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.batchSearchLinkProcesses = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:batchSearchLinkProcesses', 'POST', apiParams, clientConfig);

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
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.processes = {};

    /**
     * Creates a new process.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the project and its location that should own the process.
     * @param {string} apiParams.requestId - Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/processes', 'POST', apiParams, clientConfig);

    /**
     * Updates a process.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - If set to true and the process is not found, the request inserts it.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the lineage process. Format: `projects/{project}/locations/{location}/processes/{process}`. Can be specified or auto-assigned. {process} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
     * @param {string} apiParams.requestId - Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     * @param {string} apiParams.updateMask - The list of fields to update. Currently not used. The whole message is updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Gets the details of the specified process.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the process to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List processes in the given project and location. List order is descending by insertion time.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of processes to return. The service may return fewer than this value. If unspecified, at most 50 processes are returned. The maximum value is 100; values greater than 100 are cut to 100.
     * @param {string} apiParams.pageToken - The page token received from a previous `ListProcesses` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The name of the project and its location that owns this collection of processes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/processes', 'GET', apiParams, clientConfig);

    /**
     * Deletes the process with the specified name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - If set to true and the process is not found, the request succeeds but the server doesn't perform any actions.
     * @param {string} apiParams.name - (Required) Required. The name of the process to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.processes.runs = {};

    /**
     * Creates a new run.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the process that should own the run.
     * @param {string} apiParams.requestId - Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processes.runs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/runs', 'POST', apiParams, clientConfig);

    /**
     * Updates a run.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - If set to true and the run is not found, the request creates it.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
     * @param {string} apiParams.updateMask - The list of fields to update. Currently not used. The whole message is updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processes.runs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Gets the details of the specified run.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the run to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processes.runs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists runs in the given project and location. List order is descending by `start_time`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of runs to return. The service may return fewer than this value. If unspecified, at most 50 runs are returned. The maximum value is 100; values greater than 100 are cut to 100.
     * @param {string} apiParams.pageToken - The page token received from a previous `ListRuns` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The name of process that owns this collection of runs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processes.runs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/runs', 'GET', apiParams, clientConfig);

    /**
     * Deletes the run with the specified name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - If set to true and the run is not found, the request succeeds but the server doesn't perform any actions.
     * @param {string} apiParams.name - (Required) Required. The name of the run to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processes.runs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.processes.runs.lineageEvents = {};

    /**
     * Creates a new lineage event.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the run that should own the lineage event.
     * @param {string} apiParams.requestId - Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processes.runs.lineageEvents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/lineageEvents', 'POST', apiParams, clientConfig);

    /**
     * Gets details of a specified lineage event.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the lineage event to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processes.runs.lineageEvents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists lineage events in the given project and location. The list order is not defined.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of lineage events to return. The service may return fewer events than this value. If unspecified, at most 50 events are returned. The maximum value is 100; values greater than 100 are cut to 100.
     * @param {string} apiParams.pageToken - The page token received from a previous `ListLineageEvents` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The name of the run that owns the collection of lineage events to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processes.runs.lineageEvents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/lineageEvents', 'GET', apiParams, clientConfig);

    /**
     * Deletes the lineage event with the specified name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - If set to true and the lineage event is not found, the request succeeds but the server doesn't perform any actions.
     * @param {string} apiParams.name - (Required) Required. The name of the lineage event to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.processes.runs.lineageEvents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
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
