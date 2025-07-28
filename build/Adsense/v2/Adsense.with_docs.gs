
/**
 * Google Apps Script client library for the AdSense Management API
 * Documentation URL: https://developers.google.com/adsense/management/
 * @class
 */
class Adsense {
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
    this._rootUrl = 'https://adsense.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};

    /**
     * Gets information about the selected AdSense account.
     * @param {string} params.name - (Required) Required. Account to get information about. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists all accounts available to this user.
     * @param {integer} params.pageSize - The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.accounts.list = (params) => this._makeRequest('v2/accounts', 'GET', params);

    /**
     * Lists all accounts directly managed by the given AdSense account.
     * @param {integer} params.pageSize - The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - A page token, received from a previous `ListChildAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListChildAccounts` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent account, which owns the child accounts. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.listChildAccounts = (params) => this._makeRequest('v2/{+parent}:listChildAccounts', 'GET', params);

    /**
     * Gets the ad blocking recovery tag of an account.
     * @param {string} params.name - (Required) Required. The name of the account to get the tag for. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.getAdBlockingRecoveryTag = (params) => this._makeRequest('v2/{+name}/adBlockingRecoveryTag', 'GET', params);

    this.accounts.adclients = {};

    /**
     * Lists all the ad clients available in an account.
     * @param {integer} params.pageSize - The maximum number of ad clients to include in the response, used for paging. If unspecified, at most 10000 ad clients will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - A page token, received from a previous `ListAdClients` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdClients` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The account which owns the collection of ad clients. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.adclients.list = (params) => this._makeRequest('v2/{+parent}/adclients', 'GET', params);

    /**
     * Gets the ad client from the given resource name.
     * @param {string} params.name - (Required) Required. The name of the ad client to retrieve. Format: accounts/{account}/adclients/{adclient}
     * @return {object} The API response object.
     */
    this.accounts.adclients.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Gets the AdSense code for a given ad client. This returns what was previously known as the 'auto ad code'. This is only supported for ad clients with a product_code of AFC. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634).
     * @param {string} params.name - (Required) Required. Name of the ad client for which to get the adcode. Format: accounts/{account}/adclients/{adclient}
     * @return {object} The API response object.
     */
    this.accounts.adclients.getAdcode = (params) => this._makeRequest('v2/{+name}/adcode', 'GET', params);

    this.accounts.adclients.adunits = {};

    /**
     * Gets an ad unit from a specified account and ad client.
     * @param {string} params.name - (Required) Required. AdUnit to get information about. Format: accounts/{account}/adclients/{adclient}/adunits/{adunit}
     * @return {object} The API response object.
     */
    this.accounts.adclients.adunits.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists all ad units under a specified account and ad client.
     * @param {integer} params.pageSize - The maximum number of ad units to include in the response, used for paging. If unspecified, at most 10000 ad units will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - A page token, received from a previous `ListAdUnits` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdUnits` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The ad client which owns the collection of ad units. Format: accounts/{account}/adclients/{adclient}
     * @return {object} The API response object.
     */
    this.accounts.adclients.adunits.list = (params) => this._makeRequest('v2/{+parent}/adunits', 'GET', params);

    /**
     * Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).
     * @param {string} params.name - (Required) Required. Name of the adunit for which to get the adcode. Format: accounts/{account}/adclients/{adclient}/adunits/{adunit}
     * @return {object} The API response object.
     */
    this.accounts.adclients.adunits.getAdcode = (params) => this._makeRequest('v2/{+name}/adcode', 'GET', params);

    /**
     * Creates an ad unit. This method can be called only by a restricted set of projects, which are usually owned by [AdSense for Platforms](https://developers.google.com/adsense/platforms/) publishers. Contact your account manager if you need to use this method. Note that ad units can only be created for ad clients with an "AFC" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566
     * @param {string} params.parent - (Required) Required. Ad client to create an ad unit under. Format: accounts/{account}/adclients/{adclient}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.adclients.adunits.create = (params) => this._makeRequest('v2/{+parent}/adunits', 'POST', params);

    /**
     * Updates an ad unit. This method can be called only by a restricted set of projects, which are usually owned by [AdSense for Platforms](https://developers.google.com/adsense/platforms/) publishers. Contact your account manager if you need to use this method. For now, this method can only be used to update `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566
     * @param {string} params.name - (Required) Output only. Resource name of the ad unit. Format: accounts/{account}/adclients/{adclient}/adunits/{adunit}
     * @param {string} params.updateMask - The list of fields to update. If empty, a full update is performed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.adclients.adunits.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Lists all the custom channels available for an ad unit.
     * @param {integer} params.pageSize - The maximum number of custom channels to include in the response, used for paging. If unspecified, at most 10000 custom channels will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - A page token, received from a previous `ListLinkedCustomChannels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLinkedCustomChannels` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The ad unit which owns the collection of custom channels. Format: accounts/{account}/adclients/{adclient}/adunits/{adunit}
     * @return {object} The API response object.
     */
    this.accounts.adclients.adunits.listLinkedCustomChannels = (params) => this._makeRequest('v2/{+parent}:listLinkedCustomChannels', 'GET', params);

    this.accounts.adclients.customchannels = {};

    /**
     * Lists all the ad units available for a custom channel.
     * @param {integer} params.pageSize - The maximum number of ad units to include in the response, used for paging. If unspecified, at most 10000 ad units will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - A page token, received from a previous `ListLinkedAdUnits` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLinkedAdUnits` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The custom channel which owns the collection of ad units. Format: accounts/{account}/adclients/{adclient}/customchannels/{customchannel}
     * @return {object} The API response object.
     */
    this.accounts.adclients.customchannels.listLinkedAdUnits = (params) => this._makeRequest('v2/{+parent}:listLinkedAdUnits', 'GET', params);

    /**
     * Gets information about the selected custom channel.
     * @param {string} params.name - (Required) Required. Name of the custom channel. Format: accounts/{account}/adclients/{adclient}/customchannels/{customchannel}
     * @return {object} The API response object.
     */
    this.accounts.adclients.customchannels.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists all the custom channels available in an ad client.
     * @param {integer} params.pageSize - The maximum number of custom channels to include in the response, used for paging. If unspecified, at most 10000 custom channels will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - A page token, received from a previous `ListCustomChannels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomChannels` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The ad client which owns the collection of custom channels. Format: accounts/{account}/adclients/{adclient}
     * @return {object} The API response object.
     */
    this.accounts.adclients.customchannels.list = (params) => this._makeRequest('v2/{+parent}/customchannels', 'GET', params);

    /**
     * Creates a custom channel. This method can be called only by a restricted set of projects, which are usually owned by [AdSense for Platforms](https://developers.google.com/adsense/platforms/) publishers. Contact your account manager if you need to use this method.
     * @param {string} params.parent - (Required) Required. The ad client to create a custom channel under. Format: accounts/{account}/adclients/{adclient}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.adclients.customchannels.create = (params) => this._makeRequest('v2/{+parent}/customchannels', 'POST', params);

    /**
     * Updates a custom channel. This method can be called only by a restricted set of projects, which are usually owned by [AdSense for Platforms](https://developers.google.com/adsense/platforms/) publishers. Contact your account manager if you need to use this method.
     * @param {string} params.name - (Required) Output only. Resource name of the custom channel. Format: accounts/{account}/adclients/{adclient}/customchannels/{customchannel}
     * @param {string} params.updateMask - The list of fields to update. If empty, a full update is performed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.adclients.customchannels.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a custom channel. This method can be called only by a restricted set of projects, which are usually owned by [AdSense for Platforms](https://developers.google.com/adsense/platforms/) publishers. Contact your account manager if you need to use this method.
     * @param {string} params.name - (Required) Required. Name of the custom channel to delete. Format: accounts/{account}/adclients/{adclient}/customchannels/{customchannel}
     * @return {object} The API response object.
     */
    this.accounts.adclients.customchannels.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.accounts.adclients.urlchannels = {};

    /**
     * Gets information about the selected url channel.
     * @param {string} params.name - (Required) Required. The name of the url channel to retrieve. Format: accounts/{account}/adclients/{adclient}/urlchannels/{urlchannel}
     * @return {object} The API response object.
     */
    this.accounts.adclients.urlchannels.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists active url channels.
     * @param {integer} params.pageSize - The maximum number of url channels to include in the response, used for paging. If unspecified, at most 10000 url channels will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - A page token, received from a previous `ListUrlChannels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUrlChannels` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The ad client which owns the collection of url channels. Format: accounts/{account}/adclients/{adclient}
     * @return {object} The API response object.
     */
    this.accounts.adclients.urlchannels.list = (params) => this._makeRequest('v2/{+parent}/urlchannels', 'GET', params);

    this.accounts.alerts = {};

    /**
     * Lists all the alerts available in an account.
     * @param {string} params.languageCode - The language to use for translating alert messages. If unspecified, this defaults to the user's display language. If the given language is not supported, alerts will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     * @param {string} params.parent - (Required) Required. The account which owns the collection of alerts. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.alerts.list = (params) => this._makeRequest('v2/{+parent}/alerts', 'GET', params);

    this.accounts.payments = {};

    /**
     * Lists all the payments available for an account.
     * @param {string} params.parent - (Required) Required. The account which owns the collection of payments. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.payments.list = (params) => this._makeRequest('v2/{+parent}/payments', 'GET', params);

    this.accounts.policyIssues = {};

    /**
     * Gets information about the selected policy issue.
     * @param {string} params.name - (Required) Required. Name of the policy issue. Format: accounts/{account}/policyIssues/{policy_issue}
     * @return {object} The API response object.
     */
    this.accounts.policyIssues.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists all the policy issues where the specified account is involved, both directly and through any AFP child accounts.
     * @param {integer} params.pageSize - The maximum number of policy issues to include in the response, used for paging. If unspecified, at most 10000 policy issues will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - A page token, received from a previous `ListPolicyIssues` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPolicyIssues` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The account for which policy issues are being retrieved. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.policyIssues.list = (params) => this._makeRequest('v2/{+parent}/policyIssues', 'GET', params);

    this.accounts.reports = {};

    /**
     * Gets the saved report from the given resource name.
     * @param {string} params.name - (Required) Required. The name of the saved report to retrieve. Format: accounts/{account}/reports/{report}
     * @return {object} The API response object.
     */
    this.accounts.reports.getSaved = (params) => this._makeRequest('v2/{+name}/saved', 'GET', params);

    /**
     * Generates an ad hoc report.
     * @param {string} params.account - (Required) Required. The account which owns the collection of reports. Format: accounts/{account}
     * @param {string} params.currencyCode - The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     * @param {string} params.dateRange - Date range of the report, if unset the range will be considered CUSTOM.
     * @param {string} params.dimensions - Dimensions to base the report on.
     * @param {integer} params.endDate.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.endDate.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.endDate.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @param {string} params.filters - A list of [filters](/adsense/management/reporting/filtering) to apply to the report. All provided filters must match in order for the data to be included in the report.
     * @param {string} params.languageCode - The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     * @param {integer} params.limit - The maximum number of rows of report data to return. Reports producing more rows than the requested limit will be truncated. If unset, this defaults to 100,000 rows for `Reports.GenerateReport` and 1,000,000 rows for `Reports.GenerateCsvReport`, which are also the maximum values permitted here. Report truncation can be identified (for `Reports.GenerateReport` only) by comparing the number of rows returned to the value returned in `total_matched_rows`.
     * @param {string} params.metrics - Required. Reporting metrics.
     * @param {string} params.orderBy - The name of a dimension or metric to sort the resulting report on, can be prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     * @param {string} params.reportingTimeZone - Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     * @param {integer} params.startDate.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.startDate.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.startDate.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @return {object} The API response object.
     */
    this.accounts.reports.generate = (params) => this._makeRequest('v2/{+account}/reports:generate', 'GET', params);

    /**
     * Generates a csv formatted ad hoc report.
     * @param {string} params.account - (Required) Required. The account which owns the collection of reports. Format: accounts/{account}
     * @param {string} params.currencyCode - The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     * @param {string} params.dateRange - Date range of the report, if unset the range will be considered CUSTOM.
     * @param {string} params.dimensions - Dimensions to base the report on.
     * @param {integer} params.endDate.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.endDate.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.endDate.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @param {string} params.filters - A list of [filters](/adsense/management/reporting/filtering) to apply to the report. All provided filters must match in order for the data to be included in the report.
     * @param {string} params.languageCode - The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     * @param {integer} params.limit - The maximum number of rows of report data to return. Reports producing more rows than the requested limit will be truncated. If unset, this defaults to 100,000 rows for `Reports.GenerateReport` and 1,000,000 rows for `Reports.GenerateCsvReport`, which are also the maximum values permitted here. Report truncation can be identified (for `Reports.GenerateReport` only) by comparing the number of rows returned to the value returned in `total_matched_rows`.
     * @param {string} params.metrics - Required. Reporting metrics.
     * @param {string} params.orderBy - The name of a dimension or metric to sort the resulting report on, can be prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     * @param {string} params.reportingTimeZone - Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     * @param {integer} params.startDate.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.startDate.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.startDate.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @return {object} The API response object.
     */
    this.accounts.reports.generateCsv = (params) => this._makeRequest('v2/{+account}/reports:generateCsv', 'GET', params);

    this.accounts.reports.saved = {};

    /**
     * Generates a saved report.
     * @param {string} params.currencyCode - The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     * @param {string} params.dateRange - Date range of the report, if unset the range will be considered CUSTOM.
     * @param {integer} params.endDate.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.endDate.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.endDate.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @param {string} params.languageCode - The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     * @param {string} params.name - (Required) Required. Name of the saved report. Format: accounts/{account}/reports/{report}
     * @param {string} params.reportingTimeZone - Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     * @param {integer} params.startDate.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.startDate.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.startDate.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @return {object} The API response object.
     */
    this.accounts.reports.saved.generate = (params) => this._makeRequest('v2/{+name}/saved:generate', 'GET', params);

    /**
     * Generates a csv formatted saved report.
     * @param {string} params.currencyCode - The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     * @param {string} params.dateRange - Date range of the report, if unset the range will be considered CUSTOM.
     * @param {integer} params.endDate.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.endDate.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.endDate.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @param {string} params.languageCode - The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     * @param {string} params.name - (Required) Required. Name of the saved report. Format: accounts/{account}/reports/{report}
     * @param {string} params.reportingTimeZone - Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     * @param {integer} params.startDate.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.startDate.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.startDate.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @return {object} The API response object.
     */
    this.accounts.reports.saved.generateCsv = (params) => this._makeRequest('v2/{+name}/saved:generateCsv', 'GET', params);

    /**
     * Lists saved reports.
     * @param {integer} params.pageSize - The maximum number of reports to include in the response, used for paging. If unspecified, at most 10000 reports will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - A page token, received from a previous `ListSavedReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSavedReports` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The account which owns the collection of reports. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.reports.saved.list = (params) => this._makeRequest('v2/{+parent}/reports/saved', 'GET', params);

    this.accounts.sites = {};

    /**
     * Gets information about the selected site.
     * @param {string} params.name - (Required) Required. Name of the site. Format: accounts/{account}/sites/{site}
     * @return {object} The API response object.
     */
    this.accounts.sites.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists all the sites available in an account.
     * @param {integer} params.pageSize - The maximum number of sites to include in the response, used for paging. If unspecified, at most 10000 sites will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - A page token, received from a previous `ListSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSites` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The account which owns the collection of sites. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.sites.list = (params) => this._makeRequest('v2/{+parent}/sites', 'GET', params);
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
