
/**
 * Google Apps Script client library for the Cloud Deploy API
 * Documentation URL: https://cloud.google.com/deploy/
 * @class
 */
class Clouddeploy {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://clouddeploy.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);

    this.projects.locations.deployPolicies = {};
    this.projects.locations.deployPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.deployPolicies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.deployPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.deployPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.deployPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployPolicies', 'POST', apiParams, clientConfig);
    this.projects.locations.deployPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployPolicies', 'GET', apiParams, clientConfig);
    this.projects.locations.deployPolicies.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    this.projects.locations.deliveryPipelines = {};
    this.projects.locations.deliveryPipelines.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deliveryPipelines', 'POST', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deliveryPipelines', 'GET', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.rollbackTarget = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:rollbackTarget', 'POST', apiParams, clientConfig);

    this.projects.locations.deliveryPipelines.automationRuns = {};
    this.projects.locations.deliveryPipelines.automationRuns.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.automationRuns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/automationRuns', 'GET', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.automationRuns.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.deliveryPipelines.releases = {};
    this.projects.locations.deliveryPipelines.releases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/releases', 'POST', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.releases.abandon = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:abandon', 'POST', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.releases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/releases', 'GET', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.releases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.deliveryPipelines.releases.rollouts = {};
    this.projects.locations.deliveryPipelines.releases.rollouts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.releases.rollouts.ignoreJob = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+rollout}:ignoreJob', 'POST', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.releases.rollouts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/rollouts', 'GET', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.releases.rollouts.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.releases.rollouts.advance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:advance', 'POST', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.releases.rollouts.approve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:approve', 'POST', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.releases.rollouts.retryJob = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+rollout}:retryJob', 'POST', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.releases.rollouts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/rollouts', 'POST', apiParams, clientConfig);

    this.projects.locations.deliveryPipelines.releases.rollouts.jobRuns = {};
    this.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/jobRuns', 'GET', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.terminate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:terminate', 'POST', apiParams, clientConfig);

    this.projects.locations.deliveryPipelines.automations = {};
    this.projects.locations.deliveryPipelines.automations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/automations', 'GET', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.automations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.automations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.automations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.deliveryPipelines.automations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/automations', 'POST', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.customTargetTypes = {};
    this.projects.locations.customTargetTypes.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.customTargetTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.customTargetTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customTargetTypes', 'POST', apiParams, clientConfig);
    this.projects.locations.customTargetTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customTargetTypes', 'GET', apiParams, clientConfig);
    this.projects.locations.customTargetTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.customTargetTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.customTargetTypes.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    this.projects.locations.targets = {};
    this.projects.locations.targets.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.targets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/targets', 'GET', apiParams, clientConfig);
    this.projects.locations.targets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/targets', 'POST', apiParams, clientConfig);
    this.projects.locations.targets.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.targets.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.targets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.targets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.targets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
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
