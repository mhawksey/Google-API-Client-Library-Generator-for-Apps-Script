
/**
 * Google Apps Script client library for the Dataflow API
 * Documentation URL: https://cloud.google.com/dataflow
 * @class
 */
class Dataflow {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://dataflow.googleapis.com/';
    this._servicePath = '';


    this.projects = {};
    this.projects.deleteSnapshots = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/snapshots', 'DELETE', apiParams, clientConfig);
    this.projects.workerMessages = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/WorkerMessages', 'POST', apiParams, clientConfig);

    this.projects.jobs = {};
    this.projects.jobs.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}', 'PUT', apiParams, clientConfig);
    this.projects.jobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}', 'GET', apiParams, clientConfig);
    this.projects.jobs.getMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/metrics', 'GET', apiParams, clientConfig);
    this.projects.jobs.snapshot = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}:snapshot', 'POST', apiParams, clientConfig);
    this.projects.jobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs', 'POST', apiParams, clientConfig);
    this.projects.jobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs', 'GET', apiParams, clientConfig);
    this.projects.jobs.aggregated = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs:aggregated', 'GET', apiParams, clientConfig);

    this.projects.jobs.workItems = {};
    this.projects.jobs.workItems.reportStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus', 'POST', apiParams, clientConfig);
    this.projects.jobs.workItems.lease = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease', 'POST', apiParams, clientConfig);

    this.projects.jobs.messages = {};
    this.projects.jobs.messages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/messages', 'GET', apiParams, clientConfig);

    this.projects.jobs.debug = {};
    this.projects.jobs.debug.sendCapture = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/debug/sendCapture', 'POST', apiParams, clientConfig);
    this.projects.jobs.debug.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/debug/getConfig', 'POST', apiParams, clientConfig);

    this.projects.locations = {};
    this.projects.locations.workerMessages = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/WorkerMessages', 'POST', apiParams, clientConfig);

    this.projects.locations.flexTemplates = {};
    this.projects.locations.flexTemplates.launch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/flexTemplates:launch', 'POST', apiParams, clientConfig);

    this.projects.locations.snapshots = {};
    this.projects.locations.snapshots.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.snapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/snapshots', 'GET', apiParams, clientConfig);
    this.projects.locations.snapshots.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}', 'GET', apiParams, clientConfig);

    this.projects.locations.templates = {};
    this.projects.locations.templates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/templates:get', 'GET', apiParams, clientConfig);
    this.projects.locations.templates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/templates', 'POST', apiParams, clientConfig);
    this.projects.locations.templates.launch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/templates:launch', 'POST', apiParams, clientConfig);

    this.projects.locations.jobs = {};
    this.projects.locations.jobs.snapshot = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}:snapshot', 'POST', apiParams, clientConfig);
    this.projects.locations.jobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}', 'GET', apiParams, clientConfig);
    this.projects.locations.jobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs', 'GET', apiParams, clientConfig);
    this.projects.locations.jobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs', 'POST', apiParams, clientConfig);
    this.projects.locations.jobs.getMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics', 'GET', apiParams, clientConfig);
    this.projects.locations.jobs.getExecutionDetails = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/executionDetails', 'GET', apiParams, clientConfig);
    this.projects.locations.jobs.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}', 'PUT', apiParams, clientConfig);

    this.projects.locations.jobs.messages = {};
    this.projects.locations.jobs.messages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages', 'GET', apiParams, clientConfig);

    this.projects.locations.jobs.workItems = {};
    this.projects.locations.jobs.workItems.lease = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:lease', 'POST', apiParams, clientConfig);
    this.projects.locations.jobs.workItems.reportStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:reportStatus', 'POST', apiParams, clientConfig);

    this.projects.locations.jobs.snapshots = {};
    this.projects.locations.jobs.snapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/snapshots', 'GET', apiParams, clientConfig);

    this.projects.locations.jobs.stages = {};
    this.projects.locations.jobs.stages.getExecutionDetails = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/stages/{stageId}/executionDetails', 'GET', apiParams, clientConfig);

    this.projects.locations.jobs.debug = {};
    this.projects.locations.jobs.debug.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getConfig', 'POST', apiParams, clientConfig);
    this.projects.locations.jobs.debug.getWorkerStacktraces = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getWorkerStacktraces', 'POST', apiParams, clientConfig);
    this.projects.locations.jobs.debug.sendCapture = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/sendCapture', 'POST', apiParams, clientConfig);

    this.projects.snapshots = {};
    this.projects.snapshots.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/snapshots/{snapshotId}', 'GET', apiParams, clientConfig);
    this.projects.snapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/snapshots', 'GET', apiParams, clientConfig);

    this.projects.templates = {};
    this.projects.templates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/templates:get', 'GET', apiParams, clientConfig);
    this.projects.templates.launch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/templates:launch', 'POST', apiParams, clientConfig);
    this.projects.templates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/templates', 'POST', apiParams, clientConfig);
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
