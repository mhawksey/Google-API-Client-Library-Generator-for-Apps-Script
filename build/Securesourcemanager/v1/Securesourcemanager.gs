
/**
 * Google Apps Script client library for the Secure Source Manager API
 * Documentation URL: https://cloud.google.com/secure-source-manager
 * @class
 */
class Securesourcemanager {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://securesourcemanager.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);

    this.projects.locations.repositories = {};
    this.projects.locations.repositories.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/repositories', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/repositories', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.fetchBlob = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+repository}:fetchBlob', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.repositories.fetchTree = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+repository}:fetchTree', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.repositories.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    this.projects.locations.repositories.issues = {};
    this.projects.locations.repositories.issues.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.repositories.issues.close = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:close', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.issues.open = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:open', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.issues.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.issues.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/issues', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.issues.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/issues', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.issues.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.repositories.issues.issueComments = {};
    this.projects.locations.repositories.issues.issueComments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/issueComments', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.issues.issueComments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.repositories.issues.issueComments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.repositories.issues.issueComments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/issueComments', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.issues.issueComments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.repositories.hooks = {};
    this.projects.locations.repositories.hooks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/hooks', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.hooks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.hooks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.repositories.hooks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.repositories.hooks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/hooks', 'GET', apiParams, clientConfig);

    this.projects.locations.repositories.pullRequests = {};
    this.projects.locations.repositories.pullRequests.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.repositories.pullRequests.open = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:open', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.pullRequests.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/pullRequests', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.pullRequests.close = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:close', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.pullRequests.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.pullRequests.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/pullRequests', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.pullRequests.listFileDiffs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:listFileDiffs', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.pullRequests.merge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:merge', 'POST', apiParams, clientConfig);

    this.projects.locations.repositories.pullRequests.pullRequestComments = {};
    this.projects.locations.repositories.pullRequests.pullRequestComments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.repositories.pullRequests.pullRequestComments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.repositories.pullRequests.pullRequestComments.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/pullRequestComments:batchCreate', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.pullRequests.pullRequestComments.unresolve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/pullRequestComments:unresolve', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.pullRequests.pullRequestComments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/pullRequestComments', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.pullRequests.pullRequestComments.resolve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/pullRequestComments:resolve', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.pullRequests.pullRequestComments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/pullRequestComments', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.pullRequests.pullRequestComments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.repositories.branchRules = {};
    this.projects.locations.repositories.branchRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/branchRules', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.branchRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/branchRules', 'POST', apiParams, clientConfig);
    this.projects.locations.repositories.branchRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.repositories.branchRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.repositories.branchRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.instances = {};
    this.projects.locations.instances.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instances', 'POST', apiParams, clientConfig);
    this.projects.locations.instances.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.instances.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.instances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.instances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instances', 'GET', apiParams, clientConfig);
    this.projects.locations.instances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.instances.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
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
