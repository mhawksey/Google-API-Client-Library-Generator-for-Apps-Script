
/**
 * Google Apps Script client library for the Dataform API
 * Documentation URL: https://cloud.google.com/dataform/docs
 * @class
 */
class Dataform {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://dataform.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.updateConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.repositories = {};
    this.projects.locations.repositories.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/repositories', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/repositories', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.repositories.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.repositories.commit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:commit', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.readFile = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:readFile', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.queryDirectoryContents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:queryDirectoryContents', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.fetchHistory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:fetchHistory', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.computeAccessTokenStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:computeAccessTokenStatus', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.fetchRemoteBranches = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:fetchRemoteBranches', 'GET', apiParams, clientConfig);

    this.projects.locations.repositories.workspaces = {};
    this.projects.locations.repositories.workspaces.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/workspaces', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/workspaces', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.installNpmPackages = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+workspace}:installNpmPackages', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.pull = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:pull', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.push = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:push', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.fetchFileGitStatuses = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:fetchFileGitStatuses', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.fetchGitAheadBehind = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:fetchGitAheadBehind', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.commit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:commit', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.reset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:reset', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.fetchFileDiff = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+workspace}:fetchFileDiff', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.queryDirectoryContents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+workspace}:queryDirectoryContents', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.searchFiles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+workspace}:searchFiles', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.makeDirectory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+workspace}:makeDirectory', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.removeDirectory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+workspace}:removeDirectory', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.moveDirectory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+workspace}:moveDirectory', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.readFile = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+workspace}:readFile', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.removeFile = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+workspace}:removeFile', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.moveFile = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+workspace}:moveFile', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workspaces.writeFile = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+workspace}:writeFile', 'POST', apiParams, clientConfig);

    this.projects.locations.repositories.releaseConfigs = {};
    this.projects.locations.repositories.releaseConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releaseConfigs', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.releaseConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.releaseConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releaseConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.releaseConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.repositories.releaseConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.repositories.compilationResults = {};
    this.projects.locations.repositories.compilationResults.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/compilationResults', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.compilationResults.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.compilationResults.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/compilationResults', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.compilationResults.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:query', 'GET', apiParams, clientConfig);

    this.projects.locations.repositories.workflowConfigs = {};
    this.projects.locations.repositories.workflowConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/workflowConfigs', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.workflowConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.workflowConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/workflowConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workflowConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.repositories.workflowConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.repositories.workflowInvocations = {};
    this.projects.locations.repositories.workflowInvocations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/workflowInvocations', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.workflowInvocations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.workflowInvocations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/workflowInvocations', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workflowInvocations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.repositories.workflowInvocations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.workflowInvocations.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:query', 'GET', apiParams, clientConfig);

    this.projects.locations.folders = {};
    this.projects.locations.folders.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.folders.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.folders.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.teamFolders = {};
    this.projects.locations.teamFolders.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.teamFolders.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.teamFolders.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
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
