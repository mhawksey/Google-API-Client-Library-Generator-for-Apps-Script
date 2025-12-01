
/**
 * Google Apps Script client library for the Tag Manager API
 * Documentation URL: https://developers.google.com/tag-manager
 * @class
 */
class Tagmanager {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://tagmanager.googleapis.com/';
    this._servicePath = '';


    this.accounts = {};
    this.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/accounts', 'GET', apiParams, clientConfig);
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);

    this.accounts.user_permissions = {};
    this.accounts.user_permissions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/user_permissions', 'POST', apiParams, clientConfig);
    this.accounts.user_permissions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/user_permissions', 'GET', apiParams, clientConfig);
    this.accounts.user_permissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.user_permissions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);
    this.accounts.user_permissions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    this.accounts.containers = {};
    this.accounts.containers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/containers', 'POST', apiParams, clientConfig);
    this.accounts.containers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/containers', 'GET', apiParams, clientConfig);
    this.accounts.containers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.containers.snippet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:snippet', 'GET', apiParams, clientConfig);
    this.accounts.containers.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/accounts/containers:lookup', 'GET', apiParams, clientConfig);
    this.accounts.containers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.combine = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:combine', 'POST', apiParams, clientConfig);
    this.accounts.containers.move_tag_id = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:move_tag_id', 'POST', apiParams, clientConfig);
    this.accounts.containers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    this.accounts.containers.destinations = {};
    this.accounts.containers.destinations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.containers.destinations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/destinations', 'GET', apiParams, clientConfig);
    this.accounts.containers.destinations.link = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/destinations:link', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces = {};
    this.accounts.containers.workspaces.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/workspaces', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.workspaces.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.workspaces.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/workspaces', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.sync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:sync', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.getStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}/status', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.resolve_conflict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:resolve_conflict', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.quick_preview = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:quick_preview', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.create_version = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:create_version', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.variables = {};
    this.accounts.containers.workspaces.variables.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/variables', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.variables.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/variables', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.variables.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.variables.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.workspaces.variables.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.workspaces.variables.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.built_in_variables = {};
    this.accounts.containers.workspaces.built_in_variables.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/built_in_variables', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.built_in_variables.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.workspaces.built_in_variables.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/built_in_variables', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.built_in_variables.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}/built_in_variables:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.triggers = {};
    this.accounts.containers.workspaces.triggers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/triggers', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.triggers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/triggers', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.triggers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.triggers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.workspaces.triggers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.workspaces.triggers.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.tags = {};
    this.accounts.containers.workspaces.tags.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/tags', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.tags.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/tags', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.tags.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.tags.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.workspaces.tags.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.workspaces.tags.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.gtag_config = {};
    this.accounts.containers.workspaces.gtag_config.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/gtag_config', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.gtag_config.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/gtag_config', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.gtag_config.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.gtag_config.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.workspaces.gtag_config.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);

    this.accounts.containers.workspaces.templates = {};
    this.accounts.containers.workspaces.templates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/templates', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.templates.import_from_gallery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/templates:import_from_gallery', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.templates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/templates', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.templates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.templates.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.workspaces.templates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.workspaces.templates.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.folders = {};
    this.accounts.containers.workspaces.folders.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/folders', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.folders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/folders', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.folders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.folders.entities = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:entities', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.folders.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.workspaces.folders.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.workspaces.folders.move_entities_to_folder = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:move_entities_to_folder', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.folders.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.zones = {};
    this.accounts.containers.workspaces.zones.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/zones', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.zones.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/zones', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.zones.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.zones.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.workspaces.zones.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.workspaces.zones.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.clients = {};
    this.accounts.containers.workspaces.clients.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/clients', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.clients.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/clients', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.clients.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.clients.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.workspaces.clients.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.workspaces.clients.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.workspaces.transformations = {};
    this.accounts.containers.workspaces.transformations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/transformations', 'POST', apiParams, clientConfig);
    this.accounts.containers.workspaces.transformations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/transformations', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.transformations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.containers.workspaces.transformations.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.workspaces.transformations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.workspaces.transformations.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', apiParams, clientConfig);

    this.accounts.containers.versions = {};
    this.accounts.containers.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.containers.versions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.versions.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:undelete', 'POST', apiParams, clientConfig);
    this.accounts.containers.versions.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:publish', 'POST', apiParams, clientConfig);
    this.accounts.containers.versions.set_latest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:set_latest', 'POST', apiParams, clientConfig);
    this.accounts.containers.versions.live = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/versions:live', 'GET', apiParams, clientConfig);

    this.accounts.containers.version_headers = {};
    this.accounts.containers.version_headers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/version_headers', 'GET', apiParams, clientConfig);
    this.accounts.containers.version_headers.latest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/version_headers:latest', 'GET', apiParams, clientConfig);

    this.accounts.containers.environments = {};
    this.accounts.containers.environments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/environments', 'POST', apiParams, clientConfig);
    this.accounts.containers.environments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+parent}/environments', 'GET', apiParams, clientConfig);
    this.accounts.containers.environments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'GET', apiParams, clientConfig);
    this.accounts.containers.environments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.environments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.environments.reauthorize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v2/{+path}:reauthorize', 'POST', apiParams, clientConfig);
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
