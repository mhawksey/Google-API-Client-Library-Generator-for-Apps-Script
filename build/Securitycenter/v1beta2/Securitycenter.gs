
/**
 * Google Apps Script client library for the Security Command Center API
 * Documentation URL: https://cloud.google.com/security-command-center
 * @class
 */
class Securitycenter {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://securitycenter.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.organizations = {};
    this.organizations.getSecurityCenterSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.organizations.getSubscription = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.organizations.getContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.organizations.updateContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.organizations.getEventThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.organizations.updateEventThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.organizations.getSecurityHealthAnalyticsSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.organizations.updateSecurityHealthAnalyticsSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.organizations.getVirtualMachineThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.organizations.updateVirtualMachineThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.organizations.getRapidVulnerabilityDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.organizations.updateRapidVulnerabilityDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.organizations.getWebSecurityScannerSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.organizations.updateWebSecurityScannerSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    this.organizations.containerThreatDetectionSettings = {};
    this.organizations.containerThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.organizations.eventThreatDetectionSettings = {};
    this.organizations.eventThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.organizations.securityHealthAnalyticsSettings = {};
    this.organizations.securityHealthAnalyticsSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.organizations.virtualMachineThreatDetectionSettings = {};
    this.organizations.virtualMachineThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.organizations.rapidVulnerabilityDetectionSettings = {};
    this.organizations.rapidVulnerabilityDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.organizations.webSecurityScannerSettings = {};
    this.organizations.webSecurityScannerSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.folders = {};
    this.folders.getSecurityCenterSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.folders.getContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.folders.updateContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.folders.getEventThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.folders.updateEventThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.folders.getSecurityHealthAnalyticsSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.folders.updateSecurityHealthAnalyticsSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.folders.getVirtualMachineThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.folders.updateVirtualMachineThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.folders.getRapidVulnerabilityDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.folders.updateRapidVulnerabilityDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.folders.getWebSecurityScannerSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.folders.updateWebSecurityScannerSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    this.folders.containerThreatDetectionSettings = {};
    this.folders.containerThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.folders.eventThreatDetectionSettings = {};
    this.folders.eventThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.folders.securityHealthAnalyticsSettings = {};
    this.folders.securityHealthAnalyticsSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.folders.virtualMachineThreatDetectionSettings = {};
    this.folders.virtualMachineThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.folders.rapidVulnerabilityDetectionSettings = {};
    this.folders.rapidVulnerabilityDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.folders.webSecurityScannerSettings = {};
    this.folders.webSecurityScannerSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.projects = {};
    this.projects.getSecurityCenterSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.getContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.updateContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.projects.getEventThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.updateEventThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.projects.getSecurityHealthAnalyticsSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.updateSecurityHealthAnalyticsSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.projects.getVirtualMachineThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.updateVirtualMachineThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.projects.getRapidVulnerabilityDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.updateRapidVulnerabilityDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.projects.getWebSecurityScannerSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.updateWebSecurityScannerSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    this.projects.locations = {};

    this.projects.locations.clusters = {};
    this.projects.locations.clusters.getContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.locations.clusters.updateContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    this.projects.locations.clusters.containerThreatDetectionSettings = {};
    this.projects.locations.clusters.containerThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.projects.containerThreatDetectionSettings = {};
    this.projects.containerThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.projects.eventThreatDetectionSettings = {};
    this.projects.eventThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.projects.securityHealthAnalyticsSettings = {};
    this.projects.securityHealthAnalyticsSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.projects.virtualMachineThreatDetectionSettings = {};
    this.projects.virtualMachineThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.projects.rapidVulnerabilityDetectionSettings = {};
    this.projects.rapidVulnerabilityDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.projects.webSecurityScannerSettings = {};
    this.projects.webSecurityScannerSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);
  }

  /**
   * @private Builds the full request URL and options object.
   */
  _buildRequestDetails(path, httpMethod, params) {
    let url = this._rootUrl + this._servicePath + path;
    const remainingParams = { ...params };
    // Fix: Correctly handle {+param} style parameters and other potential special chars.
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
      const isPlus = placeholder.startsWith('{+');
      const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
      if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
        url = url.replace(placeholder, remainingParams[paramName]);
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
      }
    }
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }

    const options = {
      method: httpMethod,
      headers: { 'Authorization': 'Bearer ' + this._token },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };
    if (params && params.resource) {
      options.payload = JSON.stringify(params.resource);
    }
    
    return { url, options };
  }

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   */
  _makeRequest(path, httpMethod, params) {
    const { url, options } = this._buildRequestDetails(path, httpMethod, params);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseText = response.getContentText(); // Simplified call

      if (responseCode >= 200 && responseCode < 300) {
        return responseText ? JSON.parse(responseText) : {};
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      try {
        // Return parsed error if possible, otherwise a generic error object
        return JSON.parse(responseText);
      } catch (e) {
        return { error: { code: responseCode, message: responseText } };
      }
    }
    
    // This line is technically unreachable if retries >= 0, but good for safety.
    throw new Error('Request failed after multiple retries.');
  }
}
