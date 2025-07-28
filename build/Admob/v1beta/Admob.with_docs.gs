
/**
 * Google Apps Script client library for the AdMob API
 * Documentation URL: https://developers.google.com/admob/api/
 * @class
 */
class Admob {
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
    this._rootUrl = 'https://admob.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};

    /**
     * Gets information about the specified AdMob publisher account.
     * @param {string} params.name - (Required) Resource name of the publisher account to retrieve. Example: accounts/pub-9876543210987654
     * @return {object} The API response object.
     */
    this.accounts.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
     * @param {integer} params.pageSize - Maximum number of accounts to return.
     * @param {string} params.pageToken - The value returned by the last `ListPublisherAccountsResponse`; indicates that this is a continuation of a prior `ListPublisherAccounts` call, and that the system should return the next page of data.
     * @return {object} The API response object.
     */
    this.accounts.list = (params) => this._makeRequest('v1beta/accounts', 'GET', params);

    this.accounts.networkReport = {};

    /**
     * Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
     * @param {string} params.parent - (Required) Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.networkReport.generate = (params) => this._makeRequest('v1beta/{+parent}/networkReport:generate', 'POST', params);

    this.accounts.mediationReport = {};

    /**
     * Generates an AdMob Mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
     * @param {string} params.parent - (Required) Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.mediationReport.generate = (params) => this._makeRequest('v1beta/{+parent}/mediationReport:generate', 'POST', params);

    this.accounts.campaignReport = {};

    /**
     * Generates Campaign Report based on provided specifications.
     * @param {string} params.parent - (Required) Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.campaignReport.generate = (params) => this._makeRequest('v1beta/{+parent}/campaignReport:generate', 'POST', params);

    this.accounts.apps = {};

    /**
     * Creates an app under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {string} params.parent - (Required) Required. Resource name of the account for which the app is being created. Example: accounts/pub-9876543210987654
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.apps.create = (params) => this._makeRequest('v1beta/{+parent}/apps', 'POST', params);

    /**
     * List the apps under the specified AdMob account.
     * @param {integer} params.pageSize - The maximum number of apps to return. If unspecified or 0, at most 10,000 apps will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     * @param {string} params.pageToken - The value returned by the last `ListAppsResponse`; indicates that this is a continuation of a prior `ListApps` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Resource name of the account to list apps for. Example: accounts/pub-9876543210987654
     * @return {object} The API response object.
     */
    this.accounts.apps.list = (params) => this._makeRequest('v1beta/{+parent}/apps', 'GET', params);

    this.accounts.adUnits = {};

    /**
     * Creates an ad unit under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {string} params.parent - (Required) Required. Resource name of the account to create the specified ad unit for. Example: accounts/pub-9876543210987654
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.adUnits.create = (params) => this._makeRequest('v1beta/{+parent}/adUnits', 'POST', params);

    /**
     * List the ad units under the specified AdMob account.
     * @param {integer} params.pageSize - The maximum number of ad units to return. If unspecified or 0, at most 10,000 ad units will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     * @param {string} params.pageToken - The value returned by the last `ListAdUnitsResponse`; indicates that this is a continuation of a prior `ListAdUnits` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Resource name of the account to list ad units for. Example: accounts/pub-9876543210987654
     * @return {object} The API response object.
     */
    this.accounts.adUnits.list = (params) => this._makeRequest('v1beta/{+parent}/adUnits', 'GET', params);

    this.accounts.adUnits.adUnitMappings = {};

    /**
     * List ad unit mappings under the specified AdMob account and ad unit. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {string} params.filter - The filter string that uses [EBNF grammar syntax](https://google.aip.dev/assets/misc/ebnf-filtering.txt). Possible field to filter by is: - "DISPLAY_NAME" Possible filter function is: - `IN`: Used to filter fields that represent a singleton including "DISPLAY_NAME". The filter functions can be added together using `AND`. `OR` functionality is not supported. Example: filter: IN(DISPLAY_NAME, "Test Ad Unit Mapping 1", "Test Ad Unit Mapping 2")
     * @param {integer} params.pageSize - The maximum number of ad unit mappings to return. If unspecified or 0, at most 10,000 ad unit mappings will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     * @param {string} params.pageToken - A page token, received from a previous `ListAdUnitMappings` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent which owns this collection of ad unit mappings. Format: accounts/{publisher_id}/adUnits/{ad_unit_id}
     * @return {object} The API response object.
     */
    this.accounts.adUnits.adUnitMappings.list = (params) => this._makeRequest('v1beta/{+parent}/adUnitMappings', 'GET', params);

    /**
     * Create an ad unit mapping under the specific AdMob account and ad unit. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {string} params.parent - (Required) Required. The parent which owns the ad unit mapping. Format: accounts/{publisher_id}/adUnits/{ad_unit_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.adUnits.adUnitMappings.create = (params) => this._makeRequest('v1beta/{+parent}/adUnitMappings', 'POST', params);

    this.accounts.mediationGroups = {};

    /**
     * List mediation groups under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {string} params.filter - The filter string that uses [EBNF grammar syntax](https://google.aip.dev/assets/misc/ebnf-filtering.txt). Possible fields to filter by are: - "AD_SOURCE_IDS" - "AD_UNIT_IDS" - "APP_IDS" - "DISPLAY_NAME" - "FORMAT" - "MEDIATION_GROUP_ID" - "PLATFORM" - "STATE" - "TARGETED_REGION_CODES" Possible filter functions are: - `IN`: Used to filter fields that represent a singleton including "MEDIATION_GROUP_ID", "DISPLAY_NAME", "STATE", "PLATFORM", and "FORMAT". - `CONTAINS_ANY`: Used to filter fields that represent a collection including "AD_SOURCE_IDS", "AD_UNIT_IDS", "APP_IDS", and "TARGETED_REGION_CODES". The filter functions can be added together using `AND`. `OR` functionality is not supported. Example: filter: IN(DISPLAY_NAME, "Test Group 1", "Test Group 2") AND IN(PLATFORM, "ANDROID") AND CONTAINS_ANY(AD_SOURCE_IDS, "5450213213286189855")
     * @param {integer} params.pageSize - The maximum number of mediation groups to return. If unspecified or 0, at most 10,000 mediation groups will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     * @param {string} params.pageToken - The value returned by the last `ListMediationGroupsResponse`; indicates that this is a continuation of a prior `ListMediationGroups` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Resource name of the account to list mediation groups for. Example: accounts/pub-9876543210987654
     * @return {object} The API response object.
     */
    this.accounts.mediationGroups.list = (params) => this._makeRequest('v1beta/{+parent}/mediationGroups', 'GET', params);

    /**
     * Create a mediation group under the specific AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {string} params.parent - (Required) Required. The parent which owns the mediation group. Format: accounts/{publisher_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.mediationGroups.create = (params) => this._makeRequest('v1beta/{+parent}/mediationGroups', 'POST', params);

    /**
     * Update the specified mediation group under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {string} params.name - (Required) Resource name for this mediation group. Format is: accounts/{publisher_id}/mediationGroups/{mediation_group_id} Example: accounts/pub-9876543210987654/mediationGroups/0123456789
     * @param {string} params.updateMask - List of mediation group fields to be updated. Updates to repeated fields such as items in a list will fully replace the existing value(s) with the new value(s). Updates to individual values in a map can be done by indexing by the key. The following field masks are supported for mediation group updates: - "mediation_group_lines[\"{mediation_group_line_id}\"]" clang-format off - "mediation_group_lines[\"{mediation_group_line_id}\"].ad_unit_mappings[\"{ad_unit_id}\"]" clang-format on - "mediation_group_lines[\"{mediation_group_line_id}\"].cpm_micros" - "mediation_group_lines[\"{mediation_group_line_id}\"].cpm_mode" - "mediation_group_lines[\"{mediation_group_line_id}\"].state" - "mediation_group_lines[\"{mediation_group_line_id}\"].display_name" - "targeting.ad_unit_ids" To update a mediation group with a new mediation group line, use a distinct negative number for the "mediation_group_line_id". For Example: update_mask { paths: "mediation_group_lines[\"123456789012345\"].cpm_micros" }
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.mediationGroups.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    this.accounts.mediationGroups.mediationAbExperiments = {};

    /**
     * Create an A/B testing experiment for a specified AdMob account and a mediation group. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {string} params.parent - (Required) Required. The parent which owns the mediation group. Format: accounts/{publisher_id}/mediationGroups/{mediation_group_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.mediationGroups.mediationAbExperiments.create = (params) => this._makeRequest('v1beta/{+parent}/mediationAbExperiments', 'POST', params);

    /**
     * Stop the mediation A/B experiment and choose a variant. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {string} params.name - (Required) Name of the mediation group, the experiment for which to choose a variant for. Example: accounts/pub-9876543210987654/mediationGroups/0123456789/ mediationAbExperiments
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.mediationGroups.mediationAbExperiments.stop = (params) => this._makeRequest('v1beta/{+name}:stop', 'POST', params);

    this.accounts.adUnitMappings = {};

    /**
     * Batch create the ad unit mappings under the specific AdMob account. The maximum allowed batch size is 100. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {string} params.parent - (Required) Required. The AdMob account which owns this collection of ad unit mappings. Format: accounts/{publisher_id} See https://support.google.com/admob/answer/2784578 for instructions on how to find your AdMob publisher ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.adUnitMappings.batchCreate = (params) => this._makeRequest('v1beta/{+parent}/adUnitMappings:batchCreate', 'POST', params);

    this.accounts.adSources = {};

    /**
     * List the ad sources.
     * @param {integer} params.pageSize - The maximum number of ad sources to return. If unspecified or 0, at most 10,000 ad sources will be returned. The maximum value is 20,000; values above 10,000 will be coerced to 20,000.
     * @param {string} params.pageToken - A page token, received from a previous `ListAdSources` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent which owns this collection of ad sources. Format: accounts/{publisher_id}
     * @return {object} The API response object.
     */
    this.accounts.adSources.list = (params) => this._makeRequest('v1beta/{+parent}/adSources', 'GET', params);

    this.accounts.adSources.adapters = {};

    /**
     * List the adapters of the ad source.
     * @param {integer} params.pageSize - The maximum number of adapters to return. If unspecified or 0, at most 10,000 adapters will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     * @param {string} params.pageToken - A page token, received from a previous `ListAdapters` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent which owns this collection of adapters. Format: accounts/{publisher_id}/adSources/{ad_source_id}
     * @return {object} The API response object.
     */
    this.accounts.adSources.adapters.list = (params) => this._makeRequest('v1beta/{+parent}/adapters', 'GET', params);
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
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
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
