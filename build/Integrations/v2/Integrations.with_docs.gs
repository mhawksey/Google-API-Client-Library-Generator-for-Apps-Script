
/**
 * Google Apps Script client library for the Application Integration API
 * Documentation URL: https://cloud.google.com/application-integration
 * Generator: https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/
 * @class
 */
class Integrations {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://integrations.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    /**
     * Generates an integration skeleton based on a natural language prompt.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The location in which the integration will be generated. Format: `projects/{project}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.generateIntegration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}:generateIntegration', 'POST', apiParams, clientConfig);

    this.projects.locations.integrations = {};

    /**
     * Recommends tasks to replace a selected task.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Format: `projects/{project}/locations/{location}/integrations/{integration}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.recommendTasks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}:recommendTasks', 'POST', apiParams, clientConfig);

    /**
     * Schedules an integration for execution.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The integration resource name.
     * @param {string} apiParams.requestId - Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned.
     * @param {string} apiParams.scheduleTime - Optional. The time that the integration should be executed. If the time is less or equal to the current time, the integration is executed immediately.
     * @param {string} apiParams.triggerId - Required. The API trigger id associated with the integration. An integration can have multiple trigger_id. This field is required to disambiguate which trigger should be invoked
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.schedule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}:schedule', 'POST', apiParams, clientConfig);

    /**
     * Generates an integration branch.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Format: `projects/{project}/locations/{location}/integrations/{integration}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.generateIntegrationBranch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}:generateIntegrationBranch', 'POST', apiParams, clientConfig);

    /**
     * Generates Javascript code for data mapping.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Format: `projects/{project}/locations/{location}/integrations/{integration}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.generateJavascript = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}:generateJavascript', 'POST', apiParams, clientConfig);

    /**
     * Executes integrations synchronously. The response is not returned until the requested execution is either fulfilled or experienced an error. Only one integration can be executed. Request format URL: https://integrations.googleapis.com/v2/projects/$PROJECT/locations/$LOCATION/integrations/$INTEGRATION_NAME:execute Request payload: (the entire payload is optional unless input variables need to be set.) {"variable1": "hello world", "variable2": 1, "variable3": {"my_json_key": "my json string value" }
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The integration resource name.
     * @param {string} apiParams.requestId - Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned.
     * @param {string} apiParams.triggerId - Required. The API trigger id associated with the integration. An integration can have multiple trigger_id. This field is required to disambiguate which trigger should be invoked.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.execute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}:execute', 'POST', apiParams, clientConfig);

    /**
     * Generates documentation for an integration version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Format: `projects/{project}/locations/{location}/integrations/{integration}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.generateIntegrationDocument = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}:generateIntegrationDocument', 'POST', apiParams, clientConfig);

    this.projects.locations.integrations.executions = {};

    /**
     * Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Standard filter field, we support filtering on following fields: integration_name: the name of the integration. create_time: the execution created time. update_time: the execution last update time. state: the state of the executions. execution_id: the id of the execution. trigger_id: the id of the trigger. All fields support for EQUALS, in additional: create_time and update_time support for LESS_THAN, GREATER_THAN Also supports operators like AND, OR, NOT For example: trigger_id=\"id1\" AND integration_name=\"testIntegration\"
     * @param {integer} apiParams.pageSize - Optional. The size of entries in the response.
     * @param {string} apiParams.pageToken - Optional. The token returned in the previous response.
     * @param {string} apiParams.parent - (Required) Required. parent resource name of integration execution.
     * @param {string} apiParams.readMask - Optional. View mask for the response data. If set, only the field specified will be returned as part of the result. If not set, all fields in execution info will be filled and returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.executions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/executions', 'GET', apiParams, clientConfig);

    /**
     * View detailed explanation of why an integration execution failed, using LLM
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Execution resource name. Format: `projects/{project}/locations/{location}/integrations/{integration}/executions/{execution_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.executions.troubleshoot = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:troubleshoot', 'GET', apiParams, clientConfig);

    this.projects.locations.integrations.executions.taskExecutions = {};

    /**
     * Get a TaskExecution in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The TaskExecution to retrieve. Format: projects/{project}/locations/{location}/integrations/{integration}/executions/{execution}/taskExecutions/{task_execution}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.integrations.executions.taskExecutions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
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
