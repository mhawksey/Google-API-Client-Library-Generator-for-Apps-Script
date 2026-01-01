
/**
 * Google Apps Script client library for the VMware Engine API
 * Documentation URL: https://cloud.google.com/solutions/vmware-as-a-service
 * @class
 */
class Vmwareengine {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://vmwareengine.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.getDnsBindPermission = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.nodeTypes = {};
    this.projects.locations.nodeTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.nodeTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/nodeTypes', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.networkPolicies = {};
    this.projects.locations.networkPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.networkPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.networkPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/networkPolicies', 'POST', apiParams, clientConfig);
    this.projects.locations.networkPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/networkPolicies', 'GET', apiParams, clientConfig);
    this.projects.locations.networkPolicies.fetchExternalAddresses = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+networkPolicy}:fetchExternalAddresses', 'GET', apiParams, clientConfig);
    this.projects.locations.networkPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.networkPolicies.externalAccessRules = {};
    this.projects.locations.networkPolicies.externalAccessRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/externalAccessRules', 'POST', apiParams, clientConfig);
    this.projects.locations.networkPolicies.externalAccessRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.networkPolicies.externalAccessRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/externalAccessRules', 'GET', apiParams, clientConfig);
    this.projects.locations.networkPolicies.externalAccessRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.networkPolicies.externalAccessRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.vmwareEngineNetworks = {};
    this.projects.locations.vmwareEngineNetworks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/vmwareEngineNetworks', 'POST', apiParams, clientConfig);
    this.projects.locations.vmwareEngineNetworks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.vmwareEngineNetworks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.vmwareEngineNetworks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/vmwareEngineNetworks', 'GET', apiParams, clientConfig);
    this.projects.locations.vmwareEngineNetworks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.networkPeerings = {};
    this.projects.locations.networkPeerings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.networkPeerings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/networkPeerings', 'POST', apiParams, clientConfig);
    this.projects.locations.networkPeerings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.networkPeerings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/networkPeerings', 'GET', apiParams, clientConfig);
    this.projects.locations.networkPeerings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.networkPeerings.peeringRoutes = {};
    this.projects.locations.networkPeerings.peeringRoutes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/peeringRoutes', 'GET', apiParams, clientConfig);

    this.projects.locations.datastores = {};
    this.projects.locations.datastores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/datastores', 'GET', apiParams, clientConfig);
    this.projects.locations.datastores.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datastores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/datastores', 'POST', apiParams, clientConfig);
    this.projects.locations.datastores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datastores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.dnsBindPermission = {};
    this.projects.locations.dnsBindPermission.revoke = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:revoke', 'POST', apiParams, clientConfig);
    this.projects.locations.dnsBindPermission.grant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:grant', 'POST', apiParams, clientConfig);

    this.projects.locations.privateConnections = {};
    this.projects.locations.privateConnections.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.privateConnections.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.privateConnections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/privateConnections', 'GET', apiParams, clientConfig);
    this.projects.locations.privateConnections.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.privateConnections.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/privateConnections', 'POST', apiParams, clientConfig);

    this.projects.locations.privateConnections.peeringRoutes = {};
    this.projects.locations.privateConnections.peeringRoutes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/peeringRoutes', 'GET', apiParams, clientConfig);

    this.projects.locations.privateClouds = {};
    this.projects.locations.privateClouds.showNsxCredentials = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+privateCloud}:showNsxCredentials', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.showVcenterCredentials = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+privateCloud}:showVcenterCredentials', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.resetVcenterCredentials = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+privateCloud}:resetVcenterCredentials', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.privateClouds.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.privateClouds.resetNsxCredentials = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+privateCloud}:resetNsxCredentials', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.getDnsForwarding = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/privateClouds', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/privateClouds', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.updateDnsForwarding = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.privateClouds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.privateCloudDeletionNow = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:privateCloudDeletionNow', 'POST', apiParams, clientConfig);

    this.projects.locations.privateClouds.upgrades = {};
    this.projects.locations.privateClouds.upgrades.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.privateClouds.upgrades.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.upgrades.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/upgrades', 'GET', apiParams, clientConfig);

    this.projects.locations.privateClouds.hcxActivationKeys = {};
    this.projects.locations.privateClouds.hcxActivationKeys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/hcxActivationKeys', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.hcxActivationKeys.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.hcxActivationKeys.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.hcxActivationKeys.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.hcxActivationKeys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.hcxActivationKeys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/hcxActivationKeys', 'GET', apiParams, clientConfig);

    this.projects.locations.privateClouds.managementDnsZoneBindings = {};
    this.projects.locations.privateClouds.managementDnsZoneBindings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.managementDnsZoneBindings.repair = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:repair', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.managementDnsZoneBindings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.privateClouds.managementDnsZoneBindings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/managementDnsZoneBindings', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.managementDnsZoneBindings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/managementDnsZoneBindings', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.managementDnsZoneBindings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.privateClouds.loggingServers = {};
    this.projects.locations.privateClouds.loggingServers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/loggingServers', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.loggingServers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.loggingServers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/loggingServers', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.loggingServers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.privateClouds.loggingServers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.privateClouds.clusters = {};
    this.projects.locations.privateClouds.clusters.unmountDatastore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:unmountDatastore', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.clusters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.privateClouds.clusters.mountDatastore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:mountDatastore', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.clusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.privateClouds.clusters.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.clusters.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.clusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clusters', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.clusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.clusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clusters', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.clusters.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    this.projects.locations.privateClouds.clusters.nodes = {};
    this.projects.locations.privateClouds.clusters.nodes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.clusters.nodes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/nodes', 'GET', apiParams, clientConfig);

    this.projects.locations.privateClouds.subnets = {};
    this.projects.locations.privateClouds.subnets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.subnets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/subnets', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.subnets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.privateClouds.externalAddresses = {};
    this.projects.locations.privateClouds.externalAddresses.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/externalAddresses', 'POST', apiParams, clientConfig);
    this.projects.locations.privateClouds.externalAddresses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.externalAddresses.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.privateClouds.externalAddresses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/externalAddresses', 'GET', apiParams, clientConfig);
    this.projects.locations.privateClouds.externalAddresses.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.announcements = {};
    this.projects.locations.announcements.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/announcements', 'GET', apiParams, clientConfig);
    this.projects.locations.announcements.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
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
