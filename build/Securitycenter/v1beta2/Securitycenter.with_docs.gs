
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

    /**
     * Get the SecurityCenterSettings resource.
     * @param {string} params.name - (Required) Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings
     * @return {object} The API response object.
     */
    this.organizations.getSecurityCenterSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Get the Subscription resource.
     * @param {string} params.name - (Required) Required. The name of the subscription to retrieve. Format: organizations/{organization}/subscription
     * @return {object} The API response object.
     */
    this.organizations.getSubscription = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @return {object} The API response object.
     */
    this.organizations.getContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the ContainerThreatDetectionSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.updateContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @return {object} The API response object.
     */
    this.organizations.getEventThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the EventThreatDetectionSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.updateEventThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @return {object} The API response object.
     */
    this.organizations.getSecurityHealthAnalyticsSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the SecurityHealthAnalyticsSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.updateSecurityHealthAnalyticsSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @return {object} The API response object.
     */
    this.organizations.getVirtualMachineThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the VirtualMachineThreatDetectionSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.updateVirtualMachineThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @return {object} The API response object.
     */
    this.organizations.getRapidVulnerabilityDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the RapidVulnerabilityDetectionSettings resource.
     * @param {string} params.name - (Required) The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.updateRapidVulnerabilityDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @return {object} The API response object.
     */
    this.organizations.getWebSecurityScannerSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the WebSecurityScannerSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.updateWebSecurityScannerSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    this.organizations.containerThreatDetectionSettings = {};

    /**
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.organizations.containerThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.organizations.eventThreatDetectionSettings = {};

    /**
     * Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.organizations.eventThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.organizations.securityHealthAnalyticsSettings = {};

    /**
     * Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.organizations.securityHealthAnalyticsSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.organizations.virtualMachineThreatDetectionSettings = {};

    /**
     * Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.organizations.virtualMachineThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.organizations.rapidVulnerabilityDetectionSettings = {};

    /**
     * Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @return {object} The API response object.
     */
    this.organizations.rapidVulnerabilityDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.organizations.webSecurityScannerSettings = {};

    /**
     * Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.organizations.webSecurityScannerSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.folders = {};

    /**
     * Get the SecurityCenterSettings resource.
     * @param {string} params.name - (Required) Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings
     * @return {object} The API response object.
     */
    this.folders.getSecurityCenterSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @return {object} The API response object.
     */
    this.folders.getContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the ContainerThreatDetectionSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.updateContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @return {object} The API response object.
     */
    this.folders.getEventThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the EventThreatDetectionSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.updateEventThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @return {object} The API response object.
     */
    this.folders.getSecurityHealthAnalyticsSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the SecurityHealthAnalyticsSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.updateSecurityHealthAnalyticsSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @return {object} The API response object.
     */
    this.folders.getVirtualMachineThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the VirtualMachineThreatDetectionSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.updateVirtualMachineThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @return {object} The API response object.
     */
    this.folders.getRapidVulnerabilityDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the RapidVulnerabilityDetectionSettings resource.
     * @param {string} params.name - (Required) The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.updateRapidVulnerabilityDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @return {object} The API response object.
     */
    this.folders.getWebSecurityScannerSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the WebSecurityScannerSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.updateWebSecurityScannerSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    this.folders.containerThreatDetectionSettings = {};

    /**
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.folders.containerThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.folders.eventThreatDetectionSettings = {};

    /**
     * Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.folders.eventThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.folders.securityHealthAnalyticsSettings = {};

    /**
     * Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.folders.securityHealthAnalyticsSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.folders.virtualMachineThreatDetectionSettings = {};

    /**
     * Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.folders.virtualMachineThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.folders.rapidVulnerabilityDetectionSettings = {};

    /**
     * Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @return {object} The API response object.
     */
    this.folders.rapidVulnerabilityDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.folders.webSecurityScannerSettings = {};

    /**
     * Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.folders.webSecurityScannerSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.projects = {};

    /**
     * Get the SecurityCenterSettings resource.
     * @param {string} params.name - (Required) Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings
     * @return {object} The API response object.
     */
    this.projects.getSecurityCenterSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @return {object} The API response object.
     */
    this.projects.getContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the ContainerThreatDetectionSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.updateContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @return {object} The API response object.
     */
    this.projects.getEventThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the EventThreatDetectionSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.updateEventThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @return {object} The API response object.
     */
    this.projects.getSecurityHealthAnalyticsSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the SecurityHealthAnalyticsSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.updateSecurityHealthAnalyticsSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @return {object} The API response object.
     */
    this.projects.getVirtualMachineThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the VirtualMachineThreatDetectionSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.updateVirtualMachineThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @return {object} The API response object.
     */
    this.projects.getRapidVulnerabilityDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the RapidVulnerabilityDetectionSettings resource.
     * @param {string} params.name - (Required) The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.updateRapidVulnerabilityDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @return {object} The API response object.
     */
    this.projects.getWebSecurityScannerSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the WebSecurityScannerSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.updateWebSecurityScannerSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    this.projects.locations = {};

    this.projects.locations.clusters = {};

    /**
     * Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
     * @param {string} params.name - (Required) Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.getContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Update the ContainerThreatDetectionSettings resource.
     * @param {string} params.name - (Required) Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.updateContainerThreatDetectionSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    this.projects.locations.clusters.containerThreatDetectionSettings = {};

    /**
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.projects.locations.clusters.containerThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.projects.containerThreatDetectionSettings = {};

    /**
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.projects.containerThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.projects.eventThreatDetectionSettings = {};

    /**
     * Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.projects.eventThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.projects.securityHealthAnalyticsSettings = {};

    /**
     * Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.projects.securityHealthAnalyticsSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.projects.virtualMachineThreatDetectionSettings = {};

    /**
     * Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
    this.projects.virtualMachineThreatDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.projects.rapidVulnerabilityDetectionSettings = {};

    /**
     * Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings
     * @return {object} The API response object.
     */
    this.projects.rapidVulnerabilityDetectionSettings.calculate = (params) => this._makeRequest('v1beta2/{+name}:calculate', 'GET', params);

    this.projects.webSecurityScannerSettings = {};

    /**
     * Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @param {string} params.name - (Required) Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     * @param {boolean} params.showEligibleModulesOnly - Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     * @return {object} The API response object.
     */
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
