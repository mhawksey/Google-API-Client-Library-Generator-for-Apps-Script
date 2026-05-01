
/**
 * Google Apps Script client library for the Search Ads 360 Reporting API
 * Documentation URL: https://developers.google.com/search-ads/reporting
 * Generator: https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/
 * @class
 */
class Searchads360 {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://searchads360.googleapis.com/';
    this._servicePath = '';


    this.v23 = {};

    /**
     * Returns the list of plannable user lists with their plannable status. User lists may not be plannable for a number of reasons, including: - They are less than 10 days old. - They have a membership lifespan that is less than 30 days - They have less than 10,000 or more than 700,000 users. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [ReachPlanError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v23.listPlannableUserLists = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listPlannableUserLists', 'POST', apiParams, clientConfig);

    /**
     * Returns the list of locations that support benchmarks (for example, countries). List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v23.listBenchmarksLocations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listBenchmarksLocations', 'POST', apiParams, clientConfig);

    /**
     * Returns the list of per-location plannable YouTube ad formats with allowed targeting. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v23.listPlannableProducts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listPlannableProducts', 'POST', apiParams, clientConfig);

    /**
     * Returns a date range that supports benchmarks. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v23.listBenchmarksAvailableDates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listBenchmarksAvailableDates', 'POST', apiParams, clientConfig);

    /**
     * Returns the list of products that supports benchmarks. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v23.listBenchmarksProducts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listBenchmarksProducts', 'POST', apiParams, clientConfig);

    /**
     * Returns the list of benchmarks sources (for example, Industry Verticals). List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v23.listBenchmarksSources = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listBenchmarksSources', 'POST', apiParams, clientConfig);

    /**
     * Returns the list of plannable locations (for example, countries). List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v23.listPlannableLocations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listPlannableLocations', 'POST', apiParams, clientConfig);

    /**
     * Returns a collection of conversion rate suggestions for supported plannable products. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v23.generateConversionRates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:generateConversionRates', 'POST', apiParams, clientConfig);

    /**
     * Returns the list of plannable user interests. A plannable user interest is one that can be targeted in a reach forecast using ReachPlanService.GenerateReachForecast. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [ListOperationError]() [QuotaError]() [RequestError]() [StringLengthError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v23.listPlannableUserInterests = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23:listPlannableUserInterests', 'POST', apiParams, clientConfig);

    this.incentives = {};

    /**
     * Returns incentives for a given user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.countryCode - Optional. User's country code. If not provided, the server will default to "US". Possible country codes: https://developers.google.com/google-ads/api/data/codes-formats#country_codes
     * @param {string} apiParams.email - Optional. Email of the user that the requested incentive is meant for. Will be used for channel partners who do NOT use OAuth to authenticate on behalf of user.
     * @param {string} apiParams.languageCode - Optional. User's language code. If not provided, the server will default to "en". Possible language codes: https://developers.google.com/google-ads/api/data/codes-formats#languages
     * @param {string} apiParams.type - Optional. The type of incentive to get. Defaults to ACQUISITION.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.incentives.fetchIncentive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/incentives:fetchIncentive', 'GET', apiParams, clientConfig);

    this.searchAds360Fields = {};

    /**
     * Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Required. The resource name of the field to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.searchAds360Fields.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}', 'GET', apiParams, clientConfig);

    /**
     * Returns all fields that match the search [query](/search-ads/reporting/concepts/field-service#use_a_query_to_get_field_details). List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.searchAds360Fields.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/searchAds360Fields:search', 'POST', apiParams, clientConfig);

    this.keywordThemeConstants = {};

    /**
     * Returns KeywordThemeConstant suggestions by keyword themes. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.keywordThemeConstants.suggest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/keywordThemeConstants:suggest', 'POST', apiParams, clientConfig);

    this.geoTargetConstants = {};

    /**
     * Returns GeoTargetConstant suggestions by location name or by resource name. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [GeoTargetConstantSuggestionError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.geoTargetConstants.suggest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/geoTargetConstants:suggest', 'POST', apiParams, clientConfig);

    this.audienceInsights = {};

    /**
     * Lists date ranges for which audience insights data can be requested. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.audienceInsights.listInsightsEligibleDates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/audienceInsights:listInsightsEligibleDates', 'POST', apiParams, clientConfig);

    this.customers = {};

    /**
     * Returns a list of keyword historical metrics. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The ID of the customer with the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.generateKeywordHistoricalMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateKeywordHistoricalMetrics', 'POST', apiParams, clientConfig);

    /**
     * Starts Identity Verification for a given verification program type. Statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The Id of the customer for whom we are creating this verification.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.startIdentityVerification = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:startIdentityVerification', 'POST', apiParams, clientConfig);

    /**
     * Suggests a Smart campaign ad compatible with the Ad family of resources, based on data points such as targeting and the business to advertise.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.suggestSmartCampaignAd = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:suggestSmartCampaignAd', 'POST', apiParams, clientConfig);

    /**
     * Returns a collection of attributes that are represented in an audience of interest, with metrics that compare each attribute's share of the audience with its share of a baseline audience. List of thrown errors: [AudienceInsightsError]() [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.generateAudienceCompositionInsights = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateAudienceCompositionInsights', 'POST', apiParams, clientConfig);

    /**
     * Returns metrics (such as impressions, clicks, total cost) of a keyword forecast for the given campaign. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The ID of the customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.generateKeywordForecastMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateKeywordForecastMetrics', 'POST', apiParams, clientConfig);

    /**
     * Returns a collection of audience attributes using generative AI based on the provided audience description. List of thrown errors: [AudienceInsightsError]() [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.generateAudienceDefinition = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateAudienceDefinition', 'POST', apiParams, clientConfig);

    /**
     * Returns YouTube advertisement metrics for the given client against industry benchmarks. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [BenchmarksError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer. Supply a client customer ID to generate metrics for the customer. A manager account customer ID will not return customer metrics since it does not have any associated direct ad campaigns.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.generateBenchmarksMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateBenchmarksMetrics', 'POST', apiParams, clientConfig);

    /**
     * Generates a reach forecast for a given targeting / product mix. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [ReachPlanError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.generateReachForecast = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateReachForecast', 'POST', apiParams, clientConfig);

    /**
     * Returns resource names of customers directly accessible by the user authenticating the call. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.listAccessibleCustomers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers:listAccessibleCustomers', 'GET', apiParams, clientConfig);

    /**
     * Creates a saved report that can be viewed in the Insights Finder tool. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.generateInsightsFinderReport = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateInsightsFinderReport', 'POST', apiParams, clientConfig);

    /**
     * Removes automatically created assets from a campaign. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ContextError]() [FieldError]() [InternalError]() [MutateError]() [PartialFailureError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose assets are being removed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.removeCampaignAutomaticallyCreatedAsset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:removeCampaignAutomaticallyCreatedAsset', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of suggested AdGroups and suggested modifications (text, match type) for the given keywords. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.generateAdGroupThemes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateAdGroupThemes', 'POST', apiParams, clientConfig);

    /**
     * Suggests keyword themes to advertise on.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.suggestKeywordThemes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:suggestKeywordThemes', 'POST', apiParams, clientConfig);

    /**
     * Searches for audience attributes that can be used to generate insights. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.searchAudienceInsightsAttributes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:searchAudienceInsightsAttributes', 'POST', apiParams, clientConfig);

    /**
     * Returns a collection of targeting insights (e.g. targetable audiences) that are relevant to the requested audience. List of thrown errors: [AudienceInsightsError]() [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.generateSuggestedTargetingInsights = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateSuggestedTargetingInsights', 'POST', apiParams, clientConfig);

    /**
     * Returns a collection of audience attributes along with estimates of the overlap between their potential YouTube reach and that of a given input attribute. List of thrown errors: [AudienceInsightsError]() [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.generateAudienceOverlapInsights = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateAudienceOverlapInsights', 'POST', apiParams, clientConfig);

    /**
     * Returns Travel Asset suggestions. Asset suggestions are returned on a best-effort basis. There are no guarantees that all possible asset types will be returned for any given hotel property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.suggestTravelAssets = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:suggestTravelAssets', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of keyword ideas. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [HeaderError]() [InternalError]() [KeywordPlanIdeaError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The ID of the customer with the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.generateKeywordIdeas = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateKeywordIdeas', 'POST', apiParams, clientConfig);

    /**
     * Returns BudgetOption suggestions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose budget options are to be suggested.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.suggestSmartCampaignBudgetOptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:suggestSmartCampaignBudgetOptions', 'POST', apiParams, clientConfig);

    /**
     * Updates a customer. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldMaskError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]() [UrlFieldError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:mutate', 'POST', apiParams, clientConfig);

    /**
     * Returns potential reach metrics for targetable audiences. This method helps answer questions like "How many Men aged 18+ interested in Camping can be reached on YouTube?" List of thrown errors: [AudienceInsightsError]() [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.generateTargetingSuggestionMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:generateTargetingSuggestionMetrics', 'POST', apiParams, clientConfig);

    /**
     * Creates a new client under manager. The new client customer is returned. List of thrown errors: [AccessInvitationError]() [AuthenticationError]() [AuthorizationError]() [CurrencyCodeError]() [HeaderError]() [InternalError]() [ManagerLinkError]() [QuotaError]() [RequestError]() [StringLengthError]() [TimeZoneError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the Manager under whom client customer is being created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.createCustomerClient = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:createCustomerClient', 'POST', apiParams, clientConfig);

    /**
     * Returns Identity Verification information. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer for whom we are requesting verification information.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.getIdentityVerification = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/getIdentityVerification', 'GET', apiParams, clientConfig);

    /**
     * Uploads the given user data. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [OfflineUserDataJobError]() [QuotaError]() [RequestError]() [UserDataError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer for which to update the user data.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.uploadUserData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}:uploadUserData', 'POST', apiParams, clientConfig);

    this.customers.remarketingActions = {};

    /**
     * Creates or updates remarketing actions. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ConversionActionError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose remarketing actions are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.remarketingActions.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/remarketingActions:mutate', 'POST', apiParams, clientConfig);

    this.customers.keywordPlanCampaigns = {};

    /**
     * Creates, updates, or removes Keyword Plan campaigns. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [KeywordPlanCampaignError]() [KeywordPlanError]() [ListOperationError]() [MutateError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose Keyword Plan campaigns are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.keywordPlanCampaigns.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/keywordPlanCampaigns:mutate', 'POST', apiParams, clientConfig);

    this.customers.conversionActions = {};

    /**
     * Creates, updates or removes conversion actions. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ConversionActionError]() [CurrencyCodeError]() [DatabaseError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [StringLengthError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose conversion actions are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.conversionActions.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/conversionActions:mutate', 'POST', apiParams, clientConfig);

    this.customers.thirdPartyAppAnalyticsLinks = {};

    /**
     * Regenerate ThirdPartyAppAnalyticsLink.shareable_link_id that should be provided to the third party when setting up app analytics. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Resource name of the third party app analytics link.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.thirdPartyAppAnalyticsLinks.regenerateShareableLinkId = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:regenerateShareableLinkId', 'POST', apiParams, clientConfig);

    this.customers.adGroupCriterionLabels = {};

    /**
     * Creates and removes ad group criterion labels. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. ID of the customer whose ad group criterion labels are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.adGroupCriterionLabels.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupCriterionLabels:mutate', 'POST', apiParams, clientConfig);

    this.customers.localServices = {};

    /**
     * RPC to append Local Services Lead Conversation resources to Local Services Lead resources.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The Id of the customer which owns the leads onto which the conversations will be appended.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.localServices.appendLeadConversation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/localServices:appendLeadConversation', 'POST', apiParams, clientConfig);

    this.customers.keywordPlans = {};

    /**
     * Creates, updates, or removes keyword plans. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [KeywordPlanError]() [MutateError]() [NewResourceCreationError]() [QuotaError]() [RequestError]() [ResourceCountLimitExceededError]() [StringLengthError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose keyword plans are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.keywordPlans.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/keywordPlans:mutate', 'POST', apiParams, clientConfig);

    this.customers.sharedSets = {};

    /**
     * Creates, updates, or removes shared sets. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SharedSetError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose shared sets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.sharedSets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/sharedSets:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerLifecycleGoal = {};

    /**
     * Process the given customer lifecycle configurations. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CustomerLifecycleGoalConfigError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer performing the upload.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customerLifecycleGoal.configureCustomerLifecycleGoals = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerLifecycleGoal:configureCustomerLifecycleGoals', 'POST', apiParams, clientConfig);

    this.customers.customerLabels = {};

    /**
     * Creates and removes customer-label relationships. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [HeaderError]() [InternalError]() [LabelError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. ID of the customer whose customer-label relationships are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customerLabels.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerLabels:mutate', 'POST', apiParams, clientConfig);

    this.customers.adParameters = {};

    /**
     * Creates, updates, or removes ad parameters. Operation statuses are returned. List of thrown errors: [AdParameterError]() [AuthenticationError]() [AuthorizationError]() [ContextError]() [DatabaseError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose ad parameters are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.adParameters.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adParameters:mutate', 'POST', apiParams, clientConfig);

    this.customers.experimentArms = {};

    /**
     * Creates, updates, or removes experiment arms. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ExperimentArmError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose experiments are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.experimentArms.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/experimentArms:mutate', 'POST', apiParams, clientConfig);

    this.customers.adGroupAssetSets = {};

    /**
     * Creates, or removes ad group asset sets. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose ad group asset sets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.adGroupAssetSets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupAssetSets:mutate', 'POST', apiParams, clientConfig);

    this.customers.adGroupCustomizers = {};

    /**
     * Creates, updates or removes ad group customizers. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose ad group customizers are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.adGroupCustomizers.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupCustomizers:mutate', 'POST', apiParams, clientConfig);

    this.customers.audiences = {};

    /**
     * Creates audiences. Operation statuses are returned. List of thrown errors: [AudienceError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose audiences are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.audiences.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/audiences:mutate', 'POST', apiParams, clientConfig);

    this.customers.customColumns = {};

    /**
     * Returns the requested custom column in full detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Required. The resource name of the custom column to fetch.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customColumns.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}', 'GET', apiParams, clientConfig);

    /**
     * Returns all the custom columns associated with the customer in full detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer to apply the CustomColumn list operation to.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customColumns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customColumns', 'GET', apiParams, clientConfig);

    this.customers.keywordPlanAdGroups = {};

    /**
     * Creates, updates, or removes Keyword Plan ad groups. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [KeywordPlanAdGroupError]() [KeywordPlanError]() [MutateError]() [NewResourceCreationError]() [QuotaError]() [RequestError]() [ResourceCountLimitExceededError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose Keyword Plan ad groups are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.keywordPlanAdGroups.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/keywordPlanAdGroups:mutate', 'POST', apiParams, clientConfig);

    this.customers.paymentsAccounts = {};

    /**
     * Returns all payments accounts associated with all managers between the login customer ID and specified serving customer in the hierarchy, inclusive. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [PaymentsAccountError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer to apply the PaymentsAccount list operation to.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.paymentsAccounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/paymentsAccounts', 'GET', apiParams, clientConfig);

    this.customers.campaignBidModifiers = {};

    /**
     * Creates, updates, or removes campaign bid modifiers. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ContextError]() [CriterionError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [HeaderError]() [IdError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. ID of the customer whose campaign bid modifiers are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaignBidModifiers.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignBidModifiers:mutate', 'POST', apiParams, clientConfig);

    this.customers.Goals = {};

    /**
     * Create or update goals. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]() [GoalError]() [GoalServicesError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose goals are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.Goals.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/Goals:mutate', 'POST', apiParams, clientConfig);

    this.customers.searchAds360 = {};

    /**
     * Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ChangeEventError]() [ChangeStatusError]() [ClickViewError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer being queried.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.searchAds360.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/searchAds360:search', 'POST', apiParams, clientConfig);

    /**
     * This method is essentially a wrapper around a series of mutate methods. The only features it offers over calling those methods directly are: - Atomic transactions - Temp resource names (described below) - Somewhat reduced latency over making a series of mutate calls Note: Only resources that support atomic transactions are included, so this method can't replace all calls to individual services. ## Atomic Transaction Benefits Atomicity makes error handling much easier. If you're making a series of changes and one fails, it can leave your account in an inconsistent state. With atomicity, you either reach the chosen state directly, or the request fails and you can retry. ## Temp Resource Names Temp resource names are a special type of resource name used to create a resource and reference that resource in the same request. For example, if a is created with `resource_name` equal to ``, that resource name can be reused in the `` field in the same request. That way, the two resources are created and linked atomically. To create a temp resource name, put a negative number in the part of the name that the server would normally allocate. Note: - Resources must be created with a temp name before the name can be reused. For example, the previous example would fail if the mutate order was reversed. - Temp names are not remembered across requests. - There's no limit to the number of temp names in a request. - Each temp name must use a unique negative number, even if the resource types differ. ## Latency It's important to group mutates by resource type or the request may time out and fail. Latency is roughly equal to a series of calls to individual mutate methods, where each change in resource type is a new call. For example, mutating is like 2 calls, while mutating is like 4 calls. List of thrown errors: [AdCustomizerError]() [AdError]() [AdGroupAdError]() [AdGroupCriterionError]() [AdGroupError]() [AssetError]() [AuthenticationError]() [AuthorizationError]() [BiddingError]() [CampaignBudgetError]() [CampaignCriterionError]() [CampaignError]() [CampaignExperimentError]() [CampaignSharedSetError]() [CollectionSizeError]() [ContextError]() [ConversionActionError]() [CriterionError]() [CustomerFeedError]() [DatabaseError]() [DateError]() [DateRangeError]() [DistinctError]() [ExtensionFeedItemError]() [ExtensionSettingError]() [FeedAttributeReferenceError]() [FeedError]() [FeedItemError]() [FeedItemSetError]() [FieldError]() [FieldMaskError]() [FunctionParsingError]() [HeaderError]() [ImageError]() [InternalError]() [KeywordPlanAdGroupKeywordError]() [KeywordPlanCampaignError]() [KeywordPlanError]() [LabelError]() [ListOperationError]() [MediaUploadError]() [MutateError]() [NewResourceCreationError]() [NullError]() [OperationAccessDeniedError]() [PolicyFindingError]() [PolicyViolationError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SettingError]() [SharedSetError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]() [UrlFieldError]() [UserListError]() [YoutubeVideoRegistrationError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose resources are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.searchAds360.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/searchAds360:mutate', 'POST', apiParams, clientConfig);

    this.customers.incentives = {};

    /**
     * Applies the incentive for the ads customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The customer ID of the account that the incentive is being applied to.
     * @param {string} apiParams.selectedIncentiveId - (Required) The incentive ID of this incentive. This is used to identify which incentive is selected by the user in the CYO flow.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.incentives.applyIncentive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/incentives/{+selectedIncentiveId}:applyIncentive', 'POST', apiParams, clientConfig);

    this.customers.campaignCustomizers = {};

    /**
     * Creates, updates or removes campaign customizers. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose campaign customizers are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaignCustomizers.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignCustomizers:mutate', 'POST', apiParams, clientConfig);

    this.customers.customInterests = {};

    /**
     * Creates or updates custom interests. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CriterionError]() [CustomInterestError]() [HeaderError]() [InternalError]() [MutateError]() [PolicyViolationError]() [QuotaError]() [RequestError]() [StringLengthError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose custom interests are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customInterests.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customInterests:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignCriteria = {};

    /**
     * Creates, updates, or removes criteria. Operation statuses are returned. List of thrown errors: [AdxError]() [AuthenticationError]() [AuthorizationError]() [CampaignCriterionError]() [CollectionSizeError]() [ContextError]() [CriterionError]() [DatabaseError]() [DistinctError]() [FieldError]() [FieldMaskError]() [FunctionError]() [HeaderError]() [IdError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperationAccessDeniedError]() [OperatorError]() [QuotaError]() [RangeError]() [RegionCodeError]() [RequestError]() [ResourceCountLimitExceededError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose criteria are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaignCriteria.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignCriteria:mutate', 'POST', apiParams, clientConfig);

    this.customers.adGroups = {};

    /**
     * Creates, updates, or removes ad groups. Operation statuses are returned. List of thrown errors: [AdGroupError]() [AdxError]() [AuthenticationError]() [AuthorizationError]() [BiddingError]() [BiddingStrategyError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [ListOperationError]() [MultiplierError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperationAccessDeniedError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SettingError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]() [UrlFieldError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose ad groups are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.adGroups.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroups:mutate', 'POST', apiParams, clientConfig);

    this.customers.conversionCustomVariables = {};

    /**
     * Creates or updates conversion custom variables. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ConversionCustomVariableError]() [DatabaseError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose conversion custom variables are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.conversionCustomVariables.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/conversionCustomVariables:mutate', 'POST', apiParams, clientConfig);

    this.customers.smartCampaignSettings = {};

    /**
     * Returns the status of the requested Smart campaign.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Required. The resource name of the Smart campaign setting belonging to the Smart campaign to fetch the status of.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.smartCampaignSettings.getSmartCampaignStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:getSmartCampaignStatus', 'GET', apiParams, clientConfig);

    /**
     * Updates Smart campaign settings for campaigns.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose Smart campaign settings are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.smartCampaignSettings.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/smartCampaignSettings:mutate', 'POST', apiParams, clientConfig);

    this.customers.adGroupAds = {};

    /**
     * Creates, updates, or removes ads. Operation statuses are returned. List of thrown errors: [AdCustomizerError]() [AdError]() [AdGroupAdError]() [AdSharingError]() [AdxError]() [AssetError]() [AssetLinkError]() [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [ContextError]() [DatabaseError]() [DateError]() [DistinctError]() [FeedAttributeReferenceError]() [FieldError]() [FieldMaskError]() [FunctionError]() [FunctionParsingError]() [HeaderError]() [IdError]() [ImageError]() [InternalError]() [ListOperationError]() [MediaBundleError]() [MediaFileError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperationAccessDeniedError]() [OperatorError]() [PolicyFindingError]() [PolicyValidationParameterError]() [PolicyViolationError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]() [UrlFieldError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose ads are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.adGroupAds.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupAds:mutate', 'POST', apiParams, clientConfig);

    /**
     * Remove automatically created assets from an ad. List of thrown errors: [AdError]() [AuthenticationError]() [AuthorizationError]() [AutomaticallyCreatedAssetRemovalError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.adGroupAd - (Required) Required. The resource name of the AdGroupAd from which to remove automatically created assets.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.adGroupAds.removeAutomaticallyCreatedAssets = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+adGroupAd}:removeAutomaticallyCreatedAssets', 'POST', apiParams, clientConfig);

    this.customers.assetGroupSignals = {};

    /**
     * Creates or removes asset group signals. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose asset group signals are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.assetGroupSignals.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/assetGroupSignals:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerUserAccesses = {};

    /**
     * Updates, removes permission of a user on a given customer. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CustomerUserAccessError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customerUserAccesses.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerUserAccesses:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignSharedSets = {};

    /**
     * Creates or removes campaign shared sets. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CampaignSharedSetError]() [ContextError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [HeaderError]() [IdError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose campaign shared sets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaignSharedSets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignSharedSets:mutate', 'POST', apiParams, clientConfig);

    this.customers.labels = {};

    /**
     * Creates, updates, or removes labels. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [LabelError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. ID of the customer whose labels are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.labels.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/labels:mutate', 'POST', apiParams, clientConfig);

    this.customers.keywordPlanCampaignKeywords = {};

    /**
     * Creates, updates, or removes Keyword Plan campaign keywords. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [KeywordPlanAdGroupKeywordError]() [KeywordPlanCampaignKeywordError]() [QuotaError]() [RequestError]() [ResourceCountLimitExceededError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose campaign keywords are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.keywordPlanCampaignKeywords.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/keywordPlanCampaignKeywords:mutate', 'POST', apiParams, clientConfig);

    this.customers.customizerAttributes = {};

    /**
     * Creates, updates or removes customizer attributes. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose customizer attributes are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customizerAttributes.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customizerAttributes:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaigns = {};

    /**
     * Creates, updates, or removes campaigns. Operation statuses are returned. List of thrown errors: [AdxError]() [AuthenticationError]() [AuthorizationError]() [BiddingError]() [BiddingStrategyError]() [CampaignBudgetError]() [CampaignError]() [ContextError]() [DatabaseError]() [DateError]() [DateRangeError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [ListOperationError]() [MutateError]() [NewResourceCreationError]() [NotAllowlistedError]() [NotEmptyError]() [NullError]() [OperationAccessDeniedError]() [OperatorError]() [QuotaError]() [RangeError]() [RegionCodeError]() [RequestError]() [ResourceCountLimitExceededError]() [SettingError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]() [UrlFieldError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose campaigns are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaigns.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaigns:mutate', 'POST', apiParams, clientConfig);

    /**
     * Enables Brand Guidelines for Performance Max campaigns. List of thrown errors: [AuthenticationError]() [AssetError]() [AssetLinkError]() [AuthorizationError]() [BrandGuidelinesMigrationError]() [CampaignError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]() [ResourceCountLimitExceededError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose campaigns are being enabled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaigns.enablePMaxBrandGuidelines = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaigns:enablePMaxBrandGuidelines', 'POST', apiParams, clientConfig);

    this.customers.biddingDataExclusions = {};

    /**
     * Creates, updates, or removes data exclusions. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. ID of the customer whose data exclusions are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.biddingDataExclusions.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/biddingDataExclusions:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerAssetSets = {};

    /**
     * Creates, or removes customer asset sets. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose customer asset sets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customerAssetSets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerAssetSets:mutate', 'POST', apiParams, clientConfig);

    this.customers.assetSetAssets = {};

    /**
     * Creates, updates or removes asset set assets. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose asset set assets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.assetSetAssets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/assetSetAssets:mutate', 'POST', apiParams, clientConfig);

    this.customers.userListCustomerTypes = {};

    /**
     * Attach or remove user list customer types. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [UserListCustomerTypeError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose user list customer types are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.userListCustomerTypes.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/userListCustomerTypes:mutate', 'POST', apiParams, clientConfig);

    this.customers.productLinkInvitations = {};

    /**
     * Creates a product link invitation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.productLinkInvitations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/productLinkInvitations:create', 'POST', apiParams, clientConfig);

    /**
     * Update a product link invitation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.productLinkInvitations.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/productLinkInvitations:update', 'POST', apiParams, clientConfig);

    /**
     * Remove a product link invitation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the product link invitation being removed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.productLinkInvitations.remove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/productLinkInvitations:remove', 'POST', apiParams, clientConfig);

    this.customers.adGroupBidModifiers = {};

    /**
     * Creates, updates, or removes ad group bid modifiers. Operation statuses are returned. List of thrown errors: [AdGroupBidModifierError]() [AuthenticationError]() [AuthorizationError]() [ContextError]() [CriterionError]() [DatabaseError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. ID of the customer whose ad group bid modifiers are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.adGroupBidModifiers.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupBidModifiers:mutate', 'POST', apiParams, clientConfig);

    this.customers.assets = {};

    /**
     * Creates assets. Operation statuses are returned. List of thrown errors: [AssetError]() [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [CurrencyCodeError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [ListOperationError]() [MediaUploadError]() [MutateError]() [NotAllowlistedError]() [NotEmptyError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]() [UrlFieldError]() [YoutubeVideoRegistrationError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose assets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.assets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/assets:mutate', 'POST', apiParams, clientConfig);

    this.customers.CustomerCustomizers = {};

    /**
     * Creates, updates or removes customer customizers. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose customer customizers are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.CustomerCustomizers.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/CustomerCustomizers:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerManagerLinks = {};

    /**
     * Updates customer manager links. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [ManagerLinkError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose customer manager links are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customerManagerLinks.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerManagerLinks:mutate', 'POST', apiParams, clientConfig);

    /**
     * Moves a client customer to a new manager customer. This simplifies the complex request that requires two operations to move a client customer to a new manager, for example: 1. Update operation with Status INACTIVE (previous manager) and, 2. Update operation with Status ACTIVE (new manager). List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the client customer that is being moved.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customerManagerLinks.moveManagerLink = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerManagerLinks:moveManagerLink', 'POST', apiParams, clientConfig);

    this.customers.experiments = {};

    /**
     * Creates, updates, or removes experiments. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ExperimentError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose experiments are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.experiments.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/experiments:mutate', 'POST', apiParams, clientConfig);

    /**
     * Promotes the trial campaign thus applying changes in the trial campaign to the base campaign. This method returns a long running operation that tracks the promotion of the experiment campaign. If it fails, a list of errors can be retrieved using the ListExperimentAsyncErrors method. The operation's metadata will be a string containing the resource name of the created experiment. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ExperimentError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Required. The resource name of the experiment to promote.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.experiments.promoteExperiment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:promoteExperiment', 'POST', apiParams, clientConfig);

    /**
     * Immediately ends an experiment, changing the experiment's scheduled end date and without waiting for end of day. End date is updated to be the time of the request. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ExperimentError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.experiment - (Required) Required. The resource name of the campaign experiment to end.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.experiments.endExperiment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+experiment}:endExperiment', 'POST', apiParams, clientConfig);

    /**
     * Returns all errors that occurred during the last Experiment update (either scheduling or promotion). Supports standard list paging. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Number of elements to retrieve in a single page. When a page request is too large, the server may decide to further limit the number of returned resources. The maximum page size is 1000.
     * @param {string} apiParams.pageToken - Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results.
     * @param {string} apiParams.resourceName - (Required) Required. The name of the experiment from which to retrieve the async errors.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.experiments.listExperimentAsyncErrors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:listExperimentAsyncErrors', 'GET', apiParams, clientConfig);

    /**
     * Graduates an experiment to a full campaign. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ExperimentError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.experiment - (Required) Required. The experiment to be graduated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.experiments.graduateExperiment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+experiment}:graduateExperiment', 'POST', apiParams, clientConfig);

    /**
     * Schedule an experiment. The in design campaign will be converted into a real campaign (called the experiment campaign) that will begin serving ads if successfully created. The experiment is scheduled immediately with status INITIALIZING. This method returns a long running operation that tracks the forking of the in design campaign. If the forking fails, a list of errors can be retrieved using the ListExperimentAsyncErrors method. The operation's metadata will be a string containing the resource name of the created experiment. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [ExperimentError]() [DatabaseError]() [DateError]() [DateRangeError]() [FieldError]() [HeaderError]() [InternalError]() [QuotaError]() [RangeError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Required. The scheduled experiment.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.experiments.scheduleExperiment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:scheduleExperiment', 'POST', apiParams, clientConfig);

    this.customers.campaignConversionGoals = {};

    /**
     * Creates, updates or removes campaign conversion goals. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose campaign conversion goals are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaignConversionGoals.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignConversionGoals:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignDrafts = {};

    /**
     * Returns all errors that occurred during CampaignDraft promote. Throws an error if called before campaign draft is promoted. Supports standard list paging. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Number of elements to retrieve in a single page. When a page request is too large, the server may decide to further limit the number of returned resources.
     * @param {string} apiParams.pageToken - Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results.
     * @param {string} apiParams.resourceName - (Required) Required. The name of the campaign draft from which to retrieve the async errors.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaignDrafts.listAsyncErrors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:listAsyncErrors', 'GET', apiParams, clientConfig);

    /**
     * Creates, updates, or removes campaign drafts. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CampaignDraftError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose campaign drafts are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaignDrafts.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignDrafts:mutate', 'POST', apiParams, clientConfig);

    /**
     * Promotes the changes in a draft back to the base campaign. This method returns a Long Running Operation (LRO) indicating if the Promote is done. Use google.longrunning.Operations.GetOperation to poll the LRO until it is done. Only a done status is returned in the response. See the status in the Campaign Draft resource to determine if the promotion was successful. If the LRO failed, use CampaignDraftService.ListCampaignDraftAsyncErrors to view the list of error reasons. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CampaignDraftError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.campaignDraft - (Required) Required. The resource name of the campaign draft to promote.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaignDrafts.promote = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+campaignDraft}:promote', 'POST', apiParams, clientConfig);

    this.customers.sharedCriteria = {};

    /**
     * Creates or removes shared criteria. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CriterionError]() [DatabaseError]() [DistinctError]() [FieldError]() [HeaderError]() [IdError]() [InternalError]() [MutateError]() [NotEmptyError]() [NullError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose shared criteria are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.sharedCriteria.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/sharedCriteria:mutate', 'POST', apiParams, clientConfig);

    this.customers.customAudiences = {};

    /**
     * Creates or updates custom audiences. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CustomAudienceError]() [CustomInterestError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [OperationAccessDeniedError]() [PolicyViolationError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose custom audiences are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customAudiences.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customAudiences:mutate', 'POST', apiParams, clientConfig);

    this.customers.adGroupAssets = {};

    /**
     * Creates, updates, or removes ad group assets. Operation statuses are returned. List of thrown errors: [AssetLinkError]() [AuthenticationError]() [AuthorizationError]() [ContextError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [NotAllowlistedError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose ad group assets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.adGroupAssets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupAssets:mutate', 'POST', apiParams, clientConfig);

    this.customers.billingSetups = {};

    /**
     * Creates a billing setup, or cancels an existing billing setup. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [BillingSetupError]() [DateError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. Id of the customer to apply the billing setup mutate operation to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.billingSetups.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/billingSetups:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignAssetSets = {};

    /**
     * Creates, updates or removes campaign asset sets. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose campaign asset sets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaignAssetSets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignAssetSets:mutate', 'POST', apiParams, clientConfig);

    this.customers.conversionValueRuleSets = {};

    /**
     * Creates, updates or removes conversion value rule sets. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose conversion value rule sets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.conversionValueRuleSets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/conversionValueRuleSets:mutate', 'POST', apiParams, clientConfig);

    this.customers.dataLinks = {};

    /**
     * Remove a data link. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [DataLinkError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer for which the data link is updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.dataLinks.remove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/dataLinks:remove', 'POST', apiParams, clientConfig);

    /**
     * Update a data link. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [DataLinkError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer for which the data link is created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.dataLinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/dataLinks:update', 'POST', apiParams, clientConfig);

    /**
     * Creates a data link. The requesting Google Ads account name and account ID will be shared with the third party (such as YouTube creators for video links) to whom you are creating the link with. Only customers on the allow-list can create data links. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [DataLinkError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer for which the data link is created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.dataLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/dataLinks:create', 'POST', apiParams, clientConfig);

    this.customers.customConversionGoals = {};

    /**
     * Creates, updates or removes custom conversion goals. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose custom conversion goals are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customConversionGoals.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customConversionGoals:mutate', 'POST', apiParams, clientConfig);

    this.customers.biddingStrategies = {};

    /**
     * Creates, updates, or removes bidding strategies. Operation statuses are returned. List of thrown errors: [AdxError]() [AuthenticationError]() [AuthorizationError]() [BiddingError]() [BiddingStrategyError]() [ContextError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperationAccessDeniedError]() [OperatorError]() [QuotaError]() [RangeError]() [RequestError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose bidding strategies are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.biddingStrategies.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/biddingStrategies:mutate', 'POST', apiParams, clientConfig);

    this.customers.CampaignGoalConfigs = {};

    /**
     * Create or update campaign goal configs. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]() [CampaignGoalConfigError]() [GoalServicesError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose campaign goal configs are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.CampaignGoalConfigs.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/CampaignGoalConfigs:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignLifecycleGoal = {};

    /**
     * Process the given campaign lifecycle configurations. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CampaignLifecycleGoalConfigError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer performing the upload.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaignLifecycleGoal.configureCampaignLifecycleGoals = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignLifecycleGoal:configureCampaignLifecycleGoals', 'POST', apiParams, clientConfig);

    this.customers.offlineUserDataJobs = {};

    /**
     * Runs the offline user data job. When finished, the long running operation will contain the processing result or failure information, if any. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [HeaderError]() [InternalError]() [OfflineUserDataJobError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Required. The resource name of the OfflineUserDataJob to run.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.offlineUserDataJobs.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:run', 'POST', apiParams, clientConfig);

    /**
     * Creates an offline user data job. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [NotAllowlistedError]() [OfflineUserDataJobError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer for which to create an offline user data job.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.offlineUserDataJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/offlineUserDataJobs:create', 'POST', apiParams, clientConfig);

    /**
     * Adds operations to the offline user data job. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [OfflineUserDataJobError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Required. The resource name of the OfflineUserDataJob.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.offlineUserDataJobs.addOperations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:addOperations', 'POST', apiParams, clientConfig);

    this.customers.adGroupAdLabels = {};

    /**
     * Creates and removes ad group ad labels. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [HeaderError]() [InternalError]() [LabelError]() [MutateError]() [NewResourceCreationError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. ID of the customer whose ad group ad labels are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.adGroupAdLabels.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupAdLabels:mutate', 'POST', apiParams, clientConfig);

    this.customers.recommendationSubscriptions = {};

    /**
     * Mutates given subscription with corresponding apply parameters. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RecommendationError]() [RecommendationSubscriptionError]() [RequestError]() [UrlFieldError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the subscribing customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.recommendationSubscriptions.mutateRecommendationSubscription = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/recommendationSubscriptions:mutateRecommendationSubscription', 'POST', apiParams, clientConfig);

    this.customers.customerClientLinks = {};

    /**
     * Creates or updates a customer client link. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [ManagerLinkError]() [MutateError]() [NewResourceCreationError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose customer link are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customerClientLinks.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerClientLinks:mutate', 'POST', apiParams, clientConfig);

    this.customers.keywordPlanAdGroupKeywords = {};

    /**
     * Creates, updates, or removes Keyword Plan ad group keywords. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [KeywordPlanAdGroupKeywordError]() [KeywordPlanError]() [MutateError]() [QuotaError]() [RequestError]() [ResourceCountLimitExceededError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose Keyword Plan ad group keywords are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.keywordPlanAdGroupKeywords.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/keywordPlanAdGroupKeywords:mutate', 'POST', apiParams, clientConfig);

    this.customers.assetGroups = {};

    /**
     * Creates, updates or removes asset groups. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose asset groups are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.assetGroups.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/assetGroups:mutate', 'POST', apiParams, clientConfig);

    this.customers.assetGroupListingGroupFilters = {};

    /**
     * Creates, updates or removes asset group listing group filters. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose asset group listing group filters are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.assetGroupListingGroupFilters.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/assetGroupListingGroupFilters:mutate', 'POST', apiParams, clientConfig);

    this.customers.conversionValueRules = {};

    /**
     * Creates, updates, or removes conversion value rules. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose conversion value rules are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.conversionValueRules.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/conversionValueRules:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignGroups = {};

    /**
     * Creates, updates, or removes campaign groups. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose campaign groups are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaignGroups.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignGroups:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerNegativeCriteria = {};

    /**
     * Creates or removes criteria. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CriterionError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose criteria are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customerNegativeCriteria.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerNegativeCriteria:mutate', 'POST', apiParams, clientConfig);

    this.customers.accountBudgetProposals = {};

    /**
     * Creates, updates, or removes account budget proposals. Operation statuses are returned. List of thrown errors: [AccountBudgetProposalError]() [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [DateError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]() [StringLengthError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.accountBudgetProposals.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/accountBudgetProposals:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignLabels = {};

    /**
     * Creates and removes campaign-label relationships. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [LabelError]() [MutateError]() [NewResourceCreationError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. ID of the customer whose campaign-label relationships are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaignLabels.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignLabels:mutate', 'POST', apiParams, clientConfig);

    this.customers.recommendations = {};

    /**
     * Applies given recommendations with corresponding apply parameters. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RecommendationError]() [RequestError]() [UrlFieldError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer with the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.recommendations.apply = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/recommendations:apply', 'POST', apiParams, clientConfig);

    /**
     * Dismisses given recommendations. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RecommendationError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer with the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.recommendations.dismiss = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/recommendations:dismiss', 'POST', apiParams, clientConfig);

    /**
     * Generates Recommendations based off the requested recommendation_types. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RecommendationError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer generating recommendations.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.recommendations.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/recommendations:generate', 'POST', apiParams, clientConfig);

    this.customers.ads = {};

    /**
     * Updates ads. Operation statuses are returned. Updating ads is not supported for TextAd, ExpandedDynamicSearchAd, GmailAd and ImageAd. List of thrown errors: [AdCustomizerError]() [AdError]() [AdSharingError]() [AdxError]() [AssetError]() [AssetLinkError]() [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [DatabaseError]() [DateError]() [DistinctError]() [FeedAttributeReferenceError]() [FieldError]() [FieldMaskError]() [FunctionError]() [FunctionParsingError]() [HeaderError]() [IdError]() [ImageError]() [InternalError]() [ListOperationError]() [MediaBundleError]() [MediaFileError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperatorError]() [PolicyFindingError]() [PolicyViolationError]() [QuotaError]() [RangeError]() [RequestError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]() [UrlFieldError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose ads are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.ads.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/ads:mutate', 'POST', apiParams, clientConfig);

    this.customers.assetGroupAssets = {};

    /**
     * Creates, updates or removes asset group assets. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose asset group assets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.assetGroupAssets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/assetGroupAssets:mutate', 'POST', apiParams, clientConfig);

    this.customers.userLists = {};

    /**
     * Creates or updates user lists. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CollectionSizeError]() [DatabaseError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [NotAllowlistedError]() [NotEmptyError]() [OperationAccessDeniedError]() [QuotaError]() [RangeError]() [RequestError]() [StringFormatError]() [StringLengthError]() [UserListError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose user lists are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.userLists.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/userLists:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignBudgets = {};

    /**
     * Creates, updates, or removes campaign budgets. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [CampaignBudgetError]() [DatabaseError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [NewResourceCreationError]() [OperationAccessDeniedError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [StringLengthError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose campaign budgets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaignBudgets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignBudgets:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerConversionGoals = {};

    /**
     * Creates, updates or removes customer conversion goals. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose customer conversion goals are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customerConversionGoals.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerConversionGoals:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerSkAdNetworkConversionValueSchemas = {};

    /**
     * Creates or updates the CustomerSkAdNetworkConversionValueSchema. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [InternalError]() [MutateError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The ID of the customer whose shared sets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customerSkAdNetworkConversionValueSchemas.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerSkAdNetworkConversionValueSchemas:mutate', 'POST', apiParams, clientConfig);

    this.customers.adGroupLabels = {};

    /**
     * Creates and removes ad group labels. Operation statuses are returned. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [LabelError]() [MutateError]() [NewResourceCreationError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. ID of the customer whose ad group labels are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.adGroupLabels.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupLabels:mutate', 'POST', apiParams, clientConfig);

    this.customers.campaignAssets = {};

    /**
     * Creates or removes campaign assets. Operation statuses are returned. List of thrown errors: [AssetLinkError]() [AuthenticationError]() [AuthorizationError]() [ContextError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [NotAllowlistedError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose campaign assets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.campaignAssets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/campaignAssets:mutate', 'POST', apiParams, clientConfig);

    this.customers.conversionGoalCampaignConfigs = {};

    /**
     * Creates, updates or removes conversion goal campaign config. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose custom conversion goals are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.conversionGoalCampaignConfigs.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/conversionGoalCampaignConfigs:mutate', 'POST', apiParams, clientConfig);

    this.customers.accountLinks = {};

    /**
     * Creates an account link. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]() [ThirdPartyAppAnalyticsLinkError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer for which the account link is created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.accountLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/accountLinks:create', 'POST', apiParams, clientConfig);

    /**
     * Creates or removes an account link. From V5, create is not supported through AccountLinkService.MutateAccountLink. Use AccountLinkService.CreateAccountLink instead. List of thrown errors: [AccountLinkError]() [AuthenticationError]() [AuthorizationError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.accountLinks.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/accountLinks:mutate', 'POST', apiParams, clientConfig);

    this.customers.AdGroupCriterionCustomizers = {};

    /**
     * Creates, updates or removes ad group criterion customizers. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose ad group criterion customizers are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.AdGroupCriterionCustomizers.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/AdGroupCriterionCustomizers:mutate', 'POST', apiParams, clientConfig);

    this.customers.batchJobs = {};

    /**
     * Returns the results of the batch job. The job must be done. Supports standard list paging. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [BatchJobError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - 
     * @param {string} apiParams.pageToken - Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results.
     * @param {string} apiParams.resourceName - (Required) Required. The resource name of the batch job whose results are being listed.
     * @param {string} apiParams.responseContentType - The response content type setting. Determines whether the mutable resource or just the resource name should be returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.batchJobs.listResults = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:listResults', 'GET', apiParams, clientConfig);

    /**
     * Runs the batch job. The Operation.metadata field type is BatchJobMetadata. When finished, the long running operation will not contain errors or a response. Instead, use ListBatchJobResults to get the results of the job. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [BatchJobError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Required. The resource name of the BatchJob to run.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.batchJobs.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:run', 'POST', apiParams, clientConfig);

    /**
     * Mutates a batch job. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]() [ResourceCountLimitExceededError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer for which to create a batch job.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.batchJobs.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/batchJobs:mutate', 'POST', apiParams, clientConfig);

    /**
     * Add operations to the batch job. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [BatchJobError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]() [ResourceCountLimitExceededError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Required. The resource name of the batch job.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.batchJobs.addOperations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:addOperations', 'POST', apiParams, clientConfig);

    this.customers.invoices = {};

    /**
     * Returns all invoices associated with a billing setup, for a given month. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [InvoiceError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.billingSetup - Required. The billing setup resource name of the requested invoices. `customers/{customer_id}/billingSetups/{billing_setup_id}`
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer to fetch invoices for.
     * @param {boolean} apiParams.includeGranularLevelInvoiceDetails - Optional. When true, the response will include more granular level invoice details such as campaign level cost breakdown, itemized regulatory costs and adjustments. The default value is false.
     * @param {string} apiParams.issueMonth - Required. The issue month to retrieve invoices.
     * @param {string} apiParams.issueYear - Required. The issue year to retrieve invoices, in yyyy format. Only invoices issued in 2019 or later can be retrieved.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.invoices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/invoices', 'GET', apiParams, clientConfig);

    this.customers.assetSets = {};

    /**
     * Creates, updates or removes asset sets. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose asset sets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.assetSets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/assetSets:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerUserAccessInvitations = {};

    /**
     * Creates or removes an access invitation. List of thrown errors: [AccessInvitationError]() [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose access invitation is being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customerUserAccessInvitations.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerUserAccessInvitations:mutate', 'POST', apiParams, clientConfig);

    this.customers.productLinks = {};

    /**
     * Creates a product link. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [DatabaseError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer for which the product link is created.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.productLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/productLinks:create', 'POST', apiParams, clientConfig);

    /**
     * Removes a product link. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [FieldMaskError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.productLinks.remove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/productLinks:remove', 'POST', apiParams, clientConfig);

    this.customers.biddingSeasonalityAdjustments = {};

    /**
     * Creates, updates, or removes seasonality adjustments. Operation statuses are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. ID of the customer whose seasonality adjustments are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.biddingSeasonalityAdjustments.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/biddingSeasonalityAdjustments:mutate', 'POST', apiParams, clientConfig);

    this.customers.customerAssets = {};

    /**
     * Creates, updates, or removes customer assets. Operation statuses are returned. List of thrown errors: [AssetLinkError]() [AuthenticationError]() [AuthorizationError]() [FieldError]() [HeaderError]() [InternalError]() [MutateError]() [QuotaError]() [RequestError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. The ID of the customer whose customer assets are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.customerAssets.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/customerAssets:mutate', 'POST', apiParams, clientConfig);

    this.customers.adGroupCriteria = {};

    /**
     * Creates, updates, or removes criteria. Operation statuses are returned. List of thrown errors: [AdGroupCriterionError]() [AdxError]() [AuthenticationError]() [AuthorizationError]() [BiddingError]() [BiddingStrategyError]() [CollectionSizeError]() [ContextError]() [CriterionError]() [DatabaseError]() [DateError]() [DistinctError]() [FieldError]() [FieldMaskError]() [HeaderError]() [IdError]() [InternalError]() [MultiplierError]() [MutateError]() [NewResourceCreationError]() [NotEmptyError]() [NullError]() [OperationAccessDeniedError]() [OperatorError]() [PolicyViolationError]() [QuotaError]() [RangeError]() [RequestError]() [ResourceCountLimitExceededError]() [SizeLimitError]() [StringFormatError]() [StringLengthError]() [UrlFieldError]()
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) Required. ID of the customer whose criteria are being modified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.adGroupCriteria.mutate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/customers/{+customerId}/adGroupCriteria:mutate', 'POST', apiParams, clientConfig);

    this.customers.localServicesLeads = {};

    /**
     * RPC to provide feedback on Local Services Lead resources.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Required. The resource name of the local services lead that for which the feedback is being provided.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.localServicesLeads.provideLeadFeedback = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v23/{+resourceName}:provideLeadFeedback', 'POST', apiParams, clientConfig);
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
