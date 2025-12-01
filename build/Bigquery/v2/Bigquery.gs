
/**
 * Google Apps Script client library for the BigQuery API
 * Documentation URL: https://cloud.google.com/bigquery/
 * @class
 */
class Bigquery {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://bigquery.googleapis.com/';
    this._servicePath = 'bigquery/v2/';


    this.datasets = {};
    this.datasets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}', 'PATCH', apiParams, clientConfig);
    this.datasets.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets', 'POST', apiParams, clientConfig);
    this.datasets.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}', 'PUT', apiParams, clientConfig);
    this.datasets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets', 'GET', apiParams, clientConfig);
    this.datasets.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}:undelete', 'POST', apiParams, clientConfig);
    this.datasets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}', 'GET', apiParams, clientConfig);
    this.datasets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}', 'DELETE', apiParams, clientConfig);

    this.projects = {};
    this.projects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects', 'GET', apiParams, clientConfig);
    this.projects.getServiceAccount = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/serviceAccount', 'GET', apiParams, clientConfig);

    this.routines = {};
    this.routines.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}', 'PUT', apiParams, clientConfig);
    this.routines.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.routines.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines', 'GET', apiParams, clientConfig);
    this.routines.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}', 'DELETE', apiParams, clientConfig);
    this.routines.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}', 'GET', apiParams, clientConfig);
    this.routines.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/routines', 'POST', apiParams, clientConfig);
    this.routines.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.routines.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    this.rowAccessPolicies = {};
    this.rowAccessPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies', 'GET', apiParams, clientConfig);
    this.rowAccessPolicies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.rowAccessPolicies.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies:batchDelete', 'POST', apiParams, clientConfig);
    this.rowAccessPolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies', 'POST', apiParams, clientConfig);
    this.rowAccessPolicies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies/{+policyId}', 'PUT', apiParams, clientConfig);
    this.rowAccessPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.rowAccessPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies/{+policyId}', 'DELETE', apiParams, clientConfig);
    this.rowAccessPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies/{+policyId}', 'GET', apiParams, clientConfig);

    this.tables = {};
    this.tables.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}', 'PATCH', apiParams, clientConfig);
    this.tables.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}', 'GET', apiParams, clientConfig);
    this.tables.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.tables.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.tables.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables', 'GET', apiParams, clientConfig);
    this.tables.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}', 'PUT', apiParams, clientConfig);
    this.tables.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.tables.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}', 'DELETE', apiParams, clientConfig);
    this.tables.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables', 'POST', apiParams, clientConfig);

    this.tabledata = {};
    this.tabledata.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/data', 'GET', apiParams, clientConfig);
    this.tabledata.insertAll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/insertAll', 'POST', apiParams, clientConfig);

    this.models = {};
    this.models.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}', 'GET', apiParams, clientConfig);
    this.models.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}', 'PATCH', apiParams, clientConfig);
    this.models.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/models', 'GET', apiParams, clientConfig);
    this.models.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}', 'DELETE', apiParams, clientConfig);

    this.jobs = {};
    this.jobs.getQueryResults = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/queries/{+jobId}', 'GET', apiParams, clientConfig);
    this.jobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/jobs', 'GET', apiParams, clientConfig);
    this.jobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/jobs/{+jobId}/delete', 'DELETE', apiParams, clientConfig);
    this.jobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/jobs/{+jobId}', 'GET', apiParams, clientConfig);
    this.jobs.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/bigquery/v2/projects/{+projectId}/jobs' : 'projects/{+projectId}/jobs';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.jobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/jobs/{+jobId}/cancel', 'POST', apiParams, clientConfig);
    this.jobs.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{+projectId}/queries', 'POST', apiParams, clientConfig);
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
