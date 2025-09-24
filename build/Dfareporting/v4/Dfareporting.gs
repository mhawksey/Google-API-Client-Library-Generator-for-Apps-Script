
/**
 * Google Apps Script client library for the Campaign Manager 360 API
 * Documentation URL: https://developers.google.com/doubleclick-advertisers/
 * @class
 */
class Dfareporting {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://dfareporting.googleapis.com/';
    this._servicePath = 'dfareporting/v4/';


    this.accountPermissionGroups = {};

    /**
     * Gets one account permission group by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Account permission group ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountPermissionGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountPermissionGroups/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the list of account permission groups.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountPermissionGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountPermissionGroups', 'GET', apiParams, clientConfig);

    this.accountPermissions = {};

    /**
     * Gets one account permission by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Account permission ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountPermissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountPermissions/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the list of account permissions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountPermissions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountPermissions', 'GET', apiParams, clientConfig);

    this.accounts = {};

    /**
     * Gets one account by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Account ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accounts/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the list of accounts, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.active - Select only active accounts. Don't set this field to select both active and non-active accounts.
     * @param {string} apiParams.ids - Select only accounts with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accounts', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accounts', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing account. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. Account ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accounts', 'PATCH', apiParams, clientConfig);

    this.accountActiveAdSummaries = {};

    /**
     * Gets the account's active ad summary by account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.summaryAccountId - (Required) Account ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountActiveAdSummaries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountActiveAdSummaries/{+summaryAccountId}', 'GET', apiParams, clientConfig);

    this.accountUserProfiles = {};

    /**
     * Gets one account user profile by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) User profile ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountUserProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/accountUserProfiles/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new account user profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountUserProfiles.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of account user profiles, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.active - Select only active user profiles.
     * @param {string} apiParams.ids - Select only user profiles with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {string} apiParams.subaccountId - Select only user profiles with the specified subaccount ID.
     * @param {string} apiParams.userRoleId - Select only user profiles with the specified user role ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountUserProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing account user profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountUserProfiles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing account user profile. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. AccountUserProfile ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountUserProfiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/accountUserProfiles', 'PATCH', apiParams, clientConfig);

    this.ads = {};

    /**
     * Gets one ad by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Ad ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.ads.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/ads/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new ad.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.ads.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/ads', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of ads, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.active - Select only active ads.
     * @param {string} apiParams.advertiserId - Select only ads with this advertiser ID.
     * @param {boolean} apiParams.archived - Select only archived ads.
     * @param {string} apiParams.audienceSegmentIds - Select only ads with these audience segment IDs.
     * @param {string} apiParams.campaignIds - Select only ads with these campaign IDs.
     * @param {string} apiParams.compatibility - Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
     * @param {string} apiParams.creativeIds - Select only ads with these creative IDs assigned.
     * @param {string} apiParams.creativeOptimizationConfigurationIds - Select only ads with these creative optimization configuration IDs.
     * @param {boolean} apiParams.dynamicClickTracker - Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.
     * @param {string} apiParams.ids - Select only ads with these IDs.
     * @param {string} apiParams.landingPageIds - Select only ads with these landing page IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.overriddenEventTagId - Select only ads with this event tag override ID.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.placementIds - Select only ads with these placement IDs assigned.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.remarketingListIds - Select only ads whose list targeting expression use these remarketing list IDs.
     * @param {string} apiParams.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
     * @param {string} apiParams.sizeIds - Select only ads with these size IDs.
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {boolean} apiParams.sslCompliant - Select only ads that are SSL-compliant.
     * @param {boolean} apiParams.sslRequired - Select only ads that require SSL.
     * @param {string} apiParams.type - Select only ads with these types.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.ads.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/ads', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing ad.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.ads.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/ads', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing ad. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. RemarketingList ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.ads.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/ads', 'PATCH', apiParams, clientConfig);

    this.advertiserGroups = {};

    /**
     * Deletes an existing advertiser group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Advertiser group ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertiserGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups/{+id}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets one advertiser group by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Advertiser group ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertiserGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new advertiser group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertiserGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.ids - Select only advertiser groups with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertiserGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing advertiser group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertiserGroups.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing advertiser group. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. Advertiser Group ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertiserGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserGroups', 'PATCH', apiParams, clientConfig);

    this.advertisers = {};

    /**
     * Gets one advertiser by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Advertiser ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertisers/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new advertiser.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of advertisers, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserGroupIds - Select only advertisers with these advertiser group IDs.
     * @param {string} apiParams.floodlightConfigurationIds - Select only advertisers with these floodlight configuration IDs.
     * @param {string} apiParams.ids - Select only advertisers with these IDs.
     * @param {boolean} apiParams.includeAdvertisersWithoutGroupsOnly - Select only advertisers which do not belong to any advertiser group.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {boolean} apiParams.onlyParent - Select only advertisers which use another advertiser's floodlight configuration.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser" .
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {string} apiParams.status - Select only advertisers with the specified status.
     * @param {string} apiParams.subaccountId - Select only advertisers with these subaccount IDs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing advertiser.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing advertiser. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. Advertiser ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertisers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertisers', 'PATCH', apiParams, clientConfig);

    this.billingAssignments = {};

    /**
     * Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.billingProfileId - (Required) Billing profile ID of this billing assignment.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAssignments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingAssignments', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of billing assignments.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.billingProfileId - (Required) Billing profile ID of this billing assignment.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAssignments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingAssignments', 'GET', apiParams, clientConfig);

    this.billingProfiles = {};

    /**
     * Gets one billing profile by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Billing Profile ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of billing profiles, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.currency_code - Select only billing profile with currency.
     * @param {string} apiParams.ids - Select only billing profile with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.name - Allows searching for billing profiles by name. Wildcards (*) are allowed. For example, "profile*2020" will return objects with names like "profile June 2020", "profile April 2020", or simply "profile 2020". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "profile" will match objects with name "my profile", "profile 2021", or simply "profile".
     * @param {boolean} apiParams.onlySuggestion - Select only billing profile which is suggested for the currency_code & subaccount_id using the Billing Suggestion API.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {string} apiParams.status - Select only billing profile with the specified status.
     * @param {string} apiParams.subaccountIds - Select only billing profile with the specified subaccount.When only_suggestion is true, only a single subaccount_id is supported.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/billingProfiles', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing billing profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingProfiles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/billingProfiles', 'PUT', apiParams, clientConfig);

    this.billingRates = {};

    /**
     * Retrieves a list of billing rates. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.billingProfileId - (Required) Billing profile ID of this billing rate.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingRates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/billingProfiles/{+billingProfileId}/billingRates', 'GET', apiParams, clientConfig);

    this.browsers = {};

    /**
     * Retrieves a list of browsers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.browsers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/browsers', 'GET', apiParams, clientConfig);

    this.campaignCreativeAssociations = {};

    /**
     * Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.campaignId - (Required) Campaign ID in this association.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.campaignCreativeAssociations.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/campaigns/{+campaignId}/campaignCreativeAssociations', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.campaignId - (Required) Campaign ID in this association.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.campaignCreativeAssociations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/campaigns/{+campaignId}/campaignCreativeAssociations', 'GET', apiParams, clientConfig);

    this.campaigns = {};

    /**
     * Gets one campaign by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Campaign ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.campaigns.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/campaigns/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new campaign.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.campaigns.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of campaigns, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserGroupIds - Select only campaigns whose advertisers belong to these advertiser groups.
     * @param {string} apiParams.advertiserIds - Select only campaigns that belong to these advertisers.
     * @param {boolean} apiParams.archived - Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.
     * @param {boolean} apiParams.atLeastOneOptimizationActivity - Select only campaigns that have at least one optimization activity.
     * @param {string} apiParams.excludedIds - Exclude campaigns with these IDs.
     * @param {string} apiParams.ids - Select only campaigns with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.overriddenEventTagId - Select only campaigns that have overridden this event tag ID.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {string} apiParams.subaccountId - Select only campaigns that belong to this subaccount.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.campaigns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing campaign.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.campaigns.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing campaign. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. Campaign ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.campaigns.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/campaigns', 'PATCH', apiParams, clientConfig);

    this.changeLogs = {};

    /**
     * Gets one change log by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Change log ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.changeLogs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/changeLogs/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of change logs. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.action - Select only change logs with the specified action.
     * @param {string} apiParams.ids - Select only change logs with these IDs.
     * @param {string} apiParams.maxChangeTime - Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.minChangeTime - Select only change logs whose change time is after the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
     * @param {string} apiParams.objectIds - Select only change logs with these object IDs.
     * @param {string} apiParams.objectType - Select only change logs with the specified object type.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Select only change logs whose object ID, user name, old or new values match the search string.
     * @param {string} apiParams.userProfileIds - Select only change logs with these user profile IDs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.changeLogs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/changeLogs', 'GET', apiParams, clientConfig);

    this.cities = {};

    /**
     * Retrieves a list of cities, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.countryDartIds - Select only cities from these countries.
     * @param {string} apiParams.dartIds - Select only cities with these DART IDs.
     * @param {string} apiParams.namePrefix - Select only cities with names starting with this prefix.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.regionDartIds - Select only cities from these regions.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.cities.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/cities', 'GET', apiParams, clientConfig);

    this.connectionTypes = {};

    /**
     * Gets one connection type by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Connection type ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.connectionTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/connectionTypes/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of connection types.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.connectionTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/connectionTypes', 'GET', apiParams, clientConfig);

    this.contentCategories = {};

    /**
     * Deletes an existing content category.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Content category ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.contentCategories.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/contentCategories/{+id}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets one content category by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Content category ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.contentCategories.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/contentCategories/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new content category.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.contentCategories.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of content categories, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.ids - Select only content categories with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.contentCategories.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing content category.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.contentCategories.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing content category. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. ContentCategory ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.contentCategories.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/contentCategories', 'PATCH', apiParams, clientConfig);

    this.conversions = {};

    /**
     * Inserts conversions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conversions.batchinsert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/conversions/batchinsert', 'POST', apiParams, clientConfig);

    /**
     * Updates existing conversions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conversions.batchupdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/conversions/batchupdate', 'POST', apiParams, clientConfig);

    this.countries = {};

    /**
     * Gets one country by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dartId - (Required) Country DART ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.countries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/countries/{+dartId}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of countries.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.countries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/countries', 'GET', apiParams, clientConfig);

    this.creativeAssets = {};

    /**
     * Inserts a new creative asset.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Advertiser ID of this creative. This is a required field.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeAssets.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/dfareporting/v4/userprofiles/{+profileId}/creativeAssets/{+advertiserId}/creativeAssets' : 'userprofiles/{+profileId}/creativeAssets/{+advertiserId}/creativeAssets';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.creativeFields = {};

    /**
     * Deletes an existing creative field.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Creative Field ID
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeFields.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+id}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets one creative field by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Creative Field ID
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeFields.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new creative field.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeFields.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of creative fields, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserIds - Select only creative fields that belong to these advertisers.
     * @param {string} apiParams.ids - Select only creative fields with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeFields.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing creative field.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeFields.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing creative field. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) CreativeField ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeFields.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields', 'PATCH', apiParams, clientConfig);

    this.creativeFieldValues = {};

    /**
     * Deletes an existing creative field value.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.creativeFieldId - (Required) Creative field ID for this creative field value.
     * @param {string} apiParams.id - (Required) Creative Field Value ID
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeFieldValues.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues/{+id}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets one creative field value by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.creativeFieldId - (Required) Creative field ID for this creative field value.
     * @param {string} apiParams.id - (Required) Creative Field Value ID
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeFieldValues.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new creative field value.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.creativeFieldId - (Required) Creative field ID for this creative field value.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeFieldValues.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of creative field values, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.creativeFieldId - (Required) Creative field ID for this creative field value.
     * @param {string} apiParams.ids - Select only creative field values with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed.
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeFieldValues.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing creative field value.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.creativeFieldId - (Required) Creative field ID for this creative field value.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeFieldValues.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing creative field value. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.creativeFieldId - (Required) CreativeField ID.
     * @param {string} apiParams.id - (Required) CreativeFieldValue ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeFieldValues.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeFields/{+creativeFieldId}/creativeFieldValues', 'PATCH', apiParams, clientConfig);

    this.creativeGroups = {};

    /**
     * Gets one creative group by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Creative group ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeGroups/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new creative group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of creative groups, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserIds - Select only creative groups that belong to these advertisers.
     * @param {integer} apiParams.groupNumber - Select only creative groups that belong to this subgroup.
     * @param {string} apiParams.ids - Select only creative groups with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing creative group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeGroups.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing creative group. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. Creative Group ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creativeGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creativeGroups', 'PATCH', apiParams, clientConfig);

    this.creatives = {};

    /**
     * Gets one creative by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Creative ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creatives.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creatives/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new creative.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creatives.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creatives', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of creatives, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.active - Select only active creatives. Leave blank to select active and inactive creatives.
     * @param {string} apiParams.advertiserId - Select only creatives with this advertiser ID.
     * @param {boolean} apiParams.archived - Select only archived creatives. Leave blank to select archived and unarchived creatives.
     * @param {string} apiParams.campaignId - Select only creatives with this campaign ID.
     * @param {string} apiParams.companionCreativeIds - Select only in-stream video creatives with these companion IDs.
     * @param {string} apiParams.creativeFieldIds - Select only creatives with these creative field IDs.
     * @param {string} apiParams.ids - Select only creatives with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.renderingIds - Select only creatives with these rendering IDs.
     * @param {string} apiParams.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".
     * @param {string} apiParams.sizeIds - Select only creatives with these size IDs.
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {string} apiParams.studioCreativeId - Select only creatives corresponding to this Studio creative ID.
     * @param {string} apiParams.types - Select only creatives with these creative types.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creatives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creatives', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing creative.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creatives.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creatives', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing creative. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. Creative ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.creatives.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/creatives', 'PATCH', apiParams, clientConfig);

    this.dimensionValues = {};

    /**
     * Retrieves list of report dimension values for a list of filters.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - The value of the nextToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.dimensionValues.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/dimensionvalues/query', 'POST', apiParams, clientConfig);

    this.directorySites = {};

    /**
     * Gets one directory site by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Directory site ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.directorySites.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/directorySites/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new directory site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.directorySites.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/directorySites', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of directory sites, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.acceptsInStreamVideoPlacements - This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean} apiParams.acceptsInterstitialPlacements - This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean} apiParams.acceptsPublisherPaidPlacements - Select only directory sites that accept publisher paid placements. This field can be left blank.
     * @param {boolean} apiParams.active - Select only active directory sites. Leave blank to retrieve both active and inactive directory sites.
     * @param {string} apiParams.dfpNetworkCode - Select only directory sites with this Ad Manager network code.
     * @param {string} apiParams.ids - Select only directory sites with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.directorySites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/directorySites', 'GET', apiParams, clientConfig);

    this.dynamicFeeds = {};

    /**
     * Gets a dynamic feed by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dynamicFeedId - (Required) Required. Dynamic feed ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.dynamicFeeds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/dynamicFeeds/{+dynamicFeedId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new dynamic feed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.dynamicFeeds.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/dynamicFeeds', 'POST', apiParams, clientConfig);

    this.dynamicProfiles = {};

    /**
     * Gets a dynamic profile by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dynamicProfileId - (Required) Required. Dynamic profile ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.dynamicProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/dynamicProfiles/{+dynamicProfileId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new dynamic profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.dynamicProfiles.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/dynamicProfiles', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing dynamic profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.dynamicProfiles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('studio/dynamicProfiles', 'PUT', apiParams, clientConfig);

    this.dynamicTargetingKeys = {};

    /**
     * Deletes an existing dynamic targeting key.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
     * @param {string} apiParams.objectId - (Required) ID of the object of this dynamic targeting key. This is a required field.
     * @param {string} apiParams.objectType - (Required) Required. Type of the object of this dynamic targeting key. This is a required field.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.dynamicTargetingKeys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/dynamicTargetingKeys/{+objectId}', 'DELETE', apiParams, clientConfig);

    /**
     * Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.dynamicTargetingKeys.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/dynamicTargetingKeys', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of dynamic targeting keys.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - Select only dynamic targeting keys whose object has this advertiser ID.
     * @param {string} apiParams.names - Select only dynamic targeting keys exactly matching these names.
     * @param {string} apiParams.objectId - Select only dynamic targeting keys with this object ID.
     * @param {string} apiParams.objectType - Select only dynamic targeting keys with this object type.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.dynamicTargetingKeys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/dynamicTargetingKeys', 'GET', apiParams, clientConfig);

    this.eventTags = {};

    /**
     * Deletes an existing event tag.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Event tag ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventTags.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/eventTags/{+id}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets one event tag by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Event tag ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventTags.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/eventTags/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new event tag.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventTags.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of event tags, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.adId - Select only event tags that belong to this ad.
     * @param {string} apiParams.advertiserId - Select only event tags that belong to this advertiser.
     * @param {string} apiParams.campaignId - Select only event tags that belong to this campaign.
     * @param {boolean} apiParams.definitionsOnly - Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags.
     * @param {boolean} apiParams.enabled - Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well.
     * @param {string} apiParams.eventTagTypes - Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking.
     * @param {string} apiParams.ids - Select only event tags with these IDs.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventTags.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing event tag.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventTags.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing event tag. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. EventTag ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.eventTags.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/eventTags', 'PATCH', apiParams, clientConfig);

    this.files = {};

    /**
     * Retrieves a report file by its report ID and file ID. This method supports media download.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the report file.
     * @param {string} apiParams.reportId - (Required) The ID of the report.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('reports/{reportId}/files/{fileId}', 'GET', apiParams, clientConfig);

    /**
     * Lists files for a user profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - The value of the nextToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} apiParams.scope - The scope that defines which results are returned.
     * @param {string} apiParams.sortField - The field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.files.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/files', 'GET', apiParams, clientConfig);

    this.floodlightActivityGroups = {};

    /**
     * Gets one floodlight activity group by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Floodlight activity Group ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightActivityGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new floodlight activity group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightActivityGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
     * @param {string} apiParams.floodlightConfigurationId - Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {string} apiParams.ids - Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {string} apiParams.type - Select only floodlight activity groups with the specified floodlight activity group type.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightActivityGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing floodlight activity group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightActivityGroups.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing floodlight activity group. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. EventTag ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightActivityGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivityGroups', 'PATCH', apiParams, clientConfig);

    this.floodlightActivities = {};

    /**
     * Deletes an existing floodlight activity.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Floodlight activity ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightActivities.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities/{+id}', 'DELETE', apiParams, clientConfig);

    /**
     * Generates a tag for a floodlight activity.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.floodlightActivityId - Floodlight activity ID for which we want to generate a tag.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightActivities.generatetag = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities/generatetag', 'POST', apiParams, clientConfig);

    /**
     * Gets one floodlight activity by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Floodlight activity ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightActivities.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new floodlight activity.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightActivities.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {string} apiParams.floodlightActivityGroupIds - Select only floodlight activities with the specified floodlight activity group IDs.
     * @param {string} apiParams.floodlightActivityGroupName - Select only floodlight activities with the specified floodlight activity group name.
     * @param {string} apiParams.floodlightActivityGroupTagString - Select only floodlight activities with the specified floodlight activity group tag string.
     * @param {string} apiParams.floodlightActivityGroupType - Select only floodlight activities with the specified floodlight activity group type.
     * @param {string} apiParams.floodlightConfigurationId - Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {string} apiParams.ids - Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {string} apiParams.tagString - Select only floodlight activities with the specified tag string.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightActivities.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing floodlight activity.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightActivities.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing floodlight activity. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. EventTag ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightActivities.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightActivities', 'PATCH', apiParams, clientConfig);

    this.floodlightConfigurations = {};

    /**
     * Gets one floodlight configuration by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Floodlight configuration ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightConfigurations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of floodlight configurations, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.ids - Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightConfigurations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing floodlight configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightConfigurations.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing floodlight configuration. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. EventTag ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.floodlightConfigurations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/floodlightConfigurations', 'PATCH', apiParams, clientConfig);

    this.inventoryItems = {};

    /**
     * Gets one inventory item by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Inventory item ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.projectId - (Required) Project ID for order documents.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventoryItems.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/projects/{projectId}/inventoryItems/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of inventory items, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.ids - Select only inventory items with these IDs.
     * @param {boolean} apiParams.inPlan - Select only inventory items that are in plan.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.orderId - Select only inventory items that belong to specified orders.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.projectId - (Required) Project ID for order documents.
     * @param {string} apiParams.siteId - Select only inventory items that are associated with these sites.
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {string} apiParams.type - Select only inventory items with this type.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.inventoryItems.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/projects/{projectId}/inventoryItems', 'GET', apiParams, clientConfig);

    this.advertiserInvoices = {};

    /**
     * Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Advertiser ID of this invoice.
     * @param {string} apiParams.issueMonth - Month for which invoices are needed in the format YYYYMM. Required field
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertiserInvoices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertisers/{+advertiserId}/invoices', 'GET', apiParams, clientConfig);

    this.advertiserLandingPages = {};

    /**
     * Gets one landing page by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Landing page ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertiserLandingPages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new landing page.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertiserLandingPages.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of landing pages.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserIds - Select only landing pages that belong to these advertisers.
     * @param {boolean} apiParams.archived - Select only archived landing pages. Don't set this field to select both archived and non-archived landing pages.
     * @param {string} apiParams.campaignIds - Select only landing pages that are associated with these campaigns.
     * @param {string} apiParams.ids - Select only landing pages with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for landing pages by name or ID. Wildcards (*) are allowed. For example, "landingpage*2017" will return landing pages with names like "landingpage July 2017", "landingpage March 2017", or simply "landingpage 2017". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "landingpage" will match campaigns with name "my landingpage", "landingpage 2015", or simply "landingpage".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {string} apiParams.subaccountId - Select only landing pages that belong to this subaccount.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertiserLandingPages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing landing page.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertiserLandingPages.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing landing page. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. Landing Page ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.advertiserLandingPages.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/advertiserLandingPages', 'PATCH', apiParams, clientConfig);

    this.languages = {};

    /**
     * Retrieves a list of languages.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.languages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/languages', 'GET', apiParams, clientConfig);

    this.metros = {};

    /**
     * Retrieves a list of metros.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.metros.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/metros', 'GET', apiParams, clientConfig);

    this.mobileApps = {};

    /**
     * Gets one mobile app by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Mobile app ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mobileApps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/mobileApps/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves list of available mobile apps.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.directories - Select only apps from these directories.
     * @param {string} apiParams.ids - Select only apps with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "app*2015" will return objects with names like "app Jan 2018", "app Jan 2018", or simply "app 2018". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "app" will match objects with name "my app", "app 2018", or simply "app".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mobileApps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/mobileApps', 'GET', apiParams, clientConfig);

    this.mobileCarriers = {};

    /**
     * Gets one mobile carrier by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Mobile carrier ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mobileCarriers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/mobileCarriers/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of mobile carriers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.mobileCarriers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/mobileCarriers', 'GET', apiParams, clientConfig);

    this.operatingSystems = {};

    /**
     * Gets one operating system by DART ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dartId - (Required) Operating system DART ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operatingSystems.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/operatingSystems/{+dartId}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of operating systems.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operatingSystems.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/operatingSystems', 'GET', apiParams, clientConfig);

    this.operatingSystemVersions = {};

    /**
     * Gets one operating system version by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Operating system version ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operatingSystemVersions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/operatingSystemVersions/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of operating system versions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operatingSystemVersions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/operatingSystemVersions', 'GET', apiParams, clientConfig);

    this.orders = {};

    /**
     * Gets one order by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Order ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.projectId - (Required) Project ID for orders.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.orders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/projects/{projectId}/orders/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of orders, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.ids - Select only orders with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.projectId - (Required) Project ID for orders.
     * @param {string} apiParams.searchString - Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, "order*2015" will return orders with names like "order June 2015", "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order".
     * @param {string} apiParams.siteId - Select only orders that are associated with these site IDs.
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.orders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/projects/{projectId}/orders', 'GET', apiParams, clientConfig);

    this.remarketingLists = {};

    /**
     * Updates an existing remarketing list. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. RemarketingList ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.remarketingLists.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'PATCH', apiParams, clientConfig);

    /**
     * Gets one remarketing list by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Remarketing list ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.remarketingLists.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingLists/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new remarketing list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.remarketingLists.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.active - Select only active or only inactive remarketing lists.
     * @param {string} apiParams.advertiserId - (Required) Required. Select only remarketing lists owned by this advertiser.
     * @param {string} apiParams.floodlightActivityId - Select only remarketing lists that have this floodlight activity ID.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.name - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.remarketingLists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing remarketing list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.remarketingLists.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingLists', 'PUT', apiParams, clientConfig);

    this.remarketingListShares = {};

    /**
     * Updates an existing remarketing list share. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. RemarketingList ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.remarketingListShares.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingListShares', 'PATCH', apiParams, clientConfig);

    /**
     * Gets one remarketing list share by remarketing list ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.remarketingListId - (Required) Remarketing list ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.remarketingListShares.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingListShares/{+remarketingListId}', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing remarketing list share.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.remarketingListShares.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/remarketingListShares', 'PUT', apiParams, clientConfig);

    this.sites = {};

    /**
     * Updates an existing site. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. Site ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sites', 'PATCH', apiParams, clientConfig);

    /**
     * Gets one site by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Site ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sites/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sites', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of sites, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.acceptsInStreamVideoPlacements - This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean} apiParams.acceptsInterstitialPlacements - This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean} apiParams.acceptsPublisherPaidPlacements - Select only sites that accept publisher paid placements.
     * @param {boolean} apiParams.adWordsSite - Select only AdWords sites.
     * @param {boolean} apiParams.approved - Select only approved sites.
     * @param {string} apiParams.campaignIds - Select only sites with these campaign IDs.
     * @param {string} apiParams.directorySiteIds - Select only sites with these directory site IDs.
     * @param {string} apiParams.ids - Select only sites with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {string} apiParams.subaccountId - Select only sites with this subaccount ID.
     * @param {boolean} apiParams.unmappedSite - Select only sites that have not been mapped to a directory site.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sites', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sites', 'PUT', apiParams, clientConfig);

    this.subaccounts = {};

    /**
     * Updates an existing subaccount. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. Subaccount ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.subaccounts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'PATCH', apiParams, clientConfig);

    /**
     * Gets one subaccount by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Subaccount ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.subaccounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/subaccounts/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new subaccount.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.subaccounts.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'POST', apiParams, clientConfig);

    /**
     * Gets a list of subaccounts, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.ids - Select only subaccounts with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount" .
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.subaccounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing subaccount.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.subaccounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/subaccounts', 'PUT', apiParams, clientConfig);

    this.userRoles = {};

    /**
     * Updates an existing user role. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. UserRole ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.userRoles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'PATCH', apiParams, clientConfig);

    /**
     * Gets one user role by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) User role ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.userRoles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRoles/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new user role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.userRoles.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of user roles, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.accountUserRoleOnly - Select only account level user roles not associated with any specific subaccount.
     * @param {string} apiParams.ids - Select only user roles with the specified IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {string} apiParams.subaccountId - Select only user roles that belong to this subaccount.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.userRoles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing user role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.userRoles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRoles', 'PUT', apiParams, clientConfig);

    /**
     * Deletes an existing user role.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) User role ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.userRoles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRoles/{+id}', 'DELETE', apiParams, clientConfig);

    this.targetingTemplates = {};

    /**
     * Updates an existing targeting template. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. RemarketingList ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.targetingTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'PATCH', apiParams, clientConfig);

    /**
     * Gets one targeting template by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Targeting template ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.targetingTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new targeting template.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.targetingTemplates.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of targeting templates, optionally filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - Select only targeting templates with this advertiser ID.
     * @param {string} apiParams.ids - Select only targeting templates with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.targetingTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing targeting template.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.targetingTemplates.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/targetingTemplates', 'PUT', apiParams, clientConfig);

    this.placements = {};

    /**
     * Updates an existing placement. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. Placement ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placements.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placements', 'PATCH', apiParams, clientConfig);

    /**
     * Generates tags for a placement.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.campaignId - Generate placements belonging to this campaign. This is a required field.
     * @param {string} apiParams.placementIds - Generate tags for these placements.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.tagFormats - Tag formats to generate for these placements. *Note:* PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placements.generatetags = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placements/generatetags', 'POST', apiParams, clientConfig);

    /**
     * Gets one placement by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Placement ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placements.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placements/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new placement.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placements.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placements', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of placements, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.activeStatus - Select only placements with these active statuses.
     * @param {string} apiParams.advertiserIds - Select only placements that belong to these advertisers.
     * @param {string} apiParams.campaignIds - Select only placements that belong to these campaigns.
     * @param {string} apiParams.compatibilities - Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
     * @param {string} apiParams.contentCategoryIds - Select only placements that are associated with these content categories.
     * @param {string} apiParams.directorySiteIds - Select only placements that are associated with these directory sites.
     * @param {string} apiParams.groupIds - Select only placements that belong to these placement groups.
     * @param {string} apiParams.ids - Select only placements with these IDs.
     * @param {string} apiParams.maxEndDate - Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.maxStartDate - Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string} apiParams.minEndDate - Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string} apiParams.minStartDate - Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.paymentSource - Select only placements with this payment source.
     * @param {string} apiParams.placementStrategyIds - Select only placements that are associated with these placement strategies.
     * @param {string} apiParams.pricingTypes - Select only placements with these pricing types.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement" .
     * @param {string} apiParams.siteIds - Select only placements that are associated with these sites.
     * @param {string} apiParams.sizeIds - Select only placements that are associated with these sizes.
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placements.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placements', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing placement.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placements.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placements', 'PUT', apiParams, clientConfig);

    this.placementGroups = {};

    /**
     * Updates an existing placement group. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. Placement ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placementGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'PATCH', apiParams, clientConfig);

    /**
     * Gets one placement group by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Placement group ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placementGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementGroups/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new placement group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placementGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of placement groups, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.activeStatus - Select only placements with these active statuses.
     * @param {string} apiParams.advertiserIds - Select only placement groups that belong to these advertisers.
     * @param {string} apiParams.campaignIds - Select only placement groups that belong to these campaigns.
     * @param {string} apiParams.contentCategoryIds - Select only placement groups that are associated with these content categories.
     * @param {string} apiParams.directorySiteIds - Select only placement groups that are associated with these directory sites.
     * @param {string} apiParams.ids - Select only placement groups with these IDs.
     * @param {string} apiParams.maxEndDate - Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.maxStartDate - Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string} apiParams.minEndDate - Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string} apiParams.minStartDate - Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.placementGroupType - Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
     * @param {string} apiParams.placementStrategyIds - Select only placement groups that are associated with these placement strategies.
     * @param {string} apiParams.pricingTypes - Select only placement groups with these pricing types.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".
     * @param {string} apiParams.siteIds - Select only placement groups that are associated with these sites.
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placementGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing placement group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placementGroups.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementGroups', 'PUT', apiParams, clientConfig);

    this.placementStrategies = {};

    /**
     * Updates an existing placement strategy. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. PlacementStrategy ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placementStrategies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an existing placement strategy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Placement strategy ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placementStrategies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementStrategies/{+id}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets one placement strategy by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Placement strategy ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placementStrategies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementStrategies/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new placement strategy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placementStrategies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of placement strategies, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.ids - Select only placement strategies with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placementStrategies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing placement strategy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.placementStrategies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/placementStrategies', 'PUT', apiParams, clientConfig);

    this.platformTypes = {};

    /**
     * Gets one platform type by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Platform type ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.platformTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/platformTypes/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of platform types.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.platformTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/platformTypes', 'GET', apiParams, clientConfig);

    this.postalCodes = {};

    /**
     * Gets one postal code by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.code - (Required) Postal code ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.postalCodes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/postalCodes/{+code}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of postal codes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.postalCodes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/postalCodes', 'GET', apiParams, clientConfig);

    this.projects = {};

    /**
     * Gets one project by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Project ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/projects/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of projects, possibly filtered. This method supports paging .
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserIds - Select only projects with these advertiser IDs.
     * @param {string} apiParams.ids - Select only projects with these IDs.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.searchString - Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project".
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/projects', 'GET', apiParams, clientConfig);

    this.regions = {};

    /**
     * Retrieves a list of regions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.regions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/regions', 'GET', apiParams, clientConfig);

    this.targetableRemarketingLists = {};

    /**
     * Gets one remarketing list by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Remarketing list ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.targetableRemarketingLists.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/targetableRemarketingLists/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.active - Select only active or only inactive targetable remarketing lists.
     * @param {string} apiParams.advertiserId - (Required) Required. Select only targetable remarketing lists targetable by these advertisers.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.name - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
     * @param {string} apiParams.pageToken - Value of the nextPageToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {string} apiParams.sortField - Field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.targetableRemarketingLists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/targetableRemarketingLists', 'GET', apiParams, clientConfig);

    this.reports = {};

    /**
     * Deletes a report by its ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} apiParams.reportId - (Required) The ID of the report.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a report by its ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} apiParams.reportId - (Required) The ID of the report.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}', 'GET', apiParams, clientConfig);

    /**
     * Creates a report.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports', 'POST', apiParams, clientConfig);

    /**
     * Retrieves list of reports.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - The value of the nextToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} apiParams.scope - The scope that defines which results are returned.
     * @param {string} apiParams.sortField - The field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports', 'GET', apiParams, clientConfig);

    /**
     * Runs a report.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} apiParams.reportId - (Required) The ID of the report.
     * @param {boolean} apiParams.synchronous - If set and true, tries to run the report synchronously.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}/run', 'POST', apiParams, clientConfig);

    /**
     * Updates a report.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} apiParams.reportId - (Required) The ID of the report.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}', 'PUT', apiParams, clientConfig);

    /**
     * Updates an existing report. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} apiParams.reportId - (Required) The ID of the report.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}', 'PATCH', apiParams, clientConfig);

    this.reports.files = {};

    /**
     * Retrieves a report file by its report ID and file ID. This method supports media download.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fileId - (Required) The ID of the report file.
     * @param {string} apiParams.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} apiParams.reportId - (Required) The ID of the report.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.files.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}/files/{fileId}', 'GET', apiParams, clientConfig);

    /**
     * Lists files for a report.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of results to return.
     * @param {string} apiParams.pageToken - The value of the nextToken from the previous result page.
     * @param {string} apiParams.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {string} apiParams.reportId - (Required) The ID of the parent report.
     * @param {string} apiParams.sortField - The field by which to sort the list.
     * @param {string} apiParams.sortOrder - Order of sorted results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.files.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/{reportId}/files', 'GET', apiParams, clientConfig);

    this.reports.compatibleFields = {};

    /**
     * Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) The Campaign Manager 360 user profile ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.compatibleFields.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}/reports/compatiblefields/query', 'POST', apiParams, clientConfig);

    this.sizes = {};

    /**
     * Gets one size by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Size ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sizes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sizes/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new size.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sizes.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sizes', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.height - Select only sizes with this height.
     * @param {boolean} apiParams.iabStandard - Select only IAB standard sizes.
     * @param {string} apiParams.ids - Select only sizes with these IDs.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {integer} apiParams.width - Select only sizes with this width.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sizes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/sizes', 'GET', apiParams, clientConfig);

    this.tvCampaignDetails = {};

    /**
     * Gets one TvCampaignDetail by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - Required. Account ID associated with this request.
     * @param {string} apiParams.id - (Required) Required. TV Campaign ID.
     * @param {string} apiParams.profileId - (Required) Required. User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tvCampaignDetails.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/tvCampaignDetails/{+id}', 'GET', apiParams, clientConfig);

    this.tvCampaignSummaries = {};

    /**
     * Retrieves a list of TV campaign summaries.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - Required. Account ID associated with this request.
     * @param {string} apiParams.name - Required. Search string to filter the list of TV campaign summaries. Matches any substring. Required field.
     * @param {string} apiParams.profileId - (Required) Required. User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tvCampaignSummaries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/tvCampaignSummaries', 'GET', apiParams, clientConfig);

    this.userProfiles = {};

    /**
     * Gets one user profile by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) The user profile ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.userProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{profileId}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves list of user profiles for a user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.userProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles', 'GET', apiParams, clientConfig);

    this.userRolePermissionGroups = {};

    /**
     * Gets one user role permission group by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) User role permission group ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.userRolePermissionGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRolePermissionGroups/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Gets a list of all supported user role permission groups.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.userRolePermissionGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRolePermissionGroups', 'GET', apiParams, clientConfig);

    this.userRolePermissions = {};

    /**
     * Gets one user role permission by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) User role permission ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.userRolePermissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRolePermissions/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Gets a list of user role permissions, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.ids - Select only user role permissions with these IDs.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.userRolePermissions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/userRolePermissions', 'GET', apiParams, clientConfig);

    this.videoFormats = {};

    /**
     * Gets one video format by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.id - (Required) Video format ID.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.videoFormats.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/videoFormats/{+id}', 'GET', apiParams, clientConfig);

    /**
     * Lists available video formats.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.profileId - (Required) User profile ID associated with this request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.videoFormats.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userprofiles/{+profileId}/videoFormats', 'GET', apiParams, clientConfig);
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
