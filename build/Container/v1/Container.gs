
/**
 * Google Apps Script client library for the Kubernetes Engine API
 * Documentation URL: https://cloud.google.com/kubernetes-engine/docs/
 * @class
 */
class Container {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://container.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.getServerConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/serverConfig', 'GET', apiParams, clientConfig);

    this.projects.locations.clusters = {};
    this.projects.locations.clusters.setAddons = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setAddons', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.locations.clusters.setMaintenancePolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMaintenancePolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.setLogging = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setLogging', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clusters', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.setLegacyAbac = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setLegacyAbac', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.checkAutopilotCompatibility = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:checkAutopilotCompatibility', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.completeIpRotation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:completeIpRotation', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.setNetworkPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setNetworkPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.startIpRotation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:startIpRotation', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.getJwks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/jwks', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clusters', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.setResourceLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setResourceLabels', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.updateMaster = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:updateMaster', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.setMonitoring = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMonitoring', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.setMasterAuth = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMasterAuth', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.clusters.setLocations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setLocations', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.fetchClusterUpgradeInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:fetchClusterUpgradeInfo', 'GET', apiParams, clientConfig);

    this.projects.locations.clusters.well-known = {};
    this.projects.locations.clusters.well-known.getOpenid-configuration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/.well-known/openid-configuration', 'GET', apiParams, clientConfig);

    this.projects.locations.clusters.nodePools = {};
    this.projects.locations.clusters.nodePools.setAutoscaling = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setAutoscaling', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.nodePools.setSize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setSize', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.nodePools.rollback = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:rollback', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.nodePools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/nodePools', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.nodePools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/nodePools', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.nodePools.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.locations.clusters.nodePools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.nodePools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.clusters.nodePools.completeUpgrade = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:completeUpgrade', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.nodePools.setManagement = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setManagement', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.nodePools.fetchNodePoolUpgradeInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:fetchNodePoolUpgradeInfo', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.aggregated = {};

    this.projects.aggregated.usableSubnetworks = {};
    this.projects.aggregated.usableSubnetworks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/aggregated/usableSubnetworks', 'GET', apiParams, clientConfig);

    this.projects.zones = {};
    this.projects.zones.getServerconfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/serverconfig', 'GET', apiParams, clientConfig);

    this.projects.zones.clusters = {};
    this.projects.zones.clusters.resourceLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.completeIpRotation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}', 'DELETE', apiParams, clientConfig);
    this.projects.zones.clusters.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}', 'PUT', apiParams, clientConfig);
    this.projects.zones.clusters.logging = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.setNetworkPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.master = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.monitoring = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.fetchClusterUpgradeInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:fetchClusterUpgradeInfo', 'GET', apiParams, clientConfig);
    this.projects.zones.clusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters', 'GET', apiParams, clientConfig);
    this.projects.zones.clusters.setMaintenancePolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.startIpRotation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.legacyAbac = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.addons = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}', 'GET', apiParams, clientConfig);
    this.projects.zones.clusters.locations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.setMasterAuth = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth', 'POST', apiParams, clientConfig);

    this.projects.zones.clusters.nodePools = {};
    this.projects.zones.clusters.nodePools.autoscaling = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.nodePools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}', 'GET', apiParams, clientConfig);
    this.projects.zones.clusters.nodePools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}', 'DELETE', apiParams, clientConfig);
    this.projects.zones.clusters.nodePools.rollback = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.nodePools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.nodePools.setManagement = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.nodePools.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.nodePools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools', 'GET', apiParams, clientConfig);
    this.projects.zones.clusters.nodePools.setSize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize', 'POST', apiParams, clientConfig);
    this.projects.zones.clusters.nodePools.fetchNodePoolUpgradeInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:fetchNodePoolUpgradeInfo', 'GET', apiParams, clientConfig);

    this.projects.zones.operations = {};
    this.projects.zones.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/operations', 'GET', apiParams, clientConfig);
    this.projects.zones.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel', 'POST', apiParams, clientConfig);
    this.projects.zones.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/operations/{operationId}', 'GET', apiParams, clientConfig);
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
