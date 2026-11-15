
/**
 * Google Apps Script client library for the Backup and DR Service API
 * Documentation URL: https://cloud.google.com/backup-disaster-recovery
 * Generator: https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/
 * @class
 */
class Backupdr {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://backupdr.googleapis.com/';
    this._servicePath = '';


    this.folders = {};

    this.folders.locations = {};

    this.folders.locations.resourceBackupConfigs = {};
    this.folders.locations.resourceBackupConfigs.fetch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/resourceBackupConfigs:fetch', 'GET', apiParams, clientConfig);

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.getTrial = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}/locations', 'GET', apiParams, clientConfig);

    this.projects.locations.trial = {};
    this.projects.locations.trial.subscribe = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/trial:subscribe', 'POST', apiParams, clientConfig);
    this.projects.locations.trial.end = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/trial:end', 'POST', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}/operations', 'GET', apiParams, clientConfig);

    this.projects.locations.managementServers = {};
    this.projects.locations.managementServers.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.managementServers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/managementServers', 'GET', apiParams, clientConfig);
    this.projects.locations.managementServers.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.managementServers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.managementServers.msComplianceMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}:msComplianceMetadata', 'POST', apiParams, clientConfig);
    this.projects.locations.managementServers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/managementServers', 'POST', apiParams, clientConfig);
    this.projects.locations.managementServers.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.managementServers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.backupPlanAssociations = {};
    this.projects.locations.backupPlanAssociations.triggerBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:triggerBackup', 'POST', apiParams, clientConfig);
    this.projects.locations.backupPlanAssociations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.backupPlanAssociations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/backupPlanAssociations', 'POST', apiParams, clientConfig);
    this.projects.locations.backupPlanAssociations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/backupPlanAssociations', 'GET', apiParams, clientConfig);
    this.projects.locations.backupPlanAssociations.fetchForResourceType = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/backupPlanAssociations:fetchForResourceType', 'GET', apiParams, clientConfig);
    this.projects.locations.backupPlanAssociations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.backupPlanAssociations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.backupVaults = {};
    this.projects.locations.backupVaults.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/backupVaults', 'POST', apiParams, clientConfig);
    this.projects.locations.backupVaults.fetchUsable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/backupVaults:fetchUsable', 'GET', apiParams, clientConfig);
    this.projects.locations.backupVaults.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.backupVaults.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.backupVaults.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.backupVaults.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.backupVaults.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/backupVaults', 'GET', apiParams, clientConfig);

    this.projects.locations.backupVaults.dataSources = {};
    this.projects.locations.backupVaults.dataSources.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.backupVaults.dataSources.initiateBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+dataSource}:initiateBackup', 'POST', apiParams, clientConfig);
    this.projects.locations.backupVaults.dataSources.setInternalStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+dataSource}:setInternalStatus', 'POST', apiParams, clientConfig);
    this.projects.locations.backupVaults.dataSources.remove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:remove', 'POST', apiParams, clientConfig);
    this.projects.locations.backupVaults.dataSources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/dataSources', 'GET', apiParams, clientConfig);
    this.projects.locations.backupVaults.dataSources.finalizeBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+dataSource}:finalizeBackup', 'POST', apiParams, clientConfig);
    this.projects.locations.backupVaults.dataSources.abandonBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+dataSource}:abandonBackup', 'POST', apiParams, clientConfig);
    this.projects.locations.backupVaults.dataSources.fetchAccessToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:fetchAccessToken', 'POST', apiParams, clientConfig);
    this.projects.locations.backupVaults.dataSources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.backupVaults.dataSources.backups = {};
    this.projects.locations.backupVaults.dataSources.backups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/backups', 'GET', apiParams, clientConfig);
    this.projects.locations.backupVaults.dataSources.backups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.backupVaults.dataSources.backups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.backupVaults.dataSources.backups.fetchForResourceType = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/backups:fetchForResourceType', 'GET', apiParams, clientConfig);
    this.projects.locations.backupVaults.dataSources.backups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.backupVaults.dataSources.backups.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:restore', 'POST', apiParams, clientConfig);

    this.projects.locations.autoProtectionPolicies = {};
    this.projects.locations.autoProtectionPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.autoProtectionPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.autoProtectionPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.autoProtectionPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/autoProtectionPolicies', 'GET', apiParams, clientConfig);
    this.projects.locations.autoProtectionPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/autoProtectionPolicies', 'POST', apiParams, clientConfig);

    this.projects.locations.autoProtectionPolicies.bindings = {};
    this.projects.locations.autoProtectionPolicies.bindings.initiateDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:initiateDelete', 'POST', apiParams, clientConfig);
    this.projects.locations.autoProtectionPolicies.bindings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/bindings', 'GET', apiParams, clientConfig);
    this.projects.locations.autoProtectionPolicies.bindings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.autoProtectionPolicies.bindings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/bindings', 'POST', apiParams, clientConfig);

    this.projects.locations.autoProtectionPolicies.bindings.matchingResources = {};
    this.projects.locations.autoProtectionPolicies.bindings.matchingResources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/matchingResources', 'GET', apiParams, clientConfig);
    this.projects.locations.autoProtectionPolicies.bindings.matchingResources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.backupPlans = {};
    this.projects.locations.backupPlans.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.backupPlans.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/backupPlans', 'GET', apiParams, clientConfig);
    this.projects.locations.backupPlans.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/backupPlans', 'POST', apiParams, clientConfig);
    this.projects.locations.backupPlans.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.backupPlans.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.backupPlans.revisions = {};
    this.projects.locations.backupPlans.revisions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.backupPlans.revisions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/revisions', 'GET', apiParams, clientConfig);

    this.projects.locations.appliedAutoProtectionPolicies = {};
    this.projects.locations.appliedAutoProtectionPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/appliedAutoProtectionPolicies', 'GET', apiParams, clientConfig);

    this.projects.locations.restoreVerificationPlans = {};
    this.projects.locations.restoreVerificationPlans.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.restoreVerificationPlans.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.restoreVerificationPlans.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/restoreVerificationPlans', 'GET', apiParams, clientConfig);
    this.projects.locations.restoreVerificationPlans.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/restoreVerificationPlans', 'POST', apiParams, clientConfig);

    this.projects.locations.restoreVerificationPlans.associations = {};
    this.projects.locations.restoreVerificationPlans.associations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.restoreVerificationPlans.associations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/associations', 'GET', apiParams, clientConfig);
    this.projects.locations.restoreVerificationPlans.associations.triggerRestoreVerification = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:triggerRestoreVerification', 'POST', apiParams, clientConfig);
    this.projects.locations.restoreVerificationPlans.associations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.restoreVerificationPlans.associations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/associations', 'POST', apiParams, clientConfig);

    this.projects.locations.serviceConfig = {};
    this.projects.locations.serviceConfig.initialize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:initialize', 'POST', apiParams, clientConfig);

    this.projects.locations.dataSourceReferences = {};
    this.projects.locations.dataSourceReferences.fetchForResourceType = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/dataSourceReferences:fetchForResourceType', 'GET', apiParams, clientConfig);
    this.projects.locations.dataSourceReferences.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataSourceReferences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/dataSourceReferences', 'GET', apiParams, clientConfig);

    this.projects.locations.restoreTemplates = {};
    this.projects.locations.restoreTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.restoreTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.restoreTemplates.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:run', 'POST', apiParams, clientConfig);
    this.projects.locations.restoreTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/restoreTemplates', 'GET', apiParams, clientConfig);
    this.projects.locations.restoreTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.restoreTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/restoreTemplates', 'POST', apiParams, clientConfig);

    this.projects.locations.restoreTemplates.executions = {};
    this.projects.locations.restoreTemplates.executions.triggerRestoreCleanup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:triggerRestoreCleanup', 'POST', apiParams, clientConfig);
    this.projects.locations.restoreTemplates.executions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/executions', 'GET', apiParams, clientConfig);
    this.projects.locations.restoreTemplates.executions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.resourceBackupConfigs = {};
    this.projects.locations.resourceBackupConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/resourceBackupConfigs', 'GET', apiParams, clientConfig);
    this.projects.locations.resourceBackupConfigs.fetch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/resourceBackupConfigs:fetch', 'GET', apiParams, clientConfig);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.resourceBackupConfigs = {};
    this.organizations.locations.resourceBackupConfigs.fetch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/resourceBackupConfigs:fetch', 'GET', apiParams, clientConfig);
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
