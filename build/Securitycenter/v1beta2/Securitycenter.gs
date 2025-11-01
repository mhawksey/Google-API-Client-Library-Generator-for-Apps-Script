
/**
 * Google Apps Script client library for the Security Command Center API
 * Documentation URL: https://cloud.google.com/security-command-center
 * @class
 */
class Securitycenter {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://securitycenter.googleapis.com/';
    this._servicePath = '';


    this.projects = {};
    this.projects.updateContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.getWebSecurityScannerSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.updateSecurityHealthAnalyticsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.updateRapidVulnerabilityDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.getEventThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.getRapidVulnerabilityDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.getSecurityHealthAnalyticsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.updateVirtualMachineThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.updateEventThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.getContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.updateWebSecurityScannerSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.getVirtualMachineThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.getSecurityCenterSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.eventThreatDetectionSettings = {};
    this.projects.eventThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.projects.locations = {};

    this.projects.locations.clusters = {};
    this.projects.locations.clusters.getContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.updateContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.clusters.containerThreatDetectionSettings = {};
    this.projects.locations.clusters.containerThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.projects.webSecurityScannerSettings = {};
    this.projects.webSecurityScannerSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.projects.virtualMachineThreatDetectionSettings = {};
    this.projects.virtualMachineThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.projects.securityHealthAnalyticsSettings = {};
    this.projects.securityHealthAnalyticsSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.projects.rapidVulnerabilityDetectionSettings = {};
    this.projects.rapidVulnerabilityDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.projects.containerThreatDetectionSettings = {};
    this.projects.containerThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.organizations = {};
    this.organizations.updateRapidVulnerabilityDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.getEventThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.updateEventThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.getSecurityHealthAnalyticsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.getVirtualMachineThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.updateWebSecurityScannerSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.getSecurityCenterSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.updateContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.getWebSecurityScannerSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.updateSecurityHealthAnalyticsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.getRapidVulnerabilityDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.getContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.updateVirtualMachineThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.getSubscription = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.webSecurityScannerSettings = {};
    this.organizations.webSecurityScannerSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.organizations.rapidVulnerabilityDetectionSettings = {};
    this.organizations.rapidVulnerabilityDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.organizations.containerThreatDetectionSettings = {};
    this.organizations.containerThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.organizations.eventThreatDetectionSettings = {};
    this.organizations.eventThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.organizations.securityHealthAnalyticsSettings = {};
    this.organizations.securityHealthAnalyticsSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.organizations.virtualMachineThreatDetectionSettings = {};
    this.organizations.virtualMachineThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.folders = {};
    this.folders.getSecurityHealthAnalyticsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.folders.updateContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.getWebSecurityScannerSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.folders.updateRapidVulnerabilityDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.updateSecurityHealthAnalyticsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.getVirtualMachineThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.folders.updateVirtualMachineThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.getContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.folders.getEventThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.folders.updateWebSecurityScannerSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.updateEventThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.getRapidVulnerabilityDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);
    this.folders.getSecurityCenterSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    this.folders.virtualMachineThreatDetectionSettings = {};
    this.folders.virtualMachineThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.folders.rapidVulnerabilityDetectionSettings = {};
    this.folders.rapidVulnerabilityDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.folders.securityHealthAnalyticsSettings = {};
    this.folders.securityHealthAnalyticsSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.folders.containerThreatDetectionSettings = {};
    this.folders.containerThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.folders.webSecurityScannerSettings = {};
    this.folders.webSecurityScannerSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.folders.eventThreatDetectionSettings = {};
    this.folders.eventThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);
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
