
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://admob.googleapis.com/';
    this._servicePath = '';


    this.accounts = {};

    /**
     * Gets information about the specified AdMob publisher account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name of the publisher account to retrieve. Example: accounts/pub-9876543210987654
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of accounts to return.
     * @param {string} apiParams.pageToken - The value returned by the last `ListPublisherAccountsResponse`; indicates that this is a continuation of a prior `ListPublisherAccounts` call, and that the system should return the next page of data.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/accounts', 'GET', apiParams, clientConfig);

    this.accounts.networkReport = {};

    /**
     * Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.networkReport.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/networkReport:generate', 'POST', apiParams, clientConfig);

    this.accounts.mediationReport = {};

    /**
     * Generates an AdMob Mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.mediationReport.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/mediationReport:generate', 'POST', apiParams, clientConfig);

    this.accounts.campaignReport = {};

    /**
     * Generates Campaign Report based on provided specifications.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.campaignReport.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/campaignReport:generate', 'POST', apiParams, clientConfig);

    this.accounts.apps = {};

    /**
     * Creates an app under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the account for which the app is being created. Example: accounts/pub-9876543210987654
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.apps.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/apps', 'POST', apiParams, clientConfig);

    /**
     * List the apps under the specified AdMob account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of apps to return. If unspecified or 0, at most 10,000 apps will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListAppsResponse`; indicates that this is a continuation of a prior `ListApps` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the account to list apps for. Example: accounts/pub-9876543210987654
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.apps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/apps', 'GET', apiParams, clientConfig);

    this.accounts.adUnits = {};

    /**
     * Creates an ad unit under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the account to create the specified ad unit for. Example: accounts/pub-9876543210987654
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.adUnits.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/adUnits', 'POST', apiParams, clientConfig);

    /**
     * List the ad units under the specified AdMob account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of ad units to return. If unspecified or 0, at most 10,000 ad units will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListAdUnitsResponse`; indicates that this is a continuation of a prior `ListAdUnits` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the account to list ad units for. Example: accounts/pub-9876543210987654
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.adUnits.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/adUnits', 'GET', apiParams, clientConfig);

    this.accounts.adUnits.adUnitMappings = {};

    /**
     * List ad unit mappings under the specified AdMob account and ad unit. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter string that uses [EBNF grammar syntax](https://google.aip.dev/assets/misc/ebnf-filtering.txt). Possible field to filter by is: - "DISPLAY_NAME" Possible filter function is: - `IN`: Used to filter fields that represent a singleton including "DISPLAY_NAME". The filter functions can be added together using `AND`. `OR` functionality is not supported. Example: filter: IN(DISPLAY_NAME, "Test Ad Unit Mapping 1", "Test Ad Unit Mapping 2")
     * @param {integer} apiParams.pageSize - The maximum number of ad unit mappings to return. If unspecified or 0, at most 10,000 ad unit mappings will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListAdUnitMappings` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent which owns this collection of ad unit mappings. Format: accounts/{publisher_id}/adUnits/{ad_unit_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.adUnits.adUnitMappings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/adUnitMappings', 'GET', apiParams, clientConfig);

    /**
     * Create an ad unit mapping under the specific AdMob account and ad unit. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent which owns the ad unit mapping. Format: accounts/{publisher_id}/adUnits/{ad_unit_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.adUnits.adUnitMappings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/adUnitMappings', 'POST', apiParams, clientConfig);

    this.accounts.mediationGroups = {};

    /**
     * List mediation groups under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter string that uses [EBNF grammar syntax](https://google.aip.dev/assets/misc/ebnf-filtering.txt). Possible fields to filter by are: - "AD_SOURCE_IDS" - "AD_UNIT_IDS" - "APP_IDS" - "DISPLAY_NAME" - "FORMAT" - "MEDIATION_GROUP_ID" - "PLATFORM" - "STATE" - "TARGETED_REGION_CODES" Possible filter functions are: - `IN`: Used to filter fields that represent a singleton including "MEDIATION_GROUP_ID", "DISPLAY_NAME", "STATE", "PLATFORM", and "FORMAT". - `CONTAINS_ANY`: Used to filter fields that represent a collection including "AD_SOURCE_IDS", "AD_UNIT_IDS", "APP_IDS", and "TARGETED_REGION_CODES". The filter functions can be added together using `AND`. `OR` functionality is not supported. Example: filter: IN(DISPLAY_NAME, "Test Group 1", "Test Group 2") AND IN(PLATFORM, "ANDROID") AND CONTAINS_ANY(AD_SOURCE_IDS, "5450213213286189855")
     * @param {integer} apiParams.pageSize - The maximum number of mediation groups to return. If unspecified or 0, at most 10,000 mediation groups will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListMediationGroupsResponse`; indicates that this is a continuation of a prior `ListMediationGroups` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the account to list mediation groups for. Example: accounts/pub-9876543210987654
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.mediationGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/mediationGroups', 'GET', apiParams, clientConfig);

    /**
     * Create a mediation group under the specific AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent which owns the mediation group. Format: accounts/{publisher_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.mediationGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/mediationGroups', 'POST', apiParams, clientConfig);

    /**
     * Update the specified mediation group under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name for this mediation group. Format is: accounts/{publisher_id}/mediationGroups/{mediation_group_id} Example: accounts/pub-9876543210987654/mediationGroups/0123456789
     * @param {string} apiParams.updateMask - List of mediation group fields to be updated. Updates to repeated fields such as items in a list will fully replace the existing value(s) with the new value(s). Updates to individual values in a map can be done by indexing by the key. The following field masks are supported for mediation group updates: - "mediation_group_lines[\"{mediation_group_line_id}\"]" clang-format off - "mediation_group_lines[\"{mediation_group_line_id}\"].ad_unit_mappings[\"{ad_unit_id}\"]" clang-format on - "mediation_group_lines[\"{mediation_group_line_id}\"].cpm_micros" - "mediation_group_lines[\"{mediation_group_line_id}\"].cpm_mode" - "mediation_group_lines[\"{mediation_group_line_id}\"].state" - "mediation_group_lines[\"{mediation_group_line_id}\"].display_name" - "targeting.ad_unit_ids" To update a mediation group with a new mediation group line, use a distinct negative number for the "mediation_group_line_id". For Example: update_mask { paths: "mediation_group_lines[\"123456789012345\"].cpm_micros" }
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.mediationGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    this.accounts.mediationGroups.mediationAbExperiments = {};

    /**
     * Create an A/B testing experiment for a specified AdMob account and a mediation group. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent which owns the mediation group. Format: accounts/{publisher_id}/mediationGroups/{mediation_group_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.mediationGroups.mediationAbExperiments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/mediationAbExperiments', 'POST', apiParams, clientConfig);

    /**
     * Stop the mediation A/B experiment and choose a variant. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Name of the mediation group, the experiment for which to choose a variant for. Example: accounts/pub-9876543210987654/mediationGroups/0123456789/ mediationAbExperiments
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.mediationGroups.mediationAbExperiments.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}:stop', 'POST', apiParams, clientConfig);

    this.accounts.adUnitMappings = {};

    /**
     * Batch create the ad unit mappings under the specific AdMob account. The maximum allowed batch size is 100. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The AdMob account which owns this collection of ad unit mappings. Format: accounts/{publisher_id} See https://support.google.com/admob/answer/2784578 for instructions on how to find your AdMob publisher ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.adUnitMappings.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/adUnitMappings:batchCreate', 'POST', apiParams, clientConfig);

    this.accounts.adSources = {};

    /**
     * List the ad sources.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of ad sources to return. If unspecified or 0, at most 10,000 ad sources will be returned. The maximum value is 20,000; values above 10,000 will be coerced to 20,000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListAdSources` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent which owns this collection of ad sources. Format: accounts/{publisher_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.adSources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/adSources', 'GET', apiParams, clientConfig);

    this.accounts.adSources.adapters = {};

    /**
     * List the adapters of the ad source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of adapters to return. If unspecified or 0, at most 10,000 adapters will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListAdapters` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent which owns this collection of adapters. Format: accounts/{publisher_id}/adSources/{ad_source_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.adSources.adapters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/adapters', 'GET', apiParams, clientConfig);
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
