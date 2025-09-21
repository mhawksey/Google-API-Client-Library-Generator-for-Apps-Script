
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://recommender.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists locations with recommendations or insights.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} apiParams.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/locations', 'GET', apiParams, clientConfig);

    this.projects.locations.recommenders = {};

    /**
     * Gets the requested Recommender Config. There is only one instance of the config for each Recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.recommenders.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a Recommender Config. This will create a new revision of the config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {boolean} apiParams.validateOnly - If true, validate the request and preview the change, but do not actually update it.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.recommenders.updateConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.recommenders.recommendations = {};

    /**
     * Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} apiParams.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} apiParams.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} apiParams.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.recommenders.recommendations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/recommendations', 'GET', apiParams, clientConfig);

    /**
     * Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.recommenders.recommendations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.recommenders.recommendations.markDismissed = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markDismissed', 'POST', apiParams, clientConfig);

    /**
     * Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.recommenders.recommendations.markClaimed = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markClaimed', 'POST', apiParams, clientConfig);

    /**
     * Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.recommenders.recommendations.markSucceeded = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markSucceeded', 'POST', apiParams, clientConfig);

    /**
     * Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.recommenders.recommendations.markFailed = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markFailed', 'POST', apiParams, clientConfig);

    this.projects.locations.insightTypes = {};

    /**
     * Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.insightTypes.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates an InsightTypeConfig change. This will create a new revision of the config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {boolean} apiParams.validateOnly - If true, validate the request and preview the change, but do not actually update it.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.insightTypes.updateConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.insightTypes.insights = {};

    /**
     * Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} apiParams.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} apiParams.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} apiParams.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.insightTypes.insights.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/insights', 'GET', apiParams, clientConfig);

    /**
     * Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the insight.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.insightTypes.insights.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the insight.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.insightTypes.insights.markAccepted = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markAccepted', 'POST', apiParams, clientConfig);

    this.billingAccounts = {};

    this.billingAccounts.locations = {};

    /**
     * Lists locations with recommendations or insights.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} apiParams.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/locations', 'GET', apiParams, clientConfig);

    this.billingAccounts.locations.recommenders = {};

    /**
     * Gets the requested Recommender Config. There is only one instance of the config for each Recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.locations.recommenders.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a Recommender Config. This will create a new revision of the config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {boolean} apiParams.validateOnly - If true, validate the request and preview the change, but do not actually update it.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.locations.recommenders.updateConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.billingAccounts.locations.recommenders.recommendations = {};

    /**
     * Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} apiParams.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} apiParams.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} apiParams.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.locations.recommenders.recommendations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/recommendations', 'GET', apiParams, clientConfig);

    /**
     * Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.locations.recommenders.recommendations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.locations.recommenders.recommendations.markDismissed = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markDismissed', 'POST', apiParams, clientConfig);

    /**
     * Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.locations.recommenders.recommendations.markClaimed = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markClaimed', 'POST', apiParams, clientConfig);

    /**
     * Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.locations.recommenders.recommendations.markSucceeded = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markSucceeded', 'POST', apiParams, clientConfig);

    /**
     * Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.locations.recommenders.recommendations.markFailed = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markFailed', 'POST', apiParams, clientConfig);

    this.billingAccounts.locations.insightTypes = {};

    /**
     * Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.locations.insightTypes.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates an InsightTypeConfig change. This will create a new revision of the config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {boolean} apiParams.validateOnly - If true, validate the request and preview the change, but do not actually update it.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.locations.insightTypes.updateConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.billingAccounts.locations.insightTypes.insights = {};

    /**
     * Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} apiParams.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} apiParams.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} apiParams.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.locations.insightTypes.insights.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/insights', 'GET', apiParams, clientConfig);

    /**
     * Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the insight.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.locations.insightTypes.insights.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the insight.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.locations.insightTypes.insights.markAccepted = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markAccepted', 'POST', apiParams, clientConfig);

    this.folders = {};

    this.folders.locations = {};

    /**
     * Lists locations with recommendations or insights.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} apiParams.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/locations', 'GET', apiParams, clientConfig);

    this.folders.locations.insightTypes = {};

    this.folders.locations.insightTypes.insights = {};

    /**
     * Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} apiParams.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} apiParams.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} apiParams.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.insightTypes.insights.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/insights', 'GET', apiParams, clientConfig);

    /**
     * Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the insight.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.insightTypes.insights.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the insight.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.insightTypes.insights.markAccepted = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markAccepted', 'POST', apiParams, clientConfig);

    this.folders.locations.recommenders = {};

    this.folders.locations.recommenders.recommendations = {};

    /**
     * Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} apiParams.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} apiParams.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} apiParams.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.recommenders.recommendations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/recommendations', 'GET', apiParams, clientConfig);

    /**
     * Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.recommenders.recommendations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.recommenders.recommendations.markDismissed = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markDismissed', 'POST', apiParams, clientConfig);

    /**
     * Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.recommenders.recommendations.markClaimed = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markClaimed', 'POST', apiParams, clientConfig);

    /**
     * Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.recommenders.recommendations.markSucceeded = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markSucceeded', 'POST', apiParams, clientConfig);

    /**
     * Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.recommenders.recommendations.markFailed = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markFailed', 'POST', apiParams, clientConfig);

    this.organizations = {};

    this.organizations.locations = {};

    /**
     * Lists locations with recommendations or insights.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} apiParams.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/locations', 'GET', apiParams, clientConfig);

    this.organizations.locations.recommenders = {};

    /**
     * Gets the requested Recommender Config. There is only one instance of the config for each Recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the Recommendation Config to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.recommenders.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a Recommender Config. This will create a new revision of the config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Name of recommender config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]/config
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {boolean} apiParams.validateOnly - If true, validate the request and preview the change, but do not actually update it.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.recommenders.updateConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.locations.recommenders.recommendations = {};

    /**
     * Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Filter expression to restrict the recommendations returned. Supported filter fields: * `state_info.state` * `recommenderSubtype` * `priority` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE` * `priority = P1 OR priority = P2` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} apiParams.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} apiParams.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} apiParams.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ RECOMMENDER_ID refers to supported recommenders: https://cloud.google.com/recommender/docs/recommenders.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.recommenders.recommendations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/recommendations', 'GET', apiParams, clientConfig);

    /**
     * Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.recommenders.recommendations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Mark the Recommendation State as Dismissed. Users can use this method to indicate to the Recommender API that an ACTIVE recommendation has to be marked back as DISMISSED. MarkRecommendationDismissed can be applied to recommendations in ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.recommenders.recommendations.markDismissed = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markDismissed', 'POST', apiParams, clientConfig);

    /**
     * Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.recommenders.recommendations.markClaimed = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markClaimed', 'POST', apiParams, clientConfig);

    /**
     * Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.recommenders.recommendations.markSucceeded = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markSucceeded', 'POST', apiParams, clientConfig);

    /**
     * Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the recommendation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.recommenders.recommendations.markFailed = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markFailed', 'POST', apiParams, clientConfig);

    this.organizations.locations.insightTypes = {};

    /**
     * Gets the requested InsightTypeConfig. There is only one instance of the config for each InsightType.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the InsightTypeConfig to get. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.insightTypes.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates an InsightTypeConfig change. This will create a new revision of the config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Name of insight type config. Eg, projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]/config
     * @param {string} apiParams.updateMask - The list of fields to be updated.
     * @param {boolean} apiParams.validateOnly - If true, validate the request and preview the change, but do not actually update it.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.insightTypes.updateConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.locations.insightTypes.insights = {};

    /**
     * Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter expression to restrict the insights returned. Supported filter fields: * `stateInfo.state` * `insightSubtype` * `severity` * `targetResources` Examples: * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED` * `insightSubtype = PERMISSIONS_USAGE` * `severity = CRITICAL OR severity = HIGH` * `targetResources : //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1` * `stateInfo.state = ACTIVE AND (severity = CRITICAL OR severity = HIGH)` The max allowed filter length is 500 characters. (These expressions are based on the filter language described at https://google.aip.dev/160)
     * @param {integer} apiParams.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. If not specified, the server will determine the number of results to return.
     * @param {string} apiParams.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
     * @param {string} apiParams.parent - (Required) Required. The container resource on which to execute the request. Acceptable formats: * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `projects/[PROJECT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `folders/[FOLDER_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/insightTypes/[INSIGHT_TYPE_ID]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/ INSIGHT_TYPE_ID refers to supported insight types: https://cloud.google.com/recommender/docs/insights/insight-types.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.insightTypes.insights.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/insights', 'GET', apiParams, clientConfig);

    /**
     * Gets the requested insight. Requires the recommender.*.get IAM permission for the specified insight type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the insight.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.insightTypes.insights.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the insight.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.insightTypes.insights.markAccepted = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:markAccepted', 'POST', apiParams, clientConfig);

    this.recommenders = {};

    /**
     * Lists all available Recommenders. No IAM permissions are required.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The number of RecommenderTypes to return per page. The service may return fewer than this value.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListRecommenders` call. Provide this to retrieve the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.recommenders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/recommenders', 'GET', apiParams, clientConfig);

    this.insightTypes = {};

    /**
     * Lists available InsightTypes. No IAM permissions are required.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The number of InsightTypes to return per page. The service may return fewer than this value.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListRecommenders` call. Provide this to retrieve the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.insightTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/insightTypes', 'GET', apiParams, clientConfig);
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
