
/**
 * Google Apps Script client library for the Managed Service for Microsoft Active Directory API
 * Documentation URL: https://cloud.google.com/managed-microsoft-ad/
 * @class
 */
class Managedidentities {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://managedidentities.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.global = {};

    this.projects.locations.global.operations = {};
    this.projects.locations.global.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.global.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.global.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.global.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.global.domains = {};
    this.projects.locations.global.domains.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/domains', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.resetAdminPassword = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:resetAdminPassword', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/domains', 'GET', apiParams, clientConfig);
    this.projects.locations.global.domains.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.global.domains.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.global.domains.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.global.domains.attachTrust = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:attachTrust', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.reconfigureTrust = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:reconfigureTrust', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.detachTrust = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:detachTrust', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.validateTrust = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:validateTrust', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:restore', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.getLdapssettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}/ldapssettings', 'GET', apiParams, clientConfig);
    this.projects.locations.global.domains.updateLdapssettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}/ldapssettings', 'PATCH', apiParams, clientConfig);
    this.projects.locations.global.domains.extendSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+domain}:extendSchema', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.enableMigration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+domain}:enableMigration', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.disableMigration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+domain}:disableMigration', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.checkMigrationPermission = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+domain}:checkMigrationPermission', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.domainJoinMachine = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+domain}:domainJoinMachine', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.global.domains.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.global.domains.sqlIntegrations = {};
    this.projects.locations.global.domains.sqlIntegrations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/sqlIntegrations', 'GET', apiParams, clientConfig);
    this.projects.locations.global.domains.sqlIntegrations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.global.domains.backups = {};
    this.projects.locations.global.domains.backups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/backups', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.backups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/backups', 'GET', apiParams, clientConfig);
    this.projects.locations.global.domains.backups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.global.domains.backups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.global.domains.backups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.global.domains.backups.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.global.domains.backups.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.global.domains.backups.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.global.peerings = {};
    this.projects.locations.global.peerings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/peerings', 'POST', apiParams, clientConfig);
    this.projects.locations.global.peerings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/peerings', 'GET', apiParams, clientConfig);
    this.projects.locations.global.peerings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.global.peerings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.global.peerings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.global.peerings.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.global.peerings.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.global.peerings.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
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
