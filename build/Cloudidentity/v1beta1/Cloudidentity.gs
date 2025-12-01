
/**
 * Google Apps Script client library for the Cloud Identity API
 * Documentation URL: https://cloud.google.com/identity/
 * @class
 */
class Cloudidentity {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://cloudidentity.googleapis.com/';
    this._servicePath = '';


    this.inboundOidcSsoProfiles = {};
    this.inboundOidcSsoProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/inboundOidcSsoProfiles', 'GET', apiParams, clientConfig);
    this.inboundOidcSsoProfiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.inboundOidcSsoProfiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.inboundOidcSsoProfiles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/inboundOidcSsoProfiles', 'POST', apiParams, clientConfig);
    this.inboundOidcSsoProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.customers = {};

    this.customers.userinvitations = {};
    this.customers.userinvitations.send = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:send', 'POST', apiParams, clientConfig);
    this.customers.userinvitations.isInvitableUser = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:isInvitableUser', 'GET', apiParams, clientConfig);
    this.customers.userinvitations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/userinvitations', 'GET', apiParams, clientConfig);
    this.customers.userinvitations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.customers.userinvitations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.policies = {};
    this.policies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.policies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/policies', 'POST', apiParams, clientConfig);
    this.policies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.policies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/policies', 'GET', apiParams, clientConfig);
    this.policies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.inboundSamlSsoProfiles = {};
    this.inboundSamlSsoProfiles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/inboundSamlSsoProfiles', 'POST', apiParams, clientConfig);
    this.inboundSamlSsoProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/inboundSamlSsoProfiles', 'GET', apiParams, clientConfig);
    this.inboundSamlSsoProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.inboundSamlSsoProfiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.inboundSamlSsoProfiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.inboundSamlSsoProfiles.idpCredentials = {};
    this.inboundSamlSsoProfiles.idpCredentials.add = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/idpCredentials:add', 'POST', apiParams, clientConfig);
    this.inboundSamlSsoProfiles.idpCredentials.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.inboundSamlSsoProfiles.idpCredentials.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.inboundSamlSsoProfiles.idpCredentials.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/idpCredentials', 'GET', apiParams, clientConfig);

    this.groups = {};
    this.groups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.groups.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/groups:lookup', 'GET', apiParams, clientConfig);
    this.groups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/groups', 'POST', apiParams, clientConfig);
    this.groups.getSecuritySettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.groups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.groups.updateSecuritySettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.groups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.groups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/groups', 'GET', apiParams, clientConfig);
    this.groups.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/groups:search', 'GET', apiParams, clientConfig);

    this.groups.memberships = {};
    this.groups.memberships.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memberships:lookup', 'GET', apiParams, clientConfig);
    this.groups.memberships.getMembershipGraph = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memberships:getMembershipGraph', 'GET', apiParams, clientConfig);
    this.groups.memberships.searchDirectGroups = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memberships:searchDirectGroups', 'GET', apiParams, clientConfig);
    this.groups.memberships.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memberships', 'POST', apiParams, clientConfig);
    this.groups.memberships.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memberships', 'GET', apiParams, clientConfig);
    this.groups.memberships.searchTransitiveGroups = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memberships:searchTransitiveGroups', 'GET', apiParams, clientConfig);
    this.groups.memberships.modifyMembershipRoles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:modifyMembershipRoles', 'POST', apiParams, clientConfig);
    this.groups.memberships.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.groups.memberships.searchTransitiveMemberships = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memberships:searchTransitiveMemberships', 'GET', apiParams, clientConfig);
    this.groups.memberships.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.groups.memberships.checkTransitiveMembership = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memberships:checkTransitiveMembership', 'GET', apiParams, clientConfig);

    this.inboundSsoAssignments = {};
    this.inboundSsoAssignments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.inboundSsoAssignments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/inboundSsoAssignments', 'POST', apiParams, clientConfig);
    this.inboundSsoAssignments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.inboundSsoAssignments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/inboundSsoAssignments', 'GET', apiParams, clientConfig);
    this.inboundSsoAssignments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.devices = {};
    this.devices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/devices', 'GET', apiParams, clientConfig);
    this.devices.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.devices.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/devices', 'POST', apiParams, clientConfig);
    this.devices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.devices.cancelWipe = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancelWipe', 'POST', apiParams, clientConfig);
    this.devices.wipe = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wipe', 'POST', apiParams, clientConfig);

    this.devices.deviceUsers = {};
    this.devices.deviceUsers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/deviceUsers', 'GET', apiParams, clientConfig);
    this.devices.deviceUsers.block = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:block', 'POST', apiParams, clientConfig);
    this.devices.deviceUsers.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:lookup', 'GET', apiParams, clientConfig);
    this.devices.deviceUsers.cancelWipe = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancelWipe', 'POST', apiParams, clientConfig);
    this.devices.deviceUsers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.devices.deviceUsers.approve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:approve', 'POST', apiParams, clientConfig);
    this.devices.deviceUsers.wipe = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wipe', 'POST', apiParams, clientConfig);
    this.devices.deviceUsers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.devices.deviceUsers.clientStates = {};
    this.devices.deviceUsers.clientStates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.devices.deviceUsers.clientStates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.orgUnits = {};

    this.orgUnits.memberships = {};
    this.orgUnits.memberships.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memberships', 'GET', apiParams, clientConfig);
    this.orgUnits.memberships.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:move', 'POST', apiParams, clientConfig);
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
