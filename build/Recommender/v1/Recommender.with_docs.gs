
/**
 * Google Apps Script client library for the Recommender API
 * Documentation URL: https://cloud.google.com/recommender/docs/
 * @class
 */
class Recommender {
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
    this._rootUrl = 'https://recommender.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.recommenders = {};

    /**
     * Gets the requested Recommender Config. There is only one instance of the config for each Recommender.
     * @param {string} params.name - (Required) Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config`
     * @return {object} The API response object.
     */
    this.projects.locations.recommenders.getConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a Recommender Config. This will create a new revision of the config.
     * @param {string} params.name - (Required) Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {boolean} params.validateOnly - If true, validate the request and preview the change, but do not actually update it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.recommenders.updateConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.recommenders.recommendations = {};

    /**
     * Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
     * @param {string} params.filter - Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} params.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     * @return {object} The API response object.
     */
    this.projects.locations.recommenders.recommendations.list = (params) => this._makeRequest('v1/{+parent}/recommendations', 'GET', params);

    /**
     * Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @return {object} The API response object.
     */
    this.projects.locations.recommenders.recommendations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.recommenders.recommendations.markDismissed = (params) => this._makeRequest('v1/{+name}:markDismissed', 'POST', params);

    /**
     * Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.recommenders.recommendations.markClaimed = (params) => this._makeRequest('v1/{+name}:markClaimed', 'POST', params);

    /**
     * Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.recommenders.recommendations.markSucceeded = (params) => this._makeRequest('v1/{+name}:markSucceeded', 'POST', params);

    /**
     * Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.recommenders.recommendations.markFailed = (params) => this._makeRequest('v1/{+name}:markFailed', 'POST', params);

    this.projects.locations.insightTypes = {};

    /**
     * Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.
     * @param {string} params.name - (Required) Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config`
     * @return {object} The API response object.
     */
    this.projects.locations.insightTypes.getConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates an InsightTypeConfig change. This will create a new revision of the config.
     * @param {string} params.name - (Required) Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {boolean} params.validateOnly - If true, validate the request and preview the change, but do not actually update it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.insightTypes.updateConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.insightTypes.insights = {};

    /**
     * Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
     * @param {string} params.filter - Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} params.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     * @return {object} The API response object.
     */
    this.projects.locations.insightTypes.insights.list = (params) => this._makeRequest('v1/{+parent}/insights', 'GET', params);

    /**
     * Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.
     * @param {string} params.name - (Required) Required. Name of the insight.
     * @return {object} The API response object.
     */
    this.projects.locations.insightTypes.insights.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
     * @param {string} params.name - (Required) Required. Name of the insight.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.insightTypes.insights.markAccepted = (params) => this._makeRequest('v1/{+name}:markAccepted', 'POST', params);

    this.billingAccounts = {};

    this.billingAccounts.locations = {};

    this.billingAccounts.locations.recommenders = {};

    /**
     * Gets the requested Recommender Config. There is only one instance of the config for each Recommender.
     * @param {string} params.name - (Required) Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config`
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.recommenders.getConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a Recommender Config. This will create a new revision of the config.
     * @param {string} params.name - (Required) Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {boolean} params.validateOnly - If true, validate the request and preview the change, but do not actually update it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.recommenders.updateConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.billingAccounts.locations.recommenders.recommendations = {};

    /**
     * Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
     * @param {string} params.filter - Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} params.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.recommenders.recommendations.list = (params) => this._makeRequest('v1/{+parent}/recommendations', 'GET', params);

    /**
     * Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.recommenders.recommendations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.recommenders.recommendations.markDismissed = (params) => this._makeRequest('v1/{+name}:markDismissed', 'POST', params);

    /**
     * Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.recommenders.recommendations.markClaimed = (params) => this._makeRequest('v1/{+name}:markClaimed', 'POST', params);

    /**
     * Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.recommenders.recommendations.markSucceeded = (params) => this._makeRequest('v1/{+name}:markSucceeded', 'POST', params);

    /**
     * Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.recommenders.recommendations.markFailed = (params) => this._makeRequest('v1/{+name}:markFailed', 'POST', params);

    this.billingAccounts.locations.insightTypes = {};

    /**
     * Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.
     * @param {string} params.name - (Required) Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config`
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.insightTypes.getConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates an InsightTypeConfig change. This will create a new revision of the config.
     * @param {string} params.name - (Required) Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {boolean} params.validateOnly - If true, validate the request and preview the change, but do not actually update it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.insightTypes.updateConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.billingAccounts.locations.insightTypes.insights = {};

    /**
     * Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
     * @param {string} params.filter - Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} params.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.insightTypes.insights.list = (params) => this._makeRequest('v1/{+parent}/insights', 'GET', params);

    /**
     * Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.
     * @param {string} params.name - (Required) Required. Name of the insight.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.insightTypes.insights.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
     * @param {string} params.name - (Required) Required. Name of the insight.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.billingAccounts.locations.insightTypes.insights.markAccepted = (params) => this._makeRequest('v1/{+name}:markAccepted', 'POST', params);

    this.folders = {};

    this.folders.locations = {};

    this.folders.locations.insightTypes = {};

    this.folders.locations.insightTypes.insights = {};

    /**
     * Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
     * @param {string} params.filter - Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} params.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     * @return {object} The API response object.
     */
    this.folders.locations.insightTypes.insights.list = (params) => this._makeRequest('v1/{+parent}/insights', 'GET', params);

    /**
     * Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.
     * @param {string} params.name - (Required) Required. Name of the insight.
     * @return {object} The API response object.
     */
    this.folders.locations.insightTypes.insights.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
     * @param {string} params.name - (Required) Required. Name of the insight.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.insightTypes.insights.markAccepted = (params) => this._makeRequest('v1/{+name}:markAccepted', 'POST', params);

    this.folders.locations.recommenders = {};

    this.folders.locations.recommenders.recommendations = {};

    /**
     * Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
     * @param {string} params.filter - Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} params.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     * @return {object} The API response object.
     */
    this.folders.locations.recommenders.recommendations.list = (params) => this._makeRequest('v1/{+parent}/recommendations', 'GET', params);

    /**
     * Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @return {object} The API response object.
     */
    this.folders.locations.recommenders.recommendations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.recommenders.recommendations.markDismissed = (params) => this._makeRequest('v1/{+name}:markDismissed', 'POST', params);

    /**
     * Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.recommenders.recommendations.markClaimed = (params) => this._makeRequest('v1/{+name}:markClaimed', 'POST', params);

    /**
     * Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.recommenders.recommendations.markSucceeded = (params) => this._makeRequest('v1/{+name}:markSucceeded', 'POST', params);

    /**
     * Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.recommenders.recommendations.markFailed = (params) => this._makeRequest('v1/{+name}:markFailed', 'POST', params);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.recommenders = {};

    /**
     * Gets the requested Recommender Config. There is only one instance of the config for each Recommender.
     * @param {string} params.name - (Required) Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config`
     * @return {object} The API response object.
     */
    this.organizations.locations.recommenders.getConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a Recommender Config. This will create a new revision of the config.
     * @param {string} params.name - (Required) Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {boolean} params.validateOnly - If true, validate the request and preview the change, but do not actually update it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.recommenders.updateConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.locations.recommenders.recommendations = {};

    /**
     * Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
     * @param {string} params.filter - Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} params.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     * @return {object} The API response object.
     */
    this.organizations.locations.recommenders.recommendations.list = (params) => this._makeRequest('v1/{+parent}/recommendations', 'GET', params);

    /**
     * Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @return {object} The API response object.
     */
    this.organizations.locations.recommenders.recommendations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.recommenders.recommendations.markDismissed = (params) => this._makeRequest('v1/{+name}:markDismissed', 'POST', params);

    /**
     * Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED, SUCCEEDED, FAILED, or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.recommenders.recommendations.markClaimed = (params) => this._makeRequest('v1/{+name}:markClaimed', 'POST', params);

    /**
     * Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.recommenders.recommendations.markSucceeded = (params) => this._makeRequest('v1/{+name}:markSucceeded', 'POST', params);

    /**
     * Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {string} params.name - (Required) Required. Name of the recommendation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.recommenders.recommendations.markFailed = (params) => this._makeRequest('v1/{+name}:markFailed', 'POST', params);

    this.organizations.locations.insightTypes = {};

    /**
     * Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.
     * @param {string} params.name - (Required) Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config`
     * @return {object} The API response object.
     */
    this.organizations.locations.insightTypes.getConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates an InsightTypeConfig change. This will create a new revision of the config.
     * @param {string} params.name - (Required) Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {boolean} params.validateOnly - If true, validate the request and preview the change, but do not actually update it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.insightTypes.updateConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.locations.insightTypes.insights = {};

    /**
     * Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
     * @param {string} params.filter - Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} params.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     * @return {object} The API response object.
     */
    this.organizations.locations.insightTypes.insights.list = (params) => this._makeRequest('v1/{+parent}/insights', 'GET', params);

    /**
     * Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.
     * @param {string} params.name - (Required) Required. Name of the insight.
     * @return {object} The API response object.
     */
    this.organizations.locations.insightTypes.insights.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
     * @param {string} params.name - (Required) Required. Name of the insight.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.insightTypes.insights.markAccepted = (params) => this._makeRequest('v1/{+name}:markAccepted', 'POST', params);
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
