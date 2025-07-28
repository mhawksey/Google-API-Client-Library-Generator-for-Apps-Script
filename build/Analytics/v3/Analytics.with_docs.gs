
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://analytics.googleapis.com/';
    this._servicePath = 'analytics/v3/';

    // --- Public Interface Initialization ---

    this.data = {};

    this.data.ga = {};

    /**
     * Returns Analytics data for a view (profile).
     * @param {string} params.dimensions - A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
     * @param {string} params.end-date - (Required) End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
     * @param {string} params.filters - A comma-separated list of dimension or metric filters to be applied to Analytics data.
     * @param {string} params.ids - (Required) Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     * @param {boolean} params.include-empty-rows - The response will include empty rows if this parameter is set to true, the default is true
     * @param {integer} params.max-results - The maximum number of entries to include in this feed.
     * @param {string} params.metrics - (Required) A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
     * @param {string} params.output - The selected format for the response. Default format is JSON.
     * @param {string} params.samplingLevel - The desired sampling level.
     * @param {string} params.segment - An Analytics segment to be applied to data.
     * @param {string} params.sort - A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
     * @param {string} params.start-date - (Required) Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
     * @param {integer} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @return {object} The API response object.
     */
    this.data.ga.get = (params) => this._makeRequest('data/ga', 'GET', params);

    this.data.mcf = {};

    /**
     * Returns Analytics Multi-Channel Funnels data for a view (profile).
     * @param {string} params.dimensions - A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.
     * @param {string} params.end-date - (Required) End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
     * @param {string} params.filters - A comma-separated list of dimension or metric filters to be applied to the Analytics data.
     * @param {string} params.ids - (Required) Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     * @param {integer} params.max-results - The maximum number of entries to include in this feed.
     * @param {string} params.metrics - (Required) A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
     * @param {string} params.samplingLevel - The desired sampling level.
     * @param {string} params.sort - A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.
     * @param {string} params.start-date - (Required) Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
     * @param {integer} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @return {object} The API response object.
     */
    this.data.mcf.get = (params) => this._makeRequest('data/mcf', 'GET', params);

    this.data.realtime = {};

    /**
     * Returns real time data for a view (profile).
     * @param {string} params.dimensions - A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
     * @param {string} params.filters - A comma-separated list of dimension or metric filters to be applied to real time data.
     * @param {string} params.ids - (Required) Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     * @param {integer} params.max-results - The maximum number of entries to include in this feed.
     * @param {string} params.metrics - (Required) A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
     * @param {string} params.sort - A comma-separated list of dimensions or metrics that determine the sort order for real time data.
     * @return {object} The API response object.
     */
    this.data.realtime.get = (params) => this._makeRequest('data/realtime', 'GET', params);

    this.management = {};

    this.management.accountSummaries = {};

    /**
     * Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
     * @param {integer} params.max-results - The maximum number of account summaries to include in this response, where the largest acceptable value is 1000.
     * @param {integer} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @return {object} The API response object.
     */
    this.management.accountSummaries.list = (params) => this._makeRequest('management/accountSummaries', 'GET', params);

    this.management.accountUserLinks = {};

    /**
     * Removes a user from the given account.
     * @param {string} params.accountId - (Required) Account ID to delete the user link for.
     * @param {string} params.linkId - (Required) Link ID to delete the user link for.
     * @return {object} The API response object.
     */
    this.management.accountUserLinks.delete = (params) => this._makeRequest('management/accounts/{accountId}/entityUserLinks/{linkId}', 'DELETE', params);

    /**
     * Adds a new user to the given account.
     * @param {string} params.accountId - (Required) Account ID to create the user link for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.accountUserLinks.insert = (params) => this._makeRequest('management/accounts/{accountId}/entityUserLinks', 'POST', params);

    /**
     * Lists account-user links for a given account.
     * @param {string} params.accountId - (Required) Account ID to retrieve the user links for.
     * @param {integer} params.max-results - The maximum number of account-user links to include in this response.
     * @param {integer} params.start-index - An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @return {object} The API response object.
     */
    this.management.accountUserLinks.list = (params) => this._makeRequest('management/accounts/{accountId}/entityUserLinks', 'GET', params);

    /**
     * Updates permissions for an existing user on the given account.
     * @param {string} params.accountId - (Required) Account ID to update the account-user link for.
     * @param {string} params.linkId - (Required) Link ID to update the account-user link for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.accountUserLinks.update = (params) => this._makeRequest('management/accounts/{accountId}/entityUserLinks/{linkId}', 'PUT', params);

    this.management.accounts = {};

    /**
     * Lists all accounts to which the user has access.
     * @param {integer} params.max-results - The maximum number of accounts to include in this response.
     * @param {integer} params.start-index - An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @return {object} The API response object.
     */
    this.management.accounts.list = (params) => this._makeRequest('management/accounts', 'GET', params);

    this.management.clientId = {};

    /**
     * Hashes the given Client ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.clientId.hashClientId = (params) => this._makeRequest('management/clientId:hashClientId', 'POST', params);

    this.management.customDataSources = {};

    /**
     * List custom data sources to which the user has access.
     * @param {string} params.accountId - (Required) Account Id for the custom data sources to retrieve.
     * @param {integer} params.max-results - The maximum number of custom data sources to include in this response.
     * @param {integer} params.start-index - A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.webPropertyId - (Required) Web property Id for the custom data sources to retrieve.
     * @return {object} The API response object.
     */
    this.management.customDataSources.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources', 'GET', params);

    this.management.customDimensions = {};

    /**
     * Get a custom dimension to which the user has access.
     * @param {string} params.accountId - (Required) Account ID for the custom dimension to retrieve.
     * @param {string} params.customDimensionId - (Required) The ID of the custom dimension to retrieve.
     * @param {string} params.webPropertyId - (Required) Web property ID for the custom dimension to retrieve.
     * @return {object} The API response object.
     */
    this.management.customDimensions.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}', 'GET', params);

    /**
     * Create a new custom dimension.
     * @param {string} params.accountId - (Required) Account ID for the custom dimension to create.
     * @param {string} params.webPropertyId - (Required) Web property ID for the custom dimension to create.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.customDimensions.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions', 'POST', params);

    /**
     * Lists custom dimensions to which the user has access.
     * @param {string} params.accountId - (Required) Account ID for the custom dimensions to retrieve.
     * @param {integer} params.max-results - The maximum number of custom dimensions to include in this response.
     * @param {integer} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.webPropertyId - (Required) Web property ID for the custom dimensions to retrieve.
     * @return {object} The API response object.
     */
    this.management.customDimensions.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions', 'GET', params);

    /**
     * Updates an existing custom dimension. This method supports patch semantics.
     * @param {string} params.accountId - (Required) Account ID for the custom dimension to update.
     * @param {string} params.customDimensionId - (Required) Custom dimension ID for the custom dimension to update.
     * @param {boolean} params.ignoreCustomDataSourceLinks - Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
     * @param {string} params.webPropertyId - (Required) Web property ID for the custom dimension to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.customDimensions.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}', 'PATCH', params);

    /**
     * Updates an existing custom dimension.
     * @param {string} params.accountId - (Required) Account ID for the custom dimension to update.
     * @param {string} params.customDimensionId - (Required) Custom dimension ID for the custom dimension to update.
     * @param {boolean} params.ignoreCustomDataSourceLinks - Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
     * @param {string} params.webPropertyId - (Required) Web property ID for the custom dimension to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.customDimensions.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}', 'PUT', params);

    this.management.customMetrics = {};

    /**
     * Get a custom metric to which the user has access.
     * @param {string} params.accountId - (Required) Account ID for the custom metric to retrieve.
     * @param {string} params.customMetricId - (Required) The ID of the custom metric to retrieve.
     * @param {string} params.webPropertyId - (Required) Web property ID for the custom metric to retrieve.
     * @return {object} The API response object.
     */
    this.management.customMetrics.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}', 'GET', params);

    /**
     * Create a new custom metric.
     * @param {string} params.accountId - (Required) Account ID for the custom metric to create.
     * @param {string} params.webPropertyId - (Required) Web property ID for the custom dimension to create.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.customMetrics.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics', 'POST', params);

    /**
     * Lists custom metrics to which the user has access.
     * @param {string} params.accountId - (Required) Account ID for the custom metrics to retrieve.
     * @param {integer} params.max-results - The maximum number of custom metrics to include in this response.
     * @param {integer} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.webPropertyId - (Required) Web property ID for the custom metrics to retrieve.
     * @return {object} The API response object.
     */
    this.management.customMetrics.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics', 'GET', params);

    /**
     * Updates an existing custom metric. This method supports patch semantics.
     * @param {string} params.accountId - (Required) Account ID for the custom metric to update.
     * @param {string} params.customMetricId - (Required) Custom metric ID for the custom metric to update.
     * @param {boolean} params.ignoreCustomDataSourceLinks - Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
     * @param {string} params.webPropertyId - (Required) Web property ID for the custom metric to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.customMetrics.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}', 'PATCH', params);

    /**
     * Updates an existing custom metric.
     * @param {string} params.accountId - (Required) Account ID for the custom metric to update.
     * @param {string} params.customMetricId - (Required) Custom metric ID for the custom metric to update.
     * @param {boolean} params.ignoreCustomDataSourceLinks - Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
     * @param {string} params.webPropertyId - (Required) Web property ID for the custom metric to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.customMetrics.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}', 'PUT', params);

    this.management.experiments = {};

    /**
     * Delete an experiment.
     * @param {string} params.accountId - (Required) Account ID to which the experiment belongs
     * @param {string} params.experimentId - (Required) ID of the experiment to delete
     * @param {string} params.profileId - (Required) View (Profile) ID to which the experiment belongs
     * @param {string} params.webPropertyId - (Required) Web property ID to which the experiment belongs
     * @return {object} The API response object.
     */
    this.management.experiments.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'DELETE', params);

    /**
     * Returns an experiment to which the user has access.
     * @param {string} params.accountId - (Required) Account ID to retrieve the experiment for.
     * @param {string} params.experimentId - (Required) Experiment ID to retrieve the experiment for.
     * @param {string} params.profileId - (Required) View (Profile) ID to retrieve the experiment for.
     * @param {string} params.webPropertyId - (Required) Web property ID to retrieve the experiment for.
     * @return {object} The API response object.
     */
    this.management.experiments.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'GET', params);

    /**
     * Create a new experiment.
     * @param {string} params.accountId - (Required) Account ID to create the experiment for.
     * @param {string} params.profileId - (Required) View (Profile) ID to create the experiment for.
     * @param {string} params.webPropertyId - (Required) Web property ID to create the experiment for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.experiments.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments', 'POST', params);

    /**
     * Lists experiments to which the user has access.
     * @param {string} params.accountId - (Required) Account ID to retrieve experiments for.
     * @param {integer} params.max-results - The maximum number of experiments to include in this response.
     * @param {string} params.profileId - (Required) View (Profile) ID to retrieve experiments for.
     * @param {integer} params.start-index - An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.webPropertyId - (Required) Web property ID to retrieve experiments for.
     * @return {object} The API response object.
     */
    this.management.experiments.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments', 'GET', params);

    /**
     * Update an existing experiment. This method supports patch semantics.
     * @param {string} params.accountId - (Required) Account ID of the experiment to update.
     * @param {string} params.experimentId - (Required) Experiment ID of the experiment to update.
     * @param {string} params.profileId - (Required) View (Profile) ID of the experiment to update.
     * @param {string} params.webPropertyId - (Required) Web property ID of the experiment to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.experiments.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'PATCH', params);

    /**
     * Update an existing experiment.
     * @param {string} params.accountId - (Required) Account ID of the experiment to update.
     * @param {string} params.experimentId - (Required) Experiment ID of the experiment to update.
     * @param {string} params.profileId - (Required) View (Profile) ID of the experiment to update.
     * @param {string} params.webPropertyId - (Required) Web property ID of the experiment to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.experiments.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'PUT', params);

    this.management.filters = {};

    /**
     * Delete a filter.
     * @param {string} params.accountId - (Required) Account ID to delete the filter for.
     * @param {string} params.filterId - (Required) ID of the filter to be deleted.
     * @return {object} The API response object.
     */
    this.management.filters.delete = (params) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'DELETE', params);

    /**
     * Returns filters to which the user has access.
     * @param {string} params.accountId - (Required) Account ID to retrieve filters for.
     * @param {string} params.filterId - (Required) Filter ID to retrieve filters for.
     * @return {object} The API response object.
     */
    this.management.filters.get = (params) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'GET', params);

    /**
     * Create a new filter.
     * @param {string} params.accountId - (Required) Account ID to create filter for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.filters.insert = (params) => this._makeRequest('management/accounts/{accountId}/filters', 'POST', params);

    /**
     * Lists all filters for an account
     * @param {string} params.accountId - (Required) Account ID to retrieve filters for.
     * @param {integer} params.max-results - The maximum number of filters to include in this response.
     * @param {integer} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @return {object} The API response object.
     */
    this.management.filters.list = (params) => this._makeRequest('management/accounts/{accountId}/filters', 'GET', params);

    /**
     * Updates an existing filter. This method supports patch semantics.
     * @param {string} params.accountId - (Required) Account ID to which the filter belongs.
     * @param {string} params.filterId - (Required) ID of the filter to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.filters.patch = (params) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'PATCH', params);

    /**
     * Updates an existing filter.
     * @param {string} params.accountId - (Required) Account ID to which the filter belongs.
     * @param {string} params.filterId - (Required) ID of the filter to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.filters.update = (params) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'PUT', params);

    this.management.goals = {};

    /**
     * Gets a goal to which the user has access.
     * @param {string} params.accountId - (Required) Account ID to retrieve the goal for.
     * @param {string} params.goalId - (Required) Goal ID to retrieve the goal for.
     * @param {string} params.profileId - (Required) View (Profile) ID to retrieve the goal for.
     * @param {string} params.webPropertyId - (Required) Web property ID to retrieve the goal for.
     * @return {object} The API response object.
     */
    this.management.goals.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}', 'GET', params);

    /**
     * Create a new goal.
     * @param {string} params.accountId - (Required) Account ID to create the goal for.
     * @param {string} params.profileId - (Required) View (Profile) ID to create the goal for.
     * @param {string} params.webPropertyId - (Required) Web property ID to create the goal for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.goals.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals', 'POST', params);

    /**
     * Lists goals to which the user has access.
     * @param {string} params.accountId - (Required) Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     * @param {integer} params.max-results - The maximum number of goals to include in this response.
     * @param {string} params.profileId - (Required) View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
     * @param {integer} params.start-index - An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.webPropertyId - (Required) Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     * @return {object} The API response object.
     */
    this.management.goals.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals', 'GET', params);

    /**
     * Updates an existing goal. This method supports patch semantics.
     * @param {string} params.accountId - (Required) Account ID to update the goal.
     * @param {string} params.goalId - (Required) Index of the goal to be updated.
     * @param {string} params.profileId - (Required) View (Profile) ID to update the goal.
     * @param {string} params.webPropertyId - (Required) Web property ID to update the goal.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.goals.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}', 'PATCH', params);

    /**
     * Updates an existing goal.
     * @param {string} params.accountId - (Required) Account ID to update the goal.
     * @param {string} params.goalId - (Required) Index of the goal to be updated.
     * @param {string} params.profileId - (Required) View (Profile) ID to update the goal.
     * @param {string} params.webPropertyId - (Required) Web property ID to update the goal.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.goals.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}', 'PUT', params);

    this.management.profileFilterLinks = {};

    /**
     * Delete a profile filter link.
     * @param {string} params.accountId - (Required) Account ID to which the profile filter link belongs.
     * @param {string} params.linkId - (Required) ID of the profile filter link to delete.
     * @param {string} params.profileId - (Required) Profile ID to which the filter link belongs.
     * @param {string} params.webPropertyId - (Required) Web property Id to which the profile filter link belongs.
     * @return {object} The API response object.
     */
    this.management.profileFilterLinks.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'DELETE', params);

    /**
     * Returns a single profile filter link.
     * @param {string} params.accountId - (Required) Account ID to retrieve profile filter link for.
     * @param {string} params.linkId - (Required) ID of the profile filter link.
     * @param {string} params.profileId - (Required) Profile ID to retrieve filter link for.
     * @param {string} params.webPropertyId - (Required) Web property Id to retrieve profile filter link for.
     * @return {object} The API response object.
     */
    this.management.profileFilterLinks.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'GET', params);

    /**
     * Create a new profile filter link.
     * @param {string} params.accountId - (Required) Account ID to create profile filter link for.
     * @param {string} params.profileId - (Required) Profile ID to create filter link for.
     * @param {string} params.webPropertyId - (Required) Web property Id to create profile filter link for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.profileFilterLinks.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks', 'POST', params);

    /**
     * Lists all profile filter links for a profile.
     * @param {string} params.accountId - (Required) Account ID to retrieve profile filter links for.
     * @param {integer} params.max-results - The maximum number of profile filter links to include in this response.
     * @param {string} params.profileId - (Required) Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
     * @param {integer} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.webPropertyId - (Required) Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     * @return {object} The API response object.
     */
    this.management.profileFilterLinks.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks', 'GET', params);

    /**
     * Update an existing profile filter link. This method supports patch semantics.
     * @param {string} params.accountId - (Required) Account ID to which profile filter link belongs.
     * @param {string} params.linkId - (Required) ID of the profile filter link to be updated.
     * @param {string} params.profileId - (Required) Profile ID to which filter link belongs
     * @param {string} params.webPropertyId - (Required) Web property Id to which profile filter link belongs
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.profileFilterLinks.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'PATCH', params);

    /**
     * Update an existing profile filter link.
     * @param {string} params.accountId - (Required) Account ID to which profile filter link belongs.
     * @param {string} params.linkId - (Required) ID of the profile filter link to be updated.
     * @param {string} params.profileId - (Required) Profile ID to which filter link belongs
     * @param {string} params.webPropertyId - (Required) Web property Id to which profile filter link belongs
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.profileFilterLinks.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'PUT', params);

    this.management.profileUserLinks = {};

    /**
     * Removes a user from the given view (profile).
     * @param {string} params.accountId - (Required) Account ID to delete the user link for.
     * @param {string} params.linkId - (Required) Link ID to delete the user link for.
     * @param {string} params.profileId - (Required) View (Profile) ID to delete the user link for.
     * @param {string} params.webPropertyId - (Required) Web Property ID to delete the user link for.
     * @return {object} The API response object.
     */
    this.management.profileUserLinks.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}', 'DELETE', params);

    /**
     * Adds a new user to the given view (profile).
     * @param {string} params.accountId - (Required) Account ID to create the user link for.
     * @param {string} params.profileId - (Required) View (Profile) ID to create the user link for.
     * @param {string} params.webPropertyId - (Required) Web Property ID to create the user link for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.profileUserLinks.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks', 'POST', params);

    /**
     * Lists profile-user links for a given view (profile).
     * @param {string} params.accountId - (Required) Account ID which the given view (profile) belongs to.
     * @param {integer} params.max-results - The maximum number of profile-user links to include in this response.
     * @param {string} params.profileId - (Required) View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
     * @param {integer} params.start-index - An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.webPropertyId - (Required) Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     * @return {object} The API response object.
     */
    this.management.profileUserLinks.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks', 'GET', params);

    /**
     * Updates permissions for an existing user on the given view (profile).
     * @param {string} params.accountId - (Required) Account ID to update the user link for.
     * @param {string} params.linkId - (Required) Link ID to update the user link for.
     * @param {string} params.profileId - (Required) View (Profile ID) to update the user link for.
     * @param {string} params.webPropertyId - (Required) Web Property ID to update the user link for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.profileUserLinks.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}', 'PUT', params);

    this.management.profiles = {};

    /**
     * Deletes a view (profile).
     * @param {string} params.accountId - (Required) Account ID to delete the view (profile) for.
     * @param {string} params.profileId - (Required) ID of the view (profile) to be deleted.
     * @param {string} params.webPropertyId - (Required) Web property ID to delete the view (profile) for.
     * @return {object} The API response object.
     */
    this.management.profiles.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'DELETE', params);

    /**
     * Gets a view (profile) to which the user has access.
     * @param {string} params.accountId - (Required) Account ID to retrieve the view (profile) for.
     * @param {string} params.profileId - (Required) View (Profile) ID to retrieve the view (profile) for.
     * @param {string} params.webPropertyId - (Required) Web property ID to retrieve the view (profile) for.
     * @return {object} The API response object.
     */
    this.management.profiles.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'GET', params);

    /**
     * Create a new view (profile).
     * @param {string} params.accountId - (Required) Account ID to create the view (profile) for.
     * @param {string} params.webPropertyId - (Required) Web property ID to create the view (profile) for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.profiles.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles', 'POST', params);

    /**
     * Lists views (profiles) to which the user has access.
     * @param {string} params.accountId - (Required) Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
     * @param {integer} params.max-results - The maximum number of views (profiles) to include in this response.
     * @param {integer} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.webPropertyId - (Required) Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
     * @return {object} The API response object.
     */
    this.management.profiles.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles', 'GET', params);

    /**
     * Updates an existing view (profile). This method supports patch semantics.
     * @param {string} params.accountId - (Required) Account ID to which the view (profile) belongs
     * @param {string} params.profileId - (Required) ID of the view (profile) to be updated.
     * @param {string} params.webPropertyId - (Required) Web property ID to which the view (profile) belongs
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.profiles.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'PATCH', params);

    /**
     * Updates an existing view (profile).
     * @param {string} params.accountId - (Required) Account ID to which the view (profile) belongs
     * @param {string} params.profileId - (Required) ID of the view (profile) to be updated.
     * @param {string} params.webPropertyId - (Required) Web property ID to which the view (profile) belongs
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.profiles.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'PUT', params);

    this.management.remarketingAudience = {};

    /**
     * Delete a remarketing audience.
     * @param {string} params.accountId - (Required) Account ID to which the remarketing audience belongs.
     * @param {string} params.remarketingAudienceId - (Required) The ID of the remarketing audience to delete.
     * @param {string} params.webPropertyId - (Required) Web property ID to which the remarketing audience belongs.
     * @return {object} The API response object.
     */
    this.management.remarketingAudience.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'DELETE', params);

    /**
     * Gets a remarketing audience to which the user has access.
     * @param {string} params.accountId - (Required) The account ID of the remarketing audience to retrieve.
     * @param {string} params.remarketingAudienceId - (Required) The ID of the remarketing audience to retrieve.
     * @param {string} params.webPropertyId - (Required) The web property ID of the remarketing audience to retrieve.
     * @return {object} The API response object.
     */
    this.management.remarketingAudience.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'GET', params);

    /**
     * Creates a new remarketing audience.
     * @param {string} params.accountId - (Required) The account ID for which to create the remarketing audience.
     * @param {string} params.webPropertyId - (Required) Web property ID for which to create the remarketing audience.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.remarketingAudience.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences', 'POST', params);

    /**
     * Lists remarketing audiences to which the user has access.
     * @param {string} params.accountId - (Required) The account ID of the remarketing audiences to retrieve.
     * @param {integer} params.max-results - The maximum number of remarketing audiences to include in this response.
     * @param {integer} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.type - 
     * @param {string} params.webPropertyId - (Required) The web property ID of the remarketing audiences to retrieve.
     * @return {object} The API response object.
     */
    this.management.remarketingAudience.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences', 'GET', params);

    /**
     * Updates an existing remarketing audience. This method supports patch semantics.
     * @param {string} params.accountId - (Required) The account ID of the remarketing audience to update.
     * @param {string} params.remarketingAudienceId - (Required) The ID of the remarketing audience to update.
     * @param {string} params.webPropertyId - (Required) The web property ID of the remarketing audience to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.remarketingAudience.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'PATCH', params);

    /**
     * Updates an existing remarketing audience.
     * @param {string} params.accountId - (Required) The account ID of the remarketing audience to update.
     * @param {string} params.remarketingAudienceId - (Required) The ID of the remarketing audience to update.
     * @param {string} params.webPropertyId - (Required) The web property ID of the remarketing audience to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.remarketingAudience.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'PUT', params);

    this.management.segments = {};

    /**
     * Lists segments to which the user has access.
     * @param {integer} params.max-results - The maximum number of segments to include in this response.
     * @param {integer} params.start-index - An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @return {object} The API response object.
     */
    this.management.segments.list = (params) => this._makeRequest('management/segments', 'GET', params);

    this.management.unsampledReports = {};

    /**
     * Deletes an unsampled report.
     * @param {string} params.accountId - (Required) Account ID to delete the unsampled report for.
     * @param {string} params.profileId - (Required) View (Profile) ID to delete the unsampled report for.
     * @param {string} params.unsampledReportId - (Required) ID of the unsampled report to be deleted.
     * @param {string} params.webPropertyId - (Required) Web property ID to delete the unsampled reports for.
     * @return {object} The API response object.
     */
    this.management.unsampledReports.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}', 'DELETE', params);

    /**
     * Returns a single unsampled report.
     * @param {string} params.accountId - (Required) Account ID to retrieve unsampled report for.
     * @param {string} params.profileId - (Required) View (Profile) ID to retrieve unsampled report for.
     * @param {string} params.unsampledReportId - (Required) ID of the unsampled report to retrieve.
     * @param {string} params.webPropertyId - (Required) Web property ID to retrieve unsampled reports for.
     * @return {object} The API response object.
     */
    this.management.unsampledReports.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}', 'GET', params);

    /**
     * Create a new unsampled report.
     * @param {string} params.accountId - (Required) Account ID to create the unsampled report for.
     * @param {string} params.profileId - (Required) View (Profile) ID to create the unsampled report for.
     * @param {string} params.webPropertyId - (Required) Web property ID to create the unsampled report for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.unsampledReports.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports', 'POST', params);

    /**
     * Lists unsampled reports to which the user has access.
     * @param {string} params.accountId - (Required) Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
     * @param {integer} params.max-results - The maximum number of unsampled reports to include in this response.
     * @param {string} params.profileId - (Required) View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
     * @param {integer} params.start-index - An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.webPropertyId - (Required) Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
     * @return {object} The API response object.
     */
    this.management.unsampledReports.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports', 'GET', params);

    this.management.uploads = {};

    /**
     * Delete data associated with a previous upload.
     * @param {string} params.accountId - (Required) Account Id for the uploads to be deleted.
     * @param {string} params.customDataSourceId - (Required) Custom data source Id for the uploads to be deleted.
     * @param {string} params.webPropertyId - (Required) Web property Id for the uploads to be deleted.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.uploads.deleteUploadData = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData', 'POST', params);

    /**
     * List uploads to which the user has access.
     * @param {string} params.accountId - (Required) Account Id for the upload to retrieve.
     * @param {string} params.customDataSourceId - (Required) Custom data source Id for upload to retrieve.
     * @param {string} params.uploadId - (Required) Upload Id to retrieve.
     * @param {string} params.webPropertyId - (Required) Web property Id for the upload to retrieve.
     * @return {object} The API response object.
     */
    this.management.uploads.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}', 'GET', params);

    /**
     * List uploads to which the user has access.
     * @param {string} params.accountId - (Required) Account Id for the uploads to retrieve.
     * @param {string} params.customDataSourceId - (Required) Custom data source Id for uploads to retrieve.
     * @param {integer} params.max-results - The maximum number of uploads to include in this response.
     * @param {integer} params.start-index - A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.webPropertyId - (Required) Web property Id for the uploads to retrieve.
     * @return {object} The API response object.
     */
    this.management.uploads.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads', 'GET', params);

    /**
     * Upload data for a custom data source.
     * @param {string} params.accountId - (Required) Account Id associated with the upload.
     * @param {string} params.customDataSourceId - (Required) Custom data source Id to which the data being uploaded belongs.
     * @param {string} params.webPropertyId - (Required) Web property UA-string associated with the upload.
     * @return {object} The API response object.
     */
    this.management.uploads.uploadData = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads', 'POST', params);

    this.management.webPropertyAdWordsLinks = {};

    /**
     * Deletes a web property-Google Ads link.
     * @param {string} params.accountId - (Required) ID of the account which the given web property belongs to.
     * @param {string} params.webPropertyAdWordsLinkId - (Required) Web property Google Ads link ID.
     * @param {string} params.webPropertyId - (Required) Web property ID to delete the Google Ads link for.
     * @return {object} The API response object.
     */
    this.management.webPropertyAdWordsLinks.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'DELETE', params);

    /**
     * Returns a web property-Google Ads link to which the user has access.
     * @param {string} params.accountId - (Required) ID of the account which the given web property belongs to.
     * @param {string} params.webPropertyAdWordsLinkId - (Required) Web property-Google Ads link ID.
     * @param {string} params.webPropertyId - (Required) Web property ID to retrieve the Google Ads link for.
     * @return {object} The API response object.
     */
    this.management.webPropertyAdWordsLinks.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'GET', params);

    /**
     * Creates a webProperty-Google Ads link.
     * @param {string} params.accountId - (Required) ID of the Google Analytics account to create the link for.
     * @param {string} params.webPropertyId - (Required) Web property ID to create the link for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.webPropertyAdWordsLinks.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks', 'POST', params);

    /**
     * Lists webProperty-Google Ads links for a given web property.
     * @param {string} params.accountId - (Required) ID of the account which the given web property belongs to.
     * @param {integer} params.max-results - The maximum number of webProperty-Google Ads links to include in this response.
     * @param {integer} params.start-index - An index of the first webProperty-Google Ads link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.webPropertyId - (Required) Web property ID to retrieve the Google Ads links for.
     * @return {object} The API response object.
     */
    this.management.webPropertyAdWordsLinks.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks', 'GET', params);

    /**
     * Updates an existing webProperty-Google Ads link. This method supports patch semantics.
     * @param {string} params.accountId - (Required) ID of the account which the given web property belongs to.
     * @param {string} params.webPropertyAdWordsLinkId - (Required) Web property-Google Ads link ID.
     * @param {string} params.webPropertyId - (Required) Web property ID to retrieve the Google Ads link for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.webPropertyAdWordsLinks.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'PATCH', params);

    /**
     * Updates an existing webProperty-Google Ads link.
     * @param {string} params.accountId - (Required) ID of the account which the given web property belongs to.
     * @param {string} params.webPropertyAdWordsLinkId - (Required) Web property-Google Ads link ID.
     * @param {string} params.webPropertyId - (Required) Web property ID to retrieve the Google Ads link for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.webPropertyAdWordsLinks.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'PUT', params);

    this.management.webproperties = {};

    /**
     * Gets a web property to which the user has access.
     * @param {string} params.accountId - (Required) Account ID to retrieve the web property for.
     * @param {string} params.webPropertyId - (Required) ID to retrieve the web property for.
     * @return {object} The API response object.
     */
    this.management.webproperties.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}', 'GET', params);

    /**
     * Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
     * @param {string} params.accountId - (Required) Account ID to create the web property for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.webproperties.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties', 'POST', params);

    /**
     * Lists web properties to which the user has access.
     * @param {string} params.accountId - (Required) Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     * @param {integer} params.max-results - The maximum number of web properties to include in this response.
     * @param {integer} params.start-index - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @return {object} The API response object.
     */
    this.management.webproperties.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties', 'GET', params);

    /**
     * Updates an existing web property. This method supports patch semantics.
     * @param {string} params.accountId - (Required) Account ID to which the web property belongs
     * @param {string} params.webPropertyId - (Required) Web property ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.webproperties.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}', 'PATCH', params);

    /**
     * Updates an existing web property.
     * @param {string} params.accountId - (Required) Account ID to which the web property belongs
     * @param {string} params.webPropertyId - (Required) Web property ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.webproperties.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}', 'PUT', params);

    this.management.webpropertyUserLinks = {};

    /**
     * Removes a user from the given web property.
     * @param {string} params.accountId - (Required) Account ID to delete the user link for.
     * @param {string} params.linkId - (Required) Link ID to delete the user link for.
     * @param {string} params.webPropertyId - (Required) Web Property ID to delete the user link for.
     * @return {object} The API response object.
     */
    this.management.webpropertyUserLinks.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}', 'DELETE', params);

    /**
     * Adds a new user to the given web property.
     * @param {string} params.accountId - (Required) Account ID to create the user link for.
     * @param {string} params.webPropertyId - (Required) Web Property ID to create the user link for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.webpropertyUserLinks.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks', 'POST', params);

    /**
     * Lists webProperty-user links for a given web property.
     * @param {string} params.accountId - (Required) Account ID which the given web property belongs to.
     * @param {integer} params.max-results - The maximum number of webProperty-user Links to include in this response.
     * @param {integer} params.start-index - An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     * @param {string} params.webPropertyId - (Required) Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     * @return {object} The API response object.
     */
    this.management.webpropertyUserLinks.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks', 'GET', params);

    /**
     * Updates permissions for an existing user on the given web property.
     * @param {string} params.accountId - (Required) Account ID to update the account-user link for.
     * @param {string} params.linkId - (Required) Link ID to update the account-user link for.
     * @param {string} params.webPropertyId - (Required) Web property ID to update the account-user link for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.management.webpropertyUserLinks.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}', 'PUT', params);

    this.metadata = {};

    this.metadata.columns = {};

    /**
     * Lists all columns for a report type
     * @param {string} params.reportType - (Required) Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API
     * @return {object} The API response object.
     */
    this.metadata.columns.list = (params) => this._makeRequest('metadata/{reportType}/columns', 'GET', params);

    this.provisioning = {};

    /**
     * Creates an account ticket.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.provisioning.createAccountTicket = (params) => this._makeRequest('provisioning/createAccountTicket', 'POST', params);

    /**
     * Provision account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.provisioning.createAccountTree = (params) => this._makeRequest('provisioning/createAccountTree', 'POST', params);

    this.userDeletion = {};

    this.userDeletion.userDeletionRequest = {};

    /**
     * Insert or update a user deletion requests.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.userDeletion.userDeletionRequest.upsert = (params) => this._makeRequest('userDeletion/userDeletionRequests:upsert', 'POST', params);
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
