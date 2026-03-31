
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://securitycenter.googleapis.com/';
    this._servicePath = '';


    this.organizations = {};

    /**
     * Get the SecurityCenterSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.getSecurityCenterSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Get the Subscription resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the subscription to retrieve. Format: organizations/{organization}/subscription
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.getSubscription = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.getContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the ContainerThreatDetectionSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.updateContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.getEventThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the EventThreatDetectionSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.updateEventThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.getSecurityHealthAnalyticsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the SecurityHealthAnalyticsSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.updateSecurityHealthAnalyticsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.getVirtualMachineThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the VirtualMachineThreatDetectionSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.updateVirtualMachineThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.getRapidVulnerabilityDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the RapidVulnerabilityDetectionSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.updateRapidVulnerabilityDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.getWebSecurityScannerSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the WebSecurityScannerSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.updateWebSecurityScannerSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.containerThreatDetectionSettings = {};

    /**
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.containerThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.organizations.eventThreatDetectionSettings = {};

    /**
     * Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.organizations.securityHealthAnalyticsSettings = {};

    /**
     * Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.organizations.virtualMachineThreatDetectionSettings = {};

    /**
     * Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.virtualMachineThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.organizations.rapidVulnerabilityDetectionSettings = {};

    /**
     * Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.rapidVulnerabilityDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.organizations.webSecurityScannerSettings = {};

    /**
     * Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.webSecurityScannerSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.folders = {};

    /**
     * Get the SecurityCenterSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.getSecurityCenterSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.getContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the ContainerThreatDetectionSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.updateContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.getEventThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the EventThreatDetectionSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.updateEventThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.getSecurityHealthAnalyticsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the SecurityHealthAnalyticsSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.updateSecurityHealthAnalyticsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.getVirtualMachineThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the VirtualMachineThreatDetectionSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.updateVirtualMachineThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.getRapidVulnerabilityDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the RapidVulnerabilityDetectionSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.updateRapidVulnerabilityDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.getWebSecurityScannerSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the WebSecurityScannerSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.updateWebSecurityScannerSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.containerThreatDetectionSettings = {};

    /**
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.containerThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.folders.eventThreatDetectionSettings = {};

    /**
     * Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.folders.securityHealthAnalyticsSettings = {};

    /**
     * Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.folders.virtualMachineThreatDetectionSettings = {};

    /**
     * Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.virtualMachineThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.folders.rapidVulnerabilityDetectionSettings = {};

    /**
     * Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.rapidVulnerabilityDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.folders.webSecurityScannerSettings = {};

    /**
     * Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.webSecurityScannerSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.projects = {};

    /**
     * Get the SecurityCenterSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.getSecurityCenterSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.getContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the ContainerThreatDetectionSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.updateContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.getEventThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the EventThreatDetectionSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.updateEventThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.getSecurityHealthAnalyticsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the SecurityHealthAnalyticsSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.updateSecurityHealthAnalyticsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.getVirtualMachineThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the VirtualMachineThreatDetectionSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.updateVirtualMachineThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.getRapidVulnerabilityDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the RapidVulnerabilityDetectionSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.updateRapidVulnerabilityDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.getWebSecurityScannerSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the WebSecurityScannerSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.updateWebSecurityScannerSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations = {};

    this.projects.locations.clusters = {};

    /**
     * Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.getContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the ContainerThreatDetectionSettings resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.updateContainerThreatDetectionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.clusters.containerThreatDetectionSettings = {};

    /**
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.clusters.containerThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.projects.containerThreatDetectionSettings = {};

    /**
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.containerThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.projects.eventThreatDetectionSettings = {};

    /**
     * Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.projects.securityHealthAnalyticsSettings = {};

    /**
     * Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.projects.virtualMachineThreatDetectionSettings = {};

    /**
     * Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.virtualMachineThreatDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.projects.rapidVulnerabilityDetectionSettings = {};

    /**
     * Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.rapidVulnerabilityDetectionSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);

    this.projects.webSecurityScannerSettings = {};

    /**
     * Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {boolean} apiParams.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.webSecurityScannerSettings.calculate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', apiParams, clientConfig);
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
