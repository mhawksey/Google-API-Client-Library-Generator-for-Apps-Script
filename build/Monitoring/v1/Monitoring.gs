
/**
 * Google Apps Script client library for the Cloud Monitoring API
 * Documentation URL: https://cloud.google.com/monitoring/api/
 * @class
 */
class Monitoring {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://monitoring.googleapis.com/';
    this._servicePath = '';


    this.operations = {};
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects = {};

    this.projects.dashboards = {};
    this.projects.dashboards.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dashboards', 'POST', apiParams, clientConfig);
    this.projects.dashboards.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dashboards', 'GET', apiParams, clientConfig);
    this.projects.dashboards.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.dashboards.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.dashboards.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.location = {};

    this.projects.location.prometheus = {};

    this.projects.location.prometheus.api = {};

    this.projects.location.prometheus.api.v1 = {};
    this.projects.location.prometheus.api.v1.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/query', 'POST', apiParams, clientConfig);
    this.projects.location.prometheus.api.v1.query_range = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/query_range', 'POST', apiParams, clientConfig);
    this.projects.location.prometheus.api.v1.labels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/labels', 'POST', apiParams, clientConfig);
    this.projects.location.prometheus.api.v1.series = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/series', 'POST', apiParams, clientConfig);
    this.projects.location.prometheus.api.v1.query_exemplars = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/query_exemplars', 'POST', apiParams, clientConfig);

    this.projects.location.prometheus.api.v1.label = {};
    this.projects.location.prometheus.api.v1.label.values = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/label/{label}/values', 'GET', apiParams, clientConfig);

    this.projects.location.prometheus.api.v1.metadata = {};
    this.projects.location.prometheus.api.v1.metadata.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/metadata', 'GET', apiParams, clientConfig);

    this.locations = {};

    this.locations.global = {};

    this.locations.global.metricsScopes = {};
    this.locations.global.metricsScopes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.locations.global.metricsScopes.listMetricsScopesByMonitoredProject = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/locations/global/metricsScopes:listMetricsScopesByMonitoredProject', 'GET', apiParams, clientConfig);

    this.locations.global.metricsScopes.projects = {};
    this.locations.global.metricsScopes.projects.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/projects', 'POST', apiParams, clientConfig);
    this.locations.global.metricsScopes.projects.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
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
