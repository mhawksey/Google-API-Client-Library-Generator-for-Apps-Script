
/**
 * Google Apps Script client library for the Security Command Center API
 * Documentation URL: https://cloud.google.com/security-command-center
 * Generator: https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://securitycenter.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.notificationConfigs = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notificationConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notificationConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.configId - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notificationConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notificationConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notificationConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.securityHealthAnalyticsSettings = {};

    this.projects.securityHealthAnalyticsSettings.customModules = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.simulate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);

    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.projects.locations = {};

    this.projects.locations.muteConfigs = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.muteConfigs = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.muteConfigId - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.muteConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.muteConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.assets = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.startTime - 
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.assets.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.assets.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets:group', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compareDuration - 
     * @param {string} apiParams.fieldMask - 
     * @param {string} apiParams.filter - 
     * @param {string} apiParams.orderBy - 
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {string} apiParams.readTime - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.assets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets', 'GET', apiParams, clientConfig);

    this.projects.findings = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.findings.bulkMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', apiParams, clientConfig);

    this.projects.eventThreatDetectionSettings = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.validateCustomModule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', apiParams, clientConfig);

    this.projects.eventThreatDetectionSettings.customModules = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);

    this.projects.eventThreatDetectionSettings.effectiveCustomModules = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.projects.bigQueryExports = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.bigQueryExports.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bigQueryExportId - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.bigQueryExports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.bigQueryExports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.bigQueryExports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.bigQueryExports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.sources = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sources', 'GET', apiParams, clientConfig);

    this.projects.sources.findings = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compareDuration - 
     * @param {string} apiParams.fieldMask - 
     * @param {string} apiParams.filter - 
     * @param {string} apiParams.orderBy - 
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {string} apiParams.readTime - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.findings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.findings.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:group', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.findings.setState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setState', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.findings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.startTime - 
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.findings.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.findings.setMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMute', 'POST', apiParams, clientConfig);

    this.projects.sources.findings.externalSystems = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.findings.externalSystems.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders = {};

    this.folders.muteConfigs = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.muteConfigId - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.muteConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.muteConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.securityHealthAnalyticsSettings = {};

    this.folders.securityHealthAnalyticsSettings.customModules = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.simulate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.folders.locations = {};

    this.folders.locations.muteConfigs = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.folders.notificationConfigs = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.notificationConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.notificationConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.notificationConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.configId - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.notificationConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.notificationConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', apiParams, clientConfig);

    this.folders.bigQueryExports = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.bigQueryExports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.bigQueryExports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bigQueryExportId - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.bigQueryExports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.bigQueryExports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.bigQueryExports.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.sources = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sources', 'GET', apiParams, clientConfig);

    this.folders.sources.findings = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compareDuration - 
     * @param {string} apiParams.fieldMask - 
     * @param {string} apiParams.filter - 
     * @param {string} apiParams.orderBy - 
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {string} apiParams.readTime - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.findings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.findings.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:group', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.findings.setState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setState', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.findings.setMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMute', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.findings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.startTime - 
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.findings.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.sources.findings.externalSystems = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.findings.externalSystems.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.eventThreatDetectionSettings = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.validateCustomModule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', apiParams, clientConfig);

    this.folders.eventThreatDetectionSettings.customModules = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.eventThreatDetectionSettings.effectiveCustomModules = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.folders.assets = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.startTime - 
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.assets.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.assets.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets:group', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compareDuration - 
     * @param {string} apiParams.fieldMask - 
     * @param {string} apiParams.filter - 
     * @param {string} apiParams.orderBy - 
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {string} apiParams.readTime - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.assets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets', 'GET', apiParams, clientConfig);

    this.folders.findings = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.findings.bulkMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', apiParams, clientConfig);

    this.organizations = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.getOrganizationSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.updateOrganizationSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.muteConfigs = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.muteConfigId - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.muteConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.muteConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.securityHealthAnalyticsSettings = {};

    this.organizations.securityHealthAnalyticsSettings.customModules = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.simulate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.organizations.locations = {};

    this.organizations.locations.muteConfigs = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.simulations = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.simulations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.simulations.attackPaths = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - 
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.simulations.attackPaths.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', apiParams, clientConfig);

    this.organizations.simulations.attackExposureResults = {};

    this.organizations.simulations.attackExposureResults.valuedResources = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - 
     * @param {string} apiParams.orderBy - 
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.simulations.attackExposureResults.valuedResources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', apiParams, clientConfig);

    this.organizations.simulations.attackExposureResults.attackPaths = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - 
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.simulations.attackExposureResults.attackPaths.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', apiParams, clientConfig);

    this.organizations.simulations.valuedResources = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.simulations.valuedResources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - 
     * @param {string} apiParams.orderBy - 
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.simulations.valuedResources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', apiParams, clientConfig);

    this.organizations.simulations.valuedResources.attackPaths = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - 
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.simulations.valuedResources.attackPaths.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', apiParams, clientConfig);

    this.organizations.eventThreatDetectionSettings = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.validateCustomModule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', apiParams, clientConfig);

    this.organizations.eventThreatDetectionSettings.customModules = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);

    this.organizations.eventThreatDetectionSettings.effectiveCustomModules = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.organizations.attackPaths = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - 
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.attackPaths.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', apiParams, clientConfig);

    this.organizations.findings = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.findings.bulkMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', apiParams, clientConfig);

    this.organizations.operations = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - 
     * @param {string} apiParams.name - (Required)
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {boolean} apiParams.returnPartialSuccess - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.resourceValueConfigs = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.resourceValueConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.resourceValueConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.resourceValueConfigs.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourceValueConfigs:batchCreate', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.resourceValueConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourceValueConfigs', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.resourceValueConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.notificationConfigs = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.notificationConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.configId - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.notificationConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.notificationConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.notificationConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.notificationConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.sources = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sources', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sources', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    this.organizations.sources.findings = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:group', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.setState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setState', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.setMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMute', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.startTime - 
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.findingId - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compareDuration - 
     * @param {string} apiParams.fieldMask - 
     * @param {string} apiParams.filter - 
     * @param {string} apiParams.orderBy - 
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {string} apiParams.readTime - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings', 'GET', apiParams, clientConfig);

    this.organizations.sources.findings.externalSystems = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.externalSystems.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.bigQueryExports = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bigQueryExportId - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.bigQueryExports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.bigQueryExports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.bigQueryExports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.bigQueryExports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.bigQueryExports.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.assets = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required)
     * @param {string} apiParams.startTime - 
     * @param {string} apiParams.updateMask - 
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.assets.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.assets.runDiscovery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets:runDiscovery', 'POST', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compareDuration - 
     * @param {string} apiParams.fieldMask - 
     * @param {string} apiParams.filter - 
     * @param {string} apiParams.orderBy - 
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {string} apiParams.readTime - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.assets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets', 'GET', apiParams, clientConfig);

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.assets.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets:group', 'POST', apiParams, clientConfig);

    this.organizations.valuedResources = {};

    /**
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - 
     * @param {string} apiParams.orderBy - 
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - 
     * @param {string} apiParams.parent - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.valuedResources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', apiParams, clientConfig);
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
