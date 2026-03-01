
/**
 * Google Apps Script client library for the Cloud DNS API
 * Documentation URL: https://cloud.google.com/dns/docs
 * @class
 */
class Dns {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://dns.googleapis.com/';
    this._servicePath = '';


    this.resourceRecordSets = {};
    this.resourceRecordSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets', 'GET', apiParams, clientConfig);
    this.resourceRecordSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets', 'POST', apiParams, clientConfig);
    this.resourceRecordSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}', 'GET', apiParams, clientConfig);
    this.resourceRecordSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}', 'DELETE', apiParams, clientConfig);
    this.resourceRecordSets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/rrsets/{name}/{type}', 'PATCH', apiParams, clientConfig);

    this.changes = {};
    this.changes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/changes', 'POST', apiParams, clientConfig);
    this.changes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/changes/{changeId}', 'GET', apiParams, clientConfig);
    this.changes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/changes', 'GET', apiParams, clientConfig);

    this.dnsKeys = {};
    this.dnsKeys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}', 'GET', apiParams, clientConfig);
    this.dnsKeys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/dnsKeys', 'GET', apiParams, clientConfig);

    this.projects = {};
    this.projects.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}', 'GET', apiParams, clientConfig);

    this.managedZoneOperations = {};
    this.managedZoneOperations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/operations/{operation}', 'GET', apiParams, clientConfig);
    this.managedZoneOperations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}/operations', 'GET', apiParams, clientConfig);

    this.managedZones = {};
    this.managedZones.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones', 'POST', apiParams, clientConfig);
    this.managedZones.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}', 'GET', apiParams, clientConfig);
    this.managedZones.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones', 'GET', apiParams, clientConfig);
    this.managedZones.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}', 'DELETE', apiParams, clientConfig);
    this.managedZones.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}', 'PATCH', apiParams, clientConfig);
    this.managedZones.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/managedZones/{managedZone}', 'PUT', apiParams, clientConfig);
    this.managedZones.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.managedZones.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.managedZones.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.policies = {};
    this.policies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/policies', 'POST', apiParams, clientConfig);
    this.policies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/policies/{policy}', 'GET', apiParams, clientConfig);
    this.policies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/policies', 'GET', apiParams, clientConfig);
    this.policies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/policies/{policy}', 'DELETE', apiParams, clientConfig);
    this.policies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/policies/{policy}', 'PATCH', apiParams, clientConfig);
    this.policies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/policies/{policy}', 'PUT', apiParams, clientConfig);

    this.responsePolicies = {};
    this.responsePolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies', 'POST', apiParams, clientConfig);
    this.responsePolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}', 'GET', apiParams, clientConfig);
    this.responsePolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies', 'GET', apiParams, clientConfig);
    this.responsePolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}', 'DELETE', apiParams, clientConfig);
    this.responsePolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}', 'PATCH', apiParams, clientConfig);
    this.responsePolicies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}', 'PUT', apiParams, clientConfig);

    this.responsePolicyRules = {};
    this.responsePolicyRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules', 'POST', apiParams, clientConfig);
    this.responsePolicyRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'GET', apiParams, clientConfig);
    this.responsePolicyRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'DELETE', apiParams, clientConfig);
    this.responsePolicyRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules', 'GET', apiParams, clientConfig);
    this.responsePolicyRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'PATCH', apiParams, clientConfig);
    this.responsePolicyRules.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('dns/v1/projects/{project}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}', 'PUT', apiParams, clientConfig);
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
