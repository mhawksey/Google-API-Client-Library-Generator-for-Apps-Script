
/**
 * Google Apps Script client library for the App Engine Admin API
 * Documentation URL: https://cloud.google.com/appengine/docs/admin-api/
 * @class
 */
class Appengine {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://appengine.googleapis.com/';
    this._servicePath = '';


    this.apps = {};
    this.apps.repair = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}:repair', 'POST', apiParams, clientConfig);
    this.apps.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps', 'POST', apiParams, clientConfig);
    this.apps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}', 'GET', apiParams, clientConfig);
    this.apps.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}', 'PATCH', apiParams, clientConfig);
    this.apps.listRuntimes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}:listRuntimes', 'GET', apiParams, clientConfig);

    this.apps.firewall = {};

    this.apps.firewall.ingressRules = {};
    this.apps.firewall.ingressRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules', 'GET', apiParams, clientConfig);
    this.apps.firewall.ingressRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}', 'PATCH', apiParams, clientConfig);
    this.apps.firewall.ingressRules.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules:batchUpdate', 'POST', apiParams, clientConfig);
    this.apps.firewall.ingressRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}', 'DELETE', apiParams, clientConfig);
    this.apps.firewall.ingressRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}', 'GET', apiParams, clientConfig);
    this.apps.firewall.ingressRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules', 'POST', apiParams, clientConfig);

    this.apps.services = {};
    this.apps.services.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}', 'GET', apiParams, clientConfig);
    this.apps.services.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}', 'PATCH', apiParams, clientConfig);
    this.apps.services.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services', 'GET', apiParams, clientConfig);
    this.apps.services.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}', 'DELETE', apiParams, clientConfig);

    this.apps.services.versions = {};
    this.apps.services.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}', 'PATCH', apiParams, clientConfig);
    this.apps.services.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions', 'POST', apiParams, clientConfig);
    this.apps.services.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}', 'GET', apiParams, clientConfig);
    this.apps.services.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions', 'GET', apiParams, clientConfig);
    this.apps.services.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}', 'DELETE', apiParams, clientConfig);

    this.apps.services.versions.instances = {};
    this.apps.services.versions.instances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances', 'GET', apiParams, clientConfig);
    this.apps.services.versions.instances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}', 'DELETE', apiParams, clientConfig);
    this.apps.services.versions.instances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}', 'GET', apiParams, clientConfig);
    this.apps.services.versions.instances.debug = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}:debug', 'POST', apiParams, clientConfig);

    this.apps.authorizedDomains = {};
    this.apps.authorizedDomains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/authorizedDomains', 'GET', apiParams, clientConfig);

    this.apps.authorizedCertificates = {};
    this.apps.authorizedCertificates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates', 'GET', apiParams, clientConfig);
    this.apps.authorizedCertificates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates', 'POST', apiParams, clientConfig);
    this.apps.authorizedCertificates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'PATCH', apiParams, clientConfig);
    this.apps.authorizedCertificates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'DELETE', apiParams, clientConfig);
    this.apps.authorizedCertificates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'GET', apiParams, clientConfig);

    this.apps.domainMappings = {};
    this.apps.domainMappings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/domainMappings/{domainMappingsId}', 'DELETE', apiParams, clientConfig);
    this.apps.domainMappings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/domainMappings/{domainMappingsId}', 'GET', apiParams, clientConfig);
    this.apps.domainMappings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/domainMappings/{domainMappingsId}', 'PATCH', apiParams, clientConfig);
    this.apps.domainMappings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/domainMappings', 'POST', apiParams, clientConfig);
    this.apps.domainMappings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/domainMappings', 'GET', apiParams, clientConfig);

    this.apps.locations = {};
    this.apps.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/locations/{locationsId}', 'GET', apiParams, clientConfig);
    this.apps.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/locations', 'GET', apiParams, clientConfig);

    this.apps.operations = {};
    this.apps.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/operations/{operationsId}', 'GET', apiParams, clientConfig);
    this.apps.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/operations', 'GET', apiParams, clientConfig);

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/operations', 'GET', apiParams, clientConfig);

    this.projects.locations.applications = {};
    this.projects.locations.applications.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.applications.services = {};
    this.projects.locations.applications.services.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.applications.services.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.applications.services.versions = {};
    this.projects.locations.applications.services.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}/versions/{versionsId}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.applications.services.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}/versions/{versionsId}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.applications.services.versions.instances = {};
    this.projects.locations.applications.services.versions.instances.debug = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}:debug', 'POST', apiParams, clientConfig);

    this.projects.locations.applications.domainMappings = {};
    this.projects.locations.applications.domainMappings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings/{domainMappingsId}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.applications.domainMappings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings', 'GET', apiParams, clientConfig);
    this.projects.locations.applications.domainMappings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings/{domainMappingsId}', 'GET', apiParams, clientConfig);
    this.projects.locations.applications.domainMappings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings', 'POST', apiParams, clientConfig);
    this.projects.locations.applications.domainMappings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings/{domainMappingsId}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.applications.authorizedCertificates = {};
    this.projects.locations.applications.authorizedCertificates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.applications.authorizedCertificates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates', 'GET', apiParams, clientConfig);
    this.projects.locations.applications.authorizedCertificates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates', 'POST', apiParams, clientConfig);
    this.projects.locations.applications.authorizedCertificates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.applications.authorizedCertificates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'GET', apiParams, clientConfig);

    this.projects.locations.applications.authorizedDomains = {};
    this.projects.locations.applications.authorizedDomains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedDomains', 'GET', apiParams, clientConfig);
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
