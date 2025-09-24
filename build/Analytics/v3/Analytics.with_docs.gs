
/**
 * Google Apps Script client library for the Google Analytics API
 * Documentation URL: https://developers.google.com/analytics/
 * @class
 */
class Analytics {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://analytics.googleapis.com/';
    this._servicePath = 'analytics/v3/';


    this.data = {};

    this.data.ga = {};

    /**
     * Returns Analytics data for a view (profile).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dimensions - A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
     * @param {string} apiParams.end-date - (Required) End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
     * @param {string} apiParams.filters - A comma-separated list of dimension or metric filters to be applied to Analytics data.
     * @param {string} apiParams.ids - (Required) Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     * @param {boolean} apiParams.include-empty-rows - The response will include empty rows if this parameter is set to true, the default is true
     * @param {integer} apiParams.max-results - The maximum number of entries to include in this feed.
     * @param {string} apiParams.metrics - (Required) A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
     * @param {string} apiParams.output - The selected format for the response. Default format is JSON.
     * @param {string} apiParams.samplingLevel - The desired sampling level.
     * @param {string} apiParams.segment - An Analytics segment to be applied to data.
     * @param {string} apiParams.sort - A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
     * @param {string} apiParams.start-date - (Required) Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
     * @param {integer} apiParams.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.data.ga.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('data/ga', 'GET', apiParams, clientConfig);

    this.data.mcf = {};

    /**
     * Returns Analytics Multi-Channel Funnels data for a view (profile).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dimensions - A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.
     * @param {string} apiParams.end-date - (Required) End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
     * @param {string} apiParams.filters - A comma-separated list of dimension or metric filters to be applied to the Analytics data.
     * @param {string} apiParams.ids - (Required) Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     * @param {integer} apiParams.max-results - The maximum number of entries to include in this feed.
     * @param {string} apiParams.metrics - (Required) A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
     * @param {string} apiParams.samplingLevel - The desired sampling level.
     * @param {string} apiParams.sort - A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.
     * @param {string} apiParams.start-date - (Required) Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
     * @param {integer} apiParams.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.data.mcf.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('data/mcf', 'GET', apiParams, clientConfig);

    this.data.realtime = {};

    /**
     * Returns real time data for a view (profile).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dimensions - A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
     * @param {string} apiParams.filters - A comma-separated list of dimension or metric filters to be applied to real time data.
     * @param {string} apiParams.ids - (Required) Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     * @param {integer} apiParams.max-results - The maximum number of entries to include in this feed.
     * @param {string} apiParams.metrics - (Required) A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
     * @param {string} apiParams.sort - A comma-separated list of dimensions or metrics that determine the sort order for real time data.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.data.realtime.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('data/realtime', 'GET', apiParams, clientConfig);

    this.management = {};

    this.management.accountSummaries = {};

    /**
     * Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.max-results - The maximum number of account summaries to include in this response, where the largest acceptable value is 1000.
     * @param {integer} apiParams.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.accountSummaries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accountSummaries', 'GET', apiParams, clientConfig);

    this.management.accountUserLinks = {};

    /**
     * Removes a user from the given account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to delete the user link for.
     * @param {string} apiParams.linkId - (Required) Link ID to delete the user link for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.accountUserLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/entityUserLinks/{linkId}', 'DELETE', apiParams, clientConfig);

    /**
     * Adds a new user to the given account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to create the user link for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.accountUserLinks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/entityUserLinks', 'POST', apiParams, clientConfig);

    /**
     * Lists account-user links for a given account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to retrieve the user links for.
     * @param {integer} apiParams.max-results - The maximum number of account-user links to include in this response.
     * @param {integer} apiParams.start-index - An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.accountUserLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/entityUserLinks', 'GET', apiParams, clientConfig);

    /**
     * Updates permissions for an existing user on the given account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to update the account-user link for.
     * @param {string} apiParams.linkId - (Required) Link ID to update the account-user link for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.accountUserLinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/entityUserLinks/{linkId}', 'PUT', apiParams, clientConfig);

    this.management.accounts = {};

    /**
     * Lists all accounts to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.max-results - The maximum number of accounts to include in this response.
     * @param {integer} apiParams.start-index - An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts', 'GET', apiParams, clientConfig);

    this.management.clientId = {};

    /**
     * Hashes the given Client ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.clientId.hashClientId = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/clientId:hashClientId', 'POST', apiParams, clientConfig);

    this.management.customDataSources = {};

    /**
     * List custom data sources to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account Id for the custom data sources to retrieve.
     * @param {integer} apiParams.max-results - The maximum number of custom data sources to include in this response.
     * @param {integer} apiParams.start-index - A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} apiParams.webPropertyId - (Required) Web property Id for the custom data sources to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.customDataSources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources', 'GET', apiParams, clientConfig);

    this.management.customDimensions = {};

    /**
     * Get a custom dimension to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID for the custom dimension to retrieve.
     * @param {string} apiParams.customDimensionId - (Required) The ID of the custom dimension to retrieve.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID for the custom dimension to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.customDimensions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}', 'GET', apiParams, clientConfig);

    /**
     * Create a new custom dimension.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID for the custom dimension to create.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID for the custom dimension to create.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.customDimensions.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions', 'POST', apiParams, clientConfig);

    /**
     * Lists custom dimensions to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID for the custom dimensions to retrieve.
     * @param {integer} apiParams.max-results - The maximum number of custom dimensions to include in this response.
     * @param {integer} apiParams.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID for the custom dimensions to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.customDimensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing custom dimension. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID for the custom dimension to update.
     * @param {string} apiParams.customDimensionId - (Required) Custom dimension ID for the custom dimension to update.
     * @param {boolean} apiParams.ignoreCustomDataSourceLinks - Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID for the custom dimension to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.customDimensions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing custom dimension.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID for the custom dimension to update.
     * @param {string} apiParams.customDimensionId - (Required) Custom dimension ID for the custom dimension to update.
     * @param {boolean} apiParams.ignoreCustomDataSourceLinks - Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID for the custom dimension to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.customDimensions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}', 'PUT', apiParams, clientConfig);

    this.management.customMetrics = {};

    /**
     * Get a custom metric to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID for the custom metric to retrieve.
     * @param {string} apiParams.customMetricId - (Required) The ID of the custom metric to retrieve.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID for the custom metric to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.customMetrics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}', 'GET', apiParams, clientConfig);

    /**
     * Create a new custom metric.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID for the custom metric to create.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID for the custom dimension to create.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.customMetrics.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics', 'POST', apiParams, clientConfig);

    /**
     * Lists custom metrics to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID for the custom metrics to retrieve.
     * @param {integer} apiParams.max-results - The maximum number of custom metrics to include in this response.
     * @param {integer} apiParams.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID for the custom metrics to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.customMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing custom metric. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID for the custom metric to update.
     * @param {string} apiParams.customMetricId - (Required) Custom metric ID for the custom metric to update.
     * @param {boolean} apiParams.ignoreCustomDataSourceLinks - Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID for the custom metric to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.customMetrics.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing custom metric.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID for the custom metric to update.
     * @param {string} apiParams.customMetricId - (Required) Custom metric ID for the custom metric to update.
     * @param {boolean} apiParams.ignoreCustomDataSourceLinks - Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID for the custom metric to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.customMetrics.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}', 'PUT', apiParams, clientConfig);

    this.management.experiments = {};

    /**
     * Delete an experiment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to which the experiment belongs
     * @param {string} apiParams.experimentId - (Required) ID of the experiment to delete
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to which the experiment belongs
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to which the experiment belongs
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.experiments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns an experiment to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to retrieve the experiment for.
     * @param {string} apiParams.experimentId - (Required) Experiment ID to retrieve the experiment for.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to retrieve the experiment for.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to retrieve the experiment for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.experiments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'GET', apiParams, clientConfig);

    /**
     * Create a new experiment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to create the experiment for.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to create the experiment for.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to create the experiment for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.experiments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments', 'POST', apiParams, clientConfig);

    /**
     * Lists experiments to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to retrieve experiments for.
     * @param {integer} apiParams.max-results - The maximum number of experiments to include in this response.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to retrieve experiments for.
     * @param {integer} apiParams.start-index - An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to retrieve experiments for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.experiments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments', 'GET', apiParams, clientConfig);

    /**
     * Update an existing experiment. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the experiment to update.
     * @param {string} apiParams.experimentId - (Required) Experiment ID of the experiment to update.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID of the experiment to update.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID of the experiment to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.experiments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'PATCH', apiParams, clientConfig);

    /**
     * Update an existing experiment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the experiment to update.
     * @param {string} apiParams.experimentId - (Required) Experiment ID of the experiment to update.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID of the experiment to update.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID of the experiment to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.experiments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'PUT', apiParams, clientConfig);

    this.management.filters = {};

    /**
     * Delete a filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to delete the filter for.
     * @param {string} apiParams.filterId - (Required) ID of the filter to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.filters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns filters to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to retrieve filters for.
     * @param {string} apiParams.filterId - (Required) Filter ID to retrieve filters for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.filters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'GET', apiParams, clientConfig);

    /**
     * Create a new filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to create filter for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.filters.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/filters', 'POST', apiParams, clientConfig);

    /**
     * Lists all filters for an account
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to retrieve filters for.
     * @param {integer} apiParams.max-results - The maximum number of filters to include in this response.
     * @param {integer} apiParams.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.filters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/filters', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing filter. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to which the filter belongs.
     * @param {string} apiParams.filterId - (Required) ID of the filter to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.filters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to which the filter belongs.
     * @param {string} apiParams.filterId - (Required) ID of the filter to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.filters.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'PUT', apiParams, clientConfig);

    this.management.goals = {};

    /**
     * Gets a goal to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to retrieve the goal for.
     * @param {string} apiParams.goalId - (Required) Goal ID to retrieve the goal for.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to retrieve the goal for.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to retrieve the goal for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.goals.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}', 'GET', apiParams, clientConfig);

    /**
     * Create a new goal.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to create the goal for.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to create the goal for.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to create the goal for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.goals.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals', 'POST', apiParams, clientConfig);

    /**
     * Lists goals to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     * @param {integer} apiParams.max-results - The maximum number of goals to include in this response.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
     * @param {integer} apiParams.start-index - An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.goals.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing goal. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to update the goal.
     * @param {string} apiParams.goalId - (Required) Index of the goal to be updated.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to update the goal.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to update the goal.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.goals.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing goal.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to update the goal.
     * @param {string} apiParams.goalId - (Required) Index of the goal to be updated.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to update the goal.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to update the goal.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.goals.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}', 'PUT', apiParams, clientConfig);

    this.management.profileFilterLinks = {};

    /**
     * Delete a profile filter link.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to which the profile filter link belongs.
     * @param {string} apiParams.linkId - (Required) ID of the profile filter link to delete.
     * @param {string} apiParams.profileId - (Required) Profile ID to which the filter link belongs.
     * @param {string} apiParams.webPropertyId - (Required) Web property Id to which the profile filter link belongs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profileFilterLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns a single profile filter link.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to retrieve profile filter link for.
     * @param {string} apiParams.linkId - (Required) ID of the profile filter link.
     * @param {string} apiParams.profileId - (Required) Profile ID to retrieve filter link for.
     * @param {string} apiParams.webPropertyId - (Required) Web property Id to retrieve profile filter link for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profileFilterLinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'GET', apiParams, clientConfig);

    /**
     * Create a new profile filter link.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to create profile filter link for.
     * @param {string} apiParams.profileId - (Required) Profile ID to create filter link for.
     * @param {string} apiParams.webPropertyId - (Required) Web property Id to create profile filter link for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profileFilterLinks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks', 'POST', apiParams, clientConfig);

    /**
     * Lists all profile filter links for a profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to retrieve profile filter links for.
     * @param {integer} apiParams.max-results - The maximum number of profile filter links to include in this response.
     * @param {string} apiParams.profileId - (Required) Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
     * @param {integer} apiParams.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} apiParams.webPropertyId - (Required) Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profileFilterLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks', 'GET', apiParams, clientConfig);

    /**
     * Update an existing profile filter link. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to which profile filter link belongs.
     * @param {string} apiParams.linkId - (Required) ID of the profile filter link to be updated.
     * @param {string} apiParams.profileId - (Required) Profile ID to which filter link belongs
     * @param {string} apiParams.webPropertyId - (Required) Web property Id to which profile filter link belongs
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profileFilterLinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'PATCH', apiParams, clientConfig);

    /**
     * Update an existing profile filter link.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to which profile filter link belongs.
     * @param {string} apiParams.linkId - (Required) ID of the profile filter link to be updated.
     * @param {string} apiParams.profileId - (Required) Profile ID to which filter link belongs
     * @param {string} apiParams.webPropertyId - (Required) Web property Id to which profile filter link belongs
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profileFilterLinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'PUT', apiParams, clientConfig);

    this.management.profileUserLinks = {};

    /**
     * Removes a user from the given view (profile).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to delete the user link for.
     * @param {string} apiParams.linkId - (Required) Link ID to delete the user link for.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to delete the user link for.
     * @param {string} apiParams.webPropertyId - (Required) Web Property ID to delete the user link for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profileUserLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}', 'DELETE', apiParams, clientConfig);

    /**
     * Adds a new user to the given view (profile).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to create the user link for.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to create the user link for.
     * @param {string} apiParams.webPropertyId - (Required) Web Property ID to create the user link for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profileUserLinks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks', 'POST', apiParams, clientConfig);

    /**
     * Lists profile-user links for a given view (profile).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID which the given view (profile) belongs to.
     * @param {integer} apiParams.max-results - The maximum number of profile-user links to include in this response.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
     * @param {integer} apiParams.start-index - An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} apiParams.webPropertyId - (Required) Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profileUserLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks', 'GET', apiParams, clientConfig);

    /**
     * Updates permissions for an existing user on the given view (profile).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to update the user link for.
     * @param {string} apiParams.linkId - (Required) Link ID to update the user link for.
     * @param {string} apiParams.profileId - (Required) View (Profile ID) to update the user link for.
     * @param {string} apiParams.webPropertyId - (Required) Web Property ID to update the user link for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profileUserLinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}', 'PUT', apiParams, clientConfig);

    this.management.profiles = {};

    /**
     * Deletes a view (profile).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to delete the view (profile) for.
     * @param {string} apiParams.profileId - (Required) ID of the view (profile) to be deleted.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to delete the view (profile) for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a view (profile) to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to retrieve the view (profile) for.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to retrieve the view (profile) for.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to retrieve the view (profile) for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'GET', apiParams, clientConfig);

    /**
     * Create a new view (profile).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to create the view (profile) for.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to create the view (profile) for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profiles.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles', 'POST', apiParams, clientConfig);

    /**
     * Lists views (profiles) to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
     * @param {integer} apiParams.max-results - The maximum number of views (profiles) to include in this response.
     * @param {integer} apiParams.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing view (profile). This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to which the view (profile) belongs
     * @param {string} apiParams.profileId - (Required) ID of the view (profile) to be updated.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to which the view (profile) belongs
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing view (profile).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to which the view (profile) belongs
     * @param {string} apiParams.profileId - (Required) ID of the view (profile) to be updated.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to which the view (profile) belongs
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.profiles.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'PUT', apiParams, clientConfig);

    this.management.remarketingAudience = {};

    /**
     * Delete a remarketing audience.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to which the remarketing audience belongs.
     * @param {string} apiParams.remarketingAudienceId - (Required) The ID of the remarketing audience to delete.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to which the remarketing audience belongs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.remarketingAudience.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a remarketing audience to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The account ID of the remarketing audience to retrieve.
     * @param {string} apiParams.remarketingAudienceId - (Required) The ID of the remarketing audience to retrieve.
     * @param {string} apiParams.webPropertyId - (Required) The web property ID of the remarketing audience to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.remarketingAudience.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new remarketing audience.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The account ID for which to create the remarketing audience.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID for which to create the remarketing audience.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.remarketingAudience.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences', 'POST', apiParams, clientConfig);

    /**
     * Lists remarketing audiences to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The account ID of the remarketing audiences to retrieve.
     * @param {integer} apiParams.max-results - The maximum number of remarketing audiences to include in this response.
     * @param {integer} apiParams.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} apiParams.type - 
     * @param {string} apiParams.webPropertyId - (Required) The web property ID of the remarketing audiences to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.remarketingAudience.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing remarketing audience. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The account ID of the remarketing audience to update.
     * @param {string} apiParams.remarketingAudienceId - (Required) The ID of the remarketing audience to update.
     * @param {string} apiParams.webPropertyId - (Required) The web property ID of the remarketing audience to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.remarketingAudience.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing remarketing audience.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The account ID of the remarketing audience to update.
     * @param {string} apiParams.remarketingAudienceId - (Required) The ID of the remarketing audience to update.
     * @param {string} apiParams.webPropertyId - (Required) The web property ID of the remarketing audience to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.remarketingAudience.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'PUT', apiParams, clientConfig);

    this.management.segments = {};

    /**
     * Lists segments to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.max-results - The maximum number of segments to include in this response.
     * @param {integer} apiParams.start-index - An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.segments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/segments', 'GET', apiParams, clientConfig);

    this.management.unsampledReports = {};

    /**
     * Deletes an unsampled report.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to delete the unsampled report for.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to delete the unsampled report for.
     * @param {string} apiParams.unsampledReportId - (Required) ID of the unsampled report to be deleted.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to delete the unsampled reports for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.unsampledReports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns a single unsampled report.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to retrieve unsampled report for.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to retrieve unsampled report for.
     * @param {string} apiParams.unsampledReportId - (Required) ID of the unsampled report to retrieve.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to retrieve unsampled reports for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.unsampledReports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}', 'GET', apiParams, clientConfig);

    /**
     * Create a new unsampled report.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to create the unsampled report for.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to create the unsampled report for.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to create the unsampled report for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.unsampledReports.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports', 'POST', apiParams, clientConfig);

    /**
     * Lists unsampled reports to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
     * @param {integer} apiParams.max-results - The maximum number of unsampled reports to include in this response.
     * @param {string} apiParams.profileId - (Required) View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
     * @param {integer} apiParams.start-index - An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.unsampledReports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports', 'GET', apiParams, clientConfig);

    this.management.uploads = {};

    /**
     * Delete data associated with a previous upload.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account Id for the uploads to be deleted.
     * @param {string} apiParams.customDataSourceId - (Required) Custom data source Id for the uploads to be deleted.
     * @param {string} apiParams.webPropertyId - (Required) Web property Id for the uploads to be deleted.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.uploads.deleteUploadData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData', 'POST', apiParams, clientConfig);

    /**
     * List uploads to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account Id for the upload to retrieve.
     * @param {string} apiParams.customDataSourceId - (Required) Custom data source Id for upload to retrieve.
     * @param {string} apiParams.uploadId - (Required) Upload Id to retrieve.
     * @param {string} apiParams.webPropertyId - (Required) Web property Id for the upload to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.uploads.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}', 'GET', apiParams, clientConfig);

    /**
     * List uploads to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account Id for the uploads to retrieve.
     * @param {string} apiParams.customDataSourceId - (Required) Custom data source Id for uploads to retrieve.
     * @param {integer} apiParams.max-results - The maximum number of uploads to include in this response.
     * @param {integer} apiParams.start-index - A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} apiParams.webPropertyId - (Required) Web property Id for the uploads to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.uploads.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads', 'GET', apiParams, clientConfig);

    /**
     * Upload data for a custom data source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account Id associated with the upload.
     * @param {string} apiParams.customDataSourceId - (Required) Custom data source Id to which the data being uploaded belongs.
     * @param {string} apiParams.webPropertyId - (Required) Web property UA-string associated with the upload.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.uploads.uploadData = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads' : 'management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.management.webPropertyAdWordsLinks = {};

    /**
     * Deletes a web property-Google Ads link.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) ID of the account which the given web property belongs to.
     * @param {string} apiParams.webPropertyAdWordsLinkId - (Required) Web property Google Ads link ID.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to delete the Google Ads link for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webPropertyAdWordsLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns a web property-Google Ads link to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) ID of the account which the given web property belongs to.
     * @param {string} apiParams.webPropertyAdWordsLinkId - (Required) Web property-Google Ads link ID.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to retrieve the Google Ads link for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webPropertyAdWordsLinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'GET', apiParams, clientConfig);

    /**
     * Creates a webProperty-Google Ads link.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) ID of the Google Analytics account to create the link for.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to create the link for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webPropertyAdWordsLinks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks', 'POST', apiParams, clientConfig);

    /**
     * Lists webProperty-Google Ads links for a given web property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) ID of the account which the given web property belongs to.
     * @param {integer} apiParams.max-results - The maximum number of webProperty-Google Ads links to include in this response.
     * @param {integer} apiParams.start-index - An index of the first webProperty-Google Ads link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to retrieve the Google Ads links for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webPropertyAdWordsLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing webProperty-Google Ads link. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) ID of the account which the given web property belongs to.
     * @param {string} apiParams.webPropertyAdWordsLinkId - (Required) Web property-Google Ads link ID.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to retrieve the Google Ads link for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webPropertyAdWordsLinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing webProperty-Google Ads link.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) ID of the account which the given web property belongs to.
     * @param {string} apiParams.webPropertyAdWordsLinkId - (Required) Web property-Google Ads link ID.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to retrieve the Google Ads link for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webPropertyAdWordsLinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'PUT', apiParams, clientConfig);

    this.management.webproperties = {};

    /**
     * Gets a web property to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to retrieve the web property for.
     * @param {string} apiParams.webPropertyId - (Required) ID to retrieve the web property for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webproperties.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}', 'GET', apiParams, clientConfig);

    /**
     * Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to create the web property for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webproperties.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties', 'POST', apiParams, clientConfig);

    /**
     * Lists web properties to which the user has access.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     * @param {integer} apiParams.max-results - The maximum number of web properties to include in this response.
     * @param {integer} apiParams.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webproperties.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing web property. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to which the web property belongs
     * @param {string} apiParams.webPropertyId - (Required) Web property ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webproperties.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing web property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to which the web property belongs
     * @param {string} apiParams.webPropertyId - (Required) Web property ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webproperties.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}', 'PUT', apiParams, clientConfig);

    this.management.webpropertyUserLinks = {};

    /**
     * Removes a user from the given web property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to delete the user link for.
     * @param {string} apiParams.linkId - (Required) Link ID to delete the user link for.
     * @param {string} apiParams.webPropertyId - (Required) Web Property ID to delete the user link for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webpropertyUserLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}', 'DELETE', apiParams, clientConfig);

    /**
     * Adds a new user to the given web property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to create the user link for.
     * @param {string} apiParams.webPropertyId - (Required) Web Property ID to create the user link for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webpropertyUserLinks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks', 'POST', apiParams, clientConfig);

    /**
     * Lists webProperty-user links for a given web property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID which the given web property belongs to.
     * @param {integer} apiParams.max-results - The maximum number of webProperty-user Links to include in this response.
     * @param {integer} apiParams.start-index - An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} apiParams.webPropertyId - (Required) Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webpropertyUserLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks', 'GET', apiParams, clientConfig);

    /**
     * Updates permissions for an existing user on the given web property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID to update the account-user link for.
     * @param {string} apiParams.linkId - (Required) Link ID to update the account-user link for.
     * @param {string} apiParams.webPropertyId - (Required) Web property ID to update the account-user link for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.management.webpropertyUserLinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}', 'PUT', apiParams, clientConfig);

    this.metadata = {};

    this.metadata.columns = {};

    /**
     * Lists all columns for a report type
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.reportType - (Required) Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.metadata.columns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('metadata/{reportType}/columns', 'GET', apiParams, clientConfig);

    this.provisioning = {};

    /**
     * Creates an account ticket.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.provisioning.createAccountTicket = async (apiParams = {}, clientConfig = {}) => this._makeRequest('provisioning/createAccountTicket', 'POST', apiParams, clientConfig);

    /**
     * Provision account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.provisioning.createAccountTree = async (apiParams = {}, clientConfig = {}) => this._makeRequest('provisioning/createAccountTree', 'POST', apiParams, clientConfig);

    this.userDeletion = {};

    this.userDeletion.userDeletionRequest = {};

    /**
     * Insert or update a user deletion requests.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.userDeletion.userDeletionRequest.upsert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('userDeletion/userDeletionRequests:upsert', 'POST', apiParams, clientConfig);
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
