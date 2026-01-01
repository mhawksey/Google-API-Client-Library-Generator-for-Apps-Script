
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


    this.folders = {};

    this.folders.timeSeries = {};
    this.folders.timeSeries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/timeSeries', 'GET', apiParams, clientConfig);

    this.uptimeCheckIps = {};
    this.uptimeCheckIps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/uptimeCheckIps', 'GET', apiParams, clientConfig);

    this.services = {};
    this.services.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);
    this.services.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.services.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);
    this.services.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/services', 'GET', apiParams, clientConfig);
    this.services.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/services', 'POST', apiParams, clientConfig);

    this.services.serviceLevelObjectives = {};
    this.services.serviceLevelObjectives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/serviceLevelObjectives', 'GET', apiParams, clientConfig);
    this.services.serviceLevelObjectives.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);
    this.services.serviceLevelObjectives.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);
    this.services.serviceLevelObjectives.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.services.serviceLevelObjectives.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/serviceLevelObjectives', 'POST', apiParams, clientConfig);

    this.organizations = {};

    this.organizations.timeSeries = {};
    this.organizations.timeSeries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/timeSeries', 'GET', apiParams, clientConfig);

    this.projects = {};

    this.projects.metricDescriptors = {};
    this.projects.metricDescriptors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/metricDescriptors', 'GET', apiParams, clientConfig);
    this.projects.metricDescriptors.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/metricDescriptors', 'POST', apiParams, clientConfig);
    this.projects.metricDescriptors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.projects.metricDescriptors.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.collectdTimeSeries = {};
    this.projects.collectdTimeSeries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/collectdTimeSeries', 'POST', apiParams, clientConfig);

    this.projects.alerts = {};
    this.projects.alerts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.projects.alerts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/alerts', 'GET', apiParams, clientConfig);

    this.projects.snoozes = {};
    this.projects.snoozes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.projects.snoozes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/snoozes', 'GET', apiParams, clientConfig);
    this.projects.snoozes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.snoozes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/snoozes', 'POST', apiParams, clientConfig);

    this.projects.notificationChannels = {};
    this.projects.notificationChannels.getVerificationCode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:getVerificationCode', 'POST', apiParams, clientConfig);
    this.projects.notificationChannels.verify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:verify', 'POST', apiParams, clientConfig);
    this.projects.notificationChannels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/notificationChannels', 'POST', apiParams, clientConfig);
    this.projects.notificationChannels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/notificationChannels', 'GET', apiParams, clientConfig);
    this.projects.notificationChannels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.notificationChannels.sendVerificationCode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:sendVerificationCode', 'POST', apiParams, clientConfig);
    this.projects.notificationChannels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.projects.notificationChannels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.notificationChannelDescriptors = {};
    this.projects.notificationChannelDescriptors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/notificationChannelDescriptors', 'GET', apiParams, clientConfig);
    this.projects.notificationChannelDescriptors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    this.projects.timeSeries = {};
    this.projects.timeSeries.createService = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/timeSeries:createService', 'POST', apiParams, clientConfig);
    this.projects.timeSeries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/timeSeries', 'POST', apiParams, clientConfig);
    this.projects.timeSeries.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/timeSeries:query', 'POST', apiParams, clientConfig);
    this.projects.timeSeries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/timeSeries', 'GET', apiParams, clientConfig);

    this.projects.groups = {};
    this.projects.groups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.projects.groups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/groups', 'POST', apiParams, clientConfig);
    this.projects.groups.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.groups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.groups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/groups', 'GET', apiParams, clientConfig);

    this.projects.groups.members = {};
    this.projects.groups.members.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/members', 'GET', apiParams, clientConfig);

    this.projects.monitoredResourceDescriptors = {};
    this.projects.monitoredResourceDescriptors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/monitoredResourceDescriptors', 'GET', apiParams, clientConfig);
    this.projects.monitoredResourceDescriptors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    this.projects.alertPolicies = {};
    this.projects.alertPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.alertPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.alertPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/alertPolicies', 'POST', apiParams, clientConfig);
    this.projects.alertPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/alertPolicies', 'GET', apiParams, clientConfig);
    this.projects.alertPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    this.projects.uptimeCheckConfigs = {};
    this.projects.uptimeCheckConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.projects.uptimeCheckConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/uptimeCheckConfigs', 'GET', apiParams, clientConfig);
    this.projects.uptimeCheckConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.uptimeCheckConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/uptimeCheckConfigs', 'POST', apiParams, clientConfig);
    this.projects.uptimeCheckConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);
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
