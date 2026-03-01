
/**
 * Google Apps Script client library for the Cloud Build API
 * Documentation URL: https://cloud.google.com/cloud-build/docs/
 * @class
 */
class Cloudbuild {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://cloudbuild.googleapis.com/';
    this._servicePath = '';


    this.operations = {};
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects = {};

    this.projects.builds = {};
    this.projects.builds.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/builds', 'POST', apiParams, clientConfig);
    this.projects.builds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/builds/{id}', 'GET', apiParams, clientConfig);
    this.projects.builds.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/builds', 'GET', apiParams, clientConfig);
    this.projects.builds.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/builds/{id}:cancel', 'POST', apiParams, clientConfig);
    this.projects.builds.retry = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/builds/{id}:retry', 'POST', apiParams, clientConfig);
    this.projects.builds.approve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:approve', 'POST', apiParams, clientConfig);

    this.projects.triggers = {};
    this.projects.triggers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/triggers', 'POST', apiParams, clientConfig);
    this.projects.triggers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}', 'GET', apiParams, clientConfig);
    this.projects.triggers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/triggers', 'GET', apiParams, clientConfig);
    this.projects.triggers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}', 'DELETE', apiParams, clientConfig);
    this.projects.triggers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}', 'PATCH', apiParams, clientConfig);
    this.projects.triggers.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}:run', 'POST', apiParams, clientConfig);
    this.projects.triggers.webhook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/triggers/{trigger}:webhook', 'POST', apiParams, clientConfig);

    this.projects.githubEnterpriseConfigs = {};
    this.projects.githubEnterpriseConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'POST', apiParams, clientConfig);
    this.projects.githubEnterpriseConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.githubEnterpriseConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.githubEnterpriseConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'GET', apiParams, clientConfig);
    this.projects.githubEnterpriseConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations = {};
    this.projects.locations.getDefaultServiceAccount = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.builds = {};
    this.projects.locations.builds.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/builds', 'POST', apiParams, clientConfig);
    this.projects.locations.builds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.builds.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/builds', 'GET', apiParams, clientConfig);
    this.projects.locations.builds.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.builds.retry = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:retry', 'POST', apiParams, clientConfig);
    this.projects.locations.builds.approve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:approve', 'POST', apiParams, clientConfig);

    this.projects.locations.triggers = {};
    this.projects.locations.triggers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/triggers', 'POST', apiParams, clientConfig);
    this.projects.locations.triggers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.triggers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/triggers', 'GET', apiParams, clientConfig);
    this.projects.locations.triggers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.triggers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resourceName}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.triggers.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:run', 'POST', apiParams, clientConfig);
    this.projects.locations.triggers.webhook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:webhook', 'POST', apiParams, clientConfig);

    this.projects.locations.bitbucketServerConfigs = {};
    this.projects.locations.bitbucketServerConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bitbucketServerConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.bitbucketServerConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.bitbucketServerConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.bitbucketServerConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bitbucketServerConfigs', 'GET', apiParams, clientConfig);
    this.projects.locations.bitbucketServerConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.bitbucketServerConfigs.removeBitbucketServerConnectedRepository = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+config}:removeBitbucketServerConnectedRepository', 'POST', apiParams, clientConfig);

    this.projects.locations.bitbucketServerConfigs.repos = {};
    this.projects.locations.bitbucketServerConfigs.repos.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/repos', 'GET', apiParams, clientConfig);

    this.projects.locations.bitbucketServerConfigs.connectedRepositories = {};
    this.projects.locations.bitbucketServerConfigs.connectedRepositories.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connectedRepositories:batchCreate', 'POST', apiParams, clientConfig);

    this.projects.locations.gitLabConfigs = {};
    this.projects.locations.gitLabConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/gitLabConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.gitLabConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.gitLabConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.gitLabConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/gitLabConfigs', 'GET', apiParams, clientConfig);
    this.projects.locations.gitLabConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.gitLabConfigs.removeGitLabConnectedRepository = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+config}:removeGitLabConnectedRepository', 'POST', apiParams, clientConfig);

    this.projects.locations.gitLabConfigs.repos = {};
    this.projects.locations.gitLabConfigs.repos.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/repos', 'GET', apiParams, clientConfig);

    this.projects.locations.gitLabConfigs.connectedRepositories = {};
    this.projects.locations.gitLabConfigs.connectedRepositories.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connectedRepositories:batchCreate', 'POST', apiParams, clientConfig);

    this.projects.locations.githubEnterpriseConfigs = {};
    this.projects.locations.githubEnterpriseConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.githubEnterpriseConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.githubEnterpriseConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.githubEnterpriseConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'GET', apiParams, clientConfig);
    this.projects.locations.githubEnterpriseConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.workerPools = {};
    this.projects.locations.workerPools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workerPools', 'POST', apiParams, clientConfig);
    this.projects.locations.workerPools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.workerPools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.workerPools.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.workerPools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workerPools', 'GET', apiParams, clientConfig);

    this.githubDotComWebhook = {};
    this.githubDotComWebhook.receive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/githubDotComWebhook:receive', 'POST', apiParams, clientConfig);

    this.locations = {};
    this.locations.regionalWebhook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}/regionalWebhook', 'POST', apiParams, clientConfig);

    this.v1 = {};
    this.v1.webhook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/webhook', 'POST', apiParams, clientConfig);
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
