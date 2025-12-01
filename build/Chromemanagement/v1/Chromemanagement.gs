
/**
 * Google Apps Script client library for the Chrome Management API
 * Documentation URL: https://developers.google.com/chrome/management/
 * @class
 */
class Chromemanagement {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://chromemanagement.googleapis.com/';
    this._servicePath = '';


    this.operations = {};
    this.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.customers = {};

    this.customers.thirdPartyProfileUsers = {};
    this.customers.thirdPartyProfileUsers.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:move', 'POST', apiParams, clientConfig);

    this.customers.telemetry = {};

    this.customers.telemetry.devices = {};
    this.customers.telemetry.devices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.customers.telemetry.devices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/telemetry/devices', 'GET', apiParams, clientConfig);

    this.customers.telemetry.events = {};
    this.customers.telemetry.events.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/telemetry/events', 'GET', apiParams, clientConfig);

    this.customers.telemetry.notificationConfigs = {};
    this.customers.telemetry.notificationConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.customers.telemetry.notificationConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/telemetry/notificationConfigs', 'GET', apiParams, clientConfig);
    this.customers.telemetry.notificationConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/telemetry/notificationConfigs', 'POST', apiParams, clientConfig);

    this.customers.telemetry.users = {};
    this.customers.telemetry.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/telemetry/users', 'GET', apiParams, clientConfig);
    this.customers.telemetry.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.customers.apps = {};
    this.customers.apps.fetchUsersRequestingExtension = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/apps:fetchUsersRequestingExtension', 'GET', apiParams, clientConfig);
    this.customers.apps.fetchDevicesRequestingExtension = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/apps:fetchDevicesRequestingExtension', 'GET', apiParams, clientConfig);
    this.customers.apps.countChromeAppRequests = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/apps:countChromeAppRequests', 'GET', apiParams, clientConfig);

    this.customers.apps.android = {};
    this.customers.apps.android.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.customers.apps.chrome = {};
    this.customers.apps.chrome.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.customers.apps.web = {};
    this.customers.apps.web.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.customers.certificateProvisioningProcesses = {};
    this.customers.certificateProvisioningProcesses.claim = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:claim', 'POST', apiParams, clientConfig);
    this.customers.certificateProvisioningProcesses.uploadCertificate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:uploadCertificate', 'POST', apiParams, clientConfig);
    this.customers.certificateProvisioningProcesses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.customers.certificateProvisioningProcesses.signData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:signData', 'POST', apiParams, clientConfig);
    this.customers.certificateProvisioningProcesses.setFailure = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setFailure', 'POST', apiParams, clientConfig);

    this.customers.certificateProvisioningProcesses.operations = {};
    this.customers.certificateProvisioningProcesses.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.customers.profiles = {};
    this.customers.profiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/profiles', 'GET', apiParams, clientConfig);
    this.customers.profiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.customers.profiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.customers.profiles.commands = {};
    this.customers.profiles.commands.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/commands', 'POST', apiParams, clientConfig);
    this.customers.profiles.commands.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/commands', 'GET', apiParams, clientConfig);
    this.customers.profiles.commands.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.customers.reports = {};
    this.customers.reports.countChromeVersions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countChromeVersions', 'GET', apiParams, clientConfig);
    this.customers.reports.enumeratePrintJobs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:enumeratePrintJobs', 'GET', apiParams, clientConfig);
    this.customers.reports.countInstalledApps = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countInstalledApps', 'GET', apiParams, clientConfig);
    this.customers.reports.countChromeDevicesReachingAutoExpirationDate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countChromeDevicesReachingAutoExpirationDate', 'GET', apiParams, clientConfig);
    this.customers.reports.countChromeBrowsersNeedingAttention = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countChromeBrowsersNeedingAttention', 'GET', apiParams, clientConfig);
    this.customers.reports.countPrintJobsByUser = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countPrintJobsByUser', 'GET', apiParams, clientConfig);
    this.customers.reports.countChromeHardwareFleetDevices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countChromeHardwareFleetDevices', 'GET', apiParams, clientConfig);
    this.customers.reports.countDevicesPerReleaseChannel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countDevicesPerReleaseChannel', 'GET', apiParams, clientConfig);
    this.customers.reports.countChromeDevicesThatNeedAttention = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countChromeDevicesThatNeedAttention', 'GET', apiParams, clientConfig);
    this.customers.reports.findInstalledAppDevices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:findInstalledAppDevices', 'GET', apiParams, clientConfig);
    this.customers.reports.countActiveDevices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countActiveDevices', 'GET', apiParams, clientConfig);
    this.customers.reports.countDevicesPerBootType = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countDevicesPerBootType', 'GET', apiParams, clientConfig);
    this.customers.reports.countChromeCrashEvents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countChromeCrashEvents', 'GET', apiParams, clientConfig);
    this.customers.reports.countPrintJobsByPrinter = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/reports:countPrintJobsByPrinter', 'GET', apiParams, clientConfig);
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
